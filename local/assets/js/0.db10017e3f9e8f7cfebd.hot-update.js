webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Tags = exports.TaskList = exports.Task = exports.NewTask = undefined;

var _NewTask = __webpack_require__(131);

var _NewTask2 = _interopRequireDefault(_NewTask);

var _Task = __webpack_require__(70);

var _Task2 = _interopRequireDefault(_Task);

var _TaskList = __webpack_require__(132);

var _TaskList2 = _interopRequireDefault(_TaskList);

var _Tags = __webpack_require__(328);

var _Tags2 = _interopRequireDefault(_Tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NewTask = _NewTask2.default;
exports.Task = _Task2.default;
exports.TaskList = _TaskList2.default;
exports.Tags = _Tags2.default;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(133);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tasks = function (_React$Component) {
	_inherits(Tasks, _React$Component);

	function Tasks() {
		_classCallCheck(this, Tasks);

		return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).call(this));
	}

	_createClass(Tasks, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(Tags, null),
				_react2.default.createElement(_components.NewTask, null),
				_react2.default.createElement(_components.TaskList, { tasks: [] })
			);
		}
	}]);

	return Tasks;
}(_react2.default.Component);

exports.default = Tasks;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_React$Component) {
	_inherits(Tags, _React$Component);

	function Tags() {
		_classCallCheck(this, Tags);

		var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this));

		_this.state = {
			isOn: false,
			tags: ['Urgent', 'Internal', 'Design', 'Add Functionality']
		};
		return _this;
	}

	_createClass(Tags, [{
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'ul',
				null,
				this.state.tags.map(function (tag, i) {
					return React.createElement(
						'li',
						{ key: i },
						React.createElement(
							'button',
							{ className: _this2.state.isTagOn, name: tag, value: tag, onClick: _this2.addTag },
							tag,
							' '
						)
					);
				})
			);
		}
	}]);

	return Tags;
}(React.Component);

exports.default = Tags;

/***/ })

})
//# sourceMappingURL=0.db10017e3f9e8f7cfebd.hot-update.js.map