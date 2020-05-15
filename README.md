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
npm install font-awesome@4.7.0 --save

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

Routing
ng generate module app-routing

Add a "Login" component
ng g component login [the "g" means "generate"]

  Use parameters in routing:
  -- In a method: 
      this.router.navigate(['/dishdetail', dish.id]);
  -- In a component: 
      <a *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]">


Create a Service
1. md .\src\app\services
2. ng generate service services/dish

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

Model-View-Controller [MVC]
Model 
  - Manages the behavior and data of the application domian
  - Responds to requests for information about the state [requests usually come from the view]
  - Responds to instructions to change the state [instructions usually come from the controller]
  - In event-driven systems, notifies the 'observers' [usually views] when information changes so they can react
View
  - Renders the model into a form suitable for interaction - user interface
  - Multiple views can exist for a single model
  - Viewport has a 1:1 correspondence with a display surface and knows how to render it
  - Templates
Controller
  - Receives user input and initiates a response by making calls to models
    - The model keeps track of the application state
  - Accepts input from user and instructs the model and viewport to perform actions based on input
  - Components  

Model View-View-Model [MVVM]
Descendent of MVC
Also called Model-View-Binder
  View Model
    - Abstraction of the view that exposes public properties and commands
    - Declarative data binding

[        Data Biding      ]
|------|          |-------|          |-------|  
| View | <------> | View  | ------>  | Model |     
|      |          | Model | <------  |       |
|------|          |-------|          |-------|
[     Presentation and    ]        [Business Logic]
[     Presentation Logic  ]        [  and Data    ] 

Dependency Injection
  For a component to get a dependency there are 3 ways
    - Create the dependency itself using 'new' operator
    - Look up dependency using a global variable
    - Have dependency passed to it where needed
      - No hard-coding neccessary
      - Testing is feasible
    - Inject using the constructor() { } in the component class:
      constructor(public dialog: MatDialog) { }
  DI involves four roles
    - The service
    - The client
    - The interfaces
    - The injector


  
