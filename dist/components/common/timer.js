"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_wepy$component) {
  _inherits(Timer, _wepy$component);

  function Timer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timer.__proto__ || Object.getPrototypeOf(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      startTime: {
        default: ""
      },
      endTime: {
        default: ""
      }
    }, _this.data = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      totalDay: 0,
      isShow: false,
      interval: {},
      endTxt: "\n00:00:00"
    }, _this.methods = {
      initTimer: function initTimer(val) {
        var _this2 = this;

        console.log(val);
        var date = new Date();
        this.startTime = val.startTime;
        this.endTime = val.endTime;
        //开始时间(.replace(/(-)/g, '/')解决ios 不兼容问题)
        var startDay = new Date(this.startTime.replace(/(-)/g, '/'));
        //结束时间
        var endDay = new Date(this.endTime.replace(/(-)/g, '/'));

        //总共时间(单位s)
        var totalDay = Math.floor((endDay - startDay) / 1000);

        // 计算时会发生隐式转换，调用valueOf()方法，转化成时间戳的形式
        var days = (endDay - date) / 1000 / 3600 / 24;

        //计算是当前时间是否在区间内
        if (startDay < date && date < endDay) {
          this.isShow = true;
        }

        var day = Math.floor(days);
        var hours = (days - day) * 24;
        var hour = Math.floor(hours);
        var minutes = (hours - hour) * 60;
        var minute = Math.floor(minutes);
        var seconds = (minutes - minute) * 60;
        var second = Math.floor(seconds);

        //赋值
        this.day = day;
        //this.hour = day * 24 + hour;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.totalDay = totalDay;

        this.interval = setInterval(function () {
          if (--_this2.second < 0) {
            _this2.minute--;
            _this2.second = 59;
            _this2.$apply();
          }

          if (_this2.minute < 0) {
            _this2.hour--;
            _this2.minute = 59;
            _this2.$apply();
          }
          if (_this2.hour < 0) {
            _this2.minute = 0;
            _this2.second = 0;
            _this2.isShow = false;
            _this2.$apply();
            clearInterval(_this2.interval);
          }
          _this2.$apply();
        }, 1000);

        this.$apply();
      }
    }, _this.computed = {
      strD: function strD() {
        return this.day;
      },
      strH: function strH() {
        return this.hour < 10 ? "0" + this.hour : this.hour;
      },
      strM: function strM() {
        return this.minute < 10 ? "0" + this.minute : this.minute;
      },
      strS: function strS() {
        return this.second < 10 ? "0" + this.second : this.second;
      },
      total: function total() {
        return this.hour * 60 * 60 + this.minute * 60 + this.second;
      },
      rotate1: function rotate1() {
        var a = 360 - 360 / this.totalDay * this.total;
        return a < 180 ? a : 180;
      },
      rotate2: function rotate2() {
        var b = 360 - 360 / this.totalDay * this.total;
        return b > 180 ? b - 180 : 0;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timer, [{
    key: "onLoad",
    value: function onLoad() {
      this.isShow = false;
      this.day = 0;
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      this.totalDay = 0;
      this.startTime = "";
      this.endTime = "";
      clearInterval(this.interval);
    }
  }, {
    key: "onUnload",
    value: function onUnload() {
      console.log("onUnload....");
      clearInterval(this.interval);
    }
  }, {
    key: "onHide",
    value: function onHide() {
      console.log("onHide....");
      clearInterval(this.interval);
    }
  }]);

  return Timer;
}(_wepy2.default.component);

exports.default = Timer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmpzIl0sIm5hbWVzIjpbIlRpbWVyIiwicHJvcHMiLCJzdGFydFRpbWUiLCJkZWZhdWx0IiwiZW5kVGltZSIsImRhdGEiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwidG90YWxEYXkiLCJpc1Nob3ciLCJpbnRlcnZhbCIsImVuZFR4dCIsIm1ldGhvZHMiLCJpbml0VGltZXIiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF0ZSIsIkRhdGUiLCJzdGFydERheSIsInJlcGxhY2UiLCJlbmREYXkiLCJNYXRoIiwiZmxvb3IiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNldEludGVydmFsIiwiJGFwcGx5IiwiY2xlYXJJbnRlcnZhbCIsImNvbXB1dGVkIiwic3RyRCIsInN0ckgiLCJzdHJNIiwic3RyUyIsInRvdGFsIiwicm90YXRlMSIsImEiLCJyb3RhdGUyIiwiYiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVc7QUFDVEMsaUJBQVM7QUFEQSxPQURMO0FBSU5DLGVBQVM7QUFDUEQsaUJBQVM7QUFERjtBQUpILEssUUFRUkUsSSxHQUFPO0FBQ0xDLFdBQUssQ0FEQTtBQUVMQyxZQUFNLENBRkQ7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGNBQVEsQ0FKSDtBQUtMQyxnQkFBVSxDQUxMO0FBTUxDLGNBQVEsS0FOSDtBQU9MQyxnQkFBVSxFQVBMO0FBUUxDLGNBQU87QUFSRixLLFFBdUJQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsR0FERixFQUNPO0FBQUE7O0FBQ2JDLGdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxZQUFJRyxPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBLGFBQUtsQixTQUFMLEdBQWlCYyxJQUFJZCxTQUFyQjtBQUNBLGFBQUtFLE9BQUwsR0FBZVksSUFBSVosT0FB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QUwsR0FBWSxFQUFaLEdBQWlCLEVBQWxCLEdBQXlCLEtBQUtDLE1BQUwsR0FBYyxFQUF2QyxHQUE2QyxLQUFLQyxNQUF6RDtBQUNELE9BZlE7QUFnQlQ4QixhQWhCUyxxQkFnQkM7QUFDUixZQUFJQyxJQUFJLE1BQU8sTUFBTSxLQUFLOUIsUUFBWixHQUF3QixLQUFLNEIsS0FBM0M7QUFDQSxlQUFPRSxJQUFJLEdBQUosR0FBVUEsQ0FBVixHQUFjLEdBQXJCO0FBQ0QsT0FuQlE7QUFvQlRDLGFBcEJTLHFCQW9CQztBQUNSLFlBQUlDLElBQUksTUFBTyxNQUFNLEtBQUtoQyxRQUFaLEdBQXdCLEtBQUs0QixLQUEzQztBQUNBLGVBQU9JLElBQUksR0FBSixHQUFVQSxJQUFJLEdBQWQsR0FBb0IsQ0FBM0I7QUFDRDtBQXZCUSxLOzs7Ozs2QkF4RkY7QUFDUCxXQUFLL0IsTUFBTCxHQUFjLEtBQWQ7QUFDQSxXQUFLTCxHQUFMLEdBQVcsQ0FBWDtBQUNBLFdBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLUixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsV0FBS0UsT0FBTCxHQUFlLEVBQWY7QUFDQTRCLG9CQUFjLEtBQUtwQixRQUFuQjtBQUNEOzs7K0JBb0VVO0FBQ1RLLGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FjLG9CQUFjLEtBQUtwQixRQUFuQjtBQUNEOzs7NkJBRVE7QUFDUEssY0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDQWMsb0JBQWMsS0FBS3BCLFFBQW5CO0FBQ0Q7Ozs7RUExR2dDLGVBQUsrQixTOztrQkFBbkIzQyxLIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgc3RhcnRUaW1lOiB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgIH0sXHJcbiAgICBlbmRUaW1lOiB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgIH1cclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGRheTogMCxcclxuICAgIGhvdXI6IDAsXHJcbiAgICBtaW51dGU6IDAsXHJcbiAgICBzZWNvbmQ6IDAsXHJcbiAgICB0b3RhbERheTogMCxcclxuICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICBpbnRlcnZhbDoge30sXHJcbiAgICBlbmRUeHQ6XCJcXG4wMDowMDowMFwiXHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5kYXkgPSAwO1xyXG4gICAgdGhpcy5ob3VyID0gMDtcclxuICAgIHRoaXMubWludXRlID0gMDtcclxuICAgIHRoaXMuc2Vjb25kID0gMDtcclxuICAgIHRoaXMudG90YWxEYXkgPSAwO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSBcIlwiO1xyXG4gICAgdGhpcy5lbmRUaW1lID0gXCJcIjtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgaW5pdFRpbWVyKHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gdmFsLnN0YXJ0VGltZTtcclxuICAgICAgdGhpcy5lbmRUaW1lID0gdmFsLmVuZFRpbWU7XHJcbiAgICAgIC8v5byA5aeL5pe26Ze0KC5yZXBsYWNlKC8oLSkvZywgJy8nKeino+WGs2lvcyDkuI3lhbzlrrnpl67popgpXHJcbiAgICAgIGxldCBzdGFydERheSA9IG5ldyBEYXRlKHRoaXMuc3RhcnRUaW1lLnJlcGxhY2UoLygtKS9nLCAnLycpKTtcclxuICAgICAgLy/nu5PmnZ/ml7bpl7RcclxuICAgICAgbGV0IGVuZERheSA9IG5ldyBEYXRlKHRoaXMuZW5kVGltZS5yZXBsYWNlKC8oLSkvZywgJy8nKSk7XHJcblxyXG4gICAgICAvL+aAu+WFseaXtumXtCjljZXkvY1zKVxyXG4gICAgICBsZXQgdG90YWxEYXkgPSBNYXRoLmZsb29yKChlbmREYXkgLSBzdGFydERheSkgLyAxMDAwKTtcclxuXHJcblxyXG4gICAgICAvLyDorqHnrpfml7bkvJrlj5HnlJ/pmpDlvI/ovazmjaLvvIzosIPnlKh2YWx1ZU9mKCnmlrnms5XvvIzovazljJbmiJDml7bpl7TmiLPnmoTlvaLlvI9cclxuICAgICAgbGV0IGRheXMgPSAoZW5kRGF5IC0gZGF0ZSkgLyAxMDAwIC8gMzYwMCAvIDI0O1xyXG5cclxuXHJcbiAgICAgIC8v6K6h566X5piv5b2T5YmN5pe26Ze05piv5ZCm5Zyo5Yy66Ze05YaFXHJcbiAgICAgIGlmIChzdGFydERheSA8IGRhdGUgJiYgZGF0ZSA8IGVuZERheSkge1xyXG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGRheSA9IE1hdGguZmxvb3IoZGF5cyk7XHJcbiAgICAgIGxldCBob3VycyA9IChkYXlzIC0gZGF5KSAqIDI0O1xyXG4gICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IoaG91cnMpO1xyXG4gICAgICBsZXQgbWludXRlcyA9IChob3VycyAtIGhvdXIpICogNjA7XHJcbiAgICAgIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKG1pbnV0ZXMpO1xyXG4gICAgICBsZXQgc2Vjb25kcyA9IChtaW51dGVzIC0gbWludXRlKSAqIDYwO1xyXG4gICAgICBsZXQgc2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmRzKTtcclxuXHJcbiAgICAgIC8v6LWL5YC8XHJcbiAgICAgIHRoaXMuZGF5ID0gZGF5O1xyXG4gICAgICAvL3RoaXMuaG91ciA9IGRheSAqIDI0ICsgaG91cjtcclxuICAgICAgdGhpcy5ob3VyID0gaG91cjtcclxuICAgICAgdGhpcy5taW51dGUgPSBtaW51dGU7XHJcbiAgICAgIHRoaXMuc2Vjb25kID0gc2Vjb25kO1xyXG4gICAgICB0aGlzLnRvdGFsRGF5ID0gdG90YWxEYXk7XHJcblxyXG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICgoLS10aGlzLnNlY29uZCkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLm1pbnV0ZS0tO1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmQgPSA1OTtcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5taW51dGUgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLmhvdXItLTtcclxuICAgICAgICAgIHRoaXMubWludXRlID0gNTk7XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ob3VyIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy5taW51dGUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmQgPSAwO1xyXG4gICAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVubG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwib25VbmxvYWQuLi4uXCIpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICB9XHJcblxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwib25IaWRlLi4uLlwiKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIHN0ckQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRheTtcclxuICAgIH0sXHJcbiAgICBzdHJIKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3VyIDwgMTAgPyBcIjBcIiArIHRoaXMuaG91ciA6IHRoaXMuaG91cjtcclxuICAgIH0sXHJcbiAgICBzdHJNKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5taW51dGUgPCAxMCA/IFwiMFwiICsgdGhpcy5taW51dGUgOiB0aGlzLm1pbnV0ZTtcclxuICAgIH0sXHJcbiAgICBzdHJTKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWNvbmQgPCAxMCA/IFwiMFwiICsgdGhpcy5zZWNvbmQgOiB0aGlzLnNlY29uZDtcclxuICAgIH0sXHJcbiAgICB0b3RhbCgpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmhvdXIgKiA2MCAqIDYwKSArICh0aGlzLm1pbnV0ZSAqIDYwKSArIHRoaXMuc2Vjb25kO1xyXG4gICAgfSxcclxuICAgIHJvdGF0ZTEoKSB7XHJcbiAgICAgIGxldCBhID0gMzYwIC0gKDM2MCAvIHRoaXMudG90YWxEYXkpICogdGhpcy50b3RhbDtcclxuICAgICAgcmV0dXJuIGEgPCAxODAgPyBhIDogMTgwXHJcbiAgICB9LFxyXG4gICAgcm90YXRlMigpIHtcclxuICAgICAgbGV0IGIgPSAzNjAgLSAoMzYwIC8gdGhpcy50b3RhbERheSkgKiB0aGlzLnRvdGFsO1xyXG4gICAgICByZXR1cm4gYiA+IDE4MCA/IGIgLSAxODAgOiAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19