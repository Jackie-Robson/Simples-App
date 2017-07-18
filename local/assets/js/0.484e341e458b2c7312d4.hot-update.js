webpackHotUpdate(0,{

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = {
	list: []
};

var tasksReducer = function tasksReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_TASK':
			return Object.assign({}, state);
		default:
			return state;
	}
};

exports.default = tasksReducer;

/***/ })

})
//# sourceMappingURL=0.484e341e458b2c7312d4.hot-update.js.map