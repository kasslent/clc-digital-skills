---
layout: lessons
module: 3
lesson: 3
title: CSS Fundamentals
description: Display vs floats and positioning.
permalink: module3-3.html
---


## Display vs Floats

In previous lessons, we talk about inline & block elements and how to use the `display` property to change the behavior and make elements line up side by side or stacked. Refer to the previous lesson's [Codepen](http://codepen.io/learningcode/pen/vNRadg) for a refresher.

`float` can also be used to align elements side by side as well. Refer to the previous lesson's [Codepen](http://codepen.io/learningcode/pen/gaedLj) for a refresher.

So which one is better for page layouts?

It depends. This is widely debated among developers but both techniques come with their own quirks.  Understanding how to use each technique is the key to choosing which one is right for job.

Let's take a look at using display vs floats for styling a horizontal navigation menu.

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

If you use `float` instead of `display`, you won't see this quirk.

    nav ul li {
        float: left;
        background: lightblue;
    }

![]({{ site.img }}/module3/horizontal-nav-float.png)

But, float has it's own quirks too. What happened to the red background in the `ul`?

Let's tackle the `display` example first.

## Horizontal navigation: Display

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

## Horizontal navigation: Float 

When you use float to align elements, there is no extra white space to worry about. But, remember, float has it's own quirks too.  The parent of the floated elements collapse, which can cause problems too. 

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


>## EXERCISE: Horizontal navigation
>
>In the exercise files downloaded earlier, in the **project** folder, you will find a basic webpage.  Using the existing HTML & CSS files, try styling the list navigation using the techniques discussed so far.
>
>**Pro tip!** There is already existing CSS in the exercise so be sure to put your CSS in some kind of logical & organized order.

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

> Let's try these values in [CodePen](http://codepen.io/learningcode/pen/PPedPQ)


### Extra resource

[https://css-tricks.com/almanac/properties/p/position/](https://css-tricks.com/almanac/properties/p/position/)



~ End ~


