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

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Classify = function (_wepy$page) {
  _inherits(Classify, _wepy$page);

  function Classify() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Classify);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Classify.__proto__ || Object.getPrototypeOf(Classify)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '分类'
    }, _this.components = {}, _this.data = {
      scrollTop: 100,
      windowHeight: 0,
      list: {},
      //一级分类数据
      rootcateList: {},
      //二级三级分类数据
      childcateList: {}
    }, _this.computed = {}, _this.methods = {
      changeCate: function changeCate(e) {
        console.log("changecate....");
        var code = e.currentTarget.dataset.code;
        this.getChildCate(code);
        _wepy2.default.setStorageSync(_constant.SEL_CLASS_CODE, code);
        //设置一级分类的选中状态
        for (var i = 0; i < this.rootcateList.length; i++) {
          var rootCate = this.rootcateList[i];
          rootCate.active = false;
          if (rootCate.code == code) {
            rootCate.active = true;
          }
        }
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.detail.name,
          path: '/pages/classify',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Classify, [{
    key: 'getChildCate',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rootCateCode) {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.childGoodsCatetoryList({
                  query: {
                    rootCategoryCode: rootCateCode
                  }
                });

              case 2:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.childcateList = json.data.list;
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getChildCate(_x) {
        return _ref2.apply(this, arguments);
      }

      return getChildCate;
    }()
  }, {
    key: 'getRootCateTopLevel',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var json, selCode, selRottCateCode, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.rootCtegoryList({
                  query: {}
                });

              case 2:
                json = _context2.sent;

                if (json.data.code == 0) {
                  this.rootcateList = json.data.list;
                  if (this.rootcateList.length > 0) {
                    selCode = wx.getStorageSync(_constant.SEL_CLASS_CODE);
                    selRottCateCode = this.rootcateList[0].code;

                    if (selCode.length == 0) {
                      this.rootcateList[0].active = true;
                    } else {
                      for (i = 0; i < this.rootcateList.length; i++) {
                        if (selCode == this.rootcateList[i].code) {
                          selRottCateCode = this.rootcateList[i].code;
                          this.rootcateList[i].active = true;
                        }
                      }
                    }

                    this.getChildCate(selRottCateCode);
                  }
                } else {
                  _tip2.default.error(json.data.msg);
                }
                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getRootCateTopLevel() {
        return _ref3.apply(this, arguments);
      }

      return getRootCateTopLevel;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      //this.list = aa.data;
      var systemInfo = wx.getStorageSync(_constant.SYSTEM_INFO);
      this.windowHeight = systemInfo.windowHeight;
      this.$apply();
      console.log(aa);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getRootCateTopLevel();
    }
  }]);

  return Classify;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Classify , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkNsYXNzaWZ5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2Nyb2xsVG9wIiwid2luZG93SGVpZ2h0IiwibGlzdCIsInJvb3RjYXRlTGlzdCIsImNoaWxkY2F0ZUxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjaGFuZ2VDYXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJnZXRDaGlsZENhdGUiLCJzZXRTdG9yYWdlU3luYyIsImkiLCJsZW5ndGgiLCJyb290Q2F0ZSIsImFjdGl2ZSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwiZGV0YWlsIiwibmFtZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsImV2ZW50cyIsInJvb3RDYXRlQ29kZSIsImNoaWxkR29vZHNDYXRldG9yeUxpc3QiLCJxdWVyeSIsInJvb3RDYXRlZ29yeUNvZGUiLCJqc29uIiwiZXJyb3IiLCJtc2ciLCIkYXBwbHkiLCJyb290Q3RlZ29yeUxpc3QiLCJzZWxDb2RlIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInNlbFJvdHRDYXRlQ29kZSIsInRoYXQiLCJzeXN0ZW1JbmZvIiwiYWEiLCJnZXRSb290Q2F0ZVRvcExldmVsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUtBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEdBRE47QUFFTEMsb0JBQWMsQ0FGVDtBQUdMQyxZQUFNLEVBSEQ7QUFJTDtBQUNBQyxvQkFBYyxFQUxUO0FBTUw7QUFDQUMscUJBQWU7QUFQVixLLFFBaUVQQyxR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O0FBQ0Q7QUFDRixpQkFsQkQsTUFrQk87QUFDTCxnQ0FBSVAsS0FBSixDQUFVRCxLQUFLcEMsSUFBTCxDQUFVc0MsR0FBcEI7QUFDRDtBQUNELHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR087QUFDUCxVQUFJTSxPQUFPLElBQVg7QUFDQTtBQUNBLFVBQUlDLGFBQWFKLEdBQUdDLGNBQUgsdUJBQWpCO0FBQ0EsV0FBS3pDLFlBQUwsR0FBb0I0QyxXQUFXNUMsWUFBL0I7QUFDQSxXQUFLcUMsTUFBTDtBQUNBN0IsY0FBUUMsR0FBUixDQUFZb0MsRUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLQyxtQkFBTDtBQUNEOzs7O0VBdkVtQyxlQUFLQyxJOztrQkFBdEJyRCxRIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xyXG5pbXBvcnQge1xyXG4gIFNZU1RFTV9JTkZPLFxyXG4gIFNFTF9DTEFTU19DT0RFXHJcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnQnO1xyXG5cclxuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2lmeSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIhuexuycsXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHNjcm9sbFRvcDogMTAwLFxyXG4gICAgd2luZG93SGVpZ2h0OiAwLFxyXG4gICAgbGlzdDoge30sXHJcbiAgICAvL+S4gOe6p+WIhuexu+aVsOaNrlxyXG4gICAgcm9vdGNhdGVMaXN0OiB7fSxcclxuICAgIC8v5LqM57qn5LiJ57qn5YiG57G75pWw5o2uXHJcbiAgICBjaGlsZGNhdGVMaXN0OiB7fVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q2hpbGRDYXRlKHJvb3RDYXRlQ29kZSkge1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5jaGlsZEdvb2RzQ2F0ZXRvcnlMaXN0KHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICByb290Q2F0ZWdvcnlDb2RlOiByb290Q2F0ZUNvZGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoanNvbi5kYXRhLmNvZGUgPT0gMCkge1xyXG4gICAgICB0aGlzLmNoaWxkY2F0ZUxpc3QgPSBqc29uLmRhdGEubGlzdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKTtcclxuICAgIH1cclxuICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRSb290Q2F0ZVRvcExldmVsKCkge1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGFwaS5yb290Q3RlZ29yeUxpc3Qoe1xyXG4gICAgICBxdWVyeToge31cclxuICAgIH0pO1xyXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgdGhpcy5yb290Y2F0ZUxpc3QgPSBqc29uLmRhdGEubGlzdDtcclxuICAgICAgaWYgKHRoaXMucm9vdGNhdGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgc2VsQ29kZSA9IHd4LmdldFN0b3JhZ2VTeW5jKFNFTF9DTEFTU19DT0RFKTtcclxuICAgICAgICB2YXIgc2VsUm90dENhdGVDb2RlID0gdGhpcy5yb290Y2F0ZUxpc3RbMF0uY29kZTtcclxuICAgICAgICBpZiAoc2VsQ29kZS5sZW5ndGg9PTApIHtcclxuICAgICAgICAgIHRoaXMucm9vdGNhdGVMaXN0WzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb290Y2F0ZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNlbENvZGUgPT0gdGhpcy5yb290Y2F0ZUxpc3RbaV0uY29kZSkge1xyXG4gICAgICAgICAgICAgIHNlbFJvdHRDYXRlQ29kZSA9IHRoaXMucm9vdGNhdGVMaXN0W2ldLmNvZGU7XHJcbiAgICAgICAgICAgICAgdGhpcy5yb290Y2F0ZUxpc3RbaV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRDaGlsZENhdGUoc2VsUm90dENhdGVDb2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpO1xyXG4gICAgfVxyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIC8vdGhpcy5saXN0ID0gYWEuZGF0YTtcclxuICAgIGxldCBzeXN0ZW1JbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoU1lTVEVNX0lORk8pO1xyXG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSBzeXN0ZW1JbmZvLndpbmRvd0hlaWdodDtcclxuICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICBjb25zb2xlLmxvZyhhYSlcclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuZ2V0Um9vdENhdGVUb3BMZXZlbCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcblxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hhbmdlQ2F0ZShlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlY2F0ZS4uLi5cIik7XHJcbiAgICAgIGxldCBjb2RlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29kZTtcclxuICAgICAgdGhpcy5nZXRDaGlsZENhdGUoY29kZSk7XHJcbiAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoU0VMX0NMQVNTX0NPREUsIGNvZGUpO1xyXG4gICAgICAvL+iuvue9ruS4gOe6p+WIhuexu+eahOmAieS4reeKtuaAgVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm9vdGNhdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHJvb3RDYXRlID0gdGhpcy5yb290Y2F0ZUxpc3RbaV07XHJcbiAgICAgICAgcm9vdENhdGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJvb3RDYXRlLmNvZGUgPT0gY29kZSkge1xyXG4gICAgICAgICAgcm9vdENhdGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiB0aGlzLmRldGFpbC5uYW1lLFxyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvY2xhc3NpZnknLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19