---
layout: lessons
module: 7
lesson: 1
title: Intro to CMS & WordPress
description: Intro to content management systems and WordPress.
permalink: module7-1.html
---

## Blogs, Websites and CMS

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

## What is WordPress?

* one of many types of blogging software and CMS
* an online, open source (a.k.a. free) website creation tool
* can edit, publish content and manage the website using a graphical user interface, without editing the code or database (though you can!)
* customizable core, can be extended and modified in anyway
* written primarily in PHP but also requires HTML, CSS, JavaScript
* uses PHP templates & a database to create and store content (with static HTML, you have to manually create a new document for every new page)

Depending on your needs and level of customization, you may not need to edit any of the code to get up and running.

There are two options for using WordPress, [WordPress.org](http://wordpress.org) and [WordPress.com](http://wordpress.com).


## WordPress.com vs WordPress.org

### WordPress.com

* hosted and all technical maintenance handled by WordPress
* your domain will be "yoursite.**wordpress.com**" (paid upgrade for a customized domain)
* don't need to write any PHP to get up and running
* no access to the code (without an upgrade)
* theme options are included but cannot upload your own themes
* different plans ranging from free - $299 with added features
* no plugins

### WordPress.org

* must register and pay for a domain & web hosting
* you are responsible for technical maintenance
* requires web development knowledge (how much depends on level of customization desired)
* written on PHP (back-end programming language)
* also requires HTML & CSS and usually JavaScript
* full control over themes files and code
* more theme options or customize it yourself
* 1000s of plugins for adding features & functionality or create your own

Both versions basically work the same but the `.com` version doesn't require any technical knowledge and is limited on the level of customization.  

The `.org` version can be customized in any way but requires more technical knowledge.  How much depends on the level of complexity of the customizations required.


## Communicating with WordPress: Servers and Files
![]({{site.img}}/module6/wpservers-01.svg)

A <strong>server</strong> is a computer/computer program that provides us with the service of holding our data and showing it to us when we ask for it. In other words, imagine a computer in a room somewhere in the world that holds all your files and information, and lets you access it through the internet whenever you want. Today our server is Code Anywhere.

How does WP work with a server?

<p style="text-align: left;">1. We place an empty database (MySQL database) on the server, and all of the files we downloaded from wP (including our theme.)</p>

<p style="text-align: left;">2. We visit the WP dashboard to add content to the database on the server. </p>

<p style="text-align: left;">3. We make our WP files request the content we want from the database and display it in our HTML pages. (the website)</p>

<p style="text-align: left;">4. We visit the website and our server shows us the website according to what our theme files have requested it show us.</p>
#### Resources
* [WPBeginner:
How to Choose the Best WordPress Hosting?](http://www.wpbeginner.com/wordpress-hosting/)
* [Performance of the Best WordPress Hosting Companies Compared](http://www.wpsitecare.com/performance-of-7-top-wordpress-hosting-companies-compared/)
*Check [this link](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP) for instructions on how to set up a WordPress website locally on your computer. (A fun activity to do at home on a rainy day!).*


### Setting up our WordPress coding environment
WordPress is a collection of files, just like our project files. The only difference is that WordPress files are written in a language called PHP and they talk to a MySQL database that has the content the website will display on each page. (See diagram above)
These are the steps we normally take to set up a WordPress website:

1. We download the WordPress files from wordpress.org
1. We set up a database on a server (this could be a local server on your computer that you can set up with a program like MAMP or it could be a server on the web).
1. We connect the WP files to the database so they can communicate with each other. This is done in the wp-config.php file that you download from wordpress.org in step 1.

That's it! Only 3 steps but they can be a little tricky. So instead of running a local server today, we're going to use Code Anywhere. This will set up the server, the database and the files we need all in one fell swoop, and it will do it all from the browser!

## WordPress and Code Anywhere

Code Anywhere is a free service that allows you to develop any type of website or application in the browser. It's a great tool for collaborating with others, and for learning.

Code Anywhere is referred to as an Integrated Development Environment(IDE). The reason is that it integrates an editor, a browser and a console, all in one.

### Let's set it up!

1. Go to [https://codeanywhere.com/pricing](https://codeanywhere.com/pricing) and sign up for a free account
![]({{site.img}}/module6/codeanywhere-1.png)
1. Set your username and password
1. Log into your email to verify the account
![]({{site.img}}/module6/codeanywhere-2.png)
1. Go back to Code Anywhere and set up your site: Choose the name, Select Wordpress (either CentOS or Ubuntu work)
![]({{site.img}}/module6/codeanywhere-3.png)
1. What opens up is your IDE. Much like our code editor, on the left hand side we can see a long list of folders and files. These are the files that make up WP. We will come back to these later. First, let's run our WP website to explore the dashboard.
1. Scroll down to find your website URL. Looks like: http(s)://name-of-site-yourname804076.codeanyapp.com
![]({{site.img}}/module6/codeanywhere-4.png)
1. Go to this URL and follow the steps to set up your Wordpress account
1. This will open a page to allow you to set up the installation of WP. Make sure to keep your username and password safe as you'll have to log in immediately after.
1. Log into your dashboard.

> ### Accessing Your Site
> To access the back end of your site at any time, add **/wp-login.php** behind your url. Looks like: http(s)://name-of-site-yourname804076.codeanyapp.com/wp-login.php
>
> There are some limitations on our free Code Anywhere accounts, regarding the amount of hours our container can be powered on per day. If you have trouble viewing your site, you may need to restart the container. To do so, right-click on the container > select **Restart**. Once it has finished restarting, select the play icon to run your site.
>
> ![]({{site.img}}/module6/codeanywhere-restart.png)
>
> To access unlimited daily container usage, you can always upgrade your account [here](https://codeanywhere.com/pricing).


### WordPress Settings

When you log into the WordPress admin area, the first thing you'll see is the Dashboard. Here you can view your drafts, check out basic stats, respond to comments and get a general overview of your blog.

The other menus in the left sidebar allows access to additional settings such as:

* adding blog posts (Posts)
* adding pages (Pages)
* changing themes (Appearance)
* uploading media (Media)
* other general site settings


## Configure basic site settings

In the admin panel, go to **Settings > General**.

Here, you can change/update your site title and tagline. You can also set your timezone, date/time format and language options here as well. Make sure to select **Save Changes**!

> Go to **Settings > General** and update your Site Title and Tagline and another general setting if you'd like.


## Posts vs Pages
Posts

* used for date-based content
* posts are listed chronologically
* can also be assigned *categories* and *tags* (also referred to as *taxonomies*)
* permalink (URL) will include the date (can change this in the settings>reading)<br>(e.g. http://your-project-name.dev/2017/09/28/my-catchy-title/)

Pages

* used for single pages of static content (e.g. about or contact page)
* cannot have *taxonomies*
* can have a hierarchical structure (e.g. Travel > Beach vacations)
* permalink (url) will not include the date<br>(e.g. http://your-project-name.dev/about/)


## Content Options and Settings

When adding content into your **Post** or **Page**, the default visual editor uses a WYSIWYG editor (what you see is what you get) to format the content. Click on the **Toolbar Toggle** to show all of the editing options. Hover over any icon to see a short description of what each tool is used for.

When using the **Visual** editor, the content entered automatically gets converted into HTML.

![]({{site.img}}/module6/adding-content-wysiwyg.png)

### WordPress and HTML

You can also edit or add your own HTML by selecting the **Text** editor tab.

In WordPress, you don't need to add the `<p>` tags in either the visual or text editor. In the **Visual** editor, select the paragraph option from the dropdown.

![]({{site.img}}/module6/editor-visual-p.png)

In the **Text** editor, just ensure you return/enter twice to add a space between the paragraphs. They will automatically be converted into `<p>` tags via Wordpress magic!

![]({{site.img}}/module6/editor-text-p.png)

Also, break tags `<br>` are not needed. Just use the enter/return key *once* for a line break in either the Visual or Text WordPress editor.

![]({{site.img}}/module6/editor-line-break.png)


### Categories

Categories allow for a broad grouping of post topics. Blog posts should fit into a single category. For example, a food blog can have recipes in the following categories: Breakfast, Lunch or Dinner.

To add categories, go to **Posts > Categories** or within the post itself.
![]({{site.img}}/module6/dashboard-categories-post.png)

Sub-categories can also be created by selecting a Parent in the **Categories** menu.

![]({{site.img}}/module6/dashboard-categories.png)


### Tags

Tags are best used to create groups of content that can apply to multiple categories and be more specific. This gives people the ability to navigate your site quickly and find exactly what they want. For example, a frittata recipe can have the following category and tags:

    Category: Breakfast
    Tags: eggs, kid friendly, under 30mins

Just like categories, tags can be added from the menu or when editing a post. But unlike categories, tags cannot have a hierarchy.


> ## Exercise: Add Content
> 1. Create a couple of random blog posts in the Posts section. Don't dwell too much on the content. [Dummy text](http://meettheipsums.com) is fine for now.
> 1. Add some categories and tags to your posts.  
> 1. Create a page for each of your project's pages. In the example project that would be three pages: Home, About, Blog and Contact. Grab any content you have in your pages (except for the sidebar if you've added one like the sample project), and put it in the content editor after the title of each page. Remember you can enter straight HTML in the content editor by using the Text tab.
> 1. Go to Settings>Reading and set the Home page as your home page and the Blog page as your blog page.
> Having content to work with will make it easier to work with our theme files.


## The Guts of WordPress

Now that we've poked around a bit in the dashboard, let's go deeper and take a look at the files back in Code Anywhere.

At first glance, it's overwhelming to see how many folders and files WP needs to run. But on closer look, we'll be ignoring the majority of the files which just make up the core of WP. The files we'll use are in the wp-content folder.

Inside of wp-content there is a folder named themes. That'll be our most used folder.

Outside of wp-content we normally also need to look at wp-config.php to write in database credentials. Today, Code Anywhere is doing all that database work for us.

### What is a theme?

A WordPress Theme is a group of files that determine the way the WordPress looks, and what content is displayed on each page. In other words, this is just a fancy way of saying that a theme is basically the collection of files that make up the HTML and CSS for our site.

Since we already know HTML and CSS, creating a theme will be a natural progression of our knowledge.

### What's in a theme?

The most basic WP theme consists of no more and no less than an index file and a css file. The project files we already worked on are a great start to our own WP basic theme.

### Uploading our Theme to WP

Currently there are three default themes inside the themes folder. These always come with WordPress.
Under Appearance>Themes we can see how these default themes look and even test them out on our website.
But today we're not interested in a default theme. We want to build our very own.

1. Let's begin by uploading the our project folder, into our themes folder. If you want to start from scratch, you may just use the [sample starter project folder.](exercises/module5/project-one-sample-w-js.zip).
1. To upload your project folder, click on the `themes` folder inside `wp-content` so that it's highlighted. Then right-click > `upload` and drag your folder over.
![]({{site.img}}/module6/codeanywhere-upload.gif)
1. Next, we need to make WordPress recognize this folder as a WordPress theme. To do this we need to copy and paste the snippet below, and edit the example in your own project's css file:

        /*
        Theme Name: Twenty
        Theme URI: http://wordpress.org/themes/twentythirteen
        Author: the WordPress team
        Author URI: http://wordpress.org/
        Description: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, edisplayed              beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matchheader images,              beautiful typography and icons, and a flexible layout that looks great on any device, big or small.
        Version: 1.0
        License: GNU General Public License v2 or later
        License URI: http://www.gnu.org/licenses/gpl-2.0.html
        Tags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-widcustom-header,              custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-potranslation-ready
        Text Domain: twentythirteen
        This theme, like WordPress, is licensed under the GPL.
        Use it to make something cool, have fun, and share what you've learned with others.
        */

1. The next thing we must do is rename index.html to index.php (right click on file to rename in Code Anywhere)
1. Make sure to check under Appearance>Themes whether your own theme shows up! If it does, go ahead and activate it.
How does it look?


### Why isn't any of our CSS showing up?

This is because our stylesheet link is no longer working. It's looking for our style file in the wrong place. This is because even though our files are in the same theme folder next to each other, they don't work the same way as our basic html project from this morning.

WordPress is loading the index.php file in the overall WordPress folder and pulling content from wp-content/themes. This means that when we create a path to the css, it needs to be relative to that index.php file and not the one inside our theme folder.
To fix this issue, we could write a really long path to the stylesheet. Let's try it.
Replace our href in the stylesheet link with :

    <link rel="stylesheet" href="wp-content/themes/your-theme-folder-name/style.css">

Does it work?

There is a better way to link to our CSS.

### Communicating with WordPress: PHP & Template Tags

Even though the super long url worked to link our , WP provides us with much easier ways to figure out paths and to print out important pieces of content on our page.

The way we communicate with WordPress is by using **Template Tags**.

Template Tags are bits of PHP that will communicate with the WordPress database and print out the things we want on the page.

#### Anatomy of a Template Tag

Template Tags are written in PHP

    <?php /*template tag goes here*/ ?>

Much like HTML and CSS, you must be syntactically exact when writing PHP. Or else the browser will yell at you.
The template tags we put in between these PHP brackets vary.
Template tags are easy for us to use but they represent more complex bits of PHP code found in the WP Core.

In other words, template tags are built-in functions that WordPress gives us to make it easier to for us to request bits of content from the backend. Remember `alert();` in JavaScript or ![]({{site.img}}/module5/scratch-builtin.png) in Scratch? WordPress Template Tags are exactly the same.

Template tags are always made up of a one or a couple of words joined by an underscore and followed at the end by round brackets. For example

    <?php bloginfo(); ?>

Inside of those brackets we can add arguments that WordPress recognizes to pull specific data from the database.

We use template tags anytime we want to ask WordPress for content of any kind that we have entered through the dashboard.
#### Resources
[WordPress Codex](https://codex.wordpress.org/Template_Tags)

>## Exercise: Header Template Tags
> Let's put some of these template tags in use to replace our static HTML content with data coming from WordPress.
>
>We will begin with the <head></head> of the HTML.
>
>Open up your index.php file in Code Anywhere. We'll be adding the following template tags to dynamically pull information from WP :
>
>Where should these go?
>
    1. <?php bloginfo( 'charset' ); ?>
>
    2. <?php bloginfo( 'name' ); ?>
>
    3. <?php language_attributes(); ?>
>
    4. <?php echo get_stylesheet_uri(); ?>
>
>
> In the end, our header should be looking like this:
>
    <html <?php language_attributes(); ?>>
    <head>
     <meta charset="<?php bloginfo( 'charset' );?>">
     <title><?php bloginfo( 'name' ); ?></title>
     <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Parisienne" rel="stylesheet">
     <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    </head>
>
> Notice how much cleaner it is to add the stylesheet using the `get_stylesheet_uri` template tag?

### Resources

[https://developer.wordpress.org/reference/functions/bloginfo/](https://developer.wordpress.org/reference/functions/bloginfo/)

## The Loop

Template Tags allow us to grab quite a bit of information from our database. However, the most important information we want to get is the content of the pages and blog posts. To get these we have to use something called "The Loop".

The Loop is a conditional statement in PHP that tells the database something along the lines of *"Hey, Database! If you've got any content over there for this page, or for this blog post, as long as you've got it, print it out for me right here, would ya? Thanks."*

In PHP it looks like this:

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    	<!-- content goes here -->
    <?php endwhile; else : ?>
		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
	<?php endif; ?>

You've seen a statement like this beforehand. Do you remember this guy?

![]({{site.img}}/module6/c9_scratch_conditional.png)

We need to add our loop to our index.php page
So where should the loop go in our page if we want it to ask for content? In other words, where is the content in our current html page?

We'll put it after the banner, and before the horizontal sidebar.


### The Content

So what goes inside the loop? Template tags!

Specifically, we'll be using the following template tags:

    <?php the_content(); ?>
    <?php the_title(); ?>

> ### Exercise: Add your template tags
>
> Go ahead and add the template tags to your own index.php file, inside the loop (right after the while). Do you see the content coming through?

Yay! We're communicating with WP now.

## Template Files

We've talked about template tags but in WordPress there are also Template Files. - It's possible that you will not want every single page on your website to be identical. In fact, in most websites, the home page and the blog page look a bit different, if they are separate. - Currently, all our pages are using the same template - index.php. However WordPress enables us to create custom pages easily so that we can modify different pages to our liking.

It also enables us to put code that we need more than once, in its own file so that we don't need to repeat it.

> Discussion: Looking at all your HTML documents from your projects, what are the common parts being reused in every page of your website?

> ### Class Exercise:
> 1. Create 4 new files in your theme folder:
	- header.php
	- footer.php
	- sidebar.php
	- page.php
> 1. Together we will now take each of the corresponding parts from index.php and paste them into one of these files. That means you will delete the header and navigation from index.php, you will delete the sidebar, and the footer and put each of these in their corresponding files. (header.php, sidebar.php and footer.php)
>
> #### index.php should now look like this:
>
>	    <main>
>	    	<section class="banner">
>	    		<div class="wrapper">
>	    			<h1>An island girl around towndd</h1>
>	    		</div>
>	    	</section>
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
>	    	<section class="about">
>	    		<div class="wrapper">
>	    			<?php the_content(); ?>
>	    		</div>
>	    	</section>
>	    	<?php endwhile; else : ?>
>	    		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
>	    	<?php endif; ?>
>	    </main>
>
>
> #### header.php should look like this:
>
>		    <!DOCTYPE html>
>		    <html <?php language_attributes(); ?>>
>		    <head>
>		     <meta charset="<?php bloginfo( 'charset' );?>">
>		     <title><?php bloginfo( 'name' ); ?></title>
>		     <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Parisienne" rel="stylesheet">
>		     <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
>		    </head>
>		    
>		    <body>
>		    	<header>
>		    		<div class="wrapper">
>		    			<div>
>		    
>		    			<h1>Anne Shirley's Musings</h1>
>		    			</div>
>		    			<nav>
>		    				<ul>
>		    					<li><a href="about.html">About</a></li>
>		    					<li><a href="index.html">Blog</a></li>
>		    					<li><a href="contact.html">Contact</a></li>
>		    				</ul>
>		    			</nav>
>		    		</div>
>		    	</header>
>
> ####  sidebar.php should look like this:
>
>		    <aside>
>		    	<div class="wrapper aside">
>		    		<div class="third">
>		    			<h2>From My Blog</h2>
    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis corporis asperiores totam non ipsa nesciunt,porro sit numquam perferendis dignissimos repellendus aliquam cupiditate odit, id maiores, deleniti hic at!</p>
>		    			<a href="#">Continue reading</a>
>		    		</div>
>		    
>		    		<div class="third">
>		    			<h2>Me on Social Media</h2>
>		    			<!-- Insert Twitter Feed -->
>		    			<a class="twitter-timeline" data-width="220" data-height="400" data-link-color="#981CEB" href="https://twitter.com/anneofgreengabl">Tweets by anneofgreengabl</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
>		    		</div>
>		    		<div class="third">
>		    			<h2>Subscribe to my Blog</h2>
>		    			<form action="">
>		    
>		    				<input type="text" placeholder="E-mail Address">
>		    				<input type="submit">
>		    			</form>
>		    		</div>
>		    	</div>
>		    </aside>
>
> #### footer.php should look like this:
>
>	    	<footer>
>	    		<div class="wrapper">
>	    			<p>&copy; Anne Shirley 2016</p>
>	    		</div>
>	    	</footer>
>	    </body>
>	    </html>
>
> 1. In page.php, copy everything from index.php and paste it there. This will be the default template for any page you add to your website, unless you specify otherwise with a custom template.
> 1. Then into index.php and page.php we'll bring in the footer, sidebar and header by using: get_header(); get_footer(); and get_sidebar();
>
> #### index.php should look like this.
>
>	       <?php get_header(); ?>
>	       <main>
>	    	    	
>	    	    	<section class="banner">
>	    	    		<div class="wr>apper">
>	    	    			<h1><?php the_title(); ?></h1>
>	    	    		</div>
>	    	    	</section>
> 	    		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
>	       	<section class="about">
>	       		<div class="wrapper">
>	    	    			<?php the_content(); ?>
>	    	    		</div>
>	    	    	</section>
>	    	    	<?php endwhile; else : ?>
>	        		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
>	    	    	<?php endif; ?>
>	    	    	<?php get_sidebar(); ?>
>	    	    </main>
<?php get_footer();?>
>
> 1. Now that you've split off your repeated code into tidy new files, let's also create a custom page template for our About page that will not have a banner. To create a different looking page, do the following:
>
>	1. Create a special template file for the About page. Call it **page-about.php**.
>	1. In page-about.php, write the following
>
		    <?php /* Template Name: About */ ?>
>
>
> 1. Below this, copy over everything from your index.php file there and delete what you don't want. For example, the banner.
> 1. In the dashboard go to Pages>About. Find the box on the right, below the update button, to change your template file from the default, to the special About template you just created.

> ## Bonus: Tweaking the blog
> You may have noticed that now that you have a page.php and an index.php, only the blog is using index.php while all the other pages except for about are using page.php.
> This means that you can reserve index.php for your blog (WP will always use this one for your blog), and add some additional handy template tags. Try out:
> 		    <?php the_permalink(); ?> This will enable you to link the title of each post to the full single view of it.
>		    <?php the_author(); ?> This one will print out the author of your posts.
>
>		    <?php the_category(); ?> This one will print out the categories for a blog post
>		    <?php the_tags(); ?> This one will print out the tags for a blog post.
>
>		    <?php the_date(); ?> This will print out the date published.
>
>		    <?php the_excerpt(); ?> This will print out a truncated part of the body of the blog post.
>
> Play around with these in index.php for better customization of your blog feed.
> Also, consider creating a **single.php** template to control the way your single view of each blog post looks like.


### Resources

- [On Temple Heirarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
- [On Template Tags](https://codex.wordpress.org/Template_Tags)
- [On single.php](https://codex.wordpress.org/Theme_Development#Single_Post_.28single.php.29)

So you could call it a day right now. There's your theme. Great job! You've built your own simple theme and it works. But let's go a little deeper and add even more functionality!

There is another very powerful file we can add to theme and it's called the Functions file. It's a file in which we can paste snippets of code that increase the functionality of WP. These are some expanded functionality we can get from a functions file: - Widgets - Navigations - Featured Images for posts and pages - and many many more...

> ### Class Exercise
>
> 1. In your own custom theme folder, create a  new file named `functions.php`.
> 1. Next, we will add the functionality for menus to our functions file. The following PHP function came straight from the Codex, and it will add the ability to add menus to your website from the dashboard.
>
>         <?php
>           function register_my_menus() {
>        register_nav_menus(
>        array(
>         'primary-menu' => __( 'Header Menu' ),
>         'extra-menu' => __( 'Extra Menu' )
>        )
>        );
>            }
>            add_action( 'init', 'register_my_menus' );
>         ?>
>
> 1. Go to the Dashboard and navigate to Appearance>Menus - now this is available! d
> 2. Create a Menu with the three links to the 3 pages, make sure to pick Header Menu as the location when you create the menu.
> 3. Replace the ul inside the nav with the following
>

    <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>

>
>Refresh your page and now you should have a perfectly working Navigation again.
>
>**Bonus:** WordPress gives menu items of the currently visited page, the class of *current_page_item*. You can style it differently.

### Resources

[Codex Navigations](https://codex.wordpress.org/Navigation_Menus)


## Bonus: Sidebars and Widgets

Sidebars enable you to add WP widgets (e.g. blog feeds, tag clouds, and even forms) to your website. We'll be converting our current sidebar into a dynamic WP sidebar.

> ### Class Exercise
> 1. First off, we must register our sidebar inside functions.php so that we can enable Widgets on the website.
> Enter this into your functions file :
>
>        function themename_widgets_init() {
>          register_sidebar( array(
>       'name'
>       => __( 'Primary Sidebar', 'mammaspizza' ),
>       'id'
>         => 'sidebar-1',
>       'before_widget' => '<div id="%1$s" class="third widget %2$s">',
>       'after_widget'  => '</div>',
>       'before_title'  => '<h2 class="widget-title">',
>       'after_title'   => '</h2>',
>          ) );
>      }
>      add_action( 'widgets_init', 'themename_widgets_init' );
>
> 2. Go to Appearance>Widgets and add 3 widgets to your sidebar. **Tip:** If you use the Text widget you can enter any HTML in the widget. Including script tags from a video embed, or twitter feed.
> 3. Delete all the elements with the class of `third` inside your aside element in page.php and replace them with:
>
>        <?php dynamic_sidebar(); ?>


## Bonus: Featured Images

We can add featured image functionality to our pages and posts by adding the following to our functions file:

    <?php add_theme_support( 'post-thumbnails' ); ?>

Once you've done that, go back into your home page and add a featured image. It will show up on the right hand side.

> ## Bonus Class Exercise: Adding a featured image to a page
>
> We can add featured images anywhere inside the loop in various default sizes:

    the_post_thumbnail(); // Without parameter ->; Thumbnail
    the_post_thumbnail( 'thumbnail' ); // Thumbnail (default 150px x 150px max)
    the_post_thumbnail( 'medium' ); // Medium resolution (default 300px x 300px max)
    the_post_thumbnail( 'large' ); // Large resolution (default 640px x 640px max)
    the_post_thumbnail( 'full' ); // Original image resolution (unmodified)

> Try adding it to one of your template files. for example your custom `page-about.php` file.

## Bonus Plugins


Plugins enable us to add incredible functionality to a website without having to do a lot of coding of our own. Plugins can be downloaded directly from the Plugins area of the dashboard. They will then live inside your Plugins folder inside of `wp-content`.

Popular plugins include:

- Jetpack
- Mailchimp
- Google Analytics

And there are many many more...
Today we are going to work with Jetpack.
> Exercise: Installing a plugin.
>1. Let's get over to Plugins in the Dashboard and find Jetpack to install.
>1. Click Add New inside of the Plugins area.
> 1. Jetpack should should up on the main page of the Add plugins page because it's one of the most popular plugins out there. You'll see this:
>
> ![]({{site.img}}/module6/wp-jetpack.png)
>
> Before you choose a plugin, you want to place close attention to the number of reviews and installations, when it was last updated and whether it's compatible with your version of WordPress (which should be the latest version). If you click on the More Details link, you'll be able to make a good assessment of that plugin. JetPack is safe because it has over one million installations and 4/5 stars. It's also regularly updated and the author is Automattic which is a very trusted plugin author (they created WordPress).
>
> **Rule of thumb:** Don't download plugins that have few reviews, and few installations. And definitely don't download plugins that are not compatible with the latest version of WordPress. An incompatible plugin could break your website.
> 1. Click the Install Now button to install Jetpack. When it has finished installing, click on Activate.
> 1. You'll be then taken to the plugins page where Jetpack will ask you to connect to jetpack.com using your WordPress account. Go ahead and connect, registering for a WP account if you don't have one yet. This will be the account you'll use universally on WordPress websites moving forward. It will also allow you to post questions on the WordPress support forums.
> 1. Once you have successfully connected, Jetpack will ask you to Activate Recommended Features. Go ahead and do that. It will give ou sharing options, contact forms and really cool carousels for your media in your pages and blog.
> 1. Now that you have installed Jetpack, head back to your widgets area to take a look at all the cool new widgets you can add to your sidebar! Try a couple of them out.

> ## Bonus Exercise: Swap out your form with a JetPack form.
> Remember that for our Contact page we hacked a google sheet? If you added your contact form to your Contact page in WordPress, this form would continue working and you don't need to make changes. However, JetPack will also provide you with easy to set up forms in your pages. From the Page editor, simply click on the "Add Contact Form" button and follow the instructions.

> ## Bonus Exercise: Add a carousel with Jetpack to your posts or pages
> Now that you've installed JetPack, you have some really cool new features in your Media Gallery. If you click on Add Media from the content editor of any of your pages or posts you can `Create Gallery` instead of just Insert Media. Test out some of the available Galleries available.

> ## Bonus Exercise: Enabling Social Media sharing for your posts
> JetPack makes it really easy for your visitors to share your posts on social media.
> 1. Head over to Jetpack>Settings from the side navigation in the Dashboard.
> 1. Click on Engagement.
> 1. Scroll down to Sharing and click on `Configure your Sharing Settings` after you expand it.
> 1. Set up your sharing buttons under the `Sharing Buttons` section.
> There are lots of plugins to set up sharing on WordPress but JetPack provides a very functional and easy to customize option. It's not uncommon for people to download JetPack and only use this feature of the plugin.

## More WordPress

We have built our very own custom WordPress theme. We did it this way to learn how WordPress really works from the inside out.

It's important to note that most developers will create their own starter theme and not always start entirely from scratch every time. Some also use other starter themes. [Underscores](http://underscoes.me) is a good one because it is developed by Automattic, the creators of WordPress (And Jetpack). Starter themes are great because they will often break up your theme using the correct Template File structure based on the WP Template Hierarchy. Download Underscores and explore it. The cool thing about it is that it gives you template files, but very little CSS. You get to customize the style of the website just like you did on you project throughout this class.

Other topics for later include:

### Advanced Subjects in WordPress to Look Forward To

1. Custom Post Types
1. Custom Fields
1. WordPress and JavaScript
1. WP-REST API
And more...
                                                                                                                                                                                                                                                                                  2
### WordPress Community

If you would like to contribute to the WordPress open source community or read many of their awesome resources, checkout:

[http://make.wordpress.org](http://make.wordpress.org)


~ end ~
