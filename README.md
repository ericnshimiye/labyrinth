[![Dependency Status](https://david-dm.org/ericnshimiye/labyrinth.svg)](https://david-dm.org/ericnshimiye/labyrinth)

## Labyrinth API

The labyrinth API is a node.js + mongodb app that allow users to try to escape from a maze.
Ready to face the challenge ?

### Configuration

See the **_.env.example_** file for the complete list of environment variables the app needs to run. You have to provide the values for all the env variables to the app. One way to achieve it is to add a **_.env_** file a the root of the app and replace all placeholders by your own values.

### Run

First you need to install the dependencies

```bat
npm install
```

Then you can start the api with the following

```bat
npm start
```

You can start the api in development mode witch will automatically restart the server when file changes in the directory are detected 

```bat
npm run dev
```

You can now start querying the API en have fun :)

### Documentation

See the documentation in the [wiki](https://github.com/ericnshimiye/labyrinth/wiki)