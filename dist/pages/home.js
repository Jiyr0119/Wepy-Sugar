'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Discover from '../components/discover'
// import Bombscreen from '../components/bomb_screen'


var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '五色糖'
    }, _this.$repeat = {}, _this.$props = { "bottomLoadMore": { "xmlns:v-bind": "", "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = {}, _this.components = {
      // discover: Discover,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
      // bombscreen: Bombscreen
    }, _this.data = {

      imgUrls: ['../images/image_demo.png'],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorActiveColor: "#fff",
      tabList: [],
      //是否有数据
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      //广告列表
      bannerList: [],
      tps: 0,
      is_show_alert: true
    }, _this.computed = {}, _this.methods = {
      goToAdvert: function goToAdvert(url) {
        console.log("url===" + url);
        if (url.length == 0) {
          return;
        }
        _wepy2.default.navigateTo({
          url: url
        });
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '素洁服装厂',
          path: '/pages/home',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      },
      alertCallback: function alertCallback() {
        _tip2.default.alert('跳转');
      },
      closeAlert: function closeAlert() {
        _tip2.default.alert('关闭');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'getBannerList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getBannerList({
                  query: {}
                });

              case 2:
                json = _context.sent;

                console.log(json);

                if (json.data.error == 0) {
                  this.bannerList = json.data.data;
                  this.$apply();
                  console.log(this.bannerList);
                } else {}

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getBannerList() {
        return _ref2.apply(this, arguments);
      }

      return getBannerList;
    }()
  }, {
    key: 'getTabList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getTabList({
                  query: {}
                });

              case 2:
                json = _context2.sent;

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTabList() {
        return _ref3.apply(this, arguments);
      }

      return getTabList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getBannerList();
      this.getTabList();
    }
  }, {
    key: 'onReachBottom',

    //加载更多
    value: function onReachBottom() {
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        that.getDiscoverList(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJ0YWJMaXN0IiwiaXNfZW1wdHkiLCJjdXJyZW50UGFnZSIsInBhZ2VfdG90YWwiLCJzaG93TG9hZGluZyIsInByZXZlbnRSZXBlYXRSZXVxZXN0IiwiYmFubmVyTGlzdCIsInRwcyIsImlzX3Nob3dfYWxlcnQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnb1RvQWR2ZXJ0IiwidXJsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsImFsZXJ0Q2FsbGJhY2siLCJhbGVydCIsImNsb3NlQWxlcnQiLCJldmVudHMiLCJnZXRCYW5uZXJMaXN0IiwicXVlcnkiLCJqc29uIiwiZXJyb3IiLCIkYXBwbHkiLCJnZXRUYWJMaXN0IiwidGhhdCIsImdldERpc2NvdmVyTGlzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQUNBOzs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixhQUF0QyxFQUFvRCxXQUFVLE1BQTlELEVBQWxCLEVB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RCxLQUFLakMsV0FBMUI7QUFDQWlDLGFBQUs5QixvQkFBTCxHQUE0QixLQUE1QjtBQUNELE9BVEQsTUFTTztBQUNMOEIsYUFBSy9CLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUNGOzs7O0VBbkgrQixlQUFLaUMsSTs7a0JBQWxCckQsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcclxuLy8gaW1wb3J0IERpc2NvdmVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY292ZXInXHJcbi8vIGltcG9ydCBCb21ic2NyZWVuIGZyb20gJy4uL2NvbXBvbmVudHMvYm9tYl9zY3JlZW4nXHJcbmltcG9ydCBCb3R0b21Mb2FkTW9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vYm90dG9tTG9hZE1vcmVcIlxyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S6lOiJsuezlicsXHJcbiAgfVxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJib3R0b21Mb2FkTW9yZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJzaG93TG9hZGluZ1wiLFwibWVzc2FnZVwiOlwi5q2j5Zyo5Yqg6L29XCJ9LFwicGxhY2Vob2xkZXJcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJpc19lbXB0eVwiLFwibWVzc2FnZVwiOlwi5pqC5peg5Y+R546w5pWw5o2uXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIC8vIGRpc2NvdmVyOiBEaXNjb3ZlcixcclxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcclxuICAgIHBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcclxuICAgIC8vIGJvbWJzY3JlZW46IEJvbWJzY3JlZW5cclxuICB9XHJcbiAgZGF0YSA9IHtcclxuXHJcbiAgICBpbWdVcmxzOiBbXHJcbiAgICAgICcuLi9pbWFnZXMvaW1hZ2VfZGVtby5wbmcnLFxyXG4gICAgXSxcclxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGludGVydmFsOiAzMDAwLFxyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogXCIjZmZmXCIsXHJcbiAgICB0YWJMaXN0OiBbXSxcclxuICAgIC8v5piv5ZCm5pyJ5pWw5o2uXHJcbiAgICBpc19lbXB0eTogZmFsc2UsXHJcbiAgICAvL+W9k+WJjemhtemdolxyXG4gICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAvL+aAu+mhteaVsFxyXG4gICAgcGFnZV90b3RhbDogMCxcclxuICAgIC8v5piv5ZCm5pi+56S6IOW6lemDqGxvYWRpbmdcclxuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgLy/pmLLmraLph43lpI3liqDovb1cclxuICAgIHByZXZlbnRSZXBlYXRSZXVxZXN0OiBmYWxzZSxcclxuICAgIC8v5bm/5ZGK5YiX6KGoXHJcbiAgICBiYW5uZXJMaXN0OiBbXSxcclxuICAgIHRwczogMCxcclxuICAgIGlzX3Nob3dfYWxlcnQ6IHRydWVcclxuICB9XHJcbiAgYXN5bmMgZ2V0QmFubmVyTGlzdCgpIHtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0QmFubmVyTGlzdCh7XHJcbiAgICAgIHF1ZXJ5OiB7fVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgIFxyXG4gICAgaWYgKGpzb24uZGF0YS5lcnJvciA9PSAwKSB7XHJcbiAgICAgIHRoaXMuYmFubmVyTGlzdCA9IGpzb24uZGF0YS5kYXRhO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJhbm5lckxpc3QpO1xyXG4gICAgXHJcbiAgICB9IGVsc2Uge31cclxuICB9XHJcbiAgYXN5bmMgZ2V0VGFiTGlzdCgpIHsgXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFRhYkxpc3Qoe1xyXG4gICAgICBxdWVyeToge31cclxuICAgIH0pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uLmRhdGEuZGF0YSk7XHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0QmFubmVyTGlzdCgpO1xyXG4gICAgdGhpcy5nZXRUYWJMaXN0KCk7XHJcbiAgfVxyXG4gIGNvbXB1dGVkID0ge31cclxuICBtZXRob2RzID0ge1xyXG4gICAgZ29Ub0FkdmVydCh1cmwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ1cmw9PT1cIiArIHVybCk7XHJcbiAgICAgIGlmICh1cmwubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IHVybFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+e0oOa0geacjeijheWOgicsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9ob21lJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGVydENhbGxiYWNrKCkge1xyXG4gICAgICB0aXAuYWxlcnQoJ+i3s+i9rCcpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlQWxlcnQoKSB7XHJcbiAgICAgIHRpcC5hbGVydCgn5YWz6ZetJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgLy/liqDovb3mm7TlpJpcclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XHJcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxyXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xyXG4gICAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxyXG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xyXG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XHJcbiAgICAgIHRoYXQuZ2V0RGlzY292ZXJMaXN0KHRoYXQuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuIl19