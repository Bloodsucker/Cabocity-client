define([
	'Cabocity/ExtendableClass',
	'Cabocity/Core'
], function (ExtendableClass, core) {
	var Activity = ExtendableClass.extend({
		onLaunch: function (onLaunchEnds) {
			onLaunchEnds();
		},
		onClose: function () {
			//TODO
		},
		core: core
	});

	Activity.openedActivity = [];
	Activity.executeEvent = function (action, params, onEventEnds) {
		var activityRef = Activity.openedActivity[ Activity.openedActivity.length - 1 ];
		activityRef[action+'Event'](params, onEventEnds);
	}

	return Activity;
});