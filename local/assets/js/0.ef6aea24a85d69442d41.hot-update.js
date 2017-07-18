webpackHotUpdate(0,{

/***/ 142:
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

var _actions = __webpack_require__(141);

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
		_this.addNewTag = _this.addNewTag.bind(_this);
		_this.removeTag = _this.removeTag.bind(_this);

		_this.state = {
			tag: '',
			tags: []
		};

		return _this;
	}

	_createClass(Tags, [{
		key: 'removeTag',
		value: function removeTag(e) {
			e.preventDefault();
			this.props.removeTag(e.target.value);
		}
	}, {
		key: 'addTagToList',
		value: function addTagToList(e) {
			e.preventDefault();
			this.setState({
				tags: e.target.value
			});
			e.target.value = '';
		}
	}, {
		key: 'addNewTag',
		value: function addNewTag(e) {
			e.preventDefault();
			this.props.addTag(this.state.tag);
			e.target.value = '';
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
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ id: 'tags' },
				_react2.default.createElement(
					'ul',
					null,
					this.state.tags.map(function (tag, i) {
						return _react2.default.createElement(
							'li',
							{ key: i },
							_react2.default.createElement(
								'div',
								{ value: tag },
								' ',
								tag,
								' ',
								_react2.default.createElement('input', { type: 'checkbox' }),
								' ',
								_react2.default.createElement(
									'button',
									{ onClick: _this2.removeTag },
									'x'
								)
							)
						);
					})
				),
				_react2.default.createElement(
					'form',
					{ onSubmit: this.addTagToList },
					_react2.default.createElement('input', { type: 'text', autoComplete: 'off', name: 'tags', onChange: this.handleChange, value: this.state.tag, placeholder: 'Add New Tag' })
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
	handleChange: _propTypes2.default.func,
	addTagToTask: _propTypes2.default.func,
	removeTag: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tags: state.tags
	};
}, {
	addTag: _actions.addTag,
	addTagToTask: _actions.addTagToTask,
	removeTag: _actions.removeTag
})(Tags);

/***/ })

})
//# sourceMappingURL=0.ef6aea24a85d69442d41.hot-update.js.map