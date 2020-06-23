# Umami

**A website to improve your health through food**

## Description
This website is a collaborite effort in completely remote form. 
The structure is a Monorepo in wich each folder host a microservice.
The three microservice are:

>* **website**: A beautiful frontend made in React
>* **api**: An elegan API for serving and manage info for the UI
>* **scrapper**: Is a tool for scrapping some food websites and get data for the db.

All app is dockerizated for create an homogenious and multiplaform workspace and to facilitate the deployment of the application.

## Technologys
| FrontEnd | BackEnd |
| --------- | -----:|
| React | Node |
| Html | Flask |
| CSS | Xpath |
| Javascript | Docker |

## Installation and usage
To install and run this proyect:
1. Configure your credentials for db connection in `.env` files.
2. Run: `docker-compose up -d`
3. If do you want to se logs: `docker-compose logs services_name` (api, flask, website)

To turn down the server and clean all containers:
1. Run: `docker-compose down`


### Contributors

*	[Esteban Mongí](https://github.com/EstebanMongui "Esteban mongui")
*	[Nelson Ayalón](https://github.com/nelsonalayon "Nelson Ayalon")
*	[Jaime Pirotava](https://github.com/dan2005p "Jaime Pirotava")
*	[Mario Barbosa](https://github.com/mariobarbosa777 "Barbosa")
*	[Emanuel Osorio](https://github.com/emanuelosva "Emanuel Osorio")
