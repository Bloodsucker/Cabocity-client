define(["Cabocity/View"], function (View) {
	var LoginView = View.extend({
		template: "Template/Login.html",
		events: {
			"button": {
				click: function (event, $el) {
					//this.activityView.close();
					console.log("hola!");
				}
			}
		}
	});

	return LoginView;
});