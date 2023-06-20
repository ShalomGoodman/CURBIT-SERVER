/*----- Dependencies -----*/
import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import db from './db/connection.js'
/*----- Imported Routes -----*/
import { listingRoutes } from './routes/listing-routes.js'
import { userRoutes } from './routes/user-routes.js'
import { categoryRoutes } from './routes/category-routes.js'
import { tagRoutes } from './routes/tag-routes.js'
import { authRoutes } from './auth/auth.js'
//import { imageRoutes } from './routes/image-routes.js'

/*----- Middleware -----*/
const app = express()
app.use(cors())
app.use(express.json())

/*----- Connect to Database -----*/
db.on('connected', async () => {
   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

/*----- ENV Variables -----*/ 
dotenv.config()
const PORT = process.env.PORT || 5550
const SECRET = process.env.SECRET

/*----- Routes -----*/
listingRoutes(app)
userRoutes(app, jwt, bcrypt, SECRET)
categoryRoutes(app)
tagRoutes(app)
authRoutes(app)
//imageRoutes(app)

/*----- Server Listening -----*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
