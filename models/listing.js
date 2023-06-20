/*----- Listing Schema -----*/
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listingSchema = new Schema({ 
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
      },   
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    category: { type: String, required: true }, 
    location: { 
        lng: { type: String, required: true },
        lat: { type: String, required: true }
    },
    isClaimed: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
})

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;