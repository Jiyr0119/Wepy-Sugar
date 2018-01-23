'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _constant = require('./../utils/constant.js');

var _wepySwipeDelete = require('./common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shopCart = function (_wepy$component) {
  _inherits(shopCart, _wepy$component);

  function shopCart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, shopCart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = shopCart.__proto__ || Object.getPrototypeOf(shopCart)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "list": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.data = {
      list: [],
      noSelect: false,
      saveHidden: true,
      totalPrice: 0,
      operating: false,
      allChecked: true
      //获取购物车商品列表
    }, _this.computed = {}, _this.methods = {
      handleDelItem: function handleDelItem(itemData) {
        this.deleteGoods(itemData);
      },
      selectTap: function selectTap(e) {
        var id = e.currentTarget.dataset.id;
        var index = parseInt(e.currentTarget.dataset.index);
        var ischecked = this.list[index].ischecked;
        this.checkGoods(id, index, ischecked);
      },
      selectAll: function selectAll() {
        console.log("sele....");
        this.checkAllGoods();
      },
      getCartListMethod: function getCartListMethod() {
        this.getCartList();
      },
      jianBtnTap: function jianBtnTap(e) {
        if (this.operating) {
          return;
        }
        this.operating = true;
        var id = e.currentTarget.dataset.id;
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.list[index].num;
        // 如果只有1件了，就不允许再减了
        if (num > 1) {
          num--;
        } else {
          return;
        }
        this.reduceGoodNum(id, num, index);
      },
      jiaBtnTap: function jiaBtnTap(e) {
        if (this.operating) {
          return;
        }
        this.operating = true;
        var id = e.currentTarget.dataset.id;
        var index = parseInt(e.currentTarget.dataset.index);
        var num = this.list[index].num;
        // 自增
        num++;
        this.addGoodNum(id, num, index);
      },
      toPayOrder: function toPayOrder() {
        var purType = 1,
            prePurType = 1;
        var bOneType = true;
        var index = 0;
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].ischecked) {
            purType = this.list[i].type;
            if (index > 0) {
              if (purType != prePurType) {
                bOneType = false;
                break;
              }
            }
            prePurType = purType;
            index++;
          }
        }
        if (!bOneType) {
          _tip2.default.alert("先把补货的商品结算!");
          return;
        }
        _wepy2.default.navigateTo({
          url: "/pages/comfire_order?purchasetype=" + purType
        });
      },
      goIndex: function goIndex() {
        _wepy2.default.switchTab({
          url: "/pages/home"
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(shopCart, [{
    key: 'getCartList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, userSpecialInfo, openId, json, data, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.cartList({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;

                if (!(json.data.code == 0)) {
                  _context.next = 20;
                  break;
                }

                data = json.data;

                this.list = data.list;
                this.totalPrice = data.totalPrice;
                i = 0;

              case 11:
                if (!(i < this.list.length)) {
                  _context.next = 18;
                  break;
                }

                if (this.list[i].ischecked) {
                  _context.next = 15;
                  break;
                }

                this.allChecked = false;
                return _context.abrupt('break', 18);

              case 15:
                i++;
                _context.next = 11;
                break;

              case 18:
                _context.next = 21;
                break;

              case 20:
                _tip2.default.error(json.data.msg);

              case 21:
                that.$apply();

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCartList() {
        return _ref2.apply(this, arguments);
      }

      return getCartList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.operating = false;
      //that.list = bb.result.products;
      //console.log(bb.result.products)
      //that.getCartList();
    }
  }, {
    key: 'checkGoods',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, index, ischecked) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 4;
                return _api2.default.cartCheck({
                  query: {
                    openId: openId,
                    id: id
                  }
                });

              case 4:
                json = _context2.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].ischecked = !ischecked;
                  if (this.list[index].ischecked) {
                    this.totalPrice += parseInt(this.list[index].priceSubtotal);
                  } else {
                    this.totalPrice -= parseInt(this.list[index].priceSubtotal);
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkGoods(_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return checkGoods;
    }()
  }, {
    key: 'reduceGoodNum',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, num, index) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context3.next = 4;
                return _api2.default.cartUpdateNum({
                  query: {
                    openId: openId,
                    id: id,
                    num: num
                  }
                });

              case 4:
                json = _context3.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].num = num;
                  this.totalPrice = this.totalPrice - this.list[index].price;
                  this.operating = false;
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

      function reduceGoodNum(_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return reduceGoodNum;
    }()
  }, {
    key: 'addGoodNum',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, num, index) {
        var userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context4.next = 4;
                return _api2.default.cartUpdateNum({
                  query: {
                    openId: openId,
                    id: id,
                    num: num
                  }
                });

              case 4:
                json = _context4.sent;

                if (json.data.code == 0) {
                  // 购物车数据
                  this.list[index].num = num;
                  this.totalPrice = parseInt(this.totalPrice) + parseInt(this.list[index].price);
                  this.operating = false;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addGoodNum(_x7, _x8, _x9) {
        return _ref5.apply(this, arguments);
      }

      return addGoodNum;
    }()
  }, {
    key: 'deleteGoods',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(itemData) {
        var id, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = itemData.id;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context5.next = 5;
                return _api2.default.cartDel({
                  query: {
                    openId: openId,
                    cartIdList: [id]
                  }
                });

              case 5:
                json = _context5.sent;

                if (!(json.data.code == 0)) {
                  _context5.next = 22;
                  break;
                }

                // 购物车数据
                retList = [];
                i = 0;

              case 9:
                if (!(i < this.list.length)) {
                  _context5.next = 19;
                  break;
                }

                if (!(this.list[i].id == id)) {
                  _context5.next = 15;
                  break;
                }

                if (this.list[i].ischecked) {
                  this.totalPrice -= parseInt(this.list[i].priceSubtotal);
                }
                return _context5.abrupt('continue', 16);

              case 15:
                retList.push(this.list[i]);

              case 16:
                i++;
                _context5.next = 9;
                break;

              case 19:
                this.list = retList;
                _context5.next = 23;
                break;

              case 22:
                _tip2.default.error(json.data.msg);

              case 23:
                this.$apply();

              case 24:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteGoods(_x10) {
        return _ref6.apply(this, arguments);
      }

      return deleteGoods;
    }()
  }, {
    key: 'checkAllGoods',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var userSpecialInfo, openId, check, json, i;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                check = 0;

                if (!this.allChecked) {
                  //原来未选中
                  check = 1;
                }
                _context6.next = 6;
                return _api2.default.cartCheckAll({
                  query: {
                    openId: openId,
                    check: check
                  }
                });

              case 6:
                json = _context6.sent;

                if (json.data.code == 0) {
                  this.totalPrice = 0;
                  for (i = 0; i < this.list.length; i++) {
                    this.list[i].ischecked = !this.allChecked;
                    if (!this.allChecked) {
                      this.totalPrice += parseInt(this.list[i].priceSubtotal);
                    }
                  }
                  this.allChecked = !this.allChecked;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkAllGoods() {
        return _ref7.apply(this, arguments);
      }

      return checkAllGoods;
    }()
  }]);

  return shopCart;
}(_wepy2.default.component);

exports.default = shopCart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BfY2FydC5qcyJdLCJuYW1lcyI6WyJzaG9wQ2FydCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3aXBlRGVsZXRlIiwiZGF0YSIsImxpc3QiLCJub1NlbGVjdCIsInNhdmVIaWRkZW4iLCJ0b3RhbFByaWNlIiwib3BlcmF0aW5nIiwiYWxsQ2hlY2tlZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZURlbEl0ZW0iLCJpdGVtRGF0YSIsImRlbGV0ZUdvb2RzIiwic2VsZWN0VGFwIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInBhcnNlSW50IiwiaXNjaGVja2VkIiwiY2hlY2tHb29kcyIsInNlbGVjdEFsbCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0FsbEdvb2RzIiwiZ2V0Q2FydExpc3RNZXRob2QiLCJnZXRDYXJ0TGlzdCIsImppYW5CdG5UYXAiLCJudW0iLCJyZWR1Y2VHb29kTnVtIiwiamlhQnRuVGFwIiwiYWRkR29vZE51bSIsInRvUGF5T3JkZXIiLCJwdXJUeXBlIiwicHJlUHVyVHlwZSIsImJPbmVUeXBlIiwiaSIsImxlbmd0aCIsInR5cGUiLCJhbGVydCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb0luZGV4Iiwic3dpdGNoVGFiIiwiZXZlbnRzIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwiY2FydExpc3QiLCJxdWVyeSIsImpzb24iLCJjb2RlIiwiZXJyb3IiLCJtc2ciLCIkYXBwbHkiLCJjYXJ0Q2hlY2siLCJwcmljZVN1YnRvdGFsIiwiY2FydFVwZGF0ZU51bSIsInByaWNlIiwiY2FydERlbCIsImNhcnRJZExpc3QiLCJyZXRMaXN0IiwicHVzaCIsImNoZWNrIiwiY2FydENoZWNrQWxsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFD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QUwsQ0FBVXVELEdBQXBCO0FBQ0Q7QUFDRCxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJLa0MsZUFBS1csUzs7a0JBQXRCekUsUSIsImZpbGUiOiJzaG9wX2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xyXG4gIGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJztcclxuICBpbXBvcnQge1xyXG4gICAgVVNFUl9TUEVDSUNBTF9JTkZPXHJcbiAgfSBmcm9tICcuLi91dGlscy9jb25zdGFudCc7XHJcbiAgaW1wb3J0IHN3aXBlRGVsZXRlIGZyb20gJy4vY29tbW9uL3dlcHktc3dpcGUtZGVsZXRlJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHNob3BDYXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwic3dpcGVEZWxldGVcIixcInByb3BzXCI6XCJzd2lwZURhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJzd2lwZURlbGV0ZVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOnN3aXBlRGF0YS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwieG1sbnM6di1vblwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7XCJzd2lwZURlbGV0ZVwiOntcInYtb246ZGVsSXRlbVwiOlwiaGFuZGxlRGVsSXRlbVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBzd2lwZURlbGV0ZVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIG5vU2VsZWN0OiBmYWxzZSxcclxuICAgICAgc2F2ZUhpZGRlbjogdHJ1ZSxcclxuICAgICAgdG90YWxQcmljZTogMCxcclxuICAgICAgb3BlcmF0aW5nOiBmYWxzZSxcclxuICAgICAgYWxsQ2hlY2tlZDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy/ojrflj5botK3nianovabllYblk4HliJfooahcclxuICAgIGFzeW5jIGdldENhcnRMaXN0KCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xyXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmNhcnRMaXN0KHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb3BlbklkOiBvcGVuSWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgIGxldCBkYXRhID0ganNvbi5kYXRhO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGEubGlzdDtcclxuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSBkYXRhLnRvdGFsUHJpY2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICghdGhpcy5saXN0W2ldLmlzY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxyXG4gICAgICB9XHJcbiAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhpcy5vcGVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgLy90aGF0Lmxpc3QgPSBiYi5yZXN1bHQucHJvZHVjdHM7XHJcbiAgICAgIC8vY29uc29sZS5sb2coYmIucmVzdWx0LnByb2R1Y3RzKVxyXG4gICAgICAvL3RoYXQuZ2V0Q2FydExpc3QoKTtcclxuICAgIH1cclxuICAgIGNvbXB1dGVkID0ge31cclxuICAgIGFzeW5jIGNoZWNrR29vZHMoaWQsIGluZGV4LCBpc2NoZWNrZWQpIHtcclxuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcclxuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydENoZWNrKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICBpZDogaWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgIC8vIOi0reeJqei9puaVsOaNrlxyXG4gICAgICAgIHRoaXMubGlzdFtpbmRleF0uaXNjaGVja2VkID0gIWlzY2hlY2tlZDtcclxuICAgICAgICBpZiAodGhpcy5saXN0W2luZGV4XS5pc2NoZWNrZWQpIHtcclxuICAgICAgICAgIHRoaXMudG90YWxQcmljZSArPSBwYXJzZUludCh0aGlzLmxpc3RbaW5kZXhdLnByaWNlU3VidG90YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgLT0gcGFyc2VJbnQodGhpcy5saXN0W2luZGV4XS5wcmljZVN1YnRvdGFsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHJlZHVjZUdvb2ROdW0oaWQsIG51bSwgaW5kZXgpIHtcclxuICAgICAgbGV0IHVzZXJTcGVjaWFsSW5mbyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSB8fCB7fTtcclxuICAgICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydFVwZGF0ZU51bSh7XHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIG9wZW5JZDogb3BlbklkLFxyXG4gICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgbnVtOiBudW1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgIC8vIOi0reeJqei9puaVsOaNrlxyXG4gICAgICAgIHRoaXMubGlzdFtpbmRleF0ubnVtID0gbnVtO1xyXG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IHRoaXMudG90YWxQcmljZSAtIHRoaXMubGlzdFtpbmRleF0ucHJpY2U7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYWRkR29vZE51bShpZCwgbnVtLCBpbmRleCkge1xyXG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcclxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jYXJ0VXBkYXRlTnVtKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICBudW06IG51bVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgLy8g6LSt54mp6L2m5pWw5o2uXHJcbiAgICAgICAgdGhpcy5saXN0W2luZGV4XS5udW0gPSBudW07XHJcbiAgICAgICAgdGhpcy50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy50b3RhbFByaWNlKSArIHBhcnNlSW50KHRoaXMubGlzdFtpbmRleF0ucHJpY2UpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZUdvb2RzKGl0ZW1EYXRhKSB7XHJcbiAgICAgIHZhciBpZCA9IGl0ZW1EYXRhLmlkO1xyXG4gICAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcclxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jYXJ0RGVsKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICBjYXJ0SWRMaXN0OiBbaWRdLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgLy8g6LSt54mp6L2m5pWw5o2uXHJcbiAgICAgICAgbGV0IHJldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdFtpXS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W2ldLmlzY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMudG90YWxQcmljZSAtPSBwYXJzZUludCh0aGlzLmxpc3RbaV0ucHJpY2VTdWJ0b3RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXRMaXN0LnB1c2godGhpcy5saXN0W2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0ID0gcmV0TGlzdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoZWNrQWxsR29vZHMoKSB7XHJcbiAgICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcbiAgICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xyXG4gICAgICBsZXQgY2hlY2sgPSAwO1xyXG4gICAgICBpZiAoIXRoaXMuYWxsQ2hlY2tlZCkgey8v5Y6f5p2l5pyq6YCJ5LitXHJcbiAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuY2FydENoZWNrQWxsKHtcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICBjaGVjazogY2hlY2tcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMubGlzdFtpXS5pc2NoZWNrZWQgPSAhdGhpcy5hbGxDaGVja2VkO1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmFsbENoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbFByaWNlICs9IHBhcnNlSW50KHRoaXMubGlzdFtpXS5wcmljZVN1YnRvdGFsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGxDaGVja2VkID0gIXRoaXMuYWxsQ2hlY2tlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aXAuZXJyb3IoanNvbi5kYXRhLm1zZylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBoYW5kbGVEZWxJdGVtKGl0ZW1EYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVHb29kcyhpdGVtRGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdFRhcChlKSB7XHJcbiAgICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgIHZhciBpc2NoZWNrZWQgPSB0aGlzLmxpc3RbaW5kZXhdLmlzY2hlY2tlZDtcclxuICAgICAgICB0aGlzLmNoZWNrR29vZHMoaWQsIGluZGV4LCBpc2NoZWNrZWQpO1xyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3RBbGwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlLi4uLlwiKTtcclxuICAgICAgICB0aGlzLmNoZWNrQWxsR29vZHMoKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0Q2FydExpc3RNZXRob2QoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDYXJ0TGlzdCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBqaWFuQnRuVGFwKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5vcGVyYXRpbmcpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICB2YXIgbnVtID0gdGhpcy5saXN0W2luZGV4XS5udW07XHJcbiAgICAgICAgLy8g5aaC5p6c5Y+q5pyJMeS7tuS6hu+8jOWwseS4jeWFgeiuuOWGjeWHj+S6hlxyXG4gICAgICAgIGlmIChudW0gPiAxKSB7XHJcbiAgICAgICAgICBudW0tLTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZHVjZUdvb2ROdW0oaWQsIG51bSwgaW5kZXgpO1xyXG4gICAgICB9LFxyXG4gICAgICBqaWFCdG5UYXAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZXJhdGluZykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZXJhdGluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgIHZhciBudW0gPSB0aGlzLmxpc3RbaW5kZXhdLm51bTtcclxuICAgICAgICAvLyDoh6rlop5cclxuICAgICAgICBudW0rKztcclxuICAgICAgICB0aGlzLmFkZEdvb2ROdW0oaWQsIG51bSwgaW5kZXgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b1BheU9yZGVyKCkge1xyXG4gICAgICAgIGxldCBwdXJUeXBlID0gMSxcclxuICAgICAgICAgIHByZVB1clR5cGUgPSAxO1xyXG4gICAgICAgIGxldCBiT25lVHlwZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdFtpXS5pc2NoZWNrZWQpIHtcclxuICAgICAgICAgICAgcHVyVHlwZSA9IHRoaXMubGlzdFtpXS50eXBlO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHB1clR5cGUgIT0gcHJlUHVyVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgYk9uZVR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmVQdXJUeXBlID0gcHVyVHlwZTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFiT25lVHlwZSkge1xyXG4gICAgICAgICAgdGlwLmFsZXJ0KFwi5YWI5oqK6KGl6LSn55qE5ZWG5ZOB57uT566XIVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogXCIvcGFnZXMvY29tZmlyZV9vcmRlcj9wdXJjaGFzZXR5cGU9XCIgKyBwdXJUeXBlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ29JbmRleCgpIHtcclxuICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2hvbWVcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50cyA9IHt9XHJcbiAgfVxyXG4iXX0=