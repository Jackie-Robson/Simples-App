webpackHotUpdate(0,{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tag = __webpack_require__(128);

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagList = function (_React$Component) {
	_inherits(TagList, _React$Component);

	function TagList(props) {
		_classCallCheck(this, TagList);

		return _possibleConstructorReturn(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).call(this, props));
	}

	_createClass(TagList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'ul',
				{ id: 'tags' },
				this.props.tasks.list[i].tags.map(function (tag, i) {
					return _react2.default.createElement(_Tag2.default, { key: i, tag: tag });
				})
			);
		}
	}]);

	return TagList;
}(_react2.default.Component);

TagList.propTypes = {
	tags: _propTypes2.default.array
};

exports.default = connect(function (state) {
	return {
		tags: state.tags
	};
}, {})(TaskList);

/***/ })

})
//# sourceMappingURL=0.949336cebbc9bafb2a07.hot-update.js.map