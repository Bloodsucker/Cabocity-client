define([
	'Cabocity/MapFragment'
], function (MapFragment) {
	var MapGameFragment = MapFragment.extend({
		template: 'Template/MapGame.html',
		onCreate: function (onCreateEnds) {
			this.$mapContainer = this.$el.find('container');
			this.$mapCanvas = this.$el.find('container canvas');

			onCreateEnds();
		},
		onVisible: function (onVisibleEnds) {
			onVisibleEnds();
		}
	});

	return MapGameFragment;
});