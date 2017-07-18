webpackHotUpdate(0,{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Simples'
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = undefined;

var _Header = __webpack_require__(139);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Header = _Header2.default;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(140);

var _tasks = __webpack_require__(147);

var _tasks2 = _interopRequireDefault(_tasks);

var _tags = __webpack_require__(143);

var _tags2 = _interopRequireDefault(_tags);

var _components2 = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_components.Header, null),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_components2.NewTask, null),
					_react2.default.createElement(_tags2.default, { addTag: this.addTag })
				),
				_react2.default.createElement(_tasks2.default, null)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTag = addTag;
function addTag(tagType) {
	return {
		type: 'ADD_TAG',
		tagType: tagType
	};
}

/***/ }),

/***/ 143:
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

var _actions = __webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { Tag } from './components'

var Tags = function (_React$Component) {
	_inherits(Tags, _React$Component);

	function Tags(props) {
		_classCallCheck(this, Tags);

		var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		_this.removeTag = _this.removeTag.bind(_this);
		_this.addTag = _this.addTag.bind(_this);

		_this.state = {
			tag: ''
		};

		return _this;
	}

	_createClass(Tags, [{
		key: 'removeTag',
		value: function removeTag(e) {
			e.preventDefault();
			this.props.handleRemoveTag(e.target.value);
		}
	}, {
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();

			this.props.addTag(this.state.tag);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState({
				tag: event.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'tags' },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.addTag },
					'Add New Tags',
					_react2.default.createElement('input', { type: 'text', name: 'tags', onChange: this.handleChange, placeholder: 'Tag Name' })
				),
				_react2.default.createElement(
					'ul',
					{ id: 'tags' },
					this.props.tags.tags.map(function (tag, i) {
						return _react2.default.createElement(
							'li',
							{ key: i },
							_react2.default.createElement(
								'button',
								{ value: tag },
								' ',
								tag,
								' '
							)
						);
					})
				)
			);
		}
	}]);

	return Tags;
}(_react2.default.Component);

Tags.propTypes = {
	tags: _propTypes2.default.object,
	addTag: _propTypes2.default.func,
	handleRemoveTag: _propTypes2.default.func,
	handleChange: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tags: state.tags
	};
}, {
	addTag: _actions.addTag
})(Tags);

/***/ }),

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

var _actions = __webpack_require__(74);

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
		key: 'render',
		value: function render() {
			// let isTagOn = ''

			return _react2.default.createElement(
				'div',
				{ id: 'newTaskForm' },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					_react2.default.createElement(
						'label',
						null,
						'Create Task',
						_react2.default.createElement('br', null),
						_react2.default.createElement('textarea', { placeholder: 'Task Details', autoComplete: 'off', name: 'title', type: 'text', onChange: this.handleChange, value: this.state.title })
					),
					_react2.default.createElement(
						'button',
						{ type: 'submit', value: 'Submit', onChange: this.handleSubmit },
						'submit'
					)
				)
			);
		}
	}]);

	return NewTask;
}(_react2.default.Component);

NewTask.propTypes = {
	addTask: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tasks: state.tasks,
		tags: state.tags
	};
}, {
	addTask: _actions.addTask
})(NewTask);

/***/ }),

/***/ 146:
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

var _Task = __webpack_require__(75);

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
				null,
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
}, {})(TaskList);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(76);

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
				{ id: 'displayTasks' },
				_react2.default.createElement(_components.TaskList, { tasks: [] })
			);
		}
	}]);

	return Tasks;
}(_react2.default.Component);

exports.default = Tasks;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(83)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(182)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

/* harmony default export */ __webpack_exports__["a"] = (createProvider());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTask = addTask;
exports.addTagToTask = addTagToTask;
exports.removeTag = removeTag;
function addTask(taskData) {
	return {
		type: 'ADD_TASK',
		taskData: taskData
	};
}

function addTagToTask(tagData) {
	return {
		type: 'ADD_TASK_TAG',
		tagData: tagData
	};
}

function removeTag(tagType) {
	return {
		type: 'REMOVE_TAG',
		tagType: tagType
	};
}

/***/ }),

/***/ 75:
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

var _actions = __webpack_require__(74);

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
			tags: _this.props.tags,
			tagsList: []

		};
		_this.addTag = _this.addTag.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Task, [{
		key: 'noReload',
		value: function noReload(e) {
			e.preventDefault();
		}
	}, {
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();
			this.props.addTagToTask(this.state.tagsList);
		}
	}, {
		key: 'addTagToList',
		value: function addTagToList(e) {
			e.preventDefault();
			this.setState(this.target.value.push(this.state.tagsList));
		}
	}, {
		key: 'handleChange',
		value: function handleChange() {
			this.setState({
				tagsList: [],
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
					'ul',
					null,
					this.state.tagsList.map(function (i, tag) {
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
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'p',
					null,
					this.props.task.title
				),
				_react2.default.createElement('input', { type: 'checkbox', onChange: this.handleChange })
			);
		}
	}]);

	return Task;
}(_react2.default.Component);

Task.propTypes = {
	task: _propTypes2.default.object.isRequired,
	tags: _propTypes2.default.object,
	addTagToTask: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tasks: state.tasks,
		tags: state.tags,
		tagsList: state.tagsList
	};
}, {
	addTagToTask: _actions.addTagToTask
})(Task);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TaskList = exports.Task = exports.NewTask = undefined;

var _Task = __webpack_require__(75);

var _Task2 = _interopRequireDefault(_Task);

var _TaskList = __webpack_require__(146);

var _TaskList2 = _interopRequireDefault(_TaskList);

var _NewTask = __webpack_require__(145);

var _NewTask2 = _interopRequireDefault(_NewTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import TagsDropDown from './TagsDropDown'

exports.NewTask = _NewTask2.default;
exports.Task = _Task2.default;
exports.TaskList = _TaskList2.default;

/***/ })

})
//# sourceMappingURL=0.fc8ade57caef784ae477.hot-update.js.map