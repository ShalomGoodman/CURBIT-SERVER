/*----- UserLogin Schema -----*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// User Login Schema
const userLoginSchema = new Schema({
    loginConnection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: { type: String, required: true },
    credentials: { type: String, required: true }
});

const UserLogin = mongoose.model('UserLoginSchema', userLoginSchema);
export default UserLogin;