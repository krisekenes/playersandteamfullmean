var Player = mongoose.model('Player')

module.exports = (function(){
  return {
    index: function(req, res) {
      Player.find({}).populate('_team').exec(function(err, players){
        console.log('in index route')
        res.json(players)
      })
    },
    create: function(req, res){
      var player = new Player(req.body);
      player.save(function(err){
        if(err) res.json({'status': false, 'errors': 'Player validation failed'})
        else res.json({'status': true})
      })
    },
    show: function(req, res){
      Player.findOne({_id: req.params.id }, function(err, player){
        if(err) res.json(err)
        else res.json(player)
      })
    },
    delete: function(req, res){
      Player.remove({_id: req.params.id }, function(err, player){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    },
    update: function(req, res){
      Player.findOne({_id: req.params.id }, function(err, player){
        if(err) res.json(err)
        else{
          player.j_num = req.body.j_num
          player.name = req.body.name
          player.save(function(err){
            if(err) res.json(err)
            else res.json({'status': true})
          })
        }
      })
    }
  }
})()
