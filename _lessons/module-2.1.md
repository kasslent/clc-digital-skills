---
layout: lessons
module: 2
lesson: 1
title: Intro to Design & CSS Typography
permalink: module2-1.html
---

**Web *design*** and **web *development*** are often thought to be interchangeable but are actually quite different. Some people do both and some specialize in one or the other.

In a nutshell, web *design* is about creating the visuals. Web *development* turns those visuals into code, to be able to display it in a web browser.

There are even further specializations, such as back-end developers, front-end developers and interaction designers, just to name a few.

##Brainstorm Ideas

Before writing a line of code, it helps to define your goals for the website first.  

Here are some brainstorming questions that can help you (or your clients) define your brand & goals.  You don't have to answer all of these questions but keeping these ideas in mind before starting the design process can help inform you decisions.

*  What is the vision/mission for your business or the values that represent your business?
*  Do you have/want a tagline or slogan? If so, what is it?
*  Where and how will your logo be used? (e.g. website, business cards, posters, stationary, packaging, t-shirts, etc.)
*  What should people think or feel when they see your brand / website?
*  Use 5 adjectives to describe your brand / website's personality.
    
    
##What is Design?

Design is problem solving. In web design, the problem to be solved is how to effectively communicate the content. 

Design uses a combination of type, color, images and form to present content in a clear and concise manner that is visually appealing and reiterates the ideas we want to communicate.


###What Makes Good Design?

1. Clear - the content is easy to read and the graphics and colors support the ideas
1. Concise - content is presented in a concise manner and you can navigate the website to find the content you need easily

> What are some of your favorite websites? Let's look at a few different sites and compare designs.


##Purpose and Organizing Content
What do you want your website to do? Who is your target audience? What is the purpose of the website?

When thinking about how to organize and arrange the content on your website, think about how your eyes navigate a web page. 

Our eyes tend to gravitate to larger elements first, such as: 

* large images
* large text
* blocks of color

Then we narrow in on interesting blocks of content to further to explore in detail. 

Use the layout of your website to guide the viewer’s eye and provide a clear path for viewers.

> Based on purpose and organization, how would a photographers website differ from a news outlet?

##Layout Tips

###Size

* vary the size of your content areas to guide the viewer 
* large content areas can be used to indicate prominent information
* less important information are given smaller areas
* create a visual hierarchy of importance

###Alignment

* aligning items relative to each other makes visual connections
* helps users understand the content flow and navigate more easily

###Space

* make sure there is enough space around your content
* spacing enhances the readability of your content
* *consistent* spacing adds balance and harmony to your design
* gives content space to breathe, less clutter


##Designing with a Grid

A popular technique for design layouts is to use a grid. A grid provides:

* consistent structure
* helps to create visual hierarchy
* flexibility in design

###Using a Grid

Using software like Photoshop or just paper & pencil:

* divide up the width of your page into equal width columns
* include equal space between each column (a gutter), for breathing room
* use the grid to mark areas for the different pieces of content

Though you can use any number of columns, a 12 column grid is common because it can divide easily into 1, 2, 3, 4, 6, 12.  This is handy for responsive designs (can adapt to different screen sizes).

Here's a handy tool for creating a grid: [Grid Calculator](http://gridcalculator.dk/)

Using graph paper can also help layout columns and gutters when doing a hand drawn sketch. Here are some examples: <http://bit.ly/1KbJbfZ>


###Page Layouts with Grids

Some content blocks may span multiple columns, others may span only one. Not every page component needs to fit into the grid dimensions either.

For example, the [Food Sense Blog website]({{ site.img }}/module2/02-grid-fs.jpg) uses the 12 column grid to organize the content in different ways. 

In this article, [15 Reasons Why A Grid Based Approach Will Improve Your Designs](https://designschool.canva.com/blog/grid-design/), you can see even more ways to lay out content with a wide variety of grids.

####Resources

* [Grid Calculator](http://gridcalculator.dk/)
* [Grid Based Web Design Resources](http://www.awwwards.com/grid-based-web-design-resources.html)
* [Wireframe tools](http://www.creativebloq.com/wireframes/top-wireframing-tools-11121302)


>##EXERCISE: Sketch out a website layout
>Using paper and pen/pencil, roughly sketch a 12 column grid on the paper. Use this as a base for the layout for a website. 
>
>Block out areas of the page for your content. Experiment with multiple layouts. Remember the tips of size, alignment and spacing when arranging your content.


##Working with Images

###Cropping and Saving Images
When working with images and photos, resize or crop the large images to reduce load time of a web page (especially for phones).  

Most photos are large in size and resolution because by default it is optimized for print, not web. However, these images should be cropped to the *largest* size you need for your website.  

We'll be using CSS to make sure the image size scales & fits the page layout. 

When working with responsive images (one image made to fit difference screen sizes), resizing large images to be smaller will not lose quality, but making a small image larger with CSS will make it appear pixelated.

Save your images using the file type (.jpg, .png, etc.) best suited for that image.  Refer to [Module 1, Lesson 1](module1-1.html#images) for reference.

###Image editors
You will need an image editor tool to crop and edit your images. [Adobe Photoshop](http://www.adobe.com/products/photoshop.html) and [Sketch](http://www.sketchapp.com/) are popular paid options.

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


##Typography
Good writing and good typography can help your reader understand your message more clearly.

###Terminology
**Typography** is the art of arranging type to engage and guide your readers.  

**Typeface** is what you think of when you think of Font. It is a set of fonts or a font family that is designed with common characteristics and features.  

**Font** is the individual font file that is part of the font family or typeface.

For example, *Helvetica Neue* is the **typeface**. It is a font family which contains many **font** files from *Helvetica Neue Ultra Light* to *Helvetica Neue Extra Bold*. The decision to set your type in *Helvetica Neue* and how you arrange it on the page is **typography**.


##Type Classification

<img class="right" src="{{ site.img }}/module2/07-serif.jpg">

###Serif Typefaces

* distinguished by the little "feet" or "hats" at the bottom or top of the letters 
* grew out of the hand-lettering of scribes and roman or blackletter calligraphic writing.

<hr class="clear">

<img class="right" src="{{ site.img }}/module2/08-sansserif.jpg">

###Sans Serif Typefaces

* just like the name implies–no serifs at the end of the strokes
* most are monoweight
* the strokes of the letterform appears to be all one weight

<hr class="clear">

> Much debate has gone into whether serif typefaces are better than sans serif typefaces in terms of readability at different sizes. 
>
> Some argue that serif typefaces have historically been better for small text because their serifs guide the eye while reading. Others assert that sans serif typefaces are better for reading because they are unencumbered by serifs.
>
> Classification aside, when selecting a font, consider the application and the readability of the letterforms at the sizes you need.


<img class="left" src="{{ site.img }}/module2/09-script.jpg">

###Script Typefaces

* appear to be hand-lettered with a calligraphy pen, brush or pencil or pen
* use script typefaces sparingly and appropriately for your content
* can be unreadable in small sizes, all caps and long blocks of text

<hr class="clear">


<img class="left" src="{{ site.img }}/module2/10-display.jpg">

###Decorative Typefaces

* have the characteristic of being very distinct in their style
* not great for long blocks of text, may become too consuming and unreadable
* can be great for decorative touches and add character to a design

Most decorative typefaces are one offs containing just one font file. 


##Tips for Selecting and Pairing Fonts

* Personality
  * select fonts to reflect your personality, tone of voice and/or your brand
* Readability
  * choose fonts that are easy to read 
  * try them in various sizes, weights and styles
* Contrast
  * when pairing fonts, strive for sufficient contrast
  * choose typefaces of different types or styles
  * contrast with a serif and a sans serif, or 
  * a thick condensed sans-serif with a thin sans-serif 
* Flexibility
  * Select fonts that have multiple styles to give you the most flexibility
* Clarity
  * select only one or two typefaces for your content
  * too many typefaces may make your design unclear
* Completeness
  * look for fonts that have a complete character set
  * pay attention to the glyphs and special characters you might need such as “@”, “$”, “#”, etc 
  * missing characters may be a sign of an incomplete and poorly designed font

####Resource
[Chrome extension](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm) for finding out what fonts are used on any website.


##Typefaces, CSS and the Web

###Web Safe Fonts

Fonts that are considered to be "web safe" refer to pre-installed fonts on a given computer or device.

Because not all operating systems have the same fonts installed, use a font *stack* in your CSS to provide multiple options. Choose fonts that look similar and a generic option to provide a fallback option.

See examples of web safe fonts here:

* [16 Gorgeous Web Safe Fonts To Use With CSS](http://www.webdesigndev.com/16-gorgeous-web-safe-fonts-to-use-with-css/)
* [cssfontstack.com](http://www.cssfontstack.com)


###CSS `font-family`

In CSS, to change the default typeface, use the `font-family` property.

    body {
      font-family: "Helvetica Neue", Arial, sans-serif;
    }

* best practice is to list at least 2 options
* first font is the primary choice
* alternative fonts are declared in order of preference and separated by a comma
* font names with two or more words should be wrapped in quotation marks (single or double quotes)
* last font should be the generic option

####Generic fonts

* sans-serif
* serif
* cursive (script fonts)
* fantasy (decorative fonts)
* monospace (fixed width fonts)


##Custom Web Fonts

###Free vs. Premium Fonts

There are thousands of fonts available to download and use to beyond the default web safe fonts.

Free fonts:

* free, no cost to use (sometimes free for personal use but need to be paid for commercial use)
* may have missing characters
* limited in the number of styles (generally one or two styles)
* are commonly used

Premium fonts:

* can be costly; prices vary
* typically better quality and elegantly designed
* have a complete character set
* usually have multiple styles
* exclusive and unique

####Font Resources

* Google Fonts is a great source of quality & free fonts for the web - <https://www.google.com/fonts>
* Google Font pairing resource - <http://femmebot.github.io/google-type/> 
* Typekit is a Adobe subscription based font service that allows you to use their library of fonts for desktop and web use - <http://typekit.com/>
* Fonts.com has a wide library of premium fonts to choose from including a web font delivery service - <http://www.fonts.com/>
* Monotype has a history of providing quality premium fonts - <http://www.monotype.com/>


##Google Fonts

[Google Fonts](https://www.google.com/fonts) is a free service. You can link directly to their CSS files, making the fonts available to your site visitors and does not rely on system installed fonts. To use:

1. Go to [Google Fonts](https://www.google.com/fonts).
1. **Add to Collection** to select a font.
![]({{ site.img }}/module2/google-fonts-1.jpg)
1. Review to compare selections and **Use** to get the code.
![]({{ site.img }}/module2/google-fonts-2.jpg)
1. Select font weights. The more you choose, the more it will slow down page load time.
1. Copy the `<link>` code snippet and add it to the `<head>` of your page to reference their CSS.

--- 
    <head>
      <meta charset="UTF-8">
      <title>My Website Title</title>
      <link href='http://fonts.googleapis.com/css?family=Bad+Script|Open+Sans:400,300' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="css/styles.css">
    </head>

Now you can use these new fonts with the `font-family` property as normal, using the font name listed in the example on the Google Fonts page.

![]({{ site.img }}/module2/google-fonts.png)


>##EXERCISE: Google Fonts
>1. Choose two fonts from [Google Fonts](https://www.google.com/fonts) to use for the typography exercise.
1. Download the <a href="exercises/module2/typography.html" download>typography.html</a> exercise file.
1. Add the Google Fonts CSS file to the **typography.html** exercise file downloaded in the previous step.
1. Follow the instructions listed under the `TYPOGRAPHY EXERCISE #1` CSS comments.




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

>##EXERCISE: Typography
>Download the exercise file <a href="{{site.baseurl}}/exercises/module2/typography.html" download>here</a>.  Open **typography.html** in your editor and follow the instructions listed in the comments in the `<head>` of the page.
>
> [Answer key]({{site.exercises}}/module2/typography-answer.zip) (zip file).
> 
>**Pro tip!** Move this exercise file from your downloads folder and add it somewhere you can find it. (e.g. organized with the rest of your LLC project/exercise files)


>
>Define a style for your headlines, paragraph and navigation menu with your chosen fonts. Experiment with different styles, weights, and sizes.


~ End ~









