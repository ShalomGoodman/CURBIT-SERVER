import { getAllListings, getListingsByCategory, getListingById, addListing, isClaimedToggle, deleteListing } from '../controller/listing-controller.js';

export function listingRoutes(app) {

/*----- Get Routes -----*/
app.get('/listings', (req, res) => getAllListings(req, res));
app.get('/listings/category/:category', (req, res) => getListingsByCategory(req, res));
app.get('/listings/:id', (req, res) => getListingById(req, res));

/*----- Post Routes -----*/
app.post('/listing', (req, res) => addListing(req, res));

/*----- Put Routes -----*/
app.put('/listing/is-claimed/:id', (req, res) => isClaimedToggle(req, res));

/*----- Delete Routes -----*/
app.delete('/listing/:id', (req, res) => deleteListing(req, res));

}