console.log('loading routes')

var player = require('../controller/players.js')
var team = require('../controller/teams.js')
var association = require('../controller/associations.js')

module.exports = function(){
  app.get('/players', player.index );
  app.get('/players/:id', player.show );
  app.post('/players', player.create );
  app.put('/players/:id/edit', player.update );
  app.delete('/players/:id', player.delete );

  app.get('/teams', team.index );
  app.get('/teams/:id', team.show );
  app.post('/teams', team.create );
  app.put('/teams/:id/edit', team.update );
  app.delete('/teams/:id', team.delete );

  app.post('/associations/:player_id/:team_id', association.create );
  app.delete('/associations/:player_id', association.delete );
}
