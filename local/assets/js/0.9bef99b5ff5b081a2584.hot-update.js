webpackHotUpdate(0,{

/***/ 145:
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

var _actions = __webpack_require__(144);

var _nodeUuid = __webpack_require__(451);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTask = function (_React$Component) {
	_inherits(NewTask, _React$Component);

	function NewTask(props) {
		_classCallCheck(this, NewTask);

		var _this = _possibleConstructorReturn(this, (NewTask.__proto__ || Object.getPrototypeOf(NewTask)).call(this, props));

		_this.state = {
			tags: [],
			title: ' ',
			id: (0, _nodeUuid.v4)(),
			tagsAdded: 'Tags added'

		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.noSubmit = _this.noSubmit.bind(_this);
		_this.addTagToTask = _this.addTagToTask.bind(_this);
		return _this;
	}

	_createClass(NewTask, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();

			//Dispatch action!!!!

			console.log(this);

			this.props.addTask({
				title: this.state.title,
				goal: this.state.goal,
				tags: this.state.tags,
				id: this.state.id
			});

			this.setState({
				title: '',
				goal: '',
				tags: [],
				id: (0, _nodeUuid.v4)()
			});
		}
	}, {
		key: 'isOn',
		value: function isOn(e) {
			e.preventDefault();
			e.isTagOn = 'tagIsOn';
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState(_defineProperty({}, event.target.name, event.target.value));
		}
	}, {
		key: 'noSubmit',
		value: function noSubmit(e) {
			e.preventDefault();
			e.target.placeholder = ' please fill in task details';
		}
	}, {
		key: 'addTagToTask',
		value: function addTagToTask(e) {
			e.preventDefault();
			var tags = [];
			var tagsList = tags.concat(this.props.tags.tags);

			this.setState({
				tags: tagsList
			});

			e.target.value = 'Tags Added!';
		}
	}, {
		key: 'showTags',
		value: function showTags(e) {
			e.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {

			var isNull = void 0;
			this.state.title ? isNull = this.handleSubmit : isNull = this.noSubmit;

			return _react2.default.createElement(
				'div',
				{ id: 'newTaskForm' },
				_react2.default.createElement(
					'form',
					{ onSubmit: isNull },
					_react2.default.createElement(
						'label',
						null,
						'Create Task',
						_react2.default.createElement('br', null),
						_react2.default.createElement('textarea', { placeholder: 'Add Details ...', autoComplete: 'off', name: 'title', type: 'text', onChange: this.handleChange }),
						_react2.default.createElement(
							'button',
							{ id: 'tagButton', onClick: this.showTags },
							' + '
						),
						_react2.default.createElement(
							'button',
							{ id: 'addTagButton', value: 'No Tags', onClick: this.addTagToTask },
							' Add Tags '
						),
						_react2.default.createElement(
							'button',
							{ type: 'submit', onChange: this.handleSubmit },
							'Submit '
						)
					)
				)
			);
		}
	}]);

	return NewTask;
}(_react2.default.Component);

NewTask.propTypes = {
	addTask: _propTypes2.default.func.isRequired,
	tags: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tasks: state.tasks,
		tags: state.tags
	};
}, {
	addTask: _actions.addTask
})(NewTask);

/***/ })

})
//# sourceMappingURL=0.9bef99b5ff5b081a2584.hot-update.js.map