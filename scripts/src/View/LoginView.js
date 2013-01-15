define(["Cabocity/View"], function (View) {
	var LoginView = View.extend({
		template: "Template/Login.html",
		events: {
			"button": {
				click: function (event, $el) {
					console.log("Click");
					this.activityEvent('onLogin' /*+Event*/, {user: 'myUser', pass: 'myPass'} /*args*/);
				}
			}
		}
	});

	return LoginView;
});