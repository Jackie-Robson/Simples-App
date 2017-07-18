webpackHotUpdate(0,{

/***/ 141:
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

function addTagToTask(tags) {
	return {
		type: 'ADD_TASK_TAG',
		tags: tags
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
//# sourceMappingURL=0.aa0ce84f5b36f37c051a.hot-update.js.map