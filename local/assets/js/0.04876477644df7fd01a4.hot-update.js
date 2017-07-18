webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(152);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(187);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _modules = __webpack_require__(140);

var _modules2 = _interopRequireDefault(_modules);

var _reactRedux = __webpack_require__(35);

var _reducers = __webpack_require__(148);

var _reducers2 = _interopRequireDefault(_reducers);

var _reducers3 = __webpack_require__(143);

var _reducers4 = _interopRequireDefault(_reducers3);

var _redux = __webpack_require__(116);

var _components = __webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistedState = _components.loadState;

var reducers = (0, _redux.combineReducers)({
	tasks: _reducers2.default,
	tags: _reducers4.default
});

var store = (0, _redux.createStore)(reducers);

store.subscribe(function () {
	(0, _components.saveState)(store.getState());
});

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_modules2.default, null)
), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=0.04876477644df7fd01a4.hot-update.js.map