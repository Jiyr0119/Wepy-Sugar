'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepySwipeDelete = require('./common/wepy-swipe-delete.js');

var _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete);

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

var AddressList = function (_wepy$component) {
  _inherits(AddressList, _wepy$component);

  function AddressList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressList.__proto__ || Object.getPrototypeOf(AddressList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      addressList: {
        default: [{
          style: 0
        }, {
          style: 0
        }],
        type: Object
      }
    }, _this.$repeat = { "addressList": { "com": "swipeDelete", "props": "swipeData" } }, _this.$props = { "swipeDelete": { "xmlns:v-bind": { "value": "", "for": "addressList", "item": "item", "index": "index", "key": "index" }, "v-bind:swipeData.once": { "value": "item", "type": "item", "for": "addressList", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "addressList", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "swipeDelete": { "v-on:delItem": "handleDelItem" } }, _this.components = {
      swipeDelete: _wepySwipeDelete2.default
    }, _this.data = {
      receiverInfo: {},
      type: ""
    }, _this.methods = {
      add: function add() {
        //0 列表 1新增 2编辑
        this.$emit('currentPage', 1);
      },
      edit: function edit(e) {
        var id = e.currentTarget.dataset.id;
        //0 列表 1新增 2编辑
        this.$emit('currentPage', 2, id);
      },

      //左滑删除
      handleDelItem: function handleDelItem(itemData) {
        this.delUserAddress(itemData.id);
        console.log("左滑删除");
        console.log(itemData.id);
      },
      refreshList: function refreshList(val) {
        if (val == undefined) return;
        console.log("val.....", val);
        this.addressList = val;
        this.$apply();
      },
      setOrgType: function setOrgType(type) {
        this.type = type;
      },
      tapSelAddress: function tapSelAddress(e) {
        if (this.type != "order") {
          return;
        }
        var id = e.currentTarget.dataset.id;
        console.log("id==" + id);
        _wepy2.default.setStorageSync(_constant.ADDRESS_ID, id);
        _wepy2.default.redirectTo({
          url: "/pages/comfire_order?from=selAdd"
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressList, [{
    key: 'delUserAddress',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var that, userSpecialInfo, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                _context.next = 4;
                return _api2.default.delUserAddress({
                  query: {
                    id: id,
                    type: 2
                  }
                });

              case 4:
                json = _context.sent;


                if (json.data.code == 0) {
                  console.log("删除成功");
                  this.$emit('currentPage', 0);
                  this.$emit('refreshAddList', 'hehe');
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function delUserAddress(_x) {
        return _ref2.apply(this, arguments);
      }

      return delUserAddress;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return AddressList;
}(_wepy2.default.component);

exports.default = AddressList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NfbGlzdC5qcyJdLCJuYW1lcyI6WyJBZGRyZXNzTGlzdCIsInByb3BzIiwiYWRkcmVzc0xpc3QiLCJkZWZhdWx0Iiwic3R5bGUiLCJ0eXBlIiwiT2JqZWN0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3dpcGVEZWxldGUiLCJkYXRhIiwicmVjZWl2ZXJJbmZvIiwibWV0aG9kcyIsImFkZCIsIiRlbWl0IiwiZWRpdCIsImUiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaGFuZGxlRGVsSXRlbSIsIml0ZW1EYXRhIiwiZGVsVXNlckFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaExpc3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCIkYXBwbHkiLCJzZXRPcmdUeXBlIiwidGFwU2VsQWRkcmVzcyIsInNldFN0b3JhZ2VTeW5jIiwicmVkaXJlY3RUbyIsInVybCIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJnZXRTdG9yYWdlU3luYyIsInF1ZXJ5IiwianNvbiIsImNvZGUiLCJlcnJvciIsIm1zZyIsInNob3dMb2FkaW5nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRO0FBQ05DLG1CQUFhO0FBQ1hDLGlCQUFTLENBQUM7QUFDUkMsaUJBQU87QUFEQyxTQUFELEVBRU47QUFDREEsaUJBQU87QUFETixTQUZNLENBREU7QUFNWEMsY0FBTUM7QUFOSztBQURQLEssUUFVVEMsTyxHQUFVLEVBQUMsZUFBYyxFQUFDLE9BQU0sYUFBUCxFQUFxQixTQUFRLFdBQTdCLEVBQWYsRSxRQUNYQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGFBQWxCLEVBQWdDLFFBQU8sTUFBdkMsRUFBOEMs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clxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFN3aXBlRGVsZXRlIGZyb20gJy4vY29tbW9uL3dlcHktc3dpcGUtZGVsZXRlJ1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpL2FwaVwiO1xyXG5pbXBvcnQge1xyXG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcclxuICBBRERSRVNTX0lEXHJcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGFkZHJlc3NMaXN0OiB7XHJcbiAgICAgIGRlZmF1bHQ6IFt7XHJcbiAgICAgICAgc3R5bGU6IDBcclxuICAgICAgfSwge1xyXG4gICAgICAgIHN0eWxlOiAwXHJcbiAgICAgIH1dLFxyXG4gICAgICB0eXBlOiBPYmplY3RcclxuICAgIH1cclxuICB9XHJcbiAkcmVwZWF0ID0ge1wiYWRkcmVzc0xpc3RcIjp7XCJjb21cIjpcInN3aXBlRGVsZXRlXCIsXCJwcm9wc1wiOlwic3dpcGVEYXRhXCJ9fTtcclxuJHByb3BzID0ge1wic3dpcGVEZWxldGVcIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImFkZHJlc3NMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c3dpcGVEYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJhZGRyZXNzTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwieG1sbnM6di1vblwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYWRkcmVzc0xpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wic3dpcGVEZWxldGVcIjp7XCJ2LW9uOmRlbEl0ZW1cIjpcImhhbmRsZURlbEl0ZW1cIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHN3aXBlRGVsZXRlOiBTd2lwZURlbGV0ZVxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHJlY2VpdmVySW5mbzp7fSxcclxuICAgIHR5cGU6IFwiXCJcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbFVzZXJBZGRyZXNzKGlkKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5kZWxVc2VyQWRkcmVzcyh7XHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIHR5cGU6MlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuWIoOmZpOaIkOWKn1wiKTtcclxuICAgICAgdGhpcy4kZW1pdCgnY3VycmVudFBhZ2UnLCAwKTtcclxuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaEFkZExpc3QnLCAnaGVoZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXHJcbiAgICB9XHJcbiAgICB0aGF0LnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBhZGQoKSB7XHJcbiAgICAgIC8vMCDliJfooaggMeaWsOWiniAy57yW6L6RXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2N1cnJlbnRQYWdlJywgMSk7XHJcbiAgICB9LFxyXG4gICAgZWRpdChlKSB7XHJcbiAgICAgIHZhciBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAvLzAg5YiX6KGoIDHmlrDlop4gMue8lui+kVxyXG4gICAgICB0aGlzLiRlbWl0KCdjdXJyZW50UGFnZScsIDIsaWQpO1xyXG4gICAgfSxcclxuICAgIC8v5bem5ruR5Yig6ZmkXHJcbiAgICBoYW5kbGVEZWxJdGVtKGl0ZW1EYXRhKSB7XHJcbiAgICAgIHRoaXMuZGVsVXNlckFkZHJlc3MoaXRlbURhdGEuaWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuW3pua7keWIoOmZpFwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtRGF0YS5pZClcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlZnJlc2hMaXN0KHZhbCl7XHJcbiAgICAgIGlmICh2YWw9PXVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInZhbC4uLi4uXCIsdmFsKTtcclxuICAgICAgdGhpcy5hZGRyZXNzTGlzdCA9IHZhbDtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0T3JnVHlwZSAodHlwZSkge1xyXG4gICAgICB0aGlzLnR5cGU9dHlwZTtcclxuICAgIH0sXHJcblxyXG4gICAgdGFwU2VsQWRkcmVzcyhlKSB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGUhPVwib3JkZXJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgY29uc29sZS5sb2coXCJpZD09XCIraWQpO1xyXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKEFERFJFU1NfSUQsaWQpO1xyXG4gICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIHVybDogXCIvcGFnZXMvY29tZmlyZV9vcmRlcj9mcm9tPXNlbEFkZFwiXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19