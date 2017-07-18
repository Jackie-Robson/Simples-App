webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = {
	tags: ['Urgent']
};

var tagsReducer = function tagsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];


	var updatedState = state;

	switch (action.type) {

		case 'ADD_TAG':
			updatedState.tags.push(action.tagType);
			return Object.assign({}, updatedState);

		case 'ADD_TASK_TAG':
			updatedState.task.list.task.push(action.tag);
			return Object.assign({}, updatedState);

		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.f9201e4b6f28be202585.hot-update.js.map