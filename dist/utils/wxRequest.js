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

                        data.sign = SIGN;
                        data.time = TIMESTAMP;
                        _context.next = 6;
                        return _wepy2.default.request({
                            url: url,
                            method: 'POST',
                            data: data,
                            header: { 'Content-Type': 'application/json' }
                        });

                    case 6:
                        res = _context.sent;

                        _tip2.default.loaded();
                        return _context.abrupt('return', res);

                    case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUElfU0VDUkVUX0tFWSIsIlRJTUVTVEFNUCIsImdldEN1cnJlbnRUaW1lIiwiU0lHTiIsImhleF9tZDUiLCJ0b0xvd2VyQ2FzZSIsInd4UmVxdWVzdCIsInBhcmFtcyIsInVybCIsImxvYWRpbmciLCJkYXRhIiwicXVlcnkiLCJzaWduIiwidGltZSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJyZXMiLCJsb2FkZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixvQkFBdkI7QUFDQSxJQUFNQyxZQUFZLGVBQUtDLGNBQUwsRUFBbEI7QUFDQSxJQUFNQyxPQUFPLGFBQUlDLE9BQUosQ0FBWSxDQUFDSCxZQUFZRCxjQUFiLEVBQTZCSyxXQUE3QixFQUFaLENBQWI7O0FBRUEsSUFBTUM7QUFBQSx1RUFBWTtBQUFBLFlBQU1DLE1BQU4sdUVBQWUsRUFBZjtBQUFBLFlBQW1CQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxzQ0FBSUMsT0FBSjtBQUNJQyw0QkFGVSxHQUVISCxPQUFPSSxLQUFQLElBQWdCLEVBRmI7O0FBR2RELDZCQUFLRSxJQUFMLEdBQVlULElBQVo7QUFDQU8sNkJBQUtHLElBQUwsR0FBWVosU0FBWjtBQUpjO0FBQUEsK0JBS0UsZUFBS2EsT0FBTCxDQUFhO0FBQ3pCTixpQ0FBS0EsR0FEb0I7QUFFekJPLG9DQUFPLE1BRmtCO0FBR3pCTCxrQ0FBTUEsSUFIbUI7QUFJekJNLG9DQUFRLEVBQUUsZ0JBQWdCLGtCQUFsQjtBQUppQix5QkFBYixDQUxGOztBQUFBO0FBS1ZDLDJCQUxVOztBQVdkLHNDQUFJQyxNQUFKO0FBWGMseURBWVBELEdBWk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWdCQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNiZDtBQURhLENBQWpCIiwiZmlsZSI6Ind4UmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1JztcclxuaW1wb3J0IHRpcCBmcm9tICcuL3RpcCdcclxuXHJcbmNvbnN0IEFQSV9TRUNSRVRfS0VZID0gJ3d3dy5tYWxsLmN5Y2xlLmNvbSdcclxuY29uc3QgVElNRVNUQU1QID0gdXRpbC5nZXRDdXJyZW50VGltZSgpXHJcbmNvbnN0IFNJR04gPSBtZDUuaGV4X21kNSgoVElNRVNUQU1QICsgQVBJX1NFQ1JFVF9LRVkpLnRvTG93ZXJDYXNlKCkpXHJcblxyXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyhwYXJhbXMgPSB7fSwgdXJsKSA9PiB7XHJcbiAgICB0aXAubG9hZGluZygpO1xyXG4gICAgbGV0IGRhdGEgPSBwYXJhbXMucXVlcnkgfHwge307XHJcbiAgICBkYXRhLnNpZ24gPSBTSUdOO1xyXG4gICAgZGF0YS50aW1lID0gVElNRVNUQU1QO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICB9KTtcclxuICAgIHRpcC5sb2FkZWQoKTtcclxuICAgIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICB3eFJlcXVlc3RcclxufVxyXG4iXX0=