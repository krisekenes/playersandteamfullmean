console.log('in mongoose js loading models')

var fs = require('fs');

mongoose.connect('mongodb://localhost/playersandteams');

var models_path = path.join(__dirname, './../model');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file);
	}
});
