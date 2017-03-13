title: Nodejs com o Jigsaw
controls: true
#theme: vtrbtf/cleaver-tw
output: index.html


-- 
# Curtindo um React com seu amigo Jigsaw
-- 
# Saindo do Javascript Old Life 
## Do JQuery Way Of Life até as Modern libs

-- 
# [uma imagem massa que ficou muito grande pra ficar aqui](https://cdn-images-1.medium.com/max/2000/1*VnQdlm34i-1GapsOyflwEA.png)
--
```javascript
var $profileForm = $('#profile-form');
if(isValid) {
  $profileForm.find('.name-field')
    .removeClass(".error-msg")
    .addClass(".valid")
    .css("color", "green");
} else {
 $profileForm.find('.name-field')
    .addClass(".error-msg")
    .removeClass(".valid")
    .css("color", "red");
}
```
--

# After JQuery:

* Angular
* Knockout
* Vue
* React

-- 

# And then...

--
# ES6 rápido pra quem já programou JS
--
## Main Features
* const and let
```javascript
// creating a constant
const MAX = 10;
// creating a variable
let value = 5;
// you can't change the value of a constant
MAX = 5;
// this change is allowed for `let` variables
value = 10;
// creating a constant object
const obj = {};
// You can only change object's attribute
obj.a = 10;
// but you can't reassign new data here
obj = 100;
```
-- 
* Template strings
```javascript
var name = "John Connor";  
console.log(`This is ${name} from the future!`);  
```
-- 
* Arrow Functions
```javascript
// empty arrow-function
const foo() => {};  
// inline arrow-function
const add = (a, b) => {  
    a + b
};
// arrow-function
const compare = (a, b) => {  
    if (a > b) {
        return a;
    } else {
        return b;
    }
};
// arrow-function sharing context
const doSomething = (a, b) => {  
    this.a = a;
    // there is no need to use parenthesis when there is one argument
    const doNewThing = b => {
        this.b = b;
        return this.a + this.b;
    }
}
```
--
* Spread Operators
```javascript
function add(a, b) => {  
    return a + b
};
const values = [1, 2];  
add(...values); // returns 3  
```
-- 
* Classes
```javascript
class Vehicle {  
    constructor(name) {
        this.name = name;
    }
    drive() {
        console.log("Driving the ", this.name);
    }
}
```
-- 
# And other stuff...

http://es6-features.org/

--
# E como rodar isso tudo hoje?
## Dê oi para o Babel (aka "I want it all, and I want it now") 
--
# Node e NPM
--
## node
### An event driven javascript runtime
![node](http://www.baloo.io/images/Node-EventDriven.jpg)
--
# npm
## Say hello to package.json
--
## main commands
* npm install
* npm run script
```javascript
{
  "name": "react-workshop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rodrigomaia17/react-workshop.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/rodrigomaia17/react-workshop/issues"
  },
  "homepage": "https://github.com/rodrigomaia17/react-workshop#readme"
}
```
--
# Show me the code!
* Configurar Ambiente
* Criar uma aplicação que faz um request numa url e imprime o resultado (node)
--
--
# JS Modules (export) 
--
# Webpack 
webpack.config.js
--

```javascript
module.exports = {
  entry: [ './app.js'],
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

```
--
# Show me the code in the browser!
--
# React (Terca)
--
# Not a framework
--
# Components
--
# VirtualDOM 
--
# JSX (sintaxe)
--
# Styles

- Exercicios:
  - Criar um Stateless Component (ReactDOM)

--
# React Components
--
# Props  
--
# State
--
# Component LifeCycle
```javascript
componentWillMount();

componentDidMount();
```
--
* Exercícios:
  * Transformar o stateless components para classes
  * Usar Props
  * Usar Estado
  * Usar um metodo de lifecycle (componentDidMount)

--
# Testing React components e Outros (Quinta)
--
# Enzyme
--
# Shallow vs Mount
--
# Outros
* React-Router
* Redux
--
- Exercícios:
  - Testar o component anterior
