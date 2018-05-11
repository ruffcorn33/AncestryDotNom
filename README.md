# Ancestry*dot*Nom

![logo](assets/images/logo.png)

AncestryDotNom is a social media site for extended family groups. It mashes up simple genealogy with recipe sharing.

## Motivation<hr>

I grew up being part of a large extended family.  Our grandmother was a singular person who gathered us together several times a year for family meals. My aunts and uncles shared cassaroles, hot dishes, desserts, candies... the central theme was always food. 
<hr>

## Built with

* React
* React-Parallax
* Express
* Express-session
* Express-validator
* MongoDB/Mongoose
* Axios
* Bcryptjs
* Bootstrap

## Installation<hr>

After cloning this repository, run yarn install in the project root directory and the client directory.

`yarn install`

## How to use?<hr>

AncestryDotNom is currently deployed at [AncestryDotNom](https://ancestrydotnom.herokuapp.com/)<br>
Upon arrival, take a moment to appreciate the nifty parallax scrolling.  Then, head to __Registration__ where you will create a user account.<br> 

* First choose a family group to join from the dropdown menu, or click __New Family__ to create your own.  Your login credentials will be your email address and password so enter those next.  Don't worry - your passwords are securely hashed in the database using Bcryptjs.  If you are joining an existing family group, pick a family member to link to.  You should choose a parent if possible, or a spouse.  Barring those relationships, choose a member who is a friend.  Then choose the relationship that best describes that family member's relationship to you.  (In later improvements, these relationships will be used to create a graphical family tree.)<br>
Lastly, tell us as much or as little about yourself as you want and __Submit__.<br>
* At __Login__, you will enter your email and password to get access to your family's recipes, news, and genealogy information.<br>
* __Recipes__ will show you the most recent recipes by default.  Future improvements will allow you to search for recipes by favorites, popular, ingredient, family member, etc.  Clicking __Show Recipe__ will toggle the display of the ingredients and direction. Clicking the thumbs up icon will increment a rating count for a recipe.  Clicking the heart icon will add a recipe to your list of favorites.  In future improvements, clicking the Author or Posted by will take you to a family member card with information about that member.
* __Add a Recipe__ will take you to a form where you can enter a new recipe.  Future improvements will allow users to add ingredients and directions one at a time as well as upload a photo.
* __Add Ancestors__ allows you to add a deceased family member to the database.  This allows new members to link to their parents who may have passed on.  Add an Ancestor can also be used to a living member who - as unlikely as it sounds - may not want to be an active user of AncestryDotNom.

## Future Development<hr>

* a graphical family tree chart
* more robust authentication with Passportjs
* a user account page where a user can view and change their information and change their password
* photo upload for members and recipes - probably using blueimp-file-upload and AWS S3
* search by
  * most recent
  * favorites
  * popular
  * member
  * ingredient
* family memory cards with or without a recipe, with or without photos
* add ingredients and directions one by one
* display a single recipe
* print format
* comments
* nutritional information
* family validation
* family profile page
* user created categories
* nested categories
* scaling recipes
* admin users and functionality
* make ancestor active for those who see the light
* link to union
* client and server side validation
* utilize ancestrydotnom.com domain

## Credits<hr>

AncestryDotNom began as a group project at the University of Minnesota Coding Bootcamp for Full-Stack Web Development.  My partners were:

* Joy Hollela - front end and styling
* Eric Trabant - front end and overall team organization
* Shawn Wolf - backend and database, add recipe form
* Jon Moore - routing and database
* Craig Christensen - design, front end, React, database, routing, authentication, registration, login, add ancestors, recipe page, welcome page, conditional navbar

## License<hr>

MIT © Craig Christensen