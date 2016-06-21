console.log('loading the actual models')


var playerModel = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4, maxlength: 45 },
  _team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  j_num: {type: Number, required: true, max: 99, min: 0 }
}, {timestamps:true});

var teamModel = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4, maxlength: 45 },
  _players: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  city: {type: String, required: true, minlength: 4, maxlength: 45 }
}, {timestamps:true})

mongoose.model('Player', playerModel)
mongoose.model('Team', teamModel)
