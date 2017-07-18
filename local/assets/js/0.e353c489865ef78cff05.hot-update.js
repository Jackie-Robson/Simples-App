webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTask = addTask;
exports.addTagToTask = addTagToTask;
exports.removeTag = removeTag;
function addTask(taskData) {
	return {
		type: 'ADD_TASK',
		taskData: taskData
	};
}

function addTagToTask(tagData) {
	return {
		type: 'ADD_TASK_TAG',
		tagData: tagData
	};
}

function removeTag(tagType) {
	return {
		type: 'REMOVE_TAG',
		tagType: tagType
	};
}

/***/ })

})
//# sourceMappingURL=0.e353c489865ef78cff05.hot-update.js.map