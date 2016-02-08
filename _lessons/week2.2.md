---
layout: lessons
week: 2
lesson: 2
description: Design & the Browser
permalink: /week2-2.html
---


#Typography & CSS

Last class we covered the role of typography in design.  Let's go over how to implement these principles into your web pages using  various CSS properties. 

##`color`

Use the `color` property to change the colour of your text. We talked about how to set the colour for background styles in [Week 1]({{site.baseurl}}/week1/lesson2/#css-colours).  Use the same value types (hex, keyword or rgb) for this property as well.
    
    /* all the same colour */
    body {
      color: firebrick;
      color: rgb(178,34,34);
      color: #B22222;
    }

##font-weight & font-style

Remember, use HTML for *meaning* and CSS for *presentation*. It doesn't matter if the default HTML shows text in bold, not bolded, italicized, etc, because CSS can change all that!

    font-weight: bold; /* makes text bold */
    font-weight: normal; /* removes bold style */

---
    font-style: italic; /* sets text to italic */
    font-style: normal; /* removes italic style */

##text- properties

Note that when a CSS property accepts `inherit` as a value, it will inherit the style set in either the parent or nearest ancestor element. `none` usually removes the style defined by that property.

**`text-align`**  
Used for aligning text and accepts five values: `left`, `right`, `center`, `justify` and `inherit`.

**`text-decoration`**   
Most commonly used to add or remove underlines but accepts these five values: `none`, `underline`, `overline`, `line-through` and `inherit`

**`text-tranform`**  
Accepts five values: `none`, `capitalize`, `uppercase`, `lowercase` and `inherit`.

* `capitalize` capitalizes the first letter of each word 
* `uppercase` value will capitalize every letter 
* `lowercase` value will make every letter lowercase

<p data-height="290" data-theme-id="0" data-slug-hash="epybqM" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/epybqM/'>text- properties</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

<blockquote class="note">
<p><a href="http://codepen.io">CodePen</a> is basically a "sandbox" to try out code without switching back and forth between a text editor and browser. When you save your pen, a unique URL is created for you OR sign up for a (free) account to save your pens. You can also explore and "fork" (save a copy) and edit pens by other users.</p>
</blockquote>

>##Exercise: CodePen
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


##`font-family`

    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

* used to declare the font for displaying text 
* best practice is to list at least 2 options
* first font is the primary choice
* alternative fonts are declared in order of preference and separated by a comma
* font names with two or more words should be wrapped in quotation marks (single or double quotes)
* last font should be the generic option


###Generic fonts

* sans-serif
* serif
* cursive - script fonts
* fantasy - decorative fonts
* monospace - fixed width fonts

###Web safe fonts

Pre-installed fonts on a given computer or device. Because not all operating systems have the same fonts installed, use a font *stack* to provide multiple options. Choose fonts that look similar and a generic option to provide a fallback option.

####Resources 

* [cssfontstack.com](http://www.cssfontstack.com) - list of web safe fonts
* [Mozilla Developer Network: font-family](https://developer.mozilla.org/en-US/docs/CSS/font-family)

##Custom fonts (Google, External and Icon fonts)

###Using Google Fonts

You can link directly to the [Google Fonts](https://www.google.com/fonts) CSS files, making the fonts available to your site visitors. This option relies on the CSS to include the fonts rather than system installed fonts.

To use Google Fonts:

Select the fonts you want to use and **Add to Collection**. **Review** to compare and try different options, then choose **Use** when ready.

 Some things to keep in mind when going through the Google **Use** options:

* choose only the fonts & font weights that you need to reduce page loading time
* the default Latin character set is usually all that is required unless you are specifically writing in the other languages listed
* to add the CSS file to your website: 
  * **Standard** HTML option (most common) - copy the `<link>` code snippet and add it the `<head>` of your page, *before your stylesheet*
  * **import** CSS option - add the import code to the very top of your CSS file
  * JavaScript option - this has specific usages, read more about it [here](http://billpatrianakos.me/blog/2014/12/05/should-i-load-google-web-fonts-js-api-or-the-css-link/) 
 
Now you can use these new fonts with the `font-family` property as normal, using the font name listed in the example on the Google Fonts page.

![]({{site.baseurl}}/assets/img/week2/google-fonts.png)


###Using Downloaded fonts 

The `@font-face` CSS3 method can be used to embed and load fonts files.  Ensure these font files are saved in your folder directory.

`@font-face` must be declared in your CSS files first before you can use it.  If you are targeting modern browsers, this should provide enough browser support.

    @font-face {
      font-family: 'Font Name';
      src: url('file-path/font-file.woff2') format('woff2'),
           url('file-path/font-file.woff') format('woff');
    }
    
---    
    font-family: 'Font Name', second-option, sans-serif;

**Pro tip!** You can choose any font name and rename the font files to anything you wish, so choose something that follows best practices for file management and naming coventions.

####Resources

* [CSS Tricks](https://css-tricks.com/snippets/css/using-font-face/) - more about `font-face` and older browser support 
* [Font Squirrel](http://www.fontsquirrel.com/) - free fonts for downloads and `@font-face` generator (for creating cross-browser font file types)
* [Google Fonts: Getting Started](https://developers.google.com/fonts/docs/getting_started)


###Icon fonts
Icon fonts are an easy way to add imagery to your web page but still have the flexibility of styling properties like size and colour using CSS since they *are* fonts!

There's many to choose from but [Font Awesome](http://fortawesome.github.io/Font-Awesome/) is a great option. Similar to Google Fonts, to use Font Awesome, just link to their CSS file.

Under **[Get Started](http://fortawesome.github.io/Font-Awesome/get-started/)**, there are different options for adding the font files.  You can download the CSS file and add it to your project files or use their CDN (Content Delivery Network - files hosted online).

**Pro tip!** When using CDNs, they are sometimes listed like this:

    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    
Remember to add the "http" to make it work when you run your page "locally" (on your computer) without a local server.

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

To use, [pick an icon](http://fortawesome.github.io/Font-Awesome/icons/) and copy the supplied markup and class and add it to your HTML.

####Resources

* <https://css-tricks.com/html-for-icon-font-usage/>
* <http://weloveiconfonts.com/>
* <http://reference.sitepoint.com/css/typography>

>##Exercise: Typography
>Download the exercise file <a href="{{site.baseurl}}/exercises/week2/typography.html" download>here</a>.  Open **typography.html** in your editor and follow the instructions listed in the comments in the `<head>` of the page.
>
> [Answer key]({{site.expath}}/week2/typography-answer.zip) (zip file).
> 
>**Pro tip!** Move this exercise file from your downloads folder and add it somewhere you can find it. (e.g. organized with the rest of your LLC project/exercise files)



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

<img src="{{site.baseurl}}/assets/img/week2/inspect-element-css.gif" class="print-hide">

In Chrome, you can access the tools in 3 ways:

* **Option 1:** right-click / two-finger tap / Ctrl + click on any web page and select **Inspect Element** to open the console
* **Option 2:** select the menu icon in the top right hand corner and select **More Tools > Developer Tools**
* **Option 3:** keyboard shortcut: **Ctrl + Shift + I (PC)** / **Cmnd + Option + I (Mac)**

> Pick your favorite website and try it out!

> ##Exercise: Margin & Padding
> Download the [exercise file]({{site.baseurl}}/exercises/week2/margin-padding.zip) (zip file).  In groups of two or three, try to find a good balance of margin and padding to make this web page look just a little bit nicer!


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
