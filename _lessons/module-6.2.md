---
layout: lessons
module: 6
lesson: 2
title: jQuery & Plugins
description: Exploring jQuery and extending the library with Plugins.
permalink: module6-2.html
---

## jQuery Click Events

Let's do a review of the jQuery click events from the last lesson.

#### Syntax
 
    $( "selector" ).click(function() {
      // code to be executed on click
    });

[CodePen example](http://codepen.io/learningcode/pen/WQYpxG).

**Resource**: <http://api.jquery.com/click/>


## Click Event & Mobile Navigation (a.k.a. Hamburger Menu)

A few classes ago we learned how to use Media Queries to make our website responsive. One really helpful thing we can use JS click events for is a fancy mobile navigation. Today we will be creating a simple one you can then use for your own website. 

Let's take a look at the example below:
<p data-height="265" data-theme-id="dark" data-slug-hash="oBrYMV" data-default-tab="js,result" data-user="jessynd" data-embed-version="2" data-pen-title="oBrYMV" class="codepen">See the Pen <a href="http://codepen.io/jessynd/pen/oBrYMV/">oBrYMV</a> by jessica duarte (<a href="http://codepen.io/jessynd">@jessynd</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
Let's figure out what we need to do in English (tip: be sure to try resizing the codepen example to see what happens in bigger and smaller browser widths): 

1. When the browser resizes to less than 650px, the menu items must disappear, and a tri-bar or hamburger (&#8801;), will appear instead. 
2. When we click on the hamburger, the menu items will appear again, and instead of a hamburger, we will see an "X" symbol to close the navigation in the upper right hand corner.

>## Class Code-Along: Creating a mobile navigation with jQuery click events.
>
For this code-along, you can use the original project demo files if you would like, [here](exercises/module5/project-one-final.zip). Otherwise, use your own project files if you prefer. 
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
> 1. In order to create our fancy mobile navigation we first need to add a few things to our plain nav above. 
> * We need a hamburger to open the mobile nav, and we need an &times; to close the navigation.
> * We need to give a class to our ul so that we can target it with JS. 
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

>#### Quick tip : The symbols we used above are called HTML entities. Check out some of the available ones [here](http://character-code.com/)
>
> 1. Next, in our CSS files, we are going to create a media query for all widths 650px and lower. We are going to hide the hamburger and 'close' links unless we are inside the media query. We are also going to use a font-family that makes our symbols look better.
>
        @media(max-width: 650px){
        	.hamburger, .close{
			    display: block;
			    font-size: 24px;
			    font-family: "Lucida Sans Unicode", "Arial Unicode MS";
        	}
        }
>
> 1. Outside of our media query we want to hide `.hamburger` and `.close`.
>
        	.hamburger, .close{
			    display: none;
        	}
>
> 1. Now we need to hide ul.main-nav when the browser is smaller than 650px because we just want the hamburger to show up in its place. We could use `display-none` to hide our ul but that would not be accessible for screen readers. Add the following inside our mobile media query. We will make our `ul` position fixed because we will make it take up the whole screen and want it to be fixed overlayed on top of the website. We will also position it off-sight above the top edge of the viewport.
> 
        .main-nav {
        	position: fixed;
        	top: -100vh;
        }
> 
> 1. Next we'll create a new class for our main-nav that we will trigger to display the menu items again once we click on the hamburger. We will call the class `open-nav`.
>
        .main-nav.open-nav {
        	top: 0;
        }
>
>Let's try adding both classes to our ul.main-nav to see what it would look like once it's open. Be sure to have your viewport at 650px or less. 
> As you can see, it doesn't look amazing right now. It looks too narrow, and boring. So let's add some more styles to our .open-nav class inside of the media-query.
>
    .main-nav.open-nav {
    	top: 0;
    	right: 20px;
    	padding: 2% 10%;
    	z-index: 2;
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


## More Plugins!

Why don't you go ahead and try another plugin!

* [jQuery UI](https://jqueryui.com/)
* [The jQuery Plugin Registry](https://plugins.jquery.com/)
* [Flexslider](http://www.woothemes.com/flexslider/) (photo slider)
* [Flickity](http://flickity.metafizzy.co/) (another photo slider)
* [Fitvidsjs](http://fitvidsjs.com/) (fluid width video embeds, makes your youtube videos resize properly and create great video backgrounds)

<br>
~ end ~
