# CURBIT-backend

### App Description 

- CurbIT is a mobile app designed to connect users in New York City with unique and unexpected furniture items found on the streets. Inspired by the adage, "One man's trash is another man's treasure," CurbIT enables users to track real-time locations of furniture items spotted and posted by other CurbIT users. With CurbIT, you can turn your search for home furnishings into an exciting treasure hunt. Whether you're moving into a new apartment, redecorating your space, or simply looking for distinctive pieces to add character to your home, CurbIT is your go-to app.

### Technologies Used 

- Axios 

- Cors

- bcrypt

- node JS

- Express

- MongoDB

### Models Used 

- Category 

- Lisitng 

- Tags 

- User

### Useful Links 

- [PowerPoint Presentation](https://onedrive.live.com/edit.aspx?resid=2977D80E9D3F38E5!213&ithint=file%2cpptx&ct=1687625605745&wdOrigin=OFFICECOM-WEB.START.EDGEWORTH&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=f9a4ff42-2084-4d8a-a87b-8b6ccbdcaf66)

-[Notion-board](https://malachite-silene-cb6.notion.site/Week-9-Project-Week-a0b92a5788c34333a9022bd2661a53d5?pvs=4) 


### MVP Goals

-  I want to be able to use real-Time Item Tracking using a live map which displays available listings and their location. using the Get ( /listings ) route

- I want to be able to upload information about an item and its location 

- I want a user to be able click a "claimed" button indicating the item is no longer available. If claimed button is active for 24 hours Post will auto Delete 

- I want to be able to update information on a post like whether its been claimed or the description is incorrect using the ( '/listings/:type/:style/:id) PUT route 

- I want to be able to have a button that if the user claims an item can be declared as such 

- I want to be able to delete a post using the ( '/listings/:category/:style/:id' ) Delete route 

### Stretch Goals 

- If current user claims an item I want to be able to have the map populate with places to clean the item.  

- I want to be able to allow users to comment on posts to further gather information regarding listings 

- I want to be able to allows users to save their favorite items and be alerted when new items fitting their preferences are posted 

- I want to be able to upload photos of items seen using the Post ( /listings) route 

- I want to have users be required to post a picture proving that the item they is actually claimed 


