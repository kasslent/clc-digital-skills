---
layout: lessons
week: 6
lesson: 1
description: CMS & Intro to WordPress
permalink: week6-1.html
class: week6-1
---

##Blogs, Websites and CMS

How are blogs different from websites?

* the term blog is an abbreviation for weblog
* blogs often contain an ongoing collection of posts and articles presented in chronological order
* often (but not always) written in a diary-style of commentary
* a website can also contain a blog **and** standard informational pages

A **Content Management System (CMS)**, is an application used to edit content and manage a website using a graphical user interface instead of editing the code or database.

A CMS usually includes features such as:

* database management
* themes and templates for page layouts
* making content searchable and indexable
* and much more!

###What is WordPress?

* one of many types of blogging software and CMS
* an online, open source (a.k.a. free) website creation tool
* can edit, publish content and manage the website using a graphical user interface, without editing the code or database (though you can!)
* customizable core, can be extended and modified in anyway
* written primarily in PHP but also requires HTML, CSS, JavaScript
* uses PHP templates & a database to create and store content (with static HTML, you have to manually create a new document for every new page)

Depending on your needs and level of customization, you may not need to edit any of the code to get up and running.

There are two options for using WordPress, [WordPress.org](http://wordpress.org) and [WordPress.com](http://wordpress.com).


##WordPress.com vs WordPress.org

###WordPress.com

* hosted and all technical maintenance handled by WordPress
* your domain will be "yoursite.**wordpress.com**" (paid upgrade for a customized domain)
* don't need to write any PHP to get up and running
* no access to the code (without an upgrade)
* theme options are included but cannot upload your own themes or use plugins
* different plans ranging from free - $299 with added features
* no plugins

###WordPress.org

* you will need to register and pay for a domain
* need to buy web hosting - self hosted
* you are responsible for site maintenance
* requires web development knowledge (how much depends on level of customization desired)
* full control over themes files and code
* more theme options or customize it yourself
* 1000s of plugins for adding features & functionality or create your own


In a nutshell, both versions basically work the same but the `.com` version doesn't require any technical knowledge but is limited on the level of customization.  The `.org` version can be customized in any way but requires more technical knowledge.  How much depends on the level of complexity of the customizations required.

Customizations can range from how the site looks & page layouts to site functionality like custom post types and custom fields.

Let's compare the different WordPress admin options available between the .com (left image) and .org (right image) versions. Though the interface pretty much looks the same and works the same, notice how the .com version doesn't have an "Add New" option in the themes area and no "Plugin" option in the left menu (among some other menu options).

<div markdown="1" class="two-col">
![]({{site.img}}/week6/wp-admin-com.jpg)
![]({{site.img}}/week6/wp-admin-basic.jpg)
</div>


With the .org version you can also add your own options, further customizing the theme.

<div class="print-hide" markdown="1">
![]({{site.img}}/week6/wp-admin-custom.jpg)
</div>

##WordPress and PHP

What is PHP?

* PHP is a back-end programming language so it requires a server to run &mdash; you can't just simply open a PHP file in your browser to see the content
* has been around since the 90s
* originally stood for Personal Home Page but now stands for PHP: Hypertext Preprocessor (Yep, that first “P” stands for PHP.)
* can be written on its own or mixed with HTML
* used to make a website dynamic and generate HTML


##Web Hosting & Servers

###Local development vs live websites

Websites are built on computers. This is often referred to as developing locally since your site is only available on your computer. Also, all your website files are basically just a bunch of files (HTML pages, images, css files, etc) in a folder.

To put that website online and make it live, all you need to do is move your local folders to a server, or host.

A server is a like a computer, but they never turn off and are always connected to the internet. Hosts own many different servers and their job is to make sure the servers run properly, so that our websites are always available.

###Servers & Domains

A server is the computer that will "host" the folder with your files.

The domain is the internet address (e.g. www.mywebsite.com) used to access that folder on the server.

###Local WordPress Development & server

If you decided to use the WordPress.org version, you should also develop the site using a *local* server. It's better to develop your site & make changes locally rather than on your live web server, so you get a chance to test it before the world sees it.

Since WordPress runs on PHP, which is a server-side language, a server is needed to run the files before you can view the content in a web browser.

Next class we'll talk more about local WordPress development.

##WordPress and Hosting

Purchasing hosting is required to make any type of website live but some hosting companies provide hosting specifically for WordPress to handle WordPress specific things! (See resources for some articles comparing various hosts.)

WordPress specific hosting allows you to take advantage of the custom options not available on WordPress.com but manage some of the technical details like database management.

####Resources
* [WPBeginner: 
How to Choose the Best WordPress Hosting?](http://www.wpbeginner.com/wordpress-hosting/)
* [Performance of the Best WordPress Hosting Companies Compared](http://www.wpsitecare.com/performance-of-7-top-wordpress-hosting-companies-compared/)

>##Exercise: Set up a Demo Site
>Today we're going to look at a company called [Flywheel](https://getflywheel.com/) to try out some of the features included in a hosted WordPress site without setting up a local server. (14 day free trial)
>
>Visit [getflywheel.com](https://getflywheel.com/) to create an account.

##Creating a Project in Flywheel

To create a new project, login and select **new site** in the top navigation bar.

![]({{site.img}}/week6/1-flywheel.jpg)

Fill out the required information and then choose the "My client will pay later" option to activate the 14 day free trial for creating a demo account.

![]({{site.img}}/week6/2-flywheel.jpg)

To view your demo site, go to yoursite.flywheelsites.com and end the username and password provided in your account.

![]({{site.img}}/week6/3-flywheel.jpg)

To access the WordPress adming panel for your site, select the **WordPress Login** button.

![]({{site.img}}/week6/4-flywheel.jpg)

##Common WordPress Settings

When you log into the WordPress admin area, the first thing you'll see is the Dashboard. Here you can view your drafts, check out basic stats, respond to comments and get a general overview of your blog.

The other menus in the left sidebar allows access to additional settings such as:

* adding blog posts (Posts)
* adding pages (Pages)
* changing themes (Appearance)
* uploading media (Media)
* other general site settings

###Posts vs Pages
Posts

* used for date-based content
* posts are listed chronologically
* can also be assigned *categories* and *tags* (also referred to as *taxonomies*)
* permalink (URL) will include the date (can change this in the settings)<br>(e.g. http://your-project-name.dev/2015/09/28/my-catchy-title/)

Pages

* used for single pages of static content (e.g. about or contact page)
* cannot have *taxonomies*
* can have a hierarchical structure (e.g. Travel > Beach vacations)
* permalink (url) will not include the date<br>(e.g. http://your-project-name.dev/about/)


###Categories

Categories allow for a broad grouping of post topics. Blog posts should fit into a single category. For example, a food blog can have recipes in the following categories: Breakfast, Lunch or Dinner.

To add categories, go to **Posts > Categories** or within the post itself.
![]({{site.img}}/week6/dashboard-categories-post.png)

Sub-categories can also be created by selecting a Parent in the **Categories** menu.

![]({{site.img}}/week6/dashboard-categories.png)

###Tags
Tags are best used to create groups of content that can apply to multiple categories and be more specific. This gives people the ability to navigate your site quickly and find exactly what they want. For example, a frittata recipe can have the following category and tags:

    Category: Breakfast
    Tags: eggs, kid friendly, under 30mins

Just like categories, tags can be added from the menu or when editing a post. But unlike categories, tags cannot have a hierarchy.


Media

* add new media (images, pdf, word docs, etc)
* can also add media from within your pages and posts as well
* this menu also shows a library of all uploaded media, added here or within the posts and pages

##WordPress Themes

A theme provides all of the graphical styles for your site. You can use existing themes from the WordPress theme directory, form theme developers or create your own.

Most themes include:

* overall page layouts & colour scheme
* styles for blog posts and blog archives
* typography styles
* different types of widgets and where they are located on the page

###Free & Paid Themes

Why would you code your own theme or pay for a theme if there are so many free, functional templates to choose from? Well, that all depends on how unique and customized you need your site to be.

Pre-built themes are a great way to get up and running and to try it out, and can help determine what you need before investing in development or paid themes.

If you're not ready to code yourself just yet but want more options, paid themes often offer premium plugins, more customization options and customer support.

There are literally 1000s of free WordPress themes available for download in the WordPress directory found under **Appearance > Themes**, **Add New**. Click on the thumbnail to see a preview, get info or install a new theme.

##Exercise: Getting to know WordPress
>Let's spend the remainder of the class trying out different themes, adding content and getting used to and exploring the WordPress framework.

####Resources

* <https://getflywheel.com/design-and-wordpress-resources/>
* <https://en.support.wordpress.com/video-quick-start/#find-a-theme>
