const database = require("./database-connection");

module.exports = {
    list(){
      return database('games').select()
    },
    read(id){
      return database('games').where('id',id).first()
    },
    create(game){
      return database('games').insert(game).returning('*').then(record => record[0])
    },
    update(id, game){
      return database('games').where('id',id).update(game).returning('*')
    },
    delete(id){
      return database('games').where('id',id).del()
    }
};
