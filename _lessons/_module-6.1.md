---
layout: lessons
module: 6
lesson: 1
title: CMS & Intro to WordPress
permalink: module6-1.html
class: module6-1
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
![]({{site.img}}/module6/wp-admin-com.jpg)
![]({{site.img}}/module6/wp-admin-basic.jpg)
</div>


With the .org version you can also add your own options, further customizing the theme.

<div class="print-hide" markdown="1">
![]({{site.img}}/module6/wp-admin-custom.jpg)
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

>##EXERCISE: Set up a Demo Site
>Today we're going to look at a company called [Flywheel](https://getflywheel.com/) to try out some of the features included in a hosted WordPress site without setting up a local server. (14 day free trial)
>
>Visit [getflywheel.com](https://getflywheel.com/) to create an account.

##Creating a Project in Flywheel

To create a new project, login and select **new site** in the top navigation bar.

![]({{site.img}}/module6/1-flywheel.jpg)

Fill out the required information and then choose the "My client will pay later" option to activate the 14 day free trial for creating a demo account.

![]({{site.img}}/module6/2-flywheel.jpg)

To view your demo site, go to yoursite.flywheelsites.com and end the username and password provided in your account.

![]({{site.img}}/module6/3-flywheel.jpg)

To access the WordPress adming panel for your site, select the **WordPress Login** button.

![]({{site.img}}/module6/4-flywheel.jpg)

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
![]({{site.img}}/module6/dashboard-categories-post.png)

Sub-categories can also be created by selecting a Parent in the **Categories** menu.

![]({{site.img}}/module6/dashboard-categories.png)

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

##EXERCISE: Getting to know WordPress
>Let's spend the remainder of the class trying out different themes, adding content and getting used to and exploring the WordPress framework.

####Resources

* <https://getflywheel.com/design-and-wordpress-resources/>
* <https://en.support.wordpress.com/video-quick-start/#find-a-theme>

##Theme Development options

There are three options for adding themes to your WordPress site.

###Option 1: Free & Premium Themes

* only pay for domain, hosting & cost of theme (from free to ~ $300)
* does not require any coding (though you still have access to the codebase)
* includes some theme options that can be updated in the WordPress admin area

###Option 2: Child themes

* used to modify a theme without making any changes to the parent theme’s files
* inherits the features of its parent theme including updates
* will require some knowledge of HTML, CSS and PHP
* should develop locally using a local server

###Option 3: Custom themes

* built from scratch or from a starter template
* requires a deeper knowledge of HTML, CSS, PHP or get really good at following the [WordPress documentation](https://codex.wordpress.org/)!
* should develop locally using a local server
    
We'll be sticking to Option 1 for the remainder of this lesson but there are some extra [resources and information](#bonus-local-wordpress-theme-development) included at the end of this lesson for further exploration.


##Choosing a Theme

There a many different themes to choose from with different styles. Here are some features and options to look for when picking a theme:

###Responsive

Look for a responsive theme so the design can adapt to different screen sizes for various devices. A separate mobile site or mobile plugin will not be needed to resize or rearrange content for different sized screens.

###Columns

Columns are basic website design elements. They allow you to display your content in chunks that are visually appealing. For example, you can have a larger main content area and a sidebar or use a layout that look like magazines and newspapers with more equal column widths.

###Page Layouts

Layout determines the overall look and feel of your blog. Consider how (or if) certain content is displayed such as the site title, subheading, tags, categories, main menu, etc.

###Theme support

Some themes don't include support for certain types of content (e.g. the tagline in the previous example). When choosing a theme, you can view and test out different customization options

##Configure basic site settings

In the admin panel, go to **Settings > General**.

Here, you can change/update your site title and tagline. You can also set your timezone, date/time format and language options here as well. Make sure to select **Save Changes**!

##Adding content

>Open a post or page and try out some of the options listed below in the editor.


When adding content into your **Post** or **Page**, the default visual editor uses a WYSIWYG editor (what you see is what you get) to format the content. Click on the **Toolbar Toggle** to show all of the editing options. Hover over any icon to see a short description of what each tool is used for.

When using the **Visual** editor, the content entered automatically gets converted into HTML.

![]({{site.img}}/module6/adding-content-wysiwyg.png)

###WordPress and HTML

You can also edit or add your own HTML by selecting the **Text** editor tab. 

In WordPress, you don't need to add the `<p>` tags in either the visual or text editor. In the **Visual** editor, select the paragraph option from the dropdown. 

![]({{site.img}}/module6/editor-visual-p.png)

In the **Text** editor, just ensure you return/enter twice to add a space between the paragraphs. They will automatically be converted into `<p>` tags via Wordpress magic!

![]({{site.img}}/module6/editor-text-p.png)

Also, break tags `<br>` are also not needed. Just use the enter/return key *once* for a line break in either the Visual or Text WordPress editor.

![]({{site.img}}/module6/editor-line-break.png)


##Slug: Posts & Pages

A WordPress slug is a few words used to describe a post, page, category, or tag within WordPress.

In posts and pages, the slug appears in the URL and is generated automatically based on the title. It can be changed manually to something different from the title but it's best to keep them simple and relevant.

Select **Edit** to change it manually.

![]({{site.img}}/module6/dashboard-slug-automatic.png)

##Slug: Categories & Tags

Slugs can also be used in categories and tags and are also automatically generated.

Note that the **WordPress.com** version does not have an option to manually update the slug for categories and tags but the **WordPress.org** version does.

Slugs can be found under the **Post > Categories** and **Post > Tags** menu. 

Though your tag & category names can contain spaces and special characters, it will be converted to a dash for the slug to make it URL friendly.

![]({{site.img}}/module6/dashboard-slugs-tags-categories.png)

##Default Home page settings

WordPress includes many core files to make this framework run.  The theme related files include [php template files](https://codex.wordpress.org/Theme_Development#Template_Files_List) that are used to determine how and where to display certain types of content. These template files are also used to display just a specific *portion* of a page. 

![]({{site.img}}/module6/wp-theme-files.jpg)

<br>
Based on this template hierarchy, by default, a chronological listing of your blog posts will show as your home page.  To change that, you'll need to make sure you have a **Page** to set as your home page and another **Page** for your blog.

To update these settings, follow these steps: 

1. If you don't already have a page to use as your home page, create one
1. Create a *blank* blog page
    
    This page does not need any content because there is already a template file used to display the blog post listing.

    Creating this blog **Page** will create a url/permalink to point the blog page to similar to:  `http://yoursite.com/blog` or `http://yoursite.flywheelsites.com/blog/` if using the Flywheel demo site.
    
1. Change the settings

    Under **Settings > Reading**, select whichever page you want to show as the **Front page** (your homepage) and the blank page you created for the blog under **Posts page**. 

    ![]({{site.img}}/module6/homepage-custom.jpg)


##Create a custom menu

Menus are a list of links, usually displayed as the navigation for your site. You can choose from Pages or Categories from within your WordPress site or a custom link (can link to an external site).

The menu location may vary depending on the theme. Some themes also offer additional menus such as social links menus.

![]({{site.img}}/module6/wp-menus.png)

You can also reorder the menus by dragging the menu options as well as make submenus by dragging it underneath another item.

![]({{site.img}}/module6/menu-additions.gif)

###Changing themes & menus:

If you change your theme, you may have to go back to your Appearance > Menus to add in the Menu Settings in again.

![]({{site.img}}/module6/change-theme-menu.png)

##Editor menu

The Editor menu (**Appearance > Editor**) allows access to the theme files where you can add edits to the template files.

**Be careful when editing these files.**

Normally, it would be best practice to edit these files *locally* so any changes made won't be "live" before it's ready but since the Flywheel demo site is password protected, the general public won't be able to view it.

**Pro tip!** Make a backup copy of the file before editing it in case you need to put it back!

![]({{site.img}}/module6/wp-editor-menu.png)

###Template tags

WordPress uses **template tags** to pull data from the database and output it onto the page.  It is often mixed in with HTML so the data can be outputted into semantic HTML page layouts.

Template tags are basically PHP functions (and look similar to JavaScript functions.) Note that WordPress (and most PHP developers) use the underscore naming convention and looks something like this:

    template_tag()
    
Here's a couple of common template tags:
    
`get_header()` - gets the header.php file and includes it in the current theme file  
`the_title()` - tells WordPress to get the title of the page or post from the database

<br>
How do the template tags work? This example below shows how the site tagline could be outputted on to the page, into ann `h2` heading. 

`bloginfo('description')` will get the Tagline value, from the database. The value is whatever you entered in your General Settings.

    <h2 class="site-tagline"><?php bloginfo( 'description' ); ?></h2>

![]({{site.img}}/module6/site-title-settings.jpg)

##Bonus: Local WordPress Theme Development

Developing a WordPress theme *locally* requires downloading the WordPress core files and setting up a local server.  

###WordPress Core Files

The core files can be downloaded here: <https://wordpress.org/download/>

Though you can access all of these files, there are some that should never be edited. The majority of your edits will be contained in the **wp-content** folder since those files are specific to the WordPress theme.

The one file outside of **wp-content** that you may need to edit is the **wp-config.php** file. It contains the website's base configuration details, such as database connection information.

![]({{site.img}}/module6/wp-core-files.jpg)

###Setting up your local server

There are many ways to set up a local server.  Here are the instructions for using the **DesktopServer App**:

1. Download the DesktopServer app here: <https://serverpress.com/get-desktopserver/> 
  * View the video for downloading and installing the DesktopServer app: <https://www.youtube.com/watch?v=d_MoCUKv3TI>
1. Open the DesktopServer app and follow the steps outlined in the getting started video (<https://www.youtube.com/embed/Po0MkaL8Fgc>) or using the written instructions [here](https://serverpress.com/getting-started-with-desktopserver/). 
1. Once you've created a local WordPress site, you can access it with the **Sites** button. 

Another popular option is the  [Mamp](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP) app.

**Important!** You will need to run a local server anytime you're developing WordPress locally.

####Resources

* [WordPress Codex](https://codex.wordpress.org/)
* [WordPress Theme Development Handbook](https://developer.wordpress.org/themes/getting-started/)
* [How to Edit Your WordPress Website (Without Hacking Core Files)](https://managewp.com/edit-wordpress-website)
* [Editing wp-config.php](https://codex.wordpress.org/Editing_wp-config.php)
