---
layout: lessons
module: 5
lesson: 2
title: jQuery & Plugins
permalink: module5-2.html
class: module5-2
---

##CSS vs JavaScript

With the introduction of new CSS3 properties, effects such as animating page elements previously created with Flash or JavaScript can now be achieved using pure CSS. So sometimes trying to figure out when to use CSS or JavaScript can be tricky.

Some guidelines:

If it can be accomplished with CSS, usually it's better to go with CSS.

* keep in mind that HTML semantics and efficient & clean code comes first
* if it requires too many hacks or HTML/CSS that goes again best practices, creates accessibility or SEO issues, use JS!

If it's a visual effect, that happens on page load, you *might* be able to use CSS

* CSS is executed as soon as the page loads
* new CSS3 property, [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes), allows for timing delays but still not attached to user actions
* if it requires user interaction (e.g. when user clicks, when user scrolls), then it's usually JS

####Extra Resources

* [Getting Started with CSS3 Transitions and Animation](http://blogs.adobe.com/dreamweaver/2015/09/getting-started-with-css3-transition-and-animation.html)
* [Animate.css](https://daneden.github.io/animate.css/)



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