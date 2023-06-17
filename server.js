import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import db from './db/connection.js'
import { listingRoutes } from './routes/listing-routes.js'
import { userRoutes } from './routes/user-routes.js'
/*import categoryRoutes from './routes/category-routes.js'
import listingRoutes from './routes/listing-routes.js'
import userRoutes from './routes/user-routes.js'
import userloginRoutes from './routes/userlogin-routes.js'*/


const app = express()
app.use(cors())
app.use(express.json())

db.on('connected', async () => {
   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

//ENV Variables 
dotenv.config()
let PORT = process.env.PORT || 5550


//app.use(categoryRoutes, listingRoutes, userRoutes, userloginRoutes)
listingRoutes(app);
userRoutes(app);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
