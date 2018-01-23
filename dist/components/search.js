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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJkYXRhIiwic2VhcmNoX2lucHV0X3ZhbHVlIiwic2hvdyIsImV2ZW50cyIsIm1ldGhvZHMiLCJzZWFyY2hJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsImdvQmFjayIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2VhcmNoIiwiJGVtaXQiLCJkZWxUZXh0IiwicGFyYW0iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLDBCQUFvQixFQURmO0FBRUxDLFlBQU87QUFGRixLLFFBS1BDLE0sR0FBUyxFLFFBR1RDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsQ0FESixFQUNPO0FBQ2IsYUFBS0wsa0JBQUwsR0FBMEJLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbkM7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtDO0FBQ1AsdUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLGlCQUFPLENBRFMsQ0FDUDs7QUFETyxTQUFsQjtBQUlELE9BVk87QUFXUkMsWUFYUSxvQkFXQztBQUNQLGFBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCLEtBQUtiLGtCQUEvQjtBQUNELE9BYk87QUFjUmMsYUFkUSxxQkFjRTtBQUNSLGFBQUtkLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0EsYUFBS1EsTUFBTDtBQUNELE9BakJPO0FBa0JSUCxVQWxCUSxnQkFrQkhjLEtBbEJHLEVBa0JHO0FBQ1QsYUFBS2QsSUFBTCxHQUFZYyxLQUFaO0FBQ0EsYUFBS1AsTUFBTDtBQUNEO0FBckJPLEs7Ozs7OzZCQXdCRCxDQUVSOzs7O0VBbkNpQyxlQUFLUSxTOztrQkFBcEJsQixNIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBzZWFyY2hfaW5wdXRfdmFsdWU6ICcnLFxyXG4gICAgc2hvdyA6IDFcclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHtcclxuXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBzZWFyY2hJbnB1dChlKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoX2lucHV0X3ZhbHVlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9LFxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IDEgLy8g5Zue6YCA5YmNIGRlbHRhKOm7mOiupOS4ujEpIOmhtemdolxyXG5cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaFZhbHVlJywgdGhpcy5zZWFyY2hfaW5wdXRfdmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGRlbFRleHQoKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoX2lucHV0X3ZhbHVlID0gXCJcIjtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sXHJcbiAgICBzaG93KHBhcmFtKXtcclxuICAgICAgdGhpcy5zaG93ID0gcGFyYW07XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuIl19