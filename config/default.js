/*
* @Author: longteng
* @Date:   2017-03-06 11:24:35
* @Last Modified by:   longteng
* @Last Modified time: 2017-03-06 11:24:47
*/

module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
};