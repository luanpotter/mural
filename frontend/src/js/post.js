window.$ = require('jquery');
var yawp = require('yawp-cli');


window.$(function($) {
    var voltar = function () {
        window.location.href = window.location.href.substring(0, window.location.href.length - '/post'.length);
    };

    $('#tipo').on('change', function () {
        var texto = $(this).val() === 'Texto';
        $('#conteudo').closest('div').toggle(texto);
        $('#url').closest('div').toggle(!texto);
    }).trigger('change');

    $('#cancelar').on('click', function () {
        voltar();
    });

    $('#enviar').on('click', function () {
        yawp('/posts').create({
            muralId : '/murais/mural-da-carol',
            nome : $('#nome').val(),
            titulo : $('#titulo').val(),
            tipo : $('#tipo').val().toUpperCase(),
            conteudo : $('#tipo').val() === 'Texto' ? $('#conteudo').val() : $('#url').val()
        }).done(function () {
            voltar();
        });
    });
});


