'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopItemList = function (_wepy$component) {
  _inherits(ShopItemList, _wepy$component);

  function ShopItemList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopItemList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopItemList.__proto__ || Object.getPrototypeOf(ShopItemList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      goodsList: {
        default: []
      },
      list: []
    }, _this.events = {
      // 'index-broadcast': (...args) => {
      //   let $event = args[args.length - 1]
      //   console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
      // }
    }, _this.methods = {
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.list = val;
        this.$apply();
      },
      refund: function refund(e) {
        var itemId = e.currentTarget.dataset.id;
        var that = this;
        wx.showModal({
          title: '提示',
          content: '确定要退货吗?',
          success: function success(res) {
            if (res.confirm) {
              that.applyRefund(itemId);
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopItemList, [{
    key: 'applyRefund',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(itemId) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 4;
                return _api2.default.refundApply({
                  query: {
                    openId: openId,
                    orderItemId: itemId
                  }
                });

              case 4:
                json = _context.sent;

                if (json.data.code == 0) {
                  wx.showModal({
                    title: '提示',
                    content: '你的退货申请已提交,等待审批!',
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {} else if (res.cancel) {}
                    }
                  });
                } else {
                  _tip2.default.error(json.data.msg);
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function applyRefund(_x) {
        return _ref2.apply(this, arguments);
      }

      return applyRefund;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.list = [];
      console.log("加载list============");
      console.log(this.list);
    }
  }]);

  return ShopItemList;
}(_wepy2.default.component);

exports.default = ShopItemList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BfaXRlbV9saXN0LmpzIl0sIm5hbWVzIjpbIlNob3BJdGVtTGlzdCIsInByb3BzIiwiZ29vZHNMaXN0IiwiZGVmYXVsdCIsImxpc3QiLCJldmVudHMiLCJtZXRob2RzIiwicmVmcmVzaExpc3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicmVmdW5kIiwiZSIsIml0ZW1JZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJ0aGF0Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImFwcGx5UmVmdW5kIiwiY2FuY2VsIiwidXNlclNwZWNpYWxJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCJvcGVuSWQiLCJvcGVuaWQiLCJyZWZ1bmRBcHBseSIsInF1ZXJ5Iiwib3JkZXJJdGVtSWQiLCJqc29uIiwiZGF0YSIsImNvZGUiLCJzaG93Q2FuY2VsIiwiZXJyb3IiLCJtc2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFLcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTO0FBREEsT0FETDtBQUlOQyxZQUFLO0FBSkMsSyxRQU9SQyxNLEdBQVM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUpPLEssUUFpQ1RDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsR0FESixFQUNRO0FBQ2QsWUFBSUEsT0FBS0MsU0FBVCxFQUFvQjtBQUNwQkMsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCSCxHQUF2QjtBQUNBLGFBQUtKLElBQUwsR0FBWUksR0FBWjtBQUNBLGFBQUtJLE1BQUw7QUFDRCxPQU5PO0FBT1JDLFlBUFEsa0JBT0RDLENBUEMsRUFPRTtBQUNSLFlBQUlDLFNBQVNELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxFQUFyQztBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHQyxTQUFILENBQWE7QUFDWEMsaUJBQU8sSUFESTtBQUVYQyxtQkFBUyxTQUZFO0FBR1hDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZlAsbUJBQUtRLFdBQUwsQ0FBaUJaLE1BQWpCO0FBQ0QsYUFGRCxNQUVPLElBQUlVLElBQUlHLE1BQVIsRUFBZ0I7QUFDckJsQixzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBVFUsU0FBYjtBQVdEO0FBckJPLEs7Ozs7OzsyRkExQlFJLE07Ozs7OztBQUNaYywrQixHQUFrQixlQUFLQyxjQUFMLGtDQUEyQyxFO0FBQzdEQyxzQixHQUFTRixnQkFBZ0JHLE07O3VCQUVWLGNBQUlDLFdBQUosQ0FBZ0I7QUFDakNDLHlCQUFNO0FBQ0pILDRCQUFRQSxNQURKO0FBRUpJLGlDQUFhcEI7QUFGVDtBQUQyQixpQkFBaEIsQzs7O0FBQWJxQixvQjs7QUFNTixvQkFBSUEsS0FBS0MsSUFBTCxDQUFVQyxJQUFWLElBQWdCLENBQXBCLEVBQXVCO0FBQ3JCbEIscUJBQUdDLFNBQUgsQ0FBYTtBQUNYQywyQkFBTyxJQURJO0FBRVhDLDZCQUFTLGlCQUZFO0FBR1hnQixnQ0FBWSxLQUhEO0FBSVhmLDZCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMEJBQUlBLElBQUlDLE9BQVIsRUFBaUIsQ0FDaEIsQ0FERCxNQUNPLElBQUlELElBQUlHLE1BQVIsRUFBZ0IsQ0FDdEI7QUFDRjtBQVJVLG1CQUFiO0FBVUQsaUJBWEQsTUFXTztBQUNMLGdDQUFJWSxLQUFKLENBQVVKLEtBQUtDLElBQUwsQ0FBVUksR0FBcEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJCTTtBQUNQLFdBQUtyQyxJQUFMLEdBQVUsRUFBVjtBQUNBTSxjQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLEtBQUtQLElBQWpCO0FBQ0Q7Ozs7RUFyRXVDLGVBQUtzQyxTOztrQkFBMUIxQyxZIiwiZmlsZSI6InNob3BfaXRlbV9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJztcclxuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcclxuaW1wb3J0IHtcclxuICBTWVNURU1fSU5GTyxcclxuICBVU0VSX1NQRUNJQ0FMX0lORk9cclxufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wSXRlbUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBnb29kc0xpc3Q6IHtcclxuICAgICAgZGVmYXVsdDogW11cclxuICAgIH0sXHJcbiAgICBsaXN0OltdXHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcbiAgICAvLyAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcclxuICAgIC8vICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLm5hbWV9YClcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGFwcGx5UmVmdW5kKGl0ZW1JZCkge1xyXG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcclxuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkucmVmdW5kQXBwbHkoe1xyXG4gICAgICBxdWVyeTp7XHJcbiAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgb3JkZXJJdGVtSWQ6IGl0ZW1JZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChqc29uLmRhdGEuY29kZT09MCkge1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICBjb250ZW50OiAn5L2g55qE6YCA6LSn55Sz6K+35bey5o+Q5LqkLOetieW+heWuoeaJuSEnLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgcmVmcmVzaExpc3QodmFsKXtcclxuICAgICAgaWYgKHZhbD09dW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidmFsLi4uLi5cIix2YWwpO1xyXG4gICAgICB0aGlzLmxpc3QgPSB2YWw7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9LFxyXG4gICAgcmVmdW5kKGUpIHtcclxuICAgICAgbGV0IGl0ZW1JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7lrpropoHpgIDotKflkJc/JyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICB0aGF0LmFwcGx5UmVmdW5kKGl0ZW1JZCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMubGlzdD1bXTtcclxuICAgIGNvbnNvbGUubG9nKFwi5Yqg6L29bGlzdD09PT09PT09PT09PVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdClcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==