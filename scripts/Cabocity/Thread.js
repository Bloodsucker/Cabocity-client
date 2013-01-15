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
	'Cabocity/threadCommandManager',
	'Cabocity/Activity'
], function (tCmdM, Activity) {
	console.log("Worker furulando");

	tCmdM.ini( self );

	self.onmessage = function (event) {
		console.log("Worker message received");
		//TODO

		var cmd = event.data;

		if (cmd.namespace == "core") {
			if (cmd.action == "ActivityEvent") {
				Activity.executeEvent(cmd.op, cmd.params, function (answerParams) {
					threadCommandManager.answer( cmd, answerParams );
				});
			}
		} else if (cmd.namespace == "answer" ) {
			tCmdM.execCallback( event.data );
		}
	};

	require([
		'cabocityOptions',
		'Cabocity/Core'
	], function (cabocityOptions, core) {
		core.launchActivity(null, cabocityOptions.mainActivity, function () {
			console.log("Activity lanzada del todo.");
		});
	});
});