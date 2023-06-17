import User from '../models/user.js';

export function userRoutes (app) {


//TEST ROUTES
app.post('/create-user', (req, res) => {
    User.create(req.body)
    .then((response) => {
        res.status(200).send({status: 200, message:'New creator added'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})


}