webpackHotUpdate(0,{

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var initialState = {
	tags: []
};

var tagsReducer = function tagsReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'REMOVE_TAG':
			var updatedState = state;
			updatedState.list.tags.splice(action.target, 1);
			return Object.assign({}, updatedState);

			break;

		default:
			return state;
	}
};

exports.default = tagsReducer;

/***/ })

})
//# sourceMappingURL=0.f1cc3b54b1316b74c5cb.hot-update.js.map