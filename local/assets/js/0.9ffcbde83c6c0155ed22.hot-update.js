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

var _components = __webpack_require__(339);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_React$Component) {
	_inherits(Tags, _React$Component);

	function Tags(props) {
		_classCallCheck(this, Tags);

		var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

		_this.addTag = _this.addTag.bind(_this);
		_this.state = {
			isOn: false,
			tags: ['Urgent', 'Internal', 'Design', 'Add Functionality']
		};

		return _this;
	}

	_createClass(Tags, [{
		key: 'removeTag',
		value: function removeTag(e) {
			e.preventDefault;
			this.props.handleRemoveTag(e.target.value);
		}
	}, {
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();
			this.props.handleAddTag(e.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'TagsForm' },
				_react2.default.createElement(
					'form',
					null,
					'lable: Add Tags',
					_react2.default.createElement(
						'input',
						{ type: 'text', onSubmit: this.addTag },
						' Tag Name '
					)
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
	handleAddTag: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tags: state.tags
	};
}, {})(Tags);

/***/ }),

/***/ 338:
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

var Tag = function (_React$Component) {
	_inherits(Tag, _React$Component);

	function Tag() {
		_classCallCheck(this, Tag);

		var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this));

		_this.state = {
			done: false
		};

		return _this;
	}

	// handleDelete(e) {
	//
	// 	e.preventDefault
	// 	this.setState({
	// 		done: true,
	// 	})
	//
	// }

	_createClass(Tag, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'button',
				{ value: this.props.tag },
				' ',
				this.props.tag,
				' '
			);
		}
	}]);

	return Tag;
}(_react2.default.Component);

Tag.propTypes = {
	tag: _propTypes2.default.string
};

exports.default = Tag;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Tag = undefined;

var _Tag = __webpack_require__(338);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tag = _Tag2.default;

/***/ })

})
//# sourceMappingURL=0.9ffcbde83c6c0155ed22.hot-update.js.map