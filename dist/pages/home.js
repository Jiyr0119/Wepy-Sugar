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

                console.log(json.data.data);

                if (json.data.code == 0) {
                  this.getBannerList = json.data.data;
                  this.$apply();
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

                console.log(json.data.data);

              case 4:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJib3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJ0YWJMaXN0IiwiaXNfZW1wdHkiLCJjdXJyZW50UGFnZSIsInBhZ2VfdG90YWwiLCJzaG93TG9hZGluZyIsInByZXZlbnRSZXBlYXRSZXVxZXN0IiwiYmFubmVyTGlzdCIsInRwcyIsImlzX3Nob3dfYWxlcnQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnb1RvQWR2ZXJ0IiwidXJsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsImFsZXJ0Q2FsbGJhY2siLCJhbGVydCIsImNsb3NlQWxlcnQiLCJldmVudHMiLCJnZXRCYW5uZXJMaXN0IiwicXVlcnkiLCJqc29uIiwiY29kZSIsIiRhcHBseSIsImdldFRhYkxpc3QiLCJ0aGF0IiwiZ2V0RGlzY292ZXJMaXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUhBO0FBQ0E7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLGFBQXRDLEVBQW9ELFdBQVUsTUFBOUQsRUFBbEIsRUFBd0YsZUFBYyxFQUFDLG9CQUFtQixVQUFwQixFQUErQixXQUFVLFFBQXpDLEVBQXRHLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1Y7QUFDQUMsOENBRlU7QUFHVkM7QUFDQTtBQUpVLEssUUFNWkMsSSxHQUFPOztBQUVMQyxlQUFTLENBQ1AsMEJBRE8sQ0FGSjtBQUtMQyxxQkFBZSxJQUxWO0FBTUxDLGdCQUFVLElBTkw7QUFPTEMsZ0JBQVUsSUFQTDtBQVFMQyxnQkFBVSxJQVJMO0FBU0xDLDRCQUFzQixNQVRqQjtBQVVMQyxlQUFTLEVBVko7QUFXTDtBQUNBQyxnQkFBVSxLQVpMO0FBYUw7QUFDQUMsbUJBQWEsQ0FkUjtBQWVMO0FBQ0FDLGtCQUFZLENBaEJQO0FBaUJMO0FBQ0FDLG1CQUFhLElBbEJSO0FBbUJMO0FBQ0FDLDRCQUFzQixLQXBCakI7QUFxQkw7QUFDQUMsa0JBQVksRUF0QlA7QUF1QkxDLFdBQUssQ0F2QkE7QUF3QkxDLHFCQUFlO0FBeEJWLEssUUErQ1BDLFEsR0FBVyxFLFFBQ1hDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsR0FESCxFQUNRO0FBQ2RDLGdCQUFRQyxHQUFSLENBQVksV0FBV0YsR0FBdkI7QUFDQSxZQUFJQSxJQUFJRyxNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDbkI7QUFDRDtBQUNELHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RKLGVBQUtBO0FBRFMsU0FBaEI7QUFHRCxPQVRPOztBQVVSSyx5QkFBbUIsMkJBQVNDLEdBQVQsRUFBYztBQUMvQixZQUFJQSxJQUFJQyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekI7QUFDQU4sa0JBQVFDLEdBQVIsQ0FBWUksSUFBSUUsTUFBaEI7QUFDRDtBQUNELGVBQU87QUFDTEMsaUJBQU8sT0FERjtBQUVMQyxnQkFBTSxhQUZEO0FBR0xDLG1CQUFTLGlCQUFTTCxHQUFULEVBQWM7QUFDckI7QUFDRCxXQUxJO0FBTUxNLGdCQUFNLGNBQVNOLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBUkksU0FBUDtBQVVELE9BekJPO0FBMEJSTyxtQkExQlEsMkJBMEJRO0FBQ2Qsc0JBQUlDLEtBQUosQ0FBVSxJQUFWO0FBQ0QsT0E1Qk87QUE2QlJDLGdCQTdCUSx3QkE2Qks7QUFDWCxzQkFBSUQsS0FBSixDQUFVLElBQVY7QUFDRDtBQS9CTyxLLFFBaUNWRSxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozt1QkF0RFksY0FBSUMsYUFBSixDQUFrQjtBQUNuQ0MseUJBQU87QUFENEIsaUJBQWxCLEM7OztBQUFiQyxvQjs7QUFHTmxCLHdCQUFRQyxHQUFSLENBQVlpQixLQUFLdEMsSUFBTCxDQUFVQSxJQUF0Qjs7QUFFQSxvQkFBSXNDLEtBQUt0QyxJQUFMLENBQVV1QyxJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLHVCQUFLSCxhQUFMLEdBQXFCRSxLQUFLdEMsSUFBTCxDQUFVQSxJQUEvQjtBQUNBLHVCQUFLd0MsTUFBTDtBQUNELGlCQUhELE1BR08sQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR1UsY0FBSUMsVUFBSixDQUFlO0FBQ2hDSix5QkFBTztBQUR5QixpQkFBZixDOzs7QUFBYkMsb0I7O0FBR05sQix3QkFBUUMsR0FBUixDQUFZaUIsS0FBS3RDLElBQUwsQ0FBVUEsSUFBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNQLFdBQUtvQyxhQUFMO0FBQ0EsV0FBS0ssVUFBTDtBQUNEOzs7O0FBb0NEO29DQUNnQjtBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBQSxXQUFLL0IsV0FBTCxHQUFtQixJQUFuQjtBQUNBUyxjQUFRQyxHQUFSLENBQVlxQixLQUFLaEMsVUFBTCxHQUFrQixLQUFsQixHQUEwQmdDLEtBQUtqQyxXQUEzQztBQUNBO0FBQ0EsVUFBS2lDLEtBQUtoQyxVQUFOLEdBQW9CZ0MsS0FBS2pDLFdBQTdCLEVBQTBDO0FBQ3hDO0FBQ0EsWUFBSWlDLEtBQUs5QixvQkFBVCxFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRDhCLGFBQUs5QixvQkFBTCxHQUE0QixJQUE1QjtBQUNBOEIsYUFBS2pDLFdBQUw7QUFDQWlDLGFBQUtDLGVBQUwsQ0FBcUJELEtBQUtqQyxXQUExQjtBQUNBaUMsYUFBSzlCLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0QsT0FURCxNQVNPO0FBQ0w4QixhQUFLL0IsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0Y7Ozs7RUFqSCtCLGVBQUtpQyxJOztrQkFBbEJyRCxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xyXG4vLyBpbXBvcnQgRGlzY292ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9kaXNjb3ZlcidcclxuLy8gaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9ib21iX3NjcmVlbidcclxuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXHJcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vcGxhY2Vob2xkZXJcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LqU6Imy57OWJyxcclxuICB9XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJvdHRvbUxvYWRNb3JlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dlj5HnjrDmlbDmja5cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgLy8gZGlzY292ZXI6IERpc2NvdmVyLFxyXG4gICAgYm90dG9tTG9hZE1vcmU6IEJvdHRvbUxvYWRNb3JlLFxyXG4gICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyLFxyXG4gICAgLy8gYm9tYnNjcmVlbjogQm9tYnNjcmVlblxyXG4gIH1cclxuICBkYXRhID0ge1xyXG5cclxuICAgIGltZ1VybHM6IFtcclxuICAgICAgJy4uL2ltYWdlcy9pbWFnZV9kZW1vLnBuZycsXHJcbiAgICBdLFxyXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDMwMDAsXHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIGluZGljYXRvckFjdGl2ZUNvbG9yOiBcIiNmZmZcIixcclxuICAgIHRhYkxpc3Q6IFtdLFxyXG4gICAgLy/mmK/lkKbmnInmlbDmja5cclxuICAgIGlzX2VtcHR5OiBmYWxzZSxcclxuICAgIC8v5b2T5YmN6aG16Z2iXHJcbiAgICBjdXJyZW50UGFnZTogMSxcclxuICAgIC8v5oC76aG15pWwXHJcbiAgICBwYWdlX3RvdGFsOiAwLFxyXG4gICAgLy/mmK/lkKbmmL7npLog5bqV6YOobG9hZGluZ1xyXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxyXG4gICAgcHJldmVudFJlcGVhdFJldXFlc3Q6IGZhbHNlLFxyXG4gICAgLy/lub/lkYrliJfooahcclxuICAgIGJhbm5lckxpc3Q6IFtdLFxyXG4gICAgdHBzOiAwLFxyXG4gICAgaXNfc2hvd19hbGVydDogdHJ1ZVxyXG4gIH1cclxuICBhc3luYyBnZXRCYW5uZXJMaXN0KCkge1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5nZXRCYW5uZXJMaXN0KHtcclxuICAgICAgcXVlcnk6IHt9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGpzb24uZGF0YS5kYXRhKTtcclxuICAgIFxyXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5nZXRCYW5uZXJMaXN0ID0ganNvbi5kYXRhLmRhdGE7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9IGVsc2Uge31cclxuICB9XHJcbiAgYXN5bmMgZ2V0VGFiTGlzdCgpIHsgXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldFRhYkxpc3Qoe1xyXG4gICAgICBxdWVyeToge31cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhqc29uLmRhdGEuZGF0YSk7XHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0QmFubmVyTGlzdCgpO1xyXG4gICAgdGhpcy5nZXRUYWJMaXN0KCk7XHJcbiAgfVxyXG4gIGNvbXB1dGVkID0ge31cclxuICBtZXRob2RzID0ge1xyXG4gICAgZ29Ub0FkdmVydCh1cmwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ1cmw9PT1cIiArIHVybCk7XHJcbiAgICAgIGlmICh1cmwubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IHVybFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogJ+e0oOa0geacjeijheWOgicsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9ob21lJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGVydENhbGxiYWNrKCkge1xyXG4gICAgICB0aXAuYWxlcnQoJ+i3s+i9rCcpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlQWxlcnQoKSB7XHJcbiAgICAgIHRpcC5hbGVydCgn5YWz6ZetJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgLy/liqDovb3mm7TlpJpcclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyh0aGF0LnBhZ2VfdG90YWwgKyBcIj09PVwiICsgdGhhdC5jdXJyZW50UGFnZSk7XHJcbiAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxyXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xyXG4gICAgICAvL+mYsuatoumHjeWkjeWKoOi9vVxyXG4gICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xyXG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XHJcbiAgICAgIHRoYXQuZ2V0RGlzY292ZXJMaXN0KHRoYXQuY3VycmVudFBhZ2UpO1xyXG4gICAgICB0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuIl19