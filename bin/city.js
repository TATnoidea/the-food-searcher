const rp = require('request-promise');
const cheerio = require('cheerio');
const utils = require('./utils');
const baseUrl = require('./baseUrl');
const cityUrl = `${ baseUrl }/citylist`;

module.exports = {
  cityList() {
    rp(cityUrl, {
      method: 'GET',
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
      },
    })
    .then(body => {
      const $ = cheerio.load(body);
      const hotCityList = $('.hotcity .onecity');
      
      for(let i = 0; i <= hotCityList.length; i++) {
        const cityUrl = hotCityList.eq(i).attr('href');
        const cityName = hotCityList.eq(i).text();
        console.log(cityUrl+cityName);
      }
      // cityLinks.forEach((item, index) => {
      //   const cityUrl = item.attr('href');
      //   const cityName = item.text();
      //   console.log(cityName + ":" + cityUrl);
      // })
    })
    .catch(e => {
      if(e) throw e;
    })
  }
}
// 排序参数，手动添加至数据库
// const order = {
//   default: 'o1',
//   popular: 'o2',
//   praise: 'o3',
//   taste: 'o4',
//   env: 'o5',
//   service: 'o6',
//   cheap: 'o8',
//   expensive: 'o9',
//   review: 'o11',
//   preOrder: 'o13',
// };



