(function (fx) {

    fx.post('carol1', {
        tipo: 'TEXTO',
        conteudo: 'Carol, tudo de bom!!!'
    });

    fx.post('carol2', {
        tipo: 'FOTO',
        conteudo: 'https://catraquinha.catracalivre.com.br/wp-content/uploads/sites/10/2015/03/o_show_da_luna.jpg'
    });

    fx.post('carol3', {
        tipo: 'VIDEO',
        conteudo: 'geQl2cZxR7Q'
    });


})(yawp.fixtures.lazy);
