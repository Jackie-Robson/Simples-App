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
			Object.assign({}, updatedState);

			break;

		default:
			return state;
	}
};

exports.default = tasksReducer;

/***/ })

})
//# sourceMappingURL=0.9f9e2e5ea9ebd721673f.hot-update.js.map