const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    googleID: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);