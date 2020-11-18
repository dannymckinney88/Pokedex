# Express Pokedex

Working with databases, especially through ORMs, can present quite a learning curve. We'll start by incorporating one database model into an application to save favorite Pokemon.

#### Backstory: Pokemon

If you're not familiar with Pokemon, Pokemon is a franchise/universe created by Satoshi Tajiri in 1995. It's a famous franchise in both the US and Japan. Fun facts:

* Pokemon is short for "Pocket Monsters"
* The Pokemon universe extends to games, trading cards, and TV
* [The Pokemon Company](https://en.wikipedia.org/wiki/The_Pok%C3%A9mon_Company) is headquartered in Bellevue, WA.

## Getting Started

We'll be using an existing application that uses the [PokeAPI](http://pokeapi.co/), a Pokemon API that allows us to get a list of Pokemon.

* Fork and clone this repository
* Run `npm install` to install dependencies
  * Use `nodemon` to start the server


## User Stories

* As a user, I want to select my favorite Pokemon and add them to a list of favorites.
* As a user, once I add a Pokemon to my list of favorites, I want to be redirected to my favorites page.

## Requirements

#### Part 1: Setup Database

Your first step will be to create a SQL database for your application. Recall the process:

#### Part 2: Create your Pokemon Model and Table

Our data model needs only one attribute: `name`.

1. Use the `sequelize model:create` command to make the `pokemon` model. This creates both the model JS and the migration JS files.
2. Use the `sequelize db:migrate` command to apply the migrations.
3. Confirm that your `database` and `model` are inside Postgres using the `terminal` or `Postico`

#### Part 3: Integrating the database with the app

You'll want to add functionality to the following routes by incorporating the `pokemon` table you created.

* `GET /pokemon`
  * View: `views/pokemon/index.ejs`
  * Purpose: Retrieve all favorited Pokemon and display them on the page
  * What sequelize function will do this for us?
* `POST /pokemon`
  * The form for adding is already included on the main index page
  * View: none (redirect to `/pokemon`)
  * Purpose: Creates a new Pokemon and redirects back to `/pokemon`
  * What is the sequelize function we use here?

#### Part 4: Display more info on each Pokemon

Add a route `GET /pokemon/:id` that renders a `show` page with information about the Pokemon with the corresponding row `id`.

* You can get detailed information about a Pokemon by passing the Pokemon's name to PokeAPI. You can retrieve images, abilities, stats, and moves through the API.
* Example: http://pokeapi.co/api/v2/pokemon/bulbasaur/

Check out the result of the pokemon API calls (or see the [doc page](http://pokeapi.co/)) for ideas on what data you could show. Show at least 4 pieces of data (e.g. attacks, habitat, etc.)

#### Part 5: Styling

When finished with the above, style the application more to your liking with CSS.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
