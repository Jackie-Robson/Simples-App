webpackHotUpdate(0,{

/***/ 331:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (78:3)\n\n\u001b[0m \u001b[90m 76 | \u001b[39m\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m id\u001b[33m=\u001b[39m\u001b[32m\"submitBtn\"\u001b[39m type\u001b[33m=\u001b[39m\u001b[32m\"submit\"\u001b[39m value\u001b[33m=\u001b[39m\u001b[32m\"Submit\"\u001b[39m onChange\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mhandleSubmit}\u001b[33m>\u001b[39msubmit\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 77 | \u001b[39m\t\t\t\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mform\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 78 | \u001b[39m\t\t)ß\n \u001b[90m    | \u001b[39m\t\t \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 79 | \u001b[39m\t}\n \u001b[90m 80 | \u001b[39m}\n \u001b[90m 81 | \u001b[39m\u001b[90m// <button className ={isTagOn} name=\"Urgent\" value=\"Urgent\" onClick={this.addTag,this.isOn}>Urgent </button>\u001b[39m\u001b[0m\n");

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
				{ id: '{menuClass}' },
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement(_components.NewTask, null)
				)
			);
		}
	}]);

	return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ }),

/***/ 335:
false

})
//# sourceMappingURL=0.d9cd5f54d975c062e101.hot-update.js.map