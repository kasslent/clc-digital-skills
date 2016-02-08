---
layout: lessons
module: 5
lesson: 2
description: jQuery & Plugins
permalink: module5-2.html
class: module5-2
---

##CSS vs JavaScript

With the introduction of new CSS3 properties, effects such as animating page elements previously created with Flash or JavaScript can now be achieved using pure CSS. So sometimes trying to figure out when to use CSS or JavaScript can be tricky.

Some guidelines:

If it can be accomplished with CSS, usually it's better to go with CSS.

* keep in mind that HTML semantics and efficient & clean code comes first
* if it requires too many hacks or HTML/CSS that goes again best practices, creates accessibility or SEO issues, use JS!

If it's a visual effect, that happens on pageload, you *might* be able to use CSS

* CSS is excuted as soon as the page loads
* new CSS3 property, [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes), allows for timing delays but still not attached to user actions
* if it requires user interaction (e.g. when user clicks, when user scrolls), then it's usually JS

####Extra Resources

* [Getting Started with CSS3 Transitions and Animation](http://blogs.adobe.com/dreamweaver/2015/09/getting-started-with-css3-transition-and-animation.html)
* [Animate.css](https://daneden.github.io/animate.css/)



##Ideas for JavaScript/jQuery additions

###Dates
Use the JavaScript `Date` object to ensure the copyright date in your footer is always up-to-date, automatically!

This requires the `new` keyword to *call* it. Also note that the "D" is capitalized. Testing this out in your browser console will return a value that will look similar to the example below.
    
    > new Date();
    < Date 2015-11-11T19:15:11.443Z

If you want to get just a portion of the date, use a **method**. For example `getFullYear()` will  get a 4-digit year value.
    
    > new Date().getFullYear()
    < 2015

>##Exercise: Add a dynamic date to your web page
>
>To get the value to output onto your HTML page, follow the steps below.
>
>Try following the steps below independently or in partners.  
>Then we'll discuss as a class.
>Download the starter files for the exercise here: <a href="{{site.exercises}}/module5/week5-exercise.zip" download>week5-exercise.zip</a>

**Step 1:** In **index.html**, reference the [jQuery](http://jquery.com/download/) file since this example will use a mixture of JavaScript and jQuery specific methods. Remember, you can add JavaScript anywhere but it's usually recommended to add it right before the closing `</body>` tag.

    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

**Step 2:** An external `scripts.js` file is included in your exercise file. Link to it to the HTML page and add the "document ready" code snippet.  You can add a `console.log()` message to test it out.
  
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="js/scripts.js"></script>

---

    $( document ).ready(function() {
      console.log("it works!");
    });

**Step 3:** Create a **variable** to *hold* the value of the `Date()` object.
    
    var currentYear = new Date().getFullYear();
    
**Step 4:** Add your copyright content, in the `<footer>` and an id, class or some way to select the element to apply the date to.  In this example below, the `id="date"` can be used as the jQuery selector.
    
    <p id="copyright">Copyright by Ladies Learning Code</p>
    
---
    var currentYear = new Date().getFullYear();  
    $("#copyright")
    
**Step 5:** We can use the jQuery `prepend()` method to add the date to the selected element. The description on jQuery's api says:  

<blockquote class="quote">
  <p>Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.</p>
  <cite markdown="1"><http://api.jquery.com/prepend/></cite>
</blockquote>

Since we want to add the date to the HTML, we can use the `currentYear` variable to *pass* the value into the `prepend()` method, which will then prepend the date into the sentence!

    var currentYear = new Date().getFullYear();  
    $("#copyright").prepend(currentYear);
    
**Bonus step:** After following all the steps above, your output will look like this: 

    2015© by Ladies Learning Code

How can you add a space between the "2015" and the copyright symbol?

This is just one way to add the date for this specific scenario. There are other jQuery methods such as `text()` or `append()` that can also be used to add text.

>Discussion: What are some search techniques that can be used to figure out if and which jQuery method to use?


##Click event & an "active" menu

Here's an example of a navigation effect that can be added to a website.

<p data-height="185" data-theme-id="0" data-slug-hash="XJwKBb" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/XJwKBb/'>XJwKBb</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

Here's how to do it, broken down into steps.

1. Select the elements to be clicked.
1. Add a class of “active” to the active link (the link that was clicked) using `addClass()`.
1. Add the “active” class style to the CSS file.
1. When the user clicks on another menu item, add the “active” class to the new item and remove the active class from non-active items.

##Plugins

The jQuery library contains many methods and lots of other features but you can extend it even further by creating a **plugins** or using many of the plugins made by the jQuery team or created by other people.

Let's take a look at a basic smooth scroll plugin (<https://github.com/cferdinandi/smooth-scroll>) and add it to our project. (This one is all JavaScript, no jQuery!) 

##More Plugins!

* [jQuery UI](https://jqueryui.com/)
* [The jQuery Plugin Registry](https://plugins.jquery.com/)
* [Flexslider](http://www.woothemes.com/flexslider/) (photo slider)

~ end ~