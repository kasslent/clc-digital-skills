---
layout: lessons
module: 3
lesson: 2
title: CSS Fundamentals
description: Review and in-class exercise with an intro to flexbox.
permalink: module3-2.html
---

## HTML & CSS Review

Let's review the concepts and techniques covered in all of the previous lessons by creating a basic one page site, similar to this [example](exercises/module3/susans-site/index-final.html), from scratch.  


>## CODE-ALONG: Putting it all together!
>
>1. Class Exercise: Let's get set up!
	* Open up the "root" project folder where you keep your projects/sites.
	* Within the root folder, create a new folder and name it **susans-site**.
	* The projects we've been working on so far may look different from one another - so let's download and use [these example files](exercises/module3/susans-site.zip) to build off of today, just so everything is consistent.
	* Add the example files to your new folder and open it in Atom.
1. Solo Exercise: Personalize the HTML (5 mins)
	* Update the `<title>` tag, headings, email and any other content.
	* Replace the profile picture. Make sure your images are added to the **img** folder.
1. Solo Exercise: Update General Styles (15 mins)
	* Add a background colour to the following elements on the page:
		* nav
		* header
		* aside
		* social section
		* footer
	* Remove default padding & margin from the body element.
	* Update the font typeface for the page using either Google fonts or web safe fonts.
	* Choose and add a different font typeface for the headings.
	* Increase the font-size for all h1's.
	* Change the colour and increase the font-size for the h1 in the header.
	* Center align the text in the header, footer and social media section.
	* Change the colour and increase the font-size for the links in the social media section.
	* Add padding around links in the social media section.
	* On mouse hover, change the color of the social media links.
	* Decrease the font-size and italicize of the fine-print in the footer.  
1. Class Exercise: Add a wrapper, intro to **Flexbox**
	* In HTML, create a “content wrapper” around the content inside the:
		* `<header>`
		* `<main>`
		* `<section class="social">`
		* `<footer>`
	* Use CSS `margin` to auto center align the wrapper to ensure that the background colour still spans the entire width of the page.
	* Use CSS to give the `<aside>` a width of 30% and `<section id="about">` a width of 60%
	* Use CSS to give the `<div class="wrapper">` inside of `<main>` a display value of "flex".
	* On the wrapper inside of main, use flexbox reverse the direction - put the sidebar on the right.
	* On the wrapper inside of main, use flexbox to justify the content so there is space in-between the about section and the aside.
1. Class Exercise: Adjust the Spacing
	* Adjust the padding so the content/text doesn’t go right to the edge of it’s container. Try to make it look like the [example](exercises/module3/susans-site/index-final.html). Where do you think the space between the sections are coming from? Try inspecting the element!
	* In the sidebar, center the profile image using margin, to and make it circular using border-radius.
	* In the sidebar, give the paragraph justified text alignment.
	* In the about section, ensure the image is always the full-width of the container.
1. Exercise: Style the Nav
	* Right align the text in the nav.
	* Remove the underline & change the colour of the nav links.
	* On mouse hover, change the colour of the nav links.
	* Add some space around the links so the text is not too close to each other. Remember… links are ‘inline’ elements by default.


> What else can we add? Any requests?
