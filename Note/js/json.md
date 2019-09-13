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

#JSON (JavaScript Object Notation)
<i>A format for storing and transporting data.</i>
<i>JSON is <u>text</u>, written with JavaScript object notation.</i>
<i>Often used when data is sent from a server to a web page.</i>
- JSON is a lightweight data interchange format
- JSON is language independent *
- JSON is "self-describing" and easy to understand
 
#### Intro
1. <em>Exchanging data</em>: <i>When exchanging data between <u>a browser and a server</u>, the <u>data can only be text</u>.</i>
//* <u>JSON is text</u>, and we can convert any JavaScript object into JSON, and send JSON to the server. We can also convert any JSON received from the server into JavaScript objects.
2. <em>Sending data</em>: <i>If you have data stored in a JavaScript object, you can <u>convert</u> the <u>object into JSON</u>, and send it to a server.</i>
    ```js
    var myObj = {name: "John", age: 31, city: "New York"};
    var myJSON = JSON.stringify(myObj);
    window.location = "demo_json.php?x=" + myJSON;
    ```
3. <em>Receiving data</em>: <i>If you receive data in JSON format, you can <u>convert</u> <u>JSON into JavaScript object</u>.</i>
    ```js
   var myJSON = '{"name":"John", "age":31, "city":"New York"}';
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name;
    ```
4. <em>Storing data</em>: <i>When storing data, the data has to be a certain format, and regardless of where you choose to store it, <u>text is always one of the legal formats</u>.</i>
    ```js
    // Storing data:
    myObj = {name: "John", age: 31, city: "New York"};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    // Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("demo").innerHTML = obj.name;
    ```

#### Syntax
1. <em>Data</em> is in <em>name/value</em> pairs; is <em>separated by commas</em>: 
    ```js
    "firstName":"John", "lastName":"Doe"
    ``` 
    //* in Javascript:   
    ```js
    firstName: "John"
    ```
2. <em>Curly braces{}</em> hold <em>objects</em>; <em>Square brackets[]</em> hold <em>arrays</em>: 
    ```js
    "employees": [
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"}
    ]
    ```

#### JSON vs XML
<u>Both</u> JSON and XML can be used to <u>receive data from a web server.</u>

```js
// Json:
{"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]}
```
```js
// XML:
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
```
1. JSON is <em>Like</em> XML:
    - Both JSON and XML are "self describing" (human readable)
    - Both JSON and XML are hierarchical (values within values)
    - Both JSON and XML can be parsed and used by lots of programming languages
    - Both JSON and XML can be fetched with an XMLHttpRequest
2. JSON is <em>Unlike</em> XML:
    - JSON does <u>NOT</u> use <u>end tag</u>
    - JSON is <u>shorter</u>
    - JSON is <u>quicker</u> to read and write
    - JSON can use <u>arrays</u>
3. Why JSON is <em>better</em> than XML:
    - XML is much more difficult to parse than JSON.
    - JSON is parsed into a ready-to-use JavaScript object.

#### Data Type
1. Data type <em>MUST</em> be one of the following type:
    - <u>a string</u>: <i>must be written in double quotes.</i>
    - <u>a number</u>: <i>must be an integer or a floating point.</i>
    - <u>an object (JSON object)</u>: <i>values in JSON can be objects:</i>
        ```json
        {
            "employee":{ "name":"John", "age":30, "city":"New York" }
        }
        // Objects as values in JSON must follow the same rules as JSON objects.
        ```
    - <u>an array</u>: <i>Values in JSON can be arrays.</i>
        ```json
        {
            "employees":[ "John", "Anna", "Peter" ]
        }
        ```
    - <u>a boolean</u>: <i>Values in JSON can be true/false.</i>
        ```json
        { "sale":true }
        ```
    - <u>null</u>: <i>Values in JSON can be null.</i>
        ```js
        { "middlename":null }
        ```
2. Can <em>NOT</em> use data types like Javascript as:
    - <u>a function
    - a date
    - undefined</u>

#### Parse
<i><u>Parse JSON data becomes a JavaScript object</u>.</i>
1. <em>Parse JSON</em>:
    ```js
    var txt = '{"name":"John", "age":30, "city":"New York"}';
    var obj = JSON.parse(txt);
    document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
    // returns John, 30
    ```
2. <em>Parse Date</em>: If you need to include a date, write it as a <u>string</u>.
    ```js
    var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    var obj = JSON.parse(text);

    obj.birth = new Date(obj.birth);
    
    document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
    // returns John, Sat Dec 13 1986 19:00:00 GMT-0500 (北美东部标准时间)
    ```
3. <em>Parse Function</em>: If you need to include a date, write it as a <u>string</u>.
    ```js
    var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
    var obj = JSON.parse(text);

    obj.age = eval("(" + obj.age + ")");
    // You should avoid using functions in JSON, 
    // the functions will lose their scope, 
    // and you have to use eval() to convert them back into functions.

    document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
    // returns John, 30
    ```

#### Stringify()
<i><u>Convert a JavaScript object into a string</u>.</i>
1. <em>stringify</em> a Javascript <em>Object</em>: <i> </i>
    ```js
    var obj = { name: "John", age: 30, city: "New York" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJSON;
    //returns {"name":"John","age":30,"city":"New York"}
    ```
2. <em>stringify</em> a Javascript <em>Array</em>: <i> </i>
    ```js
    var arr = [ "John", "Peter", "Sally", "Jane" ];
    var myJSON = JSON.stringify(arr);
    document.getElementById("demo").innerHTML = myJSON;
    // returns ["John","Peter","Sally","Jane"]
    ```
3. <em>stringify</em> a Javascript <em>Date</em>: In JSON, date objects are not allowed. The <u>JSON.stringify()</u> function <u>will convert any dates into strings</u>.
    ```js
    var obj = { name: "John", today: new Date(), city : "New York" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJSON;
    // returns {"name":"John","today":"2019-09-08T16:41:44.902Z","city":"New York"}
    ```
4. <em>stringify</em> a Jsvascript <em>Function</em>: The <u>JSON.stringify()</u> function <u>will remove any functions from a JavaScript object</u>, both the key and the value.
    ```js
    var obj = { name: "John", age: function () {return 30;}, city: "New York"};
    var myJSON = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJSON;
    // returns: {"name":"John","city":"New York"}
    ```
    <u>Convert your functions into strings before running the JSON.stringify() function</u> can return function:
    ```js
    var obj = { name: "John", age: function () {return 30;}, city: "New York" };

    obj.age = obj.age.toString();
    var myJSON = JSON.stringify(obj);

    document.getElementById("demo").innerHTML = myJSON;
    // returns {"name":"John","age":"function () {return 30;}","city":"New York"}
    ```

#### Object
```{ "name":"John", "age":30, "car":null }```
1. <em>Access</em> Object Values:
    - ```obj.name```
    - ```obj["name"]```
2. <em>Loop</em> Object: 
    ```js
    myObj = { "name":"John", "age":30, "car":null };

    for (x in myObj) { document.getElementById("demo").innerHTML += x; }
    // returns name age name

    for (x in myobj) { document.getElementById("demo").innerHTML += obj[x]; }
    // returns John 30 null 
    ```
3. <em>Nested</em> JSON Objects:
    ```js
    myObj = {
        "name":"John",
        "age":30,
        "cars": {
            "car1":"Ford",
            "car2":"BMW",
            "car3":"Fiat"
        }
    }

    x = myObj.cars.car2;
    // x = BMW  

    myObj.cars.car2 = "Mercedes";
    //modify the value
    delete myobj.cars.car2;
    // delete the object
    ```

#### Arrays
```myArr = [ "Ford", "BMW", "Fiat" ]```
1. <em>Access</em>:
    - ```x = myArr[0];```
2. <em>Loop</em>:
    ```js
    myArr = [ "Ford", "BMW", "Fiat" ];

    for (i in myArr) { x += myArr[i]; }
    // returns Ford BMW Fiat

    for (i = 0; i < myArr.length; i++) { x += myObj.cars[i]; }
    ```
3. Arrays can <em>be</em> values of <em>an object property</em>:
    ```js
    {
        "name":"John",
        "age":30,
        "cars":[ "Ford", "BMW", "Fiat" ]
    }
    ```
4. <em>Nested</em> Array <em>in JSON Objects</em>:
    <u>To access array in array, use for-in loop for each array:</u>
    ```js
    myObj = {
        "name":"John",
        "age":30,
        "cars": [
            { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
            { "name":"BMW", "models":[ "320", "X3", "X5" ] },
            { "name":"Fiat", "models":[ "500", "Panda" ] }
        ]
    }

    for (i in myObj.cars) {
        x += "<h1>" + myObj.cars[i].name + "</h1>";
        for (j in myObj.cars[i].models) {
            x += myObj.cars[i].models[j];
        }
    }
    // To access arrays inside arrays, use a for-in loop for each array.

    myObj.cars[1] = "Mercedes";
    // modify array values
    delete myObj.cars[1];
    // delete array items
    ```

