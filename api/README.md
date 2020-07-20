# API and Admin Panel for Umami web app

## Description
A backend infrastrcuture service for expose data to **frontend** from MongoDb.
Umami-Service is the **backend** infrastructure for Umami website. It is compose by a REST API and an Admin panel rendered from server. You can view it in action [here](https://umami-service.vercel.app/).

#### Admin Panel
An admin from the Admin-Panel can:
> Read recipes
> Create recipes
> Update recipes
> Delete recipes

And the current admin can update your profile and credentials.

#### REST API
The REST API serve data from the DB to front end. Through the API the client can:
> Read recipes and it details
> Read users
> Create users (sign up)
> Update users
> Login users
> Make a shop in name of the client
> Read a client shops

#### API Documentation

You can see a more complete API documentation made in swagger [here](https://umami-service.vercel.app/api/documentation/)

[**Base URL:** https://umami-service.vercel.app/api/]

* Schema: HTTPS
* AUTH: JsonWenToken in Bearer header

###### USER
> Operations about user

Schema: 

```javascript
userSchema: {
  _id: 'string (auto)',
  name: 'string (required)',
  email: 'string (required/unique)',
  password: 'string (required)',
  shops: 'array of objects (shopSchema)',
  created: 'date (auto)',
  updated: 'date (auto),
}
```

**Routes**

* **GET** /user
> List all users
> No parameters
> Success Status: **200**
> **Only Acces for Admin**

* **POST** /user
> Create a user
> Parameters: userSchema - in **body**
> Success Status: **201**

* **POST** /user/login
> Login a user
> Parameters: {email: 'string', password: 'string'} - in **body**
> Success Status: **200**

* **PUT** /user/{id}
> Update a user
> Parameters: 
>   * userSchema (at least one field) - in **body**
>   * id (user Id) -in **params**
>
> Success Status: **200**
> **Required Login (JWT like Bearer header)**


* **DELETE** /user/{id}
> Delete a user
> Parameters: {id: 'user Id'} - in **params**
> **Required Login (JWT like Bearer header)**

###### RECIPE
> Operations about recipe

Schema: 

```javascript
recipeSchema: {
  _id: 'string (auto)',
  name: 'string (required)',
  tag: 'string',
  servings: 'string (required)',
  time: 'string (required)',
  ingredinets: 'array of string (required)',
  instructions: 'array of string (required)',
  url_image: 'url string (required)',
  url_ingredients: 'url string (required)',
  created: 'date (auto)',
  updated: 'date (auto),
}
```

**Routes**

* **GET** /recipe
> List all recipes
> No parameters
> Success Status: **200**

* **GET** /recipe/{id}
> Get a recipe by Id
> No parameters
> Success Status: **200**

* **POST** /recipe
> Create a recipe
> Parameters: recipeSchema - in **body**
> Success Status: **201**
> **Only Acces for Admin**

* **PUT** /recipe/{id}
> Update a recipe
> Parameters: 
>   * recipeSchema (at least one field) - in **body**
>   * id (recipe Id) -in **params**
>
> Success Status: **200**
- **Only Acces for Admin**

* **DELETE** /recipe/{id}
> Delete a recipe
> Parameters: {id: 'recipe Id'} - in **params**
> **Only Acces for Admin**

###### SHOP
> Operations about shop

Schema: 

```javascript
shopSchema: {
  _id: 'string (auto)',
  username: 'string (required) <the email user>',
  recipe: 'string (required) <the recipe id>',
  cost: 'number (required)',
  created: 'date (auto)',
}
```

**Routes**

* **GET** /shop
> List all shops
> No parameters
> Success Status: **200**
> **Only Acces for Admin**

* **POST** /shop
> Create a shop
> Parameters: shopSchema - in **body**
> Success Status: **201**
> **Required Login (JWT like Bearer header)**

## Tech Stack
* **Server**: Express.js/cors/helmet
* **Session**: express-session/cookie-session
* **DB**: MongoDb/moongose
* **Auth**: Passport.js/jwt/basic
* **Template engine**: Pug (For admin panel)
* **API-Docs**: Swagger

### Deploy 
* Serve by [Vercel](https://vercel.com/)
Link: [https://umami-service.vercel.app/](https://umami-service.vercel.app/) 

### Developed by:
* Emanuel Osorio <emanuelosva@gamil.com>