/*----- Category Schema -----*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  icon: { type: String, required: true },
  category: { type: String, required: true }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;