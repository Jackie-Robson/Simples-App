webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = __webpack_require__(327);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_React$Component) {
	_inherits(Tags, _React$Component);

	function Tags() {
		_classCallCheck(this, Tags);

		var _this = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this));

		_this.state = {
			isOn: false,
			tags: ['Urgent', 'Internal', 'Design', 'Add Functionality']
		};
		return _this;
	}

	_createClass(Tags, [{
		key: 'addTag',
		value: function addTag(e) {
			e.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'ul',
				null,
				this.state.tags.map(function (tag, i) {
					return React.createElement(
						'li',
						{ key: i },
						React.createElement(
							'button',
							{ className: _this2.state.isTagOn, name: tag, value: tag, onClick: _this2.addTag },
							tag,
							' '
						)
					);
				})
			);
		}
	}]);

	return Tags;
}(React.Component);

exports.default = Tags;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TagList = exports.Tag = undefined;

var _Tag = __webpack_require__(128);

var _Tag2 = _interopRequireDefault(_Tag);

var _TagList = __webpack_require__(129);

var _TagList2 = _interopRequireDefault(_TagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tag = _Tag2.default;
exports.TagList = _TagList2.default;

/***/ })

})
//# sourceMappingURL=0.2ee77feed092d457f5ff.hot-update.js.map