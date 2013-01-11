define([
	'Cabocity/ExtendableClass',
], function (ExtendableClass) {
	var Activity = ExtendableClass.extend({
		onLaunch: function (onLaunchEnds) {
			onLaunchEnds();
		},
		onClose: function () {
			//TODO
		}
	});

	return Activity;
});