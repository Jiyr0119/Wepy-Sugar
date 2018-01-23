'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../utils/constant.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _wepySwipeDelete = require('./common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollecntionList = function (_wepy$component) {
  _inherits(CollecntionList, _wepy$component);

  function CollecntionList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CollecntionList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CollecntionList.__proto__ || Object.getPrototypeOf(CollecntionList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      type: {
        default: 0
      },
      list: {
        type: Object,
        default: []
      }
    }, _this.$repeat = { "list": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "list", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.computed = {}, _this.methods = {
      handleDelItem: function handleDelItem(itemData) {
        console.log(itemData);
        var objType = itemData.type;
        if (objType == 1) {
          this.delUserBrowser(itemData.goodsId);
        } else if (objType == 2) {
          this.goodsUnFavorite(itemData.goodsId);
        }
      },
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.list = val;
        this.$apply();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CollecntionList, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      console.log(that.list);
    }
  }, {
    key: 'goodsUnFavorite',


    //商品取消收藏
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(goodsId) {
        var that, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.goodsUnFavorite({
                  query: {
                    openId: openId,
                    goodsId: goodsId
                  }
                });

              case 5:
                json = _context.sent;

                if (!(json.data.code == 0)) {
                  _context.next = 22;
                  break;
                }

                console.log("===========商品取消收藏成功=========");
                //tip.toast("取消收藏成功");
                retList = [];
                i = 0;

              case 10:
                if (!(i < this.list.length)) {
                  _context.next = 19;
                  break;
                }

                if (!(this.list[i].goodsId == goodsId)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt('continue', 16);

              case 15:
                retList.push(this.list[i]);

              case 16:
                i++;
                _context.next = 10;
                break;

              case 19:
                this.list = retList;
                _context.next = 23;
                break;

              case 22:
                _tip2.default.error(json.data.msg);

              case 23:
                that.$apply();

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function goodsUnFavorite(_x) {
        return _ref2.apply(this, arguments);
      }

      return goodsUnFavorite;
    }()

    //商品取消收藏

  }, {
    key: 'delUserBrowser',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(goodsId) {
        var that, userSpecialInfo, openId, json, retList, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context2.next = 5;
                return _api2.default.delUserBrowser({
                  query: {
                    openId: openId,
                    goodsId: goodsId
                  }
                });

              case 5:
                json = _context2.sent;

                if (!(json.data.code == 0)) {
                  _context2.next = 22;
                  break;
                }

                console.log("===========商品取消收藏成功=========");
                //tip.toast("取消收藏成功");
                retList = [];
                i = 0;

              case 10:
                if (!(i < this.list.length)) {
                  _context2.next = 19;
                  break;
                }

                if (!(this.list[i].goodsId == goodsId)) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt('continue', 16);

              case 15:
                retList.push(this.list[i]);

              case 16:
                i++;
                _context2.next = 10;
                break;

              case 19:
                this.list = retList;
                _context2.next = 23;
                break;

              case 22:
                _tip2.default.error(json.data.msg);

              case 23:
                that.$apply();

              case 24:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function delUserBrowser(_x2) {
        return _ref3.apply(this, arguments);
      }

      return delUserBrowser;
    }()
  }]);

  return CollecntionList;
}(_wepy2.default.component);

exports.default = CollecntionList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25fbGlzdC5qcyJdLCJuYW1lcyI6WyJDb2xsZWNudGlvbkxpc3QiLCJwcm9wcyIsInR5cGUiLCJkZWZhdWx0IiwibGlzdCIsIk9iamVjdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInN3aXBlRGVsZXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFuZGxlRGVsSXRlbSIsIml0ZW1EYXRhIiwiY29uc29sZSIsImxvZyIsIm9ialR5cGUiLCJkZWxVc2VyQnJvd3NlciIsImdvb2RzSWQiLCJnb29kc1VuRmF2b3JpdGUiLCJyZWZyZXNoTGlzdCIsInZhbCIsInVuZGVmaW5lZCIsIiRhcHBseSIsImV2ZW50cyIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsIm9wZW5pZCIsInF1ZXJ5IiwianNvbiIsImRhdGEiLCJjb2RlIiwicmV0TGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiZXJyb3IiLCJtc2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTztBQUNMQyxpQkFBUztBQURKLE9BREQ7QUFJTkMsWUFBTTtBQUNKRixjQUFNRyxNQURGO0FBRUpGLGlCQUFTO0FBRkw7QUFKQSxLLFFBU1RHLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxXQUE3QixFQUFSLEUsUUFDWEMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxPQUE3RCxFQUFoQixFQUFzRix5QkFBd0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxN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QWEsS0FBS2xDLElBQUwsQ0FBVWdDLENBQVYsQ0FBYjs7O0FBSmtDQSxtQjs7Ozs7QUFPdEMscUJBQUtoQyxJQUFMLEdBQVkrQixPQUFaOzs7OztBQUVBLDhCQUFJSSxLQUFKLENBQVVQLEtBQUtDLElBQUwsQ0FBVU8sR0FBcEI7OztBQUVGZCxxQkFBS0YsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpGeUMsZUFBS2lCLFM7O2tCQUE3QnpDLGUiLCJmaWxlIjoiY29sbGVjdGlvbl9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQge1xyXG4gIFNZU1RFTV9JTkZPLFxyXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xyXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcclxuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XHJcbmltcG9ydCBTd2lwZURlbGV0ZSBmcm9tICcuL2NvbW1vbi93ZXB5LXN3aXBlLWRlbGV0ZSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjbnRpb25MaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgdHlwZSA6IHtcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIGxpc3Q6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJzd2lwZURlbGV0ZVwiLFwicHJvcHNcIjpcInN3aXBlRGF0YVwifX07XHJcbiRwcm9wcyA9IHtcInN3aXBlRGVsZXRlXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3dpcGVEYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19fTtcclxuJGV2ZW50cyA9IHtcInN3aXBlRGVsZXRlXCI6e1widi1vbjpkZWxJdGVtXCI6XCJoYW5kbGVEZWxJdGVtXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBzd2lwZURlbGV0ZTogU3dpcGVEZWxldGVcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKHRoYXQubGlzdClcclxuXHJcbiAgfVxyXG4gIGNvbXB1dGVkID0ge1xyXG5cclxuICB9XHJcblxyXG4gIC8v5ZWG5ZOB5Y+W5raI5pS26JePXHJcbiAgYXN5bmMgZ29vZHNVbkZhdm9yaXRlKGdvb2RzSWQpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcbiAgICBsZXQgb3BlbklkID0gdXNlclNwZWNpYWxJbmZvLm9wZW5pZDtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ29vZHNVbkZhdm9yaXRlKHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcclxuICAgICAgICBnb29kc0lkOiBnb29kc0lkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PeWVhuWTgeWPlua2iOaUtuiXj+aIkOWKnz09PT09PT09PVwiKVxyXG4gICAgICAvL3RpcC50b2FzdChcIuWPlua2iOaUtuiXj+aIkOWKn1wiKTtcclxuICAgICAgbGV0IHJldExpc3QgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0W2ldLmdvb2RzSWQgPT0gZ29vZHNJZCkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldExpc3QucHVzaCh0aGlzLmxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpc3QgPSByZXRMaXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXHJcbiAgICB9XHJcbiAgICB0aGF0LiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgLy/llYblk4Hlj5bmtojmlLbol49cclxuICBhc3luYyBkZWxVc2VyQnJvd3Nlcihnb29kc0lkKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmRlbFVzZXJCcm93c2VyKHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcclxuICAgICAgICBnb29kc0lkOiBnb29kc0lkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PeWVhuWTgeWPlua2iOaUtuiXj+aIkOWKnz09PT09PT09PVwiKVxyXG4gICAgICAvL3RpcC50b2FzdChcIuWPlua2iOaUtuiXj+aIkOWKn1wiKTtcclxuICAgICAgbGV0IHJldExpc3QgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0W2ldLmdvb2RzSWQgPT0gZ29vZHNJZCkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldExpc3QucHVzaCh0aGlzLmxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpc3QgPSByZXRMaXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXHJcbiAgICB9XHJcbiAgICB0aGF0LiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZURlbEl0ZW0oaXRlbURhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coaXRlbURhdGEpXHJcbiAgICAgIGxldCBvYmpUeXBlID0gaXRlbURhdGEudHlwZTtcclxuICAgICAgaWYgKG9ialR5cGU9PTEpIHtcclxuICAgICAgICB0aGlzLmRlbFVzZXJCcm93c2VyKGl0ZW1EYXRhLmdvb2RzSWQpO1xyXG4gICAgICB9IGVsc2UgaWYgKG9ialR5cGU9PTIpIHtcclxuICAgICAgICB0aGlzLmdvb2RzVW5GYXZvcml0ZShpdGVtRGF0YS5nb29kc0lkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZnJlc2hMaXN0KHZhbCl7XHJcbiAgICAgICBpZiAodmFsPT11bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgIGNvbnNvbGUubG9nKFwidmFsLi4uLi5cIix2YWwpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHZhbDtcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19