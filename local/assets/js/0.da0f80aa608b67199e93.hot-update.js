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

function addTagToTask(tagList) {
	return {
		type: 'ADD_TASK_TAG',
		tagList: tagList
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
//# sourceMappingURL=0.da0f80aa608b67199e93.hot-update.js.map