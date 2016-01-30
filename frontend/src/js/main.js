window.jQuery = require('jquery');
var doT = require('dot');
var yawp = require('yawp-cli');
var sanitize = require('google-caja-sanitizer').sanitize;
var cookies = require('js-cookie');
var sha256 = require('js-sha256');

//cookies.set('auth', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');

window.jQuery(function ($) {

    var postTemplateFnc = doT.template($('#post-template').html());
    var textTemplateFnc = function (it) {
        return $(sanitize('<p>' + it.content + '</p>'));
    };
    var videoTemplateFnc = doT.template($('#post-template-video').html());
    var pictureTemplateFnc = doT.template($('#post-template-picture').html());
    var novoMuralTemplateFnc = doT.template($('#novo-mural-template').html());

    var handlers = {
        'TEXTO': textTemplateFnc,
        'VIDEO': videoTemplateFnc,
        'FOTO': pictureTemplateFnc
    };

    var textColors = {
        '#333333': '#fff',
        '#f0f0f0': '#555',
        '#c0c3d5': '#333',
        '#5fa1e0': '#000',
        '#c1d5c0': '#888',
        '#47ae73': '#fff',
        '#eae7c4': '#000',
        '#fb6964': '#000'
    };

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function getBackgroundColor(el) {
        return rgb2hex($(el).css('background-color'));
    }

    function fixWallFontColor(el) {
        var color = getBackgroundColor(el);
        var textcolor = textColors[color];
        $(el).css('color', textcolor);
        $(el).find('h1').css('color', textcolor);
    }

    function fixCardFontColor(el) {
        var color = getBackgroundColor(el);
        var textcolor = textColors[color];
        $(el).css('color', textcolor);
        $(el).find('h3').css('color', textcolor);
    }

    function createCard(post) {
        var contentFnc = handlers[post.tipo];

        var content = $(contentFnc({
            content: post.conteudo
        }));

        var card = $(postTemplateFnc({
            title: post.titulo,
            id: post.id
        }));

        card.find('.card-content').append(content);
        card.css('background-color', post.color);

        card.on('change', function () {
            fixCardFontColor(this);
            var color = getBackgroundColor(this);
            yawp(post.id).patch({
                color: color
            });
        });
        $('#mural').append(card);

        fixCardFontColor(card);
    }

    function loadMural(muralId) {
        $('.mural-container').on('change', function () {
            fixWallFontColor(this);
            var color = getBackgroundColor(this);
            yawp(muralId).patch({
                color: color
            });
        });

        $('#newPost').on('click', function () {
            window.location.href += '/post';
        });

        $('.delete').on('click', function () {
            var post = $(this).closest('.post');
            var id = post.data('post-id');
            post.remove();
            yawp.destroy(id);
        });

        fixWallFontColor($('.mural-container'));
        yawp('/posts').params({
            'mural': muralId.replace('/murais/', '')
        }).list(function (posts) {
            posts.forEach(createCard);
            $('.removeBtn').click(function () {
                var post = $(this).closest('.post');
                var id = post.data('post-id');
                yawp(id).destroy();
                post.remove();
            });
        });
    }

    function getMuralId() {
        var pathArray = window.location.pathname.split('/');
        return '/murais/' + pathArray[1];
    }

    function configuraElementosNovoPost(toggle) {
        $('.customizer').toggle(toggle);
        $('#newPost').toggle(toggle);
    }

    function novoMural(muralId) {
        cookies.remove('auth');

        $('#titulo').html('Novo Mural');
        configuraElementosNovoPost(false);

        var novoMuralForm = $(novoMuralTemplateFnc());
        $('#mural').html(novoMuralForm);
        $('#titulo-novo-mural').focus();

        $('#botao-novo-mural').click(function () {
            var mural = {
                id: muralId,
                nome: $('#titulo-novo-mural').val(),
                senha: sha256($('#senha').val())
            };

            yawp(muralId).create(mural).done(function () {
                console.log('salvou');
            });
        });
    }

    function load() {
        var muralId = getMuralId();
        console.log('mid', muralId);
        yawp(muralId).get('exists').done(function (exists) {
            if (exists) {
                yawp(muralId).fetch(function (mural) {
                    configuraElementosNovoPost(true);
                    $('#titulo').html(mural.nome);
                    $('.mural-container').css('background-color', mural.color);
                    loadMural(muralId);
                }).fail(function () {
                    console.log('senha invalida?');
                });
            } else {
                novoMural(muralId);
            }
        });
    }

    function addSortEvent() {
        $(function () {
            $('#mural').sortable({
                onEnd: function (evt) {
                    $('.post').each(function (i, el) {
                        var id = $(el).data('post-id');
                        yawp(id).patch({
                            order: i
                        });
                    });
                }
            });
        });
    }

    load();
    addSortEvent();
});