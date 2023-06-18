import Tag from '../models/tags.js';

export function tagRoutes (app) {



/*----- Get Routes -----*/
app.get('/tags', (req, res) => {
    Tag.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})    



}