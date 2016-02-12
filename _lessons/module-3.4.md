---
layout: lessons
module: 3
lesson: 4
title: CSS Fundamentals
description: Intro to fluid and responsive web design.
permalink: module3-4.html
---


Even before adding responsive web techniques, it’s important to create fluid layouts and maintainable code beforehand to make the transitions and changes easier to handle. Let’s review some best practices and tips.

##Fluid images and components

Use percentages to create flexible images.

    img {
      /* image stretches full width of its container */
      width: 100%;

      /* image will stretch full width of its container until it
      reaches 100% width of the image file itself */
      max-width: 100%;
    }

[See example here](exercises/module3/sample/fluid-images.html).

<br>

This can also apply to page components.

    .wrapper {
      max-width: 800px;
      width: 80%;
      margin: 0 auto;
    }

##Background images

So far we've used `background` for colours but it can also be used for setting background *images*.

    /* longhand */
    background-image: url(folder/file.jpg); 

    /* shorthand */
    background: url(folder/file.jpg); 


###Files Paths & Folder Directories

    project-folder
      |---css (folder)
           |---styles.css
      |---images (folder) 
           |---picture.jpg
      |---index.html    

To find the correct file path to add a background image using CSS, the starting point is **styles.css**.  If your folder directory looks like the above example, the steps to follow are:

1. navigate up and out of the css folder (`../`)
1. go into the images folder (`../images/`)
1. image file name (`../images/picture.jpg`)

---
    background-image: url(../images/picture.jpg); 

To navigate *up and out* of a folder, the syntax is always `../`  to represent moving up the directory by *one* folder, regardless of the folder name.

###`background-repeat`

If the image file is *smaller* than the element with the background image applied to it, the image will automatically repeat to fill up the space. 

![]({{ site.img }}/module3/background-repeat.jpg)

To keep the image from repeating, use the `background-repeat` property **or** add it to the shorthand `background` property.

    /* shorthand */
    background: url(../images/picture.jpg) no-repeat; 

    /* longhand */
    background-image: url(../images/picture.jpg); 
    background-repeat: no-repeat;

###`background-attachment`

When the page scrolls, all the content scrolls with it including the background image.  Adding `background-attachment: fixed;` will change that. 

    /* shorthand */
    background: url(../images/picture.jpg) no-repeat fixed; 

    /* longhand */
    background-image: url(../images/picture.jpg); 
    background-repeat: no-repeat;
    background-attachment: fixed;

###Background-size

CSS3 introduced the `background-size` property which can be used to change the size. The syntax is:

    background-size: width height;

The default values for width and height are `auto` and retains the original image dimensions. If only one value is defined, it is assumed to be the `width`. 

There are several sizing dimensions: pixels, percentages and keywords.

`background-size` is the longhand property.

    /* longhand */
    background-image: url(../images/background-1.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50%;
    background-size: 100%;

To include it in the shorthand `background` property, it **must** be included after `background-position`, separated with the `/` character.  

    /* shorthand */
    background: url(../images/background-1.jpg) no-repeat fixed 50% / 100%;

**Important**: If no `background-position` value is being used, `background-size` will not work using the shorthand syntax. In this case, it may be less error prone to add it using the longhand syntax.

    background: url(../images/background-1.jpg) no-repeat fixed 50%;
    background-size: 100%;


`background-size` also accepts keyword values, `contain` and `cover`.

* `contain` scales the image to fit its container. The image will grow or shrink proportionally, but the width and height will not exceed the container’s dimensions
* `cover` scales the image to fit the entire container but if the container has a different aspect ratio, the image will be cropped

>##EXERCISE: images & background images
>
>Download the exercise files <a href="exercises/module3/fluid-images.html" download>fluid-images.html</a> and in the text editor.
>Uncomment each property, change some values and see what happens!

####Extra Resources
* [Mozilla Developer Network - background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
* [CSS Background Shorthand Property](http://sixrevisions.com/css/background-css-shorthand/)



##Intro to Responsive Web Design

When Ethan Marcotte introduced the [responsive web design](http://alistapart.com/article/responsive-web-design) approach in 2010, the idea that one website could target multiple screens got the dev community really excited. 

Fluid websites are not new. Using percentage based widths in the base CSS will make the page fluid as the page is resized. Responsive techniques take it a step further and is used to rearrange and restyle elements based on the device’s screen size using **media queries**.

[mediaqueri.es](http://mediaqueri.es) houses a collection of responsive websites. Take a look at a few sites and see how the layouts change when the browser window size changes.

![]({{ site.img }}/module3/rwd-example.png)
Prior to responsive and mobile web designs, the rule of thumb was to optimize for the most common resolution (`1024px x 768px` or `1280px x 1024px`). 

If a mobile version was required, a separate website was created, often under a sub-domain (ex. m.mysite.com). It would have its own design and code base separate from the desktop version. 

While responsive web design has become a popular standard, a separate mobile site may still be the best option for content heavy sites that require more simplicity for mobile or a layout for mobile users that goes beyond shifting and scaling content.


###Different types of web design

In order to understand responsive web design and web development better, we have to understand what the options are:

* Fixed/Static
* Fluid/Liquid
* Adaptive 
* Responsive

> Let's take a look at and discuss this example: <http://www.liquidapsive.com/>
>
> Make your browser window bigger and smaller. How do the different designs styles change?

###Mobile-first design

When responsive design was introduced, it was common to start with a desktop design, then make the design responsive for smaller screens.

This has changed with smartphones and tablets, giving rise to another approach, mobile first design:

* design an experience for mobile devices first, then desktop
* make mobile integral, not an afterthought
* graceful degradation and progressive enhancement

###Resources

* The [article](http://alistapart.com/article/responsive-web-design) that started the Responsive Design movement.
* [Mobile First Design: Why It’s Great and Why It Sucks](https://codemyviews.com/blog/mobilefirst)


##Viewport Meta Tag

The viewport meta tag is **required** in the `<head>` of the HTML document to ensure that the page responds on mobile devices. 

If you forget to include this tag, it will **not** render properly on a mobile device.

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

* `name=”viewport”` differentiates it from other meta tags
* `viewport` gives the browser information about the sizing abilities of the site
* `content` provides info about the viewport, separate key value pairs with a comma
* `width=value` sets the width of the web page
* `initial-scale` is the zoom value at which the site is zoomed in/out by default
* `user-scalable=no` (not shown in example tag above) will limit users from being able to zoom in
* `minimum-scale, maximum-scale` will limit how far in or out a user is allowed to scale/zoom

##Media queries

Media queries allows you to apply CSS to your document only when the screen has reach a certain size (also referred to as a breakpoint).

Basic media query:

    @media (max-width: 940px) {
      /* CSS for that screen size goes here */
    }

The above example targets a browser with the maximum width of 940px (anything equal or less than 940px).

All rules for a specific screen size is required to be nested *within* the media query.

    @media (max-width: 940px) {
      body {
        background: red;
      }
      h2 {
        font-size: 20px;
      }
    }

You can also use `min-width` in media queries.

    @media (max-width: 940px) {
      /* any screen 940px and below */
    }
    @media (min-width: 941px) {
      /* any screen 941px and above */
    }

> Why do you think 941px was used for min-width instead of 940px?


To limit the CSS to a range of pixel values, use a combination of `min-width` and `max-width`. This can be helpful when targeting a specific screen size and is best used to contain a particular style just within range.

    @media (min-width: 768px) and (max-width: 940px) {

    }

The above media query will only be applied when the width of the browser is greater or equal to 768px **and** less or equal to 940px.


###Height

Most responsive techniques target width but it is possible to target device heights.

    @media (min-height: 568px) {
      /* anything as high or higher than the iPhone 5 */
    }

Height and width can also be used together in the media query:

    @media (min-height: 568px) and (min-width:320px) {
      /* anything as high or higher than the iPhone 5 */
    }

**Note:** Relying on height-based media queries can be inconsistent and most of the time, it's better to let the content flow downward as the width of the device gets smaller. 

###Common breakpoints

    320px — Mobile portrait
    480px — Mobile landscape
    600px — Small tablet
    768px — Tablet portrait
    940px - 1024px — Tablet landscape, netbook, small desktop
    1280px & greater — Desktop

These are just general guidelines. There are no hard and fast rules. Depending on the design and the scope of the project, you may need to target different resolutions and add media queries at different breakpoints. A responsive design should however, have at least 2-3 breakpoints to optimize for mobile phones, tablets and desktops/laptops.

>##EXERCISE: Basic Media queries
>
> Download <a href="exercises/module3/media-queries.html" download>media-queries.html</a> and open it in your editor.  
>
> In the `<head>` section, a media query has already been included. Add 2 more media queries to target mobile and tablet.
> Change the background color and test it to make sure it works!
>
>**Bonus:** Try using `min-width` or a combination of `min-` and `max-width` to create a range.

##RWD Best Practices

It’s best practice not to use too many breakpoints. Two to four should be fine. Up to six as an absolute max but if you find that you have two media queries that are close, see if you can move the styles to one or the other instead of creating another breakpoint.

When writing media queries and adding responsive changes, only add the specific CSS property that needs to be changed. Do not repeat styles.

    .wrapper {
      max-width: 1140px;
      font-family: helvetica, arial, sans-serif;
      background: white;
      padding: 20px;
    }

    @media (max-width: 940px) {
      .wrapper {
        max-width: 900px;
        padding-top: 10px;
      }
    }

###Testing Mobile in the Browser

When creating mobile friendly sites, it’s always best to test on an actual device. However, there are a lot of interesting tools available to allow us to test in the browser. 

Chrome has an emulator built right into the dev tools!

![]({{ site.img }}/module3/chrome-emulator.png)

There are also many many other tools, [free](http://lab.maltewassermann.com/viewport-resizer/) and [paid](https://www.browserstack.com/responsive), available for testing and emulating multiple devices and device sizes.


>##EXERCISE: Responsive Web page
> Download the responsive exercise [here](exercises/module3/responsive.zip) (zip file). This also includes the solutions file. 
> 
> Follow the instructions in the comments in the `<head>` of **responsive.html** to make the 3 columns fluid and responsive.


~ End ~