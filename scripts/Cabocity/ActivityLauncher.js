define([
	'Cabocity/threadCommandManager'
], function (tCmdM) {
	var ActivityLauncher = function (activityName) {

		this.create = function (onCreateEnds) {
			require([
				'src/' + activityName + 'Activity'
			], function (ActivityToLaunch) {
				var activity = new ActivityToLaunch();

				var params = {
					view: activity.view
				};

				var cmd = tCmdM.createCoreCommand("View", "launch", params, function () {
					activity.onLaunch(onCreateEnds);
				});
			});
		}
	};


	return ActivityLauncher;
});