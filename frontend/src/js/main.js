var jQuery = require('jquery');
var doT = require('dot');
var yawp = require('yawp-cli');

jQuery(function($) {
    
    
   
    function handleText() {
        
    }
    
    function handleVideo() {
        
    }
    
    function handlePicture() {
        
    }
    
     var handlers = {
        'TEXTO' : handleText,
        'VIDEO' : handleVideo,
        'FOTO': handlePicture
    };
    
    function handlePost(post) {
        var templateStr = $('#post-template').html();
        var templateFnc = doT.template(templateStr);
        var card = templateFnc({"title": "Olá", "content": post.conteudo});
        var element = $(card);
        
        $('#mural').append(element);
    }
    
    
    function load() {
        yawp('/posts').where('muralId', '=', '/murais/mural-da-carol').list(function (posts) {
            posts.forEach(function(post) {
                handlePost(post);
             });
        });
    }
    
    
    load();
});