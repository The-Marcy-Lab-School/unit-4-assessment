# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**
*`this` refers to the global object or window in the browser or node.js environment

**2. What will the following code produce? Why?** 

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```
*console.log(add()) will log NaN and this is becuase the variables ‘a’ and ‘b’ were decalred with let in the global scope, and variables declared with let or const do not become properties of the global scope. 
*console.log(c.add()) will log 0. This is because 


**3. What is a closure? How does it allow us to create private data?**
*A closure is a function inside of another function. Closures create an enclosed scope that can only be accessed by the function or object method returned by the function, which in return creates private data because of the enclosed scope. Closures also have access to data and the out functions’ scope and the global scope. 

**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben") )
  ```
*console.log( createGreeting("Hello") ) will only return a function, the function ‘createGreeting’ returns a function. When  console.log( createGreeting("Buona sera")("Reuben") ) is logged wi will return ‘Buona sera, Reuben!’. This is becuase the function ‘createGreeting’ takes in a parameter but the function returned in ‘createGreeting’ will return a string taking in a second parameter. 


**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**
*Encapsulation is enclosing data so that is is private. Closures are an example of encapsulating data. Constructors can encapsulate data because we can hide data by only being able to access it through methods or prototypes. 


**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**
* An object’s prototype are the methods available to that object. The prototype property of a function is the property where all the prototype live. 

**7. What is polymorphism? Illustrate using code.**
*Polymorphism is being able to share properties from one class to another with the use of inheritance. Polymorphism is creating subclasses that extend from a superclass to create a more specific constructor from them. 

```javascript

class School{
  constructor(name, location, population){
    this.name = name;
    this.location = location;
    this.population = population; 
  }
}

class HighSchool extends School{
  constructor(name, location, population){
    this.grades = 4;
    this.type = high;
  }
}

```
