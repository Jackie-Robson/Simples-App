webpackHotUpdate(0,{

/***/ 329:
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

/***/ })

})
//# sourceMappingURL=0.6751bebd61a607f71a6c.hot-update.js.map