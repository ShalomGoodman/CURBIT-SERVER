import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Tags from '../../models/tags.js';
import tags from '../../data/tags.json' assert {type: 'json'};

const tagData = tags.tags;

dotenv.config()
const DATABASE_URI = process.env.DATABASE_URI;
//const PORT = process.env.PORT
console.log(DATABASE_URI);

let db = mongoose.connection;

let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  
mongoose.connect(DATABASE_URI, mongooseConfig)

/*----- Seeding the database -----*/
export async function seedDatabase () {
    await Tags.deleteMany({})
    .then((response) => {
        console.log('Tags Deleted');
    })

    Tags.create({tags: tagData});
    console.log('Seed Successful');
}

/*----- DB Connection -----*/
db.on('connected', async () => {
    console.log(`Connected to MongoDB: name:${db.name} host:${db.host} port:${db.port}`);
    await seedDatabase();
});