define([
	'Cabocity/threadCommandManager'
], function (tCmdM) {
	var Core = function () {

		this.launchActivity = function (activityNow, activityName, onActivityCreateEnds) {
			require([
				'src/' + activityName + 'Activity',
				'Cabocity/Activity'
			], function (ActivityToLaunch, Activity) {
				var activity = new ActivityToLaunch();

				var params = {
					view: activity.view
				};

				var cmd = tCmdM.createCoreCommand("View", "launch", params, function () {
					activity.onLaunch(function () {
						Activity.openedActivity.push( activity );
						if(onActivityCreateEnds) onActivityCreateEnds();
					});
				});
			});
		}
	};

	return new Core();
});