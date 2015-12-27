module.exports = function(app) {
    app.get('/auth/account', function(req, res) {
        console.log(req.accessToken);
		res.redirect('http://localhost:8100/?access_token='+req.accessToken.id);
    });
	
	
	//log a user out
	app.get('/logout', function(req, res, next) {
		if (!req.accessToken) return res.sendStatus(401); //return 401:unauthorized if accessToken is not present
		user.logout(req.accessToken.id, function(err) {
		  if (err) return next(err);
		  res.redirect('/'); //on successful logout, redirect
		});
	});
}