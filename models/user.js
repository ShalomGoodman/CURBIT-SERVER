/*----- User Schema ------*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
    listings: { type: Array, required: false },
    createdAt: { type: Date, required: true}
});

const User = mongoose.model('User', userSchema);
export default User;