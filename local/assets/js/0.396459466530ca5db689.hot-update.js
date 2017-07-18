webpackHotUpdate(0,{

/***/ 148:
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

	var updatedState = state;

	switch (action.type) {
		case 'ADD_TASK':
			updatedState.list.push(action.taskData);
			return Object.assign({}, updatedState);

		case 'ADD_TASK_TAG':
			updatedState.list.tags.push(action.tagData);
			return Object.assign({}, updatedState);
		default:
			return state;

		case 'REMOVE_TAG':
			updatedState.tags.splice(action.tagType, 1);
			return Object.assign({}, updatedState);
	}
};

exports.default = tasksReducer;

/***/ })

})
//# sourceMappingURL=0.396459466530ca5db689.hot-update.js.map