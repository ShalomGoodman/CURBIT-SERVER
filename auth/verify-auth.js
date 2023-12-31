import jwt from 'jsonwebtoken'

// This key is set by us to verify on the server, that the token generated by this server
// is being used to make the request
const SECRET = process.env.SECRET

export default async function verifyAuth(req, res, next) {
  // extract token from headers
  let token
  token = req.headers.authorization 
  token ? token = token.split(' ')[1] : token = "" //<== Split the bearer text from the token
  
  // If token doesn't exist, we can return an error
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'You must signin first.',
      valid: false
    }) 
  }
  // verify token and extra the user's info
  let data
  try {
    data = jwt.verify(token, SECRET)
  } catch (error) {
    return res.status(400).json({
      valid: false,
      status: 400,
      error: `Token is invalid`,
      database_message: error.message,
    })
  }
  // if token is expired send 401 (in the front end make sure the user is re-routed)
  const currentTime = new Date()
  if (data.exp < currentTime.getTime()) {
    return res.status(401).json({
      status: 401,
      message: 'Your token has expired, sign in again.',
      valid: false
    }) 
  }
  else {
    //sends the id needed for the rest of the request, down to the controller
    req.id = data.id
    req.username = data.username

    // next() is an express way of calling the next function in the middleware path
    next()
  }
}