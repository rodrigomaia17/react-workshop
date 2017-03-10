title: LambdaCD
controls: true
#theme: vtrbtf/cleaver-tw
output: index.html

-- 
# Saindo do Javascript Old Life 
## Do JQuery Way Of Life até Modern libs  

--
```javascript
var $profileForm = $('#profile-form');
if(isValid) {
  $profile-form.find('.name-field').removeClass(".error-msg").addClass(".valid").css("color", "green");
} else {
 $profile-form.find('.name-field').addClass(".error-msg").removeClass(".valid").css("color", "red");
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
# ES6
--
## Main Features
* const and let
```javascript`
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
# Node e NPM
--
## node
### An event driven javascript runtime
![node](http://www.baloo.io/images/Node-EventDriven.jpg)
--
# npm
## Say hello to package.json
--

### Npm scripts
## Configurar Ambiente
### NVM:
## JS Modules (export) 
## Compatibilidade com Navegadores (Babel) 
## Webpack 
### Converter JS antigo para ES6

-- 

- Trazer um HTML pronto
- Exercícios:
  - Aplicacao com JS antigo e Lodash para converter para ES6 (nao precisa ser no Browser, node mesmo) 

## React (Terça - 9:30 as 10:30)
### Definição e Motivação 
### VirtualDOM 
### JSX (sintaxe)
### Styles

- Exercicios:
  - Criar um Stateless Component (ReactDOM)

## React Components (Quarta - 9:30 as 11:30)
### Props  
### State
### Component LifeCycle (componentDidMount, componentWillUpdate)

- Exercícios:
  - Transformar o stateless components para classes
  - Usar Props
  - Usar Estado
  - Usar um metodo de lifecycle (componentDidMount)

## Testing React components e Outros (Quinta - 9:30 as 10:30)
### Enzyme
#### Shallow vs Mount
### Outros
#### React-Router
#### Redux

- Exercícios:
  - Testar o component anterior

## TODO Reservar a Luca Bastos
## TODO Enviar Invites