webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(154);

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(189);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modules = __webpack_require__(140);

var _modules2 = _interopRequireDefault(_modules);

var _reactRedux = __webpack_require__(45);

var _reducers = __webpack_require__(150);

var _reducers2 = _interopRequireDefault(_reducers);

var _reducers3 = __webpack_require__(329);

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

/***/ })

})
//# sourceMappingURL=0.564728e29c8ec24a16c4.hot-update.js.map