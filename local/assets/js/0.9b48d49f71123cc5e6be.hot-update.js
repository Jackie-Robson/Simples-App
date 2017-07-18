webpackHotUpdate(0,{

/***/ 330:
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


	var updatedState = state;

	switch (action.type) {
		case 'REMOVE_TAG':
			updatedState.tags.splice(action.target, 1);
			return Object.assign({}, updatedState);

		case 'ADD_TAG':
			updatedState.tags.push(action.target.value);
			return Object.assign({}, updatedState);

		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.9b48d49f71123cc5e6be.hot-update.js.map