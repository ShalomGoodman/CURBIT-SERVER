import User from '../models/user.js';
import { userSignIn } from '../controller/user-controller.js';

export function userRoutes (app, jwt, SECRET) {

/*----- Post Routes -----*/
app.post('/auth/signin', async (req, res) => userSignIn(req, res, jwt, SECRET));

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
app.post('/create-user', (req, res) => {
    User.create(req.body)
    .then((response) => {
        res.status(200).send({status: 200, message:'New creator added'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})
app.delete('/delete-user/:username', (req, res) => {
    User.deleteOne({username: req.params.username})
    .then((response) => {
        res.status(200).send({status: 200, message:'User deleted'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

}