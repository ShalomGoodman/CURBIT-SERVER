/*----- Category Schema -----*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  type: { type: String, required: true },
  style: [{ 
		variety: { type: String, required: true },
		popularity: { type: Number, required: true }
	}]
});

const Category = mongoose.model('Category', categorySchema);
export default Category;