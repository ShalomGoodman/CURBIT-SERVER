import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    tags: Array
})


const Tags = mongoose.model('Tags', tagsSchema)
export default Tags;