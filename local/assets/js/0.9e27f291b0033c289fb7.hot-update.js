webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(153);

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(188);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modules = __webpack_require__(140);

var _modules2 = _interopRequireDefault(_modules);

var _reactRedux = __webpack_require__(66);

var _reducers = __webpack_require__(149);

var _reducers2 = _interopRequireDefault(_reducers);

var _reducers3 = __webpack_require__(330);

var _reducers4 = _interopRequireDefault(_reducers3);

var _redux = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
	tasks: _reducers2.default,
	tags: _reducers4.default
});

var store = (0, _redux.createStore)(reducers);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_modules2.default, null)
), document.getElementById('app'));

/***/ }),

/***/ 149:
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

	switch (action.type) {
		case 'ADD_TASK':
			var updatedState = state;
			updatedState.list.push(action.taskData);
			return Object.assign({}, updatedState);
		default:
			return state;
	}
};

exports.default = tasksReducer;

/***/ }),

/***/ 336:
false

})
//# sourceMappingURL=0.9e27f291b0033c289fb7.hot-update.js.map