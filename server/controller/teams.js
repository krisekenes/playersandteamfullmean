var Team = mongoose.model('Team')

module.exports = (function(){
  return {
    index: function(req, res) {
      Team.find({}).populate('_players').exec(function(err, teams){
        console.log('in index route')
        res.json(teams)
      })
    },
    create: function(req, res){
      var team = new Team(req.body);
      team.save(function(err){
        if(err) res.json(err)
        else res.json({'status': true })
      })
    },
    show: function(req, res){
      Team.findOne({_id: req.params.id }, function(err, team){
        if(err) res.json(err)
        else res.json({'status': true })
      })
    },
    delete: function(req, res){
      Team.remove({_id: req.params.id }, function(err, team){
        if(err) res.json(err)
        else res.json({'status': true })
      })
    },
    update: function(req, res){
      Team.findOne({_id: req.params.id }, function(err, team){
        if(err) res.json(err)
        else{
          team.city = req.body.city
          team.name = req.body.name
          team.save(function(err){
            if(err) res.json(err)
            else res.json({'status': true })
          })
        }
      })
    }
  }
})()
