var path = require('path');

module.exports = function(app) {
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    
    app.get('/style.css',function(req, res){
		res.sendFile(path.join(__dirname + '/../public/style.css'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
    
    
}

