webpackHotUpdate(0,{

/***/ 337:
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

var _actions = __webpack_require__(340);

var _components = __webpack_require__(339);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_React$Component) {
	_inherits(Tags, _React$Component);

	function Tags(props) {
		_classCallCheck(this, Tags);

		var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		_this.removeTag = _this.removeTag.bind(_this);
		_this.addTag = _this.addTag.bind(_this);

		_this.state = {
			isOn: false,
			tags: []
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
			this.props.handleAddTag(this.state.tags);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.setState(_defineProperty({}, event.target.name, event.target.value));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'form',
					{ onSubmit: this.addTag },
					'Add Tags',
					_react2.default.createElement('input', { type: 'text', onChange: this.handleChange, placeholder: 'Tag Name' })
				),
				_react2.default.createElement(
					'ul',
					{ id: 'tags' },
					this.state.tags.map(function (tag, i) {
						return _react2.default.createElement(
							'li',
							{ key: i },
							_react2.default.createElement(_components.Tag, null)
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
	handleAddTag: _propTypes2.default.func,
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

/***/ 340:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (14:1)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m\t}\n \u001b[90m 13 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m})\n \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m\u001b[0m\n");

/***/ })

})
//# sourceMappingURL=0.62fd15536211c64163de.hot-update.js.map