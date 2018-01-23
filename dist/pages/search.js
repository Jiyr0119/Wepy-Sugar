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

var _constant = require('./../utils/constant.js');

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

var _filter_bar = require('./../components/filter_bar.js');

var _filter_bar2 = _interopRequireDefault(_filter_bar);

var _shop_grid_list = require('./../components/shop_grid_list.js');

var _shop_grid_list2 = _interopRequireDefault(_shop_grid_list);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _filterSlider = require('./../components/filterSlider.js');

var _filterSlider2 = _interopRequireDefault(_filterSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$repeat = {}, _this.$props = { "search": { "xmlns:v-on": "" }, "filterBar": { "xmlns:wx": "" }, "shopGridList": { "xmlns:v-bind": "", "v-bind:purchasetype.sync": "purchasetype", "v-bind:list.sync": "list" }, "bottomLoadMore": { "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" } }, _this.$events = { "search": { "v-on:searchValue": "doSearch" }, "filterBar": { "v-on:currentType": "currentType" } }, _this.components = {
      search: _search2.default,
      filterBar: _filter_bar2.default,
      filterSlider: _filterSlider2.default,
      shopGridList: _shop_grid_list2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      list: [],
      showLoading: false,
      purchasetype: 1,
      is_empty: false,
      is_filter: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      keyword: "",
      keywordhisList: [],
      cateCode: "",
      show: true,
      sort: -1,
      title: "",
      skuval: ""
    }, _this.computed = {}, _this.methods = {
      doSearch: function doSearch(val) {
        this.list = [];
        this.is_empty = false;
        //tip.success("搜索：" + val);
        this.showLoading = true;
        this.keyword = val;
        this.doSearchGoods(val);
        //this.list = bb.result.products;
        //this.$apply();
      },
      currentType: function currentType(obj) {
        //tip.success("状态:" + obj);
        var name = obj.name;
        var type = obj.type;
        if (name == "zhonghe") {
          this.sort = -1;
        } else if (name == "sale") {
          this.sort = 3;
        } else if (name == "price") {
          if (type == "desc") {
            this.sort = 2;
          } else if (type == "asc") {
            this.sort = 1;
          }
        } else if (name == "sku") {
          this.skuval = type;
        }
        this.list = [];
        this.is_empty = false;
        this.showLoading = true;
        //this.$invoke('search', 'show', "0");
        this.show = false;
        this.doSearchGoods(this.keyword);
      },
      selHisKeyWord: function selHisKeyWord(e) {
        console.log(e);
        var id = e.currentTarget.dataset.id;
        var hisKeyword = "";
        for (var i = 0; i < this.keywordhisList.length; i++) {
          this.keywordhisList[i].sel = 0;
          if (id == this.keywordhisList[i].id) {
            hisKeyword = this.keywordhisList[i].keyword;
            this.keywordhisList[i].sel = 1;
          }
        }
        if (hisKeyword.length > 0) {
          this.keyword = hisKeyword;
          this.doSearchGoods(hisKeyword);
        }
      },
      clearHis: function clearHis() {
        this.clearUserKeywords();
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.detail.name,
          path: '/pages/search?cateCode=' + this.cateCode + '&title=' + this.title,
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
      //加载更多
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'getKeyWordHisList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 4;
                return _api2.default.searchKeywordList({
                  query: {
                    openId: openId
                  }
                });

              case 4:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.keywordhisList = json.data.list;
                }
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getKeyWordHisList() {
        return _ref2.apply(this, arguments);
      }

      return getKeyWordHisList;
    }()
  }, {
    key: 'setTitle',
    value: function setTitle(title) {
      _wepy2.default.setNavigationBarTitle({
        title: title
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      this.list = [];
      this.skuval = "";
      this.cateCode = option.cateCode;
      if (this.cateCode != undefined && this.cateCode.length > 0) {
        //分类进入
        this.$invoke('search', 'show', "0");
        this.show = false;
        this.doSearchGoods(this.cateCode);
        this.title = "" + option.title;
        this.setTitle("" + option.title);
      } else {
        //搜索进入
        this.$invoke('search', 'show', "1");
        this.show = true;
        this.getKeyWordHisList();
      }
    }
  }, {
    key: 'doSearchGoods',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(keyword, currentPage, size) {
        var that, json, userSpecialInfo, openId, resultJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                _context2.next = 3;
                return _api2.default.getGoodsList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10,
                    searchKeyWords: this.keyword,
                    cateCode: this.cateCode || "",
                    sort: this.sort,
                    skuval: this.skuval
                  }
                });

              case 3:
                json = _context2.sent;

                if (json.data.code == 0) {
                  that.list = [].concat(_toConsumableArray(that.list), _toConsumableArray(json.data.list));
                  that.page_total = json.data.page_total;
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;
                that.$apply();

                if (!(keyword.length > 0)) {
                  _context2.next = 13;
                  break;
                }

                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 12;
                return _api2.default.addSearchKeyword({
                  query: {
                    openId: openId,
                    keyword: keyword
                  }
                });

              case 12:
                resultJson = _context2.sent;

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doSearchGoods(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return doSearchGoods;
    }()
  }, {
    key: 'clearUserKeywords',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context3.next = 4;
                return _api2.default.clearSearchKeyword({
                  query: {
                    openId: openId
                  }
                });

              case 4:
                json = _context3.sent;

                if (json.data.code == 0) {
                  this.keywordhisList = [];
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function clearUserKeywords() {
        return _ref4.apply(this, arguments);
      }

      return clearUserKeywords;
    }()
  }, {
    key: 'onReachBottom',
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
        that.doSearchGoods("", that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoIiwiZmlsdGVyQmFyIiwiZmlsdGVyU2xpZGVyIiwic2hvcEdyaWRMaXN0IiwiYm90dG9tTG9hZE1vcmUiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJsaXN0Iiwic2hvd0xvYWRpbmciLCJwdXJjaGFzZXR5cGUiLCJpc19lbXB0eSIsImlzX2ZpbHRlciIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsImtleXdvcmQiLCJrZXl3b3JkaGlzTGlzdCIsImNhdGVDb2RlIiwic2hvdyIsInNvcnQiLCJ0aXRsZSIsInNrdXZhbCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImRvU2VhcmNoIiwidmFsIiwiZG9TZWFyY2hHb29kcyIsImN1cnJlbnRUeXBlIiwib2JqIiwibmFtZSIsInR5cGUiLCJzZWxIaXNLZXlXb3JkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaGlzS2V5d29yZCIsImkiLCJsZW5ndGgiLCJzZWwiLCJjbGVhckhpcyIsImNsZWFyVXNlcktleXdvcmRzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJmcm9tIiwidGFyZ2V0IiwiZGV0YWlsIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwidXNlclNwZWNpYWxJbmZvIiwiZ2V0U3RvcmFnZVN5bmMiLCJvcGVuSWQiLCJvcGVuaWQiLCJzZWFyY2hLZXl3b3JkTGlzdCIsInF1ZXJ5IiwianNvbiIsImNvZGUiLCIkYXBwbHkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJvcHRpb24iLCJ1bmRlZmluZWQiLCIkaW52b2tlIiwic2V0VGl0bGUiLCJnZXRLZXlXb3JkSGlzTGlzdCIsInNpemUiLCJ0aGF0IiwiZ2V0R29vZHNMaXN0IiwicGFnZSIsInNlYXJjaEtleVdvcmRzIiwiZXJyb3IiLCJtc2ciLCJhZGRTZWFyY2hLZXl3b3JkIiwicmVzdWx0SnNvbiIsImNsZWFyU2VhcmNoS2V5d29yZCIsInByZXZlbnRSZXBlYXRSZXVxZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxjQUFhLEVBQWQsRUFBVixFQUE0QixhQUFZLEVBQUMsWUFBVyxFQUFaLEVBQXhDLEVBQXdELGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsNEJBQTJCLGNBQTlDLEVBQTZELG9CQUFtQixNQUFoRixFQUF2RSxFQUErSixrQkFBaUIsRUFBQyxvQkFBbUIsYUFBcEIsRUFBa0MsV0FBVSxNQUE1QyxFQUFoTCxFQUFvTyxlQUFjLEVBQUMsb0JBQW1CLFVBQXBCLEVBQStCLFdBQVUsUUFBekMsRUFBbFAsRSxRQUNUQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsb0JBQW1CLFVBQXBCLEVBQVYsRUFBMEMsYUFBWSxFQUFDLG9CQUFtQixhQUFwQixFQUF0RCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyw4QkFEUTtBQUVSQyxxQ0FGUTtBQUdSQywwQ0FIUTtBQUlSQyw0Q0FKUTtBQUtSQyw4Q0FMUTtBQU1SQztBQU5RLEssUUFRVkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYSxLQUZSO0FBR0xDLG9CQUFjLENBSFQ7QUFJTEMsZ0JBQVUsS0FKTDtBQUtMQyxpQkFBVSxLQUxMO0FBTUw7QUFDQUMsbUJBQWEsQ0FQUjtBQVFMO0FBQ0FDLGtCQUFZLENBVFA7QUFVTEMsZUFBUyxFQVZKO0FBV0xDLHNCQUFnQixFQVhYO0FBWUxDLGdCQUFVLEVB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cHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpJztcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcclxuICBpbXBvcnQge1xyXG4gICAgU1lTVEVNX0lORk8sXHJcbiAgICBVU0VSX1NQRUNJQ0FMX0lORk9cclxuICB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcclxuICBpbXBvcnQgU2VhcmNocyBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaCdcclxuICBpbXBvcnQgRmlsdGVyQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2ZpbHRlcl9iYXJcIlxyXG4gIGltcG9ydCBTaG9wR3JpZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zaG9wX2dyaWRfbGlzdCdcclxuICBpbXBvcnQgQm90dG9tTG9hZE1vcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL2JvdHRvbUxvYWRNb3JlXCJcclxuICBpbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcclxuICBpbXBvcnQgRmlsdGVyU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZmlsdGVyU2xpZGVyJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKInLFxyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNlYXJjaFwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImZpbHRlckJhclwiOntcInhtbG5zOnd4XCI6XCJcIn0sXCJzaG9wR3JpZExpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnB1cmNoYXNldHlwZS5zeW5jXCI6XCJwdXJjaGFzZXR5cGVcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIn0sXCJib3R0b21Mb2FkTW9yZVwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dlj5HnjrDmlbDmja5cIn19O1xyXG4kZXZlbnRzID0ge1wic2VhcmNoXCI6e1widi1vbjpzZWFyY2hWYWx1ZVwiOlwiZG9TZWFyY2hcIn0sXCJmaWx0ZXJCYXJcIjp7XCJ2LW9uOmN1cnJlbnRUeXBlXCI6XCJjdXJyZW50VHlwZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBzZWFyY2g6IFNlYXJjaHMsXHJcbiAgICAgIGZpbHRlckJhcjogRmlsdGVyQmFyLFxyXG4gICAgICBmaWx0ZXJTbGlkZXI6IEZpbHRlclNsaWRlcixcclxuICAgICAgc2hvcEdyaWRMaXN0OiBTaG9wR3JpZExpc3QsXHJcbiAgICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcclxuICAgICAgcGxhY2Vob2xkZXI6IFBsYWNlaG9sZGVyXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgc2hvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBwdXJjaGFzZXR5cGU6IDEsXHJcbiAgICAgIGlzX2VtcHR5OiBmYWxzZSxcclxuICAgICAgaXNfZmlsdGVyOmZhbHNlLFxyXG4gICAgICAvL+W9k+WJjemhtemdolxyXG4gICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgLy/mgLvpobXmlbBcclxuICAgICAgcGFnZV90b3RhbDogMCxcclxuICAgICAga2V5d29yZDogXCJcIixcclxuICAgICAga2V5d29yZGhpc0xpc3Q6IFtdLFxyXG4gICAgICBjYXRlQ29kZTogXCJcIixcclxuICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgc29ydDogLTEsXHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICBza3V2YWw6IFwiXCJcclxuICAgIH1cclxuICAgIGFzeW5jIGdldEtleVdvcmRIaXNMaXN0KCkge1xyXG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcclxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5zZWFyY2hLZXl3b3JkTGlzdCh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIG9wZW5JZDogb3BlbklkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgICB0aGlzLmtleXdvcmRoaXNMaXN0ID0ganNvbi5kYXRhLmxpc3Q7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICB0aXRsZTogdGl0bGVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgIHRoaXMuc2t1dmFsID0gXCJcIjtcclxuICAgICAgdGhpcy5jYXRlQ29kZSA9IG9wdGlvbi5jYXRlQ29kZTtcclxuICAgICAgaWYgKHRoaXMuY2F0ZUNvZGUgIT0gdW5kZWZpbmVkICYmIHRoaXMuY2F0ZUNvZGUubGVuZ3RoID4gMCkgeyAvL+WIhuexu+i/m+WFpVxyXG4gICAgICAgIHRoaXMuJGludm9rZSgnc2VhcmNoJywgJ3Nob3cnLCBcIjBcIik7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb1NlYXJjaEdvb2RzKHRoaXMuY2F0ZUNvZGUpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBcIlwiICsgb3B0aW9uLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoXCJcIiArIG9wdGlvbi50aXRsZSk7XHJcbiAgICAgIH0gZWxzZSB7IC8v5pCc57Si6L+b5YWlXHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdzZWFyY2gnLCAnc2hvdycsIFwiMVwiKTtcclxuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2V0S2V5V29yZEhpc0xpc3QoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZWQgPSB7fVxyXG4gICAgYXN5bmMgZG9TZWFyY2hHb29kcyhrZXl3b3JkLCBjdXJyZW50UGFnZSwgc2l6ZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0R29vZHNMaXN0KHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcclxuICAgICAgICAgIHNpemU6IHNpemUgfHwgMTAsXHJcbiAgICAgICAgICBzZWFyY2hLZXlXb3JkczogdGhpcy5rZXl3b3JkLFxyXG4gICAgICAgICAgY2F0ZUNvZGU6IHRoaXMuY2F0ZUNvZGUgfHwgXCJcIixcclxuICAgICAgICAgIHNvcnQ6IHRoaXMuc29ydCxcclxuICAgICAgICAgIHNrdXZhbDogdGhpcy5za3V2YWxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgIHRoYXQubGlzdCA9IFsuLi50aGF0Lmxpc3QsIC4uLmpzb24uZGF0YS5saXN0XTtcclxuICAgICAgICB0aGF0LnBhZ2VfdG90YWwgPSBqc29uLmRhdGEucGFnZV90b3RhbDtcclxuICAgICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xyXG4gICAgICAgICAgLy/mmoLml6DmlbDmja5cclxuICAgICAgICAgIHRoYXQuaXNfZW1wdHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICBpZiAoa2V5d29yZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcclxuICAgICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcclxuICAgICAgICBjb25zdCByZXN1bHRKc29uID0gYXdhaXQgYXBpLmFkZFNlYXJjaEtleXdvcmQoe1xyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICAgIGtleXdvcmQ6IGtleXdvcmRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xlYXJVc2VyS2V5d29yZHMoKSB7XHJcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xyXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNsZWFyU2VhcmNoS2V5d29yZCh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIG9wZW5JZDogb3BlbklkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgICB0aGlzLmtleXdvcmRoaXNMaXN0ID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBkb1NlYXJjaCh2YWwpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmlzX2VtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgLy90aXAuc3VjY2VzcyhcIuaQnOe0ou+8mlwiICsgdmFsKTtcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmtleXdvcmQgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5kb1NlYXJjaEdvb2RzKHZhbCk7XHJcbiAgICAgICAgLy90aGlzLmxpc3QgPSBiYi5yZXN1bHQucHJvZHVjdHM7XHJcbiAgICAgICAgLy90aGlzLiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBjdXJyZW50VHlwZShvYmopIHtcclxuICAgICAgICAvL3RpcC5zdWNjZXNzKFwi54q25oCBOlwiICsgb2JqKTtcclxuICAgICAgICB2YXIgbmFtZSA9IG9iai5uYW1lO1xyXG4gICAgICAgIHZhciB0eXBlID0gb2JqLnR5cGU7XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ6aG9uZ2hlXCIpIHtcclxuICAgICAgICAgIHRoaXMuc29ydCA9IC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSBcInNhbGVcIikge1xyXG4gICAgICAgICAgdGhpcy5zb3J0ID0gMztcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJwcmljZVwiKSB7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PSBcImRlc2NcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnQgPSAyO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiYXNjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0ID0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJza3VcIikge1xyXG4gICAgICAgICAgdGhpcy5za3V2YWwgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmlzX2VtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgLy90aGlzLiRpbnZva2UoJ3NlYXJjaCcsICdzaG93JywgXCIwXCIpO1xyXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG9TZWFyY2hHb29kcyh0aGlzLmtleXdvcmQpO1xyXG4gICAgICB9LFxyXG4gICAgICBzZWxIaXNLZXlXb3JkKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB2YXIgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICB2YXIgaGlzS2V5d29yZCA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmtleXdvcmRoaXNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmtleXdvcmRoaXNMaXN0W2ldLnNlbCA9IDA7XHJcbiAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5rZXl3b3JkaGlzTGlzdFtpXS5pZCkge1xyXG4gICAgICAgICAgICBoaXNLZXl3b3JkID0gdGhpcy5rZXl3b3JkaGlzTGlzdFtpXS5rZXl3b3JkO1xyXG4gICAgICAgICAgICB0aGlzLmtleXdvcmRoaXNMaXN0W2ldLnNlbCA9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoaXNLZXl3b3JkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMua2V5d29yZCA9IGhpc0tleXdvcmQ7XHJcbiAgICAgICAgICB0aGlzLmRvU2VhcmNoR29vZHMoaGlzS2V5d29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjbGVhckhpcygpIHtcclxuICAgICAgICB0aGlzLmNsZWFyVXNlcktleXdvcmRzKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5kZXRhaWwubmFtZSxcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvc2VhcmNoP2NhdGVDb2RlPScgKyB0aGlzLmNhdGVDb2RlICsgJyZ0aXRsZT0nICsgdGhpcy50aXRsZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAvLyDovazlj5HmiJDlip9cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WKoOi9veabtOWkmlxyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xyXG4gICAgICAvL+WIpOaWreaAu+mhteaVsOaYr+WQpuWkp+S6jue/u+mhteaVsFxyXG4gICAgICBpZiAoKHRoYXQucGFnZV90b3RhbCkgPiB0aGF0LmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgLy/pmLLmraLph43lpI3liqDovb1cclxuICAgICAgICBpZiAodGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoYXQuY3VycmVudFBhZ2UrKztcclxuICAgICAgICB0aGF0LmRvU2VhcmNoR29vZHMoXCJcIiwgdGhhdC5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiJdfQ==