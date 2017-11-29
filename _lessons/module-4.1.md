---
layout: lessons
module: 4
lesson: 1
title: CSS Layouts
description: Display, flexbox and positioning.
permalink: module4-1.html
---


## Inline-block vs Flexbox

In previous lessons, we talk about inline & block elements and how to use the `display` property to change the behavior and make elements line up side by side or stacked. Refer to the previous lesson's [Codepen](http://codepen.io/learningcode/pen/vNRadg) for a refresher.

The Flexible Box Layout Module has become more widely supported and used by developers, provided that they do not have to support Internet Explorer 10 and below. 

![]({{ site.img }}/module3/flexbox-support.png)

That being said, the [Browser Support](http://caniuse.com/#search=flex) for Flexbox has certainly improved and will work on all modern browsers. If you need to support older browsers, then you would have to use **floats**.

## Let's talk about Floats

The CSS `float` property is another way to align elements side by side. 

To get block level elements to line up side by side using floats, the stacking flow has to be *broken* first. 

Use the `float` property with a value of `left` or `right` to align an element to either side. Any element after the floated element will move up beside it.

![]({{ site.img }}/module3/float-recording.gif)

But floating elements like this may have unexpected results.

![]({{ site.img }}/module3/float-unexpectedresults.png)

If your content is the same size or longer than the floated element (the left image in the above example), then you won't see this problem.

Adding content won't fix the issue unfortunately. First, we had to break the stacking order and now we have to put it back together.

To restore the regular stacking flow after the floated element, it needs to be reset. There are a couple ways to do it... but this is a concept that requires much more discussion outside of the scope for today. For more information, check out these extra resources:

### Float resources

* [CSS Fundamentals: Containing Children](https://code.tutsplus.com/tutorials/css-fundamentals-containing-children--net-5664)
* [Clearing Floats: An Overview of Different clearfix Methods](http://www.sitepoint.com/clearing-floats-overview-different-clearfix-methods/)
* [Force Element To Self-Clear its Children](https://css-tricks.com/snippets/css/clear-fix/)

Also feel free to check out this [Codepen](http://codepen.io/learningcode/pen/gaedLj) to see how floats work.

<br>

Today we're going to dive deeper into using **display** with both **inline-block** and **flexbox** to style a horizontal navigation menu.

## Horizontal Navigation

Traditionally, navigation links were contained in a list like this:

#### Pre-HTML5

    <div class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
    </div>

    
#### HTML5

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
    </nav>

<blockquote class="note">
  <p>This is another topic where there is much debate. Are lists necessary for accessibility and semantics or should links be used on it’s own?  You can read more about it <a href="https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/">here</a> and <a href="http://www.sitepoint.com/are-navigation-lists-necessary/">here</a>.</p>
</blockquote>


To style a list navigation, first you'll need to reset the list styles.  You'll probably also want to remove the default underline of the links. 

Putting a background color on the `ul` will help to visually see the space the element is occupying.
Using the HTML5 markup example above, the CSS will looks like this:
    
    nav a {
      text-decoration: none; /* remove default underline */
    }
    nav ul {
      margin: 0; /* remove default margin */
      padding: 0; /* remove default padding */
      list-style-type: none; /* removes default bullets */
      background: red;
    }


Using `display`, there are two values that can be used to align the list items horizontally.

`inline` will line up side by side but does not accept height and width values.

    nav ul li {
      display: inline;
    }
    
`inline-block` will also display the items side by side but accepts height and width values.

    nav ul li {
      display: inline-block; 
    } 
     
> Which one is better to use?

At this point, the nav will be aligned horizontally but could use some spacing.  

![]({{ site.img }}/module3/horizontal-nav-no-padding.png)

Put some padding on the link, `a`, to make the links look less squished and improve accessibility by making the clickable area bigger.  Reminder, links are *inline* elements by default which doesn't render padding properly.


    nav a {
      text-decoration: none;
      display: inline-block; /* add block behavior to use padding */
      padding: 10px;
    }

> Use this [Codepen](http://codepen.io/learningcode/pen/meLJMZ) to explore these styles before moving on.


### Getting to know your options
If you put a background color on the list item, you'll see an extra space between the elements.  Here's the quirk!

    nav ul li {
      display: inline-block; 
      background: lightblue;
    }

![]({{ site.img }}/module3/horizontal-nav-display.png)

The extra space is caused by the line break in the HTML used to put the `<li>` on separate lines.

If you use `display:flex;` on the **ul** instead, you won't see this quirk. More on that soon!

<!-- But, float has it's own quirks too. What happened to the red background in the `ul`? -->

Let's tackle the `display:inline-block;` example first.

## Horizontal navigation using inline-block

If your design does not require equal width "boxes" or you don't mind the space, visually, then leaving this as is would work just fine.  You can even add `text-align: center;` to automatically center align the list items containing the links.

    nav ul {
      text-align: center;
    }

![]({{ site.img }}/module3/horizontal-nav-centered.png)

Let's say you wanted 4 equal width boxes for the nav.  You could set the list items to a width of 25%.

    nav ul li {
      background: lightblue;
      width: 25%;
    }
    
However, the space between the `<li>` tags are taking up space so the boxes won't fit in one line.
![]({{ site.img }}/module3/horizontal-nav-spaces.jpg)

You could be sneaky and set the width to something slightly less than 25% or use a negative margin to nudge the elements a few pixels to the left. These options will work and get close to 100% total width but to truly remove the space, here's another fix.

    nav ul {
      font-size: 0; /* removes space between li elements */
    }
    nav ul li {
      font-size: 16px; /* reset the inherited font-size */
    }

> Let's go back to the previous [Codepen](http://codepen.io/learningcode/pen/meLJMZ) and try this out.

## Horizontal navigation using flexbox 

With the introduction of **flexbox**, styling a horizontal navigation is made much easier. To ensure the list items are all sitting next to each other, simply add `display: flex;` to the `<ul>`:

    nav ul {
        display: flex;
    }

![]({{ site.img }}/module3/flexbox-nav-flex.png)
<br><br>

What if you want to center your links in the middle of your nav? 
<br>Enter: `justify-content`

    nav ul {
        display: flex;
        justify-content: center;
    }

![]({{ site.img }}/module3/flexbox-nav-center.png)
<br><br>

The CSS property `justify-content` is super powerful. Let's say you want to align your nav on the right:

    nav ul {
        display: flex;
        justify-content: flex-end;
    }

![]({{ site.img }}/module3/flexbox-nav-end.png)
<br><br>

On the left:

    nav ul {
        display: flex;
        justify-content: flex-start;
    }

![]({{ site.img }}/module3/flexbox-nav-start.png)
<br><br>

Okay that's kinda boring. We could've used text-align on the `<nav>` to achieve that too, right? Well - can `text-align` do this?! 

    nav ul {
        display: flex;
        justify-content: space-between;
    }

![]({{ site.img }}/module3/flexbox-nav-space-between.png)
(P.S. the answer is no - `text-align` can't do that)
<br><br>

What if you don't want your links to go all the way to the edge? Let's say you want equal space around all the link items...

    nav ul {
        display: flex;
        justify-content: space-around;
    }

![]({{ site.img }}/module3/flexbox-nav-space-around.png)


<!-- When you use float to align elements, there is no extra white space to worry about. But, remember, float has it's own quirks too.  The parent of the floated elements collapse, which can cause problems too. 

Suppose you had some content after the navigation?  It will look like this:

<p data-height="175" data-theme-id="0" data-slug-hash="qOYbYX" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/qOYbYX/'>Horizontal nav & floats</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

No worries, just remember to clear your floats! Since this example requires all the list items to float, you'll need to *self-clear* the floated elements.

    nav ul {
      overflow: hidden;
    }
    
(You can also use the "clearfix hack" instead of `overflow`.)

With float, you could set equal widths without adding additional hacks. The below snippet will work just fine.

    nav ul li {
      width: 25%;
    }

However, `text-align: center;` will only center align the text *within* the `<li>` tags, not automatically center align the list items itself, like in the `display` example.

>Let's try these techniques out in this [CodePen](http://codepen.io/learningcode/pen/qOYbYX?editors=110#0).
 -->

>## EXERCISE: Horizontal navigation on your project
>
>Now open up your own project file and try styling the list navigation using `flexbox`. If you don't have a navigation on your own website, create one!
>
>Use some of the layout techniques we've learned the last couple of classes and apply them to your website as needed.

These are just some benefits to using `flexbox` to lay out your site, and we've only just scratched the surface. Using `flexbox`, you can alter the **order** in which items appear, and much more. This becomes even more powerful when re-arranging your desktop site for mobile devices.d

### Read more about Flexbox!

* [CSS Tricks - Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Joni Bologna - Flexbox Cheatsheet](http://jonibologna.com/flexbox-cheatsheet/)
* [What the Flexbox?! - Free 20-video course on CSS Flexbox](http://flexbox.io/)
* [Flexbox Reference (Codrops)](http://tympanus.net/codrops/css_reference/flexbox/)

<br>
Remember, every HTML element is essentially just a "box" so the techniques discussed above are not limited to just navigations using a list.  


## CSS Position property
The `position` property can also be used to lay out HTML elements and has five different values: `static`, `relative`, `absolute`, `fixed` and `inherit`.

`position` is also used with a combination of box *offset properties*, `top`, `right`, `bottom` and `left`, to specify the direction and measurements for the positioned elements.

### position: static;

* default value
* elements are not positioned at all and in the normal page flow
* offset properties are ignored

### position: relative;

* has the same behavior as `static` **but** box offset properties can be applied to it
* use this to nudge the element within its stacked order

### position: absolute;

* can be positioned anywhere, relative to its **nearest positioned ancestor** element
* if no ancestor element is positioned, it will be relative to the body
* to contain the element, use `position: relative` in a parent selector

### position: fixed;

* positioned anywhere regardless of stacking order
* not affected by any positioned ancestor element
* always positioned to the body
* stays in place when you scroll

### position: inherit;

* takes the same value as its parent

> Let's try these values in [CodePen](http://codepen.io/learningcode/pen/PPedPQ).


### Extra resource

[https://css-tricks.com/almanac/properties/p/position/](https://css-tricks.com/almanac/properties/p/position/)



~ End ~


