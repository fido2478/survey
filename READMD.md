# Emaily
Survey is based on nodeJS 8.12.0 and npm 6.6.0. This is a simple app that sends out a survey to a list of emails and the collects answers from them.

## Installation
```bash
$ node init
$ npm install --save express
$ npm install --save passport passport-google-oauth20
$ npm install --save nodemon
$ npm install --save mongoose
$ npm install --save cookie-session
$ sudo npm install -g create-react-app
$ npm install --save concurrently
$ npm install --save stripe
$ npm install --save body-parser
```
nodemon is optional, which helps you to get around reruning the app whenever you change your code.
If you run into an error "Unhandled rejection Error: EISDIR: illegal operation on a directory...",
downgrade npm to 6.4.1 by running npm install npm@6.4.1

```bash
$ rm client/src/index.js client/src/App.js 
$ cd client
client $ npm install --save redux react-redux react-router-dom
client $ npm install --save materialize-css@next
client $ npm install --save axios redux-thunk
client $ npm install --save react-stripe-checkout
```

## Execution
```bash
$ node run dev
```