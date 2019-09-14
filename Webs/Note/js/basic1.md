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


## Basic1

####Introduction

1. Javascipt can <em>change</em> HTML <em>content</em>:
    ```js
    <button onclick="document.getElementById('idName').innerHTML = 'Hello'">Click</button>
    ```
    [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_intro_inner_html_quotes)
    //* document; 
    //* id: html element;
    //* innerHTML: html content; 
    <br> 

2. Javascript can <em>change</em> HTML <em>source:</em>
    ```js
    <button onclick="document.getElementById('on').src='off.gif'">Turn Off</button>
    ```
    [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_intro_lightbulb)
    //* Javascript accept '' and "";
    <br>

3. Javascript can <em>change</em> HTML <em>style (CSS)</em>: 
    ```js
    document.getElementById("demo").style.fontSize = "25px";
    ```
4. Javascript can <em>hide</em> HTML <em>elements</em>:
    ```js
    document.getElementById("demo").style.display="none";
    ```
5. Javascript can <em>display</em> HTML hidden <em>elements</em>:
    ```js
    document.getElementById("demo").style.display="block";
    ```

####Where to

1. In HTML, Javascript must inside<em> &lt;script></em> &<em> &lt;/script></em>
    
    ```js
    <script> document.getElementById("demo").innerHTML = "Some JavaScript"; </script>
    ```

2. Javascript can be placed in HTML <em>&lt;head></em> or <em>&lt;body></em>. 
    ```js
    <button onclick="myFunction()">Try</button>

    <script> function myFunction() { document.getElementById("demo").innerHTML = "Changed"; } </script>
    ```
    [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_use_head)
    //* Place &lt;script> at the bottom of &lt;body> can improve display speed, because js compilation would slow down display. 

3. <em>External</em> javasrcipt:
    ```js
    <button onclick="myFunction()">Try</button>

    <script src="/myFile/myScript.js"></script>
    ```
    [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_use_external)
    Practical when the same code is used in many different web pages.
    //* External scripts cannot contain &lt;script> tags.
    - URL link: ``` src = "http://..." ```
    - Specified file: ``` src = "/js/myScript1.js" ```
    - Same folder: ``` src = "myScript1.js" ```

####Output
1. <em>innerHTML</em>: write into an HTML element.
    ```js
    <script> document.getElementById("demo").innerHTML = 5 + 6; </script>
    ```
2. <em>document.write()</em>: write into the HTML output.
    ```js
    <script> document.write(5 + 6); </script>
    ```
    //* Should only be used for testing. Will delete all existing HTML after document is loaded.
    [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_output_write_over)
3. <em>window.alert()</em>: write into an alert box.
    ```js
    <script> window.alert(5 + 6); </script>
    ```
4. <em>console.log()</em>: write into the browser console.
    ```js
    <script> console.log(5 + 6); </script>
    ```
    [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_console)
    //* Used for debugging.

####Statement
1. <u>Statements</u>: <i>a list of "instructions" to be "executed" by a computer. </i>
    Composed by Values, Operators, Expressions, Keywords, and Comments.
    eg. ```document.getElementById("demo").innerHTML = "Hello."; ```
2. <u>Semicolons</u>: ( ) seperate javascript statements, multiple statements on one line are allowed. 
3. Readability: 
    - White Space: around operators.
    - Line Break: when code lines longer than 80 characters.
4. Code Blocks: JavaScript statements can be grouped together in code blocks 
(Javascript functions), inside curly brackets {..}, to execute statements together.
5. Keywords: Javascript statements often start with a keyword to identify the action to be performed.
//* JavaScript keywords are reserved words. (cannot be used as names for variables) [Details](https://www.w3schools.com/js/js_statements.asp)

####Syntax
1. Javascript<em> Values</em>:
    - Literal - fixed value:
        - <u>Number</u>: <i>written with/without decimals. (no fraction)</i>  
         //* Extra large/small numbers can use scientific notation:```var y = 123e5; // 12300000```
            ```js
            var length = 5.2;
            ```
        - <u>String</u>: <i>text written with/without double or single quotes.</i>
            ```js
            var lastName = "Johnson";
            ```
        - <u>Boolean</u>: return true / false.
            ```js
            var x = false;
            ```
         - <u>Undefined</u>: <i>A variable without a value, it's value & type are undefined.</i> [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_datatypes_undefined_2)
        - <u>typeOf</u>: <i>Returns the type of a variable.</i>
    - Variable - variable value:
        - <u>var</u> x = 6;
        //* var - declare variables; equal sign - assign values;
        - <u>Object</u>: [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_datatypes_object)
            ```js
            var name = {firstName:"John", lastName:"Doe"} // name.firstName; type is object.
            ```  
        - <u>Array</u>: [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_datatypes_array)
            ```js
            var cars = ["Porsche", "Volvo", "BMW"]; // cars[0]; type is object.
            ``` 
    - Special:
        - <u>Empty</u>: nothing same as "undefined", <i>an empty string has both legal value & type.</i> 
            ```js
            var car = ""; // car value is empty, type is string.
            ```
        - <u>Null</u>: same value as 'undefined', <i>type is object, supposed to be something not exist. </i>
            ```js
            var person = null; // person value is null, type is object.
            ```
2. Javascript <em>Operators</em>: [Details](https://www.w3schools.com/js/js_operators.asp) [Precedence](https://www.w3schools.com/js/js_arithmetic.asp)
    - <u>Arithmetic operators</u> -> compute values: ```+ - * ** / % ++ --```
    - <u>Assignment operator</u> -> assign values: ```= += -= *= **= /= %=```
    - <u>Concatenation operator(+)</u> -> add strings: 
        - ```x = "8" + 3 + 5; // x = 835```
        - ```x = 3 + 5 + "8"; // x = 88```
    - <u>Comparison operator</u> -> ```== === != !== > < >= <= ?```
    - <u>Logical operator</u> -> ```&& || !```    
    - <u>Bitwise operators</u> -> work on 32bits numbers: ```& | ~ ^ << >> >>>```
3. Javascript <em>Expressions</em>:
    <i>Combination of values, variables, and operators, which evaluates to a value.</i>
    eg. ```5 * 10;``` ```"John" + " " + "Doe";``` ```x * 10;``` 
4. Javascript <em>Comments</em>:
    ```// abc``` or ```/* abc */```
    <br> 
5. Javascript <em>Keywords</em>:
    <i>Identify actions to be performed.</i>
    eg. ```var``` variable tells browser to create variables.

6. Javascript <em>Identifiers</em>:
    <i>Used to name variables (and keywords, and functions, and labels). </i>
    //* Case sensitive.
    - First character: letter;``` _; $;```
    - Other characters: letters; digits; ```_; $;```
7. Javascript <em>Camel Case</em>:
    <u>Hyphon:</u> first-name, last-name, master-card, inter-city.
    //* Hyphens are not allowed in JavaScript. They are reserved for subtractions.
    <u>Underscore:</u> first_name, last_name, master_card, inter_city.
    <u>Upper Camel Case (Pascal Case):</u> FirstName, LastName, MasterCard, InterCity.
    <u>Lower Camel Case:</u> firstName, lastName, masterCard, interCity.
    //* JavaScript programmers tend to use camel case that starts with a lowercase letter.

####Functoin
1. Function <em>Syntax</em>: ```function name(parameter1, parameter2, parameter3) { // code }```
//* When JavaScript reaches a return statement, the function will stop executing.
    ```js
     function myFunction(a, b) { return a * b; }
     ```
     - <u>parameter</u>: <i>the name listed in function definition;</i>
     - <u>argument</u>: <i>real value received by function;</i> passed by Value; ```arguments.length;```
2. Function <em>invoke</em>: 
    - <u>muFunction</u> refers to the function object:
     ```document.getElementById("demo").innerHTML = myFunction; // return "myFunction"```
    - <u>myFunction( )</u> refers to the function result:
     ```document.getElementById("demo").innerHTML = myFunction(2,5); // return "10"```
3. <em>Parameter Missing</em>: <i>if a function is called with a missing argument, the value is set to <u>undefined</u>.</i>
    ```js
    function myFunction(x, y) {
        if (y === undefined) {
            y = 0;
        }
    }
    ```
4. Function <em>constructor</em>: <i>like object constructor.</i>
    ```js
    // This is a function constructor:
    function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    }

    // This creates a new object:
    var x = new myFunction("John", "Doe");
    x.firstName;  // returns "John"
    ```
5. <em>Self-involking</em> functions: <i>A self-invoking expression is invoked (started) automatically, without being called.</i>
    ```js
    (function () {
        var x = "Hello!!";  // I will invoke myself
    })();
    ```


####Object
<i>Variables are containers for data values.
Objects are variables, but object can contain many values. 
Objects are containers for named values called properties or methods. (```name:"value"```)</i>
1. Object <em>Properties</em>: <i>the ```name:"value"``` pairs in Javascript objects.</i>
    | Property | Property Value |
    | - | - |
    | firstName |  Bill  |
    | lastName |  Gates  |
    - Accessing Object Properties:
        - ```objectName.property```: person.age
        - ```objectName["property"]```: person["age"]
        - ```objectName[expression]```: x = "age"; person[x]
2. Object <em>Methods</em>: <i>A method is a function stored as a property.</i>
    | Property | Property Value |
    | - | - |
    | firstName |  Bill  |
    | lastName |  Gates  |
    | fullName |  function( ) {return this.firstName + " " + this.lastName;} |
    ```js
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    }; 
    ```
    - "<em>this</em>" property:
        In a function definition, ```this``` refers to the <i>"owner" of the function.</i>
        In other words, ```this.firstName``` means the ```firstName``` property of object ```person```.
    - Accessing Object Properties:
        - ```objectName.methodName()``` [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_objects_method)
        - If you access a method without ```()```, it will return the function definition: ```objectName.methodName``` [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_objects_function)
3. Do Not Declare Strings, Numbers, and Booleans as Objects! 
<i>They complicate your code and slow down execution speed.</i>
When a JavaScript variable is declared with the keyword "<em>new</em>", the variable is created as an object: 
    ```var x = new String(); // Declares x as a String object```
4. Object peoperties <em>Loop</em>: <i>Js ```for...in``` statement loops through the properties of an object.</i>
    ```js
    var person = {fname:"John", lname:"Doe", age:25}; 

    for (x in person) { txt += person[x]; }
    ```
5. Object properties <em>Add/Delete</em>: 
    ```js
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person.nationality = "English"; // add nationality: "English"
    delete person.age;              // delete person["age"]; 
    ```
6. Object <em>Getter/Setter</em>:
//* It allows equal syntax for properties and methods.
    ```js
    var person = {
        firstName: "John",
        lastName : "Doe",
        get fullName() {
            return this.firstName + " " + this.lastName;
            //getter
        }
        set lang(lang) {
            this.language = lang;
            //setter
        }
    };
    // Display data from the object using a getter: `objectName.methodName`
    document.getElementById("demo").innerHTML = person.fullName;

    // Set an object property using a setter:
    person.lang = "en"; 
    ```
7. Object <em>constructor</em>: <i>like class in ES6.</i>
    ```js
    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
    }

    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");
    ```
    - <u>can NOT add new property to an existing object constructor.</u>
        ```js
        Person.nationality = "English";            // wrong
        ```
    - To add a new property to a constructor, you <u>must add it to the constructor function:</u>
        ```js
        function Person(first, last, age, eyecolor) {
            this.firstName = first;
            ...
            this.nationality = "English";          // correct
        }
        ```
    - Or use JS property <u>```prototype```</u> to add new properties to object constructors:
        ```js
        Person.prototype.nationality = "English";  // correct
        ```

####Event
HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.
1. <em>HTML events</em>: <i>can be something the browser does, or something a user does.</i>
    An HTML button was clicked; An HTML web page has finished loading; etc.
    ```<element event='some JavaScript'>``` or ```<element event="some JavaScript">```

2. HTML <em>event handler attributes</em>: to be added to HTML elements, with JavaScript code.
    - Change the content of the element with id="demo".
        ```js
        <button onclick="document.getElementById ('demo').innerHTML = Date()">The time is </button>
        ```
    - Change the content of its own element (button).
        ```js
        <button onclick="this.innerHTML = Date()">The time is?</button>
        ```    
    - Event attributes calling functions.
        ```js
        <button onclick="displayDate()">The time is?</button>
        ```
3. Common HTML events: [Details](https://www.w3school.com.cn/js/js_events.asp)

####Strings
1. <em>Special characters</em>: [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_string_escape_quotes_1)
 eg. ```var x = "We are the so-called \"Vikings\" from the north.";``` 

    | Code | Result |
    |-|-|
    | \\' | ' |
    | \\" | " |
    | \\\ | \ |
    | \b | Backspace|
    | \f | Form feed|
    | \n | New line |
    | \r | Carriage Return |
    | \t | Horizontal Tabulator|
    | \v |Vertical Tabulator|

2. <em>Break</em> long code lines:
    - <u>After an operator</u>:
        ```js
        document.getElementById("demo").innerHTML = 
        "Hello Dolly!";
        ```
    - Within a text string with a <u>single backslash</u>:
        ```js
        document.getElementById("demo").innerHTML = "Hello \
        Dolly!";
        ```
        //* Cannot break up a code line with a backslash.

    - <u>String addition</u>: ( Safe way )
        ```js
        document.getElementById("demo").innerHTML = "Hello " + 
        "Dolly!";
        ```
3. Strings can <em>be objects</em>:
    - <u>Primitive values</u>: ```var firstName = "John";```
    - <u>Objects</u>: ```var firstName = new String("John");```
    //* Don't create strings as objects. It slows down execution speed. 
    //* The ```new``` keyword complicates the code: This can produce some unexpected results:
        eg1.

        ```js
        var x = "John";
        var y = new String("John"); 
        // (x == y) is true because x and y have equal values.
        // (x === y) is false because x and y have different types (string and object)
        ```

        eg2.

        ```js
        var x = new String("John");
        var y = new String("John");
        // (x == y) is false because x and y are different objects
        // (x === y) is false because x and y are different objects
        ```
####String Method
1. <u>```length```</u>:
    ```js
    <script> var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo").innerHTML = text.length; </script>
    ```
2. <u>```indexOf()```</u>: <i>returns the index of the first occurrence of a specified text in a string.</i>
    //* 0 is the first position in a string, 1 is the second, 2 is the third ...
    ```js
    <script> var str = "Please locate where 'locate' occurs!";
    document.getElementById("demo").innerHTML = str.indexOf("locate"); </script>
    ```
    //* lastIndexOf() returns the index of the last occurrence of a specified text in a string.
    //* Both indexOf(), and lastIndexOf() return -1 if the text is not found.
    //* Both methods accept a second parameter as the starting position for the search. [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_indexof_2)


3. <u>```search()```</u>: <i>searches a string for a specified value and returns the position.</i>
    ```js
    <script> var str = "Please locate where 'locate' occurs!";
    document.getElementById("demo").innerHTML = str.search("locate"); </script>
    ```
4. <u>```slice(start, end)```</u>: <i>extracts a part of a string and returns the extracted part in a new string. </i>
    ```js
    var res = str.slice(7, 13);
    ```
    //* If a parameter is negative, the position is counted from the end of the string. 
    //* If you omit the second parameter, the method will slice out the rest of the string.
    ```js
    var res = str.slice(7);
    ```

5. <u>```substring(start, end)```</u>: <i> is similar to slice(). The difference is not accept negative indexes.</i>

6. <u>```substr(start, length)```</u>: <i> replaces a specified value with another value in a string.</i> [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_replace)
    ```js
    var n = str.replace("MICROSOFT", "W3Schools");
    ```
    //* By default, the replace() method replaces only the first match.
    //* To replace case insensitive, use a regular expression with an /i flag.
    ```js
    var n = str.replace(/MICROSOFT/i, "W3Schools"); 
    // Note that regular expressions are written without quotes.
    ```
7. <u>Converting to Upper and Lower Case</u>:
    ```js
    var text2 = text1.toUpperCase();
    ```
8. <u>```concat()```</u>: <i>joins two or more strings.</i>
    ```js
    var text3 = text1.concat(" ", text2);
    var text4 = text1.concat(" ", "World!");
    ```
9. <u>```String.trim()```</u>: <i>removes whitespace from both sides of a string.</i>

10. <u>```charAt(position)``` </u>: <i>returns the character at a specified index (position) in a string.</i>
    ```js
    var str = "HELLO WORLD";
    str.charAt(0); // returns H
    ```
11. <u>```charAt(position)```</u>: <i>returns the unicode of the character at a specified index in a string.</i>
    ```js
    var str = "HELLO WORLD";
    str.charCodeAt(0);  // returns 72
    ```
12. <u>```split()```</u>: <i> convert a string to an array.</i>
    ```js
    var txt = "a,b,c,d,e";   // String
    txt.split(",");          // Split on commas
    txt.split(" ");          // Split on spaces
    txt.split("|");          // Split on pipe
    ```

####Numbers
JavaScript numbers are always stored as 64-bits double precision floating point numbers.
[JavaScript Type Conversion Table](https://www.w3schools.com/js/js_type_conversion.asp)
1. <em>Precision</em>:
   整数 >16位 / 小数点后 >2位，模糊处理。（小数点后显示17位）
2. <em>Numeric Strings</em>:
    JavaScript will try to convert strings to numbers in all numeric operations: ```- * /```
    ```js
    var x = "100";
    var y = "10";
    var z = x / y; // z = 10
    ```
    //* however, ```+```concatenate strings.
3. <em>NaN</em>:  <i>reserved word indicating that a number is not a legal number.</i>
    Arithmetic with a non-numeric string will result in NaN (Not a Number): 
    ```js
    var x = 100 / "Apple"; // x will be NaN (Not a Number)
    isNaN(x); // returns true
    var y = x + 5; // returns NaN
    var z = x + "5"; // returns NaN5
    ```
    //* ```typeof NaN; // returns "number"```
4. <em>Infinity</em>: 
    A number outside the largest possible number will return ```infinity``` or ```-infinity```.
    //* Division by 0 (zero) also generates Infinity. (Overflow)
    //* ```typeof Infinity; // returns "number"```
5. <em>Hexdecimal</em>: <i>start with 0x.</i>
    ```js
    var x = 0xFF; // x will be 255
    ```
    Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
    ```toString()```: output numbers from base 2 to base 36.
    ```js
    var myNumber = 32;
    myNumber.toString(32);  // returns 10
    myNumber.toString(2);   // returns 100000
    ```
6. Numbers can <em>be objects</em>:
    - <u>Primitive values</u>: ```var x = 123;```
    - <u>Objects</u>: ```var y = new Number(123);```
    //* Do not create Number objects. It slows down execution speed.

####Number Method
1. ```toString()```: <i>returns a number as a string.</i>
2. ```toExponential()```: <i>returns a string, with a number rounded and written using exponential notation.</i>
    Parameter defines the number of characters behind the decimal point.
    ```js
    var x = 9.656;
    x.toExponential(2);     // returns 9.66e+0
    x.toExponential(6);     // returns 9.656000e+0
    ```
3. ```toFixed()```: <i>returns a string, with the number written with a specified number of decimals:</i>
    ```js
    var x = 9.656;
    x.toFixed(0);     // returns 10
    x.toFixed(2);     // returns 9.66
    x.toFixed(6);     // returns 9.656000
    ```

4. ```toPrecision()```: <i>returns a string, with a number written with a specified length:</i>
    ```js
    var x = 9.656;
    x.toPrecision();        // returns 9.656
    x.toPrecision(2);       // returns 9.7
    x.toPrecision(6);       // returns 9.65600
    ```

5. ```valueOf()```: <i>returns a number as a number.</i>
//* convert Number objects to primitive values.
//* All JavaScript data types have a ```valueOf()``` and a ```toString()``` method.
    ```js
    var x = 123;
    x.valueOf();            // returns 123 from variable x
    (123).valueOf();        // returns 123 from literal 123
    (100 + 23).valueOf();   // returns 123 from expression 100 + 23
    ```
- <em>Global JavaScript Methods
</em>: Can be used on all JavaScript data types.

1. ```Number()```: <i>returns a number, converted from its argument. </i>
    ```js
    Number(true);     // returns 1
    Number(false);    // returns 0
    Number("  10");   // returns 10
    Number("10.33");  // returns 10.33
    Number("10,33");  // returns NaN
    Number("10 33");  // returns NaN 
    Number("John");   // returns NaN

    Number(new Date("2017-09-30"));    // returns 1506729600000
    ```

2. ```parseInt()```: <i>parses a string and returns a whole number. Only the first number is returned.</i>
    //* Spaces are allowed.
    ```js
    parseInt("10.33");      // returns 10
    parseInt("10 years");   // returns 10
    parseInt("years 10");   // returns NaN 
    ```

3. ```parseFloat()```: <i>parses a string and returns a number. Only the first number is returned.</i>
    ```js
    parseFloat("10.33");     // returns 10.33
    parseFloat("10 years");  // returns 10
    parseFloat("years 10");  // returns NaN
    ```

4. - ```MAX_VALUE```: <i>returns the largest possible number in JavaScript.</i> 
        ```js
        var x = Number.MAX_VALUE;
        ```
    - ```MIN_VALUE```: <i>returns the smallest possible number in JavaScript.</i>
        ```js
        var x = Number.MIN_VALUE;
        ```
####Array

1. Changing an Array Element：
    ```js
    var cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";
    ```

2. Arrays are <em>Objects</em>: <i>Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.</i>


3. Array <em>Elements Can Be Objects</em>: <i>can have variables of different types in the same Array. (objects, functions, arrays)</i>
    
4. <em>Looping</em> Array Elements:
    eg1. <u>```for```</u> ->
    ```js
    var fruits, text, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    for (i = 0; i < fruits.length; i++) {
    text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    ```
    eg2. <u>```Array.forEach()```</u> ->
    ```js
    var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

    function myFunction(value) {
    text += "<li>" + value + "</li>";
    }
    ```
5. <em>Difference</em> between <em>arrays</em> and <em>objects</em>:
    - arrays use numbered indexes; objects use named indexes.
    - use objects when you want the element names to be strings (text);
    use arrays when you want the element names to be numbers.
6. <em>Avoid new</em> array( ): use ```[]``` instead.
    ```js
    var points = new Array(); // Bad
    var points = [];          // Good 
    ```
    the ```new``` keyword only complicates the code. It can also produce some unexpected results:
    ```js
    var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
    var points = new Array(40);       // Creates an array with 40 undefined elements !!!!!
    ```
7. <em>Recognize</em> an Array:
    eg1. <u>```Array.isArray()```</u> ->
    ```js
    Array.isArray(fruits);   // returns true (>= ES5)
    ```
    eg2. <u>create isArray( ) function by self</u> ->
    ```js
    function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
    }
    ```
    eg3. <u>```instanceof()```</u> -> [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_instanceof)
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits instanceof Array; 
    ```

####Array Method
1. <u>```toString()```</u>: <i>converts an array to a string of (comma separated) array values.
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.toString();
    // result: Banana,Orange,Apple,Mango
    ```
    <u>```join()```</u>: like toString(), but in addition you can specify the separator.</i>
    ```js
    document.getElementById("demo").innerHTML = fruits.join(" * ");
    // result: Banana * Orange * Apple * Mango
    ```
2. <u>```pop()```</u>: <i>removes the last element from an array & returns the value that was "popped out".</i>
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x = fruits.pop();    // x = Mango
    ```
    <u>```push()```</u>: <i>adds a new element to an array (at the end) & returns the new array length</i>
    //* Adding elements with high indexes can create undefined "undefined" in an array.  [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_array_holes)
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");    // x = 5
    ```
    <u>```shift()```</u>: <i>removes the first array element and "shifts" all other elements to a lower index & returns the string that was "shifted out".</i>
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x = fruits.shift();  // the value of x is "Banana"
    ```
    <u>```unshift()```</u>: <i>adds a new element to an array (at the beginning) & returns the new array length.</i>
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon"); // Returns 5
    ```

3. <u>```splice()```</u>: <i>add new & delete items to an array</i> [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_splice_return)
    //* The first parameter (2) defines the position where new elements should be added (spliced in).
    //* The second parameter (0) defines how many elements should be removed.
    //* The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango
    ```
4. <u>```concat()```</u>: <i>creates a new array by merging (concatenating) existing arrays.</i>
    //* It does not change the existing arrays. It always returns a new array.
    ```js
    var arr1 = ["Cecilie", "Lone"];
    var arr2 = ["Emil", "Tobias", "Linus"];
    var arr3 = ["Robin", "Morgan"];
    var newOne = arr1.concat(arr2, arr3);
    ```
5. <u>```slice()```</u>: <i>selects elements from the start argument, and up to (but not including) the end argument.</i>
    //* It does not remove any elements from the source array. It always creates a new array. 
    ```js
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var newOne = fruits.slice(1, 3); //Orange,Lemon
    ```
####Array Sort
1. <em>Alphabetically</em> Sort:
    <u>```sort()```</u>: <i>sorts an array alphabetically.</i>
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort(); // Apple,Banada,Mango,Orange
    ```
    <u>```reverse()```</u>: <i>sorts an array in descending order.</i>
    ```js
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();        // First sort the elements of fruits 
    fruits.reverse();     // Then reverse the order of the elements
    ```
2. <em>Numeric</em> Sort:
    - By default, the sort( ) function sorts values as strings.
    - However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    - You can fix this by providing a <u>compare function</u>: [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_array_sort_numeric_1)
    ```js
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b}); // return 1,5,10,25,40,100
    ```
    <u>Descending Order</u>:
    ```js
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a}); // return 100,40,25,10,5,1
    ```
    <u>Random Order</u>:
    ```js
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});
    ```
3. Find <em>min / max</em> value:
    <u>```Math.max.apply(p1,p2)```</u>: <i>find the highest number in an array.</i>
    //* Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
    ```js
    function myArrayMax(arr) {
    return Math.max.apply(null, arr); 
    }
    ```
    <u>```Math.min.apply(p1,p2)```</u>: <i>find the smallest number in an array.</i>
    //* Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
    ```js
    function myArrayMin(arr) {
    return Math.min.apply(null, arr);
    }
    ```
    <u>Fastest Way</u>: <i> loops through an array comparing each value with the highest/lowest value found.</i> [Details](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_max)
4. Sort <em>Object Arrays</em>:
    ```js
    var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
    ];
    ```
    compare the <u>property values</u>: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1)
    ```js
    cars.sort(function(a, b){return a.year - b.year});
    ```
    compare the <u>properties</u>: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object2)
    ```js
    cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
    });
    ```

####Array Iteration
1. <u>```forEach()```</u>: <i> calls a function (a callback function) once for each array element.</i>
    ```js
    var txt = "";
    var numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFunction);
    // returns 3 parameters: value & index & array.

    function myFunction(value, index, array) {
    txt = txt + value + "<br>"
    }
    ```

2. <u>```map()```</u>: <i>creates a new array by performing a function on each array element.</i>
    //* Does not execute the function for array elements without values.
    //* Does not change the original array.
    ```js
    var numbers1 = [45, 4, 9, 16, 25];
    var numbers2 = numbers1.map(myFunction);
    // returns 3 parameters: value & index & array.

    function myFunction(value, index, array) { // = function myFunction(value) {
    return value * 2;
    }
    ```
3. <u>```reduce()```</u>: <i>runs a function on each array element to produce (reduce it to) a single value.</i> (```reduceRight()```)
    //* Does not reduce the original array.
    eg1.
    ```js
    var numbers1 = [45, 4, 9, 16, 25];
    var sum = numbers1.reduce(myFunction);
    // returns 4 parameters: total & value & index & array.

    function myFunction(total, value, index, array) {
    return total + value; // returns 99
    }
    ```
    eg2.
    ```js
    var numbers1 = [45, 4, 9, 16, 25];
    var sum = numbers1.reduce(myFunction, 100);
    // with initial "total" value = 100.

    function myFunction(total, value) {
    return total + value;
    }
    ```
4. <u>```filter()```</u>: <i>creates a new array with array elements that passes a test.</i>
    ```js
    var numbers1 = [45, 4, 9, 16, 25];
    var numbers2 = numbers1.filter(myFunction);
    // returns 3 parameters: value & index & array.

    function myFunction(value, index, array) {
    return value > 18; // returns 45,25
    }
    ```
    <u>```find()```</u>: <i>returns the value of the first array element that passes a test function.</i>
    ```js
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.find(myFunction);

    function myFunction(value, index, array) {
    return value > 18; // returns 25
    }
    ```
    <u>```findIndex()```</u>: <i>returns the index of the first array element that passes a test function.</i>
    ```js
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
    return value > 18; // returns 3
    }
    ```
    <u>```every()```</u>: <i>check if all array values pass a test.</i>
    ```js
    var numbers1 = [45, 4, 9, 16, 25];
    var numbers2 = numbers1.every(myFunction);
    // returns 3 parameters: value & index & array.

    function myFunction(value, index, array) {
    return value > 18; // returns false.
    }
    ```
    <u>```some()```</u>: <i>check if some array values pass a test.</i>
    ```js
    var numbers1 = [45, 4, 9, 16, 25];
    var numbers2 = numbers1.some(myFunction);

    function myFunction(value, index, array) {
    return value > 18; // returns true.
    }
    ```

5. <u>```indexOf()```</u>: <i>searches an array for an element value and returns its position.</i> (```lastIndexOf(item, start)```)
    //* returns -1 if the item is not found.
    eg1.
    ```js
    var fruits = ["Apple", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple");     //returns 0.
    ```
    eg2.
    ```js
    var fruits = ["Apple", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple", 1);  //returns 2. Search from index[1].
    ```

####Date
1. <em>Create</em> Dates: date objects are created with the ```new Date()``` constructor.
    1.  <u>```new Date()```</u>:
    //* Date objects are static. The computer time is ticking, but date objects are not.
        ```js
        var d = new Date();
        ```
    2. <u>```new Date(year, month, day, hours, minutes, seconds, milliseconds)```</u>: <i> creates a new date object with a specified date and time.</i>
    //* counts months from 0 to 11: January is 0, December is 11.
    //* Cannot omit month. If you supply only one parameter it will be treated as milliseconds. [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_new_numbers1)
    //* One and two digit years will be interpreted as 19xx. [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_new_one)
        ```js
        var d = new Date(2018, 11, 24, 10, 33, 30, 0);
        // returns Mon Dec 24 2018 10:33:30 GMT+0800
        ```
    3. <u>```new Date(dateString)```</u>: <i>creates a new date object from a date string.</i>
        ```js
        var d = new Date("October 13, 2014 11:13:00");
        ```
    4. <u>```new Date(milliseconds)```</u>: <i>creates a new date object as zero time (January 01, 1970) plus milliseconds:</i>
        ```js
        var d = new Date(100000000000);
        // returns Sat Mar 03 1973 17:46:40 GMT+0800
        ```
2. <em>Display</em> Dates:
    1. <u>```toUTCString()```</u>: <i>converts a date to a UTC string (a date display standard).</i>

    2. <u>```toDateString()```</u>: <i>converts a date to a more readable format.</i>
        ```js
        var d = new Date();
        document.getElementById("demo").innerHTML = d.toDateString();
        // returns Wed Aug 28 2019
        ```
3. <em>Input Format</em>:
    - <u>ISO Date</u>: "2015-03-25" (The International Standard)
    - <u>Short Date</u>: "03/25/2015"
    - <u>Long Date</u>: "Mar 25 2015" or "25 Mar 2015"
4. <em>Output Format</em>:
    - <u>ISO Date</u>: <i> (YYYY-MM-DDTHH:MM:SSZ)</i>
        ```js
        var d = new Date("2015-03-25T12:00:00Z");
        ```
    - <u>Short Date</u>: <i>"MM/DD/YYYY"</i>
        ```js
        var d = new Date("02/19/2018");
        ```
    - <u>Long Date</u>: <i>"MMM DD YYYY"</i>
        ```js
        var d = new Date("Mar 25 2015");
        ```
5. Date Get Methods [Details](https://www.w3school.com.cn/js/js_date_methods.asp)
    getFullYear(): Get the year as a four digit number (yyyy)
    getMonth(): Get the month as a number (0-11)
    getDate(): Get the day as a number (1-31)
    getHours(): Get the hour (0-23)
    getMinutes(): Get the minute (0-59)
    getSeconds(): Get the second (0-59)
    getMilliseconds(): Get the millisecond (0-999)
    getTime(): Get the time (milliseconds since January 1, 1970)
    getDay(): Get the weekday as a number (0-6)
    Date.now(): Get the time. ECMAScript 5.
6. Date Set Methods [Details](https://www.w3school.com.cn/js/js_date_methods_set.asp)
    setDate(): Set the day as a number (1-31)
    setFullYear(): Set the year (optionally month and day)
    setHours(): Set the hour (0-23)
    setMilliseconds(): Set the milliseconds (0-999)
    setMinutes(): Set the minutes (0-59)
    setMonth(): Set the month (0-11)
    setSeconds(): Set the seconds (0-59)
    setTime(): Set the time (milliseconds since January 1, 1970)

####Math
1. <u>```Math.round(x)```</u>: <i>returns the value of x rounded to its nearest integer. 四舍五入.</i>
    ```js
    Math.round(4.4);  // returns 4
    ```
    <u>```Math.abs(x)```</u>: <i>returns the absolute (positive) value of x.</i>
    ```js
    Math.abs(-4.7);   // returns 4.7
    ```
2. <u>```Math.pow(x, y)```</u>: <i>returns the value of x to the power of y.</i>
    ```js
    Math.pow(8, 2);   // returns 8^2=64
    ```
    <u>```Math.sqrt(x)```</u>: <i>returns the square root of x.</i>
    ```js
    Math.sqrt(64);    // returns 8
    ``` 
3. <u>```Math.ceil(x)```</u>: <i>returns the value of x rounded up to its nearest integer.</i>
    ```js
    Math.ceil(4.4);   // returns 5
    ```
    <u>```Math.floor(x)```</u>: <i>returns the value of x rounded down to its nearest integer.</i>
    ```js
    Math.floor(4.7)   // returns 4
    ```
4. <u>```Math.sin(x)```</u>: <i>returns the sine (a value between -1 and 1) of the angle x (given in radians).</i>
    //* Angle in radians = Angle in degrees x PI / 180.
    ```js
    Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
    ```
    <u>```Math.cos(x)```</u>: <i>returns the cosine (a value between -1 and 1) of the angle x (given in radians).</i>
    //* Angle in radians = Angle in degrees x PI / 180.
    ```js
    Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
    ```
5. <u>```Math.random(x)```</u>: <i>returns a random number between [0, 1).</i>
    <u>Random Integers:</u> 
    ```js
    Math.floor(Math.random() * 10);      // returns a random integer from 0 to 9
    Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
    Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
    Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
    ```
    <u>Random Functions:</u>
    ```js
    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    // returns a random number between min and max (both included)
    ```
6. <u>Math Properties (Constants)</u>: [Details](https://www.w3schools.com/js/tryit.asp?filename=tryjs_math_constants)

####Boolean
Type is Boolean, Value is True or False.
//* Everything With a "Value" is True. 
//* Boolean vlaue “ 0/-0; empty string; undefined; null; false; NaN” are False.
```js
Boolean(10 > 9); // returns true
```
1. Boolean can <em>be Objects</em>:
    ```js
    var x = false;                  // typeof x returns boolean
    var y = new Boolean(false);     // typeof y returns object    
    ```
    //* Do not create Boolean objects. It slows down execution speed & produce some unexpected results.
    
    ```js
    var x = false;    
    var y = new Boolean(false);
    var z = new Boolean(false);
    // (x == y) is true because x and y have equal values
    // (x === y) is false because x and y have different types
    // (y == z) is false because objects cannot be compared
    ```
2. <em>Comparisons</em>
    1. <em>Comparison Operators</em>: <i>determine equality or difference between variables or values.</i> Given that x = 5:
    ```==``` equal to: ```x == "5"```(True)
    ```===``` equal value and type: ```x === "5"```(False)
    ```!=``` not equal: ```x != "5"```(False)
    ```!==``` not equal value or equal type: ```x !== "5"```(True)
    ```>``` greater than; ```>=``` greater than or equal to.
    ```<``` smaller than; ```<=``` smaller than or equal to.
    <br>
    2. <em>Logical Operators</em>: <i> determine the logic between variables or values.</i> Given that x = 6 and y = 3:
    ```&&``` and: ```(x < 10 && y > 1)```(True)
    ```||``` or: ```(x == 5 || y == 5)```(False)
    ```!``` not: ```!(x == y)```(True)
    <br>
    3. <em>Conditional Operators</em>: <i>assigns a value to a variable based on some condition.</i>
    ```variableName = (Condition) ? value1 : value 2```
    <br>
    4. <em>Comparing Different Types</em>: <i>JavaScript will convert the string to a number when doing the comparison. </i>
    An empty string converts to 0. 
    A non-numeric string converts to ```NaN``` which is always ```false```. [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_comparison_22)
    <br>
3. <em>Conditions</em>
    1. <em>if...else</em>:
        ```js
        if (Date().getHours() < 10) {
        greeting = "Good morning";
        } else if (time < 20) {
        greeting = "Good day";
        } else {
        greeting = "Good evening";
        }
        ```
    2. <em>switch</em>: <i>select one of many code blocks to be executed.</i>
    //* The getDay() method returns the weekday as a number between 0 and 6. 
    (Sunday=0, Monday=1, Tuesday=2 ..) [Try here](https://www.w3school.com.cn/tiy/t.asp?f=js_switch_1)
        ```js
        switch (new Date().getDay()) {
            case 0:
                text = "Sunday";
                break;
            case 1:
                text = "Monday";
                break;
            ...
            case 6:
                text = "Saturday";
            }
        ```
    3. <em>break</em>: <i>breaks the loop and continues executing the code after the loop (if any).</i>
        ```js
        for (i = 0; i < 5; i++) {
            if (i === 3) { break; }
            text += "The number is " + i + " ";
        }
        // returns 0 1 2
        ```
        //* ```default``` specifies the code to run if there is no case match:
        ```js
        switch (new Date().getDay()) {
            default: 
                text = "Looking forward to the Weekend";
                break;
            case 6:
                text = "Today is Saturday";
                break; 
            case 0:
                text = "Today is Sunday";
            }
        ```
        //* Common Code Blocks: different switch cases to use the same code.
        ```js
        switch (new Date().getDay()) {
        case 4:
        case 5:
            text = "Soon it is Weekend";
            break;
        default: 
            text = "Looking forward to the Weekend";
        }
        ```
        //* Strict Comparison: ( === ) strict comparison can only be true if the operands are of the same type.
        ```js
        var x = "0";
        switch (x) {
            case 0:
                text = "Off";
                break;
            case 1:
                text = "On";
                break;
            default:
                text = "No value found";
            }
        // returns "No value found"
        ```
    4. <em>continue</em>: <i>breaks one iteration (in the loop), and continues with the next iteration in the loop.</i>
        ```js
        for (i = 0; i < 5; i++) {
            if (i === 3) { continue; }
            text += "The number is " + i + "<br>";
        }
        // retusn 0 1 2 4
        ```
        //* Javascript Label:
        ```js
        var cars = ["BMW", "Volvo", "Saab", "Ford"];
        list: {
        // labelName: 
        text += cars[0] + "<br>";
        // statements
        text += cars[1] + "<br>";
        break list;
        // break & continue labelName;
        text += cars[2] + "<br>";
        text += cars[3] + "<br>";
        }
        ```

    5. Loop <em>for</em>: <i>Often this is the case when working with arrays.</i>
        //* Statement 1 is executed (one time) before the execution of the code block.
        - You can initiate many values in statement 1 (separated by comma).
        - You can omit statement 1 (like when your values are set before the loop starts).

        //* Statement 2 defines the condition for executing the code block.
        - If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.
        - If you omit statement 2, you must provide a ```break``` inside the loop.

        //* Statement 3 is executed (every time) after the code block has been executed.
        - Can do anything like negative increment (i--), positive increment (i = i + 15).
        - Can be omitted (like when you increment your values inside the loop).
        ```js
        for (statement 1; statement 2; statement 3)  {
            // code block to be executed
        }
        ```
       
        //* ```For/In``` Loop: <i>loops through the properties of an object.</i>
        ```js
        var person = {fname:"John", lname:"Doe", age:25}; 
        var text = "";
        var x;
        for (x in person) {
        text += person[x];
        }
        ```

        //* ```For/Of``` Loop: <i>loops through the values of an iterable objects.</i>
        ```js
        var cars = ['BMW', 'Volvo', 'Mini'];
        var x;
        for (x of cars) {
        document.write(x + "<br >");
        }
        ```

    6. Loop <em>while</em>: <i>loops through a block of code as long as a specified condition is true.</i>
        ```js
        while (condition) {
        // code block to be executed
        }
        ```
        //* ```Do/While``` Loop: <i>execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</i>
        ```js
        do {
            text += "The number is " + i;
            i++;
        }
        while (i < 10);
        ```

        //* ```for``` loop is much the same as a ```while``` loop, with statement 1 and statement 3 omitted.
        ```js
        var cars = ["BMW", "Volvo", "Saab", "Ford"];
        var i = 0;
        var text = "";
        for (;cars[i];) { 
        // while(cars[i]) {
            text += cars[i] + "<br>";
            i++;
        }
        ```

####Bitwise
1. 
    | Operator | Name | Description |
    | -- | -- | --|
    | &	| AND | Sets each bit to 1 if both bits are 1 |
    | \|	|OR|	Sets each bit to 1 if one of two bits is 1
    |^|	XOR|	Sets each bit to 1 if only one of two bits is 1|
    |~	|NOT|	Inverts all the bits
    |<<	|Zero fill left shift|	Shifts left by pushing zeros in from the right and let the leftmost bits fall off|
    |>>	|Signed right shift	|Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off|
    |>>>|	Zero fill right shift|	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off|

    eg1.
        ```1111 & 0010	= 0010```
        ```1111 | 0010	= 1111```
        ```1111 ^ 0010 = 1101```
        ```~00000101 (~5) = 11111010 (-6)```
    eg2.
    ```js
    var x = 5 & 1;
    // Binary: 00000000000000000000000000000001 = 1
    var x = ~5;
    // 11111010 = -(2^2+2^0) -1
    ```

2. Converting <em>Decimal to Binary</em>: ???
    ```js
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    ```

3. Converting <em>Binary to Decimal</em>: ???
    ```js
    function bin2dec(bin){
        return parseInt(bin, 2).toString(10);
    }
    ```
