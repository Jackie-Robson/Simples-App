webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = undefined;

var _Header = __webpack_require__(138);

var _Header2 = _interopRequireDefault(_Header);

var _form = __webpack_require__(334);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Header = _Header2.default;

/***/ }),

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

var _reactRedux = __webpack_require__(66);

var _actions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
				_react2.default.createElement('div', { id: '{menuClass}' }),
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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (24:3)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m (\n \u001b[90m 23 | \u001b[39m\t\t\t\u001b[33m<\u001b[39m\u001b[33mh5\u001b[39m\u001b[33m>\u001b[39m\u001b[33mTags\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh5\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m\t\t\t\u001b[33m<\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m\t\t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 25 | \u001b[39m\t\t\t\t{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mtags\u001b[33m.\u001b[39mmap((tag\u001b[33m,\u001b[39mi) \u001b[33m=>\u001b[39m {\n \u001b[90m 26 | \u001b[39m\t\t\t\t\t\u001b[36mreturn\u001b[39m (\n \u001b[90m 27 | \u001b[39m\t\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mli\u001b[39m key\u001b[33m=\u001b[39m{i}\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NewTask = exports.NewTaskTags = undefined;

var _NewTaskTags = __webpack_require__(332);

var _NewTaskTags2 = _interopRequireDefault(_NewTaskTags);

var _NewTask = __webpack_require__(331);

var _NewTask2 = _interopRequireDefault(_NewTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NewTaskTags = _NewTaskTags2.default;
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
				'form',
				null,
				_react2.default.createElement(_components.NewTask, null),
				_react2.default.createElement(_components.NewTaskTags, { handleAddTag: this.addTag })
			);
		}
	}]);

	return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ })

})
//# sourceMappingURL=0.5cb1f2b600c0dbef4e44.hot-update.js.map