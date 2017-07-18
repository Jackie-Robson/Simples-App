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
			tags: _this.props.tags
			// this.handleTags = this.handleTags.bind(this)
		};_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Task, [{
		key: 'addTag',
		value: function addTag(e) {
			e.target.preventDefault();
		}
	}, {
		key: 'handleChange',
		value: function handleChange() {
			this.setState({
				done: !this.state.done
			});
		}
	}, {
		key: 'render',
		value: function render() {

			var taskClass = void 0;
			this.state.done ? taskClass = 'strike' : taskClass = '';

			return _react2.default.createElement(
				'li',
				{ className: taskClass },
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement(
						'label',
						null,
						'Add tags',
						_react2.default.createElement(
							'select',
							null,
							_react2.default.createElement(
								'option',
								null,
								'tag'
							),
							_react2.default.createElement(
								'option',
								null,
								'tag'
							),
							_react2.default.createElement(
								'option',
								null,
								'tag'
							),
							_react2.default.createElement(
								'option',
								null,
								'tag'
							)
						),
						_react2.default.createElement(
							'button',
							{ onSubmit: this.addTag },
							'Add tag'
						)
					)
				),
				_react2.default.createElement('ul', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'h4',
					null,
					this.props.task.title
				),
				_react2.default.createElement(
					'h5',
					{ id: 'objective' },
					'Objective:'
				),
				_react2.default.createElement(
					'i',
					null,
					this.props.task.goal
				),
				_react2.default.createElement('input', { type: 'checkbox', onChange: this.handleChange })
			);
		}
	}]);

	return Task;
}(_react2.default.Component);

Task.propTypes = {
	task: _propTypes2.default.object.isRequired,
	tags: _propTypes2.default.array

};

exports.default = Task;

/***/ })

})
//# sourceMappingURL=0.d9da82987c1a003e65ac.hot-update.js.map