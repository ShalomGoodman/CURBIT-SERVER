import Listing from '../models/listing.js';

export function listingRoutes(app) {

/*----- Get Routes -----*/

//Get all listings in the database
app.get('/listings', (req, res) => {
    Listing.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
});

//Get all Listings by Category
app.get('/listings/category/:category', (req, res) => {
    Listing.find({category: req.params.category})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}) 

//Get a specific Listing by ID
app.get('/listings/category/:id', (req, res) => {
    Listing.findOne({_id: req.params.id})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

/*----- Post Routes -----*/

//Add a new Listing to the database
app.post('/listing', (req, res) => {
    Listing.create(req.body)
    .then((response) => {
        res.status(200).send({status: 200, message:'New listing added'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

/*----- Put Routes -----*/

//Finds a Listing by ID and toggles isClaimed to either true or false
app.put('/listing/is-claimed/:id', async (req, res) => {
    let update;
    const listing = await Listing.findOne({_id: req.params.id})
    listing.isClaimed ? update = false : update = true

    Listing.findOneAndUpdate({_id: req.params.id}, {isClaimed: update})
    .then((response) => {
        res.status(200).send({status: 200, message:`Claim Status changed to ${update}`});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

/*----- Delete Routes -----*/

//Deletes a Listing by ID
app.delete('/listing/:id', (req, res) => {
    Listing.deleteOne({_id: req.params.id})
    .then((response) => {
        res.status(200).send({status: 200, message:'Listing deleted'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})

}