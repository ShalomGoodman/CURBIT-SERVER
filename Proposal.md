# CurbIt 

### Project Proposal 

- CurbIT is an app that lets you furnish your New York home with unique street finds. It allows you to track in real time the locations of furniture items spotted and posted by other CurbIT users. Discover hidden treasures, reduce waste, and give new life to forgotten furniture items with CurbIT. Join the community today and turn your search for home furnishings into an exciting treasure hunt. 

### Project name and description 

- CurbIT is a mobile app designed to connect users in New York City with unique and unexpected furniture items found on the streets. Inspired by the adage, "One man's trash is another man's treasure," CurbIT enables users to track real-time locations of furniture items spotted and posted by other CurbIT users.

With CurbIT, you can turn your search for home furnishings into an exciting treasure hunt. Whether you're moving into a new apartment, redecorating your space, or simply looking for distinctive pieces to add character to your home, CurbIT is your go-to app.

Key Features:

1. Real-Time Item Tracking: CurbIT provides a live map interface that displays the current locations of furniture items posted by other users. You can easily browse and discover available treasures nearby.

2. User-Generated Content: The app allows users to capture and upload photos of interesting furniture items they come across on the streets. You can contribute to the community by sharing your finds and helping others discover hidden gems.

3. Item Details and Descriptions: Each posted furniture item includes relevant details such as a description, dimensions, condition, and any other useful information shared by the uploader. This helps you make informed decisions before deciding to pick up an item.

4. Favoriting and Notifications: CurbIT enables you to favorite or bookmark specific items for future reference. You can also set up notifications to receive alerts when new furniture items matching your preferences are posted. (stretch goals)

5. User Interactions and Communication: The app fosters a sense of community by allowing users to interact with each other. You can comment on and ask questions about specific items, arrange pick-up times, or even collaborate on upcycling projects. (stretch goals)

CurbIT revolutionizes the way New Yorkers furnish their homes by transforming the city's streets into an ever-changing free marketplace. Discover hidden treasures, reduce waste, and give new life to forgotten furniture items with CurbIT.


### Images 

![image](/images/CurbIt.jpg)



### Routes

- GET  ( /items )  Fetches all items available 

- GET  ( /items/:type )  Fetches items by type (chair, table, fan)

- GET  ( /items/:type/:style )  Fetches a item by style (dining table, coffee table, etc)

- GET  ( /items/:type/:style/:id )	Fetches a specific item by id 

- POST ( /items )	Allows you to post an item 

- POST ( /items/:type/:style )	Allows you to post an item by style

- PUT  ( /items/:type/:style/:id )	Allows you to update a different item by Id 

- DELETE  ( /items/:type/:style/:id )	Allows you to delete an item by Id


### Models 

- Ours models will include Category.js / Listing.js / User.js / UserLogin.js

### User Stories 

- As a user I should be able to query ('/items) to grab all items available and their location

- As a user I should be able to query ( '/items/:type ) to grabs items specified to different categories like Chairs, and tables 

- As a user I should be able to query ( '/items/:type/:style ) to grab specified item subcategories in a category like chairs. Ex (Lawn, rocking, office)

### MVP Goals

-  I want to be able to use real-Time Item Tracking using a live map which displays available items and their location. using the Get ( /items ) route

- I want to be able to upload information about an item and its location 

- I want a user to be able click a "claimed" button indicating the item is no longer available. If claimed button is active for 24 hours Post will auto Delete 

- I want to be able to update information on a post like whether its been claimed or the description is incorrect using the ( '/items/:type/:style/:id) PUT route 

- I want to be able to have a button that if the user claims an item can be declared as such 

- I want to be able to delete a post using the ( '/items/:type/:style/:id' ) Delete route 

### Stretch Goals 

- If current user claims an item I want to be able to have the map populate with places to clean the item.  

- I want to be able to allow users to comment on posts to further gather information regarding items 

- I want to be able to allows users to save their favorite items and be alerted when new items fitting their preferences are posted 

- I want to be able to upload photos of items seen using the Post ( /items) route 