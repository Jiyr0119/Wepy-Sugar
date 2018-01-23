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

var FilterSlider = function (_wepy$component) {
  _inherits(FilterSlider, _wepy$component);

  function FilterSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FilterSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilterSlider.__proto__ || Object.getPrototypeOf(FilterSlider)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      show: false,
      a: 0,
      skuval: ""
    }, _this.events = {}, _this.methods = {
      close: function close() {
        this.show = false;
      },
      SearchFilter: function SearchFilter() {
        this.swictchOverlay();
      },
      selSKU: function selSKU(e) {
        var sku = e.currentTarget.dataset.sku;
        console.log("sku---" + sku);
        this.$emit('filterSku', sku);
        this.swictchOverlay();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FilterSlider, [{
    key: "swictchOverlay",
    value: function swictchOverlay() {
      this.show = !this.show;
      this.$apply();
    }
  }, {
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return FilterSlider;
}(_wepy2.default.component);

exports.default = FilterSlider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlclNsaWRlci5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJTbGlkZXIiLCJkYXRhIiwic2hvdyIsImEiLCJza3V2YWwiLCJldmVudHMiLCJtZXRob2RzIiwiY2xvc2UiLCJTZWFyY2hGaWx0ZXIiLCJzd2ljdGNoT3ZlcmxheSIsInNlbFNLVSIsImUiLCJza3UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCIkZW1pdCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxLQUREO0FBRUxDLFNBQUcsQ0FGRTtBQUdMQyxjQUFRO0FBSEgsSyxRQUtQQyxNLEdBQVMsRSxRQUNUQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLGFBQUtMLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FITztBQUlSTSxrQkFKUSwwQkFJTTtBQUNaLGFBQUtDLGNBQUw7QUFDRCxPQU5PO0FBT1JDLFlBUFEsa0JBT0RDLENBUEMsRUFPRTtBQUNSLFlBQUlDLE1BQU1ELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixHQUFsQztBQUNBRyxnQkFBUUMsR0FBUixDQUFZLFdBQVNKLEdBQXJCO0FBQ0EsYUFBS0ssS0FBTCxDQUFXLFdBQVgsRUFBd0JMLEdBQXhCO0FBQ0EsYUFBS0gsY0FBTDtBQUNEO0FBWk8sSzs7Ozs7cUNBY087QUFDZixXQUFLUCxJQUFMLEdBQVksQ0FBQyxLQUFLQSxJQUFsQjtBQUNBLFdBQUtnQixNQUFMO0FBQ0Q7Ozs2QkFDUSxDQUFFOzs7O0VBekI2QixlQUFLQyxTOztrQkFBMUJuQixZIiwiZmlsZSI6ImZpbHRlclNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2xpZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGE6IDAsXHJcbiAgICAgIHNrdXZhbDogXCJcIlxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBTZWFyY2hGaWx0ZXIoKXtcclxuICAgICAgICB0aGlzLnN3aWN0Y2hPdmVybGF5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbFNLVShlKSB7XHJcbiAgICAgICAgdmFyIHNrdSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNrdTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNrdS0tLVwiK3NrdSk7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnZmlsdGVyU2t1Jywgc2t1KTtcclxuICAgICAgICB0aGlzLnN3aWN0Y2hPdmVybGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aWN0Y2hPdmVybGF5KCkge1xyXG4gICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge31cclxuICB9XHJcbiJdfQ==