import Listing from '../models/listing.js';

/*----- Get Routes -----*/

//Get all Listings
export function getAllListings(req, res) {
    Listing.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}

//Get all Listings by Category
export function getListingsByCategory(req, res) {
    Listing.find({category: req.params.category})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}

//Get Listing by ID
export function getListingById(req, res) {
    Listing.findOne({_id: req.params.id})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}

/*----- Post Routes -----*/

//Add a new Listing to the database
export function addListing(req, res) {
    Listing.create(req.body)
    .then((response) => {
        res.status(200).send({status: 200, message:'New listing added'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}

//Finds a Listing by ID and toggles isClaimed to either true or false
export async function isClaimedToggle(req, res) {
    let update;
    const listing = await Listing.findOne({_id: req.params.id})
    listing.isClaimed ? update = false : update = true

    Listing.findOneAndUpdate({_id: req.params.id}, {isClaimed: update})
    .then((response) => {
        res.status(200).send({status: 200, isClaimed: `${update}`, message:`Claim Status changed to ${update}`});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}

/*----- Delete Routes -----*/

//Deletes a Listing by ID
export function deleteListing(req, res) {
    Listing.deleteOne({_id: req.params.id})
    .then((response) => {
        res.status(200).send({status: 200, message:'Listing deleted'});
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}