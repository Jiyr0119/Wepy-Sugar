'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../../utils/constant.js');

var _api = require('./../../api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WepySignTime = function (_wepy$component) {
  _inherits(WepySignTime, _wepy$component);

  function WepySignTime() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WepySignTime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WepySignTime.__proto__ || Object.getPrototypeOf(WepySignTime)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [],
      aways: 0
      // arry : {
      //   days: [],
      //   aways: 0
      // }
    }, _this.methods = {
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.list[this.list.length - 1].signed = true;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WepySignTime, [{
    key: 'getSignDate',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("getSignDate");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 6;
                return _api2.default.getSignDate({
                  query: {
                    openId: openId
                  }
                });

              case 6:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.list = json.data.list;
                  console.log("console.log(this.list);");
                  console.log(this.list);
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                this.$apply();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSignDate() {
        return _ref2.apply(this, arguments);
      }

      return getSignDate;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getSignDate();
      // let arry = {
      //   days: [],
      //   aways: 0
      // }
      // this.list = arry;
      // console.log(this.arry)
      // this.list = this.arry.days;
      // this.aways = this.arry.aways;
    }
  }]);

  return WepySignTime;
}(_wepy2.default.component);

exports.default = WepySignTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktc2lnbi10aW1lLmpzIl0sIm5hbWVzIjpbIldlcHlTaWduVGltZSIsImRhdGEiLCJsaXN0IiwiYXdheXMiLCJtZXRob2RzIiwicmVmcmVzaExpc3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2lnbmVkIiwiJGFwcGx5IiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwiZ2V0U2lnbkRhdGUiLCJxdWVyeSIsImpzb24iLCJjb2RlIiwiZXJyb3IiLCJtc2ciLCJzaG93TG9hZGluZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7Ozs7Ozs7Ozs7OztJQUV1QkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQU5LLEssUUF5Q1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsR0FESixFQUNRO0FBQ2QsWUFBSUEsT0FBS0MsU0FBVCxFQUFvQjtBQUNwQkMsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCSCxHQUF2QjtBQUNBLGFBQUtKLElBQUwsQ0FBVSxLQUFLQSxJQUFMLENBQVVRLE1BQVYsR0FBaUIsQ0FBM0IsRUFBOEJDLE1BQTlCLEdBQXVDLElBQXZDO0FBQ0EsYUFBS0MsTUFBTDtBQUNEO0FBTk8sSzs7Ozs7Ozs7Ozs7O0FBL0JSSix3QkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDSUksb0IsR0FBTyxJO0FBQ1BDLCtCLEdBQWtCLGVBQUtDLGNBQUwsa0NBQTJDLEU7QUFDN0RDLHNCLEdBQVNGLGdCQUFnQkcsTTs7dUJBQ1YsY0FBSUMsV0FBSixDQUFnQjtBQUNqQ0MseUJBQU87QUFDTEgsNEJBQVFBO0FBREg7QUFEMEIsaUJBQWhCLEM7OztBQUFiSSxvQjs7QUFLTixvQkFBSUEsS0FBS25CLElBQUwsQ0FBVW9CLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsdUJBQUtuQixJQUFMLEdBQVlrQixLQUFLbkIsSUFBTCxDQUFVQyxJQUF0QjtBQUNBTSwwQkFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0FELDBCQUFRQyxHQUFSLENBQVksS0FBS1AsSUFBakI7QUFDRCxpQkFKRCxNQUlPO0FBQ0wsZ0NBQUlvQixLQUFKLENBQVVGLEtBQUtuQixJQUFMLENBQVVzQixHQUFwQjtBQUNEO0FBQ0RWLHFCQUFLVyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EscUJBQUtaLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFdBQUtNLFdBQUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF6Q3VDLGVBQUtPLFM7O2tCQUExQnpCLFkiLCJmaWxlIjoid2VweS1zaWduLXRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHRpcCBmcm9tICcuLi8uLi91dGlscy90aXAnXHJcbmltcG9ydCB7XHJcbiAgU1lTVEVNX0lORk8sXHJcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnQnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaS9hcGknO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBXZXB5U2lnblRpbWUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgYXdheXM6IDBcclxuICAgICAgLy8gYXJyeSA6IHtcclxuICAgICAgLy8gICBkYXlzOiBbXSxcclxuICAgICAgLy8gICBhd2F5czogMFxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0U2lnbkRhdGUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0U2lnbkRhdGVcIik7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcclxuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0U2lnbkRhdGUoe1xyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0ganNvbi5kYXRhLmxpc3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxyXG4gICAgICB9XHJcbiAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy5nZXRTaWduRGF0ZSgpO1xyXG4gICAgICAvLyBsZXQgYXJyeSA9IHtcclxuICAgICAgLy8gICBkYXlzOiBbXSxcclxuICAgICAgLy8gICBhd2F5czogMFxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIHRoaXMubGlzdCA9IGFycnk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXJyeSlcclxuICAgICAgLy8gdGhpcy5saXN0ID0gdGhpcy5hcnJ5LmRheXM7XHJcbiAgICAgIC8vIHRoaXMuYXdheXMgPSB0aGlzLmFycnkuYXdheXM7XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICByZWZyZXNoTGlzdCh2YWwpe1xyXG4gICAgICAgIGlmICh2YWw9PXVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsLi4uLi5cIix2YWwpO1xyXG4gICAgICAgIHRoaXMubGlzdFt0aGlzLmxpc3QubGVuZ3RoLTFdLnNpZ25lZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbiJdfQ==