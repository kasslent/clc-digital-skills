---
layout: lessons
module: 5
lesson: 1
title: Intro to JavaScript & jQuery
description: JavaScript basics and getting started with jQuery.
permalink: module5-1.html
class: module5-1
---


## JavaScript vs jQuery

###What is JavaScript?
JavaScript controls the **behavior** of your web page. It allows you to do things such as animate items, hide or show items, react to user input and even process data. Basically, if you need the user to do "something" first (i.e. scroll) to show a specific effect or even content, you'll most likely need JavaScript.


Here's what JavaScript looks like:

    var myVariable = "Hello World";
    function sayHello(){
        alert(myVariable);
    }
    sayHello();

Unlike HTML & CSS, JavaScript is a *programming* language, so the structure and syntax is more complex. JavaScript includes **variables**, **functions**, **objects** or **control structures** such as **if** statements or **loops**, which are the basic building blocks for many different programming languages.
 

###What is jQuery?

jQuery *is* JavaScript.  
jQuery is a cross-browser JavaScript *library* used to simplify your program. 

####JavaScript example

    document.getElementById("status")

####jQuery example

    $("#status")

Though it has its own syntax, it is still JavaScript at its core. Because of this, it's important to have at least a basic understanding of JavaScript principles to make sense of how jQuery works.

Let's go through some high level JavaScript basics.  Some of these concepts may feel abstract but try to take note of the syntax. This will help to recognize the syntax patterns when using jQuery.


##The Console

The console is a browser tool used to interact directly with a web page and is useful for testing small snippets of code or for debugging errors.  You can type commands and test code directly in the console as well.

It can be accessed in the same area as when you're inspecting elements except it's under the **Console** tab.
The console in Chrome looks like this:

![Chrome console]({{site.img}}/module5/console-open.jpg)

Note the `>` symbol. It is used by the console to represent a space for you to enter your input. In Chrome, there are a couple ways to open the Console tab.

* keyboard shortcut: **CMD + OPTION + J**  (MAC) / **CTRL + SHIFT + J** (WINDOWS)
* from the menu: **View > Developer > JavaScript Console**

##Intro to JavaScript

###Types: Numbers

JavaScript values can be one of several different data *types*. The most basic is a number. JavaScript can also do math. 

Use `+` for addition, `-` for subtraction, `*` for multiplication and `/` for division.

> Let's try out a couple math exercises in the console. 

After the `>` symbol, try adding any two numbers together using the `+` symbol and press the enter/return key.  The command gets *evaluated* and a value is returned back to you. You will see something like this:

    > 30 + 30
    < 60

The `>` symbol is used by the console to represent a space for your input.  
The `<` symbol is used by the console to represent the returned value of your input.

> What do you think numbers and math can be used for in a website?


###Types: Strings

When you store any amount of text, like words or sentences, the *type* is a **string** value and must be contained in quotes.

    > "hello"
    < "hello"

> When do you think a string can be used with JavaScript?

####Extra Resource 

There are more data types. View here: [Microsoft Developer Network Data Types (JavaScript)](https://msdn.microsoft.com/library/7wkd9z69%28v=vs.94%29.aspx).

###Comments 

There are two ways to write comments.

    // Single line comment.
    // Each line needs to include the two slashes.
    
    /* 
    Multi-line comment.
    Open and close the block
    with the same syntax as 
    CSS comments! 
    */
    
###Intro to Functions

JavaScript generally executes one line at a time from top to bottom. 

Functions can be used to execute a repetitive set of instructions by grouping multiple commands into one name.  There are functions built into the language and you can also create your own.

<!-- Let&#39;s look at two built-in functions, `alert()` and `prompt()`. -->
Let&#39;s look at the `alert()` function.

Note the syntax for functions, the parentheses `()`, must be included.

Also, commands end with a semi-colon `;` to indicate that the instruction is complete.

>Go back to the console and type in `alert();`, and see what happens!

###Functions and Arguments

<!-- We&#39;ve seen now that the `alert()` and `prompt()` functions create a pop-up in the browser.  But the pop-ups are blank.  *Pass* an `argument` into these functions by adding a value *within* the parentheses `()`.  -->
We&#39;ve seen now that the `alert()` function creates a pop-up in the browser.  But the pop-up is blank.  *Pass* an `argument` into this function by adding a value *within* the parentheses `()`. 


>Try this in the console:
>
    alert("Hello!");
>
>Try using the function again but with a different argument.

<!-- 
    prompt("What day is it today?"); -->


Whatever value you put within the parentheses will get *passed* into the function. That way, you can re-use the function with different arguments.

###Make your own functions

To create your own functions, use the keyword `function` and give it a name.  See below for the syntax.

    function nameOfFunction(){
      // instructions go here
    }
    
When you declare/create a function, it won't execute until you *call* it.

    // Declare a function
    function myGreeting(){
      alert("hello!");
    }

    // Call the function
    myGreeting();

####Extra resources

* [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
* [Tutorials Point](http://www.tutorialspoint.com/javascript/javascript_functions.htm)

###Variables

Variables are used to store values. It&#39;s like a box; put something in it to store and take it out when you&#39;re ready to use it.  

Declare variables with the keyword `var` and a name of your choosing and *assign* a value. The name cannot contain spaces.

    var myVariable = "Hello!";
     |        |         |
    keyword   |      value given to variable
              |
            variable name created by you          

---
    // Declare the variable
    var favDay = "Saturday";
    
    // Pass the value into the function
    alert(favDay);

>Try out the above example in the console.  What do you think the alert message will be?

###Objects
If variables are boxes, objects can be thought of as a box with multiple compartments, like a bento box!

A basic variable only holds one value.

<img class="left" src="{{site.img}}/module5/rice.png" alt="rice object example">
    
    /* declare the variable */
    var box;
    /* assign a value */
    box = "Rice";

<hr class="clear">
You can also declare and assign a variable and value in one line.

    var box = "Rice";
    
An object holds a *collection* of values. Each value is a **property** of the object.

    /* create a new object */
    var bentobox = {};
    
<img class="left" src="{{site.img}}/module5/bento-box.png">

    /* assign the values using "dot notation" */
    bentobox.main = "Teriyaki";
    bentobox.side = "Tempura";
    bentobox.salad = "Seaweed Salad";
    bentobox.soup = "Miso";
    bentobox.sauce = "Soya";
    bentobox.dessert = "Fruit";

<hr class="clear">

###(Almost) Everything in JS is an Object

Variables can also be treated as an object.  *Dot notation* can be used to set the property value of an object but can also be used to get information from an object using functions.

When you apply a function to an object, it's called a **method**.

For example, the `length()` method can be used to find the number of characters in a string.

    var day = "Sunday";
    alert(day.length);

You can even make the length command into a variable.
    
    var day = "Sunday";
    var numOfCharacters = day.length;
    alert(numOfCharacters);

####Extra resources:

* [JavaScript values: not everything is an object ](http://www.2ality.com/2011/03/javascript-values-not-everything-is.html)
* [The Secret Life of JavaScript Primitives](http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

###Objects, Functions and Methods

What&#39;s the difference between these two?  
The second one kind of looks like a function right?

    alert();
    console.log();


`alert()` is a **function** that works on its own.

`log()` is also a function as well but it is attached to the `console` *object*, using dot notation described in the previous section. So when a function is attached to an object, it's considered a method. It will **log a message** into the **console**.

`console.log()` can be used to test and debug by outputting values in the console itself rather than using `alert()`. No more pesky pop-ups!

    alert("hello!"); /* will show as a popup */
    console.log("hi!"); /* will show in only the console */

>Try passing an argument into both `alert();` and `console.log();` in the console and see the difference.


###Concatenation

When you store any amount of text, like words or sentences, the *type* is a **string** value and must be contained in quotes.

    var myVariable = "Hello class!";

You can join strings together using the `+` symbol. This is called **concatenation**.  You join actual strings or strings contained in a variable.

    var name = "Ladies Learning Code";
    var greeting = "Hello " + name + "!";
    
    
###Resources

Here are some resources to dig deeper in to pure JavaScript.

* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [JavaScript 101 — again](https://medium.com/@christinatruong/javascript-101-again-6f5c3de74165)
* [JavaScript Methods](http://www.scribd.com/doc/19457597/Javascript-Methods)
* [Code School: JavaScript](https://www.codeschool.com/paths/javascript)


##Functions & jQuery

A function is one of the most powerful tools in JavaScript and the one you're learning about today is:

    jQuery()
    
Looks like a function right?

Remember, jQuery is a JavaScript *library* and basically contains LOTS of prewritten functions/methods used to simplify your program. 

In most cases, it's conventional to use the jQuery shortcut, `$`.

`jQuery()` is the same as `$()`.

This syntax will be used for the remainder of the lessons. 

##Using jQuery

###How to select an HTML object/element 

A common use for jQuery is selecting an HTML object and applying an effect or action to it. The `$()` function takes a single value: a string containing a selector that is similar to how items are selected in CSS.

To select all the paragraphs on the page, use `p` as the selector. It is contained in quotes because it is a string.

    $("p");


To select a class name, use the leading period, just like CSS.

    $(".about");
    
To select an id name, use the number/hash symbol, just like CSS.

    $("#about");

> What element will be selected in this example?
>
    $(".about p");

Once you select an object, you can apply one of many jQuery effects using various methods.  All the methods are documented here: [http://api.jquery.com/](http://api.jquery.com/category/effects/)

Many of these effects allow you to add parameters to change the speed of the effect (numbers are in milliseconds).  

You can also chain them together to create multiple effects.

    $(".box").fadeOut();
    $(".box").fadeOut(2000);
    $(".box").fadeOut(2000).fadeIn(500);

> Let's try it out on CodePen: <http://codepen.io/learningcode/pen/pjQePw#0>

##Adding JavaScript/jQuery to your files

There are two ways to add JavaScript to a page.

###Inline
Similar to internal CSS, add a pair of `<script></script>` tags onto the HTML page to enclose the JavaScript code.  JavaScript can be added anywhere on the page!  

However, it's often recommended to add the scripts to bottom of the page, just before the closing `</body>` tag, to allow all the page content to load first. 


    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <!-- a bunch of HTML here -->
      
      <script>
        // JavaScript here
      </script>
    </body>
    </html>

You might see the `type` attribute included as well. This was required before HTML5 was introduced.

    <script type="text/javascript">
      // JavaScript here
    </script>


####jQuery vs JavaScript

Including pure JavaScript into your web page only requires the code to be written between the `<script></script>` tags.

    <script>
      // JavaScript code here
    </script>
    
In jQuery, the document needs to be "ready" first.

    <script>    
      $(document).ready(function(){
         //jQuery code here
      });
    </script>

jQuery uses the `ready()` method to detect this state of readiness. This is a bit of a complex idea and has a lot of syntax to get used to. Just know that it's **required** to make the jQuery code work properly. It only needs to be included once and add all the jQuery code in between the curly brackets `{}`. 
  
(In CodePen, you don't have to add it because it's already integrated into the tool.)

Read more about `$( document ).ready()` [here](http://learn.jquery.com/using-jquery-core/document-ready/).
      
      
###External
Again, just like CSS, you can also write JavaScript in a separate file.  To make it JavaScript file, name it using a `.js` file extension.  Link to it using the same `<script></script>` tag pair but add the `src` attribute.

    <script src="folder/file.js"></script> 

---
    <script src="js/global.js"></script> 

####jQuery vs JavaScript
In the external file, you do **not** need to add the `<script>` tags.

But to write jQuery specific code, the `$( document ).ready()` is still required.

##Referencing jQuery's library

Similar to Google Fonts or any third party tool, you have to reference the file to access all code required to make to make it work. 

**Option 1** - Download and include the files locally

[Download](http://jquery.com/download/) the latest version of jQuery and save it within your projects files. It’s common to create a separate folder for JavaScript files for organization, just like the images and css folders.

Use the `<script>` tag to reference the file but in the src, link to where the file is saved in your project's directory and the *exact file name*.  Make sure to add it *before* your custom JavaScript file.

    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/custom.js"></script>


**Option 2** - Use a CDN

CDNs can offer a performance benefit by hosting jQuery on servers spread across the globe. To use the jQuery CDN, reference the hosted file directly, listed on the [Downloads](http://jquery.com/download/) page.


    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="js/custom.js"></script>

Be sure to include the `http://` when viewing the site locally (on your computer).

    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

>##EXERCISE: Creating a project
>
>Practice creating a project with all three components: HTML, CSS, jQuery.
>
>Take the HTML, CSS and jQuery snippets from the last [CodePen](http://codepen.io/learningcode/pen/pjQePw#0) example and turn them into local project files.
>
> 1. Create the proper folder structure and use best practices (i.e. index.html, separate css folder, etc)
> 1. Link the CSS & JS files to the HTML file.
> 1. Reference the jQuery library file to make sure your jQuery code with work.
>
>**Bonus:**   
>Try adding more HTML elements and practice selecting elements and applying jQuery effects to it. 

####Resources

* [jQuery Selectors](http://api.jquery.com/category/selectors/)
* [jQuery Effects](http://api.jquery.com/category/effects/)


##jQuery Click Events

Often, JavaScript is used to handle events that require the user to click first, before something happens.  Also, using a click event can control *when* the effects happen instead of being executed right away.

Instead of the browser running the event right away, a click event is triggered only when a selected item is clicked by the user.

> When would this effect be useful?

####Syntax

    $( "selector" ).click(function() {
      // code to be executed on click
    });

Let's try this out in another [CodePen example](http://codepen.io/learningcode/pen/WQYpxG).

####Resource

<http://api.jquery.com/click/>

~ end ~


