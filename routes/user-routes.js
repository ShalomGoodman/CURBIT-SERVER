import User from '../models/user.js';
import { userSignIn, userSignUp } from '../controller/user-controller.js';

export function userRoutes (app, jwt, bcrypt, SECRET) {

/*----- Post Routes -----*/
app.post("/auth/register", async (req, res) => userSignUp(req, res, bcrypt));
app.post('/auth/signin', async (req, res) => userSignIn(req, res, jwt, bcrypt, SECRET));

//TEST ROUTES Delete Later//
app.get('/users', (req, res) => {
    User.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})
app.delete('/delete-user/:id', (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then((response) => {
        res.status(200).send({status: 200, message:'User deleted'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

}