webpackHotUpdate(0,{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(138);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(163);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modules = __webpack_require__(127);

var _modules2 = _interopRequireDefault(_modules);

var _reactRedux = __webpack_require__(315);

var _reducers = __webpack_require__(325);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
	tasksReducer: _reducers2.default
});

var store = (0, _redux.createStore)(reducers);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	null,
	_react2.default.createElement(_modules2.default, null)
), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=0.67f69338004787700198.hot-update.js.map