//Console.log() workarround.
console = {
	log: function (message) {
		self.postMessage({debug: "CONSOLELOG", m: message});
	}
};

importScripts('../libs/requirejs-2.1.2.min.js');

requirejs.config({
    baseUrl: '../'
});

require([
	'Cabocity/threadCommandManager'
], function (tCmdM, la) {
	console.log("Worker furulando");

	tCmdM.ini( self );

	self.onmessage = function (event) {
		console.log("Worker message received");
		//TODO

		tCmdM.execCallback( event.data );
	};

	require([
		'cabocityOptions',
		'Cabocity/ActivityLauncher'
	], function (cabocityOptions, ActivityLauncher) {
		new ActivityLauncher(cabocityOptions.mainActivity).create(function () {
			console.log("Activity lanzada del todo.");
		});
	});
});