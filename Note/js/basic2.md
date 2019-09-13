<style>
    a {
        background-color: PaleTurquoise;
        padding: 1px;
        border-radius: 5px;
    }
    em {
        font-style: normal;
        color: DeepPink;
    }
    i {
        font-style: normal;
        color: grey;
    }
</style>

## Basic2

####Regular Expression
<i>a sequence of characters that forms a search pattern.</i> ```/pattern/modifiers;```
//* can be a single character, or a more complicated pattern.
//* can be used to perform all types of <u>text search</u> and <u>text replace</u> operations.  
```js
var patt = /w3schools/i; 
// "/w3schools/i"  is a regular expression. 
// "w3schools"  is a pattern (to be used in a search).
// "i"  is a modifier (modifies the search to be case-insensitive).
```
1. <em>String Methods</em>:
    - <u>```search()```</u>: <i>searches a string for a specified value and returns the position of the match.</i>
        using string search() with a <u>string</u>:
        ```js
        var str = "Visit W3Schools!";
        var n = str.search("W3Schools");
        ```
        using string search() with a <u>regular expression</u>:
        ```js
        var str = "Visit W3Schools";
        var n = str.search(/w3schools/i);
        // returns 6
        ```
    - <u>```replace()```</u>: <i>replaces a specified value with another value in a string.</i>
        using replace() with a <u>string</u>:
        ```js
        var str = "Visit Microsoft!";
        var res = str.replace("Microsoft", "W3Schools");
        ```
        using replace() with a <u>regular expression</u>:
        ```js
        var str = "Visit Microsoft!";
        var res = str.replace(/microsoft/i, "W3Schools");
        ```
2. Regular expression <em>Modifiers</em>: <i>perform searches.</i>
    |modifier|description|
    | - | - |
    | i | Perform case-insensitive matching |
    | g | Perform global match (find all matchs) |
    | m | Perform multiline matching |
    ```js
    function myFunction() {
    var str = "Is this all there is?";
    var result1 = str.match(/is/i);
    var result2 = str.match(/is/g);
    var result3 = str.match(/is/m);
    document.getElementById("demo").innerHTML = result;
    }
    // return Is
    // return is,is
    // return is
    ```
    ```js
    function myFunction() {
    var str = "\nIs th\nis it?";
    var result1 = str.match(/is/i);
    var result2 = str.match(/is/g);
    var result3 = str.match(/is/m);
    document.getElementById("demo").innerHTML = result;
    }
    // return Is
    // return is
    // return is
    ```

3. Regular expression <em>Patterns</em>: <i>find a range of characters.</i>
    - <u>Brackets</u>:
        |bracket|description|
        | - | - |
        | [abc] | Find any of the characters between the brackets |
        | [0-9] | Find any of the digits between the brackets |
        | (x\|y) | Find any of the alternatives separated with \| |
    - <u>Metacharacters</u>: <i>characters with a special meaning.</i>
        |metacharacter|description|
        | - | - |
        | \d | Find a digit |
        | \s | Find a whitespace character |
        | \b | Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b |
        | \uxxxx | Find the Unicode character specified by the hexadecimal number xxxx |
    - <u>Quantifiers</u>: <i>define quantities.</i>
        |quantifier|description|
        | - | - |
        | n+  | Matches any string that contains at least one n |
        | n* | Matches any string that contains zero or more occurrences of n |
        | n? | Matches any string that contains zero or one occurrences of n |
4. Regular expression <em>Object</em>:
    -<u>```test()```</u>: <i>searches a string for a pattern, and returns true or false, depending on the result.</i>
    eg. searches a string for the character "e":    
    ```js
    /e/.test("The best things in life are free!");
    // returns "true"
    ```
    -<u>```exec```</u>: <i>searches a string for a specified pattern, and returns the found text as an object.</i>
    eg. searches a string for the character "e": 
    ```js
    var obj = /e/.exec("Best things are free!");
    document.getElementById("demo").innerHTML = obj[0]+" position:"+obj.index +" text:"+obj.input;
    // obj[0] = obj = e;
    // obj.index = first obj (e) occurs;
    // obj.input = ("text balabala");
    ```

#### Errors
1. <em>try</em> and <em>catch</em>: 
    <u>```try```</u>: <i>define a block of code to be tested for errors while it is being executed.</i>
    <u>```catch```</u>: <i>define a block of code to be executed, if an error occurs in the try block.</i>
    ```js
    try {
        adddlert("Welcome guest!");
    }
    catch(err) {
        document.getElementById("demo").innerHTML = err.message;
    }
    // returns: adddlert is not defined
    ```
2. <em>throw</em>: <i>create a custom error message.</i>
    ```js
    // input validation example:
    <input id="demo" type="text">

    // HTML validation example:
    // <input id="demo" type="number" min="5" max="10" step="1">

    <p id="p1"></p>

    <script>
    function myFunction() {
        var message, x;
        message = document.getElementById("p1");
        x = document.getElementById("demo").value;

        try { 
            if(x == "") throw "empty";
            if(isNaN(x)) throw "not a number";
            x = Number(x);
            if(x < 5) throw "too low";
            if(x > 10) throw "too high";
        }
        catch(err) {
            message.innerHTML = "Input is " + err;
        }
    }
    </script>
    ```

3. <em>finally</em>: <i>lets you execute code, after try and catch, regardless of the result.</i>
    ```js
    function myFunction() {
        var message, x;
        message = document.getElementById("p01");
        message.innerHTML = "";
        x = document.getElementById("demo").value;
        try { 
            if(x == "") throw "is empty";
            if(isNaN(x)) throw "is not a number";
            x = Number(x);
            if(x > 10) throw "is too high";
            if(x < 5) throw "is too low";
        }
        catch(err) {
            message.innerHTML = "Error: " + err + ".";
        }
        finally {
            document.getElementById("demo").value = "";
        }
    }
    ```
4. <em>Error Object</em>: <i>built in error object that provides error information when an error occurs. </i>
The error object provides two useful properties: <u>name</u> and <u>message</u>.
    |Error name|Error message|
    |-|-|
    |EvalError|An error has occurred in eval() function|
    |RangeError|A number "out of range" has occurred (eg. A number cannot have 500 significant digits)|
    |RefereceError|An illegal reference has occurred (use / reference a variable that has not been declared)|
    |SyntaxError|A syntax error has occrred (eg. eval("alert('Hello)"); Missing ' will produce an error)|
    |TypeError|A type error has occurred (eg. You cannot convert a number to upper case)|
    |URIError|An error in encodeURI() has occrred (eg. decodeURI("%%%"); You cannot URI decode percent signs)|

#### Scope
<i>Each function creates a new scope. Scope determines the <u>accessibility (visibility) of variables</u>.</i>

1. <em>Local scope</em>:<i> Variables declared within a function.</i>
Local variables have <u>Function scope</u>: They can only be accessed from within the function.
//* Local variables are created when a function starts, and deleted when the function is completed.

2. <em>Global scope</em>:<i> Variables declared outside a function.</i>
Global variables have <u>Global scope</u>: All scripts and functions on a web page can access it. 
//* In JavaScript, objects and functions are also variables.
    - <u>Window Object</u>: <i>In HTML, the global scope is the window object. All global variables belong to the window object.</i>
    //* Do NOT create global variables unless you intend to. Global variables (or functions) can overwrite window variables (or functions).
        ```js
        var carname = "Volvo";

        // code here can use window.carname
        ```
    - <u>Automatically Global</u>:<i> If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.</i>
        ```js
        myFunction();

        // carname becomes a global variable

        function myFunction() {
        carname = "Volvo";
        }
        ```
    - <u>Strict Mode</u>: Global variables are not created automatically in "Strict Mode".
   
####Strict Mode
<i>```"use strict";``` defines to the <u>beginning of a script / function</u> that JS code should be executed in "strict mode".</i>
//* changes previously accepted "bad syntax" into real errors: octal numeric literals; octal escape characters; 
using a variable / object without declaring it; deleting a variable / object; duplicating a parameter name; [Details](https://www.w3school.com.cn/js/js_strict.asp)
```js
"use strict";
x = 3.14;           // throw an error
y = {p1:10, p2:20}; // objects are variables too, cause an error
```

#### Hoisting
<i>Hoisting is JavaScript's default behavior of <u>moving declarations to the top</u>.</i>
//* JavaScript only hoists <u>declarations (var x;)</u>, <u>not initializations (var x = 10;)</u>.
//* Variables and constants declared with ```let``` or ```const``` are <em>not hoisted</em>! 
//* They provides <em>Block Scope</em>: <i>variables declared inside a block{} can NOT be accessed from outside the block.</i>
1. <u>```let```</u>:
    - <em>Declare</em>: 
    ```js
    { var x = 2; }
    // (variables declared with var can NOT have Block Scope)
    // x can be used here

    { let x = 2; }
    // (variables declared with let can have Block Scope)
    // x can NOT be used here
    ```
    - <u>Loop Scope</u>:
    ```js
    var i = 5;
    for (let i = 0; i < 10; i++) { /* some statements */ }
    // Here i is 5
    ```
    - <em>Redeclaring</em>: allowed in different block.
    ```js
    var x = 2;       // Allowed
    let x = 3;       // Not allowed
    {
        let x = 4;   // Allowed
        var x = 5;   // Not allowed
    }
    ```
    - <u>Hoisting</u>:
    ```js
    //you can NOT use carname here
    let carname;

    //you CAN use carname here
    var carname;
    ```
2. <u>```const```</u>:
    - <em>Declare</em>:
    //* It does NOT define a constant value. It defines a <u>consant reference</u> to a value.
    ```js
    const PI;           // must be assigned a value when they are declared
    PI = 3.14159;       // give an error

    cost PI = 3.14159;  // correct
    ```
    - <em>Reassign</em>:
        - <u>Primitive Value</u>: can NOT change.
            ```js
            const PI = 3.14159; // can NOT be reassign

            PI = 3.14;          // give an error
            PI = PI + 10;       // give an error
            ```
        - <u>Object properties</u>: can change.
            ```js
            const car = { type:"Fiat", Model:"500", color:"white"};

            car.color = "red";      // can change a property
            car.owner = "Johnson";  // can add a property
            ```
        - <u>Array elements</u>: can change.
            ```js
            const car = ["Saab", "Volvo", "BMW"];

            cars[0] = "Toyota"; // can change an element
            car.push("Audi");   // can add an element
            ```
    - <em>Redeclaring</em>: allowed in different block.
    ```js
    const x = 2;    // allowed   
    const x = 3;    // not allowed
    x = 3;          // not allowed
    var x = 3;      // not allowed
    let x = 3;      // not allowed
    {
        const x = 3; // allowed
    }
    ```
    - <u>Hoisting</u>: NOT hoisted to the top, can NOT be used before it is declared.
    
#### This
<i>```this``` refers to <u>the object it belongs to</u>.</i>

```this``` has different values depending on where it is used:
1. In a <em>method</em>, ```this``` refers to the <u>owner object</u>.
    ```js
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        } // refers to person.fristName and person.lastName
    } ;
    ```
2. <em>Alone</em>, ```this``` refers to the <u>global object</u>.
    ```js
    var x = this;
    document.getElementById("demo").innerHTML = x;
         // In a browser window, the Global Object is [object Window]
    ```
3. In a <em>function</em>, ```this``` refers to the <u>global object</u>.
    ```js
    function myFunction(){
        return this;
    }    // In a browser window, the Global Object is [object Window]
    ```
4. In a <em>function</em>, in <em>strict mode</em>, ```this``` is <u>undefined</u>.
5. In an <em>event</em>, ```this``` refers to the <u>element handler</u> that received the event.
    ```js
    <button onclick="this.style.display='none'">Click to Remove Me!</button>
         // refers to the HTML element that receive the event (button)
    ```
6. Methods like <em>call()</em>, and <em>apply()</em> can refer ```this``` to <u>any object</u>.
//* call() and apply() are predefined JS methods.
    - ```call()```: <i><u>takes arguments seperately</u></i>.
        ```js
        var person = {
            fullName: function() {
                return this.firstName + " " + this.lastName + " " + city + "," + province;
            }
        }
        var person1 = {
            firstName:"John",
            lastName: "Doe",
        }
        person.fullName.call(person1, "toronto", "ontario");  
            // returns "John Doe toronto, ontario"
        ```
    - ```apply()```: <i><u>takes arguments as an array</u></i>. 
        ```js
        var person = {
            fullName: function(city, country) {
                return this.firstName + " " + this.lastName + " " + city + "," + country;
            }
        }
        var person1 = {
            firstName:"John",
            lastName: "Doe"
        }
        person.fullName.apply(person1, ["toronto", "ontario"]);
        ```

#### Arrow Function (ES6)
1. <i>Allows us to write <em>shorter function stntax</em>. </i>
    ```js
    // before:
    hello = function(val) { 
        return "Hello" + val; 
    }

    // after: 
    hello = (val) => {
        return "Hello" + val;
    }

    //shorter: (if function has 1 statement & statement returns a value)
    hello = val => "Hello World!" + val;
    ```
2. <u>```This```</u>: <i>always represent the <u>object that defined the arrow function</u>.</i>
//* returns the <u>window object</u> twice, because window object is the <em>"owner" of the function</em>.
//* If normal function, returns 2 different objects (<u>window and button</u>).
    ```js
    //Arrow Function:
    hello = () => {
    document.getElementById("demo").innerHTML += this;
    }

    //The window object calls the function:
    window.addEventListener("load", hello);

    //A button object calls the function:
    document.getElementById("btn").addEventListener("click", hello);
    
    // returns [object Window][object Window]
    ```

#### Classes (ES6)
<i>a type of <u>function</u>. </i>
1. Instead of using```function``` to <em>initialize</em> it, we use keyword```class```; <em>properties</em> is assigned inside```constructor()``` method. 
    ```js
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
    }

    mycar = new Car("Ford");

    document.getElementById("demo").innerHTML = mycar.carname;
    ```
2. Make your <em>own methods</em>, instead of ```constructor```, syntax should be familiar:
    ```js
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        present(x) {
            return x + ", I have a " + this.carname;
        }
    }

    mycar = new Car("Ford");

    document.getElementById("demo").innerHTML = mycar.present("Hello");
    // returns "Hello, I have a Ford"
    ```
3. <em>Static Methods</em>: defined on the class itself, and not on the prototype. Means <u>can NOT call it on object(mycar), but on class(Car)</u>:
    ```js
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        static hello(x) {
            return "Hello!" + x.carname;
        }
    }

    mycar = new Car("Ford");

    document.getElementById("demo").innerHTML = mycar.hello(mycar);
    // cause an error

    document.getElementById("demo").innerHTML = Car.hello(mycar);
    // correct
    ```
4. <em>Inheritance</em>: use keyword ```extend```. A class inherits all the methods from another class.
    ```js
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    mycar = new Model("Ford", "Mustang");
    document.getElementById("demo").innerHTML = mycar.show();
    // returns "I have a Ford, it is a Mustang"
    ```
5. <em>Getters</em> and <em>Setters</em>: do sth with the value before returning them or before set them.
//* You can use <u>underscore character</u> to seperate the getter/setter from actual property.
    ```js
    class Car {
        constructor(brand) {
            this._carname = brand;
        }
        get cnam() {
            return this._carname;
        }
        set cnam(x) {
            this._carname = x;
        }
    }

    mycar = new Car("Ford");
    document.getElementById("demo").innerHTML = mycar.cnam;
    // do NOT use parentheses when you want to get the property value.

    mycar.carname = "Volvo";
    document.getElementById("demo").innerHTML = mycar.carname;
    // without parentheses.
    ```
6. <em>Hoisting</em>: class declarations are NOT hoisting. Means that must declare class before use it.
7. <em>"Use strict"</em>: syntax inside classes must be written in "Stirct modw".

#### Debugging
1. <u>```console.log()```</u>:
    ```js
    a = 5;
    b = 6;
    c = a + b;
    console.log(c);
    ```
2. <em>Breakpoint</em>: <i>At each breakpoint, JS will stop executing, and let you examine JS values. After examing values, you can resume the execution of code (typically with a play button).</i>

3. <u>```debugger```</u>: <i>Stops the execution of JS, and calls(if available) the debugging function. </i>
//* Same function as breakpoint.
//* With the debugger turned on, this code will stop executing before it executes the third line.
    ```js
    var x = 15*5;
    debugger;
    document.getElementById("demo").innerHTML = x;
    ```
4. Major <em>Browser</em>'s Debugging Tools: <u>F12</u>

#### Style Guide
<i>coding conventions</i>.
1. <u>Variable Names</u>: HTML5-hyphen; CSS-hyphen; Javascript-camelCase; SQL-underscores; C-PascalCase.
2. <u>Spaces</u> <u>Around Operators</u> and <u>After Commas</u>.
//* If possible, use same naming convention as JS in HTML.
3. <u>Code Indention</u>: always 4 spaces for indention of code blocks.
//* do NOT use tabs for indention. Different editors interpret tabs differently.
4. <u>Declarations at top</u>: always put all declarations at the top of each script or function.
5. <u>Initialize Variables</u>: It's a good coding practice to initialize variabels when you declare them.
    ```js
    var firstNanme = "", price = 0, myArray = [], myObject = {};
    ```
6. <u>Load JS in HTML</u>: use simple syntax for loading external scripts (tytpe attribute is not necessay).
    ```js
    <script src="myscript.js"></script>
    ```

#### Mistake
Common Mistake: 
1. Accidentlly using the <em>Assignment Operator</em>.
    ```js
    var x = 0;
    if (x == 10) // returns false, because x is not equal to 10
    if (x = 10)  // returns true, because 10 is true
    if (x = 0)   // returns false, because 0 is false
    ```
2. Expecting <em>Loose Comparison</em>:
    ```js
    var x = 10;
    switch(x) {
        case 10: alert("Hello");   // will display an alert
    }
    switch(x) {
        case "10": alert("Hello"); // will NOT display an alert
    }
    ```
3. Confusing <em>Addition & Concatenation</em>:
    - Addition: adding numbers.
    - Concatenation: adding strings.
    ```js
    var x = 10 + 5;   // x is 15
    var x = 10 + "5"; // x is "105"
4. Misunderstanding <em>Floats</em>: All numbers are stored as 64-bits loating point numbers.
    ```js
    x = 0.1;
    y = 0.2;
    var z = x + y;                     // z will NOT be 0.3
    var z = (x * 10 + y * 10) / 10;    // z will be 0.3
    ```
5. <u>Reserved Words</u>: [Details](https://www.w3schools.com/js/js_reserved.asp)

#### Performance 
<i>speed up JS code.</i>
1. <u>reduce activity in loop</u>: <i>each statement in a loop is executed for each iteration of the loop.</i>
    ```js
    var i;
    for (i = 0; i < arr.length; i++) {
    // bad

    var i;
    var l = arr.length;
    for (i = 0; i < l; i++) {
    //better
    ```
2. <u>reduce DOM access</u>: <i>accessing HTML DOM is very slow</i>. Access it once, and use it as a loal variable.
    ```js
    var obj = document.getElementById("demo");
    obj.innerHTML = "Hello";
    ```
3. <u>Avoid unecessary variables</u>": do NOT create new variables if you don't plan to save values.
    ```js
    var fullName = firstName + " " + lastName;
    document.getElementById("demo").innerHTML = fullName;
    // bad

    document.getElementById("demo").innerHTML = firstName + " " + lastName;
    // better
    ```
4. <u>Delay JS loading</u>: putting scripts at the bottom of the page body, lets the browser load the page first.
5. <u>Avoid ```new```</u>:
    ```{}``` instead of ```new Object()```
    ```""``` instead of ```new String()```
    ```12345``` instead of ```new Number()```
    ```true/false``` instead of ```new Boolean()```
    ```[]``` instead of ```new Object()```
    ```/()/``` instead of ```new RegExp()```
    ```function() {}``` instead of ```new function()```

#### ES6
ECMAScript 2015. Has some new features: <u>```let```</u>; <u>```const```</u>; <u>Arror Function</u>; <u>Class</u>;
1. <u>Default Parameter Values</u>:
    ```js
    function myFunction(x, y = 10) {
        // y is 10 if not passed or undefined
        return x + y;
    }
    myFunction(5);    //will return 15
    ```
2. <u>```Array.find()```</u>: <i>returns the value of the first array element that passes a test function.</i>
    ```js
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.find(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
        // returns 25
    }
    ```
3. <u>```Array.findIndex()```</u>: <i>returns the index of the first array element that passes a test function.</i>
    ```js
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
        // returns 3
    }
    ```
4. <u>```Number.isInteger```</u> and <u>```Number.isSafeInteger```</u>: <i>returns true if the argument is an integer & returns true if integer can exactly be represented as a double precision number -(2^53 - 1) to +(2^53 - 1).</i>
5. <u>```isFinite()```</u> and <u>```isNaN```</u>
6. <u>Exponentiation Operator (```**```)</u>: <i>raises first operand to the power of the second operand.</i>
    ```js
    var x = 5;
    var y = x ** 2;  // result is 25
    ```
#### Form

1. <em>Validation</em>: <i>HTML form validation can be done by JS:</i>
    ```js
    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
        // if form field (fname) is empty,
            alert("Name must be filled out");
            return false;
            // alerts a message and returns false,
        }   // to prevent form from being submitted
    }
    ```
2. <em>HTML Form Validation Example</em>: 
    eg1. HTML validate if form is empty: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_js)
    ```js
    <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
        Name: <input type="text" name="fname">
        <input type="submit" value="Submit">
    </form>
    // alert a message.
    ```
    eg2. JS validate numeric input: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_number)
    ```js
    <script>
    if ( x >= 1 && x <= 10) { text = "Input OK"; } 
    else { text = "Input not OK"; }
    document.getElementById("demo").innerHTML = text; }
    </script>
    // show message in p.
    ```
3. <em>Automatic HTML form validation</em>: <i>If a form field (fname) is empty, the ```required``` attribute prevent it from being submitted.</i>
    ```js
    <form action="/action_page.php" method="post">
        <input type="text" name="fname" required>
        <input type="submit" value="Submit">
    </form>
    // display an error message under form.
    ```
4. <em>Data validation</em>: 
    - <u>Server side validation</u>: performed by a web server, after input has been sent to the server.
    - <u>Client side validation</u>: performed by a web browser, before input is sent to a web server.
5. <em>Constraint Validation</em>: 
    1. Constraint validation <u>HTML Input Attributes</u>: [Details](https://www.w3schools.com/js/js_validation.asp)
    2. Constraint validation <u>CSS Pseudo Selectors</u>: [Details](https://www.w3schools.com/js/js_validation.asp)
    3. Constraint validation <u>DOM Methods</u>:
        - ```setCustomValidity()```: <i><u>Sets the validationMessage</u> property of an input element.</i>
        - ```checkValidity()```: <i>Returns true if an input element <u>contains valid data</u>. If an input field contains invalid data, display a message.</i>
            ```js
            <input id="id1" type="number" min="100" max="300" required>
            // HTML Input Attributes
            <button onclick="myFunction()">OK</button>
            <p id="demo"></p>

            <script>
                function myFunction() {
                    if (!document.getElementById("id1").checkValidity()) {
                        document.getElementById("demo").innerHTML = inpObj.validationMessage;
                    }
                }
            </script> 
            ```
    4. Constraint validation <u>DOM Properties</u>: 
    5. <u>Validity Properties</u>: 
        - [Details](https://www.w3schools.com/js/js_validation_api.asp)
        - ```rangeOverflow```: <i>If the number in an input field is greater than 100 (the input's max attribute), display a message:</i>
            ```js
            <input id="id1" type="number" max="100">
            <button onclick="myFunction()">OK</button>
            <p id="demo"></p>

            <script>
                function myFunction() {
                    if (document.getElementById("id1").validity.rangeOverflow) {
                        document.getElementById("demo").innerHTML = "Value too large";
                    }
                }
            </script>
            ```

#### Closures
<i>a function having access to the parent scope, even after the parent function has closed.</i>
1.  ```js
    // Initiate counter
    var counter = 0;

    // Function to increment counter
    function add() {
    var counter = 0; 
    counter += 1;
    }

    // Call add() 3 times
    add();
    add();
    add();

    //The counter should now be 3. But it is 0
    ```
2.  ```js
    // Function to increment counter
    function add() {
    var counter = 0; 
    counter += 1;
    return counter;
    }

    // Call add() 3 times
    add();
    add();
    add();

    //The counter should now be 3. But it is 1.
    ```
3. <em>closure</em> using <u>self-invoking function</u>:
    ```js
    var add = (function () {
        var counter = 0;
        return function () {counter += 1; return counter}
    })();

    add();
    add();
    add();

    // the counter is now 3
    ```

