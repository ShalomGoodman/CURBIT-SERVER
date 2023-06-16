/*----- Listing Schema -----*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listingSchema = new Schema({ 
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },  
    itemNumber: { type: Number, required: true },  
    itemName: { type: String, required: true },
    type: { type: String, required: true },
    style: { type: String, required: true }, 
    location: { 
        longitude: { type: String, required: true },
        latitude: { type: String, required: true }
    },
    isClaimed: { type: Boolean, required: true },
    createdAt: { type: Date, required: true }
})

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;