'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _filterSlider = require('./filterSlider.js');

var _filterSlider2 = _interopRequireDefault(_filterSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filterBar = function (_wepy$component) {
  _inherits(filterBar, _wepy$component);

  function filterBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, filterBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = filterBar.__proto__ || Object.getPrototypeOf(filterBar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      currentType: "",
      arrowType: "",
      flag: false,
      type: "desc"
    }, _this.components = {
      filterSlider: _filterSlider2.default
    }, _this.methods = {
      filterSearch: function filterSearch() {
        this.$invoke('filterSlider', 'swictchOverlay', true);
      },
      orderBy: function orderBy(e) {
        var that = this;
        if (that.data.currentType == e.target.dataset.current) {
          if (e.target.dataset.current !== "price") {
            return false;
          }
        } else {
          that.currentType = e.target.dataset.current;
        }
        that.priceOrderBy(e.target.dataset.current);
        that.$apply();
      }
    }, _this.watch = {
      currentType: function currentType(newValue) {
        this.$emit("currentType", {
          name: newValue,
          type: 'desc'
        });
      },
      arrowType: function arrowType(newValue, oldValue) {
        if (oldValue !== "" && newValue !== "") {
          this.$emit("currentType", {
            name: "price",
            type: newValue
          });
        }
      }
    }, _this.events = {
      filterSku: function filterSku(sku) {
        console.log("filterBar.sku...." + sku);
        this.setSkuVal(sku);
        /*this.$emit("currentType", {
          name: "sku",
          type: sku
        });*/
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(filterBar, [{
    key: 'priceOrderBy',
    value: function priceOrderBy(orderBy) {
      var that = this;
      if (orderBy == "price") {
        if (that.arrowType === "desc") {
          that.arrowType = "asc";
        } else {
          that.arrowType = "desc";
        }
      } else {
        that.arrowType = "";
      }
    }
  }, {
    key: 'setSkuVal',
    value: function setSkuVal(sku) {
      /*this.type = "sku";
      this.currentType = sku;*/
      this.$emit("currentType", {
        name: "sku",
        type: sku
      });
    }
  }]);

  return filterBar;
}(_wepy2.default.component);

exports.default = filterBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcl9iYXIuanMiXSwibmFtZXMiOlsiZmlsdGVyQmFyIiwiZGF0YSIsImN1cnJlbnRUeXBlIiwiYXJyb3dUeXBlIiwiZmxhZyIsInR5cGUiLCJjb21wb25lbnRzIiwiZmlsdGVyU2xpZGVyIiwibWV0aG9kcyIsImZpbHRlclNlYXJjaCIsIiRpbnZva2UiLCJvcmRlckJ5IiwiZSIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY3VycmVudCIsInByaWNlT3JkZXJCeSIsIiRhcHBseSIsIndhdGNoIiwibmV3VmFsdWUiLCIkZW1pdCIsIm5hbWUiLCJvbGRWYWx1ZSIsImV2ZW50cyIsImZpbHRlclNrdSIsInNrdSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTa3VWYWwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsbUJBQWEsRUFEUjtBQUVMQyxpQkFBVyxFQUZOO0FBR0xDLFlBQU0sS0FIRDtBQUlMQyxZQUFNO0FBSkQsSyxRQU1QQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBR2JDLE8sR0FBVTtBQUNSQyxrQkFEUSwwQkFDTztBQUNiLGFBQUtDLE9BQUwsQ0FBYSxjQUFiLEVBQTZCLGdCQUE3QixFQUErQyxJQUEvQztBQUNELE9BSE87QUFJUkMsYUFKUSxtQkFJQUMsQ0FKQSxFQUlHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS1osSUFBTCxDQUFVQyxXQUFWLElBQXlCVSxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLE9BQTlDLEVBQXVEO0FBQ3JELGNBQUlKLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBakIsS0FBNkIsT0FBakMsRUFBMEM7QUFDeEMsbUJBQU8sS0FBUDtBQUNEO0FBQ0YsU0FKRCxNQUlPO0FBQ0xILGVBQUtYLFdBQUwsR0FBbUJVLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBcEM7QUFDRDtBQUNESCxhQUFLSSxZQUFMLENBQWtCTCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLE9BQW5DO0FBQ0FILGFBQUtLLE1BQUw7QUFDRDtBQWZPLEssUUF1Q1ZDLEssR0FBUTtBQUNOakIsaUJBRE0sdUJBQ01rQixRQUROLEVBQ2dCO0FBQ3BCLGFBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCO0FBQ3hCQyxnQkFBTUYsUUFEa0I7QUFFeEJmLGdCQUFNO0FBRmtCLFNBQTFCO0FBSUQsT0FOSztBQU9ORixlQVBNLHFCQU9JaUIsUUFQSixFQU9jRyxRQVBkLEVBT3dCO0FBQzVCLFlBQUlBLGFBQWEsRUFBYixJQUFtQkgsYUFBYSxFQUFwQyxFQUF3QztBQUN0QyxlQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQjtBQUN4QkMsa0JBQU0sT0FEa0I7QUFFeEJqQixrQkFBTWU7QUFGa0IsV0FBMUI7QUFJRDtBQUNGO0FBZEssSyxRQWdCUkksTSxHQUFTO0FBQ1BDLGVBRE8scUJBQ0dDLEdBREgsRUFDUTtBQUNiQyxnQkFBUUMsR0FBUixDQUFZLHNCQUFvQkYsR0FBaEM7QUFDQSxhQUFLRyxTQUFMLENBQWVILEdBQWY7QUFDQTs7OztBQUlEO0FBUk0sSzs7Ozs7aUNBdENJZixPLEVBQVM7QUFDcEIsVUFBSUUsT0FBTyxJQUFYO0FBQ0EsVUFBSUYsV0FBVyxPQUFmLEVBQXdCO0FBQ3RCLFlBQUlFLEtBQUtWLFNBQUwsS0FBbUIsTUFBdkIsRUFBK0I7QUFDN0JVLGVBQUtWLFNBQUwsR0FBaUIsS0FBakI7QUFDRCxTQUZELE1BRU87QUFDTFUsZUFBS1YsU0FBTCxHQUFpQixNQUFqQjtBQUNEO0FBQ0YsT0FORCxNQU1PO0FBQ0xVLGFBQUtWLFNBQUwsR0FBaUIsRUFBakI7QUFDRDtBQUNGOzs7OEJBRVV1QixHLEVBQUs7QUFDZDs7QUFFQSxXQUFLTCxLQUFMLENBQVcsYUFBWCxFQUEwQjtBQUN4QkMsY0FBTSxLQURrQjtBQUV4QmpCLGNBQU1xQjtBQUZrQixPQUExQjtBQUlEOzs7O0VBL0NvQyxlQUFLSSxTOztrQkFBdkI5QixTIiwiZmlsZSI6ImZpbHRlcl9iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgRmlsdGVyU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpbHRlckJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGN1cnJlbnRUeXBlOiBcIlwiLFxyXG4gICAgICBhcnJvd1R5cGU6IFwiXCIsXHJcbiAgICAgIGZsYWc6IGZhbHNlLFxyXG4gICAgICB0eXBlOiBcImRlc2NcIlxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgZmlsdGVyU2xpZGVyOiBGaWx0ZXJTbGlkZXJcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGZpbHRlclNlYXJjaCgpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ2ZpbHRlclNsaWRlcicsICdzd2ljdGNoT3ZlcmxheScsIHRydWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5KGUpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoYXQuZGF0YS5jdXJyZW50VHlwZSA9PSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpIHtcclxuICAgICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQgIT09IFwicHJpY2VcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuY3VycmVudFR5cGUgPSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucHJpY2VPcmRlckJ5KGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudClcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmljZU9yZGVyQnkob3JkZXJCeSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGlmIChvcmRlckJ5ID09IFwicHJpY2VcIikge1xyXG4gICAgICAgIGlmICh0aGF0LmFycm93VHlwZSA9PT0gXCJkZXNjXCIpIHtcclxuICAgICAgICAgIHRoYXQuYXJyb3dUeXBlID0gXCJhc2NcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5hcnJvd1R5cGUgPSBcImRlc2NcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhhdC5hcnJvd1R5cGUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2t1VmFsIChza3UpIHtcclxuICAgICAgLyp0aGlzLnR5cGUgPSBcInNrdVwiO1xyXG4gICAgICB0aGlzLmN1cnJlbnRUeXBlID0gc2t1OyovXHJcbiAgICAgIHRoaXMuJGVtaXQoXCJjdXJyZW50VHlwZVwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJza3VcIixcclxuICAgICAgICB0eXBlOiBza3VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2ggPSB7XHJcbiAgICAgIGN1cnJlbnRUeXBlKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdChcImN1cnJlbnRUeXBlXCIsIHtcclxuICAgICAgICAgIG5hbWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgdHlwZTogJ2Rlc2MnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFycm93VHlwZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IFwiXCIgJiYgbmV3VmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoXCJjdXJyZW50VHlwZVwiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicHJpY2VcIixcclxuICAgICAgICAgICAgdHlwZTogbmV3VmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICBmaWx0ZXJTa3Uoc2t1KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJCYXIuc2t1Li4uLlwiK3NrdSk7XHJcbiAgICAgICAgdGhpcy5zZXRTa3VWYWwoc2t1KTtcclxuICAgICAgICAvKnRoaXMuJGVtaXQoXCJjdXJyZW50VHlwZVwiLCB7XHJcbiAgICAgICAgICBuYW1lOiBcInNrdVwiLFxyXG4gICAgICAgICAgdHlwZTogc2t1XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19