import User from '../models/user.js';

/*----- Post Request -----*/

//User SignIn
export async function userSignIn(req, res, jwt, SECRET) {
    const cred = req.body;
    const user = await User.findOne({username: cred.username});
    if (user?.username) {
        if (cred.password === user.credentials) {
            res.json({token: jwt.sign(cred, SECRET)})
        } else {
            res.send({message: "Password is incorrect"})
        }
    } else {
        res.send({message: "Username does not exist"})
    }
}