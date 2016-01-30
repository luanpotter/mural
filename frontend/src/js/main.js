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

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function createCard(post) {
        var contentFnc = handlers[post.tipo];
        var content = $(contentFnc({content: post.conteudo}));
        
        var card = $(postTemplateFnc({title: post.titulo}));
        card.find('.content').append(content);
        card.css('background-color', post.color);
        card.on('change', function () {
            var color = rgb2hex($(this).css('background-color'));
            yawp(post.id).patch({ color : color });
        });

        $('#mural').append(card);
        return card;
    }
    
    
    function load() {
        yawp('/posts').where('muralId', '=', '/murais/mural-da-carol').list(function (posts) {
            posts.forEach(createCard);
        });
    }
    
    
    load();
});
