webpackHotUpdate(0,{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(66);

var _Task = __webpack_require__(74);

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskList = function (_React$Component) {
	_inherits(TaskList, _React$Component);

	function TaskList() {
		_classCallCheck(this, TaskList);

		return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).call(this));
	}

	_createClass(TaskList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'displayTasks' },
				_react2.default.createElement(
					'ul',
					{ id: 'listOfTasks' },
					this.props.tasks.list.map(function (task, i) {
						return _react2.default.createElement(_Task2.default, { key: i, task: task });
					})
				)
			);
		}
	}]);

	return TaskList;
}(_react2.default.Component);

TaskList.propTypes = {
	tasks: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tasks: state.tasks
	};
}, { z: z

})(TaskList);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(66);

var _components = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagList = function (_React$Component) {
	_inherits(TagList, _React$Component);

	function TagList(props) {
		_classCallCheck(this, TagList);

		return _possibleConstructorReturn(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).call(this, props));
	}

	_createClass(TagList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ id: 'tags' },
				_react2.default.createElement(_components.Tag, null)
			);
		}
	}]);

	return TagList;
}(_react2.default.Component);

TagList.propTypes = {
	tags: _propTypes2.default.array
};

exports.default = TagList;

/***/ })

})
//# sourceMappingURL=0.f525ea9fe8dfcfde9118.hot-update.js.map