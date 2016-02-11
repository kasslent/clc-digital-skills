---
layout: lessons
module: 2
lesson: 2
title: Design & CSS
description: More CSS typography and working with images and colours.
permalink: module2-2.html
---

There are more ways to use CSS to create typography based styles in your web page designs.

The last lesson covered text based CSS properties that used keywords for values (e.g. `font-weight: bold;`). But there are many other properties (typography based and other styles) that use length to define the values.


## Length / Measurement Units
The properties that affect the sizing of an element uses various measurement units. Here are some commonly used units for the web:

* **pixels** (`px`) - most commonly used because computer monitors and mobile devices are measured in pixels.
  * must use whole numbers (e.g. `12px`)
* **percentages** (`%`) - useful for fluid and responsive layouts
  * can use any number (e.g. `20%`, `25.5%`)
* **ems** (`em`) - originally a typographic measurement based on the letter "M"
  * relative unit, sizing is based on parent & ancestor elements sizes
  * can use any number (e.g. `1em`, `1.275em`)
* **rems** (`rem`)-  stands for "relative em"
  * relative unit but is only relative to the *root* element (`html` tag)

By default, with no other CSS, here's how these units compare to each other:

    1em = 1rem = 16px = 100% 

There are also other measurement units used for print and new experimental units that are not yet supported in all browsers.

> Let's edit the below Codepen and see how `em` and `rem` works.

<p data-height="190s" data-theme-id="0" data-slug-hash="LpeaGZ" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/LpeaGZ/'>font-size, em & rem</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

### Extra resources

* [rem & the 62.5% method](http://snook.ca/archives/html_and_css/font-size-with-rem)
* [CSS - Measurement Units](http://www.tutorialspoint.com/css/css_measurement_units.htm)
* [W3C - Units of length: px, em, cm, etc.](http://www.w3.org/Style/Examples/007/units.en.html)
* [CSS Tricks - Lengths of CSS]( https://css-tricks.com/the-lengths-of-css/)
* [Understanding and Using rem Units in CSS](http://www.sitepoint.com/understanding-and-using-rem-units-in-css/)


## CSS & Typography

### `font-size` & `line-height`

The default size of HTML text in the browser is equivalent to 16 pixels, with the headings getting progressively larger based on their hierarchy.  

Use `font-size` to change the size and `line-height` to adjust the space *between* the lines of text.

You can use any of the measurement units to declare the `font-size`.  

For `line-height`, this property actually does *not* require the use of measurement units (though you can). Not using a measurement unit makes it relative to the font-size.

    p {
      font-size: 20px;
      line-height: 25px; /* fixed size*/
    }

---
    p {
      font-size: 20px;
      line-height: 1.5; /* relative to font-size - always 1.5x bigger than the font-size */
    }

### `text-shadow`

Use this property to apply a shadow to your text.

    p { 
      text-shadow: 2px 4px 1px red;
    }
    
<p class="example" style="text-shadow: 2px 4px 1px red;">Text shadow!</p>
  
* first value - x-coordinate, horizontal distance of the shadow
  * positive numbers places the shadow to the right
  * negative numbers places the shadow to the left
* second value - y-coordinate, vertical distance 
  * positive numbers places the shadow below the text
  * negative numbers places the shadow above the text
* third value - blur radius (optional), the higher the number, the bigger the blur
* fourth value - color of the shadow

### Multiple text shadows
  
To use multiple text shadows, separate each grouping with a comma.

    p { 
      text-shadow: 1px 1px 1px #000, 
                   5px 5px 5px red; 
    }

*Pro tip!*  
Subtle effects work best.


> Let's edit the CodePen below and experiment with these properties.

<p data-height="290" data-theme-id="0" data-slug-hash="NGXovv" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/NGXovv/'>font-size, line-height, text-shadow</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

### `color`

To change the colour of the text, use the `color` property. 

We've talked about how to set a background colour in [Module 1](module1-2.html#css-colours).  Use the same value types (hex, keyword or rgb) for this property as well.
    
    /* all the same colour */
    body {
      color: firebrick;
      color: rgb(178,34,34);
      color: #B22222;
    }
    

## Icon fonts

Icon fonts are an easy way to add imagery to your web page but still have the flexibility of styling properties (like size and colour) using CSS since they *are* fonts!

[Font Awesome](http://fortawesome.github.io/Font-Awesome/) is a great free option. Similar to Google Fonts, to use Font Awesome, just link to their CSS file.

Under **[Get Started](http://fortawesome.github.io/Font-Awesome/get-started/)**, there are different options for adding the font files.  You can download the CSS file and add it to your project files or use their CDN (Content Delivery Network - files hosted online).


###Watch out!
When using CDNs, they are sometimes listed like this:

    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    
Remember to add the "http" to make it work when you run your page "locally" (on your computer) without a local server.

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

To use, [pick an icon](http://fortawesome.github.io/Font-Awesome/icons/) and copy the supplied markup and class and add it to your HTML.

####Resources

* <https://css-tricks.com/html-for-icon-font-usage/>
* <http://weloveiconfonts.com/>
* <http://reference.sitepoint.com/css/typography>

>##EXERCISE: Typography
>Download the <a href="exercises/module2/typography-2.html" download>typography-2.html</a> exercise file.  Open it in your editor and follow the instructions listed in the comments in the `<head>` of the page.
> 
>*Pro tip!*  
Move this exercise file from the downloads folder and add it somewhere you can find it. (e.g. organized with the rest of your LLC project/exercise files)


##Working with Images

###Cropping and Saving Images
When working with images and photos, resize or crop the large images to reduce load time of a web page (especially for phones).  

Most photos are large in size and resolution because by default it is optimized for print, not web. However, these images should be cropped to the *largest* size you need for your website.  

We'll be using CSS to make sure the image size scales & fits the page layout. 

When working with responsive images (one image made to fit difference screen sizes), resizing large images to be smaller will not lose quality, but making a small image larger with CSS will make it appear pixelated.

Save your images using the file type (.jpg, .png, etc.) best suited for that image.  Refer to [Module 1, Lesson 1](module1-1.html#images) for reference.

###Image editors
You will need an image editor to crop and edit your images. [Adobe Photoshop](http://www.adobe.com/products/photoshop.html) and [Sketch](http://www.sketchapp.com/) are popular paid options.

[Pixlr](https://pixlr.com/editor/) is also a great free alternative. 

##Using Pixlr

1. Navigate to <https://pixlr.com/>
1. Choose the **Editor** version.
1. In the popup, choose an option for adding the image to be edited.

To add or change to another image, these options can also be accessed under the **File** menu.

![Pixlr file menu]({{ site.img }}/module2/pixlr-file-menu.png)

###The Crop Tool

In [Pixlr](https://pixlr.com/editor/) (and in most image editors), select the crop tool to resize and crop out parts of your images. 

Click & drag the cursor over the image to highlight the areas to be cropped out.

![pixlr crop]({{ site.img }}/module2/pixlr-crop.jpg)
 

###Resizing images

If you just need to resize an image to reduce the resolution size for web, go to:  
**Image &rarr; Image Size...**

Make sure “Constrain Proportions” is checked in the popup to maintain proper image proportions.

<img src="{{ site.img }}/module2/06-pxlr-imagesize.jpg">

Choosing **Canvas size...** (the option under **Image size...**) will have a similar effect as cropping.  Use this to resize the image, but also crop portions of the image out.


>##EXERCISE: Resizing Images
> Using [Pixlr](https://pixlr.com/editor/), practice cropping and resizing images. Use your own images, or choose from a number of placeholder sites or stock photography sites listed in the below resource links.
>
> **Bonus:** Check out some of the other menu options to familiarize yourself with the tool.


###Image resources

* [Placeholder image sites](https://www.google.ca/search?q=placeholder+images)
* [Stock Photos That Don't Suck](https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b)



##Designing with Color

A good design should be able to communicate clearly in the absence of colour. However, colour can still be used for many reasons.

###Personality and Meaning

Color communicates meaning. 

* Choose colors that reflect your personality or your brand. 
* Consider the emotional responses of your target audience. 
* Use color to distinguish between elements and interactive states.


Colour meanings can vary across different cultures so it’s important to consider who your target audience.


Read more about color meaning and how to use color to enhance your designs [here](http://vanseodesign.com/web-design/color-meaning/).


###Harmony and Rhythm
Color can be used to attract attention and organize content, creating a visual hierarchy. 

Repeating colors on elements adds clarity by allowing the viewer to make visual connections between pieces of content.

**Less is more.** When in doubt use one primary color and a secondary accent color. Vary the saturation and value of your colors to add variety while maintaining clarity.


###Color Accessibility
Many people have some sort of visual color impairment such as being unable to distinguish certain colors from others. 

Ensure sufficient contrast between colors to help people distinguish between different pieces of content. Use a variety of values and levels of saturation to add contrast.

Read more about color blindness and designing for color accessibility [here](https://24ways.org/2012/color-accessibility/).

####Color Resources
* [Adobe Color CC](https://color.adobe.com/create/color-wheel/) - tool to help you choose color palettes
* [Color Safe](http://colorsafe.co/) - helps you choose colors with appropriate contrast for text
* [ColorZilla](http://www.colorzilla.com/) - Chrome & Firefox plugin to help you pick colors from websites


##Spacing and CSS

Using space is a key part in design to ensure that the content is easy to read, view, find and aesthetically pleasing. Sometimes a few pixels can make all the difference!

By default, many HTML tags are styled with some default spacing. For example, there is extra space between two paragraphs. Headings also have extra space around them.

CSS uses 5 properties to determine the size and spacing of these elements: `width`, `height`, `padding`, `margin` and `border`. 

This is referred to as **The Box Model**.


##Intro to The Box Model

The browser looks at every HTML element on the page as a square/rectangular box. The **CSS Box Model** describes the way CSS handles the size and spacing of HTML elements. 

CSS uses 5 properties to determine the size and spacing of these boxes: 

* `width` - change the default width
* `height` - change the default width
* `margin` - add or remove default space *around* the element
* `padding` - add or remove default space *inside* the element
* `border` -  add a border around the element


Each of these boxes can have different combinations of the above properties, which in turn changes the element's size and how much space it takes up on the page.

###Width & Height

The `width` & `height` properties can be used to set specific heights and widths to only *block* level elements.  (More on block elements in Module 3.)

<div style="background:lightgreen;">This is a div with default width & height.</div>
<div style="background:lightgreen;width:60%;height:80px;margin-top:10px;">This is a div with a set width & height.</div>

    div {
      width: 60%;
      height: 80px;
    }

###Padding

The `padding` property adds/removes space *inside* of the element. It only accepts positive numerical values.

Setting the padding to "0" will remove any default space on an HTML element. Any positive value will add space *inside* of the element.

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
<p style="background:lightblue;padding:20px;">This is a paragraph with padding.</p>

###Margin
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
    
<p style="background:lightgreen;margin:0px;">This is a paragraph without margin.</p>
<p style="background:lightgreen;margin:40px;">This is a paragraph with margin.</p>

> Edit the CodePen below and try editing padding and margin.

<p data-height="268" data-theme-id="0" data-slug-hash="bVaymY" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/bVaymY/'>margin & padding</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>


###Margin & Negative values

Margin also accepts negative values.  This will nudge it just outside of its stacked position.

<p style="background:lightgreen;margin:0px;">This a paragraph without margin.</p>
<p style="background:lightblue;margin:-15px 0 0 340px;">This a paragraph with a <strong>negative top</strong> margin value and a <strong>positive left</strong> value.</p>

###Auto/Center Aligning with `margin`
The margin property can also be used to center align *block* level elements. 

First a width needs to be set. Then by setting the left & right values to `auto`, it finds the center of the page. The `0` refers to the top and bottom value and can be set to any value depending on the desired page style.

    div {
      background: lightblue;
      width: 600px;
      height: 60px;
      margin: 0 auto; /* 0 on the top & bottom, auto on the left & right */
    }

<div style="height:60px;width:600px;margin: 0 auto;background:lightblue;">
  <p>Auto aligned!</p>
</div>

>##CLASS EXERCISE: auto align content
>
>Looking at this [CodePen example](http://codepen.io/learningcode/pen/adPrym), compare the difference when `margin` is used to auto align the content block.


###Border
The `border` property resides between the `margin` and `padding` and creates an outline around the element. Also has longhand and shorthand syntax.

    /* longhand */
    border-width: 2px;
    border-style: solid;
    border-color: red;

    /* shorthand */
    border: 2px solid red;

Like padding and margin, a border can be added to a specific side of the element.

    /* longhand */
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: red;

    /* shorthand */
    border-top: 2px solid red;


Read more about the Box Model [here](https://www.addedbytes.com/articles/for-beginners/the-box-model-for-beginners/).  We'll also be revisiting it in Module 3.


##Dev tools & designing in the browser

Getting to know your browser dev tools will be super handy when tweaking styles on your web page.  You'll be able to try out different CSS styles right in the browser and see the changes update right away rather than flipping back and forth between your editor and browser.

It's also useful for finding the correct css selectors faster than hunting through your files (or someone else's).

<img src="{{ site.img }}/module2/inspect-element-css.gif" class="print-hide">

In Chrome, you can access the tools in 3 ways:

* **Option 1:** right-click / two-finger tap / Ctrl + click on any web page and select **Inspect Element** to open the console
* **Option 2:** select the menu icon in the top right hand corner and select **More Tools > Developer Tools**
* **Option 3:** keyboard shortcut: **Ctrl + Shift + I (PC)** / **Cmnd + Option + I (Mac)**

> Pick your favorite website and try it out!

> ##EXERCISE: Margin & Padding
> Download the [exercise file](exercises/module2/margin-padding.zip) (zip file).  Base HTML & CSS is already included.
>
>With a partner, edit/add/remove some margin and padding to make this web page look just a little bit nicer and more balanced.
>
>Using the class added to the HTML, `<div class="wrapper">`, add `margin` and `width` to auto align the page content.
>
>**solution.css** has been included for reference.


<br>
~ End ~









