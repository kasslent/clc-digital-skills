# Ladies Learning Code Digital Skills Program

UPDATE December 2017

Module 1: 
1.1 Removed the large "first project" at the end of this class and incorporated the "Susan's site demo" from the onset of the workshop, broken up in smaller chunks to build together as a class as concepts are learned. Instead of having the code along weeks after everything has been learned and trying to remember. This is a code-along we do with the learners until they reach the Design Day and get to build their own project from scratch. 

As we introduce different parts of HTML we add content to the site. From the very beginning the learners will understand how all that they're learning comes together.
1.1 the starter project was restyled to match LLC program colours.
1.2 Added Typography CSS intro to Day 2. 
Throughout:
Remove repeated code reviews that were redundant throughout the workshop, in particular CSS Selectors. and Box Model.  
- Update Google Font Screenshots

2.1 and 2.2 - Box Model and Inline-Block, Icons, Image Cropping and Resizing and SVG
- Moved all these topics to 2.1 and 2.2 so that the learners can continue building out a decent basic version of their first website and only then go into designing their own brand, etc...

- 3.1, 3.2 - Design and Implementation

Created a whole class dedicated to creating a personal OR business brand. Pulled content from Pixlr Branding and Web Design with Photoshop workshops and adapted them to DS. learners will analyse their business needs, the feel and tone of their site, create a mood board, create a logo, create a pen and pencil sketch of the home page, and choose between designing in the browser or polishing a static mockup on Pixlr. 

- 3.2. Replaces the current website creation day with an independent project where the learners will implement their brand and designs. Layout will not be completed on this day, as well as many other things but from this point on they will build on their site. 
3.2 Added homework of a video on Flexbox for students to watch before the Flexbox class. 
3.2. There is not flexbox code-along before they actually learn about it anymore. It was too repetive. 

4.1, 4.2- CSS Layouts with Flexbox have been moved here. As well as Responsive web design. 

5.1. SEO Content was updated in summer of 2017. 
5.2. Google Form exercise clarified with new project files branded in LLC colours. 
 
6.1 and 6.2 All project files simplified and fixed to match LLC Brand. 

7 WordPress - moved large parts of the content to "Bonus" land and made the in-class component shorter and easier for beginners to manage. 

Module 8 This module is a "Choose your Own Adventure" module. It is essentially now a "free" class where students can ask questions and work on what they'd like. Instructors can make use of this free period to tie any loose ends if they're running behind, and students can ask last questions to mentors and finalize their business/personal website. 

Updated Read Me. 
Updated Instructor Notes. 
Update Exercise Files. 


These lesson plans are created using [Jekyll](http://jekyllrb.com/) to make use of its templating system for creating mostly text-based lesson plans in [Markdown](http://daringfireball.net/projects/markdown/) and converted into HTML.

Syntax highlighting by <http://highlightjs.org>.

## Making Edits

1. Fork or clone this repo.
1. In Terminal, navigate to the **llc-digital-skills** folder.
1. Run the command `jekyll server` or `jekyll serve` to start the local server.
  * There's no need to preinstall Jekyll first.  The repo already contains what you need.
1. The local url should be `http://127.0.0.1:4000/llc-digital-skills/` (It will be listed under **Server address** in your Terminal).
  * This will watch any changes made to any of the files (content, CSS, template updates, etc).
  
All files are compiled into standard HTML pages into the **_site** folder.  If learners want a local copy, you can zip up the contents of the **_site** folder.  

This repo uses [Github pages](https://help.github.com/articles/using-jekyll-with-pages/) to host the notes so all updates in the master branch needs to be rebased into the gh-pages branch to be available online.

At the time of this writing, Jekyll supports [Sass](http://jekyllrb.com/docs/assets/) with specific rules but doesn't support sourcemaps so I use [CodeKit](https://incident57.com/codekit/index.html) to compile the Sass. Sourcemaps are not required but are useful for debugging. Use whatever compiler you prefer!

## Lesson file structure

* Lesson plans/notes are markdown files located in the **_lessons** folder.
* At the top of each markdown file, a block of [front matter](http://jekyllrb.com/docs/frontmatter/) sets a number of predefined variables.
  * global variables can be found in **_config.yml**
  * changes to **config.yml** require a server restart to see the changes
  * page template variables can be included in the individual markdown lesson files & the **_layouts** template files
* Uses the **lessons.html** template in the **_layouts** folder.
* The footer & header content are contained in the **_includes** folder.
* Any exercise files to be downloaded by learners are contained in the **exercises** folder.
* If you have a file/folder that you don't want included and compiled into the **_site** files, (e.g. instructor notes), begin the file name with an underscore and Jekyll will ignore it.

Each lesson is created as a **[Collection](http://jekyllrb.com/docs/collections/)**.

Refer to **[_instructor_notes.md](_instructor_notes.md)** for general notes, tips and suggestions for teaching the course.

---
Created by [Christina Truong](http://christinatruong.com) for Ladies Learning Code.  
SEO content by [Daniel Butterfield](https://twitter.com/DanielButterf) for Ladies Learning Code.