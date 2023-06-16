import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
// import categoryRoutes from './routes/category-routes.js'
// import listingRoutes from './routes/listing-routes.js'
// import userRoutes from './routes/user-routes.js'
// import userloginRoutes from './routes/userlogin-routes.js'


const app = express()
      app.use(cors())
      app.use(express.json())

import db from './db/connection.js'
db.on('connected', async () => {
   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

//ENV Variables 
dotenv.config()
let PORT = process.env.PORT || 7500


// app.use(categoryRoutes, listingRoutes, userRoutes, userloginRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
