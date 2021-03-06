webpackHotUpdate(0,{

/***/ 331:
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

var _NewTaskTags = __webpack_require__(332);

var _NewTaskTags2 = _interopRequireDefault(_NewTaskTags);

var _reactRedux = __webpack_require__(66);

var _actions = __webpack_require__(335);

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
			tags: []
		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.addTag = _this.addTag.bind(_this);

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
				tags: this.state.tags
			});

			this.setState({
				title: '',
				goal: '',
				tags: []
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
		key: 'addTag',
		value: function addTag(tagType) {
			var tags = this.state.tags;
			tags.push(tagType);

			this.setState({
				tags: tags
			});
		}
	}, {
		key: 'render',
		value: function render() {
			// let isTagOn = ''

			return _react2.default.createElement(
				'form',
				{ onSubmit: this.handleSubmit },
				_react2.default.createElement(_NewTaskTags2.default, { handleAddTag: this.addTag }),
				_react2.default.createElement(
					'label',
					null,
					'Task:',
					_react2.default.createElement('input', { placeholder: 'Task Title', name: 'title', type: 'text', onChange: this.handleChange, value: this.state.title })
				),
				_react2.default.createElement(
					'label',
					null,
					'Task Objective:',
					_react2.default.createElement('input', { placeholder: 'Task objective', type: 'text', name: 'goal', onChange: this.handleChange, value: this.state.goal })
				),
				_react2.default.createElement(
					'button',
					{ id: 'submitBtn', type: 'submit', value: 'Submit', onChange: this.handleSubmit },
					'submit'
				)
			);
		}
	}]);

	return NewTask;
}(_react2.default.Component);
// <button className ={isTagOn} name="Urgent" value="Urgent" onClick={this.addTag,this.isOn}>Urgent </button>
// <button name="Design" value="Design" onClick={this.addTag,this.isOn}>Design</button>
// <button name="Add Functionality" value="Add functionality" onClick={this.addTag,this.isOn}>Add Functionality</button>
// <button name="Internal" value="Internal" onClick={this.addTag,this.isOn}>Internal</button>

NewTask.propTypes = {
	addTask: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tasks: state.tasks,
		tags: state.tags.list
	};
}, {
	addTask: _actions.addTask,
	addTag: _actions.addTag
})(NewTask);

/***/ }),

/***/ 332:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTaskTags = function (_React$Component) {
	_inherits(NewTaskTags, _React$Component);

	function NewTaskTags() {
		_classCallCheck(this, NewTaskTags);

		var _this = _possibleConstructorReturn(this, (NewTaskTags.__proto__ || Object.getPrototypeOf(NewTaskTags)).call(this));

		_this.addTag = _this.addTag.bind(_this);

		_this.state = {
			isOn: false,
			tags: ['Urgent', 'Internal', 'Design', 'Add Functionality']
		};
		return _this;
	}

	_createClass(NewTaskTags, [{
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();
			this.props.handleAddTag(e.target.value);
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

	return NewTaskTags;
}(_react2.default.Component);

NewTaskTags.propTypes = {
	handleAddTag: _propTypes2.default.func.isRequired

};

exports.default = NewTaskTags;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NewTask = undefined;

var _NewTask = __webpack_require__(331);

var _NewTask2 = _interopRequireDefault(_NewTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NewTask = _NewTask2.default;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(333);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
	_inherits(Form, _React$Component);

	function Form() {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));
	}

	_createClass(Form, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: '.form' },
				'break;',
				_react2.default.createElement(_components.NewTask, null)
			);
		}
	}]);

	return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTask = addTask;
function addTask(taskData) {
	return {
		type: 'ADD_TASK',
		taskData: taskData
	};
}

/***/ })

})
//# sourceMappingURL=0.41bdcbebb2a330e43edc.hot-update.js.map