---
layout: lessons
module: 2
lesson: 1
title: CSS Fundamentals
description: Measurement Units, Images + Pixlr, The Noun Project, Icon Fonts, Text Shadow, SVG
permalink: module2-1.html
---

In the last module, we learned how to use CSS to create typography based styles in our webpages. Today, we'll be taking a deeper dive into them.

We covered text based CSS properties that used keywords for values (e.g. `font-weight: bold;`), but there are many other properties (typography based, and other styles) that use measurements to define the values.


## Length / Measurement Units
The properties that affect the sizing of an element uses various measurement units. Here are some commonly used units for the web:

* **pixels** (`px`) - most commonly used because computer monitors and mobile devices are measured in pixels.
  * must use whole numbers (e.g. `12px`)
* **percentages** (`%`) - useful for fluid and responsive layouts
  * can use any number (e.g. `50%`, `25.5%`)
**more advanced, but also cool:**
* **ems** (`em`) - originally a typographic measurement based on the letter "M"
  * relative unit, sizing is based on parent & ancestor elements sizes
  * can use any number (e.g. `1em`, `1.275em`)
* **rems** (`rem`)-  stands for "relative em"
  * relative unit but is only relative to the *root* element (`html` tag)

By default, with no other CSS, here's how these units compare to each other:

    1em = 1rem = 16px = 100%

There are also other measurement units used for [print stylesheets](https://uxdesign.cc/i-totally-forgot-about-print-style-sheets-f1e6604cfd6), and new experimental units that are not yet supported by all browsers.

> Let's edit the below Codepen and see how `em` and `rem` works.

[Play with font-size, em & rem](http://codepen.io/learningcode/pen/LpeaGZ/) on CodePen.


<div class="summary">

### Resources: CSS Measurements

</div>

<div class="details">

* [rem & the 62.5% method](http://snook.ca/archives/html_and_css/font-size-with-rem)
* [CSS - Measurement Units](http://www.tutorialspoint.com/css/css_measurement_units.htm)
* [W3C - Units of length: px, em, cm, etc.](http://www.w3.org/Style/Examples/007/units.en.html)
* [CSS Tricks - Lengths of CSS]( https://css-tricks.com/the-lengths-of-css/)
* [Understanding and Using rem Units in CSS](http://www.sitepoint.com/understanding-and-using-rem-units-in-css/)

</div>


## CSS & Typography


### CSS `font-size` & `line-height`

The default size of HTML text in the browser is equivalent to 16 pixels, with the headings getting progressively larger based on their hierarchy.

Use `font-size` to change the size and `line-height` to adjust the space *between* the lines of text. This can help improve the readability of larger blocks of text.

You can use any of the measurement units mentioned above to declare the `font-size`.  

For `line-height`, this property actually does *not* require the use of measurement units (though you can if you prefer to). Not using a unit of measure makes it ratio, relative to the font-size.

    p {
      font-size: 20px;
      line-height: 25px; /* fixed size*/
    }

---
    p {
      font-size: 20px;
      line-height: 1.5; /* relative to font-size - always 1.5x bigger than the font-size */
    }

<div class="summary">

### CSS `text-shadow`

</div>

<div class="details">

Use this property to apply a shadow to your text. This can help improve the readability of text against a background (like a photo) where you no longer have sufficient contrast to read the text.

    p {
      text-shadow: 2px 4px 1px red;
    }

<p class="example" style="text-shadow: 2px 4px 1px red;">Text shadow!</p>

* first value - x-coordinate, horizontal distance of the shadow
  * positive numbers places the shadow to the right
  * negative numbers places the shadow to the left
* second value - y-coordinate, vertical distance of the shadow
  * positive numbers places the shadow below the text
  * negative numbers places the shadow above the text
* third value - blur radius (optional), the higher the number, the bigger the blur
* fourth value - colour of the shadow

<div class="summary">

### Multiple text shadows

</div>

<div class="details">

To use multiple text shadows, separate each grouping with a comma.

    p {
      text-shadow: 1px 1px 1px #000,
                   5px 5px 5px red;
    }

*Pro tip!*  
Subtle effects work best.

</div>

</div>

<div class="summary">

### Review: CSS `color`

</div>

<div class="details">

To change the colour of the text, use the `color` property. Remember, American spelling!

We've talked about how to set a background colour in [Module 1](module1-2.html#css-colours).  Use the same value types (hex, keyword or rgb) for this property as well.

    /* all the same colour */
    body {
      color: firebrick;
      color: rgb(178,34,34);
      color: #B22222;
    }

</div>

> Let's edit the CodePen below and experiment with these properties.

Play with [font-size, line-height, text-shadow](http://codepen.io/learningcode/pen/NGXovv/) on CodePen.


<div class="summary">

## Icon fonts

</div>

<div class="details">

Icon fonts are an easy way to add imagery to your web page but still have the flexibility of styling properties (like size and colour) using CSS since they *are* fonts!

[Font Awesome](http://fortawesome.io) is a great free option. Similar to Google Fonts, to use Font Awesome, just link to their CSS file.

Under **[Get Started](http://fontawesome.io)**, there are different options for adding the font files.  You can download the CSS file and add it to your project files or use their CDN (Content Delivery Network - files hosted online).


### Watch out!
When using CDNs, they will ask you to add the following to your head:

    <script src="https://use.fontawesome.com/aa9e827f90.js"></script>


To use, [pick an icon](http://fortawesome.github.io/Font-Awesome/icons/) and copy the supplied markup and class and add it to your HTML.

#### Resources

* [Beautifully minimal icons font](https://ionicons.com/)
* <https://css-tricks.com/html-for-icon-font-usage/>
* <http://weloveiconfonts.com/>
* <http://reference.sitepoint.com/css/typography>

</div>

>## EXERCISE: Typography Cont'd
>Our project is taking shape beautifully! In this exercise let's experiment with the following in our own project:
>
1. Add a subtle text shadow to the h1 heading.
2. Change the font size of both the h1 and h2 headings.
3. Adjust the line height of all paragraphs.
4. Change the colour of the links.
5. Remove the default underline on the links.
6. Change the link color *on hover*. We have not covered this yet, but tap into your detective skills to do a Google search, work in partners, or with your mentors!
7. BONUS: Add an icon font anywhere on the page and change some property (colour, size, etc).
8. If you have time, you can add a social media section and link to your profiles using icons!


## Working with Images

### Cropping and Saving Images
When working with images and photos, resize or crop the large images to reduce load time of a web page. This is important for users on smaller devices, using a data connection on a mobile phone, or who otherwise have a slow internet connection.

Most photos we take on digital cameras are large in size and resolution because they are optimized for print, not the web. When preparing images for use on the web, the images should be cropped to the *largest* size you will need to see it displayed.

We'll be using CSS to make sure the image size scales & fits the page layout, regardless of the size of the user's device.

When working with responsive images (one image made to fit difference screen sizes), resizing large images to be smaller will not lose quality. Alternatively, making a small image larger with CSS will make it appear pixelated.

Save your images using the file type (.jpg, .png, etc.) best suited for that image.  Refer to [Module 1, Lesson 1](module1-1.html#images) for reference.

### Image editors
You will need an image editor to crop and edit your images. [Adobe Photoshop](http://www.adobe.com/products/photoshop.html) and [Sketch](http://www.sketchapp.com/) are popular paid options.

[Pixlr](https://pixlr.com/editor/) is also a great free alternative.

## Using Pixlr

1. Navigate to <https://pixlr.com/>
1. Choose the **Editor** version.
1. In the popup, choose an option for adding the image to be edited.

To add or change to another image, these options can also be accessed under the **File** menu.

![Pixlr file menu]({{ site.img }}/module2/pixlr-file-menu.png)

### The Crop Tool

In [Pixlr](https://pixlr.com/editor/) (and in most image editors), select the crop tool to resize and crop out parts of your images.

Click & drag the cursor over the image to highlight the areas to be cropped out.

![pixlr crop]({{ site.img }}/module2/pixlr-crop.jpg)


### Resizing images

If you just need to resize an image to reduce the resolution size for web, go to:  
**Image &rarr; Image Size...**

Make sure “Constrain Proportions” is checked in the popup to maintain proper image proportions.

<img src="{{ site.img }}/module2/pxlr-imagesize.jpg">

Choosing **Canvas size...** (the option under **Image size...**) will have a similar effect as cropping.  Use this to resize the image, but also crop portions of the image out.


>## EXERCISE: Resizing Images
> Using [Pixlr](https://pixlr.com/editor/), practice cropping and resizing images. Use your own images, or choose from a number of placeholder sites or stock photography sites listed in the below resource links.
>
> **Bonus:** Check out some of the other menu options to familiarize yourself with the tool.


### Image resources

* [Placeholder image sites](https://www.google.ca/search?q=placeholder+images)
* [Stock Photos That Don't Suck](https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b)
* [Image compression tool](https://tinyjpg.com/) - can be used after images are cropped to improve your site's performance even more!


## SVG - Scalable Vector graphics

SVG is an image file type that can be used in the same way you would use JPG, PNG or GIF, inside an `<img>` element:

    <img src="cat.svg" alt="a cute cat">
    <img src="cat.png" alt="a cute cat">

So what's the difference? Let's compare a vector graphic (JPG / PNG) and a raster (sometimes called "bitmap") graphic:

<img src="{{ site.img }}/module2/vector-vs-raster.png" />

The cat on the left is a vector graphic, whereas the cat on the right is a raster graphic.

>"In SVG, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape."
[W3Schools - HTML5 SVG] (https://www.w3schools.com/Html/html5_svg.asp)

This means we can use CSS to make the image as large or as small as we need, and it will always look the same. That undesirable pixelation doesn't occur because the image is not made of pixels!

Another major difference between SVG and other file types is size - an SVG will usually be a smaller file size, and therefore faster for a browser to load.

SVGs can be created using design software such as <a href="http://www.adobe.com/ca/products/illustrator.html" target="_blank">Adobe Illustrator</a> (monthly subscription), <a href="https://www.sketchapp.com/" target="_blank">Sketch</a>, (mac only) or <a href="https://inkscape.org/en/" target="_blank">Inkscape</a> (free).

They can also be found online - a great resource is a website called [Flaticon](https://www.flaticon.com/).

>You can also try out [The Noun Project](https://thenounproject.com/), but you will be required to create an account to download any graphics.

>## CLASS EXERCISE: The Noun Project
>
>As a class, we will use [The Noun Project](http://thenounproject.com) to search for, download and include an SVG graphic in our project as our logo.
>
>Once you have your SVG in your **img** folder, open it up in Atom. Proceed to comment out the entire **`<text>`** element from the SVG file. Once you've hidden it, save the SVG file and close it.
>
>By omitting the **`<text>`** element from the SVG, we are removing the credit to the designer - so let's credit them in our footer instead.
>
>Now, let's include our SVG as the src in an **`<img>`** element. It will always be scalable, but this doesn't provide us with much control over the look of our SVG.
>
>It's huge! Give your **`<img>`** a class of "logo" and size it accordingly.
>
>If you would like to change the SVG's colour or animate it, you will need to use the SVG **"inline"** in your HTML file.
>
>[Read how to include SVG inline and manipulate with CSS](https://css-tricks.com/using-svg/#article-header-id-7)


#### For more resources on learning SVG, check out:
* [CSS Tricks - "Using SVG"](https://css-tricks.com/using-svg/)
* [CodePen Example - Inline SVG](http://codepen.io/chriscoyier/pen/evcBu)
* [Styling and Animating SVG with CSS - Sara Soueidan](https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/)


## Designing with Colour

A good design should be able to communicate clearly in the absence of colour. However, colour can still be used for many reasons.

<div class="summary">

### Personality and Meaning

</div>

<div class="details">

Colour communicates meaning.

* Choose colours that reflect your personality or your brand.
* Consider the emotional responses of your target audience.
* Use colour to distinguish between elements and interactive states.


Colour meanings can vary across different cultures so it’s important to consider who your target audience.


Read more about colour meaning and how to use colour to enhance your designs [here](http://vanseodesign.com/web-design/color-meaning/).

</div>

<div class="summary">

### Harmony and Rhythm

</div>

<div class="summary">

Colour can be used to attract attention and organize content, creating a visual hierarchy.

Repeating colours on elements adds clarity by allowing the viewer to make visual connections between pieces of content.

**Less is more.** When in doubt use one primary colour and a secondary accent colour. Vary the saturation and value of your colours to add variety while maintaining clarity.

</div>

<div class="summary">

### Colour Accessibility

</div>

<div class="details">

Many people have some sort of visual colour impairment such as being unable to distinguish certain colours from others.

Ensure sufficient contrast between colours to help people distinguish between different pieces of content. Use a variety of values and levels of saturation to add contrast.

Read more about colour blindness and designing for colour accessibility [here](https://24ways.org/2012/color-accessibility/).

</div>


#### Colour Resources
* [Adobe Color CC](https://color.adobe.com/create/color-wheel/) - tool to help you choose colour palettes
* [Color Safe](http://colorsafe.co/) - helps you choose colours with appropriate contrast for text
* [ColorZilla](http://www.colorzilla.com/) - Chrome & Firefox plugin to help you pick colours from websites


> ## EXERCISE: Testing for Contrast
> Go to [Color Safe](http://colorsafe.co/) and test the contrast of the current colours you're using on your site. If the contrast doesn't get a green checkmark, or if you want the contrast to be better, find a palette that will allow you to meet accessibility standards for colour contrast.



<br>
~ End ~
