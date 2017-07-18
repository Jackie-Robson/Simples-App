webpackHotUpdate(0,{

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = {};

var tasksReducer = function tasksReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_TASK':
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
};

exports.default = tasksReducer;

/***/ })

})
//# sourceMappingURL=0.1051bf2515eb32191a1e.hot-update.js.map