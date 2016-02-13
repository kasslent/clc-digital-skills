---
layout: lessons
module: 5
lesson: 2
title: jQuery & Plugins
description: Exploring jQuery and extending the library with Plugins.
permalink: module5-2.html
---

## jQuery Click Events

Let's do a review of the jQuery click events from the last lesson.

#### Syntax
 
    $( "selector" ).click(function() {
      // code to be executed on click
    });

[CodePen example](http://codepen.io/learningcode/pen/WQYpxG).

**Resource**: <http://api.jquery.com/click/>

## Documentation & Finding Answers

A part of web development is reading tutorials, articles and documentation.  

Another important part is knowing how to ask directed questions to find the answers.

> Discussion: What are some search techniques or resources that can be used to find answers?


##Click event & an "active" menu

Here's an example of a navigation effect that can be added to a one page website.

<p data-height="185" data-theme-id="0" data-slug-hash="XJwKBb" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/XJwKBb/'>XJwKBb</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

Here's how to do it, broken down into steps.

1. Select the elements to be clicked. 
1. Test if you have correctly selected the element with `console.log()`.
1. Add a class of “active” to the active link (the link that was clicked) using `addClass()`.
1. Add the “active” class style to the CSS file.
1. When the user clicks on another menu item, add the “active” class to the new item and remove the active class from non-active items.

> ##Class Exercise: "Active" menu
> Download the <a href="exercises/module5/javascript.html" download>javascript.html</a> exercise file.  Using the instructions above to create active styles for the menu, based on the user's click.


##Plugins

A plugin is a piece of software that adds additional functionality and are available for many programming languages, software (i.e. browsers) or frameworks (i.e. WordPress). 

The jQuery library contains many methods and features but you can extend it even further by using plugins.

Let's take a look at one of many [smooth scroll plugins](https://github.com/cferdinandi/smooth-scroll). (This one is all JavaScript, no jQuery!) 


> ##Class Exercise: Smooth scroll
> Using the previous exercise file, add the smooth scroll plugin.  
> Let's follow the instructions listed in the plugin developers [site](https://github.com/cferdinandi/smooth-scroll).

> Bonus exercises:
>
> 1. Set the navigation to be fixed at the top of the page.
> 1. Use the [plugin options](https://github.com/cferdinandi/smooth-scroll#options-and-settings) to add an "offset" option, so you can position where the page scrolls to.
>
> Solution file for both exercises can be [downloaded here](exercises/module5/javascript-solution.zip).



##More Plugins!

* [jQuery UI](https://jqueryui.com/)
* [The jQuery Plugin Registry](https://plugins.jquery.com/)
* [Flexslider](http://www.woothemes.com/flexslider/) (photo slider)

<br>
~ end ~