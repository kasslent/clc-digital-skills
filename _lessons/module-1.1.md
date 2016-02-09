---
layout: lessons
module: 1
lesson: 1
title: Getting Started With Web Development
permalink: module1-1.html
---

In 1989, Tim Berners-Lee, a physicist at CERN, began
experimenting with ways to share research documents
across different computer platforms. This would
eventually lead to the creation of the World Wide Web.

In 1994, he founded the [World Wide Web Consortium](http://www.w3.org/)
(W3C). The W3C governs web standards with
specifications, guidelines, tools and recommendations.


##Websites, web apps, native apps

**Websites** are generally informational (e.g. http://ladieslearningcode.com) and run in a web browser. They can (and should be) mobile friendly.

**Web apps (applications)** also run in the browser but usually allow the user to perform actions and tasks (e.g. Gmail). This is just a general rule of thumb, since informational sites can contain app-like features and vice versa.

**Native apps (applications)** must be downloaded to your computer or device and cannot be accessed in a web browser. They are also specific to your operating system (e.g. Android, IOS).


###Front-end languages

* generally refers to HTML, CSS and JavaScript
* can also be referred to as "client-side" 
* these languages handle everything you *see* in the web browser

These three languages work together but perform different functions.
 
**HTML** (Hypertext Markup Language) defines the page structure and content.  
**CSS** (Cascading Style Sheet) is responsible for presentation.  
**JavaScript** is a programming language and controls the behavior and interactions.


> Go to any website and right-click or two-finger tap anywhere on the page. Select **View Page Source**.  That's HTML, CSS and JavaScript!


###Back-end languages

* usually consists of a server, an application, and a database
* powers the website and makes it available on the web
* stores and manipulates data and  makes a website dynamic 
* handles all the things you *can't* see in the browser
* also referred to as "server-side"

For example, dynamic sites, like Facebook and Twitter, have content that is constantly changing and updated in real-time and contains information like user profiles. The backend handles all of that data and functionality.

Some examples of back-end programming languages are PHP, Ruby, Java (totally different from JavaScript!) and Python.


###Native apps programming languages

* specific to the device or operating system   
* e.g. Photoshop for computers, Instagram app for phones 
* must be downloaded onto your computer or mobile device

You don't need to be connected to the Internet to use native apps, though some may require it to display some types of content or features such as showing updated content feeds or syncing data.

Native apps are built in the specific programming language of the device/operating system (e.g. Objective-C or Swift for iOS, Java for Android).

>What are some examples of websites, web apps and native apps?


##Intro to HTML

###Creating HTML pages

To create an HTML page, name your file using an `.html` extension. That's it!

Just like .pdf is used for PDF files or .doc for Word files, using this extension will signal to the computer that this is a file that should run in a web browser.

###Best practices for naming web files

* Use lowercase letters.
    * **about.html** instead of **About.html** or **ABOUT.html**
* No spaces! Use underscores (`_`) or dashes (`-`). 
    * [Dashes are better for SEO](http://searchengineland.com/9-seo-quirks-you-should-be-aware-of-146465) (search engine optimization).
    * **business-hours.html** instead of **business hours.html**
    * The browser will interpret spaces as **business%20hours.html**
* Keep your file names concise, yet meaningful.
    * **about.html**, **contact.html** instead of **page1.html**, **page2.html**
* Avoid symbols like `#` `&` `*` but numbers are ok.

*Pro tip!*  
These naming tips also apply to other files such as folders, images, CSS files, etc.

###HTML vs XHTML vs HTML5

These terms refer to different versions of the
same language. With each new version, new features and rules are added while other features become obsolete.

HTML5 is the latest version.

HTML **tags** are used to create the web page structure are written with left `<` and right angled brackets `>` and a forward slash `/` for the closing tag.

<img src="{{ site.img }}/keyboard-html.png" class="print-hide">

Tags *usually* come in pairs &mdash; an opening tag and a closing tag &mdash; to *wrap* the content.  Note that the closing tag has a forward slash (`/`).

    <tag>Content that shows on page.</tag>
      |                               |
      |--opening tag                  |--closing tag

HTML tags describe the meaning of the content to the web browser.  This is referred to as [semantics](http://html5doctor.com/lets-talk-about-semantics/).

    <h1>This tag describes a heading</h1>
    <p>This tag is used for paragraphs.</p>

###Nesting tags

Tags can be *nested* within other tags like this:

    <outertag>outer content <innertag>inner content</innertag> outer content</outertag>

Nested tags create a *family tree-like* relationship and is often referred to as the *parent* node and *child* nodes.  The inner tag is the child of the outer tag.

When nesting tags, they must always close in the *reverse order*. Failing to do so will cause the HTML be to invalid and possibly break the CSS styles or page structure.

> Can you spot the error?
>
    <p>Paragraph with <strong>strong text.</p></strong>

####Organizing your code

Writing the HTML all in one line will work, but will make it more difficult to read (the browser doesn't care).

    <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body></body></html>

Whitespace through indentation (tabs) makes HTML easier to read. When nesting a tag, *add one tab space*.

Below are the base HTML tags that should be included in **all** HTML documents.

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title></title>
      </head>
      <body>
        <!-- page content here -->
        <!-- (this is an HTML comment by the way) -->
      </body>
    </html>

*Pro tip!*  
Getting into this habit from the start will help keep the code organized, easier to read, easier to find errors and look more professional.


###Attributes & HTML Comments

**Attributes** provide additional information or instruction for the element and is included *inside the opening HTML tag* in the form of `attribute="value"`. 

There are many different types of attributes.

    <tag attribute="value">content</tag>

> Looking at the example of the base HTML document tags above, can you pick out the two attributes?


**HTML comments** are useful for leaving notes for yourself (or others) but do not display in the browser. Comments are often used for:

* hiding code for later use
* leaving notes, reminders, explanations
* organizing the document

The syntax for comments start with `<!--` and ends with `-->`.

    <!-- Comments should ALWAYS be included between the dashes. -->
    

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

*Pro tip!*  
The W3C provides a free service to check if your markup is valid: [http://validator.w3.org/](http://validator.w3.org/)


###The `html` element

* always the first HTML tag
* root element, all other elements are nested inside
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

All content to be displayed in the browser window goes between the `<body></body>` tags.  Also known as the *viewport*.

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

>##Exercise: Setting up a project
> Remember to apply the file naming best practices!
>
> 1. Create a project folder
1. Open the project folder in your text editor
1. Open a new file and add in the basic HTML tags.
1. Save file as **index.html**
1. Open **index.html** in the browser. You won't see anything in the browser just yet! There's no content, just the HTML page structure.
1. Add a relevant page title to the `<title><title>` tag. 
1. Save & refresh the browser. Where do you see it?

*Pro tip!*  
Save and organize all your projects in a common area.  For example, have a folder called **"projects"** or **"sites"** and save all your individual projects in there.  Your folder directory might look like this:

    projects
      --- personal-site
      --- ladieslearningcode
      --- client-name

##HTML Page Structures

An important part of creating a web page is planning the page structure. Though you will likely make changes as you go along, creating a basic layout with semantic markup is a good way to start.

Get used to doing a lot of moving, deleting, changing and rewriting. This is the nature of programming!

If you don't have a web design to work from, a simple hand sketch also works. Also, websites have many common elements. For example, here is a simple wireframe for a basic web page. 

<img class="print-wireframe" src="{{ site.img }}/wireframe-basic.jpg">

### Grouping Elements

Creating a page layout using structural HTML tags and often involves grouping related content together.

The `<div>` tag is one of two HTML tags that have no semantic meaning. (`<span>` is the other. More on this later.) It is used purely for grouping related elements to page components.

To create the page layout, the HTML could look something like this:

<img class="grouping-elements print-hide" src="{{ site.img }}/wireframe-basic.jpg">

    <div>
      nav links here
    </div>

    <div>
      header content here
    </div>

    <div>
      about content here
    </div>

    <div>
      footer info here
    </div>


<h3 class="clear">HTML5 Structural Elements</h3>

HTML5 introduced new semantic tags to better describe blocks of content such as `<header>`, `<footer>`, `<nav>`, `<section>` and [many more](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png). 

Using HTML5 tags, the previous example could look like this instead:

    <nav>
      nav links here
    </nav>
    
    <header>
      header content here
    </header>
    
    <section>
      about content here
    </section>
    
    <footer>
      footer info here
    </footer>


However, `<div>` can and is still often used, when no other HTML tag properly describes the content. 

*Pro tip!*  
When in doubt, it&#39;s better use `<div>` than to use one of the HTML5 structural tags for content it was not intended for.

####Extra Resources

* [html5doctor.com](http://html5doctor.com)
* [HTML5 Element Flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf).

>Look at a couple different websites and discuss how the page can be grouped into related components to display the content in a meaningful & semantic way. (e.g. Where is the nav? Is there a footer?)


##HTML Content Tags

There are also many different HTML tags for displaying different types of content.  Here are some common tags.

###Paragraphs
Whether it's one sentence or more, each paragraph needs its own set of `<p></p>` tags.

    <p>This is a paragraph.</p>
    <p>This is another paragraph. More than one sentence.</p>


###Headings

There are six headings tags (different from the `<head>` tag) ranging from `<h1>` to `<h6>`. The different levels are used to describe the *hierarchy* of the page structure. 

Let's say you're writing an essay about apples.  How would describe the hierarchy of the main heading versus the subheadings for each section?

Prior to the HTML5 rules, using only one `<h1>` was recommended per page.  With the introduction of HTML5 *sectioning* tags, each part of the document that uses a sectioning tag now gets its *own* outline.

Let's look at how this hierarchy could be described using HTML and HTML5.

**Pre-HTML5 Heading Outline:**

    <h1>Essay About Apples</h1>

    <div>
      <h2>Introduction</h2>
      <p>There are many different types of apples...</p>
    </div>

    <div>
      <h2>Apple varieties</h2>
      <p>Paragraph.</p>

      <h3>Green apple varieties</h3>
      <p>Paragraph.</p>

      <h3>Red apple varieties</h3>
      <p>Paragraph.</p>
    </div>
  
    <div>
      <h2>Conclusion</h2>
      <p>Final paragraph.</p>
    </div>

    
**HTML5 Heading Outline:**

    <h1>Essay About Apples</h1>

    <section>
      <h1>Introduction</h1>
      <p>There are many different types of apples...</p>
    </section>

    <section>
      <h1>Apple varieties</h1>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>

      <h2>Green apple varieties</h2>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>

      <h2>Red apple varieties</h2>
      <p>Paragraph. Culpa nihil voluptatem quae.</p>
    </section>
    
    <section>
      <h1>Conclusion</h1>
      <p>Final paragraph.</p>
    </section>


####Extra resources

Read more about headings and HTML5 [here](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document) and [here](http://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824).


###Lists 

####Ordered Lists

Ordered lists are used to list items in a specific order. Two elements are required, an ordered list tag, `ol` and a list item tag, `li`.

    <p>Getting self-serve yogurt</p>
    <ol>
      <li>Take a cup</li>
      <li>Fill cup with yogurt</li>
      <li>Add toppings</li>
      <li>Weigh and pay</il>
    </ol>


####Unordered Lists

Use unordered lists for list items that do not need to be order sequentially. The syntax is the same as ordered list but use the unordered list tag, `<ul>` instead.

    <ul>
      <li>Home</li>
      <li>Portfolio</li>
      <li>Contact Me</li>
    </ul>

###Nesting Lists
Lists can go inside of another list and must be nested inside of a list item element.
Ordered & unordered lists can also be mixed when nested. This is where indentation can really help visualize which list is nested.


    <ul>
      <li>Home</li>
      <li>Recipes
        <ul>
          <li>Appetizers</li>
          <li>Mains</li>
          <li>Desserts</li>
        </ul>
      </li>
      <li>Contact</li>
    </ul>



>##Exercise: Adding Content, part 1
>In your **index.html** file, practice writing HTML and get used to the syntax.  
>Add some headings, paragraphs and lists.
>
>Make sure to open & close the tags properly, use indentation to organize your code and buidl good habits!


##Self-closing tags

Self-closing tags don't format content. Instead they are used to embed objects onto the page; they *are* the content. Because of this, they do not require a closing tag.

Two common self-closing tags are the line break (`<br>`) and horizontal rule (`<hr>`).
    

    <p>Paragraph with a line break,<br> this is on a new line.</p>
    <p>Another paragraph.</p>
    <hr>


The above code snippet will look like this in the browser: 

<div class="example">
  <p>This part of the sentence is on the first line,<br> this is on a new line.</p>
  <p>Another paragraph.</p>
  <hr>
</div>

Prior to HTML5, self-closing tags had to include a forward slash like this:

    <br/>
    <hr/>

Though this is still valid in HTML5, it is **no longer needed** but you may still see it in use.

##Images

Images are another example of a self-closing tag. Images also **require** an attribute to provide additional info. 

A `src` *attribute* is used to tell the browser the location of the image file.

    <img src="folder/filename.jpg">

The `alt` attribute provides *alternative text* for visually impaired users, using screen readers or if the images are disabled or unable to load.  This is recommended for your HTML to be valid and for accessibility.

    <img src="folder/filename.jpg" alt="short description of image">

###Image file types

There are many different file types used for web. Use the format that maintains the best quality while reducing the file size.

* **jpg** - used for photographs with lots of rich colours or gradients  
* **png** - used for images with transparent or opaque backgrounds  
* **gif** - used for images with minimal colour variation and of course, for animated gifs!
* **svg** - used for 2D graphics and is scalable
  * based on XML and can be used as a image file or as HTML
  * when included as HTML, CSS can be used to style the svg
  * more about SVG [here](http://css-tricks.com/using-svg/)


####Extra resource

If your file extensions do not show by default, here are instructions for [Mac](https://support.apple.com/kb/PH19072?locale=en_US) and for [Windows](http://windows.microsoft.com/en-ca/windows/show-hide-file-name-extensions#show-hide-file-name-extensions=windows-7).

### Copyright
Though images can be found all over the internet, use your own images or royalty free photos to ensure you don't violate any copyright laws. 
 
There are many paid options ranging in price but there are also many resources for free stock photography.
 
####Image resources

* [https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b](https://medium.com/@dustin/stock-photos-that-dont-suck-62ae4bcbe01b)
*  [http://blog.hubspot.com/marketing/free-stock-photos](http://blog.hubspot.com/marketing/free-stock-photos)


>##Exercise: Adding Content, Part 2
>
>Back in **index.html**, add some content using the appropriate headings and paragraphs. This time, try to write the HTML with the page structure in mind. Here are some elements that could be added:
>
>1. Create a general page structure using the appropriate tags
* header, navigation menu, main content, footer, sidebar, etc
>1. Add some content! Images, paragraphs, headings.
>
>Not sure what to write? Use placeholder text or images.
>
>* [meettheipsums.com](http://meettheipsums.com)  
>* [thewireipsum.com](http://thewireipsum.com)  
>* List of [image placeholder sites](http://www.wpfreeware.com/tutorial/placeholder-images-generator-service-web-designers/).
>
> <br>
> *Pro tip!*  
While not required, it's best practice to put image files into its own folder (as well as other related files like CSS and JavaScript) to keep your project directory organized.



## Links / Anchor tag

Links (hyperlinks) are represented by the anchor tag, `<a>`. It also needs an `href` (hypertext reference) attribute to provide information about the the link.

###Link to an external site

    <a href="http://ladieslearningcode.com">Ladies Learning Code</a>


###Link to an HTML page

    <a href="page-name.html">Another page</a>


###Link to a specific spot on a page

Add an `id` *attribute* to the tag where you would like the link to go *to*. In the `href` *attribute* value, use the `#` symbol followed by the id name, with **no spaces**.

    <a href="#go-here">Click this link to navigate to a spot on the page</a>
    
    <p>Content in between.</p>
    <p>More content.</p>
    <p>More content.</p>
    <p>More content.</p>
    
    <p id="go-here">This where you want the link to go TO.</p>

It can be used in any order and in any HTML tag.  The `id` and `href` values have to match.

    <h1 id="top">Top of page</h1>
    
    <p>Content in between.</p>
    <p>More content.</p>
    <p>More content.</p>
    <p>More content.</p>
    
    <a href="#top">Back to top</a>

###Link to a specific spot on another page

When you use a link to navigate to an `id` value, it adds that value to end of the URL.  You can now use that url to navigate to a specific spot on *another* page.

    <a href="faq.html#question1">Click this link to navigate to question 1 on the FAQ page.</a>


###Open link in a new window or tab

Add a second attribute, `target="_blank"` to make the link open in a new window or tab. Whether it opens in a new window or tab is based on the users' settings.

When using more than one attribute, order does not matter but make sure to include a space *between* the attributes.

    <a href="http://ladieslearningcode.com" target="_blank">Ladies Learning Code</a>


###Email link

    <a href="mailto:hello@myemail.com">hello@myemail.com</a>

###Image as a link

Instead of text, simply wrap the anchor tag around the image. 

When using an image or an icon, in addition to using the `alt` attribute, you can also add a `title` attribute to provide more info about the link.  It will also show as a "tool tip" when you hover over it (there's a slight delay).

    <a href="http://twitter.com" title="Twitter">
      <img src="images/twitter-logo.png" alt="Twitter logo">
    </a>

<a href="http://twitter.com" title="Twitter"><img class="example-img"  src="{{ site.img }}/twitter-logo.png" alt="Twitter logo"></a>

<br>

####Extra resource

More about `alt`, `title` and SEO (search engine optimization) [here](http://www.searchenginejournal.com/image-alt-text-vs-image-title-whats-the-difference/).


##Folder Structure, Relative & Absolute Paths

A website is basically a variety of files linked together.
Understanding the folder structure & using proper file
naming techniques will ensure that these linked files are
not "broken."

Basic folder directory example:

<pre class="example">
ladieslearningcode
  |-- css
      |-- styles.css
  |-- images
      |-- profile.jpg
      |-- logo.png
  |-- js
      |-- main.js
  |-- index.html
  |-- about.html
  |-- contact.html
</pre>

###Relative Path

Points to files located in the project files (not an external source like http://website.com). The file that you are editing is the *starting point*. Navigate to the desired directory from there.

Using the above directory example, to add a link from **index.html** to **about.html**, the `href` value will look like this:

    <a href="about.html">Menu</a>

The `src` value for an image in the **images** folder would be: 

    <img src="images/logo.png">


###Absolute Path

Uses the exact address including domain, subdirectories and filename. Use this option when linking to an external or *hosted* source.

    <a href="http://ladieslearningcode.com/">Ladies Learning Code</a>

Only link to web pages, not specific files such as images (unless it points to your own server). This would be considered *hotlinking*.

    <a href="http://ladieslearningcode.com/imagefile.jpg">Hotlinking an image. No!</a>


>##Exercise: Adding Content, Part 3
> Here are some suggestions to practice the concepts covered.
>
>1. create an additional HTML page
>1. add links to the `<nav>` block to link to your new page or within the same page
>1. add some images (e.g. logo or profile image)
>1. update the copy to reflect your bio and contact info
>
>**Bonus:**  For the email link, how do you set a default subject line?
>
>See example [here](http://stackoverflow.com/questions/4782068/can-i-set-subject-content-of-email-with-using-mailto).

~ End ~















