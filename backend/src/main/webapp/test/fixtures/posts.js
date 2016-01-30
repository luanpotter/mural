(function (fx) {

    fx.post('carol1', {
        tipo: 'TEXTO',
        titulo: 'Querida Carol',
        color: '#eae7c4',
        conteudo: 'Carol, tudo de bom!!!',
        muralId: fx.mural('mural-da-carol').id,
        order: 1
    });

    fx.post('carol2', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#5fa1e0',
        conteudo: 'https://catraquinha.catracalivre.com.br/wp-content/uploads/sites/10/2015/03/o_show_da_luna.jpg',
        muralId: fx.mural('mural-da-carol').id,
        order: 2
    });

    fx.post('carol3', {
        tipo: 'VIDEO',
        titulo: 'Video legal',
        color: '#fb6964',
        conteudo: 'geQl2cZxR7Q',
        muralId: fx.mural('mural-da-carol').id,
        order: 3
    });

    fx.post('carol4', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#5fa1e0',
        conteudo: 'https://d13yacurqjgara.cloudfront.net/users/42865/screenshots/1955397/emo.png',
        muralId: fx.mural('mural-da-carol').id,
        order: 4
    });

    fx.post('carol5', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#fb6964',
        conteudo: 'https://d13yacurqjgara.cloudfront.net/users/42865/screenshots/1949712/gm.png',
        muralId: fx.mural('mural-da-carol').id,
        order: 5
    });

    fx.post('carol6', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#eae7c4',
        conteudo: 'https://d13yacurqjgara.cloudfront.net/users/42865/screenshots/1949710/gm2.png',
        muralId: fx.mural('mural-da-carol').id,
        order: 6
    });

    fx.post('carol7', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#eae7c4',
        conteudo: 'https://d13yacurqjgara.cloudfront.net/users/42865/screenshots/1949710/gm2.png',
        muralId: fx.mural('mural-da-carol').id,
        order: 7
    });

    fx.post('carol8', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#fb6964',
        conteudo: 'https://d13yacurqjgara.cloudfront.net/users/42865/screenshots/1949712/gm.png',
        muralId: fx.mural('mural-da-carol').id,
        order: 8
    });

    fx.post('carol9', {
        tipo: 'FOTO',
        titulo: 'Foto legal',
        color: '#fb6964',
        conteudo: 'https://d13yacurqjgara.cloudfront.net/users/42865/screenshots/1949712/gm.png',
        muralId: fx.mural('mural-da-carol').id,
        order: 9
    });

})(yawp.fixtures.lazy);
