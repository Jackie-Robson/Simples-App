webpackHotUpdate(0,{

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = {
	tags: []
};

var tagsReducer = function tagsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'REMOVE_TAG':
			var updatedState = state;
			updatedState.list.tags.splice(action.target, 1);
			return Object.assign({}, updatedState);

		case 'ADD_TAG':
			var updatedState = state;
			updatedState.list.tags.push(action.target);
			return object.asign({}, updatedState);

		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.086c2775d65bd63718f6.hot-update.js.map