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

var _shop_item_list = require('./shop_item_list.js');

var _shop_item_list2 = _interopRequireDefault(_shop_item_list);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var orderItem = function (_wepy$component) {
  _inherits(orderItem, _wepy$component);

  function orderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, orderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = orderItem.__proto__ || Object.getPrototypeOf(orderItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      orderList: {
        default: [],
        flag: "",
        orderNo: "",
        list: []
      }
    }, _this.$repeat = { "orderList": { "com": "shopItemList", "props": "" } }, _this.$props = { "shopItemList": { "xmlns:v-bind": { "value": "", "for": "orderList", "item": "item", "index": "index", "key": "key" }, "v-bind:list.sync": { "value": "item.orderItemList", "for": "orderList", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      shopItemList: _shop_item_list2.default
    }, _this.events = {}, _this.methods = {
      delOrder: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.flag = 2;
                  this.orderNo = e.currentTarget.dataset.id;
                  _context.next = 4;
                  return _tip2.default.confirm('是否删除订单');

                case 4:
                  console.log(this.flag);
                  this.editOrderInfo(this.orderNo, this.flag);
                  console.log("删除成功");

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function delOrder(_x) {
          return _ref2.apply(this, arguments);
        }

        return delOrder;
      }(),
      completion: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.flag = 3;
                  this.orderNo = e.currentTarget.dataset.id;
                  _context2.next = 4;
                  return _tip2.default.confirm('是否确认收货');

                case 4:
                  this.editOrderInfo(this.orderNo, this.flag);
                  console.log("完成");

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function completion(_x2) {
          return _ref3.apply(this, arguments);
        }

        return completion;
      }(),
      payMoney: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var tradeNo, userSpecialInfo, openId, pay;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.orderNo = e.currentTarget.dataset.id;
                  tradeNo = e.currentTarget.dataset.tradeno;
                  userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                  openId = userSpecialInfo.openid;
                  _context3.next = 6;
                  return _api2.default.toPay({
                    query: {
                      openId: openId,
                      orderNo: tradeNo
                    }
                  });

                case 6:
                  pay = _context3.sent;

                  if (pay.data.code == 0) {
                    //以下是微信支付
                    wx.requestPayment({
                      appId: pay.data.appId,
                      timeStamp: pay.data.timeStamp,
                      nonceStr: pay.data.nonceStr,
                      package: pay.data.package,
                      signType: 'MD5',
                      paySign: pay.data.paySign,
                      success: function success(res) {
                        console.log('pay', res);
                        setTimeout(function () {
                          //支付成功 关闭loadding 跳转到支付成功页面
                          _tip2.default.loaded();
                          _wepy2.default.navigateTo({
                            url: "/pages/pay_success?orderNo=" + tradeNo
                          });
                        }, 2000);
                      },
                      fail: function fail(res) {
                        _tip2.default.alert('支付失败');
                      }
                    });
                  } else {
                    _tip2.default.alert('支付失败');
                  }

                case 8:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function payMoney(_x3) {
          return _ref4.apply(this, arguments);
        }

        return payMoney;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(orderItem, [{
    key: 'editOrderInfo',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(orderNo, flag) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("调用方法");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context4.next = 5;
                return _api2.default.editOrderInfo({
                  query: {
                    orderNo: orderNo,
                    flag: flag
                  }
                });

              case 5:
                json = _context4.sent;

                if (json.data.code == 0) {

                  this.$emit('refreshOrderList', that.flag);
                } else {
                  _tip2.default.error(json.data.errerTips);
                }
                that.$apply();

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editOrderInfo(_x4, _x5) {
        return _ref5.apply(this, arguments);
      }

      return editOrderInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log("===========lzz返回数据lzz=========");
      console.log(this.orderList);
    }
  }]);

  return orderItem;
}(_wepy2.default.component);

exports.default = orderItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2l0ZW0uanMiXSwibmFtZXMiOlsib3JkZXJJdGVtIiwicHJvcHMiLCJvcmRlckxpc3QiLCJkZWZhdWx0IiwiZmxhZyIsIm9yZGVyTm8iLCJsaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2hvcEl0ZW1MaXN0IiwiZXZlbnRzIiwibWV0aG9kcyIsImRlbE9yZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImVkaXRPcmRlckluZm8iLCJjb21wbGV0aW9uIiwicGF5TW9uZXkiLCJ0cmFkZU5vIiwidHJhZGVubyIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwidG9QYXkiLCJxdWVyeSIsInBheSIsImRhdGEiLCJjb2RlIiwid3giLCJyZXF1ZXN0UGF5bWVudCIsImFwcElkIiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwic3VjY2VzcyIsInJlcyIsInNldFRpbWVvdXQiLCJsb2FkZWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZmFpbCIsImFsZXJ0IiwidGhhdCIsImpzb24iLCIkZW1pdCIsImVycm9yIiwiZXJyZXJUaXBzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUVuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTLEVBREE7QUFFVEMsY0FBSyxFQUZJO0FBR1RDLGlCQUFRLEVBSEM7QUFJVEMsY0FBSztBQUpJO0FBREwsSyxRQTJCVEMsTyxHQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sY0FBUCxFQUFzQixTQUFRLEVBQTlCLEVBQWIsRSxRQUNYQyxNLEdBQVMs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QnhCO0FBRHJCLDJCQUFoQjtBQUdELHlCQU5ELEVBTUcsSUFOSDtBQU9ELHVCQWhCZTtBQWlCaEJ5Qiw0QkFBTSxjQUFVTCxHQUFWLEVBQWU7QUFDbkIsc0NBQUlNLEtBQUosQ0FBVSxNQUFWO0FBQ0Q7QUFuQmUscUJBQWxCO0FBcUJELG1CQXZCRCxNQXVCTztBQUNMLGtDQUFJQSxLQUFKLENBQVUsTUFBVjtBQUNEOztBQXZESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs0RkE3QlU5QyxPLEVBQVFELEk7Ozs7OztBQUMxQmdCLHdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNJK0Isb0IsR0FBTyxJO0FBQ1B6QiwrQixHQUFrQixlQUFLQyxjQUFMLGtDQUEyQyxFOzt1QkFDOUMsY0FBSU4sYUFBSixDQUFrQjtBQUNuQ1UseUJBQU87QUFDTDNCLDZCQUFTQSxPQURKO0FBRUxELDBCQUFLQTtBQUZBO0FBRDRCLGlCQUFsQixDOzs7QUFBYmlELG9COztBQU1OLG9CQUFJQSxLQUFLbkIsSUFBTCxDQUFVQyxJQUFWLElBQWtCLENBQXRCLEVBQXlCOztBQUV2Qix1QkFBS21CLEtBQUwsQ0FBVyxrQkFBWCxFQUErQkYsS0FBS2hELElBQXBDO0FBQ0QsaUJBSEQsTUFHTztBQUNMLGdDQUFJbUQsS0FBSixDQUFVRixLQUFLbkIsSUFBTCxDQUFVc0IsU0FBcEI7QUFDRDtBQUNESixxQkFBS0ssTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXdFTztBQUNQckMsY0FBUUMsR0FBUixDQUFZLGdDQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxLQUFLbkIsU0FBakI7QUFDRDs7OztFQXRHb0MsZUFBS3dELFM7O2tCQUF2QjFELFMiLCJmaWxlIjoib3JkZXJfaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcclxuaW1wb3J0IFNob3BJdGVtTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Nob3BfaXRlbV9saXN0J1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7XHJcbiAgU1lTVEVNX0lORk8sXHJcbiAgVVNFUl9TUEVDSUNBTF9JTkZPXHJcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlckl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gIHByb3BzID0ge1xyXG4gICAgb3JkZXJMaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICBmbGFnOlwiXCIsXHJcbiAgICAgIG9yZGVyTm86XCJcIixcclxuICAgICAgbGlzdDpbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZWRpdE9yZGVySW5mbyhvcmRlck5vLGZsYWcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi6LCD55So5pa55rOVXCIpO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZWRpdE9yZGVySW5mbyh7XHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgb3JkZXJObzogb3JkZXJObyxcclxuICAgICAgICBmbGFnOmZsYWdcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG5cclxuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaE9yZGVyTGlzdCcsIHRoYXQuZmxhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLmVycmVyVGlwcylcclxuICAgIH1cclxuICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgfVxyXG4gJHJlcGVhdCA9IHtcIm9yZGVyTGlzdFwiOntcImNvbVwiOlwic2hvcEl0ZW1MaXN0XCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wic2hvcEl0ZW1MaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW0ub3JkZXJJdGVtTGlzdFwiLFwiZm9yXCI6XCJvcmRlckxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHNob3BJdGVtTGlzdDogU2hvcEl0ZW1MaXN0XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFzeW5jIGRlbE9yZGVyKGUpIHtcclxuICAgICAgdGhpcy5mbGFnPTI7XHJcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm5Yig6Zmk6K6i5Y2VJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmxhZyk7XHJcbiAgICAgIHRoaXMuZWRpdE9yZGVySW5mbyh0aGlzLm9yZGVyTm8sdGhpcy5mbGFnKTtcclxuICAgICAgY29uc29sZS5sb2coXCLliKDpmaTmiJDlip9cIilcclxuXHJcbiAgICB9LFxyXG4gICAgICBhc3luYyBjb21wbGV0aW9uKGUpIHtcclxuICAgICAgdGhpcy5mbGFnPTM7XHJcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBhd2FpdCB0aXAuY29uZmlybSgn5piv5ZCm56Gu6K6k5pS26LSnJyk7XHJcbiAgICAgIHRoaXMuZWRpdE9yZGVySW5mbyh0aGlzLm9yZGVyTm8sdGhpcy5mbGFnKTtcclxuICAgICAgY29uc29sZS5sb2coXCLlrozmiJBcIilcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgcGF5TW9uZXkoZSkge1xyXG4gICAgICB0aGlzLm9yZGVyTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgbGV0IHRyYWRlTm8gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50cmFkZW5vO1xyXG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcclxuXHJcbiAgICAgIGNvbnN0IHBheSA9IGF3YWl0IGFwaS50b1BheSh7XHJcbiAgICAgICAgcXVlcnk6e1xyXG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICBvcmRlck5vOiB0cmFkZU5vXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHBheS5kYXRhLmNvZGU9PTApIHtcclxuICAgICAgICAvL+S7peS4i+aYr+W+ruS/oeaUr+S7mFxyXG4gICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcclxuICAgICAgICAgIGFwcElkOiBwYXkuZGF0YS5hcHBJZCxcclxuICAgICAgICAgIHRpbWVTdGFtcDogcGF5LmRhdGEudGltZVN0YW1wLFxyXG4gICAgICAgICAgbm9uY2VTdHI6IHBheS5kYXRhLm5vbmNlU3RyLFxyXG4gICAgICAgICAgcGFja2FnZTogcGF5LmRhdGEucGFja2FnZSxcclxuICAgICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcclxuICAgICAgICAgIHBheVNpZ246IHBheS5kYXRhLnBheVNpZ24sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXknLCByZXMpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8v5pSv5LuY5oiQ5YqfIOWFs+mXrWxvYWRkaW5nIOi3s+i9rOWIsOaUr+S7mOaIkOWKn+mhtemdolxyXG4gICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9wYXlfc3VjY2Vzcz9vcmRlck5vPVwiK3RyYWRlTm9cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgdGlwLmFsZXJ0KCfmlK/ku5jlpLHotKUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRpcC5hbGVydCgn5pSv5LuY5aSx6LSlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT1senrov5Tlm57mlbDmja5seno9PT09PT09PT1cIilcclxuICAgIGNvbnNvbGUubG9nKHRoaXMub3JkZXJMaXN0KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==