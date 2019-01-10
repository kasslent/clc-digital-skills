---
layout: lessons
module: 6
lesson: 1
title: Intro to JavaScript
description: JavaScript basics and intro to computational thinking.
permalink: module6-1.html
class: module6-1
---

## Introduction to Computer Programming

Up until now, we have been working with HTML5 and CSS3. Both of these are coding languages, but they're not considered "programming" languages. They are presentation-oriented languages, making them different from programming languages because they cannot solve the problems that programming languages can.

All programming languages are not identical - they could be very different in syntax (the symbols used in each language, the rules they must follow), but they can typically be used to solve the same problems. That is to say, they all share the same computational theories. This is why once you understand the basics of one programming language, you're likely to more easily pick up another. Before you start writing a line of code, we need to get a grasp on what is called **computational thinking**. This can be taught to children at a very young age without even touching a computer!

<div class="summary">

## Languages of the Web

</div>

<div class="details">

In web development, we use several programming languages, including PHP, Ruby, Python and JavaScript. JavaScript is the language we will be learning today because it's a language closely associated with HTML & CSS in that it can be executed in the browser. It's considered a front-end **and** a back-end language. The other programming languages mentioned do not run in the browser, so they are considered back-end languages.

While HTML & CSS determine the presentation of content on a website, JavaScript will determine the functionality and interactions of a website.

*Side note - JavaScript is often confused with Java, but they are two different languages. JavaScript is used for the web, and Java is used to build software applications.*

</div>

## Computational Thinking with Scratch

Before we sink our teeth into JavaScript though, we will learn some basics of computational thinking using a syntax-less language called Scratch.

Simply put, when we write a computer program, we give instructions to our computer to carry out a set of instructions that will help us solve a problem. While it may seem somewhat intimidating when we look at the syntax of a programming language like JavaScript, you need to always keep in mind that **the computer is not smart. You are!** Computers are just very fast at performing the tasks we tell them to perform.

The first skill you need to develop to become a great programmer is to think like a computer. That means **breaking solutions down** into **clear and simple steps** that a computer can perform.

If you were asking a human to walk from point A to point B you might say:

"Please walk over to point B"

If you were to ask a robot to do the same thing you would need to be much more clear, and break things down in a way it will understand:

Robot, please do the following:
1. Bring your right leg forward 50cm.
1. Bring your left leg forward 50cm past the right leg.
1. Bring your right leg forward 50cm past the left leg.
1. Repeat 2 and 3 until you reach Point B, and then stop.

> When you are following a recipe to bake something, and you read *2 egg whites*, unless you have never seen someone bake before, it is probably clear to you what that instruction means. Imagine explaining to a robot step by step how to extract an egg out of a carton, crack it, and separate the egg yolk from the white. Try it out with the person beside you or with a mentor! How would you write out these instructions?

We're going to learn about some of the basic components of programming languages by creating a simple computer game with Scratch:

Take a look at the demo of our game here (you may need to install/allow Flash if you haven't done so already to use Pixlr in our UX module):

<iframe allowtransparency="true" width="485" height="402" src="//scratch.mit.edu/projects/embed/145973347/?autostart=false" frameborder="0" allowfullscreen></iframe>

> ## Class Discussion:
> Computer games are usually made up of players, goals and rules.
>
>In your own words, describe all the instructions we might need to give the computer to make this game work. What are the players, goals and rules of this game? How does the player win? How does the player loose? How would you communicate the goals and rules to the computer?



## Programming with Scratch
 1. Go to [this URL](https://scratch.mit.edu/projects/72180312/#editor) for our starter project and click on the orange "remix" button on the upper right hand corner of the screen.
 1. On the left hand side we have the game area where you can see a planet, a rocket and an asteroid filled space background. In the middle you will see a bunch of colourful blocks. These are instructions you can give to the computer.
 1. To give an instruction to an object, select it from the Sprites section on the bottom left hand side of the screen (right below the game), and then drag any blocks you want to use, to the right hand side.
 1. Let's build the game together!

 > ## Code-Along: Let's create our own game using the instruction blocks:
> 1. Make the rocket follow the mouse, when it's clicked.
> 1. Make the rocket say "Hooray" if it touches the planet, and then go back to the original starting position.
> 1. When the rocket touches an asteroid, play a losing sound and return to the starting position.
> 1. When the green flag is clicked (used to initiate game play), return to the starting position.
> 1. Create a Points **variable** and add 1 point each time the rocket touches the planet.
> Bonuses:
>* Add a winning sound each time the rocket reaches the planet
>* Remove 1 point each time the rocket touches an asteroid to make the game more challenging!
>
> Watch the [Solution Video Walkthrough](https://www.youtube.com/watch?v=apx0WcL09ss)


## Intro to JavaScript

In our Scratch game we used some of the more common parts of any programming language. These include: **Data types** like *Strings* and *Numbers*; **variables**; **Loops**, **conditional statements**, **functions**, **events**, and even **methods**.

JavaScript includes **variables**, **functions**, **objects** or **control structures** such as **if** statements or **loops** just like Scratch. We will be going through each one of these components together.

### What do we use JavaScript for?

JavaScript controls the **behavior** of your web page. It allows you to do things such as:

* animate items
* react to user input (on scroll, on click)
  * hide and show content based on user input
* do calculations and process data

Here's what JavaScript looks like:

    var myVariable = "Hello World";
    function sayHello(){
        alert(myVariable);
    }
    sayHello();

<br>

It might look intimidating with all the JavaScript syntax, but it's not much different from this set of instructions in Scratch:

![]({{ site.img }}/module5/helloworld.png)
![]({{ site.img }}/module5/catsayshello.png)

Both the JavaScript function and the set of Scratch blocks are sets of instructions. The JavaScript function will make a box pop up with the words "Hello World" when the website loads.

Let's try some JavaScript!

## The Console

The console is a browser tool used to interact directly with a web page and is useful for testing small snippets of code, or for debugging errors.  You can type commands and test code directly in the console as well!

It can be accessed in the same developer tools that we're becoming familiar with. Right click anywhere on a web page and choose the *inspect* option, then open the **Console** tab.
The console in Chrome looks like this:

![Chrome console]({{site.img}}/module5/console-open.jpg)

Note the `>` symbol: it is used by the console to represent a space for you to enter your input.

<div class="summary">

### Types: Numbers

</div>

<div class="details">

JavaScript values can be one of several different *data types*. The most basic is a number.

JavaScript can also do math.  
Use `+` for addition, `-` for subtraction, `*` for multiplication and `/` for division.

> Let's try out a couple math exercises in the console.

After the `>` symbol, try adding any two numbers together using the `+` symbol and press the enter/return key.  The command gets *evaluated* and a value is returned back to you. You will see something like this:

    > 30 + 30
    < 60

The `>` symbol is used by the console to represent a space for your input.  
The `<` symbol is used by the console to represent the returned value of your input.

> **Fun Fact:** The order of operations is BEDMAS. Remember BEDMAS? (Brackets, Exponents, Division, Multiplication, Addition, Subtraction)

> In Scratch, we used numbers in our game to count points, and to make the rocket go back to the starting coordinates on the x and y grid.
>
>**What do you think numbers and math can be used for in a website?**

</div>

<div class="summary">

### Types: Strings

</div>

<div class="details">

When you store any amount of text, like words or sentences, the *type* is a **string** value and must be contained in quotes.

    > "hello"
    < "hello"

> In our Scratch game, we had the rocket say "Hooray!" when it reached its goal. "Hooray" was a string.
>
>**When do you think a string can be used with JavaScript?**

</div>

<div class="summary">

### Concatenation

</div>

<div class="details">

You can join strings together using the `+` symbol. This is called **concatenation**.  You can join strings that you type out, or strings that are contained in a variable.

    var name = "Ladies Learning Code";
    var greeting = "Hello " + name + "!";

These are often used in email newsletters to feel more personal. You can store the subscriber's name in a variable so you can address them by name in the future!

</div>

<div class="summary">

### More Types

</div>

<div class="details">

There are even more data types! You can learn about more of them here: [Microsoft Developer Network Data Types (JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

</div>

<div class="summary">

### Comments

</div>

<div class="details">

There are two ways to write comments:

    // Single line comment.
    // Each line needs to start with the two slashes

    /*
    Multi-line comments
    Open and close the block
    with the same syntax as
    CSS comments!
    */

It is highly recommended to use comments to explain what you are doing as you are programming. If you follow this good habit, it will be much easier for other programmers (or for yourself in the future) to read your code and understand what is going on. Think of it as a way to take notes for yourself directly within your program.
</div>

### Intro to Functions

JavaScript generally executes one line at a time, from top to bottom.

Functions can be used to execute a repetitive set of instructions by grouping multiple commands and giving it a name. For example, when you tell your child to *make their bed*, that one command actually involves many individual instructions that need to be followed. Once you teach your child how to make the bed once, all you have to do in the future is tell them to *make their bed*, and they will carry out all the steps involved in making the bed.

There are also functions built into the language that you can use without having to create them all on your own.

In Scratch, we created a set of instructions for when our rocket was clicked. That was a function that looked like this:
<br>
![]({{ site.img }}/module5/scratch-function.png)

We also used built-in functions in Scratch like this:
![]({{ site.img }}/module5/scratch-builtin.png)

Let&#39;s look at the `alert()` function in JavaScript.

Note the syntax for functions; the parentheses `()`, must be included!

Similarly to CSS, commands end with a semi-colon `;` to indicate that the instruction is complete.

>Go back to the console and type in `alert();`, and see what happens!

### Functions and Arguments

We&#39;ve seen now that the `alert()` function creates a pop-up in the browser, but the pop-up is blank. That's because we need to *pass* an `argument` into this function by adding a value *within* the parentheses `()`.

Note the use of quotes for **strings**:

>Try this in the console:
>
    alert("Hello!");
>
>Try using the function again, this time with a different argument.


Whatever value you put within the parentheses will get *passed* into the function. That way, you can re-use the function with different arguments!

### Make your own functions

To create your own functions, use the keyword `function` and give it a name:

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

#### Resources: JavaScript Functions

* [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
* [Tutorials Point](http://www.tutorialspoint.com/javascript/javascript_functions.htm)

### Variables

Variables are used to store values. They are just a space in the computer's memory where it can remember a number or a sentence that you can use later. Remember ![]({{ site.img }}/module5/scratch-variable.png) ?

It&#39;s like a box; put something in it to store and access it when you&#39;re ready to use it.  

Declare variables with the keyword `var` and a name of your choosing, and *assign* it a value. The variable name cannot contain spaces, just like a function name:

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

>Try out the above example line by line into the console.  What do you think the alert message will be?

### Objects
If variables are boxes of memory, objects can be thought of as a box with multiple compartments, like a bento box!

A basic variable only holds one value:

<img class="left" src="{{site.img}}/module5/rice.png" alt="rice object example">

    /* declare the variable */
    var box;
    /* assign a value */
    box = "Rice";

<hr class="clear">
If you already know what the value is going to be, you can declare the variable and assign a value at the same time in one line:

    var box = "Rice";

*Sometimes we don't know what the initial value of a variable will be quite yet, because it depends on some input from the user. In those cases, we still need to declare the variable (allocate a space in memory), but you do not need to assign a value to it right away.*

An object holds a *collection* of values. Each value is considered a **property** of the object:

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

Enter the above line by line into the console. Then type `bentobox` to see the object returned. You'll see each of the object's name:value pairs:

    bentobox = {
    	main: "Teriyaki",
    	side: "Tempura",
    	salad: "Seaweed Salad",
    	soup: "Miso",
    	sauce: "Soya",
    	dessert: "Fruit" //Notice there's no comma on the last name:value pair.
    }
<hr class="clear">

### (Almost) Everything in JS is an Object

Although variables are simple and hold only one value, they can also be treated as an object. *Dot notation* can be used to set the property value of an object, but can also be used to get information from an object using functions.

When you apply a function to an object, it's called a **method**.

For example, the `length()` method can be used to find the number of characters in a string.

    var day = "Sunday";
    alert(day.length);

You can even make the length command into a variable:

    var day = "Sunday";
    var lengthOfString = day.length;
    alert(legthOfString);

#### Resources: JavaScript Objects

* [JavaScript values: not everything is an object ](http://www.2ality.com/2011/03/javascript-values-not-everything-is.html)
* [The Secret Life of JavaScript Primitives](http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)

### Objects, Functions and Methods

What&#39;s the difference between the two lines below?  
The second one kind of looks like a function right?

    alert();
    console.log();


`alert()` is a **function** - it works on its own.

`log()` is a function (functions are always followed by the parentheses), but it is attached to the `console`, which is an *object*. Functions are attached to an object using the dot `.` notation.

When a function is attached to an object, it's referred to as a method. In this case, it will **log** a message into the **console**.

`console.log()` can be used to test and debug by outputting values in the browser console, rather than using an obtrusive `alert()`. No more pesky pop-ups!

    alert("hello!"); /* will show as a popup */
    console.log("hi!"); /* will show in only the console */

>Try passing an argument into both `alert();` and `console.log();` to see the difference.

## CSS vs JavaScript

With the introduction of new CSS3 properties, effects such as animating page elements which were once only possible with Flash or JavaScript, can now be achieved using pure CSS! So sometimes trying to figure out when to use CSS or JavaScript can be tricky.

Some guidelines:

* if it can be accomplished with CSS, it's better to go with CSS
* CSS is executed as soon as the page loads. If it requires some sort of interaction with the users (eg. a click or a scroll), you need to use JavaScript

If it's a visual effect, that happens on page load, you *might* be able to use CSS

<div class="summary">

### CSS3 animations

</div>

<div class="details">

* Learn how to implement [animations on hover](https://learn.shayhowe.com/advanced-html-css/transitions-animations/) using the `transition` property
* Explore the [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) property, which allows for timing delays. They are still not attached to user actions
* [Getting Started with CSS3 Transitions and Animation](http://blogs.adobe.com/dreamweaver/2015/09/getting-started-with-css3-transition-and-animation.html)
* [Animate.css](https://daneden.github.io/animate.css/)

</div>


#### More JavaScript Resources

* Book: [JavaScript for Web Designers from the A Book Apart series](https://abookapart.com/products/javascript-for-web-designers)
* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [JavaScript 101 — again](https://medium.com/@christinatruong/javascript-101-again-6f5c3de74165)
* [JavaScript Methods](http://www.scribd.com/doc/19457597/Javascript-Methods)
* [Code School: JavaScript](https://www.codeschool.com/paths/javascript)
* [GreenSock is a popular JS-based animation library](https://greensock.com/gsap)
* [ScrollMagic](http://scrollmagic.io) - a JS library that works with GSAP for scrolling animations
* ihatetomatoes has excellent [free beginner workshops](https://ihatetomatoes.net/) on GreenSock

~ end ~
