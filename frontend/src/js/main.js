window.jQuery = require('jquery');
var doT = require('dot');
var yawp = require('yawp-cli');

window.jQuery(function($) {
    
    var postTemplateFnc = doT.template($('#post-template').html());
    var textTemplateFnc = doT.template($('#post-template-text').html());
    var videoTemplateFnc = doT.template($('#post-template-video').html());
    var pictureTemplateFnc = doT.template($('#post-template-picture').html());
    
    var handlers = {
        'TEXTO' : textTemplateFnc,
        'VIDEO' : videoTemplateFnc,
        'FOTO': pictureTemplateFnc
    };
    
    var textColors = {
        '#333333' : '#fff',
        '#f0f0f0' : '#555',
        '#c0c3d5' : '#333',
        '#5FA1E0' : '#777',
        '#c1d5c0' : '#888',
        '#47AE73' : '#fff',
        '#eae7c4' : '#000',
        '#FB6964' : '#000'
    };

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
    
    function fixFontColor(el) {
        var color = rgb2hex($(el).css('background-color'));
        var textcolor = textColors[color];
        $(el).css('color', textcolor);
        $(el).find('h3').css('color', textcolor);
    }

    function createCard(post) {
        var contentFnc = handlers[post.tipo];
        var content = $(contentFnc({content: post.conteudo}));
        
        var card = $(postTemplateFnc({title: post.titulo}));
        card.find('.card-content').append(content);
        card.css('background-color', post.color);
        
        card.on('change', function () {
            fixFontColor(this);
            var color = rgb2hex($(this).css('background-color'));
            yawp(post.id).patch({ color : color });
        });
        $('#mural').append(card);
        
        fixFontColor(card);
    }
    
    
    function load() {
        var muralId = '/murais/mural-da-carol';
        yawp(muralId).fetch(function (mural) {
            $('.container').css('background-color', mural.color);
        });
        $('.container').on('change', function () {
            var color = rgb2hex($(this).css('background-color'));
            yawp(muralId).patch({ color : color });
        });
        yawp('/posts').where('muralId', '=', muralId).list(function (posts) {
            posts.forEach(createCard);
        });
    }
    
    
    load();
});
