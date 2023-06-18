import { getAllCategories } from '../controller/category-controller.js';

export function categoryRoutes (app) {

/*----- Get Routes -----*/
app.get('/categories', (req, res) => getAllCategories(req, res));

}