webpackHotUpdate(0,{

/***/ 327:
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

var _Dropdown = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../lib/components/Dropdown.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountDropdown = function (_Component) {
  _inherits(AccountDropdown, _Component);

  function AccountDropdown(props) {
    _classCallCheck(this, AccountDropdown);

    var _this = _possibleConstructorReturn(this, (AccountDropdown.__proto__ || Object.getPrototypeOf(AccountDropdown)).call(this, props));

    _this.handleLinkClick = _this.handleLinkClick.bind(_this);
    return _this;
  }

  _createClass(AccountDropdown, [{
    key: 'handleLinkClick',
    value: function handleLinkClick() {
      this.refs.dropdown.hide();
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;


      return _react2.default.createElement(
        _Dropdown2.default,
        { className: 'account-dropdown', ref: 'dropdown' },
        _react2.default.createElement(
          _Dropdown.DropdownTrigger,
          null,
          _react2.default.createElement('img', { className: 'account-dropdown__avatar', src: user.avatar_url }),
          _react2.default.createElement(
            'span',
            { className: 'account-dropdown__name' },
            'My Account'
          )
        ),
        _react2.default.createElement(
          _Dropdown.DropdownContent,
          null,
          _react2.default.createElement(
            'div',
            { className: 'account-dropdown__identity account-dropdown__segment' },
            'Signed in as ',
            _react2.default.createElement(
              'strong',
              null,
              user.name
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'account-dropdown__quick-links account-dropdown__segment' },
            _react2.default.createElement(
              'li',
              { className: 'account-dropdown__link' },
              _react2.default.createElement(
                'a',
                { className: 'account-dropdown__link__anchor', href: '#', onClick: this.handleLinkClick },
                'Your profile'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'account-dropdown__link' },
              _react2.default.createElement(
                'a',
                { className: 'account-dropdown__link__anchor', href: '#', onClick: this.handleLinkClick },
                'Your stars'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'account-dropdown__link' },
              _react2.default.createElement(
                'a',
                { className: 'account-dropdown__link__anchor', href: '#', onClick: this.handleLinkClick },
                'Explore'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'account-dropdown__link' },
              _react2.default.createElement(
                'a',
                { className: 'account-dropdown__link__anchor', href: '#', onClick: this.handleLinkClick },
                'Help'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'account-dropdown__management-links account-dropdown__segment' },
            _react2.default.createElement(
              'li',
              { className: 'account-dropdown__link' },
              _react2.default.createElement(
                'a',
                { className: 'account-dropdown__link__anchor', href: '#', onClick: this.handleLinkClick },
                'Settings'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'account-dropdown__link' },
              _react2.default.createElement(
                'a',
                { className: 'account-dropdown__link__anchor', href: '#', onClick: this.handleLinkClick },
                'Sign out'
              )
            )
          )
        )
      );
    }
  }]);

  return AccountDropdown;
}(_react.Component);

AccountDropdown.propTypes = {
  user: _propTypes2.default.object.isRequired
};

exports.default = TagsDropDown;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TagsDropDown = exports.TaskList = exports.Task = exports.NewTask = undefined;

var _Task = __webpack_require__(74);

var _Task2 = _interopRequireDefault(_Task);

var _TaskList = __webpack_require__(146);

var _TaskList2 = _interopRequireDefault(_TaskList);

var _NewTask = __webpack_require__(145);

var _NewTask2 = _interopRequireDefault(_NewTask);

var _TagsDropDown = __webpack_require__(327);

var _TagsDropDown2 = _interopRequireDefault(_TagsDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NewTask = _NewTask2.default;
exports.Task = _Task2.default;
exports.TaskList = _TaskList2.default;
exports.TagsDropDown = _TagsDropDown2.default;

/***/ })

})
//# sourceMappingURL=0.bd0a2fa723b71bb0a858.hot-update.js.map