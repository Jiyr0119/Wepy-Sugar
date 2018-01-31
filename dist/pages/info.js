'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我'
    }, _this.components = {}, _this.data = {
      avatarUrl: "",
      nickName: "",
      bShowBind: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(phone, code) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.getUserInfo({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;


                if (json.data.code == 0) {
                  if (json.data.user.mobile.length > 0) {
                    this.bShowBind = false;
                  } else {
                    this.bShowBind = true;
                  }
                  that.$apply();
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO);
      that.avatarUrl = userInfo.avatarUrl;
      that.nickName = userInfo.nickName;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      this.getUserInfo();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImJTaG93QmluZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBob25lIiwiY29kZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwicXVlcnkiLCJqc29uIiwidXNlciIsIm1vYmlsZSIsImxlbmd0aCIsIiRhcHBseSIsInRpcCIsImVycm9yIiwibXNnIiwic2hvd0xvYWRpbmciLCJ1c2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGlCQUFVO0FBSEwsSyxRQXNDUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFHVkMsTSxHQUFTLEU7Ozs7OzsyRkF2Q1NDLEssRUFBTUMsSTs7Ozs7O0FBQ2xCQyxvQixHQUFPLEk7QUFDUEMsK0IsR0FBa0IsZUFBS0MsY0FBTCxrQ0FBMkMsRTtBQUM3REMsc0IsR0FBU0YsZ0JBQWdCRyxNOzt1QkFDVixjQUFJQyxXQUFKLENBQWdCO0FBQ2pDQyx5QkFBTztBQUNMSCw0QkFBUUE7QUFESDtBQUQwQixpQkFBaEIsQzs7O0FBQWJJLG9COzs7QUFNTixvQkFBSUEsS0FBS2hCLElBQUwsQ0FBVVEsSUFBVixJQUFrQixDQUF0QixFQUF5QjtBQUN2QixzQkFBSVEsS0FBS2hCLElBQUwsQ0FBVWlCLElBQVYsQ0FBZUMsTUFBZixDQUFzQkMsTUFBdEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDbEMseUJBQUtoQixTQUFMLEdBQWUsS0FBZjtBQUNELG1CQUZELE1BRU87QUFDTCx5QkFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0RNLHVCQUFLVyxNQUFMO0FBQ0QsaUJBUEQsTUFPTztBQUNMQyxzQkFBSUMsS0FBSixDQUFVTixLQUFLaEIsSUFBTCxDQUFVdUIsR0FBcEI7QUFDRDtBQUNEZCxxQkFBS2UsV0FBTCxHQUFtQixLQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdPO0FBQ1AsVUFBSWYsT0FBTyxJQUFYO0FBQ0EsVUFBSWdCLFdBQVcsZUFBS2QsY0FBTCxxQkFBZjtBQUNBRixXQUFLUixTQUFMLEdBQWlCd0IsU0FBU3hCLFNBQTFCO0FBQ0FRLFdBQUtQLFFBQUwsR0FBZ0J1QixTQUFTdkIsUUFBekI7QUFDRDs7OzZCQUNPO0FBQ04sVUFBSU8sT0FBTyxJQUFYO0FBQ0EsV0FBS0ssV0FBTDtBQUNEOzs7O0VBN0NnQyxlQUFLWSxJOztrQkFBbkI5QixLIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XHJcbmltcG9ydCB7XHJcbiAgVVNFUl9JTkZPLFVTRVJfU1BFQ0lDQUxfSU5GT1xyXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJEnLFxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG5cclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBhdmF0YXJVcmw6IFwiXCIsXHJcbiAgICBuaWNrTmFtZTogXCJcIixcclxuICAgIGJTaG93QmluZDpmYWxzZVxyXG4gIH1cclxuICBhc3luYyBnZXRVc2VySW5mbyhwaG9uZSxjb2RlKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFVzZXJJbmZvKHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBvcGVuSWQ6IG9wZW5JZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICBpZiAoanNvbi5kYXRhLnVzZXIubW9iaWxlLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgdGhpcy5iU2hvd0JpbmQ9ZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5iU2hvd0JpbmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcclxuICAgIH1cclxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCB1c2VySW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9JTkZPKTtcclxuICAgIHRoYXQuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xyXG4gICAgdGhhdC5uaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lO1xyXG4gIH1cclxuICBvblNob3coKXtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICB9XHJcbiAgY29tcHV0ZWQgPSB7XHJcblxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG5cclxuICB9XHJcbiAgZXZlbnRzID0ge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==