# nosso-mural

Esse é um Mural feito para uma instituição. Você pode criar seu mural e qualquer pessoa com acesso pode criar mensagens para você, contendo texto, imagens ou vídeos.

## setup

Go to `frontend` folder and run:

```bash
npm i
npm run build
```

This will install deps, including grunt, and use it to build the frontend artifacts.

After that, go to `bakend` and run:

```bash
mvn clean install
mvn yawp:devserver
```

That's going to run it locally!

Access `localhost:8080/mural-id`. If the mural doesn't exist, you will be able to create it. Otherwise, you be directed to it.

Having reached the mural, you can post new content using the plus button or change the colors!

Pretty cool, hum?

## deploy

It is deployed via appspot, so you can access it here:

> https://nosso-mural.appspot.com

Don't forget to postpend the id of the mural desired.
