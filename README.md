# WeLoveMovies

## Setup Instructions
- Clone the repository 
- Install all the dependencies - This project uses `yarn` for build.
```shell
yarn install
```
- Run migrations to set up your database
```shell
npx knex migrate:latest
```
- Seed the database with sample data
```shell
npx knex seed:run
```
- Run the project 
```shell
node src/server.js 
```

## Allowed API routes: 
Checkout the API documentation definitions: 
- Movies related: [Movies List](./docs/routes/movies_list.md)
- Movies related: [Movies Read](./docs/routes/movies_read.md)
- Reviews related: [Delete Reviews](./docs/routes/reviews_destroy.md)
- Reviews related: [Update Reviews](./docs/routes/reviews_update.md)
- Theaters related: [List Theaters](./docs/routes/theaters_list.md)


### Error Handling:
- For routes or methods that are not supported, the following errors are returned:

```js
    404 Not Found: If a route does not exist.
    405 Method Not Allowed: If the wrong HTTP method is used for a route.
```
## Deployment
This application is deployed using Render. You can use the application using the below deployed version of the 
application. https://final-capstone-welovemovies-guild-node-3n9k.onrender.com/

* Please note that there is no home page for the app, you would have to visit the routes specified in the 
API documentation readme files to see the application in action.
