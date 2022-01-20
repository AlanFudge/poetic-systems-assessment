# Poetic Systems Coding Assessment

This assessment was given by poetic systems as part of their interview process

## Requirements

- A ReactJS app
- Has a router
- Displays businesses by distance from my zip code
- View the business
- Let the viewers rate the business
- show the business rating

If so inclined features may be added on top of requirements.

## API & Endpoints

The application is using the yelp API to get business information, and mongoDB Atlas for storing the reviews submitted throug the application.

Base URL: <https://assorted-cultured-hearing.glitch.me>
Code URL: <https://glitch.com/edit/#!/assorted-cultured-hearing>

- /search
  - GET
    - Search for businesses utilizing query parameters location, term, and sortBy. For the purposes of this application at least loaction is required.
- /businesses/:businessId
  - GET
    - Returns information from yelp API with any reviews attached.
  - POST
    - Adds new reviews to the database and returns the created document.
