import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Category from '../../models/category.js';
import category from '../../data/category.json' assert {type: 'json'};

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
    await Category.deleteMany({})
    .then((response) => {
        console.log('Category Deleted');
    })

    category.forEach((c) => {
        console.log(c);
        Category.create({
            category: c.category,
            icon: c.icon
        })
    })
    console.log('Seed Successful');
}

/*----- DB Connection -----*/
db.on('connected', async () => {
    console.log(`Connected to MongoDB: name:${db.name} host:${db.host} port:${db.port}`);
    await seedDatabase();
});