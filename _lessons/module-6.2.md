---
layout: lessons
module: 6
lesson: 2
title: Intro to jQuery & Plugins
description: Exploring jQuery and extending the library with Plugins.
permalink: module6-2.html
---

## JavaScript vs jQuery

### What is jQuery?

Simply put, jQuery is a JavaScript file written by [an awesome team of developers](https://js.foundation/) who make coding easier for you, and they do it all for free.

#### JavaScript example

    document.getElementById("status")

#### jQuery example

    $("#status")

It has its own syntax, which is the beauty of jQuery. It's easier to read and faster to type. It is still JavaScript at its core, which is why it was important to have a base understanding of JavaScript principles in our last module to make sense of how jQuery works.

## Functions & jQuery

A function is one of the most powerful tools in JavaScript and the one you're learning about today is:

    jQuery()

Looks like a function right?

Remember, jQuery is a JavaScript *library* which contains *many* prewritten functions/methods used to simplify your program.

In most cases, it's conventional to use the jQuery shortcut, `$`.

`jQuery()` is the same as `$()`.

This syntax will be used for the remainder of the lessons.

## Using jQuery

### How to select an HTML object/element

A common use for jQuery is selecting an HTML element, and applying an effect or action to it. The `$()` function takes a single value: a string containing a selector, just like the ones we use in CSS.

To select all the paragraphs on the page, use `p` as the selector. It is contained in quotes because it is a string:

    $("p");


To select a class name, use the leading period, just like we do in CSS:

    $(".about");

To select an id name, use the number/hash symbol, you guessed it, just like we do in CSS:

    $("#about");

> What element will be selected in this example?
>
    $(".about p");

Once you select an object, you can apply one of many effects to it using various methods. All the methods are documented here: [http://api.jquery.com/](http://api.jquery.com/category/effects/)

Many of these effects allow you to add **parameters** to change the speed of the effect (numbers are in milliseconds).  

You can even chain them together to create multiple effects!

    $(".box").fadeOut();
    $(".box").fadeOut(2000);
    $(".box").fadeOut(2000).fadeIn(500);

> Let's try it out on CodePen: <http://codepen.io/learningcode/pen/pjQePw#0>

## Adding JavaScript/jQuery to your files

Let's start by adding jQuery to our project. There are two ways to add JavaScript to a page:


<div class="summary">

### Inline

</div>

<div class="details">

*Pros*: Easier to implement because you don't have to create a separate file. Is perfectly fine if you are running some action only one page, for example if you have a photo slider only on the homepage.

*Cons*: On a multi-page site, the scripts would have to be added to every page. If you update it on one page, you would have to copy and paste your changes across the rest of the pages.

Add a pair of `<script></script>` tags onto the HTML page to enclose the JavaScript code.  JavaScript can be added anywhere on the page, but it's often recommended to add the scripts to the bottom of the page just before the closing `</body>` tag to allow all the page content to load first.


    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <!-- a bunch of HTML here -->

      <script>
        // JavaScript here
      </script>
    </body>
    </html>

>You might see the `type` attribute included as well. This was required before HTML5 was introduced:

    <script type="text/javascript">
      // JavaScript here
    </script>

</div>

<div class="summary">

### External

</div>

<div class="details">

Just like CSS, you can also write JavaScript in a separate file using a `.js` file extension. Link to it using the same `<script></script>` tag pair, but add the `src` attribute with the path to your file:

    <script src="js/main.js"></script>

Common file names include `global.js`, `main.js`, or `project-name.js`

</div>

#### $(document).ready()

jQuery uses the `ready()` method to detect the state of readiness. It's some additional syntax to get used to, but it's **required** to make the jQuery code work properly. **It only needs to be included *once***. Add all the jQuery code in *between* the curly brackets `{}`:

    $(document).ready(function(){
      // jQuery goes here
    });

*(In CodePen, you don't have to include the `document.ready()` because it's already integrated into the tool.)*

**Extra resource**: <http://learn.jquery.com/using-jquery-core/document-ready/>


## Referencing jQuery's library

Similar to Google Fonts or any third party tool, you have to reference the jQuery file to access all code required first, just like you need your paint brushes before you can paint!

<div class="summary">

### Option 1 - Download and include the files locally

</div>

<div class="details">

[Download](http://jquery.com/download/) the latest version of jQuery, and save it within your projects files. It’s common to create a separate folder for JavaScript files for organization, just like the images and css folders.

Use the `<script>` tag to reference the file using the `src` attribute to provide the path to the jQuery file. Make sure to include jQuery *before* your JavaScript file. Remember, you need your paint brushes before you can paint!

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/main.js"></script>

>**Why download and include locally?**
>You can work with jQuery offline using this method - that means you can practice jQuery and work with it on your site without needing a WiFi connection

</div>

<div class="summary">

### Option 2 - Use a CDN

</div>

<div class="details">

CDNs can offer a performance benefit by hosting jQuery on servers spread across the globe. To use the jQuery CDN, reference the hosted file directly, listed on the [Downloads](http://jquery.com/download/) page, like this:

    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="js/main.js"></script>

**Pro tip:** Opt for the *compressed* version, also referred to as *minified*, which is where the `.min` before the `.js` comes from. This means that all the indentation and line breaks have been removed from the file. Remember, this makes it harder for *humans* to read, but your browser can read it just fine. We aren't going to be making any changes to the core jQuery file anyway, so it's fine for the file to be unreadable for us.

Be sure to include the `http://` when viewing the site locally (on your computer)!

    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

>**Why use a CDN?**
>This can improve your sites performance because of the popularity of jQuery. If your user has already visited a site that uses your same version of jQuery, that file will already be cached (remembered) in their browser, so their browser will have one less request to make when they are visiting your site. Plainly said, their browser will think "hey, I've seen this before, I don't need to download it again".

</div>

>## EXERCISE: Adding JS To Our Own Projects
>
>We are going to add jQuery and our own JavaScript file to our project. Feel free to use the [sample project](exercises/module5/project-one-sample-w-js.zip):
>
>
> 1. Create a folder named `js` inside your project folder to keep your JavaScript files. This will include your own JS code, as well as any jQuery files and jQuery plugins you may want to include in future.
> 1. Go to [jquery.com](https://jquery.com/) and download the latest version of jQuery by clicking on the "Download jQuery" button and then selecting *Download the compressed, production jQuery x.x.x*. Copy your downloaded jQuery file into your new `/js` folder from step 1.
> 1. Create your own js file and name it *main.js*
> 1. In your html file(s) add the jQuery script, followed by your own script using `<script></script>` tags. Add them to the end of your HTML file, right before the closing body tag:
>
>        <script src="js/jquery-3.3.1.min.js"></script>
>        <script src="js/main.js"></script>
> 1. Be sure to add your `document.ready` function to your main.js file:
>
        $(document).ready(function(){
           //jQuery code here
        });
> 1. Add a `console.log()` or `alert()` function where it says `//jQuery code here` above. For example `alert('Hello World!');`
> 1. Open up your HTML page where the scripts are linked and test to see if the alert or console.log worked. If they did, that means you've successfully added jQuery and JavaScript to your website! If they do not, use your Developer tools and select the console tab. Read any errors to help you debug the root of the problem. Ask a mentor or someone sitting beside you if you need help!


## jQuery Click Events

Often, JavaScript is used to handle events that require the user to click on something before an action happens.  Using a click event can control *when* the effect happens instead of being executed right away. Remember when we talked about "Events" in Scratch? This is exactly the same:<br>
![]({{ site.img }}/module5/scratch-events.png)

Instead of the browser running the event right away, a **click event** is triggered only when the selected item is clicked by the user.

> When would this effect be useful? Can you find examples of this on the page you're reading now?

#### Syntax

    $( "selector" ).click(function() {
      // code to be executed on click
    });

Let's try this out in another [CodePen example](http://codepen.io/learningcode/pen/WQYpxG).


## Click Event & Mobile Navigation (a.k.a. Hamburger Menu)

In one of our earlier modules we learned how to use Media Queries to make our website responsive. One really helpful thing we can use click events for is a mobile navigation. Today we will be creating a simple one you can then use for your own website.

Let's take a look at the example below:
<p data-height="265" data-theme-id="0" data-slug-hash="NeyMZp" data-default-tab="css,result" data-user="sdaponte" data-pen-title="Simple Hamburger Navigation" class="codepen">See the Pen <a href="https://codepen.io/sdaponte/pen/NeyMZp/">Simple Hamburger Navigation</a> by sdaponte (<a href="https://codepen.io/sdaponte">@sdaponte</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
Let's figure out what we need to do in English (tip: be sure to try resizing the codepen example to see what happens in bigger and smaller browser widths):

1. When the browser resizes to less than 650px, the menu items disappear, and a tri-bar or hamburger (&#8801;), will appear instead.
2. When we click on the hamburger, the menu items will appear, and instead of a hamburger, we will see an "X" in the upper right hand corner.
3. When we click on the "X", we return back to the original state.

>## Class Code-Along: Creating a mobile navigation with jQuery click events.
>
For this code-along, you can add this to your project, or use the project demo files if you would like [here](exercises/module5/project-one-sample-w-js.zip).
>
> This exercise is based on an HTML navigation markup that looks like this:
>
>     <nav>
>     	<ul>
>     		<li><a href="#about">About</a></li>
>     		<li><a href="#social">Social</a></li>
>     		<li><a href="#contact">Contact</a></li>
>     	</ul>
>     </nav>
>
> 1. In order to create our fancy mobile navigation, we first need to add a few things to our plain nav above:
> * We need a hamburger to open the mobile nav
> * We need an &times; to close the navigation
>

        <nav>
        	<a href="#" class="hamburger">&#8801;</a>
        	<ul class="main-nav">
        		<a href="#" class="close">&times;</a>
        		<li><a href="#about">About</a></li>
     				<li><a href="#social">Social</a></li>
    				<li><a href="#contact">Contact</a></li>
        	</ul>
        </nav>

>#### Quick tip : The symbols we used above are called *HTML entities*. Check out [some of the available ones here](http://character-code.com/)
>
> 1. Next, in our CSS files, we are going to hide the hamburger and close buttons by default. That means on screens that are large enough, we'll see the regular menu.
>
        	.hamburger, .close{
			       display: none;
        	}
>
> 1. Now we are going to create a media query for when our device or browser is 650px wide or smaller. (You can choose a value that works best for your design, depending on the number of navigation items you have.)
> When our screens are smaller than 650px, we will show the hamburger and close buttons.
We are also going to change the font-family to make the symbols we're using look a little better:
>
        @media(max-width: 650px){
        	.hamburger, .close{
  			    display: block;
  			    font-size: 24px;
  			    font-family: "Lucida Sans Unicode", "Arial Unicode MS";
        	}
        }
>

> 1. We also need to hide the `ul` inside the `nav` when the browser is smaller than 650px. Remember, our mobile menu will only show after the user clicks on the hamburger button.
> We could use `display: none;` to hide our `ul`, but instead we will apply  `position: fixed;` to our `ul` because we want it to take up the whole screen when it is visible. We will also position it out-of-sight for now, above the top edge of the viewport.
>
        nav ul {
        	position: fixed;
        	top: -100vh; /*vh = vertical height*/
        }
>
> 1. Next we'll create a new class for our `ul` that we will trigger to display the menu items once we click on the hamburger. We will call the class `open-nav`.
>
        nav ul.open-nav {
        	top: 0;
        }
>
>Let's try adding the class to our `ul` to see what it would look like once it's open. Be sure to have your viewport at 650px or less.
>**Pro tip:** Recall back to our responsive design class - do you remember how to use the device testing mode in the Developer tools?
> As you can see, the menu right now looks too narrow. So let's add some more styles to our .open-nav class inside of the media-query:
>
      nav ul.open-nav {
      	top: 0;
      	right: 20px;
      	padding: 2% 10%;
      	z-index: 2; /*the stacking order of items*/
      	background: #550165;
      	width: 100%;
      	height: 100vh;
      }
>
> Let's also give the anchors inside of the ul.main-nav in the media-query, the colour white, to contrast better with the purple background.
>
    .main-nav a {
    	color: white;
    }
>
> Alright, that should be pretty good for the styles. You can finesse them later. The next step is adding the click events using jQuery that will add and remove the class of `open-nav`. This next bit of code goes in your main.js file that we added to our projcets [last week](http://127.0.0.1:4000/llc-digital-skills/module5-1.html#adding-javascriptjquery-to-your-files). If you haven't done that already, be sure to add both jQuery and your own js file to your project.
>
To add and remove the class of `open-nav` we will use a jQuery method called `toggleClass();`.
>
    $(".close, .hamburger").click(function(e){
      e.preventDefault();
      $(".main-nav").toggleClass('open-nav');
    });
>
> Now let's test! Isn't it a little bit magical?
> Don't forget to add the JS files and the new navigation markup to all your HTML documents in your project.
> Checkout the full solution for your reference, [here](exercises/module5/project-one-sample-w-js.zip)

## Documentation & Finding Answers

A part of web development is reading tutorials, articles and documentation.  

Another important part is knowing how to ask directed questions to find the answers.

> Discussion: What are some search techniques or resources that can be used to find answers?

## Below are some bonus activities if you have a website that needs any of these features.

### Bonus Click event & an "active" menu

Here's an example of a navigation effect that can be added to a one page website.  

<p data-height="185" data-theme-id="0" data-slug-hash="XJwKBb" data-default-tab="result" data-user="learningcode" class='codepen'>See the Pen <a href='http://codepen.io/learningcode/pen/XJwKBb/'>XJwKBb</a> by Ladies Learning Code (<a href='http://codepen.io/learningcode'>@learningcode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="http://assets.codepen.io/assets/embed/ei.js"></script>

Here's how to do it, broken down into steps.

1. Select the elements to be clicked.
1. Test if you have correctly selected the element with `console.log()`.
1. Add a class of “active” to the active link (the link that was clicked) using `addClass()`.
1. Add the “active” class style to the CSS file.
1. When the user clicks on another menu item, add the “active” class to the new item and remove the active class from non-active items.

> ### Bonus Class Exercise: "Active" menu
> Download the <a href="exercises/module5/javascript.html" download>javascript.html</a> exercise file.  Using the instructions above to create active styles for the menu, based on the user's click.

## Plugins

A plugin is a piece of software that adds additional functionality and are available for many programming languages, software (i.e. browsers) or frameworks (i.e. WordPress).

The jQuery library contains many methods and features but you can extend it even further by using plugins. To add a plugin to your website, all you need to do is add the plugin's js file, possibly a css file as well, and then add a little bit of code you can usually copy straight from their webpage, into your own javascript file.

How easy or hard it is to implement a JavaScript plugin depends on how detailed and simple to follow is the documentation of that plugin. Learning to understand plugin documentation is one of the most important skills to hone as a web developer. And the more you practice, the easier it will become. But don't be discouraged if it looks way too technical and over your head when you first start out reading plugin documentation.

Let's try a couple!


> ### Bonus Class Exercise: Smooth scroll
> Using the previous exercise file, add the smooth scroll plugin.  
> Let's follow the instructions listed in the plugin developers [site](https://github.com/cferdinandi/smooth-scroll).

> Bonus exercises:
>
> 1. Set the navigation to be fixed at the top of the page.
> 1. Use the [plugin options](https://github.com/cferdinandi/smooth-scroll#options-and-settings) to add an "offset" option, so you can position where the page scrolls to.
>
> Solution file for both exercises can be [downloaded here](exercises/module5/javascript-solution.zip).


### Bonus Magnific Popup Implementation

Let's take a look at another plugin, [magnific popup](http://dimsemenov.com/plugins/magnific-popup/).

Magnific Popup creates a *lightbox* that opens up to view a small thumbnail image, large. From the link above you can take a look at some demos.

To create a gallery with lightbox pop-ups, we need to do the following:
1. Download the Magnific Popup JavaScript file from the website and add it to the javascript.html file after the jQuery link but above your own js code.
1. Create the thumbnail gallery exactly the way Magnific Popup tells you to in the Magnific Popup section. You'll notice that each one of the small images is wrapped in an anchor tag that links that small image to the large image. The JavaScript we'll add from Magnific Popup, makes that larger image open up in a lightbox. Below is a selection of sample Nicolas Cage photos but you can replace them with your own.

        <div class="popup-gallery">
        	<a href="http://placecage.com/900/600" title="Nick Cage">
        		<img src="http://placecage.com/200/200" data-pin-nopin="true">
        	</a>
        	<a href="http://placecage.com/900/600" title="Nick Cage">
        		<img src="http://placecage.com/200/200"  data-pin-nopin="true">
        	</a>
        	<a href="http://placecage.com/900/600" title="Nick Cage">
        		<img src="http://placecage.com/200/200" data-pin-nopin="true">
        	</a>
        	<a href="http://placecage.com/900/600" title="Nick Cage">
        		<img src="http://placecage.com/200/200" data-pin-nopin="true">
        	</a>
        </div>

1. Then add the jQuery code it gives you in the source

        $(document).ready(function() {
        	$('.popup-gallery').magnificPopup({
        		delegate: 'a',
        		type: 'image',
        		tLoading: 'Loading image #%curr%...',
        		mainClass: 'mfp-img-mobile',
        		gallery: {
        			enabled: true,
        			navigateByImgClick: true,
        			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        		},
        		image: {
        			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        			titleSrc: function(item) {
        				return item.el.attr('title');
        			}
        		}
        	});
        });

1. Last, but not least, be sure to link the magnific popup css sheet that comes in the files you downloaded with the plugin, in the head of your html file. Othewrise your lightbox may look a little undressed.


## jQuery resources

* [jQuery Selectors](http://api.jquery.com/category/selectors/)
* [jQuery Click Event](http://api.jquery.com/click/)
* [jQuery Effects](http://api.jquery.com/category/effects/)

## More Plugins!

Why don't you go ahead and try another plugin!

* [jQuery UI](https://jqueryui.com/)
* [The jQuery Plugin Registry](https://plugins.jquery.com/)
* [Flexslider](http://www.woothemes.com/flexslider/) (photo slider)
* [Flickity](http://flickity.metafizzy.co/) (another photo slider)
* [Fitvidsjs](http://fitvidsjs.com/) (fluid width video embeds, makes your youtube videos resize properly and create great video backgrounds)

<br>
~ end ~
