webpackHotUpdate(0,{

/***/ 150:
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
			var updatedState = state;
			updatedState.list.push(action.taskData);
			return Object.assign({}, updatedState);
		default:
			return state;
	}
};

exports.default = tasksReducer;

/***/ })

})
//# sourceMappingURL=0.a5192d96b3baa3e72bab.hot-update.js.map