import Tags from '../models/tags.js'

/*----- Get Routes -----*/

//Get all Tags
export function getAllTags(req, res) {
    Tags.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}