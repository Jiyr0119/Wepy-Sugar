'use strict';

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

var Rate = function (_wepy$component) {
  _inherits(Rate, _wepy$component);

  function Rate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rate.__proto__ || Object.getPrototypeOf(Rate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      readonly: {
        default: false
      },
      key: {
        default: 0
      }
    }, _this.data = {
      stars: [0, 1, 2, 3, 4],
      normalSrc: '../images/normal.png',
      selectedSrc: '../images/selected.png',
      halfSrc: '../images/half.png'
    }, _this.events = {}, _this.methods = {
      //点击右边,半颗星
      selectLeft: function selectLeft(e) {
        var key = e.currentTarget.dataset.key;
        if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
          //只有一颗星的时候,再次点击,变为0颗
          this.key = 0;
        }
        this.key = key;
        this.$emit("change", this.key);
      },
      //点击左边,整颗星
      selectRight: function selectRight(e) {
        var key = e.currentTarget.dataset.key;
        this.key = key;
        this.$emit("change", this.key);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rate, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Rate;
}(_wepy2.default.component);

exports.default = Rate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUuanMiXSwibmFtZXMiOlsiUmF0ZSIsInByb3BzIiwicmVhZG9ubHkiLCJkZWZhdWx0Iiwia2V5IiwiZGF0YSIsInN0YXJzIiwibm9ybWFsU3JjIiwic2VsZWN0ZWRTcmMiLCJoYWxmU3JjIiwiZXZlbnRzIiwibWV0aG9kcyIsInNlbGVjdExlZnQiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsInNlbGVjdFJpZ2h0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxpQkFBUztBQURELE9BREo7QUFJTkMsV0FBSztBQUNIRCxpQkFBUztBQUROO0FBSkMsSyxRQVFSRSxJLEdBQU87QUFDTEMsYUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBREY7QUFFTEMsaUJBQVcsc0JBRk47QUFHTEMsbUJBQWEsd0JBSFI7QUFJTEMsZUFBUztBQUpKLEssUUFPUEMsTSxHQUFTLEUsUUFHVEMsTyxHQUFVO0FBQ1I7QUFDQUMsa0JBQVksb0JBQVNDLENBQVQsRUFBWTtBQUN0QixZQUFJVCxNQUFNUyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlgsR0FBbEM7QUFDQSxZQUFJLEtBQUtDLElBQUwsQ0FBVUQsR0FBVixJQUFpQixHQUFqQixJQUF3QlMsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYLEdBQXhCLElBQStCLEdBQTNELEVBQWdFO0FBQzlEO0FBQ0EsZUFBS0EsR0FBTCxHQUFXLENBQVg7QUFDRDtBQUNELGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtZLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtaLEdBQTFCO0FBQ0QsT0FWTztBQVdSO0FBQ0FhLG1CQUFhLHFCQUFTSixDQUFULEVBQVk7QUFDdkIsWUFBSVQsTUFBTVMsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JYLEdBQWxDO0FBQ0EsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBS1ksS0FBTCxDQUFXLFFBQVgsRUFBcUIsS0FBS1osR0FBMUI7QUFDRDtBQWhCTyxLOzs7Ozs2QkFtQkQsQ0FFUjs7OztFQXhDK0IsZUFBS2MsUzs7a0JBQWxCbEIsSSIsImZpbGUiOiJyYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgcmVhZG9ubHk6IHtcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBrZXk6IHtcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIHN0YXJzOiBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICBub3JtYWxTcmM6ICcuLi9pbWFnZXMvbm9ybWFsLnBuZycsXHJcbiAgICBzZWxlY3RlZFNyYzogJy4uL2ltYWdlcy9zZWxlY3RlZC5wbmcnLFxyXG4gICAgaGFsZlNyYzogJy4uL2ltYWdlcy9oYWxmLnBuZycsXHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcblxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy/ngrnlh7vlj7Povrks5Y2K6aKX5pifXHJcbiAgICBzZWxlY3RMZWZ0OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBrZXkgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXk7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEua2V5ID09IDAuNSAmJiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXkgPT0gMC41KSB7XHJcbiAgICAgICAgLy/lj6rmnInkuIDpopfmmJ/nmoTml7blgJks5YaN5qyh54K55Ye7LOWPmOS4ujDpopdcclxuICAgICAgICB0aGlzLmtleSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJjaGFuZ2VcIiwgdGhpcy5rZXkpXHJcbiAgICB9LFxyXG4gICAgLy/ngrnlh7vlt6bovrks5pW06aKX5pifXHJcbiAgICBzZWxlY3RSaWdodDogZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIga2V5ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQua2V5O1xyXG4gICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgdGhpcy4kZW1pdChcImNoYW5nZVwiLCB0aGlzLmtleSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=