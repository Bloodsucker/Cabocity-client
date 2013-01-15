define([
	'Cabocity/ExtendableClass',
], function (ExtendableClass) {
	var Fragment = ExtendableClass.extend({
		initialize: function (view) {
			this.view = view;
		},
		$el: null,
		$mapContainer: null,
		view: null
	});

	return Fragment;
});