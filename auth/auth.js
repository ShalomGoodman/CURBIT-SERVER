import verifyAuth from "./verify-auth.js";

export function authRoutes(app) {

// api/auth/isTokenValid
app.get('/auth/isTokenValid', verifyAuth, async (req, res) => {
    try {
      if (req.id) {
        res.status(200).json({
          valid: true,
          status: 200,
          message: "Token is valid"
        })
      }
    } catch (error) {
      res.status(400).json({
        valid: false,
        status: 400,
        error: `Token is invalid`,
        database_message: error.message,
      })
    }
})

//Logging out
app.get("/auth/signout", async (req, res) => {
  res.clearCookie("token").json({ response: "You are Logged Out" })
})

}