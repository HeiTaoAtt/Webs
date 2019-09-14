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

# BOM (Browser Object Model)
Modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it's often refers to, as methods and properties of the BOM.

#### Window
1. <em>Intro</em>duction
    ```window``` is supported by all browsers. Represents browser's window.
    - <u>Global variables</u> are <u>properties</u> of the window object.
    - <u>Global functions</u> are <u>methods</u> of the window object.
    - <u>Document objects</u> (of the HTML DOM) are <u>properties</u> of the window object:
        ```window.document.getElementById("header")``` same as ```document.getElementById("header")```

2. Window <em>Size</em>
    //* The browser window (the browser viewport) is <u>NOT including toolbars and scrollbars</u>.
    - <u>```window.innerHeight```</u>: <i>the innner height of browser window (in pixel).</i>
    - <u>```window.innerWidth```</u>: <i>the inner width of browser window (in pixel).</i>
3. Other methods:
    - <u>```window.open()```</u>: <i>open a new window.</i>
    - <u>```window.close()```</u>: <i>close current window.</i>
    - <u>```window.moveTo()```</u>: <i>move the current window.</i>
    - <u>```window.resizeTo()```</u>: <i>resize current window.</i>

#### Screen
1. window screen <em>width</em> and <em>height</em>:
    <u>```screen.width```</u>: <i>returns width of the visitor's screen pixels.</i>
    <u>```screen.height```</u>: <i>returns height of the visitor's screen pixels.</i>
2. window screen <em>available width</em> and <em>height</em>:
    <u>```screen.availHeight```</u>: <i>returns width of the visitor's screen pixels, <u>minus</u> interface features like the <u>Windows Taskbar</u>.</i>
    <u>```screen.availWidth```</u>: <i>returns width of the visitor's screen pixels, <u>minus</u> interface features like the <u>Windows Taskbar</u>.</i>
3. window screen <em>color depth</em> and <em>pixel depth</em>:
    <u>```screen.colorDepth```</u>: <i>returns the <u>number of bits</u> used to <u>display one color</u>.</i>
    //* All modern computers use 24 bit or 32 bit hardware for color resolution:
    - 24 bits =      16,777,216 different "True Colors". <u>(RGB)</u>
    - 32 bits = 4,294,967,296 different "Deep Colors".

    <u>```screen.pixelDepth```</u>: <i>returns the <u>pixel depth of the screen.</u> </i>
    //* For modern computers, <u>Color Depth and Pixel Depth are equal.</u>

#### Location
<i>```window.location``` can <u>get the current page address (URL)</u> and <u>redirect the browser to a new page</u>.</i>
1. <u>```window.location.href```</u>: <i>returns the <u>href (URL)</u> of current page.</i>
2. <u>```window.location.hostname```</u>: <i>returns the <u>domain name</u> of web host. (www.google...)</i>
3. <u>```window.location.pathname```</u>: <i>returns the <u>path and filename</u> of current page.</i>
4. <u>```window.location.protocol```</u>: <i>returns the <u>web protocol used (http: or https:)</u>.</i>
5. <u>```window.location.assign```</u>: <i><u>loads</u> the <u>new document</u>.</i>

#### History
<i>```window.history```: contains the browsers history. (can be written without the ```window``` prefix.)</i>
1. <u>```history.back()```</u>: <i>loads the previous URL in the history list.</i>
2. <u>```history.forward()```</u>: <i>loads the next URL in the history list.</i>

#### Navigator
<i>```window.navigator```: contains information about the visitor's browser. (can be written without the ```window``` prefix.)</i>
//* The information from the navigator object can often be misleading, and should <u>NOT be used to detect browser versions [because](https://www.w3schools.com/js/js_window_navigator.asp)</u>.
1. <u>```navigator.appName```</u>: <i>returns the <u>application name</u> of the browser.</i>
2. <u>```navigator.appCodeName```</u>: <i>returns the <u>application code name</u> of the browser.</i>
    //* "Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.
3. <u>```navigator.platform```</u>: <i>returns the <u>browser platform (operating system).</u></i>

#### Popup Box
JavaScript has three kind of popup boxes: <u>Alert box</u>, <u>Confirm box</u>, and <u>Prompt box</u>.
1. <em>Alert Box</em>: Is often used if you want to <u>make sure information comes through to the user</u>.
//* To display <em>line break</em>s inside a popup box, use a back-slash followed by the character n.
<i>When an alert box pops up, the user will have to click "OK" to proceed</i>.
    ```window.alert("sometext");``` same as ```alert("bala");```
2. <em>Confirm Box</em>: Is often used if you <u>want the user to verify or accept something</u>.
    ```window.confirm("sometext");``` same as ```confirm("bala");```
    ```js
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    ```
3. <em>Prompt Box</em>: Is often used if you <u>want the user to input a value before entering a page</u>. [Try here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt)
    ```window.prompt("sometext","defaultText");``` same as ```prompt("bala", "defaultBala");```
    ```js
    var person = prompt("Please enter your name", "Harry Potter");

    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    ```
#### Timing
JavaScript can be executed in time-intervals (timing events).
1. <u>```setTimeout(function, milliseconds)```</u>: <i><u>executes</u> a function, <u>after waiting</u> a specified number of milliseconds.</i>
    ```js
    <button onclick="setTimeout(myFunction, 3000)">Try it</button>

    <script>
        function myFunction() { alert('Hello'); }
    </script>
    ```
2. <u>```clearTimeout(timeoutVariable)```</u>: <i>same as setTimeout(), but <u>repeats the execution of the function continuously.</u></i>
    ```js
    <button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>
    <button onclick="clearTimeout(myVar)">Stop it</button>
    ```
3. <u>```setInterval(function, milliseconds)```</u>: <i>same as setTimeout(), but <u>repeats the execution of the function continuously.</u></i>
    ```js
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    } // starts clock.
    ```

#### Cookies
<i>Data stored in small text files, on your computer.</i>
Cookies are saved in name-value pairs like: ```username = John Doe;```
1. Cookies were invented to solve the problem "<em>how to remember information about the user</em>":
    - When a user visits a web page, his/her name can be stored in a cookie.
    - Next time the user visits the page, the cookie "remembers" his/her name.
2. <em>Create</em> cookie: 
    //* By default, cookie is <u>deleted when the browser is closed</u>.
    ```js
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    // Time is UTC time; By default, cookie belongs to the current page.
    ```
3. <em>Read</em> cookie: 
    //* The old cookie is overwritten.
    ```js
    var x = document.cookie;
    // returns cookies in one string: cookie1=value; cookie2=value; cookie3=value;
    ```
4. <em>Delete</em> cookie: 
    //* You don't have to specify a cookie value when you delete a cookie. 
    //* Just <u>set the expires parameter to a passed date</u>.
    ```js
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // define the cookie path to ensure that you delete the right cookie.
    ```
5. Example: 
    ```js
    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
                if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user=getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:","");
            if (user != "" && user != null) {
                setCookie("username", user, 30);
            }
        }
    }
    ```