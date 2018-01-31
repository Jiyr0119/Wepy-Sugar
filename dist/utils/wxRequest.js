'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

var _tip = require('./tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var API_SECRET_KEY = 'www.mall.cycle.com';
var TIMESTAMP = _util2.default.getCurrentTime();
var SIGN = _md2.default.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _tip2.default.loading();
                        data = params.query || {};
                        _context.next = 4;
                        return _wepy2.default.request({
                            url: url,
                            method: params.method || 'GET',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 4:
                        res = _context.sent;

                        console.log(res);

                        _tip2.default.loaded();
                        return _context.abrupt('return', res);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = {
    wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUElfU0VDUkVUX0tFWSIsIlRJTUVTVEFNUCIsImdldEN1cnJlbnRUaW1lIiwiU0lHTiIsImhleF9tZDUiLCJ0b0xvd2VyQ2FzZSIsInd4UmVxdWVzdCIsInBhcmFtcyIsInVybCIsImxvYWRpbmciLCJkYXRhIiwicXVlcnkiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwicmVzIiwiY29uc29sZSIsImxvZyIsImxvYWRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLG9CQUF2QjtBQUNBLElBQU1DLFlBQVksZUFBS0MsY0FBTCxFQUFsQjtBQUNBLElBQU1DLE9BQU8sYUFBSUMsT0FBSixDQUFZLENBQUNILFlBQVlELGNBQWIsRUFBNkJLLFdBQTdCLEVBQVosQ0FBYjs7QUFFQSxJQUFNQztBQUFBLHVFQUFZO0FBQUEsWUFBTUMsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLHNDQUFJQyxPQUFKO0FBQ0lDLDRCQUZVLEdBRUhILE9BQU9JLEtBQVAsSUFBZ0IsRUFGYjtBQUFBO0FBQUEsK0JBR0UsZUFBS0MsT0FBTCxDQUFhO0FBQ3pCSixpQ0FBS0EsR0FEb0I7QUFFekJLLG9DQUFRTixPQUFPTSxNQUFQLElBQWlCLEtBRkE7QUFHekJILGtDQUFNQSxJQUhtQjtBQUl6Qkksb0NBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCO0FBSmlCLHlCQUFiLENBSEY7O0FBQUE7QUFHVkMsMkJBSFU7O0FBU2RDLGdDQUFRQyxHQUFSLENBQVlGLEdBQVo7O0FBRUEsc0NBQUlHLE1BQUo7QUFYYyx5REFZUEgsR0FaTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBZ0JBSSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JkO0FBRGEsQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUnO1xyXG5pbXBvcnQgdGlwIGZyb20gJy4vdGlwJ1xyXG5cclxuY29uc3QgQVBJX1NFQ1JFVF9LRVkgPSAnd3d3Lm1hbGwuY3ljbGUuY29tJ1xyXG5jb25zdCBUSU1FU1RBTVAgPSB1dGlsLmdldEN1cnJlbnRUaW1lKClcclxuY29uc3QgU0lHTiA9IG1kNS5oZXhfbWQ1KChUSU1FU1RBTVAgKyBBUElfU0VDUkVUX0tFWSkudG9Mb3dlckNhc2UoKSlcclxuXHJcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwpID0+IHtcclxuICAgIHRpcC5sb2FkaW5nKCk7XHJcbiAgICBsZXQgZGF0YSA9IHBhcmFtcy5xdWVyeSB8fCB7fTtcclxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCB8fCAnR0VUJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBcclxuICAgIHRpcC5sb2FkZWQoKTtcclxuICAgIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICB3eFJlcXVlc3RcclxufVxyXG4iXX0=