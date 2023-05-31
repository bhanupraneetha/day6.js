// A self-invoking function, also known as an immediately-invoked function expression (IIFE), is a JavaScript function that is executed immediately after it is defined.
// It is often used to create a private scope for variables and functions, avoiding naming conflicts with other parts of the code.
//A self-invoking function, also known as an immediately-invoked function expression (IIFE), is a JavaScript function that is executed immediately after it is defined. It is commonly used to create a private scope and avoid naming conflicts with other parts of the code.

// To define and invoke a self-invoking function, you wrap the function in parentheses (function() { ... })() and include any code you want to execute immediately within the function body.

// A private scope refers to a scope where variables and functions are not accessible from the outside. Self-invoking functions create a private scope, allowing you to define variables and functions without polluting the global scope.

// Using a self-invoking function for variable and function encapsulation helps prevent naming conflicts and keeps the code modular and organized. It allows you to define private variables and functions that are inaccessible from outside the function.

// Yes, self-invoking functions can accept parameters. You can pass arguments to the function by placing them inside the parentheses after the closing parentheses of the function definition. For example: (function(name) { ... })("John");

// Self-invoking functions create a new scope, which helps prevent naming conflicts. Variables and functions defined inside a self-invoking function are not accessible from outside the function unless explicitly exposed.

// Yes, it is possible to return a value from a self-invoking function. You can use the return statement within the function to specify the value you want to return. For example: return 10;

// A named self-invoking function is one that has a name assigned to it, while an anonymous self-invoking function does not have a name. Named self-invoking functions can be useful for self-reference or for debugging purposes.

// Self-invoking functions are synchronous in nature. They execute immediately when they are defined and return control to the surrounding code once their execution is complete.

// The use of self-invoking functions contributes to code modularity and organization by encapsulating variables and functions within a private scope
// This helps prevent naming conflicts and allows you to create self-contained modules that can be easily reused.

//1....ADDING NUMBERS USING IIFE

const sum = (function(a, b) {
    return a + b;
  })(5, 3);
  
  console.log(sum); // Output: 8


  //2....SUBTRACTING NUMBERS USING IIFE

  const subtraction = (function(a, b) {
    return a - b;
  })(10, 4);
  
  console.log(subtraction); // Output: 6
  
  

   //3....MULTIPLYING NUMBERS USING IIFE

   const multiplication = (function(a, b) {
    return a * b;
  })(6, 7);
  
  console.log(multiplication); // Output: 42

   //4....DIVIDING NUMBERS USING IIFE

   const division = (function(a, b) {
    return a / b;
  })(20, 5);
  
  console.log(division); // Output: 4



//5....  FINDONG VEVEN NUMBERS

(function() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  console.log(evenNumbers);
})();


//6.....FINDING ODD

(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const oddNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
      }
    }
  
    console.log(oddNumbers);
  })();

  
  // 7....FINDING NUMBERS DIVISIBLE BY 5


  (function() {
    const numbers = [10, 23, 45, 56, 75, 82, 95, 100];
    const divisibleBy5 = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) {
          divisibleBy5.push(numbers[i]);
        }
      }
    
      console.log(divisibleBy5);
    })();




    //Closure functions, also known as closures, are functions that have access to variables from their outer
     //(enclosing) scope even after the outer function has finished executing. In other words,
      //a closure is created when a nested function references variables from its containing function, allowing it to
      // "remember" those variables and maintain access to them.
  


      //FINDING EVEN IN CLOUSER 
      function findEvenNumbers(numbers) {
        var evenNumbers = [];
      
        function isEven(number) {
          return number % 2 === 0;
        }
      
        for (var i = 0; i < numbers.length; i++) {
          if (isEven(numbers[i])) {
            evenNumbers.push(numbers[i]);
          }
        }
      
        return evenNumbers;
      }
      
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var evenNumbers = findEvenNumbers(numbers);
      
      console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

      
      // FINDING ODD IN CLOUSER 


      function findOddNumbers(numbers) {
        var oddNumbers = [];
      
        function isOdd(number) {
          return number % 2 !== 0;
        }
      
        for (var i = 0; i < numbers.length; i++) {
          if (isOdd(numbers[i])) {
            oddNumbers.push(numbers[i]);
          }
        }
      
        return oddNumbers;
      }
      
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var oddNumbers = findOddNumbers(numbers);
      
      console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
      

      // ADDITION IN CLOUSER

      function add(x) {
        return function(y) {
          return x + y;
        };
      }
      
      var addFive = add(5);
      console.log(addFive(3)); // Output: 8

      
      //SUBTRATING

      function subtract(x) {
        return function(y) {
          return x - y;
        };
      }
      
      var subtractThree = subtract(3);
      console.log(subtractThree(5)); // Output: -2
//MULTI 


function multiply(x) {
    return function(y) {
      return x * y;
    };
  }
  
  var multiplyByFour = multiply(4);
  console.log(multiplyByFour(6)); // Output: 24


  //DIVISION

  function divide(x) {
    return function(y) {
      return x / y;
    };
  }
  
  var divideByTwo = divide(10);
  console.log(divideByTwo(5)); // Output: 2



  // CURRYNG


//   currying is used to transform functions with multiple arguments into a sequence of functions, each taking a single argument. The outer function takes the first argument and returns an inner function that takes the second argument and performs the desired operation.

// By currying these functions, you can call them partially with the initial argument and receive a new function that can be called with the remaining argument(s) to perform the operation.

// When you run these examples, you will see the respective outputs based on the operands and operations performed.

// Currying provides flexibility and reusability by allowing you to create specialized functions with partial application of arguments.



//ADDING USING CURRYING
  function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  console.log(add(5)(3)); // Output: 8


  // SUB

  function subtract(x) {
    return function(y) {
      return x - y;
    };
  }
  
  console.log(subtract(3)(5)); // Output: -2

  

  // MULTI

  function multiply(x) {
  return function(y) {
    return x * y;
  };
}

console.log(multiply(4)(6)); // Output: 24



// DIVSION

function divide(x) {
    return function(y) {
      return x / y;
    };
  }
  
  console.log(divide(10)(5)); // Output: 2
  
  

  
 // ANONYMOUS FUNCTIONS

//  An anonymous function, also known as a lambda function or a function literal, is a function that is defined without a specific
//   name. Instead of using a function name, an anonymous function is defined directly as an expression.

// In programming, anonymous functions are often used when you need to create a function on the fly or when 
// you want to pass a function as an argument to another function. They allow you to define a function inline without the need for a separate function declaration. 

// ADDITION 


var add = function(x, y) {
    return x + y;
  };
  
  console.log(add(5, 3)); // Output: 8

  
  // SUB 

  var subtract = function(x, y) {
    return x - y;
  };
  
  console.log(subtract(5, 3)); // Output: 2

  
  // MULTI
  var multiply = function(x, y) {
    return x * y;
  };
  
  console.log(multiply(5, 3)); // Output: 15

  
  // MULTIPLES OF 5


  var numbers = [1, 5, 10, 15, 20, 25, 30];

var multiplesOfFive = numbers.filter(function(number) {
  return number % 5 === 0;
});

console.log(multiplesOfFive); // Output: [5, 10, 15, 20, 25, 30]



// FIND EVEN NUMBERS

const numbers = [1, 2, 3, 4, 5];

const allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // Output: false


//EVEN NUMBERS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// EVEN NUMBERS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(number) {
  if (number % 2 === 0) {
    console.log(number);
  }
});// OUTPUT 2,4,6,8,10




//ARROW FUNCTIONS

//ADDING

const addition = (a, b) => {
    return a + b;
  };
  console.log(addition(5, 3)); // Output: 8


  //SUB

  const subtraction = (a, b) => {
    return a - b;
  };
   console.log(subtraction(10, 4)); // Output: 6

  
  //DIVISION

  const division = (a, b) => {
    return a / b;
  };
  console.log(division(15, 3)); // Output: 5

  
  //MULTI

  const multiplication = (a, b) => {
    return a * b;
  };
  
  
  console.log(multiplication(2, 6)); // Output: 12
  
  
// ARROW FUNCTIONS

// An arrow function in JavaScript is a concise way to define a function using a streamlined syntax introduced in ECMAScript 6 (ES6).
//  It provides a more compact and expressive way to write functions compared to traditional function expressions.


//ADD
const addition = (a, b) => a + b;

// Usage example
console.log(addition(5, 3)); // Output: 8


//SUB

const subtraction = (a, b) => a - b;

// Usage example
console.log(subtraction(10, 4)); // Output: 6


// MULTI

const multiplication = (a, b) => a * b;

// Usage example
console.log(multiplication(2, 6)); // Output: 12




//DIVSION

const division = (a, b) => a / b;

// Usage example
console.log(division(15, 3)); // Output: 5






