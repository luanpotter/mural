(function (fx) {

    fx.post('carol1', {
        tipo: 'TEXTO',
        conteudo: 'Carol, tudo de bom!!!',
        muralId: '/murais/mural-da-carol'
    });

    fx.post('carol2', {
        tipo: 'FOTO',
        conteudo: 'https://catraquinha.catracalivre.com.br/wp-content/uploads/sites/10/2015/03/o_show_da_luna.jpg',
        muralId: '/murais/mural-da-carol'
    });

    fx.post('carol3', {
        tipo: 'VIDEO',
        conteudo: 'geQl2cZxR7Q',
        muralId: '/murais/mural-da-carol'
    });


})(yawp.fixtures.lazy);
