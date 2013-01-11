define([
	'Cabocity/View'
], function (View) {
	var actions = [];

	actions['View'] = View;

	var newAction = function (actionName, action) {
		actions[actionName] = action;
	}

	var executeAction = function (actionName, opName, params, onActionEnds) {
		actions[actionName][opName](params, onActionEnds);
	}

	return {
		executeAction: executeAction
	};
});