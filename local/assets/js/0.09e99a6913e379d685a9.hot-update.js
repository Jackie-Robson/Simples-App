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
			updatedState.list.tags.tagsList.push(action.tagData);
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
//# sourceMappingURL=0.09e99a6913e379d685a9.hot-update.js.map