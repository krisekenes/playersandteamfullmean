var Player = mongoose.model('Player')
var Team = mongoose.model('Team')

module.exports = (function(){
  return {
    create: function(req, res){
      Player.findOne({_id: req.params.player_id}, function(err, player){
        if(err) res.json(err)
        else{
          Team.findOne({_id: req.params.team_id}, function(err, team){
            if(err) res.json(err)
            else{
              player._team = team._id
              player.save(function(err){
                if(err) res.json(err)
                team._players.push(player._id)
                team.save(function(err){
                  if(err) res.json(err)
                  res.redirect('/associations')
                })
              })
            }
          });
        }
      })
    }
  }
})()
