// java script  ::: 

/*
important question for the java script programminga langauge 
_________________
begnning Modul 
_________________

1. what is java script programming language 
2. what is the feature of the programming language
3. why it is diffirent from other programming language
4. what is the advantage and disadvantage of the programming lanaguage 
5. which type of the program execution enviorment are available 
6. java script it is statically typed or dynamicaly typed languge
#. what is diffirence between  statically typed or dynamicaly typed language
#. what is  variable and rule of the variable name create
#. explain let, var , const keyword ;
#. how many type of data type available into java script explain one by one
#. what is not js.
#. what is console.log()
#. what is java script execution contaxt (IEE )



________________
OPERATORE 
________________
#. operatore 
________________

#. what is operatore in java script and type of operatore in this language
#. what is diffirent between == and === operatore.

__________________________________________
CONDITIONAL , SELECTION ,LOOP STATEMENT 
__________________________________________

#.  what is conditional statement and selection statement
#. what is diffirence between for...in and for...of loop 


__________________
DATA TYPED MODUL
__________________

#. Java script language in which variable are associated to the any data type of not ?
#. what are the different data type present in Javascript.
#. java script in which what is string and there function about discase.
#. what is NaN property iin JavaScript.
#. data type of return type descuse.



_________________
Function Modul
_________________ 
7. what is self Invoking Function Java script 
#. Explain passed by value and passed by reference
#. what is an immediately invoked Function expresions (IIFE)  in Java Script.
#. expain higher order function java script 
#.  Explain call() , apply(), and bind() method.
#. what is arrow function java script
#. Here is a table that summarizes the key differences between arrow functions and regular functions in JavaScript:
#. filter and map about information in java script

_________________________
MEMORY RELATED TOPIC 
_________________________

#. whar is heap and stack memory 
#. what is primary memory and secondary memory 
______________________________________________
OBJECT ORINTED PROGRAMMING LANGUAGE CONCEPT
______________________________________________

#. Expain "this" keyword




_________________________________________________________________________________________
                                    VERY IMPORTANT TOPIC DOM 
_________________________________________________________________________________________

// #. what is DOM
// #. expain the difference between the actual and web page and the DOM
#. how would you manipulate the DOM using javascript (java script selectore ).
#. what is the difference between a static and dynamic DOM . 
#. what are the diffirent ways to select DOM element in javaScript.
#. java script in which type of event and how to use event
#. java script in api for use XMLhttprequest
#. java script in which fetch api about

____________________________________________________________________________________________________
                                         JAVA SCRIPT IN WHICH OOPS
____________________________________________________________________________________________________
#. what is OOPS (object orianted programming language).



_____________________________________________________________________________________________________
                                 In detial interview  Question
                            _____________________________________

#. we can change Math.PI value if yes then how if not then Why no
#. what is the range of Math.min and Math.max

*/

/*

#. we can change Math.PI value if yes then how if not then Why no
Ans. no We cant change Math . PI modul value because Math.PI this is contain 4 property in object


let container = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(container)

Note: if you forgate then above code run and 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
this is return so 4 property is value, writable, enumerable, configurable. 

simple : 
interview for anser
 no sir we cant change Math.Pi value
 because Math.PI module containt 4 property 
 frist property is value. and value is 3.141
 second property is writable value is false
 therd is enumrable  and value is false
 fourth is configurable and value is false 
 this three property value is false that is reason sir we cant change Math.PI value

 __________
 For Demo
 __________

 let container = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(container)

console.log(Object.getOwnPropertyDescriptor(Math, "max"))


 */

console.log(Math.round(3.2))
console.log(Object.getOwnPropertyDescriptor(Math, "round")    )
/*
#. java script in which fetch api about
Ans. The Fetch API is a modern alternative to the XMLHttpRequest (XHR) API for making HTTP requests from JavaScript.
It provides a Promise-based interface that is easier to use and more powerful than XHR.

Note : fetch api it is return promises and that promises return in two step
1. resolve that means api request is sussefully hite on the server 
2. reject state that means api request is not sussecfully hite on the server 

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    document.getElementById('demo').innerHTML = `
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <p>Body: ${data.body}</p>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
  });


  this is a statement of the fetch api very simple code structure as compaire to the XMLHttpRequest

   The fetch() method returns a Promise that resolves to a Response object. The Response object's json() method returns a Promise that resolves to the parsed JSON response. The then() method is used to chain together the two Promises. The first then() method handles the successful response by parsing the JSON response and updating the web page. The catch() method handles any errors that occur.

   fetch("https://api.github.com/users/dhirajmathankar")
   .then((response)=>{
      return response.json()
   }).then((data)=>{
    console.log(data);
   })catch((error)=>{
    console.log(error);
   })
 */

/*
#. java script in api for use XMLhttprequest

Ans. Sure, here is an example of how to use the XMLHttpRequest object in JavaScript to make a GET request to a web server and display the response in a web page:

JavaScript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    document.getElementById('demo').innerHTML = `
      <p>ID: ${data.id}</p>
      <p>Title: ${data.title}</p>
      <p>Body: ${data.body}</p>
    `;
  } else {
    console.error('Error:', xhr.statusText);
  }
};
xhr.send();
Use code with caution. Learn more
This code will create an XMLHttpRequest object, open a GET request to the URL https://jsonplaceholder.typicode.com/posts/1, and then send the request. The onload event handler will be called when the request has completed. If the request is successful (status code 200), the responseText property will be parsed as JSON and the data will be displayed in the web page. Otherwise, an error message will be logged to the console.

Here is an explanation of the code:

const xhr = new XMLHttpRequest();: This line creates an XMLHttpRequest object.
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');: This line opens a GET request to the URL https://jsonplaceholder.typicode.com/posts/1. The first argument is the HTTP method, which in this case is GET. The second argument is the URL of the resource that you want to request.
xhr.onload = function() {: This line defines an event handler that will be called when the request has completed.
if (xhr.status === 200) {: This line checks the status code of the response. If the status code is 200, this means that the request was successful.
const data = JSON.parse(xhr.responseText);: This line parses the responseText property as JSON. The responseText property is a string that contains the response from the server.
`document.getElementById('demo').innerHTML = ': This line updates the innerHTML property of the element with the id "demo" with the data that was parsed from the JSON response.
} else {: This line executes the code block if the status code of the response is not 200.
console.error('Error:', xhr.statusText);: This line logs an error message to the console. The statusText property is a string that describes the error that occurred.
};: This line closes the block of code for the if statement.
xhr.send();: This line sends the request to the server.
I hope this helps!

profile picture
and based on interview question 
View other drafts































Here are some common interview questions related to XMLHttpRequest:

What is XMLHttpRequest and what is its purpose?
XMLHttpRequest is an API for making HTTP requests from a web page. It allows you to send and receive data asynchronously, without reloading the page. This is useful for creating more dynamic and interactive web applications.

How do you create an XMLHttpRequest object?
You can create an XMLHttpRequest object using the new XMLHttpRequest() constructor.

What are the different methods of XMLHttpRequest?
The most common methods of XMLHttpRequest are open(), send(), and onreadystatechange. The open() method initializes a request, specifying the HTTP method (GET, POST, etc.), URL, and whether the request should be asynchronous or not. The send() method sends the request to the server. The onreadystatechange event handler is called when the state of the request changes.

What are the different ready states of XMLHttpRequest?
There are four ready states of XMLHttpRequest:

0: UNSENT: The request is not yet initialized.
1: OPENED: The request has been initialized.
2: HEADERS_RECEIVED: The response headers have been received.
3: LOADING: The response body is being received.
4: DONE: The request has completed.
How do you handle errors with XMLHttpRequest?
You can handle errors with XMLHttpRequest by checking the status property of the object. If the status property is not 200, then an error has occurred. You can then log the error message to the console or display it to the user.

What are some of the security risks associated with XMLHttpRequest?
XMLHttpRequest can be used to make cross-site requests (XSRs), which can be used to steal data or inject malicious code onto a web page. To mitigate these risks, you should only make XSRs to trusted servers. You should also use the withCredentials property of XMLHttpRequest when making XSRs to ensure that cookies are sent with the request.

How do you debug XMLHttpRequest requests?
You can debug XMLHttpRequest requests by using the browser's developer tools. The developer tools allow you to inspect the request and response headers, as well as the timing of the request.

*/


/* 
#. what is DOM 
Ans. Dom stand for Document Object Model and it is automatically create when html page into the browser 

Dom it is abstract representation of the web page and it is automatically create when page load in an browser.

the document object model (DOM) is a cross platform and lnguage independent interface that represent the strcture and content of a web page it allows developers to manipulate the content style behaviore of web page using programming 



                                        WINDOW
                                       ____|______
                                        Document
                                      ____________
                                           |
                                          HTML
                                     ______|_____
                                     |          |
                                    HEAD      BODY    
                             ________|_____    ___|_____
                            |             |    |       |
                            META      TITLE   H1     DIV
                                                    __|_______
                                                    |        |
                                                   <p>     <H3>

                                                    
*/    




/*
// #. expain the difference between the actual and web page and the DOM
Ans. the actual web page is the visul representation of the website that users see in their browser the DOM on the other hand is an abstract representation of the web page that its elements and structure

*/


/*
#. how would you manipulate the DOM using javascript (java script selectore ).
Ans. there are several ways to manipulate the DOM using javaScript some common method 
* getElementById : retrives an element by its unique ID.
* getElementByClassName : retrives all element with a specific class name
* getElementByTagName : Retrives all element with a specific tag name 
* createElement : Create a new dom element
* appendChild : add new child element in other element
* removeChild : remove a child element from another element
* innerHTML : Sets or get the HTML content of an element
* Style : Sets or get the css style properties of an element


 */

/*

#. what is the difference between a static and dynamic DOM . 
Ans. static dom is a DOM that is not updated after the page has loaded 
or static DOM is not allow to update at the run time .
 
     dynamic DOM is a DOM that is update in response to user interactions or ther event
     dynamic dom is allow to update web page at the run time. 
     
*/


/*
#. what are the diffirent ways to select DOM element in javaScript.
Ans. there are seleveral ways to select DOM element in java script Including 

* getElementById : 
selects an element by its uniqe ID

*getElementByClassName : selects all element with a specific class name.

* getElementByTagName : selects all element with a specific tag name 

* querySelectorAll : selects all element that match a css 

*/

/*

#. java script in which type of event and how to use event

Sure, here is an overview of JavaScript events, including inline, external, and internal events, along with examples of how to use them:

JavaScript Events

Events are user interactions or occurrences that cause a web page to respond in a specific way. For instance, clicking a button, hovering over an element, or pressing a keyboard key can all trigger events. JavaScript allows you to handle these events and modify the page's behavior accordingly.

Types of JavaScript Events

There are numerous types of JavaScript events, each corresponding to a specific user interaction or occurrence. Here are some common examples:

click: Occurs when an element is clicked
mouseover: Occurs when the mouse cursor hovers over an element
mouseout: Occurs when the mouse cursor moves out of an element
keydown: Occurs when a keyboard key is pressed
keyup: Occurs when a keyboard key is released
submit: Occurs when a form is submitted
Handling Events

To handle events in JavaScript, you can use event handlers. Event handlers are functions that are executed when a specific event occurs. There are two main ways to attach event handlers to elements:

Inline Event Handling

Inline event handling involves embedding JavaScript code directly into the HTML element using the onclick, onmouseover, onmouseout, and other similar attributes. This approach is straightforward but can make the HTML code less readable and harder to maintain.

Example of Inline Event Handling:

HTML
<button onclick="alert('Button clicked!')">Click me</button>
Use code with caution. Learn more
External Event Handling

External event handling involves defining JavaScript functions separately and then assigning them to event handlers using addEventListener or attachEvent methods. This approach is more organized and maintainable, especially for larger applications.

Example of External Event Handling:

HTML
<button id="myButton">Click me</button>

<script>
  function handleClick() {
    alert('Button clicked!');
  }

  const myButton = document.getElementById('myButton');
  myButton.addEventListener('click', handleClick);
</script>
Use code with caution. Learn more
Internal Event Handling

Internal event handling involves using event delegation to attach event handlers to parent elements and then handle events for descendant elements within the parent. This approach is efficient and reduces the number of event handlers needed, especially when dealing with dynamically generated content.

Example of Internal Event Handling:

HTML
<div id="container">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

<script>
  const container = document.getElementById('container');

  container.addEventListener('click', (event) => {
    const button = event.target;
    alert(`Button clicked: ${button.textContent}`);
  });
</script>

*/


/*
Sure, here's an expanded explanation of API definition, state, information, and interview questions, along with answers to some common interview questions:

API Definition

An API (Application Programming Interface) is a set of rules and specifications that define how two pieces of software can interact with each other. It acts as an intermediary, enabling different applications to exchange data and functionality without requiring detailed knowledge of each other's internal workings. APIs are essential building blocks for modern software development, allowing developers to integrate and extend existing capabilities without reinventing the wheel. They play a crucial role in creating seamless user experiences and enabling collaboration between different software systems.

API States

APIs typically undergo a development lifecycle, passing through various states before reaching maturity and widespread use. These states include:

Draft: The initial stage where the API's design and specifications are being formulated and reviewed internally.

Alpha: The API is made available for limited testing and feedback from a select group of early adopters.

Beta: The API is further refined based on feedback from the alpha phase and is made available for wider testing and evaluation by a broader user base.

Released: The API is officially released for general use and is considered stable and reliable, providing a consistent interface for developers.

Deprecated: As technology evolves and new API standards emerge, an API may become deprecated, indicating that it is no longer actively supported or maintained. Developers are encouraged to migrate to newer versions or alternative APIs.

Retired: Once an API has reached its end-of-life, it is formally retired, and its documentation and support are discontinued. Developers should discontinue using retired APIs and transition to newer alternatives.

API Information

To effectively utilize an API, developers require access to comprehensive information about its functionality, usage, and limitations. This information typically includes:

API Documentation: A detailed guide that explains the API's purpose, scope, and overall architecture.

API Reference: A comprehensive list of all API endpoints, methods, parameters, and data structures, along with their detailed descriptions and usage guidelines.

API Samples: Example code snippets demonstrating how to use the API in various programming languages and frameworks, providing practical examples of API integration.

API Changelog: A record of changes made to the API over time, including new features, bug fixes, and deprecations.

API Interview Questions

Interviewers often assess candidates' understanding of API concepts, design principles, and usage patterns to evaluate their ability to handle API-related tasks. Some common API interview questions include:

What is the difference between an API and a web service?

What are REST and SOAP APIs? Explain their key characteristics and differences.

How do you design an API? What factors should be considered during the design phase?

What are API errors? How do you handle and manage API errors effectively?

How do you test and document an API to ensure its quality and usability?

What are API security considerations? How do you protect an API from unauthorized access and malicious attacks?

Answers to Common API Interview Questions

API vs. Web Service: An API is a broader concept that encompasses any set of rules and specifications for communication between software components. A web service is a specific type of API that adheres to certain standards and protocols, typically utilizing HTTP and XML for data exchange.

REST and SOAP APIs: REST (Representational State Transfer) APIs are characterized by their simplicity, statelessness, and use of HTTP methods for resource manipulation. SOAP (Simple Object Access Protocol) APIs follow a more structured approach, using XML for data representation and emphasizing message-oriented communication.

API Design: API design involves defining the purpose, functionality, and structure of the API, considering factors like resource organization, data formats, authentication mechanisms, and error handling. It's crucial to balance flexibility and standardization to cater to a diverse range of users while adhering to industry best practices.

API Error Handling: API errors are inevitable and should be handled gracefully. Implement comprehensive error codes and messages to provide developers with clear information about the nature of the error and potential solutions. Use HTTP status codes consistently and provide mechanisms for error logging and debugging.

API Testing and Documentation: API testing involves rigorous evaluation of the API's functionality, performance, and security to ensure it meets the desired specifications. Employ various testing techniques, including unit testing, integration testing, and performance testing. Comprehensive API documentation provides clear instructions, usage examples, and reference materials for developers to effectively integrate the API into their applications.

API Security: API security is paramount to protect sensitive data and prevent unauthorized access or malicious attacks. Implement authentication and authorization mechanisms, validate user inputs, sanitize data, and employ encryption techniques to safeguard sensitive

 */


// what is java script langauge ? 
// java script it is a general purpose high level programming language and it is scripting language and it is execute client side 

// feature of the java script programming language : 
// java script it is simple language 
// java script it is object orinted programming 
// java script it is execute client side 
// java script it is secure programming language 


// advantage of the java script language 
// * it is simple 
// * reach library available 
// * execte client side 
// * to the end-user Javascript is quite quick

// distadvantage 

// * execute client side 
// * it is execute after page loadding


// java script execution enviorment 

// local enviorment  - local enviorment in which we can use node js this is provvide system level enviorment for the program execution enviorment. 

// server enviorment - in this inviorment in which java script execute on the sever useing browser. 

/* 
6. java script it is statically typed or dynamicaly typed languge
Ans. Java script it is dynamicaly language typed language In a dynamically typed langauge the type of the variable is check during " run - time " 
*/

/*
#. what is diffirence between  statically typed or dynamicaly typed language
Ans. statically typed language in which chack variable type during " compiled-time "
     dynamically typed language in which chack variable type during " run- time "
*/

/*
#. Java script language in which variable are associated to the any data type of not ?
Ans. Javascript in which variable are not associated to the any data type and java script in which variavle can containt any type of value.
*/

/*
#. what are the different data type present in Javascript. 
Ans. Data type that means it is data storage format that is called data type .
    --- ::: TWO TYPE OF DATA TYPE AVAILABLE ::: ---
    Java script in which present 7 type of data type available 
    * String
    * Symbol
    * Number
    * Null
    * Undefined
    * BigInt
    * Boolean
    * [BB  SS  NN U ]
    
    * String - String it is colletion of the single dimantion character Array Ans java script in which write string into the single and double Quate .

    String creat In java three way avalable 

    let str = "Hello dhiraj"; 
    this is frist way of the create string into the java script and it is store into the string constrant pull

    let str = new String("Hello Dhiraj Mathankar");
    this is second way of the string we can create and it is store into the heap memory.

    let name = 'Dhiraj' ;
    let str = `Hello ${name} Mathankar`;
    this is therd way of the string write and in which we can string containt into the backtisce and using doller signe crully bracate in which pass variable of the name ... 


*/

/*
#. what is NaN property iin JavaScript.
Ans. NaN - "Not a Number"   value property represents the "Not - a - Number and indicates a value that is not a legal number
*/

/* 
#. Explain passed by value and passed by reference
Ans. Java script in which premitive data typre are present passed by value and no-premitive data typre are present passed by reference
*/

/*
#. what is an immediately invoked Function expresions (IIFE)  in Java Script.
Ans. An Immedately Invoked Function (Know as LLFE and pronouced as IIFY) is a function that runs as soon as it is defined 

     __________________________
    |                          |
    |    (function(){          |
    |    //Do Something        |
    |    })();                 |
    |__________________________|

    Note :- This (IIFE) immediately invoked function Expresention function use for the remove global variable polusion for the use this IIFE function. 

    again note : 
    if you want to write 

    (function hello1(){          
        //Do Something        
    })();

    (function hello2(){          
        //Do Something        
    })(); 

    this type of two function write then frist function in which should be use semicolone other whise it will be throw error.

this syntaxt is very much important beauce in this function on ask like what is immediately function invoke

*/

/* 
#. expain higher order function java script 
Ans. Function that operator on other function either by talking them as arguments or by returning them are called are called higher - order function 
*/

/*
#. Expain "this" keyword
Ans. this keyword it is predefined reserved word it is return current class of object 
   
        _______________________________________________________________________________________________
        class Employee {                                                                              |
            let HelloVairable = 23 ;                                                                  |
            constrocture(){                                                                           |
            // java script in predefined keyword available for the constructore it is use for the    |
            defined constructore into the java script langauge .                                      |
                                                                                                      |
            // any programmig language in which constroctore alway invoked when object create .       |
            //                                                                                        |
            }
            function Hello(){                                                                         |
                this.HelloVariable = 23 ;                                                             |
                this keyword it is return the current class of the object ...                         |
            }                                                                                         |
        }                                                                                             |
                                                                                                      |
                                                                                                      |
______________________________________________________________________________________________________|

    this program is a important in which explain the about the this keyword

    ------------------
    this key word
    ------------------

    note :-

    local inviorment in which
    console.log(this);
    output = {}
    this statement return {} this blank object is return node js enviorment local enviorment return 

    browser enviorment in which
    console.log(this)
    return = window object. 
    same code execute on the browser console than it will be return window object noted down 

*/

/*
#.  Explain call() , apply(), and bind() method.
Ans. 
 * it's predefined method in java script 
 * this method invokeds a method (Function) by  specifyying the owner object 
 
   Function say(){
    return "Hello" + this.name ;
   } 
   var obj = {name:"sandy"} ;
   sayHello.call(obj);

*/

/*
#. what is  variable and rule of the variable name create
Ans. variable it is a container that containt containt a value and allow to change there value with respect to time 
rule of the variable name ;
  * variable name should be start with number and character
  * variable name never start with number 
  * variable name in which only use number , character, and underscore
  * and not allow like [hello dhiraj] blank space in variable name it is validation into the any programming language.
*/


/*
#. explain let, var , const keyword ;
Ans. let , var, const it is data type

   let - let in which scope property exist and it is not allow to declare same name of variable function class defined 

   let name = "dhiraj" ;
   name = "hello dhiraj " ;
   above statement is allow this let variable but can't declare same name of variable in same scope

   let name = " dhiraj" ;
   let last_name = "mathankar "

   this is wrong statement 


   var - var in not exist any scope type of property var it is allow to use declare duplicate variable function class name and array name 

   var it is allow to declare same name of variable in same scope 
   like :- 
   var frist_name = "dhiraj";
   var last_name = "mathankar";

    var variable allow this statement dont forgat

    const - const keyword it is not allow to change value of the variable with respect to time 

*/

/*
#. how many type of data type available into java script explain one by one
Ans. data type that means it is data storage format it is defined which type of value store in variable but java script in which data type not associate to the variable 

this is premitive data type 
java script in which 7 type of data type available 
1. string
2. symbol
3. number
4. null
5. bigint
6. boolean
7. undefine 


1. string :- string it is collection of the character single dimantion array .
2. symbol :- symbol it is for the identify the any type symbol value than use it .
3. number :- this data type represent number pasitive and negative both number 
4. null  :- it is not represent black string and 0 both null means empty 
5. bigint :- bigint it is use for the number range of the number value store in this data type 
6. boolean it is use for the store 0 and 1 or true and false value 
no - primitive data type 
1. object 
2. array

*/

/*
#. data type of return type descuse.
Ans.

   data type     return type
    Number       Number
    String       String
    Symbol       Symbol
    Null         object // kind of buge in java script
    Undefined   undefined
    Bigint       Bigint
    boolean      Boolean

    let num = "123" 
    let num_actuall = new Number(num);
    console.log(num_actuall) ;

    output :-  123

    let num = "123D" 
    let num_actuall = new Number(num);
    console.log(num_actuall) ;

    output :-  NaN  (Not A Number)

    note - null it is return object it is kind of buge in java script.
    Number of the range 55 number of the range to store into the number data type 
 */


/*
#. what is operatore in java script and type of operatore in this language 
Ans.  operatore it is a  symbol and this symbol use for the perfome a methametical operation on the operands 

3 type of operatore present in all the programming language.
1. bainary operatore
2. unary operatore
3. ternary operatore 

1. bainary operatore it is perfome on two operands 
   and binary operatore in which 5 type of operatore present :
   1. arithmetical operatore , +  - * / %
   2. logical operatore &&  ||  !
   3. betweese opratore << >> ^ & |
   4. assignment operatore   = %= += -= *= /=
   5. relation operatore  < > <= >= <> !
  
2. unary operatore  :- this type of operatore only perfome on the single operand 
  post increment operatore a++
  pre increment operatore  ++a
  post decriment operatore  a--
  pre decrimnet operatore   --a
  this 4 operatore present in unary operatore in which
  
3. ternary operatore :- ternary operatore it is a single line of conditional operatore 
     condition ? true condition excecute : false condition operation ;
     
     
*/

/*
#. what is diffirent between == and === operatore.
Ans. == operatore this operatore is use for the only compare value
     === this operatore is compaire value and also there data type chack same or not

*/


/*
#. whar is heap and stack memory 
Ans. stack it is work on FIFO consept FIFO stand for frist input frist output on work this memory and it is allocate memory in continues for in data store 
heap :- it is store data in non-continues form in data store like tree and graph form 

*/


/*
#. what is primary memory and secondary memory 
Ans. memory it is a container that is use for the store data in continuse form and non-continuse form 
there are two type of memory present 
1. primary memory
2. secondary memory
 */

/* 
#. what is java script execution contaxt (IEE )
Ans. javaScript Execution contaxt (IEE)

  this keyword provided all ways execution contaxt local and browser enviorment in which 
  
  {} --> Global [Function Contaxt ] 
  
  java script is a single thread process in which everything as an process 
  
  and java script in which three type of excecution contaxt present 
  
  1. Globl Execution contaxt 
  2. functional execution contaxt
  3. eval execution contaxt

  this three type of execution contaxt present in java sript language

  1. globl execution : or global enviorment 
  this - this keyword it is global execution enviorment

  2. memory phase
  like : 

  ----------------------------
  let val1  = 10;
  let val2 = 5 ;
  function AddNumber(){      // this is defination of the function 
    let sum = val1 + val2 ;
    return sum; 
  }

  ----------------------------------

  _____________
  memory phase
  _____________


  val1 -> undefined // java script  in whicih variable execute then always store by default undefined 
  val2 -> undefined 
  AddNumber -> defination
  result1 = undefined
  result2 = undefined

  ___________________
  Execution phase
  ___________________

  val1 <- 10
  val2 <- 5
  
  result1 = addNum() ->   send box (new variable enviorment + execution thread)
              every function for create new block and this block is a combination of the new variable enviormeent + execution thread
  
                         send box
                __________________________

         memory phase                   Execution contaxt
         * val1 -> undefined            * val1 = 10
         * val2 -> undefined            * val2 = 5
         * total -> undefined           * total = 15     and any function return value in global execution enviorment in which
         * delete addnumber function

  result2 = addNum() ->   send box (new variable enviorment + execution thread)
              every function for create new block and this block is a combination of the new variable enviormeent + execution thread
  
                         send box
                __________________________

         memory phase                   Execution contaxt
         * val1 -> undefined            * val1 = 10
         * val2 -> undefined            * val2 = 5
         * total -> undefined           * total = 15     and any function return value in global execution enviorment in which
         * delete addnumber function


         this type of thread process run every function and it is a single thread process ececution use and java script is a thread execution process on work perform


    _________________
    call stack
    ________________


    this is a structure of the 

    l________J
    l________J
    l________J
    l________J
    l________J
    l global J

    as you know stack is a work on FIFO concept in which Frist value execute Frist 

    l_________J
    l_________J
    l_________J
    l_________J
    l_func1()_J
    l global  J

    1. pus func1()


    l_________J
    l_________J
    l_________J
    l_func2()_J
    l_func1()_J
    l global  J

    1. pus func2()

    l_________J
    l_________J
    l_func3()_J
    l_func2()_J
    l_func1()_J
    l global  J

    1. pus func3()

    this type insert element one by one 

    l_________J
    l_________J
    l_________J
    l_func2()_J
    l_func1()_J
    l global  J

    1 pop func3()

    l_________J
    l_________J
    l_________J
    l_________J
    l_func1()_J
    l global  J

    2. pop func2()

    l________J
    l________J
    l________J
    l________J
    l________J
    l global J

    3. pop func1()                  

  */

/*
#.  what is conditional statement
Ans. what is conditional statement :- conditional statement in java scrip and all programming language in which this statement ues for the control flow of program

if(){
    //statement
}

if it is a block of code which is no return type and it is execute when condition is true

if(){
    // statement
}else{
    //statement
}

it is if - else statement it is block of code it is use for the control flow of code and if block execute when condition is true and else block execute when condition false

if(){
    // statement
}else if(){
    //statement
}else{
    //statement
}


if -else if - else - this statement allow to apply multipal condition 



_____________________
selection statement
_____________________

selection statement it is work on expresion and expresen value match to the case then case will execute other wish default case present then execute this statement and java script in which allow all data type of value like staring, number, character, float value

*/

/*
#. what is diffirence between for...in and for...of loop 
Ans. 
In JavaScript, both for...of and for...in loops are used to iterate over collections of data. However, there are some key differences between the two:

	for...of loop
    Iterates over	- Values of an iterable object 
    Use cases	- Arrays, strings, maps, etc.
    Order	- Guaranteed to iterate over the values in the same order that they appear in the iterable object
    Access to indices -	Does not provide access to indices
    
    for...in loop
    Iterates over - Enumerable properties of an object
    Use cases	-	Objects
    Order	- May not iterate over the properties in the same order that they appear in the object
    Access to indices	-	Provides access to indices
    

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    arr.forEach((iteam, index, arr)=>{
        console.log(iteam, index, arr);
    })


    this foreach loop predefined object and it is itself itrarate to the array and string and by default null parameter take and orther way this take three parameter ok.... 
    
*/

/*

#. what is arrow function java script ?
Ans. Arrow functions, also known as lambda functions, were introduced in ES6 (ECMAScript 2015). They are a concise way to write functions, and they have several advantages over traditional function syntax.

Here are some of the benefits of using arrow functions: 

Conciseness: Arrow functions can be written in a shorter and more concise way than traditional functions. This can make your code more readable and easier to maintain.
Lexical this: Arrow functions inherit their this binding from the enclosing scope. This can be useful when dealing with event listeners or callback functions, where the value of this can be uncertain.
No binding to this, arguments, or super: Arrow functions do not have their own bindings to this, arguments, or super. This means that they cannot be used as constructors or methods.


(x, y) => x + y;

this is syntax 

but in which have more important topic is implicite and explicite return type 

notes (x,y)=>(x+y ) this is implicite return value this arrow function
notes (x,y)=>{return x+y } this function in which should be return explicite mandetary return write .
*/


/*

#. 
Here is a table that summarizes the key differences between arrow functions and regular functions in JavaScript:
 

Feature         	Arrow functions	        Regular functions
Concise syntax	        Yes	                    No
Lexical this	        Yes	                    No
No binding to this, arguments, or super	Yes	No

*/


/*

#. filter and map about information in java script
Ans. Both filter() and map() are array methods in JavaScript that are used to transform arrays. However, they have different purposes and work in different ways.

**filter() is used to create a new array that contains only the elements of the original array that pass a certain test. The test is a function that takes an element of the array as an argument and returns true if the element should be included in the new array, and false otherwise.

For example, the following code snippet filters an array of numbers to only include the numbers that are even:

JavaScript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


Use code with caution. Learn more
**map() is used to create a new array that contains the results of applying a function to each element of the original array. The function takes an element of the array as an argument and returns a value. The value returned by the function is added to the new array.
*/


/*

-------------------------------------------------------------------------------------------------------
#. what is OOPS (object orianted programming language).
Ans. oops stand for object orinted programming langauge it is use for the achive modulare programming or structure programming langauge 

there are 4 main pillare in oops 
1. Encapsulation
2. Inharitance
3. Abstraction
4. polimorphism

java script in which class keyword available and also constructore keyword use for the create constructore

exemple of the class structure  : 

class 

class : class it is a blue print of an object or also called it is logical structure of an object

class HelloClaass{
  name = 32 ;
  getMethod(){
    console.log("this is your getMethod")
    return 12 ;
  }
}
const obj1 = new HelloClaass();
console.log(obj1.getMethod());

object : object it is real-word entity and entity that means which have a state and behaviore 
state it is represent = attribute of an class.
behaviore it is represent = method of an class.

what happend  we not use new keyword when we create object.
Note : java script is not allow to create object without new keyword 
but incase you have create a object without using new keyword


class TemporaryClass{
  name ;
  age; 
  location ;
  constructore(name, age, location){
   this.name = name ;
   this.age = age ;
   this.location = location ;
   return this ;
  }
 }
const object1 = TemporaryClass('dhiraj', 23, 'multai');
const object2 = TemporaryClass('kusum', 34, 'bhopal');
console.log(object1);
object1 but return value in console.
{name:'kusum', age:34, location:'bhopal' }




::-> this program throw error but incase this work perform or execute this program then value override this is problem
and at present V8 engine is not allow to create object without new .




__________________
INHARITANCE
_________________
type of inharitance 

1. Single Inharitance
2. Multipal Inharitance
3. Multilevel Inharitance
4. Hybrite Inharitance
5. Hirachical Inharitance


SECOND CLASS IN WHICH YOU CREATE CONSTRUCTOR() than must be write super() constructor it is mendatory.
class class1{
  constructor(){
    console.log("Hello Dhiraj");
  }
}

class Class2 extends class1{
  constructor(){
    super();
    console.log('Hello Dhiraj2')
  }
}

console.log(new Class2());


______________
Polymorphism
______________

Polymorphism : polymorphism that means which have a polymorphic nature one object mulltipal form 


abstraction : 

abstraction that means hilight set of servise by hyding there internal implimantation

encapsulation : 
it is combination of the data hyding and data banding that is called encapsulation.

-------------------------------------------------------------------------------------------------------
*/


/*
Function interview modul 

what is self Invoking Function Java script 
Ans - Without beging request a self invoking expression is automatically invoked if a function expression is follwed by () it will execute automatically A function declaration cannot be invoked by it self
*/



// console.log("Hello Dhiraj Mathankar Nice Brother");

