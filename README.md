# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Comandos utiles

- Correr la app local: 
1. npm install
2. npm start

-  Deploy heroku:  
  1. En package.conf quitar en scripts el comando start:"ng serve" (esto es para que use el node server.js)
  2. Luego 
     git add . 
     git commit -m "el mensaje"
     git push heroku master

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
