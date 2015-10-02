---
layout: lessons
week: 1
lesson: 1
description: Intro to HTML
permalink: /week1/1/
---

In 1989, Tim Berners-Lee, a physicist at CERN, began
experimenting with ways to share research documents
across different computer platforms. This would
eventually lead to the creation of the World Wide Web.

In 1994, he founded the [World Wide Web Consortium](http://www.w3.org/)
(W3C). The W3C governs web standards with
specifications, guidelines, tools and recommendations.


<!-- ##Websites vs web apps vs native apps

**Websites** are generally informational. **Web applications** usually allow the user to perform actions and tasks (e.g. Gmail). This is just a general rule of thumb, since informational sites can contain app-like features and vice versa. They are not entirely exclusive.

**Native applications** are apps that must be downloaded to your computer or mobile device rather than being accessed via web browser.

Many websites are created to be mobile friendly and many native apps will also have a web app version as well.  -->


##What are websites and apps made of?

###Front-end & client-side

**HTML** (Hypertext Markup Language) is a markup language and defines structure and content. 

**CSS** (Cascading Style Sheet) is a style sheet language responsible for presentation. 

**JavaScript** is a programming language and controls the behavior and interactions.

These three languages work together but perform different functions. Front-end development can also be referred to as "client-side", basically the stuff you see and interact with, in the web browser and are static.

> Go to any website and right-click or two-finger tap anywhere on the page. Select **View Page Source**.  That's HTML, CSS and JavaScript!


###Back-end & server side

The back-end basically refers to how a website *works* -- updates, dynamic changes and storing data. These are things the user *can't* see in the browser, like databases and servers.

Dynamic sites like Facebook and blogs, have content that is constantly changing and updated in real-time and contains information like user profiles.  These types of features also require some kind of server side language.

Some examples of back-end programming languages are PHP, Ruby, Java (totally different from JavaScript!), Python, etc. These languages need to be run on a *server* to work.


###Native Apps

Native apps are specific to the device or operating system (e.g. Photoshop for computers, Instagram for phones) and need to be downloaded onto your computer or mobile device.

It doesn't need to be connected to the Internet to work, though some apps may require it to display some types of content or features such as showing updated content feeds or syncing data.

Native apps are built in the specific programming language of the device/operating system (Objective-C for iPhones, Java for Android) and are different from front and back-end programming languages.

>What are some examples of websites, web apps and native apps?

##HTML vs XHTML vs HTML5

Basically, these terms refer to different versions of the
same language. With each new version, new features and rules are added while other features become obsolete.

HTML5 is the latest version.



##Creating HTML pages

To create an HTML page, name your file using an `.html` extension (e.g .pdf for PDF files or .doc for Word files).  It will then open in your default browser.

Here are some best practices and file naming tips:

* Use lowercase letters.
    * **about.html** instead of **About.html** or **ABOUT.html**
* Avoid s p a c e s. Use underscores (`_`) or dashes (`-`). 
    * Note that [dashes are preferred for SEO](http://searchengineland.com/9-seo-quirks-you-should-be-aware-of-146465) (search engine optimization).
    * **business-hours.html** instead of **business hours.html**
    * The browser will interpret spaces as **business%20hours.html**
* Avoid symbols like `#` `&` `*` in your file name.
* Keep your file names concise, yet meaningful.
    * **about.html**, **contact.html** instead of **page1.html**, **page2.html**

All the file naming tips also apply to other files such as folders, images, CSS files, etc.

##Exercise: Create a web page
> 1. Create a project folder
1. Open the text editor
1. Type anything you want
1. Save file as **index.html**
1. View in browser
1. Make another change and save
1. Refresh the browser


##HTML Basics

Tags *usually* come in pairs &mdash; an opening tag and a closing tag &mdash; to *wrap* the content.  Note that the closing tag has a forward slash (`/`).

    <tag> opening tag --- closing tag </tag>

HTML *tags* describe the content inside of them to the web browser.  This is referred to as [semantics](http://html5doctor.com/lets-talk-about-semantics/).

    <h1>This tag describes a heading</h1>
    <p>This tag is for paragraphs.</p>


Tags are written with `<` left and right angled brackets `>` and a forward slash `/` for the closing tag.

![keyboard keys](../assets/img/week1/keyboard-html.png)


###Nested tags & attributes

Tags can be *nested* within other tags like this:

    <outertag>outer content <innertag>inner</innertag> outer content</outertag>

Nested tags create a *family tree-like* relationship and is often referred to as the *parent* node and *child* nodes.  The inner tag is the child of the outer tag.

When nesting tags, they must always close in the *reverse order*. Failing to do so will cause the HTML be to invalid and possibly break and not apply CSS styles properly.

What's wrong with this example below?

    <p>I am a paragraph with <strong>bold text.</p></strong>

####Organizing your code

Writing the HTML all in one line will work, but will make it really difficult for us to read (the browser doesn't care).

    <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body></body></html>

Whitespace through indentation (tabs) makes HTML easier to read. When nesting a tag, add one tab space.  Getting into this habit from the start will help keep you organized.

**These are the base HTML tags and should be included in all HTML documents.**

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title></title>
      </head>
      <body>
        <!-- page content here (this is an HTML comment by the way) -->
      </body>
    </html>


###Attributes & HTML Comments

**Attributes** provide additional information or instruction for the element and is included *inside the opening HTML tag* in the form of `attribute="value"`. There are many different types of attributes.

    <tag attribute="value">content</tag>

> Looking at the example of the base HTML document tags above, can you pick out the two attributes?


HTML comments are useful for leaving notes for yourself (or others) but do not display in the browser. Comments are often used for:

* hiding code for later use
* leaving notes, reminders, explanations
* organizing the document

The syntax for comments start with `<!--` and ends with `-->`.

    <!-- Comments should always be included between the dashes. -->


##The HTML Document

###Doctype
  
  * must be the first item
  * not an HTML tag
  * tells the browser what HTML version the page is written in
  * switches the document into *standards* mode - helps the browser render the content based on the rules denoted by the DOCTYPE version
  * browsers can render the document without a doctype but will switch into *quirks* mode and may have unexpected results (no rules!)
  

<pre><code class="opacity"><strong>&lt;!DOCTYPE html&gt;</strong>
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- page content here --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

The above is the HTML5 doctype. The previous version, XHTML, looked like this:

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

The W3C provides a free service to check if your markup is valid: [http://validator.w3.org/](http://validator.w3.org/)


###The `html` element

* always the first HTML tag
* root element & ancestor of all other elements because everything is nested inside
* identifies the document as HTML
* the `lang` *attribute* classifies the language

<pre><code class="opacity">&lt;!DOCTYPE html&gt;
<strong>&lt;html lang=&quot;en&quot;&gt;</strong>
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- page content here --&gt;
  &lt;/body&gt;
<strong>&lt;/html&gt;</strong>
</code></pre>

###The `head` element

* includes information about the page but does not display content
* `<title></title>` is the only required tag inside of this element
  * defines the title of the web page/document
  * displayed in the browser toolbar, bookmarks and search engine results
* CSS, JavaScript & [metadata](searchenginewatch.com/sew/how-to/2067564/how-to-use-html-meta-tags) can also be included here
  * `<meta charset="UTF-8">` sets the [character encoding](https://code.google.com/p/doctype-mirror/wiki/MetaCharsetAttribute) of an HTML document

<pre><code class="opacity">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  <strong>&lt;head&gt;</strong>
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;My page title&lt;/title&gt;
  <strong>&lt;/head&gt;</strong>
  &lt;body&gt;
    &lt;!-- page content here --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>


###The `body` element

All content to be displayed in the browser window goes between the `<body></body>` tags.  
Also known as the *viewport*.

<pre><code class="opacity">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;My page title&lt;/title&gt;
  &lt;/head&gt;
  <strong>&lt;body&gt;</strong>
    &lt;!-- page content here --&gt;
  <strong>&lt;/body&gt;</strong>
&lt;/html&gt;
</code></pre>

##Exercise: HTML basic tags

>* Add all of the basic HTML tags to your **index.html** file. (show shortcut?)
>* Add a page title to the `<title><title>` tag.  
>
>Check your updates in the browser.  Where you do you see the `title`?

##HTML Page Structures

An important part of creating a web page is planning the page structure. Though you will likely make changes as you go along, creating a basic layout with semantic markup is a good way to start.

It's like building a house. You start with a blueprint and frame before putting up walls and painting. If you don't have a design to work from, a simple sketch also works. 

There are many HTML tags for creating the page structure.

For example, here is a simple wireframe for a basic web page. With this in mind, let's create the basic structure using the appropriate HTML tags.

![](../assets/img/week1/wireframe-basic.png)


### Grouping Elements

The `<div>` tag is one of two HTML tags that have no semantic meaning. (`<span>` is the other. More on this later.) It is used purely for grouping related elements together for styling.

`<div>` tags are often used with the `class` attribute to differentiate them (more on class later). 

To create the page layout, the HTML could look something like this:

    <div class="nav">
      nav links here
    </div>

    <div class="header">
      header content here
    </div>

    <div class="about">
      about content here
    </div>

    <div class="footer">
      footer info here
    </div>

###HTML5 Structural Elements

HTML5 introduced new semantic tags to better describe blocks of content such as `<header>`, `<footer>`, `<nav>`, `<section>` and many more. Using HTML5 tags, the previous example could look like this instead:

    <nav>
      nav links here
    </nav>

    <header>
      header content here
    </header>

    <section class="about">
      about content here
    </section>

    <footer>
      footer info here
    </footer>


`<div>` can and is still often used when no other tag properly describes the element. When in doubt, it&#39;s better use `<div>` than to use one of the structural tags for content it was not intended for.

[html5doctor.com](http://html5doctor.com) is a great reference for proper usage and the semantics of all the HTML tags and also provides this handy [HTML5 Element Flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf).


>####Add the page structure
>
>Go back to your **index.html** and add these tags to your page.


##HTML Content Tags

###Paragraphs
Whether it&#39;s one sentence or more, each paragraph needs its own pair of `<p></p>` tags.

    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>


###Headings

There are six headings tags (not to be confused with the `<head>` tag) ranging from `<h1>` to `<h6>`. The different levels are used to describe the *hierarchy* of the page structure. 

To decide which heading to use, think about how you would arrange an essay outline.

<!-- <div class="example essay">
  <h1>Essay About Apples</h1>

  <h2>Introduction</h2>
  <p>There are many different types of apples. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque pariatur minus libero ut voluptatum voluptates obcaecati doloribus saepe nobis ipsa natus, assumenda possimus, laudantium in, iure. </p>

  <h2>Apple varieties</h2>
  <p>Paragraph. Culpa nihil voluptatem quae.</p>

  <h3>Green apple varieties</h3>
  <p>Paragraph. Culpa nihil voluptatem quae.</p>

  <h3>Red apple varieties</h3>
  <p>Paragraph. Culpa nihil voluptatem quae.</p>

  <h2>Conclusion</h2>
  <p>Final paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque pariatur minus libero ut voluptatum voluptates obcaecati doloribus saepe nobis ipsa natus, assumenda possimus, laudantium in, iure. </p>
</div>-->

Let's look at how we could describe this hierarchy using heading tags.

Prior to the HTML5 rules, using only one `<h1>` was recommended per page.  With the introduction of HTML5 sectioning tags, each part of the document that uses a sectioning tag now gets its *own* outline.

**Pre-HTML5 Heading Outline:**

    <h1>Essay About Apples</h1>

    <div class="intro">
      <h2>Introduction</h2>
      <p>There are many different types of apples...</p>
    </div>

    <div class="varieties">
      <h2>Apple varieties</h2>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>

      <h3>Green apple varieties</h3>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>

      <h3>Red apple varieties</h3>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>
    </div>
    
    <div class="conclusion">
      <h2>Conclusion</h2>
      <p>Final paragraph.</p>
    </div>
    
**HTML5 Heading Outline:**

    <h1>Essay About Apples</h1>

    <section class="intro">
      <h1>Introduction</h1>
      <p>There are many different types of apples...</p>
    </section>

    <section class="varieties">
      <h1>Apple varieties</h1>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>

      <h2>Green apple varieties</h2>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>

      <h2>Red apple varieties</h2>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>
    </section>
    
    <section class="conclusion">
      <h1>Conclusion</h1>
      <p>Final paragraph.</p>
    </div>

<br>
**Extra resources:**  Read more about headings and HTML5<!-- .element: class="footnote" --> [here](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document) and [here](http://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824).


>####Add some content
>
>Back in your **index.html**, add some content using the appropriate headings and paragraphs.  Leave the `<nav>` blank for now. 
>
>* Add the main page heading and subheading to the header section.
* Add a heading and a couple paragraphs to the About and Footer/Contact section.
>
>Your page will look similar to this: 
>
>![](../assets/img/week1/text-only-example.png)
>
>Not sure what to write? Use placeholder text.  
>
>[http://meettheipsums.com](http://meettheipsums.com)  
>[http://thewireipsum.com](http://thewireipsum.com)  


##Self-closing tags

Self-closing tags don't format content. Instead they are used to embed objects onto the page; they *are* the content. Because of this, they do not require a closing tag.

Two self common self-closing tags are the line break (`<br>`) and horizontal rule (`<hr>`).
    

    <p>Paragraph with a line break,<br> this is on a new line.</p>
    <p>Another paragraph.</p>
    <hr>


The above code will look like this in the browser: 

[ add example style ]

<div class="example">
  <p>This part of the sentence is on the first line <br>this is on a new line.</p>
  <p>Another paragraph.</p>
  <hr>
</div>

Prior to HTML5, self-closing tags had to actually self-close by including a forward slash like this:

    <br/>
    <hr/>

Though this is still considered valid in HTML5, it is **no longer needed**.

###Images

Images are another example of a self-closing tag. It also requires a `src` *attribute* to tell the browser the location of the image file.

    <img src="path/to/image/file">

The `alt` attribute should be added to the image tag to provide *alternative information* for visually impaired visitors using screen readers or if the images are disabled or unable to load.  This is highly recommended for your HTML to be valid and for accessibility.

The `title` attribute is optional and can be added to provide additional information: it should be relevant and concise.  The content of this attribute will show as as a "tool tip" when you hover over the image.

    <img src="http://placekitten.com/g/200/300" alt="kitten" title="kitten image from http://placekitten.com">

<img src="http://placekitten.com/g/200/300" alt="kitten" title="kitten image from http://placekitten.com">

More about `alt`, `title` and SEO (search engine optimization) [here](http://www.searchenginejournal.com/image-alt-text-vs-image-title-whats-the-difference/).

###Image file types

There are many different file types used for web. Each type is best suited for specific kinds of images. Use the format that maintains the best quality while reducing the file size.

**jpg** - used for photographs with lots of rich colours or gradients  
**png** - used for images with transparent or opaque backgrounds  
**gif** - used for images with minimal colour variation and of course, for animated gifs!

<iframe src="https://giphy.com/embed/n0WvhHFTpihk4" width="500" height="285" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

**svg** - used for 2D graphics and is scalable. Based on XML and can be used as a image file or as HTML. When included as HTML, CSS can be used to style the svg!

While not required, it's best practice and common to put image files into its own folder (as well as CSS and JavaScript files) to keep your project directory organized.

####Extra resource

If your file extensions do not show by default, here are instructions for [Mac](https://support.apple.com/kb/PH19072?locale=en_US) and for [Windows](http://windows.microsoft.com/en-ca/windows/show-hide-file-name-extensions#show-hide-file-name-extensions=windows-7).

####Image resources

* list of [image placeholder sites](http://www.wpfreeware.com/tutorial/placeholder-images-generator-service-web-designers/)
* free stock photos [here](https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b) and [here](http://blog.hubspot.com/marketing/free-stock-photos)
* more about SVG: [http://css-tricks.com/using-svg/](http://css-tricks.com/using-svg/)



## Links / Anchor tag

Links (hyperlinks) are represented by the anchor tag, `<a>`. It also needs an `href` attribute to provide information for where the link should go.

####Link to an external site

    <a href="http://ladieslearningcode.com">Ladies Learning Code</a>


####Link to other HTML pages

    <a href="page-name.html">Another page</a>


####Link to a specific spot on a page

Add an `id` *attribute* to the tag where you would like the link to go to. In the `href` *attribute* value, use the `#` symbol followed by the id name, with no spaces.

    <a href="#linkSpot">Click this link to navigate to a spot on the page</a>
    <p>Content in between.</p>
    <p>More content.</p>
    <p>More content.</p>
    <p>More content.</p>
    <p id="linkSpot">This where you want the link to go TO.</p>


####Link to a specific spot on another page

    <a href="about.html#linkSpot">Click this link to navigate to a spot on the page</a>


####Set link to open in a new window
Add a second attribute, `target="_blank"`. When using multiple attributes, make sure to include a space *between* the attributes.

    <a href="http://ladieslearningcode.com" target="_blank">Ladies Learning Code</a>


####Set an email link

    <a href="mailto:hello@myemail.com">hello@myemail.com</a>



##Folder Structure, Relative & Absolute Paths

A website is basically a variety of files linked together.
Understanding the folder structure & using proper file
naming techniques will ensure that these linked files are
not "broken."

Example of a basic folder structure:

![](../assets/img/week1/file-path.jpg)

**the-cupcakery** is the *root* folder.  


###Relative Path

Points to files located in the project files (not an external source like placekitten.com). The HTML file that contains the link is the *starting point* to find your source.

Using the above example to link from **index.html** to **menu.html**, the `href` value will look like this:

    <a href="menu.html">Menu</a>

The `src` value for an image in the image folder: 

    <img src="images/cupcakes.png">


###Absolute Path

Uses the exact address including domain, subdirectories and filename. Use this option when linking to an external or *hosted* source.

    <a href="http://ladieslearningcode.com/">Ladies Learning Code</a>

Only link to web pages, not specific files such as images (unless it points to your own server). This would be considered *hotlinking*.

    <a href="http://ladieslearningcode.com/imagefile.jpg">Hotlinking an image. No!</a>


>##Exercise
>
>1. add links to the `<nav>` block to link to the About and Footer of the page
>1. add some images, like a profile image to the About section
>1. update the copy to reflect your bio and contact info
>
>**Bonus:**  For the email link, how do you set a default subject line?
>
>See example [here](../examples/week1-1.html).

~ End ~















