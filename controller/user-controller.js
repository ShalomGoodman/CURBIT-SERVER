import User from '../models/user.js';

/*----- Post Request -----*/

//User SignUp
export async function userSignUp(req, res, bcrypt) {
    const salt = await bcrypt.genSalt(10);
    req.body.credentials = await bcrypt.hash(req.body.credentials, salt)
    const user = await User.create(req.body)
    res.json(user)
}

//User SignIn
export async function userSignIn(req, res, jwt, bcrypt, SECRET) {
    const cred = req.body;
    const user = await User.findOne({username: cred.username});
    if (user?.username) {
        const result = await bcrypt.compare(req.body.credentials, user.credentials)

        if (result) {
            const payload = { username: user.username }
            const token = jwt.sign(payload, SECRET)
            res.cookie('token', token, { httpOnly: true }).json({ message: 'loggin successful', token: token })
        } else {
            res.status(400).send({message: "Password is incorrect"})
        }

    } else {
        res.status(400).send({message: "User not found"})
    }
}

export async function userSignOut() {
    localStorage.removeItem('token');

    window.location.href = '/auth/signin'
}