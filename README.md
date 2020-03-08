# Rose Coates, Running/Weightloss/Life Coach
## By: Lela Smith

### Description
#### For my capstone I will be creating a new website for my client, Rose Coates. Rose is a Running Coach, Weightloss Coach and now a Certified Life Coach who is really getting her brand and personal business off the ground. For the last 10 years she has been the owner of SportyDiva, an organization that supports women in their fitness and weightloss goals and hosts organized runs all over the Pugeot Sound area. In the last year has also started Keto-ish Girl, a company that helps women meet their health goals through following the Keto diet in a sustainable way that is flexible with their lifestyle. She is now a certified Lifecoach and this website will be a landing pad for her brand combining all three avenues into one cohesive site. The site will have a beautiful and informative interface that can easily be navigaged by users. Users will be able to schedule appoints with Rose and receive email confirmation of appointment. Site will have authentification and the admin will be able to add, update and delete upcoming events and see list of scheduled appointments. Stretch goals include displaying social media and having branded products for sale.

### Original Sites
* Sporty Diva: https://www.sportydiva.com/
* Keto-ish Girl: https://www.ketoishgirl.com/

### 2/29/20 Work Schedule
* 8:00am - 9:00am Organize project structure, create README and prepare for phone meeting with client.
* 9:00am - 10:30am Phone meeting with client to go over her vision for the site.
* 10:30am - 11:00am Read tutorial on linking React frontend to Ruby backend https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend
* 11:00am - 11:30am Continue reading tutorial, also read https://medium.com/quick-code/simple-rails-crud-app-with-react-frontend-using-react-rails-gem-b708b89a9419
* 11:30am - 12:00pm Look up inspiration for site layout https://thegoodalliance.org/articles/20-great-coaching-websites/, https://railsware.com/blog/ruby-on-rails-ecommerce/, https://wpamelia.com/coaching-websites/
* 12:00pm - 1:00pm Break for Lunch


### Admin Routes
|HTTP verb|Route|CRUD Action|Description|
|---|---|---|---|
|GET|/events|READ|Get list of events|
|GET|/events/:id|READ|Look at detail page for a single event|
|POST|/events|CREATE|Add new event to the list of events|
|PATCH|/events/:id|UPDATE|Update a single event|
|DELETE|/events/:id|DELETE|Delete an event from the list|
|GET|/events/new|READ|Go to the form page for adding a new event to the list|
|GET|/events/:id/edit|READ|Go to the form page for editing an event


|HTTP verb|Route|CRUD Action|Description|
|---|---|---|---|
|GET|/events/:id/racetimes/:racetime_id|READ|Look at detail page for an individual racetime|
|POST|/events/:id/racetimes/:racetime_id|CREATE|Add new racetime to the list of racetimes|
|PATCH|/events/:id/racetimes/:racetime_id|UPDATE|Update a single racetime|
|DELETE|/events/:id/racetimes/:racetime_id|DELETE|Delete a racetime from the list|


### Technologies Used
* HTML
* CSS
* Bootstrap
* Ruby 2.5.1
* Rails 5.2.4.1
* PostgreSQL
* JavaScript
* React

### License
#### This software is licensed under the MIT license.

#### Copyright (c) 2020 Lela Smith
