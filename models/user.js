/*----- User Schema ------*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, required: true },
		credentials: { type: String, required: true },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
}],
    createdAt: { type: Date, required: true}
});

const User = mongoose.model('User', userSchema);
export default User;