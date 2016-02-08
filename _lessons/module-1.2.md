---
layout: lessons
week: 1
lesson: 2
description: Intro to CSS
permalink: week1-2.html
---

##More text-based HTML tags

###Italics, Bold & Semantics

`<em>` represents stress emphasis, i.e., something you would pronounce differently  
`<strong>` represents strong importance  
`<i>` represents text in an alternate voice, a technical term, a phrase from another language (e.g. *je ne sais quoi*)  
`<b>` stands for “stylistically offset” text, such as keywords

When XHTML was introduced, `<b>` and `<i>` were *deprecated* since they were presentational tags. They used to represent bold and italics. Presentational tags were removed to separate content from styles.

In HTML5, the `<b>` and `<i>` tags were re-introduced but with a slightly different meaning, though `<em>` or `<strong>` is more commonly used.

Because these tags are most often used for small chunks of inline text, they are usually nested inside of other text-based tags. 

    <p>A paragraph with <strong>important</strong> text.</p>

Read more about it on [HTML5 Doctor](http://html5doctor.com/i-b-em-strong-element/).

###sub, sup

`<sub>` and `<sup>` represents subscript and superscript, respectively. These elements must be used only to mark up typographical conventions with specific meanings, not for presentation's sake. 

    <p>I love BODYPUMP<sup>TM</sup>!</p>

<p class="example">I love BODYPUMP<sup>TM</sup>!</p>


##Audio and Video

HTML5 introduced better support for media with `<audio>` and `<video>` tags.  However, with sites such as YouTube and Vimeo, it's often easier (and less bandwidth) to go with these options.  Sites like these and other media sites such as Instagram and Twitter all offer embed options.

####Extra resources 

* [http://html5doctor.com/native-audio-in-the-browser/](http://html5doctor.com/native-audio-in-the-browser/)
* [http://html5doctor.com/the-video-element/](http://html5doctor.com/the-video-element/)

> Let's check out the different embed options for [YouTube](http://youtube.com), [Instragram](http://instagram.com), [Twitter](http://twitter.com) and other media sites.


>##Exercise: Review
>
>Download the exercise file <a href="exercises/1.2/exercise1.html" download>here</a> (test).  Open **exercise1.html** in your editor and see if you can spot all of the errors!
>
>It could be formatting issues like tabbing nested elements, to mismatched tags, to missing quotes or recommended attributes.

##Intro to CSS

* CSS = cascading stylesheet
* stylesheet language with its own syntax rules, different from HTML
* used to separate content from presentation
* presentational HTML tags and attributes are now obsolete
* stylesheet contains a list of rules 
* reduces redundancy and saves time

CSS will require some new symbols: curly brackets `{ }`, colon `:` and semi-colon `;`

![keyboard]({{site.baseurl}}/assets/img/keyboard-css.png)

##Syntax & Terminology

**Selectors** determine which HTML element(s) to apply the styles to.  
**Declarations** are style rules written with `property:value` pairs. They must end with a semi-colon (`;`) to indicate that the instruction is complete.   
**Declaration block**  hold all the declarations within curly brackets `{ }` for a specific selector.  
**Properties** determine the type of style to be applied (e.g. color).    
**Values** are specific to the property (red). 

    selector {
      property: value;
    }

The example below changes the font colour of all paragraphs to red.

    p {
      color: red;
    }

###Multiple CSS Declarations

Multiple declarations can be added to one selector and declaration block to add and modify multiple styles.

    h2 {
      background-color: green;
      font-size: 50px;
    }

There are many CSS properties with new ones being added and old ones being retired (deprecated).  It's good to have a few resources on hand.

* [http://caniuse.com](http://caniuse.com)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

##CSS Comments

Just like HTML, use comments in CSS to leave notes, "comment out" code for later or for organization. Comments are written between a forward slash & asterisk and must close in the *opposite order*.

    p {
        color: #cc0066; /* magenta */
    }

    /* HEADER STYLES */
    header {
        width: 80%;
    }

    /*  Saving this for later
    .slider {
        width: 100px;
        background: red;
    }
    */
    
    
##Basic CSS selectors

###Type Selectors

Type selectors target HTML elements by their element tag name. For example, to target all paragraphs on the page, `p` would be used as the selector.

    p {
      /* targets all paragraphs */
    }
    a {
      /* targets all links */
    }


###Class Selectors

A `class` *attribute* can be added to any element but the value is defined by you.  The class value can then be used as a selector for *any* element that references the class attribute.

Classes can be used multiple times on the same page. In CSS, classes are denoted by a leading period.
    
    <p>This is a paragraph</p>
    <p class="special">This is a special paragraph</p>
    <span class="special">Special span text.</span>
    
---  
    /* general - applies to all paragraphs */
    p {
      color: yellow; 
    }
    /* specific - applies to any element with this class */
    .special {
      color: blue; 
    }
    /* more specific - applies only to paragraphs with this class */
    p.special {
      color: red; 
    }

Note that the last example, `p.special`, does **not** have a space between the element selector and the class name.


###ID Selectors

In addition to being used for in-page linking, `id` attributes can also be used for CSS.
`id` *attributes* work the same way as the `class` *attributes* for CSS styling but it can be used only **once** per page.  

Some prefer not to use `id`s at all for CSS styling because of this rule, reserving it for in-page links and JavaScript.

Also in CSS, `id`s are denoted by a leading hash/number symbol (`#`).

    #about {
      background: blue;
    }

###Naming conventions

When choosing a `class` or `id` name, choose a descriptive, functional name and **do not use spaces**! Use hyphens `-`, underscores `_` or camel case to separate words.

CSS is also case sensitive, so while these three examples below look similar, CSS will read these as three different classes.  

    class="content-wrapper"
    class="content_wrapper"
    class="contentWrapper"

It's important (for your own sanity as well) to pick one style and be consistent.

There are many more selectors but the few outlined here will give you a good starting point. We'll be exploring more over the next few weeks. 


##Referencing CSS

There are three ways to reference (add) CSS to an HTML document.

###Inline CSS

Can be included in any HTML element using the `style`
*attribute*. The `property:value` pairs are included as the
attribute values. 

Multiple declarations can be contained in the value.

    <body>
      <h1 style="font-size:16px;">Page Heading</h1>
      <p style="color:pink;font-size:12px;">Just some copy to put in my paragraph.</p>
      <p>Yep, another paragraph.</p>
    </body>


> Let's try some out! Download the exercise file <a href="{{site.baseurl}}/exercises/week1/exercise2.html" download>here</a>.

###Internal CSS

Included in the `<head>` with a `<style>` *tag*.

    <head>
      <title>Page Title</title>
      <meta charset="utf-8">
      <style>
        h1 {
          font-size: 16px;
        }
      </style>
    </head>

Note that in XHTML, the `type` attribute was required.

    <style type="text/css">
      h1 {
        font-size: 16px;
      }
    </script>

> Go back to **exercise2.html** and try out some internal CSS.

###External

This method links to a separate stylesheet file (uses a `.css` file extension) to separate the CSS from the HTML document. This method is recommended because it can be used across entire websites and updated quickly. Like the internal method, it's included within the `<head></head>` of the document but links to the css *file* instead.  

Use a `<link>` tag and two *attributes*, `rel` (relationship) and `href` (points to stylesheet file location).

Remember, CSS files are often saved in a separate folder for organization, so make sure the file path points to the appropriate directory.

    <head>
      <title>Page Title</title>
      <link rel="stylesheet" href="css/style.css">
    </head>

>Back in the text editor, create a new CSS file.  (**File > New File** or **ctrl/cmd + N**)
>
>Some common file names are "global.css", "main.css", custom.css", "project-name.css", "styles.css", basically something that describes the contents of the file.
>
>Then, add it to **index.html** using the `<link>` tag.
>
    <link rel="stylesheet" href="css/styles.css">
>
>Try a simple test to see if it is linked properly by adding a background color on the entire viewport.
>
    body {
      background: lightblue;
    }

More about referencing CSS [here](http://reference.sitepoint.com/css/linkingcss).



##CSS Colours

**keywords** - use the actual name (e.g. `red`, `green`, `blue`, `papayaWhip`, `paleGoldenrod`, etc)

**RGB (red-green-blue)** - uses 3 numerical values between `0` (represents black) and `255` (represents white)

**hex code** - number sign (`#`) followed by six hexadecimal characters (0-9, A-F)


    /* These are all the same colour */
    p {
      background: firebrick;
      background: rgb(178,34,34);
      background: #B22222;
    }


####Colour resources:  
  
* [http://coolors.co](http://coolors.co)
* [http://colours.neilorangepeel.com](http://colours.neilorangepeel.com)
* [http://wesandersonpalettes.tumblr.com](http://wesandersonpalettes.tumblr.com)
* [http://www.colorpicker.com](http://www.colorpicker.com)
* [http://www.colourlovers.com](http://www.colourlovers.com)
* [http://flatuicolors.com](http://flatuicolors.com)
* [http://color.hailpixel.com](http://color.hailpixel.com)


##Cascading

CSS executes from top to bottom (hence "cascading") so the order of your CSS declarations matter. The declaration that comes after overrides the one that came before.

In this example, based on the cascading rules, what colour will the `<h1>` be?

    h1 {
      color: black;
    }
    h1 {
      color: blue;
    }

It's a common error to declare the same selector/property combo as your CSS files get bigger and longer so organization is key to help reduce these issues.

**Important:** Often, projects will use more than one CSS file so the ordering of CSS also applies the order of the referenced CSS files in the `<head>` of your HTML document.  

##Inheritance and Specificity
One of the strengths of CSS is the styles can be inherited from parent elements to child/descendant elements. Remember the family tree relationship?  This family tree-like structure is often referred to as the **DOM** (Document Object Model). 

Read more about the DOM [here](https://css-tricks.com/dom/).

**HTML**

    <body>
      <h1>My Website</h1>
      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>
    </body>

**CSS**

    body {
      color: blue;
      font-family: Helvetica, Arial, sans-serif;
    }
    h1 {
      color: black;
    }

In the above example, all descendants of `<body>` will inherit the styles.  However, when a more *specific* selector is used (like `h1`), it overrides the inherited values.

> ##Exercise: CSS Selectors
> Practice using the different types of selectors.
> 
>1. Add a `color` property to the `body`.
1. Add a different colour for only the `h1` elements.
1. Create a `class` and add it to 2 paragraphs and a link (anchor tag).
    - add a colour value to the class
    - add a different colour value to the class ONLY when applied to links
1. Add an `id` to an element and choose yet another new colour.


##Workflow Tips & Tools
* Use [Dropbox](https://db.tt/eCZX3yo) or [Google Drive](https://www.google.ca/drive/) to sync and save your work in the cloud.
* Use a USB drive to save your work.
* Use some kind of bookmarking service to store all your resources in one place. (You'll have many!) Here's a few to try out:
  * [Evernote](https://evernote.com/)
  * [Pocket](https://getpocket.com/)
  * [Pinterest](https://www.pinterest.com/)
* [Pixlr](https://pixlr.com/) is a free image editing tool.  This will coming handy for cropping and manipulating image files.


~ End ~
