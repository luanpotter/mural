// var jQuery = require('jquery');
// var doT = require('dot');
var yawp = require('yawp-cli');

yawp('/posts').where('muralId', '=', '/murais/mural-da-carol').list(function (posts) {
	console.log(posts);
});
