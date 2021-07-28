# Full Stack Interview Take Home Assignment

## Requirements

This project relies on [Docker](https://www.docker.com/)which allows for cross platform development using containers. In order to complete this assignment, please install Docker for your respective OS [here](https://docs.docker.com/get-docker/). You'll also need node.js & npm installed.

## Get up and running

Follow the following instructions to get the project up and running.

Fork this repository by following the steps according to the github docs: [here](https://guides.github.com/activities/forking/). Clone the forked repository and navigate to the base directory.

Now that vcs and docker is setup, all that's left to do is build the project:

```bash
docker-compose up --build -d
```

This will build 3 service containers:

- BBQ API
- BBQ Webapp
- Redis

NOTE: If you need to add npm packages to the api or frontend, you'll need to make sure that compose rebuilds itself with those packages:

```bash
docker-compose restart
```

If you need to view/tail the logs run:

```bash
docker-compose logs -f
```

After starting the 3 containers, we need to seed the example data:

```bash
cd api
npm run seed_db
```

You should see a `completed!` message when run successfully.

Once all of this is done, its time to make sure the api and frontend work:

- BBQ API: `localhost:8080/ping`
  - This should return `ping: pong` in the result
  - If there is no `ping: pong` message, feel free to reach out to us
- React Web App: `localhost:9000`
  - It may take a moment or two for the development server to start, if after 5 minutes there is no response. Feel free to reach out to us

Please note, to stop the Docker containers running please ensure you are in the project root directory and use the below command:

```bash
docker-compose down
```

## Assignment

You are building the Frontend and finishing the backend for a BBQ recipe website, where meat lovers share their recipes with one another.

The api has been partially completed for you and the frontend exercises a couple of api routes just to show connectivity. Your tasks are as follows:

1. Create two new api routes, one for updating a recipe and one for creating a recipe. Refer to the swagger spec (./api/resources/swagger.json) as a guide to follow. It has the routes you're to create spec'd out there but not actually implemented.
2. Our team does not create UI/UX on our own, instead we refer to designers and a UX team for prototyping. You'll be given a hi-fi prototype (./prototypes/index.html) and will be tasked with making it a react reality.

## Submitting the assignment

Reach out to us when you've pushed your final commit and are ready for us to review it. Have fun!
