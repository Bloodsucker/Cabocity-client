define(function () {
	var commandCounter = 0;

	var callbacks = [];

	function ThreadCommand(id, namespace, action, op, params) {
		this.id = id;
		this.namespace = namespace;
		this.action = action;
		this.op = op;
		this.params = params;
		//this.answered = false;
	}

	function ThreadAnswerCommand(id, answerParams) {
		this.id = id;
		this.namespace = "answer";
		this.params = answerParams;
	}

	var ThreadCommandManager = function () {
		var thread = null;

		this.ini = function (threadRef) {
			thread = threadRef;
		}

		this.createCoreCommand = function (action, op, params, callback) {
			var newCommandID = commandCounter++;
			var newCommand = new ThreadCommand(newCommandID, "core", action, op, params);
			
			if (callback)
				callbacks[newCommandID] = callback;
		
			thread.postMessage( newCommand );
		}

		this.execCallback = function(cmd){
			/*if(cmd.answered) {
				this.execAnswerCallback(cmd);
				return;
			}*/
			
			if(c=callbacks[ cmd.id ]) {
				callbacks[ cmd.id ] = null;
				//cmd.answered = true;
				c( cmd.m , cmd);
			}
		}

		this.answer = function (oldCommand, answerParams) {
			var answerCmd = new ThreadAnswerCommand(oldCommand.id, answerParams);

			thread.postMessage( answerCmd );
		}
	}

	return (new ThreadCommandManager());
});