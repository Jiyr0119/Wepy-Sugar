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
      delOrder: function delOrder(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.flag = 2;
                  _this2.orderNo = e.currentTarget.dataset.id;
                  _context.next = 4;
                  return _tip2.default.confirm('是否删除订单');

                case 4:
                  console.log(_this2.flag);
                  _this2.editOrderInfo(_this2.orderNo, _this2.flag);
                  console.log("删除成功");

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      completion: function completion(e) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.flag = 3;
                  _this3.orderNo = e.currentTarget.dataset.id;
                  _context2.next = 4;
                  return _tip2.default.confirm('是否确认收货');

                case 4:
                  _this3.editOrderInfo(_this3.orderNo, _this3.flag);
                  console.log("完成");

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      payMoney: function payMoney(e) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var tradeNo, userSpecialInfo, openId, pay;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this4.orderNo = e.currentTarget.dataset.id;
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
          }, _callee3, _this4);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(orderItem, [{
    key: 'editOrderInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(orderNo, flag) {
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

      function editOrderInfo(_x, _x2) {
        return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyX2l0ZW0uanMiXSwibmFtZXMiOlsib3JkZXJJdGVtIiwicHJvcHMiLCJvcmRlckxpc3QiLCJkZWZhdWx0IiwiZmxhZyIsIm9yZGVyTm8iLCJsaXN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2hvcEl0ZW1MaXN0IiwiZXZlbnRzIiwibWV0aG9kcyIsImRlbE9yZGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImVkaXRPcmRlckluZm8iLCJjb21wbGV0aW9uIiwicGF5TW9uZXkiLCJ0cmFkZU5vIiwidHJhZGVubyIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwidG9QYXkiLCJxdWVyeSIsInBheSIsImRhdGEiLCJjb2RlIiwid3giLCJyZXF1ZXN0UGF5bWVudCIsImFwcElkIiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwic3VjY2VzcyIsInJlcyIsInNldFRpbWVvdXQiLCJsb2FkZWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZmFpbCIsImFsZXJ0IiwidGhhdCIsImpzb24iLCIkZW1pdCIsImVycm9yIiwiZXJyZXJUaXBzIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUVuQkMsSyxHQUFRO0FBQ05DLGlCQUFXO0FBQ1RDLGlCQUFTLEVBREE7QUFFVEMsY0FBSyxFQUZJO0FBR1RDLGlCQUFRLEVBSEM7QUFJVEMsY0FBSztBQUpJO0FBREwsSyxRQTJCVEMsTyxHQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sY0FBUCxFQUFzQixTQUFRLEVBQTlCLEVBQWIsRSxRQUNYQyxNLEdBQVMs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RHJCLDJCQUFoQjtBQUdELHlCQU5ELEVBTUcsSUFOSDtBQU9ELHVCQWhCZTtBQWlCaEJ5Qiw0QkFBTSxjQUFVTCxHQUFWLEVBQWU7QUFDbkIsc0NBQUlNLEtBQUosQ0FBVSxNQUFWO0FBQ0Q7QUFuQmUscUJBQWxCO0FBcUJELG1CQXZCRCxNQXVCTztBQUNMLGtDQUFJQSxLQUFKLENBQVUsTUFBVjtBQUNEOztBQXJDZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNDakI7QUF4RE8sSzs7Ozs7OzRGQTdCVTlDLE8sRUFBUUQsSTs7Ozs7O0FBQzFCZ0Isd0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0krQixvQixHQUFPLEk7QUFDUHpCLCtCLEdBQWtCLGVBQUtDLGNBQUwsa0NBQTJDLEU7O3VCQUM5QyxjQUFJTixhQUFKLENBQWtCO0FBQ25DVSx5QkFBTztBQUNMM0IsNkJBQVNBLE9BREo7QUFFTEQsMEJBQUtBO0FBRkE7QUFENEIsaUJBQWxCLEM7OztBQUFiaUQsb0I7O0FBTU4sb0JBQUlBLEtBQUtuQixJQUFMLENBQVVDLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7O0FBRXZCLHVCQUFLbUIsS0FBTCxDQUFXLGtCQUFYLEVBQStCRixLQUFLaEQsSUFBcEM7QUFDRCxpQkFIRCxNQUdPO0FBQ0wsZ0NBQUltRCxLQUFKLENBQVVGLEtBQUtuQixJQUFMLENBQVVzQixTQUFwQjtBQUNEO0FBQ0RKLHFCQUFLSyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBd0VPO0FBQ1ByQyxjQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLEtBQUtuQixTQUFqQjtBQUNEOzs7O0VBdEdvQyxlQUFLd0QsUzs7a0JBQXZCMUQsUyIsImZpbGUiOiJvcmRlcl9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xyXG5pbXBvcnQgU2hvcEl0ZW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2hvcF9pdGVtX2xpc3QnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuaW1wb3J0IHtcclxuICBTWVNURU1fSU5GTyxcclxuICBVU0VSX1NQRUNJQ0FMX0lORk9cclxufSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yZGVySXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgcHJvcHMgPSB7XHJcbiAgICBvcmRlckxpc3Q6IHtcclxuICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgIGZsYWc6XCJcIixcclxuICAgICAgb3JkZXJObzpcIlwiLFxyXG4gICAgICBsaXN0OltdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBlZGl0T3JkZXJJbmZvKG9yZGVyTm8sZmxhZykge1xyXG4gICAgY29uc29sZS5sb2coXCLosIPnlKjmlrnms5VcIik7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5lZGl0T3JkZXJJbmZvKHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBvcmRlck5vOiBvcmRlck5vLFxyXG4gICAgICAgIGZsYWc6ZmxhZ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XHJcblxyXG4gICAgICB0aGlzLiRlbWl0KCdyZWZyZXNoT3JkZXJMaXN0JywgdGhhdC5mbGFnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEuZXJyZXJUaXBzKVxyXG4gICAgfVxyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcbiAkcmVwZWF0ID0ge1wib3JkZXJMaXN0XCI6e1wiY29tXCI6XCJzaG9wSXRlbUxpc3RcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJzaG9wSXRlbUxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm9yZGVyTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDpsaXN0LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5vcmRlckl0ZW1MaXN0XCIsXCJmb3JcIjpcIm9yZGVyTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgc2hvcEl0ZW1MaXN0OiBTaG9wSXRlbUxpc3RcclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHtcclxuXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgYXN5bmMgZGVsT3JkZXIoZSkge1xyXG4gICAgICB0aGlzLmZsYWc9MjtcclxuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIGF3YWl0IHRpcC5jb25maXJtKCfmmK/lkKbliKDpmaTorqLljZUnKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5mbGFnKTtcclxuICAgICAgdGhpcy5lZGl0T3JkZXJJbmZvKHRoaXMub3JkZXJObyx0aGlzLmZsYWcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuWIoOmZpOaIkOWKn1wiKVxyXG5cclxuICAgIH0sXHJcbiAgICAgIGFzeW5jIGNvbXBsZXRpb24oZSkge1xyXG4gICAgICB0aGlzLmZsYWc9MztcclxuICAgICAgdGhpcy5vcmRlck5vID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIGF3YWl0IHRpcC5jb25maXJtKCfmmK/lkKbnoa7orqTmlLbotKcnKTtcclxuICAgICAgdGhpcy5lZGl0T3JkZXJJbmZvKHRoaXMub3JkZXJObyx0aGlzLmZsYWcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuWujOaIkFwiKVxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBwYXlNb25leShlKSB7XHJcbiAgICAgIHRoaXMub3JkZXJObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICBsZXQgdHJhZGVObyA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRyYWRlbm87XHJcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xyXG5cclxuICAgICAgY29uc3QgcGF5ID0gYXdhaXQgYXBpLnRvUGF5KHtcclxuICAgICAgICBxdWVyeTp7XHJcbiAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcclxuICAgICAgICAgIG9yZGVyTm86IHRyYWRlTm9cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocGF5LmRhdGEuY29kZT09MCkge1xyXG4gICAgICAgIC8v5Lul5LiL5piv5b6u5L+h5pSv5LuYXHJcbiAgICAgICAgd3gucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAgICAgYXBwSWQ6IHBheS5kYXRhLmFwcElkLFxyXG4gICAgICAgICAgdGltZVN0YW1wOiBwYXkuZGF0YS50aW1lU3RhbXAsXHJcbiAgICAgICAgICBub25jZVN0cjogcGF5LmRhdGEubm9uY2VTdHIsXHJcbiAgICAgICAgICBwYWNrYWdlOiBwYXkuZGF0YS5wYWNrYWdlLFxyXG4gICAgICAgICAgc2lnblR5cGU6ICdNRDUnLFxyXG4gICAgICAgICAgcGF5U2lnbjogcGF5LmRhdGEucGF5U2lnbixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BheScsIHJlcylcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy/mlK/ku5jmiJDlip8g5YWz6ZetbG9hZGRpbmcg6Lez6L2s5Yiw5pSv5LuY5oiQ5Yqf6aG16Z2iXHJcbiAgICAgICAgICAgICAgdGlwLmxvYWRlZCgpO1xyXG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL3BheV9zdWNjZXNzP29yZGVyTm89XCIrdHJhZGVOb1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB0aXAuYWxlcnQoJ+aUr+S7mOWksei0pScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGlwLmFsZXJ0KCfmlK/ku5jlpLHotKUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PWx6eui/lOWbnuaVsOaNrmx6ej09PT09PT09PVwiKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5vcmRlckxpc3QpO1xyXG4gIH1cclxufVxyXG5cclxuIl19