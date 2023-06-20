/*----- User Schema ------*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true },
	credentials: { type: String, required: true },
    listings: [{
        type: mongoose.Types.ObjectId,
        ref: 'Listing'
    }],
    createdAt: { type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);
export default User;