require.config({
	//baseUrl: "../",
	paths: {
		text: 'libs/plugins/requirejs/text',
		jquery: 'libs/jquery-1.8.3.min',
		ejs: 'libs/ejs-1.0.production'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		ejs: {
			exports: 'EJS'
		}
	}
});

require([
	'Cabocity/WebThread'
], function (WebThread) {
	WebThread.run();
});