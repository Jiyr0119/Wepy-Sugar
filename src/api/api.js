import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://wstcsd.1haomei.com'
//const apiMall = 'https://api.tangxinmao.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
//查询广告列表
const getBannerList = (params) => wxRequest(params, apiMall + '/html/shop/index.php/WstInterFace/ShopDecoration/getBanner');
const getTabList = (params) => wxRequest(params, apiMall + '/html/shop/index.php/WstInterFace/CommendCat/getCommendCat');





module.exports = {
  getBannerList,
  getTabList
}
