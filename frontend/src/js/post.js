window.$ = require('jquery');
var yawp = require('yawp-cli');

window.$(function($) {
    var voltar = function () {
        window.location.href = window.location.href.substring(0, window.location.href.length - '/post'.length);
    };

    var getMuralId = function() {
        var pathArray = window.location.pathname.split('/');
        return '/murais/' + pathArray[1];
    };

    $('#tipo').on('change', function () {
        if ($(this).val() === null) {
            $('#conteudo, #url').closest('div').hide();
            return;
        }
        var texto = $(this).val() === 'TEXTO';
        $('#conteudo').closest('div').toggle(texto);
        $('#url').closest('div').toggle(!texto);
    }).trigger('change');

    $('#cancelar').on('click', function () {
        voltar();
    });

    $('#enviar').on('click', function () {
        yawp('/posts').create({
            muralId : getMuralId(),
            nome : $('#nome').val(),
            titulo : $('#titulo').val(),
            tipo : $('#tipo').val(),
            conteudo : $('#tipo').val() === 'TEXTO' ? $('#conteudo').val() : $('#url').val()
        }).done(function () {
            voltar();
        });
    });
});


