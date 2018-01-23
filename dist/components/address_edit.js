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

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

var _wepyAreaPicker = require('./common/wepy-area-picker.js');

var _wepyAreaPicker2 = _interopRequireDefault(_wepyAreaPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressEdit = function (_wepy$component) {
  _inherits(AddressEdit, _wepy$component);

  function AddressEdit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressEdit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressEdit.__proto__ || Object.getPrototypeOf(AddressEdit)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      isDefult: false,
      isCheck: false,
      editInfo: {
        default: {},
        type: Object
      },
      id: '',
      province: '',
      city: '',
      area: '',
      provinceCode: '',
      cityCode: '',
      areaCode: ''
    }, _this.$repeat = {}, _this.$props = { "areaPicker": { "xmlns:v-on": "" } }, _this.$events = { "areaPicker": { "v-on:areaArray": "areaPickerArray" } }, _this.components = {
      areaPicker: _wepyAreaPicker2.default
    }, _this.methods = {
      changeCheckBoxState: function changeCheckBoxState() {
        this.isCheck = !this.isCheck;
        this.isDefult = !this.isDefult;
      },
      formSubmit: function formSubmit(e) {

        var receiverName = e.detail.value.receiverName;
        var mobile = e.detail.value.mobile;
        var addressDetail = e.detail.value.addressDetail;

        if (receiverName == "") {
          _tip2.default.alert("输入收件人姓名");
          return false;
        }
        if (mobile == "") {
          _tip2.default.alert("输入联系电话");
          return false;
        }
        if (addressDetail == "") {
          _tip2.default.alert("输入详细地址");
          return false;
        }
        this.editAddress(e.detail.value);
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      refresh: function refresh(val) {
        console.log(val);
        if (val == undefined) return;
        console.log("val.....", val);
        this.editInfo = val;
        console.log(this.editInfo);
        this.id = this.editInfo.id;
        if (this.editInfo.isDef == 1) {
          this.isDefult = true;
        }
        console.log("==========ee=========");
        console.log(this.isDefult);
        this.province = { code: this.editInfo.provinceCode, name: this.editInfo.provinceName };
        this.city = { code: this.editInfo.areaCode, name: this.editInfo.areaName };
        this.area = { code: this.editInfo.cityCode, name: this.editInfo.cityName };

        this.$apply();
      },
      openAddressPicker: function openAddressPicker() {
        this.$invoke('areaPicker', 'openAddressPicker');
      },
      areaPickerArray: function areaPickerArray(province, city, area) {
        this.province = province;
        this.city = city;
        this.area = area;

        this.provinceCode = province.code;
        this.cityCode = city.code;
        this.areaCode = area.code;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressEdit, [{
    key: 'editAddress',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(address) {
        var that, userSpecialInfo, isDefult, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("保存");
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                isDefult = 0;

                if (this.isDefult) {
                  isDefult = 1;
                }
                openId = userSpecialInfo.openid;

                console.log("address:");
                console.log(this.id);
                _context.next = 10;
                return _api2.default.saveAddress({
                  query: {
                    openId: openId,
                    id: this.id,
                    address: address,
                    isDef: isDefult,
                    province: that.provinceCode,
                    city: that.cityCode,
                    area: that.areaCode
                  }
                });

              case 10:
                json = _context.sent;

                if (json.data.code == 0) {
                  //0 列表 1新增 2编辑 (显示列表)
                  this.$emit('currentPage', 0);
                  this.$emit('refreshAddList', 'hehe');
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function editAddress(_x) {
        return _ref2.apply(this, arguments);
      }

      return editAddress;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log("========editInfo==========");

      this.province = { code: '120000', name: '天津市' };
      this.city = { code: '120100', name: '天津市' };
      this.area = { code: '120101', name: '和平区' };
      this.$invoke('areaPicker', 'setAddressPickerValue', this.province, this.city, this.area);
    }
  }]);

  return AddressEdit;
}(_wepy2.default.component);

exports.default = AddressEdit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3NfZWRpdC5qcyJdLCJuYW1lcyI6WyJBZGRyZXNzRWRpdCIsImRhdGEiLCJpc0RlZnVsdCIsImlzQ2hlY2siLCJlZGl0SW5mbyIsImRlZmF1bHQiLCJ0eXBlIiwiT2JqZWN0IiwiaWQiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwicHJvdmluY2VDb2RlIiwiY2l0eUNvZGUiLCJhcmVhQ29kZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFyZWFQaWNrZXIiLCJtZXRob2RzIiwiY2hhbmdlQ2hlY2tCb3hTdGF0ZSIsImZvcm1TdWJtaXQiLCJlIiwicmVjZWl2ZXJOYW1lIiwiZGV0YWlsIiwidmFsdWUiLCJtb2JpbGUiLCJhZGRyZXNzRGV0YWlsIiwiYWxlcnQiLCJlZGl0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJyZWZyZXNoIiwidmFsIiwidW5kZWZpbmVkIiwiaXNEZWYiLCJjb2RlIiwibmFtZSIsInByb3ZpbmNlTmFtZSIsImFyZWFOYW1lIiwiY2l0eU5hbWUiLCIkYXBwbHkiLCJvcGVuQWRkcmVzc1BpY2tlciIsIiRpbnZva2UiLCJhcmVhUGlja2VyQXJyYXkiLCJhZGRyZXNzIiwidGhhdCIsInVzZXJTcGVjaWFsSW5mbyIsImdldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwib3BlbmlkIiwic2F2ZUFkZHJlc3MiLCJxdWVyeSIsImpzb24iLCIkZW1pdCIsImVycm9yIiwibXNnIiwic2hvd0xvYWRpbmciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BRW5CQyxJLEdBQU87QUFDTEMsZ0JBQVUsS0FETDtBQUVMQyxlQUFTLEtBRko7QUFHTEMsZ0JBQVU7QUFDUkMsaUJBQVMsRUFERDtBQUVSQyxjQUFNQztBQUZFLE9BSEw7QUFPTEMsVUFBSSxFQVBDO0FBUUxD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QUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQThETztBQUNQM0IsY0FBUUMsR0FBUixDQUFZLDRCQUFaOztBQUVBLFdBQUt2QixRQUFMLEdBQWdCLEVBQUU0QixNQUFNLFFBQVIsRUFBa0JDLE1BQU0sS0FBeEIsRUFBaEI7QUFDQSxXQUFLNUIsSUFBTCxHQUFZLEVBQUUyQixNQUFNLFFBQVIsRUFBa0JDLE1BQU0sS0FBeEIsRUFBWjtBQUNBLFdBQUszQixJQUFMLEdBQVksRUFBRTBCLE1BQU0sUUFBUixFQUFrQkMsTUFBTSxLQUF4QixFQUFaO0FBQ0EsV0FBS00sT0FBTCxDQUFhLFlBQWIsRUFBMkIsdUJBQTNCLEVBQW9ELEtBQUtuQyxRQUF6RCxFQUFtRSxLQUFLQyxJQUF4RSxFQUE4RSxLQUFLQyxJQUFuRjtBQUdEOzs7O0VBN0hzQyxlQUFLZ0QsUzs7a0JBQXpCM0QsVyIsImZpbGUiOiJhZGRyZXNzX2VkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaS9hcGlcIlxyXG5pbXBvcnQge1xyXG4gIFVTRVJfU1BFQ0lDQUxfSU5GT1xyXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50JztcclxuaW1wb3J0IEFyZWFQaWNrZXIgZnJvbSBcIi4vY29tbW9uL3dlcHktYXJlYS1waWNrZXJcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzRWRpdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGlzRGVmdWx0OiBmYWxzZSxcclxuICAgIGlzQ2hlY2s6IGZhbHNlLFxyXG4gICAgZWRpdEluZm86IHtcclxuICAgICAgZGVmYXVsdDoge30sXHJcbiAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgfSxcclxuICAgIGlkOiAnJyxcclxuICAgIHByb3ZpbmNlOiAnJyxcclxuICAgIGNpdHk6ICcnLFxyXG4gICAgYXJlYTogJycsXHJcbiAgICBwcm92aW5jZUNvZGU6ICcnLFxyXG4gICAgY2l0eUNvZGU6ICcnLFxyXG4gICAgYXJlYUNvZGU6ICcnXHJcbiAgfVxyXG5cclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYXJlYVBpY2tlclwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJhcmVhUGlja2VyXCI6e1widi1vbjphcmVhQXJyYXlcIjpcImFyZWFQaWNrZXJBcnJheVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgYXJlYVBpY2tlcjogQXJlYVBpY2tlclxyXG4gIH1cclxuICBhc3luYyBlZGl0QWRkcmVzcyhhZGRyZXNzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuS/neWtmFwiKTtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XHJcbiAgICBsZXQgaXNEZWZ1bHQgPSAwO1xyXG4gICAgaWYgKHRoaXMuaXNEZWZ1bHQpIHtcclxuICAgICAgaXNEZWZ1bHQgPSAxO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wZW5JZCA9IHVzZXJTcGVjaWFsSW5mby5vcGVuaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZHJlc3M6XCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLnNhdmVBZGRyZXNzKHtcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgIGlzRGVmOiBpc0RlZnVsdCxcclxuICAgICAgICBwcm92aW5jZTp0aGF0LnByb3ZpbmNlQ29kZSxcclxuICAgICAgICBjaXR5OnRoYXQuY2l0eUNvZGUsXHJcbiAgICAgICAgYXJlYTp0aGF0LmFyZWFDb2RlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcclxuICAgICAgLy8wIOWIl+ihqCAx5paw5aKeIDLnvJbovpEgKOaYvuekuuWIl+ihqClcclxuICAgICAgdGhpcy4kZW1pdCgnY3VycmVudFBhZ2UnLCAwKTtcclxuICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaEFkZExpc3QnLCAnaGVoZScpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKVxyXG4gICAgfVxyXG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hhbmdlQ2hlY2tCb3hTdGF0ZSgpIHtcclxuICAgICAgdGhpcy5pc0NoZWNrID0gIXRoaXMuaXNDaGVjaztcclxuICAgICAgdGhpcy5pc0RlZnVsdCA9ICF0aGlzLmlzRGVmdWx0O1xyXG4gICAgfSxcclxuICAgIGZvcm1TdWJtaXQoZSkge1xyXG5cclxuICAgICAgbGV0IHJlY2VpdmVyTmFtZSA9IGUuZGV0YWlsLnZhbHVlLnJlY2VpdmVyTmFtZTtcclxuICAgICAgbGV0IG1vYmlsZSA9IGUuZGV0YWlsLnZhbHVlLm1vYmlsZTtcclxuICAgICAgbGV0IGFkZHJlc3NEZXRhaWwgPSBlLmRldGFpbC52YWx1ZS5hZGRyZXNzRGV0YWlsO1xyXG5cclxuICAgICAgaWYgKHJlY2VpdmVyTmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgdGlwLmFsZXJ0KFwi6L6T5YWl5pS25Lu25Lq65aeT5ZCNXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobW9iaWxlID09IFwiXCIpIHtcclxuICAgICAgICB0aXAuYWxlcnQoXCLovpPlhaXogZTns7vnlLXor51cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBpZiAoYWRkcmVzc0RldGFpbCA9PSBcIlwiKSB7XHJcbiAgICAgICAgdGlwLmFsZXJ0KFwi6L6T5YWl6K+m57uG5Zyw5Z2AXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVkaXRBZGRyZXNzKGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcclxuICAgIH0sXHJcbiAgICByZWZyZXNoKHZhbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICBpZiAodmFsID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInZhbC4uLi4uXCIsIHZhbCk7XHJcbiAgICAgIHRoaXMuZWRpdEluZm8gPSB2YWw7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWRpdEluZm8pO1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5lZGl0SW5mby5pZDtcclxuICAgICAgaWYodGhpcy5lZGl0SW5mby5pc0RlZj09MSl7XHJcbiAgICAgICAgdGhpcy5pc0RlZnVsdD10cnVlXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09ZWU9PT09PT09PT1cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNEZWZ1bHQpO1xyXG4gICAgICB0aGlzLnByb3ZpbmNlID0geyBjb2RlOiB0aGlzLmVkaXRJbmZvLnByb3ZpbmNlQ29kZSwgbmFtZTogdGhpcy5lZGl0SW5mby5wcm92aW5jZU5hbWUgfTtcclxuICAgICAgdGhpcy5jaXR5ID0geyBjb2RlOiB0aGlzLmVkaXRJbmZvLmFyZWFDb2RlLCBuYW1lOnRoaXMuZWRpdEluZm8uYXJlYU5hbWUgfTtcclxuICAgICAgdGhpcy5hcmVhID0geyBjb2RlOiB0aGlzLmVkaXRJbmZvLmNpdHlDb2RlLCBuYW1lOiB0aGlzLmVkaXRJbmZvLmNpdHlOYW1lIH07XHJcblxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfSxcclxuICAgIG9wZW5BZGRyZXNzUGlja2VyKCkge1xyXG4gICAgICB0aGlzLiRpbnZva2UoJ2FyZWFQaWNrZXInLCAnb3BlbkFkZHJlc3NQaWNrZXInKTtcclxuICAgIH0sXHJcbiAgICBhcmVhUGlja2VyQXJyYXkocHJvdmluY2UsIGNpdHksIGFyZWEpIHtcclxuICAgICAgdGhpcy5wcm92aW5jZSA9IHByb3ZpbmNlO1xyXG4gICAgICB0aGlzLmNpdHkgPSBjaXR5O1xyXG4gICAgICB0aGlzLmFyZWEgPSBhcmVhO1xyXG5cclxuICAgICAgdGhpcy5wcm92aW5jZUNvZGUgPSBwcm92aW5jZS5jb2RlO1xyXG4gICAgICB0aGlzLmNpdHlDb2RlID0gY2l0eS5jb2RlO1xyXG4gICAgICB0aGlzLmFyZWFDb2RlID0gYXJlYS5jb2RlO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PWVkaXRJbmZvPT09PT09PT09PVwiKTtcclxuXHJcbiAgICB0aGlzLnByb3ZpbmNlID0geyBjb2RlOiAnMTIwMDAwJywgbmFtZTogJ+Wkqea0peW4gicgfTtcclxuICAgIHRoaXMuY2l0eSA9IHsgY29kZTogJzEyMDEwMCcsIG5hbWU6ICflpKnmtKXluIInIH07XHJcbiAgICB0aGlzLmFyZWEgPSB7IGNvZGU6ICcxMjAxMDEnLCBuYW1lOiAn5ZKM5bmz5Yy6JyB9O1xyXG4gICAgdGhpcy4kaW52b2tlKCdhcmVhUGlja2VyJywgJ3NldEFkZHJlc3NQaWNrZXJWYWx1ZScsIHRoaXMucHJvdmluY2UsIHRoaXMuY2l0eSwgdGhpcy5hcmVhKTtcclxuXHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19