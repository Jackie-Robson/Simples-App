webpackHotUpdate(0,{

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = {
	list: []
};

var tagsReducer = function tagsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'REMOVE_TAG':
			var updatedState = state;
			updatedState.list.splice(action.target, 1);
			return Object.assign({}, updatedState);

		case 'ADD_TAG':
			var updatedState = state;
			updatedState.list.push(action.tagType);
			return object.asign({}, updatedState);

		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.a250c5d929e67dc68515.hot-update.js.map