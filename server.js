/*----- Dependencies -----*/
import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import db from './db/connection.js'
/*----- Imported Routes -----*/
import { listingRoutes } from './routes/listing-routes.js'
import { userRoutes } from './routes/user-routes.js'
import { categoryRoutes } from './routes/category-routes.js'
import { tagRoutes } from './routes/tag-routes.js'

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
userRoutes(app, jwt, SECRET)
categoryRoutes(app)
tagRoutes(app)


/*----- Testing Auth (Delete Later)-----*/
async function auth(req, res, next) {
   if (req.headers.authorization) {
      const header = req.headers.authorization
      const token = header.split(' ')[1]
      const payload = await jwt.verify(token, SECRET)
      req.user = payload
      next();
   } else {
      res.send("NOT AUTHORIZED")
   }
}

const user = {username: "Peter Paker", password: "Spider-Man"}
app.post('/login', (req, res) => {
   const {username, password} = req.body

   if (username === user.username && password === user.password) {
      res.json({token: jwt.sign(user, SECRET)})
   } else {
      res.send("Failed")
   }
})

app.post('/test', auth, (req, res) => {
   res.send("Success")
})

/*----- Server Listening -----*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
