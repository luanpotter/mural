# nosso-mural

nosso-mural is a mural (message board) made for an institution.

You can create your own mural (message board) and anyone with access can add messages to you, including text, images, video.

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

To deploy a new version, build everything as per instructed on setup and then inside the backend folder run:

```bash
mvn appengine:update
```
