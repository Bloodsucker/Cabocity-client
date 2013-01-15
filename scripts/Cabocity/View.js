define([
	'Cabocity/ExtendableClass',
	'Cabocity/webAction',
	'jquery',
	'ejs',
	'Cabocity/threadCommandManager'
], function (ExtendableClass, webAction, $, EJS, tCmdM) {
	var View = ExtendableClass.extend({
		launch: function (onLaunch) {
			//TODO
			console.log("Se empieza a cargar el view.");

			onLaunch();
		},
		$el: null,
		
		activityEvent: function (eventName, eventArgs) {
			tCmdM.createCoreCommand("ActivityEvent", eventName, eventArgs);
		},

		appendFragment: function (FragmentName, $fragmentPlace, onCreateFragmentEnds ) {
			require([
				'src/'+FragmentName+'Fragment'
			], function (Fragment) {
				var fragment = new Fragment(this);

				require([
					'text!src/'+fragment.template+'.ejs'
				], function (templateStr) {
					fragment.$el = $(new EJS({text: templateStr}).render());
					$fragmentPlace.append( fragment.$el );

					fragment.onCreate(function () {
						fragment.onVisible( onCreateFragmentEnds );
					});
				});
			});
		},

		/**
		 * It means when the $el of the view is in DOM but it is not visible yet.
		 * Use it to start an animation transition to show it.
		 */
		onCreate: function (onCreateEnds) {
			//TODO
			onCreateEnds();
		},

		/**
		 * It means when the $el is fully visible.
		 */
		onVisible: function (onVisibleEnds) {
			//TODO
			onVisibleEnds();
		},

		/**
		 * It means when the $el is going to be closed.
		 * Use it to create a transition to close hide it.
		 */
		onClose: function () {
			//TODO
		},

		/**
		 * It means that the $el is removed from DOM.
		 */
		onRemove: function () {

		},

		setEvent: function (eventType, elSelector, eventCallback) {
			var self = this;
			self.$el.find(elSelector).on(eventType, function (e) {
				//eventCallback(e, $(this));
				eventCallback.call(self, e, $(this));
			});
		}
	});

	var $viewContainer = null;

	View.launch = function (param, onEnds) {
		console.log("Cargar View");

		//It gets the correct view.
		require([
			'src/' + param.view + 'View'
		], function (ViewToOpen) {
			var viewToOpen = new ViewToOpen();

			//It get the view template
			require([
				'text!src/'+viewToOpen.template+'.ejs'
			], function (templateStr) {
				$(function () {
					if (!$viewContainer)
						$viewContainer = $('#gameContainer').empty();

					viewToOpen.$el = $(new EJS({text: templateStr}).render());
					$viewContainer.append( viewToOpen.$el );

					//Add configured element events
					for (selector in viewToOpen.events) {
						for (eventType in viewToOpen.events[selector]) {
							viewToOpen.setEvent(eventType, selector, viewToOpen.events[selector][eventType]);
						}
					}

					viewToOpen.onCreate(function () {
						viewToOpen.onVisible(onEnds);
					});
				});
			});
		});
	};

	return View;
});