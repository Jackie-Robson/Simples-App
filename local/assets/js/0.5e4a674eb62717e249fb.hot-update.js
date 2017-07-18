webpackHotUpdate(0,{

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(24);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
	_inherits(Task, _React$Component);

	function Task(props) {
		_classCallCheck(this, Task);

		var _this = _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));

		_this.state = {
			done: false,
			tags: _this.props.task.tags,
			tagList: [],
			id: _this.props.task.id
		};
		_this.componentDidMount = _this.componentDidMount.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Task, [{
		key: 'handleChange',
		value: function handleChange() {
			this.setState({
				done: !this.state.done
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(this.state);
			setstate({
				tagsList: taskTags
			});
		}
	}, {
		key: 'render',
		value: function render() {

			var taskTags = void 0;
			taskTags = this.state.tagList.concat(this.state.tags);

			var taskClass = void 0;
			this.state.done ? taskClass = 'strike' : taskClass = '';
			return _react2.default.createElement(
				'li',
				{ className: taskClass },
				_react2.default.createElement('br', null),
				_react2.default.createElement('input', { type: 'checkbox', onChange: this.handleChange }),
				_react2.default.createElement(
					'p',
					null,
					this.props.task.title
				),
				_react2.default.createElement(
					'ul',
					null,
					this.state.tags.map(function (tag, i) {
						return _react2.default.createElement(
							'li',
							{ key: i },
							_react2.default.createElement(
								'button',
								null,
								tag
							)
						);
					})
				),
				_react2.default.createElement('hr', null)
			);
		}
	}]);

	return Task;
}(_react2.default.Component);

Task.propTypes = {
	task: _propTypes2.default.object.isRequired,
	tags: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tasks: state.tasks,

		tagsList: state.tagsList
	};
}, {})(Task);

/***/ })

})
//# sourceMappingURL=0.5e4a674eb62717e249fb.hot-update.js.map