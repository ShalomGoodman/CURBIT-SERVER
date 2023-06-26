import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

export default async function verifyAuth(req, res, next) {
 
  const token = req.headers.authorization
  
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'You must signin first.'
    }) 
  }
  // verify token and extra the user's info
  const data = jwt.verify(token, SECRET)
  // if token is expired send 401 (in the front end make sure the user is re-routed)
  const currentTime = new Date()
  if (data.exp < currentTime.getTime()) {
    return res.status(401).json({
      status: 401,
      message: 'Your token has expired, sign in again.'
    }) 
  }
  else {
    //sends the id needed for the rest of the request, down to the controller
    req.id = data.id
    // next() is an express way of calling the next function in the middleware path
    next()
  }
}