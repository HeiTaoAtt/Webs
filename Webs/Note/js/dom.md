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

# HTML DOM (Document Object Model)
<i>Created by the browser when a <u>web page is loaded</u>.
Constructed as a <u>tree of Objects</u>.</i>
#### Intro
1. What is <em>DOM</em>?
    - JavaScript can <u>change / add / remove</u> all the <u>HTML elements / attributes</u> in the page.
    - JavaScript can <u>create / react</u> to all existing <u>HTML events</u> in the page.
    - JavaScript can <u>change</u> all the <u>CSS styles</u> in the page.
2. <em>Type</em>:
    - <u>Core DOM</u> - standard model for all document types.
    - <u>XML DOM</u> - standard model for XML documents.
    - <u>HTML DOM</u> - standard model for HTML documents. <i>A standard for how to get, change, add, or delete HTML elements. </i>
    It defines: 
        - The HTML <u>elements as objects</u>;
        - The <u>properties</u> of all HTML elements;
        - The <u>methods to access all HTML elements</u>;
        - The <u>events</u> for all HTML elements.

#### Method
1. <u>Methods</u>: <i><u>Actions</u> you can perform (on HTML Elements). (like adding or deleting an HTML element) </i>
2. <u>Properties</u>: <i><u>Values</u>(of HTML elements) that can set or change.</i>
eg. ```getElementById``` is a method, ```innerHTML``` is a property:
    ```js
    document.getElementById("demo").innerHTML = "Hello World!";
    ```

#### Document
<i><u>Owner of all other objects in a web page</u>.</i>
If you want to access any element in an HTML page, you always start with accessing the document object. 
Below are examples of document object to access and manipulate HTML:
1. <u>Finding elements</u>:
    - ```document.getElementById(id)```: Find element by element id (Method)
    - ```document.getElementsByTagName(name)```: Find elements by tag name
    - ```document.getElementsByClassName(name)```: Find elements by class name
2. <u>Changing elements</u>:
    - ```element.innerHTML =  new html content```: Change the inner HTML of an element (Property)
    - ```element.attribute = new value```: Change the attribute value of an HTML element
    - ```element.style.property = new style```: Change the style of an HTML element
    - ```element.setAttribute(attribute, value)```: Change the attribute value of an HTML element (Method)
3. <u>Adding / Deleting elements</u>:
    - ```document.createElement(element)```: Create an HTML element (Method)
    - ```document.removeChild(element)```: Remove an HTML element
    - ```document.appendChild(element)```: Add an HTML element
    - ```document.replaceChild(new, old)```: Replace an HTML element
    - ```document.write(text)```: Write into the HTML output stream
4. <u>Adding Events Handlers</u>:
    - ```document.getElementById(id).onclick = function(){code}```: Adding event handler code to an onclick event
5. <u>Finding Objects</u>: [Details](https://www.w3schools.com/js/js_htmldom_document.asp)

#### CSS 
1. Changing <em>style</em>: The HTML DOM allows JavaScript to change the style of HTML elements. eg:
    ```js
    document.getElementById("p2").style.color = "blue";
    ```
2. Using <em>events</em>: The HTML DOM allows you to execute code when an event occurs. 
<i><u>Events</u> ae generated by browser when "things happen" to HTML elements. </i>
    ```js
    <button type="button" onclick="document.getElementById('id1').style.color = 'red'">Click Me!</button>
    ```

#### Animation
1. <em>Animation element</em>:
    ```js
    <div id="animate">My animation will go here</div>
    ```
2. <em>Container element</em>:
    ```js
    <div id ="container">
        <div id ="animate">My animation will go here</div>
    </div>
    ```
3. <em>Style</em> these elements:
    <u>container element</u> should be created with style = "<u>```position:relative```"</u>;
    <u>animation element</u> should be created with style = "<u>```position:absolute```"</u>;
    ```css
    #container {
        width: 400px;
        height: 400px;
        position: relative;
        background: yellow;
    }

    #animate {
        width: 50px;
        height: 50px;
        position: absolute;
        background: red;
    }
    ```
4. <em>Animation Code</em>: <i>JavaScript animations are done by programming gradual changes in an element's style.</i>
The changes are called by a <u>timer</u>. When the timer interval is small, the animation looks continuous.

    ```js
    var id = setInterval(frame, 5);

    function frame() {
    if (/* test for finished */) {
        clearInterval(id);
    } else {
        /* code to change the element style */  
        }
    }
    ```
    eg.  [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3)
    ```js
    function myMove() {
        var elem = document.getElementById("animate"); 
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
                // if reach right bottom corner, stop.
            } else {
                pos++; 
                elem.style.top = pos + 'px'; 
                elem.style.left = pos + 'px'; 
            }
        }
    }
    ```

#### Events
1. <em>examples</em> of HTML events:
    - user clicks the mouse
    - web page has loaded
    - image has been loaded
    - mouse moves over an element
    - input field is changed
    - HTML form is submitted
    - user strokes a key
    ```js
    <h1 onclick="changeText(this)">Click on this text!</h1>

    <script>
        function changeText(id) {
        id.innerHTML = "Ooops!";
        }
    </script>
    ```
2. <em>assign events</em> to HTML elements using:
    1. <u>event attributes</u>:
        ```js
        <button onclick="displayDate()">Try it</button>
        ```
    2. <u>javascript</u>:
        ```js
        document.getElementById("myBtn").onclick = displayDate;
        ```
3. The <em>onload</em> and <em>onunload</em> Events:
    - <u>```onload```</u>: <i>triggered when the user <u>enters the page</u>.</i>
    can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
        ```js
        <body onload="checkCookies()">
        <p id="demo"></p>

        <script>
            function checkCookies() {
                var text = "";
                if (navigator.cookieEnabled == true) {
                    text = "Cookies are enabled.";
                } else {
                    text = "Cookies are not enabled.";
                }
                document.getElementById("demo").innerHTML = text;
            }
        </script>
        ```
    - <u>```onunload```</u>: <i>triggered when the user <u>leaves the page</u>.</i>
4. The <em>onchange</em> Event: <i>When you <u>leave the input field</u>, function transforms the input text.</i>
(often used in combination with validation of input fields.) 
    ```js
    <body> Enter your name: <input type="text" id="fname" onchange="myFunction()"> </body>

    <script>
        function myFunction() {
            var x = document.getElementById("fname");
            x.value = x.value.toUpperCase();
        }
    </script>
    ```
5. The <em>onmouseover</em> and <em>onmouseout</em> Events: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_mouseover)
    ```js
    <div onmouseover="mOver(this)" onmouseout="mOut(this)"> Mouse Over Me </div>

    <script>
        function mOver(obj) {
            obj.innerHTML = "Thank You"
        }
        function mOut(obj) {
            obj.innerHTML = "Mouse Over Me"
        }
    <script>
    ```

#### Event Listener
```element.addEventListener(event, function, useCapture);```
//* <u>do NOT use prefix```on```</u>, not```onclick``` but```click```, etc.
1. The <em>addEventListener()</em> method: <i>Add an event listener that fires when a user clicks a button.</i>
    ```js
    <button id="myBtn"> Try it </button>

    <script>
        document.getElementById("myBtn").addEventListener("click", displayDate);
        function displayDate() { document.getElementById("demo").innerHTML = Date(); }
    <script>
    ```
2. <em>Add an Event Handler</em> to an <em>Element</em>: 
    ```js
    document.getElementById("myBtn").addEventListener("click", function(){ alert("Hello World!"); });
    ```
3. <em>Add Many Event Handlers</em> to the Same <em>Element</em>:
    ```js
    var x = document.getElementById("myBtn");
    x.addEventListener("mouseover", myFunction);
    x.addEventListener("click", mySecondFunction);
    x.addEventListener("mouseout", myThirdFunction);

    function myFunction() { document.getElementById("demo").innerHTML += "Moused over!<br>"; }
    function mySecondFunction() { document.getElementById("demo").innerHTML += "Clicked!<br>"; }
    function myThirdFunction() { document.getElementById("demo").innerHTML += "Moused out!<br>"; }
    ```
4. <em>Add an Event Handler</em> to the <em>window Object</em>: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_dom)
    ```js
    window.addEventListener("resize", function(){ document.getElementById("demo").innerHTML = Math.random(); });
    ```
5. <em>Passing Parameters</em>: When passing parameter values, use an "anonymous function" that calls the specified function with the parameters.
    ```js
    var p1 = 5, p2 = 7;
    document.getElementById("myBtn").addEventListener("click", function(){ myFunction(p1, p2); });
    function myFunction(a, b){ document.getElementById("demo").innerHTML = a * b; }
    ```
6. Event <em>Bubbling</em> and Event <em>Capturing</em>: <i>There are two ways of <u>event propagation</u> (a way of defining the element order when an event occurs) in HTML DOM, bubbling and capturing.</i>
    - <u>bubbling</u>: the inner most element's event is handled first and then the outer.
    the \<p> element's click event is handled first, then the \<div> element's click event.
    - <u>capturing</u>: outer most element's event is handled first and then the inner.
    the \<div> element's click event will be handled first, then the \<p> element's click event.
    - In ```addEventListener(event, function, useCapture);```, default <u>```useCapture```</u> is <u>false</u>, which uses <u>bubbling</u>. Set ```useCapture```to true if want capturing.
7. The <em>removeEventListener()</em> method: [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_remove)
    ```js
    <div id="myDIV">
        <button onclick="removeHandler()" id="myBtn">Remove</button>
    </div>

    <script>
        document.getElementById("myDIV").addEventListener("mousemove", myFunction);
        function myFunction() { document.getElementById("demo").innerHTML = Math.random(); }
        function removeHandler() { document.getElementById("myDIV").removeEventListener("mousemove", myFunction); }
    </script>
    ```

#### Navigation
With the HTML DOM, can navigate the node tree using node relationships. 
1. <em>DOM nodes</em>: <u>Everything in an HTML document</u> is a node. [Node Graph](https://www.w3schools.com/js/js_htmldom_navigation.asp)
//* New nodes can be created, and all nodes can be modified or deleted.
    - The entire document is a document node
    - Every HTML element is an element node
    - The text inside HTML elements are text nodes
    - Every HTML attribute is an attribute node (deprecated)
    - All comments are comment nodes
2. <em>node relationships</em>: (hierarchical) <u>parent, child, and sibling</u>.
3. <em>navigating</em> between nodes: 
    - ```parentNode```
    - ```childNodes[nodenumber]```
    - ```firstChild```
    - ```lastChild```
    - ```nextSibling```
    - ```previousSibling```
4. <em>node values</em>: ```nodeValue```
    //* The element node \<title> does NOT contain <u>text</u>, BUT contains a <u>text node</u> with the value "DOM Tutorial":
    ```html
    <title id="demo">DOM Tutorial</title>
    ```
    <u>Value of the text node</u> can be accessed by:
    -   ```js
        var myTitle = document.getElementById("demo").innerHTML;
        ```
    -   ```js
        var myTitle = document.getElementById("demo").firstChild.nodeValue;
        ``` 
    -   ```js
        var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
        ``` 
5. <em>Root nodes</em>: 
    - ```document.body```: The body of the document. [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_body)
        ```js
        alert(document.body.innerHTML);
        ```
    - ```document.documentElement```: The full document. [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_document)
        ```js
        alert(document.documentElement.innerHTML);
        ```
6. <em>Properties</em>:
    - <u>```nodeName```</u>: <i> specifies the name of a node.</i> Read-Only; 
        ```js
        <h1 id="id01">My First Page</h1>
        <p id="id02"></p>

        <script>
            document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
            // returns H1
        </script>
        ```
    - <u>```nodeType```</u>: <i>returns the type of a node.</i>
        ```js
        <h1 id="id01">My First Page</h1>
        <p id="id02"></p>

        <script>
            document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;
            // returns 1
        </script>
        ```
        |element_node: 1
        |attribute_node: 2
        |text-node: 3
        |comment_node: 8
        |document_node: 9
        |document_type_node: 10

#### Nodes
1. <em>Create</em> new <em>node</em> (HTML element): 
    1.  [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_elementcreate)
        ```js
        // First: createElement(); createTextNode();
        // Then: appendChild();

        <div id="div1">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>

        <script>
            var para = document.createElement("p");
            var node = document.createTextNode("This is new.");
            para.appendChild(node);

            var element = document.getElementById("div1");
            element.appendChild(para);
        <script>
        ```
    2.  [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_elementcreate2)
        ```js
        // using insertBefore();
        <div id="div1">
            <p id="p1">This is a paragraph.</p>
            <p id="p2">This is another paragraph.</p>
        </div>

        <script>
            var para = document.createElement("p");
            var node = document.createTextNode("This is new.");
            para.appendChild(node);

            var element = document.getElementById("div1");
            var child = document.getElementById("p1");
            element.insertBefore(para,child);
        </script>
        ```
2. <em>Remove</em> exsiting <em>node</em> (HTML element): <i>must know the parent of the element.</i>
    ```js
    // using removeChild();
    <div id="div1">
        <p id="p1">This is a paragraph.</p>
        <p id="p2">This is another paragraph.</p>
    </div>

    <script>
        var parent = document.getElementById("div1");
        var child = document.getElementById("p1");
        parent.removeChild(child);
    </script>
    ```
3. <em>Replacing node</em> (HTML element): 
    ```js
    // using replaceChild();
    <div id="div1">
        <p id="p1">This is a paragraph.</p>
        <p id="p2">This is another paragraph.</p>
    </div>

    <script>
        var para = document.createElement("p");
        var node = document.createTextNode("This is new.");
        para.appendChild(node);

        var parent = document.getElementById("div1");
        var child = document.getElementById("p1");
        parent.replaceChild(para, child);
    </script>
    ```

#### Collection
```getElementByTagName()``` <i>an array-like list (collection) of HTML <u>elements</u>.</i> 
1. HTMLCollection <em>Object</em>:
    ```js
    var myCollection = document.getElementsByTagName("p");
    // The elements in collection x can be accessed by an index number.

    document.getElementById("demo").innerHTML = "2nd para is: " + myCollection[1].innerHTML;
    ```
2. HTMLCollection <em>Length</em>: <i>defines the number of elements in an HTMLCollection.</i>
    ```js
    var myCollection = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = "This doc contains paras" + myCollection.length;
    ```

#### Node List
```querySelectorAll``` <i>a list (collection) of <u>nodes</u> extracted from a document.</i>
1. HTML DOM NodeList <em>Object</em>:
    ```js
    var myNodelist = document.querySelectorAll("p");

    document.getElementById("demo").innerHTML = "2nd para is: " + myNodelist[1].innerHTML;
    ```
2. HTML DOM NodeList <em>Length</em>:
    ```js
    var myNodelist = document.querySelectorAll("p");
    document.getElementById("demo").innerHTML = "This doc contains paras" + myNodelist.length;
    ```
