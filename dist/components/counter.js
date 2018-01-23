'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$component) {
  _inherits(Search, _wepy$component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      search_input_value: '',
      show: 1
    }, _this.events = {}, _this.methods = {
      searchInput: function searchInput(e) {
        this.search_input_value = e.detail.value;
        this.$apply();
      },
      goBack: function goBack() {
        _wepy2.default.navigateBack({
          delta: 1 // 回退前 delta(默认为1) 页面

        });
      },
      search: function search() {
        this.$emit('searchValue', this.search_input_value);
      },
      delText: function delText() {
        this.search_input_value = "";
        this.$apply();
      },
      show: function show(param) {
        this.show = param;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Search;
}(_wepy2.default.component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiZGF0YSIsInNlYXJjaF9pbnB1dF92YWx1ZSIsInNob3ciLCJldmVudHMiLCJtZXRob2RzIiwic2VhcmNoSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJnb0JhY2siLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNlYXJjaCIsIiRlbWl0IiwiZGVsVGV4dCIsInBhcmFtIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBTztBQUNMQywwQkFBb0IsRUFEZjtBQUVMQyxZQUFPO0FBRkYsSyxRQUtQQyxNLEdBQVMsRSxRQUdUQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTztBQUNiLGFBQUtMLGtCQUFMLEdBQTBCSyxFQUFFQyxNQUFGLENBQVNDLEtBQW5DO0FBQ0EsYUFBS0MsTUFBTDtBQUNELE9BSk87QUFLUkMsWUFMUSxvQkFLQztBQUNQLHVCQUFLQyxZQUFMLENBQWtCO0FBQ2hCQyxpQkFBTyxDQURTLENBQ1A7O0FBRE8sU0FBbEI7QUFJRCxPQVZPO0FBV1JDLFlBWFEsb0JBV0M7QUFDUCxhQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQixLQUFLYixrQkFBL0I7QUFDRCxPQWJPO0FBY1JjLGFBZFEscUJBY0U7QUFDUixhQUFLZCxrQkFBTCxHQUEwQixFQUExQjtBQUNBLGFBQUtRLE1BQUw7QUFDRCxPQWpCTztBQWtCUlAsVUFsQlEsZ0JBa0JIYyxLQWxCRyxFQWtCRztBQUNULGFBQUtkLElBQUwsR0FBWWMsS0FBWjtBQUNBLGFBQUtQLE1BQUw7QUFDRDtBQXJCTyxLOzs7Ozs2QkF3QkQsQ0FFUjs7OztFQW5DaUMsZUFBS1EsUzs7a0JBQXBCbEIsTSIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YSA9IHtcclxuICAgIHNlYXJjaF9pbnB1dF92YWx1ZTogJycsXHJcbiAgICBzaG93IDogMVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge1xyXG5cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHNlYXJjaElucHV0KGUpIHtcclxuICAgICAgdGhpcy5zZWFyY2hfaW5wdXRfdmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICBkZWx0YTogMSAvLyDlm57pgIDliY0gZGVsdGEo6buY6K6k5Li6MSkg6aG16Z2iXHJcblxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNlYXJjaCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnc2VhcmNoVmFsdWUnLCB0aGlzLnNlYXJjaF9pbnB1dF92YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgZGVsVGV4dCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hfaW5wdXRfdmFsdWUgPSBcIlwiO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfSxcclxuICAgIHNob3cocGFyYW0pe1xyXG4gICAgICB0aGlzLnNob3cgPSBwYXJhbTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=