# ConFusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Commands for Configuration in the Coursera Excercises:
cd F:\Users\Allan\Documents\Learning\Coursera\FullStack\Angular
npm install -g @angular/cli@6.2.1
ng new conFusion --style=scss
npm install
ng serve --open

npm install @angular/material@6.4.7 --save
npm install @angular/cdk@6.4.7 --save
npm install --save @angular/animations@6.1.7
npm install --save hammerjs@2.0.8
npm install --save @angular/flex-layout@6.0.0-beta.18

##More Notes:
Generate a component: <<component name>>

Set up a new component
1. Update the component html file to include name of component:
  Example: <app-menu></app-menu>
2. For this excercise a class to define data was created: .\src\app\shared\dish.ts
3. Update the component class file. Example: .\src\app\menu\menu.component.ts
4. Update the component.html file: Example: .\src\app\menu\menu.component.html
5. Update the module: Example: .\src\app\app.module.ts
6. Update the styles.scss

Directives
-- Tell Angular how to render the templates in the DOM
-- Can be defined in a class using the @Directive decorator
-- a component is a 'special kind' of directive with a template associated with it

Structural Directive
- Add, remove, replace objects in the DOM
- Apply structural directive to a host element in the DOM and it's descendents
  --NgIf, NgFor, NgSwitch
  --<mat-list-item *ngFor="let dish of dishes">

Attribute Directives


  
