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

var ShopGridList = function (_wepy$component) {
  _inherits(ShopGridList, _wepy$component);

  function ShopGridList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopGridList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopGridList.__proto__ || Object.getPrototypeOf(ShopGridList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: [],
      purchasetype: {
        default: 1 //类型:1-商品订单;2-商品补单;
      },
      special: {
        default: 0 //0-正常入库;1-特价专区和换货专区
      },
      showTitle: {
        default: true
      }
    }, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopGridList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ShopGridList;
}(_wepy2.default.component);

exports.default = ShopGridList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BfZ3JpZF9saXN0LmpzIl0sIm5hbWVzIjpbIlNob3BHcmlkTGlzdCIsInByb3BzIiwibGlzdCIsInB1cmNoYXNldHlwZSIsImRlZmF1bHQiLCJzcGVjaWFsIiwic2hvd1RpdGxlIiwiZXZlbnRzIiwibWV0aG9kcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7a01BQ25CQyxLLEdBQVE7QUFDTkMsWUFBTSxFQURBO0FBRU5DLG9CQUFjO0FBQ1pDLGlCQUFTLENBREcsQ0FDQTtBQURBLE9BRlI7QUFLTkMsZUFBUTtBQUNORCxpQkFBUyxDQURILENBQ0s7QUFETCxPQUxGO0FBUU5FLGlCQUFVO0FBQ1JGLGlCQUFRO0FBREE7QUFSSixLLFFBYVJHLE0sR0FBUyxFLFFBSVRDLE8sR0FBVSxFOzs7Ozs2QkFJRCxDQUVSOzs7O0VBeEJ1QyxlQUFLQyxTOztrQkFBMUJULFkiLCJmaWxlIjoic2hvcF9ncmlkX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BHcmlkTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgcHVyY2hhc2V0eXBlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IDEgIC8v57G75Z6LOjEt5ZWG5ZOB6K6i5Y2VOzIt5ZWG5ZOB6KGl5Y2VO1xyXG4gICAgfSxcclxuICAgIHNwZWNpYWw6e1xyXG4gICAgICBkZWZhdWx0OiAwIC8vMC3mraPluLjlhaXlupM7MS3nibnku7fkuJPljLrlkozmjaLotKfkuJPljLpcclxuICAgIH0sXHJcbiAgICBzaG93VGl0bGU6e1xyXG4gICAgICBkZWZhdWx0OnRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHtcclxuXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG5cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=