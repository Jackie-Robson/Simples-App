webpackHotUpdate(0,{

/***/ 143:
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

		case 'REMOVE_TAG':
			updatedState.tags.splice(action.tagType, 1);
			return Object.assign({}, updatedState);

		case 'ADD_TASK_TAG':
			updatedState.tagsList.push(action.tagList);
			return Object.assign({}, updatedState);
		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.a10f692dab49f4d823b8.hot-update.js.map