webpackHotUpdate(0,{

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(66);

var _actions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".tags/actions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskTags = function (_React$Component) {
	_inherits(TaskTags, _React$Component);

	function TaskTags() {
		_classCallCheck(this, TaskTags);

		var _this = _possibleConstructorReturn(this, (TaskTags.__proto__ || Object.getPrototypeOf(TaskTags)).call(this));

		_this.state = {
			isOn: false,
			tags: ['Urgent', 'Internal', 'Design', 'Add Functionality']
		};
		return _this;
	}

	_createClass(TaskTags, [{
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'ul',
				null,
				this.state.tags.map(function (tag, i) {
					return _react2.default.createElement(
						'li',
						{ key: i },
						_react2.default.createElement(
							'button',
							{ name: tag, value: tag, onClick: _this2.addTag },
							tag,
							' '
						)
					);
				})
			);
		}
	}]);

	return TaskTags;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return {};
}, {
	addTag: _actions.addTag
})(TaskTags);

/***/ })

})
//# sourceMappingURL=0.f4bc54fa703ba9f6c150.hot-update.js.map