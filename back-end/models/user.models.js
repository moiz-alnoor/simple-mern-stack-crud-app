const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
 
    username: {
        type: String
    },
  
})

const User = mongoose.model('User', usersSchema);
module.exports = User;