---
layout: lessons
module: 2
lesson: 2
title: Design & the Browser
permalink: module2-2.html
---


#Typography & CSS

Last class we covered the role of typography in design.  Let's go over how to implement these principles into your web pages using  various CSS properties. 



##text- properties

Note that when a CSS property accepts `inherit` as a value, it will inherit the style set in either the parent or nearest ancestor element. `none` usually removes the style defined by that property.

**`text-align`**  
Used for aligning text and accepts five values: `left`, `right`, `center`, `justify` and `inherit`.

**`text-decoration`**   
Most commonly used to add or remove underlines but accepts these five values: `none`, `underline`, `overline`, `line-through` and `inherit`

**`text-transform`**  
Accepts five values: `none`, `capitalize`, `uppercase`, `lowercase` and `inherit`.

* `capitalize` capitalizes the first letter of each word 
* `uppercase` value will capitalize every letter 
* `lowercase` value will make every letter lowercase

<p data-height="290" data-theme-id="0" data-slug-hash="epybqM" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/epybqM/'>text- properties</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

<blockquote class="note">
<p><a href="http://codepen.io">CodePen</a> is basically a "sandbox" to try out code without switching back and forth between a text editor and browser. When you save your pen, a unique URL is created for you OR sign up for a (free) account to save your pens. You can also explore and "fork" (save a copy) and edit pens by other users.</p>
</blockquote>

>##EXERCISE: CodePen
>There are more typography related CSS properties but let's try out the ones mentioned so far.
>
>Use this example on [CodePen](http://codepen.io/learningcode/pen/yYpNej?editors=110) to try out these properties.  


##Length / Measurement Units
The properties that affect the sizing of an element uses various measurement units. Here are some commonly used units for the web:

* **pixels** (`px`) - most commonly used because computer monitors and mobile devices are measured in pixels.
  * must use whole numbers (e.g. `12px`)
* **percentages** (`%`) - useful for fluid and responsive layouts
  * can use any number (e.g. `20%`, `25.5%`)
* **ems** (`em`) - originally a typographic measurement based on the letter "M"
  * relative unit, sizing is based on parent & ancestor elements sizes
  * can use any number (e.g. `1em`, `1.275em`)
* **rems** (`rem`)-  stands for "relative em"
  * relative unit like `em` but is only relative to the *root* element (`html` tag)

By default, with no other CSS, here's how these units compare to each other:

    1em = 1rem = 16px = 100% 

There are also other measurement units used for print and new experimental units that are not yet supported in all browsers.

Let's look at how `em` and `rem` works.

<p data-height="190s" data-theme-id="0" data-slug-hash="LpeaGZ" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/LpeaGZ/'>font-size, em & rem</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

####Extra resources

* [rem & the 62.5% method](http://snook.ca/archives/html_and_css/font-size-with-rem)
* [CSS - Measurement Units](http://www.tutorialspoint.com/css/css_measurement_units.htm)
* [W3C - Units of length: px, em, cm, etc.](http://www.w3.org/Style/Examples/007/units.en.html)
* [CSS Tricks - Lengths of CSS]( https://css-tricks.com/the-lengths-of-css/)
* [Understanding and Using rem Units in CSS](http://www.sitepoint.com/understanding-and-using-rem-units-in-css/)


##`font-size` & `line-height`

The default size of HTML text in the browser is equivalent to 16 pixels, with the headings getting progressively bigger or smaller based on their hierarchy.  

Use `font-size` to change the size and `line-height` to adjust the space *between* lines of text.

You can use any of the measurement units to declare the `font-size`.  For `line-height`, this property actually does *not* require the use of measurement units and works better without it.

    p {
      font-size: 20px;
      line-height: 25px; /* fixed size */
    }

---
    p {
      font-size: 20px;
      line-height: 1.5; /* relative to font-size */
    }

##`text-shadow`

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
    
To use multiple text shadows, separate each grouping with a comma.

    p { 
      text-shadow: 1px 1px 1px #000, 
                   5px 5px 5px red; 
    }


<p data-height="290" data-theme-id="0" data-slug-hash="NGXovv" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/NGXovv/'>font-size, line-height, text-shadow</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




##Color

###Terminology
**Hue** is what we think of when we think about color. It is the characteristic that makes a color unique. 

<img src="{{ site.img }}/module2/11-hue.jpg" class="print-50">

**Saturation** refers to how weak or strong the color is. 

<img src="{{ site.img }}/module2/12-saturation.jpg" class="print-50">

**Value** refers to the lightness or darkness of a color. Think about it as adding white (lightness) or black (darkness) to a color. 

<img src="{{ site.img }}/module2/13-value.jpg" class="print-50">


###RGB vs CMYK

####RGB

* stands for red, green, blue
* additive color system that is based on adding light
* used to specify colors for the web.

####CMYK

* cyan, magenta, yellow and black
* subtractive color system that is based on ink printing
* used to specify colors for print.

<img src="{{ site.img }}/module2/14-rgb-cmyk.jpg" class="print-50">

You can specify RGB colors on the web using the `rgb(#,#,#)` format in CSS (where # is a value between 0 and 255) or with the Hex color code such as `#FFFFFF`.

    p {
      color: #FFFFFF;
      /* or */
      color: rgb(255, 255, 255);
    }

###Designing with Color

A good design should work in the absence of color and should communicate clearly in black and white. But color is a valuable tool and can be used:

* to add meaning and evoke emotions
* to distinguish between different pieces of content
* to indicate the state of interactive elements
* add harmony and rhythm to your design


Below are some items to consider when choosing colors.

####Personality and Meaning
Choose colors that reflect your personality or your brand. Consider the emotional responses of your target audience. Color communicates meaning. That meaning can vary across different cultures so it’s important to consider your target audience and how they perceive certain colors.

Also, think about how your audience will interact with your page. Use color to distinguish between elements and interactive states. For example, you might choose a default color for your navigation elements and a “selected” color.

Read more about color meaning and how to use color to enhance your designs [here](http://vanseodesign.com/web-design/color-meaning/).


####Harmony and Rhythm
Color can be used to attract attention and organize content, creating a visual hierarchy. 
Repeating colors on elements adds clarity by allowing the viewer to make visual connections between pieces of content.

####Less is More
Consider the number of colors to use in your design. Color helps to reinforce your message and guide people throughout your design. Choosing too many colors may confuse people. When in doubt use one primary color and a secondary accent color. Vary the saturation and value of your colors to add variety while maintaining clarity.


###Color Accessibility
It’s important to consider accessibility. Many people have some sort of visual color impairment such as being unable to distinguish certain colors from others. Remember that your design should work in the absence of color. Ensure sufficient contrast between colors to help people distinguish between different pieces of content. Use a variety of values and levels of saturation to add contrast.

Read more about color blindness and how to design for color accessibility [here](https://24ways.org/2012/color-accessibility/).

####Color Resources
* [Adobe Color CC](https://color.adobe.com/create/color-wheel/) - tool to help you choose color palettes
* [Color Safe](http://colorsafe.co/) - helps you choose colors with appropriate contrast for text
* [ColorZilla](http://www.colorzilla.com/) - Chrome & Firefox plugin to help you pick colors from websites

>##EXERCISE: Choosing colors
Choose up to 2 colors for your website and define how they will be used. 


##Brand Identity

Your website is a reflection of you and/or your business. Your website is is part of your brand.

Your **brand** is how you are perceived by your audience.  
Your **logo** is the visual expression of who you are to your audience.  
Your **brand identity** is a consistent set of artifacts that tell people who you are. 

The fonts and colors you choose for your website becomes part of your brand identity. These can be carried through to the rest of your brand and serves as a foundation for your brand style guide. 

A **style guide** defines the visual identity for you or your brand across *all* print and digital collateral.

####Examples of brand style guides

* [Jamie Oliver branding](http://issuu.com/bellfrog/docs/jamie-oliver-frv-brand-guidelines)
* [Mailchimp brand guide](http://mailchimp.com/about/brand-assets/)
* [Gov.uk web guidelines](http://govuk-elements.herokuapp.com/)

In web design, a **style tile** is used in much the same way as a style guide except that it defines styles that are specific to your website.

####Examples of style tiles

<img src="{{ site.img }}/module2/15-styletile-bh.jpg" class="print-50 left"><img src="{{ site.img }}/module2/16-styletile-gen.jpg" class="print-50 left"><img src="{{ site.img }}/module2/17-styletile-IH.png" class="print-50 left"><img src="{{ site.img }}/module2/18-styletile-fpcaa.jpg" class="print-50 left">

<br>
Keep track of the different styles you use in a style guide or style tile. Use it as a reference as you build out your website and your brand collateral to maintain consistency and clarity.

<br>


##Adding/Removing Space

Using space is a key part in design to ensure that the content is easy to read, view, find and aesthically pleasing. Sometimes a few pixels can make all the difference!

The browser looks at every HTML element on the page as a rectangular box. The CSS [Box Model](https://www.addedbytes.com/articles/for-beginners/the-box-model-for-beginners/) describes the way CSS styles the size and spacing of HTML elements.

CSS uses 5 properties to determine the size and spacing of these boxes: width, height, padding, margin and border. Today, let's look at padding and margin. (We'll continue with these other properties in the next lesson.)

###Padding

The `padding` property adds/removes space *inside* of the element. It only accepts positive numerical values.

Setting the padding to "0" will remove any default space on an HTML element. Any positive value will add space *inside* of the element.

    /* longhand */
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;

    /* shorthand */
    padding: 2px 2px 2px 2px; /* top right bottom left */

The shorthand technique can be shortened even further.

    padding: 2px; /* same on all sides */
    padding: 2px 10px; /* top & bottom, right & left */
    padding: 2px 10px 5px; /* top, right & left, bottom */

###Margin
Margin adds/removes space *outside* of an element. However, the shorthand and longhand rules are the same as padding. Margin also accepts negative values.

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

<p data-height="268" data-theme-id="0" data-slug-hash="bVaymY" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/bVaymY/'>margin & padding</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

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
> Download the [exercise file]({{site.baseurl}}/exercises/module2/margin-padding.zip) (zip file).  In groups of two or three, try to find a good balance of margin and padding to make this web page look just a little bit nicer!


##Intro to form design

When design a form, there are many things to consider such as:

* space, padding and layout
* icons and typography
* simplicity & ease of use
* displaying validation error
* form steps and progress
* primary and secondary buttons

With these considerations in mind, let's look at some of the rules listed in this article, [The 10 Commandments of Good Form Design on the Web](http://mono.company/journal/design-practice/the-10-commandments-of-good-form-design-on-the-web/).

~ end ~
