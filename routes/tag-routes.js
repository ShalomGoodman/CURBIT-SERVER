import { getAllTags } from "../controller/tag-controller.js"

export function tagRoutes (app) {

/*----- Get Routes -----*/
app.get('/tags', (req, res) => getAllTags(req, res));  

}