'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '五色糖'
    }, _this.components = {
      Search: _search2.default
    }, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorActiveColor: "#fff"
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getCarousel',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(111);

                _context.next = 3;
                return _api2.default.getCarousel({
                  query: {}
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
                  this.adList = json.data.list;
                  console.log(this.adList);
                  this.$apply();
                } else {}

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCarousel() {
        return _ref2.apply(this, arguments);
      }

      return getCarousel;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log(1);
    } // 在Page和Component共用的生命周期函数

  }, {
    key: 'onShow',
    value: function onShow() {
      console.log(2);
    } // 只在Page中存在的页面生命周期函数

    // onShow() {
    // 	// console.log(api.getCarousel);
    // 	// let that = this;
    // 	// this.discoverList = [];
    // 	this.getCarousel();

    // 	const json = api.getCarousel({
    // 		query: {}
    // 	});
    // 	console.log(json);

    // 	if (json.data.code == 0) {
    // 	this.adList = json.data.list;
    // 	console.log(this.adList);
    // 	}

  }, {
    key: 'onLoad',
    value: function onLoad() {

      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
      console.log(111);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIlNlYXJjaCIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2Fyb3VzZWwiLCJxdWVyeSIsImpzb24iLCJjb2RlIiwiYWRMaXN0IiwibGlzdCIsIiRhcHBseSIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNDOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVzQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQTBDYkMsSSxHQUFPO0FBQ1RDLHFCQUFlLElBRE47QUFFVEMsZ0JBQVUsSUFGRDtBQUdUQyxnQkFBVSxJQUhEO0FBSVRDLGdCQUFVLElBSkQ7QUFLVEMsNEJBQXNCO0FBTGIsSyxRQU9QQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVUsRSxRQUtWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7O0FBckRWQyx3QkFBUUMsR0FBUixDQUFZLEdBQVo7Ozt1QkFFb0IsY0FBSUMsV0FBSixDQUFnQjtBQUNqQ0MseUJBQU87QUFEMEIsaUJBQWhCLEM7OztBQUFiQyxvQjs7QUFHTixvQkFBSUEsS0FBS2IsSUFBTCxDQUFVYyxJQUFWLElBQWtCLENBQXRCLEVBQXlCO0FBQzFCLHVCQUFLQyxNQUFMLEdBQWNGLEtBQUtiLElBQUwsQ0FBVWdCLElBQXhCO0FBQ0FQLDBCQUFRQyxHQUFSLENBQVksS0FBS0ssTUFBakI7QUFDRyx1QkFBS0UsTUFBTDtBQUNELGlCQUpELE1BSU8sQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVEO0FBQ1RSLGNBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBRUEsSyxDQUFFOzs7OzZCQUVTO0FBQ1pELGNBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBRUEsSyxDQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBc0JZOztBQUVQLFVBQUlRLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVQyxRQUFWLEVBQW9CO0FBQzNDLFlBQUlBLFFBQUosRUFBYztBQUNaSCxlQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RILGFBQUtJLFdBQUwsR0FBbUIsUUFBbkI7O0FBRUFKLGFBQUtLLGVBQUwsR0FBdUIsV0FBdkI7QUFDQUMsbUJBQVcsWUFBTTtBQUNmTixlQUFLSyxlQUFMLEdBQXVCLE1BQXZCO0FBQ0FMLGVBQUtELE1BQUw7QUFDRCxTQUhELEVBR0csSUFISDs7QUFLQUMsYUFBS0QsTUFBTDtBQUNKLE9BYkU7QUFjSlIsY0FBUUMsR0FBUixDQUFZLEdBQVo7QUFFRzs7OztFQXJGZ0MsZUFBS2UsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cdGltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2gnXG5cdGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XG5cdGltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkupToibLns5YnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBTZWFyY2g6IFNlYXJjaCxcblx0fVxuXHRcbiAgYXN5bmMgZ2V0Q2Fyb3VzZWwoKSB7XG5cdCAgY29uc29sZS5sb2coMTExKTtcblx0ICBcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldENhcm91c2VsKHtcbiAgICAgIHF1ZXJ5OiB7fVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG5cdCAgdGhpcy5hZExpc3QgPSBqc29uLmRhdGEubGlzdDtcblx0ICBjb25zb2xlLmxvZyh0aGlzLmFkTGlzdCk7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0gZWxzZSB7fVxuICB9XG4gXHRvbkxvYWQgKCkgeyBcblx0XHQgY29uc29sZS5sb2coMSk7XG5cdFx0IFxuXHQgfSAgLy8g5ZyoUGFnZeWSjENvbXBvbmVudOWFseeUqOeahOeUn+WRveWRqOacn+WHveaVsFxuXG4gICAgb25TaG93ICgpIHtcblx0XHRjb25zb2xlLmxvZygyKTtcblx0XHRcblx0fSAgLy8g5Y+q5ZyoUGFnZeS4reWtmOWcqOeahOmhtemdoueUn+WRveWRqOacn+WHveaVsFxuXG5cdC8vIG9uU2hvdygpIHtcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhhcGkuZ2V0Q2Fyb3VzZWwpO1xuXHQvLyBcdC8vIGxldCB0aGF0ID0gdGhpcztcblx0Ly8gXHQvLyB0aGlzLmRpc2NvdmVyTGlzdCA9IFtdO1xuXHQvLyBcdHRoaXMuZ2V0Q2Fyb3VzZWwoKTtcblxuXHQvLyBcdGNvbnN0IGpzb24gPSBhcGkuZ2V0Q2Fyb3VzZWwoe1xuXHQvLyBcdFx0cXVlcnk6IHt9XG5cdC8vIFx0fSk7XG5cdC8vIFx0Y29uc29sZS5sb2coanNvbik7XG5cdFx0XG5cdC8vIFx0aWYgKGpzb24uZGF0YS5jb2RlID09IDApIHtcblx0Ly8gXHR0aGlzLmFkTGlzdCA9IGpzb24uZGF0YS5saXN0O1xuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuYWRMaXN0KTtcblx0Ly8gXHR9XG5cbiAgICBkYXRhID0ge1xuXHRcdGluZGljYXRvckRvdHM6IHRydWUsXG5cdFx0YXV0b3BsYXk6IHRydWUsXG5cdFx0aW50ZXJ2YWw6IDMwMDAsXG5cdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0aW5kaWNhdG9yQWN0aXZlQ29sb3I6IFwiI2ZmZlwiLFxuXHR9XG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICBcbiAgICAgXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICBcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG5cdFxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSwgMzAwMClcblxuICAgICAgICBzZWxmLiRhcHBseSgpXG5cdCAgfSlcblx0XHRjb25zb2xlLmxvZygxMTEpO1xuXHRcdFxuICAgIH1cbiAgfVxuIl19