define([
	'Cabocity/Activity'
], function (Activity) {
	var GameActivity = Activity.extend({
		view: 'View/Game'
	});

	return GameActivity;
});