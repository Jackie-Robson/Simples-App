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

var updatedState = state;

var tagsReducer = function tagsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'REMOVE_TAG':
			updatedState.tags.splice(action.target, 1);
			return Object.assign({}, updatedState);

		case 'ADD_TAG':
			updatedState.tags.push(action.target);
			return Object.assign({}, updatedState);

		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.95e1f64bd9abf06a6af5.hot-update.js.map