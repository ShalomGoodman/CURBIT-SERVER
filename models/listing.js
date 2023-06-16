/*----- Listing Schema -----*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listingSchema = new Schema({ 
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },   
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    category: { type: String, required: true }, 
    location: { 
        longitude: { type: String, required: true },
        latitude: { type: String, required: true }
    },
    isClaimed: { type: Boolean, required: true },
    createdAt: { type: Date, required: true }
})

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;