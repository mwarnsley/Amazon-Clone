//adding mongoosse
var mongoose = require('mongoose');

//adding the bcrypt
var bcrypt = require('bcrypt-nodejs');

//declaring the mongoose schema
var Schema = mongoose.Schema;

//user schema attributes / characteristics / fields
var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    profile: {
        name: {
            type: String,
            default: ''
        },
        picture: {
            type: String,
            default: ''
        },
        address: String,
        history: [{
            date: Date,
            paid: {
                type: Number,
                default: 0
            }
        }]
    }
});


//hash the password before we even save it to the database





//compare password in the database with the one the user types in
