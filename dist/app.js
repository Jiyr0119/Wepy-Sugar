'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _constant = require('./utils/constant.js');

var _api = require('./api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/home_detail', 'pages/classify', 'pages/cart', 'pages/info', 'pages/search', 'pages/test', 'pages/sign_in', 'pages/exchange_goods', 'pages/wholesale', 'pages/replenishment_goods', 'pages/register', 'pages/order', 'pages/reorder', 'pages/pay_success', 'pages/points', 'pages/points_more', 'pages/points_rule', 'pages/collection', 'pages/messages', 'pages/setting', 'pages/goods_detail', 'pages/comfire_order', 'pages/address', 'pages/order_detail', 'pages/filter', 'pages/logistics', 'pages/comment', 'pages/comment_add'], "window": {
        "navigationBarBackgroundColor": "#f2505d",
        "navigationBarTextStyle": "white",
        "enablePullDownRefresh": false
      },
      "tabBar": {
        "color": "#373737",
        "selectedColor": "#ed145b",
        "borderStyle": "#f0f0f0",
        "backgroundColor": "#ffffff",
        "list": [{
          "pagePath": "pages/home",
          "iconPath": "image/tabicon/tabicon-a1.png",
          "selectedIconPath": "image/tabicon/tabicon-b1.png",
          "text": "主页"
        }, {
          "pagePath": "pages/classify",
          "iconPath": "image/tabicon/tabicon-a2.png",
          "selectedIconPath": "image/tabicon/tabicon-b2.png",
          "text": "分类"
        }, {
          "pagePath": "pages/cart",
          "iconPath": "image/tabicon/tabicon-a3.png",
          "selectedIconPath": "image/tabicon/tabicon-b3.png",
          "text": "购物车"
        }, {
          "pagePath": "pages/info",
          "iconPath": "image/tabicon/tabicon-a4.png",
          "selectedIconPath": "image/tabicon/tabicon-b4.png",
          "text": "我的"
        }]
      },
      "networkTimeout": {
        "request": 20000,
        "downloadFile": 20000
      },
      "debug": true
    };
    _this.globalData = {
      userInfo: null,
      appid: 'wx6b121941b200ea50',
      secret: '36a76b0682bd2c3f1541fd012fac66f5'
    };

    _this.use('requestfix');
    _this.use('promisify');

    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, userInfo, res, d, c, systemInfo, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                //用户信息

                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};

                // 用户普通信息

                userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};

                //如果信息过期

                if (!((!userSpecialInfo.openid || (userSpecialInfo.expires_in || Date.now()) < Date.now() + 600) && !userInfo.nickName)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 6;
                return _wepy2.default.login();

              case 6:
                res = _context.sent;

                if (!res.code) {
                  _context.next = 19;
                  break;
                }

                d = that.globalData; //这里存储了appid、secret、token串    
                //存储userInfo 

                _context.next = 11;
                return _wepy2.default.getUserInfo();

              case 11:
                c = _context.sent;

                _wepy2.default.setStorageSync(_constant.USER_INFO, c.userInfo);

                //存储系统信息 
                systemInfo = _wepy2.default.getSystemInfoSync();

                _wepy2.default.setStorageSync(_constant.SYSTEM_INFO, systemInfo);

                (0, _api.wxJsCode2Session)({
                  query: {
                    jsCode: res.code,
                    nickName: c.userInfo.nickName
                  }
                }).then(function (resp) {
                  var rlt = resp.data;
                  console.log("wxJsCode2Session..." + JSON.stringify(rlt));
                  if (rlt.result) {
                    var data = rlt.data;
                    if (data.openid) {
                      var obj = {};
                      obj.openid = data.openid;
                      obj.expires_in = Date.now() + data.expires_in;
                      //存储openid 
                      _wepy2.default.setStorageSync(_constant.USER_SPECICAL_INFO, obj);
                    }
                  } else {
                    var _obj = {};
                    _obj.openid = "oeuj50KHMqsh5kYZYWQJuwmY5yG0";
                    _obj.expires_in = "7200";
                    //存储openid 
                    _wepy2.default.setStorageSync(_constant.USER_SPECICAL_INFO, _obj);
                  }
                });

                url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';

                /* let b = await wepy.request({
                     url: url,
                     data: {},
                     method: 'POST',
                     header: {
                         'content-Type': 'application/x-www-form-urlencoded'
                     }
                 });
                 if (b.data.openid) {
                     let obj = {};
                     obj.openid = b.data.openid;
                     obj.expires_in = Date.now() + b.data.expires_in;
                       //存储openid 
                     wepy.setStorageSync(USER_SPECICAL_INFO, obj);
                       //存储userInfo 
                     let c = await wepy.getUserInfo();
                     wepy.setStorageSync(USER_INFO, c.userInfo);
                       //存储系统信息 
                     let systemInfo = await wepy.getSystemInfoSync();
                     wepy.setStorageSync(SYSTEM_INFO, systemInfo);
                     console.log(b, '登陆成功')
                 }*/

                _context.next = 20;
                break;

              case 19:
                console.log('获取用户登录态失败！' + res.errMsg);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImFwcGlkIiwic2VjcmV0IiwidXNlIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbmlkIiwiZXhwaXJlc19pbiIsIkRhdGUiLCJub3ciLCJuaWNrTmFtZSIsImxvZ2luIiwicmVzIiwiY29kZSIsImQiLCJnZXRVc2VySW5mbyIsImMiLCJzZXRTdG9yYWdlU3luYyIsInN5c3RlbUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsInF1ZXJ5IiwianNDb2RlIiwidGhlbiIsInJsdCIsInJlc3AiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJvYmoiLCJ1cmwiLCJlcnJNc2ciLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQXVGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBakZkQSxNQWlGYyxHQWpGTDtBQUNQQyxhQUFPLENBQ0wsWUFESyxFQUVMLG1CQUZLLEVBR0wsZ0JBSEssRUFJTCxZQUpLLEVBS0wsWUFMSyxFQU1MLGNBTkssRUFPTCxZQVBLLEVBUUwsZUFSSyxFQVNMLHNCQVRLLEVBVUwsaUJBVkssRUFXTCwyQkFYSyxFQVlMLGdCQVpLLEVBYUwsYUFiSyxFQWNMLGVBZEssRUFlTCxtQkFmSyxFQWdCTCxjQWhCSyxFQWlCTCxtQkFqQkssRUFrQkwsbUJBbEJLLEVBbUJMLGtCQW5CSyxFQW9CTCxnQkFwQkssRUFxQkwsZUFyQkssRUFzQkwsb0JBdEJLLEVBdUJMLHFCQXZCSyxFQXdCTCxlQXhCSyxFQXlCTCxvQkF6QkssRUEwQkwsY0ExQkssRUEyQkwsaUJBM0JLLEVBNEJMLGVBNUJLLEVBNkJMLG1CQTdCSyxDQURBLEVBK0JMLFVBQVU7QUFDWix3Q0FBZ0MsU0FEcEI7QUFFWixrQ0FB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QUErRWMsRUFBRWIsTUFBakYsR0FBMEYsV0FBMUYsR0FBd0dXLElBQUlDLElBQTVHLEdBQW1ILGdDOztBQUU3SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBYSx3QkFBUUMsR0FBUixDQUFZLGVBQWVmLElBQUlxQixNQUEvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJLcUIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IHtcclxuICBVU0VSX1NQRUNJQ0FMX0lORk8sXHJcbiAgVVNFUl9JTkZPLFxyXG4gIFNZU1RFTV9JTkZPLFxyXG4gIEFERFJFU1NfSUQsXHJcbiAgU0VMX0NMQVNTX0NPREVcclxufSBmcm9tIFwiLi91dGlscy9jb25zdGFudFwiO1xyXG5pbXBvcnQge1xyXG4gIHd4SnNDb2RlMlNlc3Npb24sXHJcbiAgdXNlcjJzZXNzaW9uXHJcbn0gZnJvbSAnLi9hcGkvYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9ob21lJyxcclxuICAgICAgJ3BhZ2VzL2hvbWVfZGV0YWlsJyxcclxuICAgICAgJ3BhZ2VzL2NsYXNzaWZ5JyxcclxuICAgICAgJ3BhZ2VzL2NhcnQnLFxyXG4gICAgICAncGFnZXMvaW5mbycsXHJcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxyXG4gICAgICAncGFnZXMvdGVzdCcsXHJcbiAgICAgICdwYWdlcy9zaWduX2luJyxcclxuICAgICAgJ3BhZ2VzL2V4Y2hhbmdlX2dvb2RzJyxcclxuICAgICAgJ3BhZ2VzL3dob2xlc2FsZScsXHJcbiAgICAgICdwYWdlcy9yZXBsZW5pc2htZW50X2dvb2RzJyxcclxuICAgICAgJ3BhZ2VzL3JlZ2lzdGVyJyxcclxuICAgICAgJ3BhZ2VzL29yZGVyJyxcclxuICAgICAgJ3BhZ2VzL3Jlb3JkZXInLFxyXG4gICAgICAncGFnZXMvcGF5X3N1Y2Nlc3MnLFxyXG4gICAgICAncGFnZXMvcG9pbnRzJyxcclxuICAgICAgJ3BhZ2VzL3BvaW50c19tb3JlJyxcclxuICAgICAgJ3BhZ2VzL3BvaW50c19ydWxlJyxcclxuICAgICAgJ3BhZ2VzL2NvbGxlY3Rpb24nLFxyXG4gICAgICAncGFnZXMvbWVzc2FnZXMnLFxyXG4gICAgICAncGFnZXMvc2V0dGluZycsXHJcbiAgICAgICdwYWdlcy9nb29kc19kZXRhaWwnLFxyXG4gICAgICAncGFnZXMvY29tZmlyZV9vcmRlcicsXHJcbiAgICAgICdwYWdlcy9hZGRyZXNzJyxcclxuICAgICAgJ3BhZ2VzL29yZGVyX2RldGFpbCcsXHJcbiAgICAgICdwYWdlcy9maWx0ZXInLFxyXG4gICAgICAncGFnZXMvbG9naXN0aWNzJyxcclxuICAgICAgJ3BhZ2VzL2NvbW1lbnQnLFxyXG4gICAgICAncGFnZXMvY29tbWVudF9hZGQnXHJcbiAgICBdLFwid2luZG93XCI6IHtcclxuICAgIFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOiBcIiNmMjUwNWRcIixcclxuICAgIFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOiBcIndoaXRlXCIsXHJcbiAgICBcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIFwidGFiQmFyXCI6IHtcclxuICAgICAgXCJjb2xvclwiOiBcIiMzNzM3MzdcIixcclxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2VkMTQ1YlwiLFxyXG4gICAgICBcImJvcmRlclN0eWxlXCI6IFwiI2YwZjBmMFwiLFxyXG4gICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgXCJsaXN0XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaG9tZVwiLFxyXG4gICAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlL3RhYmljb24vdGFiaWNvbi1hMS5wbmdcIixcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlL3RhYmljb24vdGFiaWNvbi1iMS5wbmdcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIuS4u+mhtVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvY2xhc3NpZnlcIixcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYTIucG5nXCIsXHJcbiAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYjIucG5nXCIsXHJcbiAgICAgICAgICBcInRleHRcIjogXCLliIbnsbtcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2NhcnRcIixcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYTMucG5nXCIsXHJcbiAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYjMucG5nXCIsXHJcbiAgICAgICAgICBcInRleHRcIjogXCLotK3nianovaZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2luZm9cIixcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYTQucG5nXCIsXHJcbiAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZS90YWJpY29uL3RhYmljb24tYjQucG5nXCIsXHJcbiAgICAgICAgICBcInRleHRcIjogXCLmiJHnmoRcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwibmV0d29ya1RpbWVvdXRcIjoge1xyXG4gICAgICBcInJlcXVlc3RcIjogMjAwMDAsXHJcbiAgICAgIFwiZG93bmxvYWRGaWxlXCI6IDIwMDAwXHJcbiAgICB9LFxyXG4gICAgXCJkZWJ1Z1wiOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIGFwcGlkOiAnd3g2YjEyMTk0MWIyMDBlYTUwJyxcclxuICAgIHNlY3JldDogJzM2YTc2YjA2ODJiZDJjM2YxNTQxZmQwMTJmYWM2NmY1JyxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy/nlKjmiLfkv6Hmga9cclxuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcblxyXG4gICAgLy8g55So5oi35pmu6YCa5L+h5oGvXHJcbiAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTykgfHwge307XHJcblxyXG4gICAgLy/lpoLmnpzkv6Hmga/ov4fmnJ9cclxuICAgIGlmICgoIXVzZXJTcGVjaWFsSW5mby5vcGVuaWQgfHwgKHVzZXJTcGVjaWFsSW5mby5leHBpcmVzX2luIHx8IERhdGUubm93KCkpIDwgKERhdGUubm93KCkgKyA2MDApKSAmJiAoIXVzZXJJbmZvLm5pY2tOYW1lKSkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpO1xyXG4gICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICBsZXQgZCA9IHRoYXQuZ2xvYmFsRGF0YTsgLy/ov5nph4zlrZjlgqjkuoZhcHBpZOOAgXNlY3JldOOAgXRva2Vu5LiywqDCoMKgwqBcclxuICAgICAgICAvL+WtmOWCqHVzZXJJbmZvwqBcclxuICAgICAgICBsZXQgYyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTywgYy51c2VySW5mbyk7XHJcblxyXG4gICAgICAgIC8v5a2Y5YKo57O757uf5L+h5oGvwqBcclxuICAgICAgICBsZXQgc3lzdGVtSW5mbyA9IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFNZU1RFTV9JTkZPLCBzeXN0ZW1JbmZvKTtcclxuXHJcbiAgICAgICAgd3hKc0NvZGUyU2Vzc2lvbih7XHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBqc0NvZGU6IHJlcy5jb2RlLFxyXG4gICAgICAgICAgICBuaWNrTmFtZTogYy51c2VySW5mby5uaWNrTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICB2YXIgcmx0ID0gcmVzcC5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ3eEpzQ29kZTJTZXNzaW9uLi4uXCIgKyBKU09OLnN0cmluZ2lmeShybHQpKTtcclxuICAgICAgICAgIGlmIChybHQucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmx0LmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLm9wZW5pZCkge1xyXG4gICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICBvYmoub3BlbmlkID0gZGF0YS5vcGVuaWQ7XHJcbiAgICAgICAgICAgICAgb2JqLmV4cGlyZXNfaW4gPSBEYXRlLm5vdygpICsgZGF0YS5leHBpcmVzX2luO1xyXG4gICAgICAgICAgICAgIC8v5a2Y5YKob3BlbmlkwqBcclxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTywgb2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICBvYmoub3BlbmlkID0gXCJvZXVqNTBLSE1xc2g1a1laWVdRSnV3bVk1eUcwXCI7XHJcbiAgICAgICAgICAgIG9iai5leHBpcmVzX2luID0gXCI3MjAwXCI7XHJcbiAgICAgICAgICAgIC8v5a2Y5YKob3BlbmlkwqBcclxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8sIG9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JyArIGQuYXBwaWQgKyAnJnNlY3JldD0nICsgZC5zZWNyZXQgKyAnJmpzX2NvZGU9JyArIHJlcy5jb2RlICsgJyZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSc7XHJcblxyXG4gICAgICAgIC8qIGxldCBiID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICdjb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgaWYgKGIuZGF0YS5vcGVuaWQpIHtcclxuICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgIG9iai5vcGVuaWQgPSBiLmRhdGEub3BlbmlkO1xyXG4gICAgICAgICAgICAgb2JqLmV4cGlyZXNfaW4gPSBEYXRlLm5vdygpICsgYi5kYXRhLmV4cGlyZXNfaW47XHJcblxyXG4gICAgICAgICAgICAgLy/lrZjlgqhvcGVuaWTCoFxyXG4gICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8sIG9iaik7XHJcblxyXG4gICAgICAgICAgICAgLy/lrZjlgqh1c2VySW5mb8KgXHJcbiAgICAgICAgICAgICBsZXQgYyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPLCBjLnVzZXJJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAvL+WtmOWCqOezu+e7n+S/oeaBr8KgXHJcbiAgICAgICAgICAgICBsZXQgc3lzdGVtSW5mbyA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8sIHN5c3RlbUluZm8pO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coYiwgJ+eZu+mZhuaIkOWKnycpXHJcbiAgICAgICAgIH0qL1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=