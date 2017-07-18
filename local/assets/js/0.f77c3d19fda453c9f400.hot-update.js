webpackHotUpdate(0,{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTag = addTag;
exports.addTagToTask = addTagToTask;
exports.removeTag = removeTag;
function addTag(tagType) {
	return {
		type: 'ADD_TAG',
		tagType: tagType
	};
}

function addTagToTask(tag) {
	return {
		type: 'ADD_TASK_TAG',
		tag: tag
	};
}

function removeTag(tag) {
	return {
		type: 'REMOVE_TAG',
		tagType: tagType
	};
}

/***/ })

})
//# sourceMappingURL=0.f77c3d19fda453c9f400.hot-update.js.map