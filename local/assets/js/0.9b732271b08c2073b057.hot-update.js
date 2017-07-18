webpackHotUpdate(0,{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTag = addTag;
exports.addTagToTask = addTagToTask;
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

/***/ })

})
//# sourceMappingURL=0.9b732271b08c2073b057.hot-update.js.map