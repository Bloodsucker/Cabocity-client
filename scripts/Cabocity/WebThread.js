define([
	'Cabocity/webAction',
	'Cabocity/threadCommandManager'
],
function (webAction, threadCommandManager) {

	var run = function () {
		var thread = new Worker("./scripts/Cabocity/Thread.js");

		thread.onmessage = function (event) {
			//console.log() workarround
			if(event.data && event.data.debug == "CONSOLELOG"){
				console.log("ww:");
				console.log(event.data.m);
				return;
			}

			console.log(event.data);

			var cmd = event.data;

			if (cmd.namespace == "core") {
				webAction.executeAction(cmd.action, cmd.op, cmd.params, function (answerParams) {
					threadCommandManager.answer( cmd, answerParams );
				});
			}
		}

		threadCommandManager.ini( thread );
	}

	return {
		run: run
	};
});