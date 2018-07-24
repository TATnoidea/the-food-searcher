module.exports = {
  getCityInfo(url) {
    return url.split('/').reverse()[0];
  }
}