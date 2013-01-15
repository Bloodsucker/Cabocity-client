define(['Cabocity/Activity'], function(Activity) {
	var LoginActivity = Activity.extend({
		view: "View/Login",
		onLoginEvent: function (userLoginData) {
			console.log(userLoginData);

			this.core.launchActivity(this, 'Activity/Game');
		}
	});

	return LoginActivity;
});