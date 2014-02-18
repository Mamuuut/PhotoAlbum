
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Bali 2010' });
};