const request = require('request');

const curlFunc = (site) => {
  request(site, function (error, response, body) {
    if(error){
      throw error;
    } else {
      process.stdout.write(body);
    }
});
}

module.exports = {
  curlFunc
}
