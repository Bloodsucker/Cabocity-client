define([
	"Cabocity/View",
], function (View) {
	var GameView = View.extend({
		template: 'Template/Game.html',
		onCreate: function (onCreateEnds) {
			this.$gameFragment = this.$el.find('.gameFragment');

			this.appendFragment('View/MapGame', this.$gameFragment, onCreateEnds);
		},
		$gameFragment: null
	});

	return GameView;
});