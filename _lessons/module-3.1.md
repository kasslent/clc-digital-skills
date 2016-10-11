---
layout: lessons
module: 3
lesson: 1
title: CSS Fundamentals
description: CSS selectors, block and inline elements, and the Box Model.
permalink: module3-1.html
---


In the previous lessons, we covered a few ways to select an element to apply CSS to it, but there are many more! Let's do a review and look at a few more.


## Type, class and id Selectors

**Type selectors** target HTML elements by their element tag name. 

    p {
      /* targets all paragraphs */
    }

**Class selectors** are added using a class *attribute* to any element. 

Remember, any *attribute* is added to the opening HTML tag. The same class can be used 1 or more times throughout the page and must be reference in the CSS with a leading period.

    <p class="special">This is a special paragraph</p>

---
    
    .special {
      /* applies to any element with this class */ 
    }
    p.special {
      /* more specific - applies only to paragraphs with this class */
    }

**ID selectors** can be used only once per page and is reference in the CSS using the number/hash symbol (`#`).

    #about {
      /* applies to any element with this id */ 
    }
    section#about {
      /* more specific - applies only to a section element with this id */
    }

## Descendant Selectors
Descendant selectors can be used to target *nested* elements. To use a descendant selector, add a *space* between selectors.

    <parent>
      <child>
        content here
      </child>
    </parent>
    
---
    parent child {
      /* targets only the child elements contained in that parent */
    }

---

    <ul>
      <li><a href="#">link 1</a></li>
      <li><a href="#">link 2</a></li>
      <li><a href="#">link 3</a></li>
    </ul>
    
---
    ul li a {
      color: blue;
    }

In the above example, this style would apply only to links inside of a list item, inside of an unordered list. Descendant selectors apply to any nested element, no matter how many levels deep.

You can even "skip" an element. The below example will work as well.

    ul a {
      color: blue;
    }

### Descendant Selectors and Specificity
A good rule of thumb for descendant selectors is to avoid going more than **three** levels deep.  Browsers read selectors from right to left and work its way up the [DOM](http://www.w3.org/TR/WD-DOM/introduction.html) tree.  Having many selectors can impact the site performance.

#### Yes
    p a {
      /* targets anchor link tags nested inside of a p tag */
    }
    .about p {
      /* targets paragraphs within an element with the .about class*/
    }

#### No!
    .about ul li a span {
      ...
    }

Also, a more *specific* selector will override the descendant selector, regardless of written order in the CSS file.
    
    ul a {
      /* least specific */
    }
    ul li a {
      /* more specific */
    }
    ul.nav li a {
      /* most specific */
    }


## Combining selectors
You can also combine selectors if you want the same style to be applied to multiple elements by separating the selectors with a *comma*. Any type of selector can be combined.

    .special, #special {
      color: red;
    }
    h1, h2 {
      text-transform: uppercase;
    }
    header h1, h2 {
      text-transform: uppercase;
    }

> What is the difference is between combining `h1, h2` and `header h1, h2`?

## Pseudo-class Selectors

Pseudo-class selectors target an elements *state* or *action*. The most commonly used pseudo-class is `:hover`.  Note the syntax. It must start with a colon (`:`) and be attached to an HTML element, with no white-space.

    <a href="#">Example link</a>

---
    a { 
      color: red;
    }
    a:hover { 
      color: black;
    }

### Pseudo Class & links

`:hover` - selects the link on mouse hover.  
&nbsp; Can also be used to create hover effects for elements other than an `<a>`.

`:link` - links that have *not* been clicked/visited

`:visited` - links that *have* been clicked/visited in the the current browser

`:active` - selects the link while it is being activated/clicked.


<br>
There are **many** more ways to select elements such as position in the HTML document or by attribute name. Explore the resources below for more information about advanced CSS selectors.


>## EXERCISE: Selectors
>
>Download the <a href="exercises/module3/selectors.zip" download>exercise</a> (zip file). The answer key has been included so no peeking unless you really really need to! 
>
>All the instructions are contained in the comments at the very top of `selector.html`.


## Block vs Inline Elements


Though CSS can be used to add a lot of new styles to your webpage, CSS is also used to override default HTML styles.


Block level HTML elements default behavior:

* takes up 100% width of its container, no matter how long the actual content is
* will be the same height as its content
* always starts on a new line
* can wrap other block level elements or inline elements
* can apply sizing related CSS to it (margin, padding, height, width)
* examples: `<p>`, `<div>`, `<ul>`

Inline level HTML elements default behavior:

* will be the height and width of its content
* always appears "in a line" with other inline level elements
* can wrap other inline elements but cannot wrap block level elements *except* `<a>` tags.  This is only valid with an HTML5 doctype.
* does not render CSS height and width at all, will apply margin and padding but with unexpected results
* examples: `<a>`, `<span>`

<br>
**Pro tip!** If you're not quite sure if an element is block or inline, put a background color on the element.  If it stretches the full width of the browser window, it's a block element.  If it spans only the length of its content, it's an inline element.

<div style="background:lightblue;">this is a div</div>

<span style="background:lightgreen;">this is a span</span>


## CSS Display

CSS can be used to change how inline and block elements display using the `display` property. There are three values we'll look at today: 

* `block` - makes inline elements display as block elements
* `inline` - makes block elements display as inline-block
* `inline-block` - best of both worlds

This property will come in handy when using the Box Model properties.  Let's do a review before we put display to use.

### Resource 

[CSS Tricks: Display property](https://css-tricks.com/almanac/properties/d/display/)



## Box Model Review

The last lesson introduced the Box Model and 5 CSS properties: width, height, padding, margin, border.  Let's do a review and then dive a little deeper!

* the browser looks at HTMLs element as a square/rectangular box
* the box model describes the way CSS handles the size and spacing of HTML elements
* `width` - change the default width
* `height` - change the default width
* `margin` - add or remove default space around the element
* `padding` - add or remove default space inside the element
* `border` -  add a border around the element

### Seeing it all together

    width: 80%;
    margin: 50px auto;
    padding: 40px; 
    border: 5px solid black;

<div style="width:80%;margin:50px auto;padding:40px;border:5px solid black;">
  <p style="margin:0;padding:0">Just some content for demonstration purposes. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>


### Width & Height

The `width` & `height` properties can be used to set specific heights and widths to only *block* level elements.  It won't work for *inline* level elements unless you use `display` to change it to `block` or `inline-block`.

### Padding

The `padding` property adds/removes space *inside* of the element. It only accepts positive numerical values.

    /* longhand */
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;

    /* shorthand */
    padding: 2px; /* same on all sides */
    padding: 2px 10px; /* top & bottom, right & left */
    padding: 2px 10px 5px; /* top, right & left, bottom */
    padding: 2px 2px 2px 2px; /* top right bottom left */

<p style="background:lightblue;padding:0px;">This is a paragraph without padding.</p>
<p style="background:lightgreen;padding:20px;">This is a paragraph with padding.</p>

When adding padding to an *inline* element it will look like the below example.
<p style="background:lightblue;padding:0px;">This is a block element without padding.</p>
<a href="#" style="background:lightgreen;padding:20px;">This is an inline element with padding.</a>

<br>
Notice that there's no space between the two element? Inline elements don't apply padding the same way as block elements.  You will need to use the CSS `display` property. 

More on this in the upcoming exercise.

### Margin
Margin adds/removes space *outside* of an element. However, the shorthand and longhand rules are the same as padding. 

    /* longhand */
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    margin-left: 2px;

    /* shorthand */
    margin: 2px; /* same on all sides */
    margin: 2px 10px; /* top & bottom, right & left */
    margin: 2px 10px 5px; /* top, right & left, bottom */
    margin: 2px 2px 2px 2px; /* top right bottom left */
    
<p style="background:lightblue;margin:0px;">This is a paragraph without margin.</p>
<p style="background:lightgreen;margin:40px;">This is a paragraph with margin.</p>

Just like padding, margin and spacing is not applied the same way to block and inline elements.

<p style="background:lightblue;margin:0px;">This is a block element without margin.</p>
<a href="#" style="background:lightgreen;margin:40px;">This is an inline element with margin.</a>


> ## Class Exercise: Box Model & `display`
> In this [Codepen](http://codepen.io/learningcode/pen/vNRadg), let's try the different `display` property values and see how it affects inline & block HTML elements.


## Margin & Negative values

Margin also accepts negative values.  This will nudge it just outside of its stacked position.

<p style="background:lightgreen;margin:0px;">This a paragraph without margin.</p>
<p style="background:lightblue;margin:-15px 0 0 340px;">This a paragraph with a <strong>negative top</strong> margin value and a <strong>positive left</strong> value.</p>

## Center Aligning with `margin`
The margin property can also be used to center align *block* level elements. 

First a width needs to be set. Then by setting the left & right values to `auto`, it finds the center of the page. The `0` refers to the top and bottom value and can be set to any value depending on the desired page style.

    div {
      background: lightblue;
      width: 600px;
      margin: 0 auto; /* 0 on the top & bottom, auto on the left & right */
    }

<div style="width:600px;margin: 0 auto;background:lightblue;">
  <p>Auto aligned!</p>
</div>

<br>
But notice how the background color only extends the set width of the element?  What if you want to auto align the content only and have different background colors or images?  In the below example, notice that content stays in the middle but the background styles expand the width of the page?

![]({{ site.img }}/module3/content-align.jpg)


In the previous lesson, a wrapper was included around all of the page content.  

But to create a style where different background styles apply to each section, we'll need to:

* create a wrapper, just for the content, not the whole page
* auto align the content wrapper
* use the outer container for the background styles

>Looking at this [CodePen example](http://codepen.io/learningcode/pen/avYXvq), compare the difference between using and not using a content wrapper.


## The Box Model Problem and Fix

In CSS ,the relationship between the width, padding and border properties is not always straightforward.
For example, if you set the width of a box to 480px and added 20px of padding and a 15px border on the left and right side, the width of the box will actually be:

480 (width) + 20 (padding-left) + 20 (padding-right) + 15 (border-left) + 15 (border-right) = 550px total width

But, there's a fix! Let's first compare how the element's sizing differs with and without the fix, looking at the CSS example below.

    background: lightblue;
    width: 480px;
    padding: 0px 20px;
    border: 15px solid green;

<div style="box-sizing: content-box;background: lightblue; width: 480px;padding: 0px 20px;border: 15px solid green; margin-bottom: 5px;">
  <p style="box-sizing: content-box;">This example does NOT have the border box fix.</p>
</div>

<div class="example" style="background: lightblue; width: 480px;padding: 0px 20px;border: 15px solid green;">
  <p>This example DOES have the border box fix.</p>
</div>


<br>
Notice that without the fix, the element is larger than the set `width`.

The box model fix is a CSS code snippet you can (and should) add to all your projects.  With this fix, padding and border will not affect the overall sizing of the element.

Here is the snippet:

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

Read more about the fix [here](http://www.paulirish.com/2012/box-sizing-border-box-ftw/).




## Positioning Elements: Floats

We saw earlier that we can use `display: inline-block` to get elements to line up side by side. We can also use another property, `float`, to align elements using the `left` or `right` value.

### Stacking order, parent elements and floats

Each element is seen as a "box" by the browser (represented by the red border). The natural stacking order means block elements will stack on top of each other.

The parent element (represented by the blue background) will wrap around its content.

![]({{ site.img }}/module3/no-float.jpg)

However, to get elements to float side by side, the natural stacking order must be broken first, then put back together.

>## EXERCISE: Floats, part 1
>Let's try instruction #1 in the following [CodePen example](http://codepen.io/learningcode/pen/gaedLj).

### Exercise 1 followup

Here's what it will look like:

![]({{ site.img }}/module3/float-no-clear.jpg)

Floating the element breaks the *natural stacking flow*.  
Any element *after* the floated element will move up and flow around the floated element.  

Notice that the blue background only wraps around the text and not the image? That's because floated elements cause the parent element to **collapse**. The parent cannot "see" the floated elements (the image in this example) and only wraps around the text (not floated).

Also, as long as there is space for elements flow around the floated element, it will. What if you only wanted the first paragraph to flow around the image and the heading and following content to stack underneath the image? You'll need to **clear** the float.

**Note:** If no width is set on the floated element, it will automatically be the width of its content.



<!-- That's how you can create layouts such as the below example of an image floated to the right.

![]({{ site.img }}/module3/floated-img.png) -->

### Clearing Floats

You may notice that floats have the ability to affect the rest of the web page in unexpected ways. The float must be "cleared" to get the rest of the page to go back to normal stacking order.

On the element that comes *after* the last element to be floated can be used to *clear* the float using the property and value, `clear: both`.
    
    <div class="floated">floated element</div>

    <div>Other content - will flow around floated content.</div>

    <div class="cleared">cleared element - will go back to natural stacking order</div>

    
---
    .floated {
      float: left;
    }
    .cleared {
      clear: both; /* clears any left or right float */
    }

>## EXERCISE: Floats, part 2
>Let's go back to the previous CodePen example and complete instruction #2.

Now it should look like this:

![]({{ site.img }}/module3/float-cleared.png)

Clearing the float on the `h1` element puts everything back to the normal stacking ordering starting from the h1 element and everything after.


### Self Clearing Floats
If there is no element following the floated elements, apply `overflow: hidden;` or `overflow: auto;` to the **parent** container to **self-clear** the floated children. This forces the element to 'contain' any floated children, so that they don't disrupt the elements after them.

    <div class="parent">
      <div class="floated">floated element</div>
      <div class="floated">floated element</div>
    </div>

    
---
    .parent {
      overflow: hidden;
    }
    .floated {
      float: left;
    }

>## EXERCISE: Floats, part 3
>Let's go back to the previous CodePen example and complete instruction #3-4.
    
Though the `overflow` property can be used to self-clear floated elements, it is actually used to specify how to display content that flows longer or wider than its container.  The options are  whether to clip content, show scrollbars or just display content overflowing content.

When this option can't be used, there is another option for self-clearing floats.

### "Clearfix" hack

This fix, often referred to as the "clearfix hack" can be used when `overflow` is not appropriate or in place of using the `overflow`.  It is simply a CSS code snippet contained in a `class` called `clearfix`.

It has changed over time as CSS support in various browsers are updated.

Originally it looked like this:

    /* slightly enhanced, universal clearfix hack */
    .clearfix:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
    .clearfix { display: inline-block; }
    /* start commented backslash hack \*/
    * html .clearfix { height: 1%; }
    .clearfix { display: block; }
    /* close commented backslash hack */

Note the use of a *psuedo-class*, `:after` added to the `clearfix` class.  
(Similar syntax to `:hover` but used to add css *after* an element.)

It now looks like this:

    .group:after {
      content: "";
      display: table;
      clear: both;
    }
    
The class name was changed to "group" by some notable CSS Developers as they thought this gave it a better semantic meaning but it is just a class name so it can be changed! The below example would be the same thing.

    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
    
    
This snippet can be added to your css file and added to the **parent** of the floated element. To add multiple classes to the same element, separate each with a space.

    <div class="parent clearfix">
      <div class="floated">floated element</div>
      <div class="floated">floated element</div>
    </div>



See the documented clearfix hack changes here:  
[CSS Tricks: Force Element To Self-Clear its Children](http://css-tricks.com/snippets/css/clear-fix/)

Reminder, if you use this method, you do not need to use the `overflow` property.

#### Extra Resources

* [Mozilla Developer Network: overflow property](https://developer.mozilla.org/en/docs/Web/CSS/overflow)
* [Clearing Floats: An Overview of Different clearfix Methods](http://www.sitepoint.com/clearing-floats-overview-different-clearfix-methods/)


<br>
~ End ~


