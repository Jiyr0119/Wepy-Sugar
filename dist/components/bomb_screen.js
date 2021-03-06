"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bombScreen = function (_wepy$component) {
  _inherits(bombScreen, _wepy$component);

  function bombScreen() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, bombScreen);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bombScreen.__proto__ || Object.getPrototypeOf(bombScreen)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
      show: {
        default: false
      },
      types: {
        default: 0
      }
    }, _this.events = {}, _this.methods = {
      close: function close() {
        this.show = false;
        this.$emit("close");
      },
      callback: function callback() {
        this.$emit("callback");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(bombScreen, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return bombScreen;
}(_wepy2.default.component);

exports.default = bombScreen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbWJfc2NyZWVuLmpzIl0sIm5hbWVzIjpbImJvbWJTY3JlZW4iLCJkYXRhIiwicHJvcHMiLCJzaG93IiwiZGVmYXVsdCIsInR5cGVzIiwiZXZlbnRzIiwibWV0aG9kcyIsImNsb3NlIiwiJGVtaXQiLCJjYWxsYmFjayIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxJLEdBQU8sRSxRQUdQQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxpQkFBUztBQURMLE9BREE7QUFJTkMsYUFBTztBQUNMRCxpQkFBUztBQURKO0FBSkQsSyxRQVFSRSxNLEdBQVMsRSxRQUdUQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLGFBQUtMLElBQUwsR0FBWSxLQUFaO0FBQ0EsYUFBS00sS0FBTCxDQUFXLE9BQVg7QUFDRCxPQUpPO0FBS1JDLGNBTFEsc0JBS0c7QUFDVCxhQUFLRCxLQUFMLENBQVcsVUFBWDtBQUNEO0FBUE8sSzs7Ozs7NkJBVUQsQ0FFUjs7OztFQTNCcUMsZUFBS0UsUzs7a0JBQXhCWCxVIiwiZmlsZSI6ImJvbWJfc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib21iU2NyZWVuIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcblxyXG4gIH1cclxuICBwcm9wcyA9IHtcclxuICAgIHNob3c6IHtcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB0eXBlczoge1xyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHtcclxuXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZVwiKVxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KFwiY2FsbGJhY2tcIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=