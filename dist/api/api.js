'use strict';

var _wxRequest = require('./../utils/wxRequest.js');

var env = "-test"; //-dev 或者 -test
var apiMall = 'https://wstcsd.1haomei.com';
//const apiMall = 'https://api.tangxinmao.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
var getCarousel = function getCarousel(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/html/shop/index.php/WstInterFace/ShopDecoration/getBanner');
};

module.exports = {
  getCarousel: getCarousel
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJhcGlNYWxsIiwiZ2V0Q2Fyb3VzZWwiLCJwYXJhbXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUlBLElBQUlBLE1BQU0sT0FBVixDLENBQWtCO0FBQ2xCLElBQU1DLFVBQVUsNEJBQWhCO0FBQ0E7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQ7QUFBQSxTQUFZLDBCQUFVQSxNQUFWLEVBQWtCRixVQUFVLDREQUE1QixDQUFaO0FBQUEsQ0FBcEI7O0FBR0FHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkg7QUFEZSxDQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIHd4UmVxdWVzdFxyXG59IGZyb20gJy4uL3V0aWxzL3d4UmVxdWVzdCc7XHJcblxyXG5sZXQgZW52ID0gXCItdGVzdFwiIC8vLWRldiDmiJbogIUgLXRlc3RcclxuY29uc3QgYXBpTWFsbCA9ICdodHRwczovL3dzdGNzZC4xaGFvbWVpLmNvbSdcclxuLy9jb25zdCBhcGlNYWxsID0gJ2h0dHBzOi8vYXBpLnRhbmd4aW5tYW8uY29tJ1xyXG5cclxuLyoqXHJcbiAqIOiOt+WPluWPkeeOsOWlveWVhuWTgeaOpeWPo1xyXG4gKiBAcGFyYW0gIHtbdHlwZV19IHBhcmFtcyBbZGVzY3JpcHRpb25dXHJcbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICovXHJcbmNvbnN0IGdldENhcm91c2VsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvaHRtbC9zaG9wL2luZGV4LnBocC9Xc3RJbnRlckZhY2UvU2hvcERlY29yYXRpb24vZ2V0QmFubmVyJyk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0Q2Fyb3VzZWxcclxufVxyXG4iXX0=