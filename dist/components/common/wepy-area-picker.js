'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _regions = require('./../../utils/regions.js');

var _regions2 = _interopRequireDefault(_regions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaPicker = function (_wepy$component) {
  _inherits(AreaPicker, _wepy$component);

  function AreaPicker() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, AreaPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = AreaPicker.__proto__ || Object.getPrototypeOf(AreaPicker)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      provinces: [], //获取到的所有的省
      cities: [], //选择的该省的所有市
      areas: [], //选择的该市的所有区县
      defaultValue: [0, 0, 0],
      selectedRegion: [0, 0, 0],
      animationData: {},
      show: false
    }, _this2.methods = {
      //取消按钮
      cancelPicker: function cancelPicker() {
        //这里也是动画，然其高度变为0
        this.hidePicker();
      },

      //确认按钮
      onAddressPick: function onAddressPick() {
        //一样是动画，级联选择页消失，效果和取消一样
        this.hidePicker();

        var _selectedRegion = _slicedToArray(this.selectedRegion, 3),
            provinceIndex = _selectedRegion[0],
            cityIndex = _selectedRegion[1],
            areaIndex = _selectedRegion[2];

        var provinces = this.provinces,
            cities = this.cities,
            areas = this.areas;

        this.province = provinces[provinceIndex];
        this.city = cities[cityIndex];
        this.area = areas[areaIndex] || {};
        if (!this.area) {
          this.area.name = "";
          this.code.code = "";
        }
        this.$emit("areaArray", this.province, this.city, this.area);
        this.$apply();
      },

      //滚动选择的时候触发事件
      bindChange: function bindChange(e) {
        //这里是获取picker-view内的picker-view-column 当前选择的是第几项
        var _this = this;
        var val = e.detail.value;
        this.cities = _regions2.default[val[0]].cities;
        this.areas = _regions2.default[val[0]].cities[val[1]].areas;
        //省变化，市区分别选中第一个
        if (this.selectedRegion[0] != val[0]) {
          this.selectedRegion = [val[0], 0, 0];
          //市变化，区选中第一个
        } else if (this.selectedRegion[1] != val[1]) {
          this.selectedRegion = [val[0], val[1], 0];
          //区变化，省市不变
        } else {
          this.selectedRegion = val;
        }
        //

        this.defaultValue = this.selectedRegion;

        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(AreaPicker, [{
    key: 'setAddressPickerValue',
    value: function setAddressPickerValue(province, city, area) {
      this.province = province;
      this.city = city;
      this.area = area;
      this.$apply();
    }
  }, {
    key: 'showPicker',
    value: function showPicker() {
      var fadeAnim = _wepy2.default.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      });
      this.fadeAnim = fadeAnim;

      var showAnim = _wepy2.default.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      });
      this.showAnim = showAnim;

      fadeAnim.backgroundColor('#000').opacity(0.5).step();
      showAnim.bottom(0 + 'rpx').step();
      this.show = true;
      this.animationData = {
        fadeAnim: fadeAnim.export(),
        showAnim: showAnim.export()
      };

      this.$apply();
    }
  }, {
    key: 'hidePicker',
    value: function hidePicker() {
      this.fadeAnim.backgroundColor('#fff').opacity(0).step();
      this.showAnim.bottom(-600 + 'rpx').step();

      this.show = false;
      this.animationData = {
        fadeAnim: this.fadeAnim.export(),
        showAnim: this.showAnim.export()
      };

      this.$apply();
    }

    //点击事件，点击弹出选择页

  }, {
    key: 'openAddressPicker',
    value: function openAddressPicker() {
      this.initAddressPicker();
      this.showPicker();
    }
  }, {
    key: 'initAddressPicker',


    //这里是判断省市名称的显示
    value: function initAddressPicker(selected) {
      var that = this;

      var provinces = [];
      var cities = [];
      var areas = [];
      var defaultValue = selected || [0, 0, 0];

      var province = this.province,
          city = this.city,
          area = this.area;

      //遍历所有的省，将省的名字存到provinces这个数组中

      for (var i = 0; i < _regions2.default.length; i++) {
        provinces.push({ name: _regions2.default[i].name, code: _regions2.default[i].code });
      }

      //检查传入的省编码是否有，有的话，选中column第一个游标为province index
      provinces.some(function (item, index) {
        if (province && item.code == province.code) {
          defaultValue[0] = index;
          return true;
        }
      });

      var rCities = _regions2.default[defaultValue[0]].cities;

      if (rCities) {
        //这里判断这个省级里面有没有市（如数据中的香港、澳门等就没有写市）
        //填充cities数组
        for (var _i = 0; _i < rCities.length; _i++) {
          cities.push({ name: rCities[_i].name, code: rCities[_i].code });
        }
        //这里是判断这个选择的省里面，有没有相应的下标为cityCode的市，因为这里的下标是前一次选择后的下标，
        //比如之前选择的一个省有10个市，我刚好滑到了第十个市，现在又重新选择了省，但是这个省最多只有5个市，
        //但是这时候的cityCode为9，而这里的市根本没有那么多，所以会报错
        var hasCity = cities.some(function (item, index) {
          if (city && item.code == city.code) {
            defaultValue[1] = index;
            return true;
          }
        });

        console.log('执行了区级判断');

        var rAreas = rCities[defaultValue[1]].areas;

        if (rAreas) {
          //这里是判断选择的这个市在数据里面有没有区县
          for (var _i2 = 0; _i2 < rAreas.length; _i2++) {
            areas.push({
              name: rAreas[_i2].name,
              code: rAreas[_i2].code
            });
          }
          areas.some(function (item, index) {
            if (area && item.code == area.code) {
              defaultValue[2] = index;
              return true;
            }
          }); //这里是判断选择的这个市里有没有下标为areaCode的区县，道理同上面市的选择
        } else {
          //如果这个市里面没有区县，那么把这个市的名字就赋值给areas这个数组
          areas.push(cities[defaultValue[1]]);
        }
      } else {
        //如果该省级没有市，那么就把省的名字作为市和区的名字
        cities.push(provinces[defaultValue[0]]);
        areas.push(provinces[defaultValue[0]]);
      }

      //选择成功后把相应的数组赋值给相应的变量


      this.provinces = provinces;
      this.cities = cities;
      this.areas = areas;
      this.defaultValue = defaultValue;
      this.selectedRegion = defaultValue;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return AreaPicker;
}(_wepy2.default.component);

exports.default = AreaPicker;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktYXJlYS1waWNrZXIuanMiXSwibmFtZXMiOlsiQXJlYVBpY2tlciIsImRhdGEiLCJwcm92aW5jZXMiLCJjaXRpZXMiLCJhcmVhcyIsImRlZmF1bHRWYWx1ZSIsInNlbGVjdGVkUmVnaW9uIiwiYW5pbWF0aW9uRGF0YSIsInNob3ciLCJtZXRob2RzIiwiY2FuY2VsUGlja2VyIiwiaGlkZVBpY2tlciIsIm9uQWRkcmVzc1BpY2siLCJwcm92aW5jZUluZGV4IiwiY2l0eUluZGV4IiwiYXJlYUluZGV4IiwicHJvdmluY2UiLCJjaXR5IiwiYXJlYSIsIm5hbWUiLCJjb2RlIiwiJGVtaXQiLCIkYXBwbHkiLCJiaW5kQ2hhbmdlIiwiZSIsIl90aGlzIiwidmFsIiwiZGV0YWlsIiwidmFsdWUiLCJmYWRlQW5pbSIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJzaG93QW5pbSIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJzdGVwIiwiYm90dG9tIiwiZXhwb3J0IiwiaW5pdEFkZHJlc3NQaWNrZXIiLCJzaG93UGlja2VyIiwic2VsZWN0ZWQiLCJ0aGF0IiwiaSIsImxlbmd0aCIsInB1c2giLCJzb21lIiwiaXRlbSIsImluZGV4IiwickNpdGllcyIsImhhc0NpdHkiLCJjb25zb2xlIiwibG9nIiwickFyZWFzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7aU1BQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETixFQUNVO0FBQ2ZDLGNBQVEsRUFGSCxFQUVPO0FBQ1pDLGFBQU8sRUFIRixFQUdNO0FBQ1hDLG9CQUFjLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSlQ7QUFLTEMsc0JBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTFg7QUFNTEMscUJBQWUsRUFOVjtBQU9MQyxZQUFN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LElBQUlWLE1BQUksQ0FBYixFQUFnQkEsTUFBSVUsT0FBT1QsTUFBM0IsRUFBbUNELEtBQW5DLEVBQXdDO0FBQ3RDdkMsa0JBQU15QyxJQUFOLENBQVc7QUFDVDFCLG9CQUFNa0MsT0FBT1YsR0FBUCxFQUFVeEIsSUFEUDtBQUVUQyxvQkFBTWlDLE9BQU9WLEdBQVAsRUFBVXZCO0FBRlAsYUFBWDtBQUlEO0FBQ0RoQixnQkFBTTBDLElBQU4sQ0FBVyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDMUIsZ0JBQUk5QixRQUFRNkIsS0FBSzNCLElBQUwsSUFBYUYsS0FBS0UsSUFBOUIsRUFBb0M7QUFDbENmLDJCQUFhLENBQWIsSUFBa0IyQyxLQUFsQjtBQUNBLHFCQUFPLElBQVA7QUFDRDtBQUNGLFdBTEQsRUFQVSxDQVlOO0FBQ0wsU0FiRCxNQWFPO0FBQ0w7QUFDQTVDLGdCQUFNeUMsSUFBTixDQUFXMUMsT0FBT0UsYUFBYSxDQUFiLENBQVAsQ0FBWDtBQUNEO0FBQ0YsT0FyQ0QsTUFxQ087QUFDTDtBQUNBRixlQUFPMEMsSUFBUCxDQUFZM0MsVUFBVUcsYUFBYSxDQUFiLENBQVYsQ0FBWjtBQUNBRCxjQUFNeUMsSUFBTixDQUFXM0MsVUFBVUcsYUFBYSxDQUFiLENBQVYsQ0FBWDtBQUNEOztBQUdEOzs7QUFHQSxXQUFLSCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQkQsWUFBdEI7QUFDQSxXQUFLaUIsTUFBTDtBQUlEOzs7NkJBRVEsQ0FFUjs7OztFQTVNcUMsZUFBS2dDLFM7O2tCQUF4QnRELFU7QUE2TXBCIiwiZmlsZSI6IndlcHktYXJlYS1waWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHJlZ2lvbnMgZnJvbSAnLi4vLi4vdXRpbHMvcmVnaW9ucy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhUGlja2VyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBwcm92aW5jZXM6IFtdLCAvL+iOt+WPluWIsOeahOaJgOacieeahOecgVxyXG4gICAgY2l0aWVzOiBbXSwgLy/pgInmi6nnmoTor6XnnIHnmoTmiYDmnInluIJcclxuICAgIGFyZWFzOiBbXSwgLy/pgInmi6nnmoTor6XluILnmoTmiYDmnInljLrljr9cclxuICAgIGRlZmF1bHRWYWx1ZTogWzAsIDAsIDBdLFxyXG4gICAgc2VsZWN0ZWRSZWdpb246IFswLCAwLCAwXSxcclxuICAgIGFuaW1hdGlvbkRhdGE6IHt9LFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBzZXRBZGRyZXNzUGlja2VyVmFsdWUocHJvdmluY2UsIGNpdHksIGFyZWEpIHtcclxuICAgIHRoaXMucHJvdmluY2UgPSBwcm92aW5jZTtcclxuICAgIHRoaXMuY2l0eSA9IGNpdHk7XHJcbiAgICB0aGlzLmFyZWEgPSBhcmVhO1xyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIHNob3dQaWNrZXIoKSB7XHJcbiAgICBjb25zdCBmYWRlQW5pbSA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mYWRlQW5pbSA9IGZhZGVBbmltO1xyXG5cclxuICAgIGNvbnN0IHNob3dBbmltID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dBbmltID0gc2hvd0FuaW07XHJcblxyXG4gICAgZmFkZUFuaW0uYmFja2dyb3VuZENvbG9yKCcjMDAwJykub3BhY2l0eSgwLjUpLnN0ZXAoKTtcclxuICAgIHNob3dBbmltLmJvdHRvbSgwICsgJ3JweCcpLnN0ZXAoKTtcclxuICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB7XHJcbiAgICAgIGZhZGVBbmltOiBmYWRlQW5pbS5leHBvcnQoKSxcclxuICAgICAgc2hvd0FuaW06IHNob3dBbmltLmV4cG9ydCgpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVBpY2tlcigpIHtcclxuICAgIHRoaXMuZmFkZUFuaW0uYmFja2dyb3VuZENvbG9yKCcjZmZmJykub3BhY2l0eSgwKS5zdGVwKCk7XHJcbiAgICB0aGlzLnNob3dBbmltLmJvdHRvbSgtNjAwICsgJ3JweCcpLnN0ZXAoKTtcclxuXHJcblxyXG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSB7XHJcbiAgICAgIGZhZGVBbmltOiB0aGlzLmZhZGVBbmltLmV4cG9ydCgpLFxyXG4gICAgICBzaG93QW5pbTogdGhpcy5zaG93QW5pbS5leHBvcnQoKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL+eCueWHu+S6i+S7tu+8jOeCueWHu+W8ueWHuumAieaLqemhtVxyXG4gIG9wZW5BZGRyZXNzUGlja2VyKCkge1xyXG4gICAgdGhpcy5pbml0QWRkcmVzc1BpY2tlcigpO1xyXG4gICAgdGhpcy5zaG93UGlja2VyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8v5Y+W5raI5oyJ6ZKuXHJcbiAgICBjYW5jZWxQaWNrZXIoKSB7XHJcbiAgICAgIC8v6L+Z6YeM5Lmf5piv5Yqo55S777yM54S25YW26auY5bqm5Y+Y5Li6MFxyXG4gICAgICB0aGlzLmhpZGVQaWNrZXIoKTtcclxuICAgIH0sXHJcbiAgICAvL+ehruiupOaMiemSrlxyXG4gICAgb25BZGRyZXNzUGljaygpIHtcclxuICAgICAgLy/kuIDmoLfmmK/liqjnlLvvvIznuqfogZTpgInmi6npobXmtojlpLHvvIzmlYjmnpzlkozlj5bmtojkuIDmoLdcclxuICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XHJcbiAgICAgIGNvbnN0IFtwcm92aW5jZUluZGV4LCBjaXR5SW5kZXgsIGFyZWFJbmRleF0gPSB0aGlzLnNlbGVjdGVkUmVnaW9uO1xyXG4gICAgICBjb25zdCB7IHByb3ZpbmNlcywgY2l0aWVzLCBhcmVhcyB9ID0gdGhpcztcclxuICAgICAgdGhpcy5wcm92aW5jZSA9IHByb3ZpbmNlc1twcm92aW5jZUluZGV4XTtcclxuICAgICAgdGhpcy5jaXR5ID0gY2l0aWVzW2NpdHlJbmRleF07XHJcbiAgICAgIHRoaXMuYXJlYSA9IGFyZWFzW2FyZWFJbmRleF0gfHwge307XHJcbiAgICAgIGlmICghdGhpcy5hcmVhKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29kZS5jb2RlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KFwiYXJlYUFycmF5XCIsIHRoaXMucHJvdmluY2UsIHRoaXMuY2l0eSwgdGhpcy5hcmVhKVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfSxcclxuICAgIC8v5rua5Yqo6YCJ5oup55qE5pe25YCZ6Kem5Y+R5LqL5Lu2XHJcbiAgICBiaW5kQ2hhbmdlKGUpIHtcclxuICAgICAgLy/ov5nph4zmmK/ojrflj5ZwaWNrZXItdmlld+WGheeahHBpY2tlci12aWV3LWNvbHVtbiDlvZPliY3pgInmi6nnmoTmmK/nrKzlh6DpoblcclxuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBjb25zdCB2YWwgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgdGhpcy5jaXRpZXMgPSByZWdpb25zW3ZhbFswXV0uY2l0aWVzO1xyXG4gICAgICB0aGlzLmFyZWFzID0gcmVnaW9uc1t2YWxbMF1dLmNpdGllc1t2YWxbMV1dLmFyZWFzO1xyXG4gICAgICAvL+ecgeWPmOWMlu+8jOW4guWMuuWIhuWIq+mAieS4reesrOS4gOS4qlxyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFJlZ2lvblswXSAhPSB2YWxbMF0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUmVnaW9uID0gW3ZhbFswXSwgMCwgMF07XHJcbiAgICAgICAgLy/luILlj5jljJbvvIzljLrpgInkuK3nrKzkuIDkuKpcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkUmVnaW9uWzFdICE9IHZhbFsxXSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSZWdpb24gPSBbdmFsWzBdLCB2YWxbMV0sIDBdO1xyXG4gICAgICAgIC8v5Yy65Y+Y5YyW77yM55yB5biC5LiN5Y+YXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlZ2lvbiA9IHZhbDtcclxuICAgICAgfVxyXG4gICAgICAvL1xyXG5cclxuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnNlbGVjdGVkUmVnaW9uO1xyXG5cclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy/ov5nph4zmmK/liKTmlq3nnIHluILlkI3np7DnmoTmmL7npLpcclxuICBpbml0QWRkcmVzc1BpY2tlcihzZWxlY3RlZCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgbGV0IHByb3ZpbmNlcyA9IFtdO1xyXG4gICAgbGV0IGNpdGllcyA9IFtdO1xyXG4gICAgbGV0IGFyZWFzID0gW107XHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gc2VsZWN0ZWQgfHwgWzAsIDAsIDBdO1xyXG5cclxuICAgIGNvbnN0IHsgcHJvdmluY2UsIGNpdHksIGFyZWEgfSA9IHRoaXM7XHJcblxyXG4gICAgLy/pgY3ljobmiYDmnInnmoTnnIHvvIzlsIbnnIHnmoTlkI3lrZflrZjliLBwcm92aW5jZXPov5nkuKrmlbDnu4TkuK1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVnaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBwcm92aW5jZXMucHVzaCh7IG5hbWU6IHJlZ2lvbnNbaV0ubmFtZSwgY29kZTogcmVnaW9uc1tpXS5jb2RlIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+ajgOafpeS8oOWFpeeahOecgee8lueggeaYr+WQpuacie+8jOacieeahOivne+8jOmAieS4rWNvbHVtbuesrOS4gOS4qua4uOagh+S4unByb3ZpbmNlIGluZGV4XHJcbiAgICBwcm92aW5jZXMuc29tZSgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHByb3ZpbmNlICYmIGl0ZW0uY29kZSA9PSBwcm92aW5jZS5jb2RlKSB7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlWzBdID0gaW5kZXg7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCByQ2l0aWVzID0gcmVnaW9uc1tkZWZhdWx0VmFsdWVbMF1dLmNpdGllcztcclxuXHJcbiAgICBpZiAockNpdGllcykgeyAvL+i/memHjOWIpOaWrei/meS4quecgee6p+mHjOmdouacieayoeacieW4gu+8iOWmguaVsOaNruS4reeahOmmmea4r+OAgea+s+mXqOetieWwseayoeacieWGmeW4gu+8iVxyXG4gICAgICAvL+Whq+WFhWNpdGllc+aVsOe7hFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJDaXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjaXRpZXMucHVzaCh7IG5hbWU6IHJDaXRpZXNbaV0ubmFtZSwgY29kZTogckNpdGllc1tpXS5jb2RlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8v6L+Z6YeM5piv5Yik5pat6L+Z5Liq6YCJ5oup55qE55yB6YeM6Z2i77yM5pyJ5rKh5pyJ55u45bqU55qE5LiL5qCH5Li6Y2l0eUNvZGXnmoTluILvvIzlm6DkuLrov5nph4znmoTkuIvmoIfmmK/liY3kuIDmrKHpgInmi6nlkI7nmoTkuIvmoIfvvIxcclxuICAgICAgLy/mr5TlpoLkuYvliY3pgInmi6nnmoTkuIDkuKrnnIHmnIkxMOS4quW4gu+8jOaIkeWImuWlvea7keWIsOS6huesrOWNgeS4quW4gu+8jOeOsOWcqOWPiOmHjeaWsOmAieaLqeS6huecge+8jOS9huaYr+i/meS4quecgeacgOWkmuWPquaciTXkuKrluILvvIxcclxuICAgICAgLy/kvYbmmK/ov5nml7blgJnnmoRjaXR5Q29kZeS4ujnvvIzogIzov5nph4znmoTluILmoLnmnKzmsqHmnInpgqPkuYjlpJrvvIzmiYDku6XkvJrmiqXplJlcclxuICAgICAgY29uc3QgaGFzQ2l0eSA9IGNpdGllcy5zb21lKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChjaXR5ICYmIGl0ZW0uY29kZSA9PSBjaXR5LmNvZGUpIHtcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZVsxXSA9IGluZGV4O1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygn5omn6KGM5LqG5Yy657qn5Yik5patJyk7XHJcblxyXG4gICAgICBjb25zdCByQXJlYXMgPSByQ2l0aWVzW2RlZmF1bHRWYWx1ZVsxXV0uYXJlYXM7XHJcblxyXG4gICAgICBpZiAockFyZWFzKSB7IC8v6L+Z6YeM5piv5Yik5pat6YCJ5oup55qE6L+Z5Liq5biC5Zyo5pWw5o2u6YeM6Z2i5pyJ5rKh5pyJ5Yy65Y6/XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByQXJlYXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGFyZWFzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiByQXJlYXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgY29kZTogckFyZWFzW2ldLmNvZGVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcmVhcy5zb21lKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGFyZWEgJiYgaXRlbS5jb2RlID09IGFyZWEuY29kZSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVbMl0gPSBpbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IC8v6L+Z6YeM5piv5Yik5pat6YCJ5oup55qE6L+Z5Liq5biC6YeM5pyJ5rKh5pyJ5LiL5qCH5Li6YXJlYUNvZGXnmoTljLrljr/vvIzpgZPnkIblkIzkuIrpnaLluILnmoTpgInmi6lcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL+WmguaenOi/meS4quW4gumHjOmdouayoeacieWMuuWOv++8jOmCo+S5iOaKiui/meS4quW4gueahOWQjeWtl+Wwsei1i+WAvOe7mWFyZWFz6L+Z5Liq5pWw57uEXHJcbiAgICAgICAgYXJlYXMucHVzaChjaXRpZXNbZGVmYXVsdFZhbHVlWzFdXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8v5aaC5p6c6K+l55yB57qn5rKh5pyJ5biC77yM6YKj5LmI5bCx5oqK55yB55qE5ZCN5a2X5L2c5Li65biC5ZKM5Yy655qE5ZCN5a2XXHJcbiAgICAgIGNpdGllcy5wdXNoKHByb3ZpbmNlc1tkZWZhdWx0VmFsdWVbMF1dKTtcclxuICAgICAgYXJlYXMucHVzaChwcm92aW5jZXNbZGVmYXVsdFZhbHVlWzBdXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v6YCJ5oup5oiQ5Yqf5ZCO5oqK55u45bqU55qE5pWw57uE6LWL5YC857uZ55u45bqU55qE5Y+Y6YePXHJcblxyXG5cclxuICAgIHRoaXMucHJvdmluY2VzID0gcHJvdmluY2VzO1xyXG4gICAgdGhpcy5jaXRpZXMgPSBjaXRpZXM7XHJcbiAgICB0aGlzLmFyZWFzID0gYXJlYXM7XHJcbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRSZWdpb24gPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcbn07XHJcblxyXG4iXX0=