/*
* @Author: longteng
* @Date:   2017-03-06 11:18:32
* @Last Modified by:   longteng
* @Last Modified time: 2017-03-06 14:55:11
*/

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
  // 404 page
  app.use(function (req, res) {
	  if (!res.headersSent) {
	    res.status(404).render('404');
	  }
});
};