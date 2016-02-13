# Ladies Learning Code Digital Skills Program

These lesson plans are created using [Jekyll](http://jekyllrb.com/) to make use of its templating system for creating mostly text-based lesson plans in [Markdown](http://daringfireball.net/projects/markdown/) that are converted into HTML.

Syntax highlight by highlightjs.org.

##Making Edits

1. Fork or clone this repo.
1. Navigate to the **llc-digital-skills** folder in Terminal.
1. Run the command `jekyll server` or `jekyll serve` to start the local server.
  * There's no need to preinstall Jekyll first.  The repo already contains what you need.
1. The local url should be `http://127.0.0.1:4000/llc-digital-skills/` (It will be listed under **Server address** Terminal).
  * This will watch any changes made to any of the files (content, CSS, template updates, etc).
  
All files are compiled into standard HTML pages into the **_site** folder.  If students want a local copy, you can zip up the contents of the **_site** folder.  

This repo uses [Github pages](https://help.github.com/articles/using-jekyll-with-pages/) to host the notes so all updates in the master branch needs to be rebased into the gh-pages branch to be available online.

At the time of this writing, Jekyll supports [Sass](http://jekyllrb.com/docs/assets/) with specific rules but doesn't support sourcemaps so I use [CodeKit](https://incident57.com/codekit/index.html) to compile the Sass. Sourcemaps are not required but are useful for debugging. Use whatever compiler you prefer!

##Lesson file structure

* Lesson plans/notes are markdown files located in the **_lessons** folder.
* At the top of each markdown file, a block of [front matter](http://jekyllrb.com/docs/frontmatter/) sets a number of predefined variables.
  * global variables can be found in **_config.yml**
  * changes to **config.yml** require a server restart to see the changes
  * page template variables can be included in the individual pages & the **_layouts** template files
* Uses the **lessons.html** template in the **_layouts** folder.
* The footer & header content are contained in the **_includes** folder.
* Any exercise files to be downloaded by students are contained in the **exercises** folder.
* If you have a file/folder that you don't want included and compiled into the **_site** files, (e.g. instructor notes), begin the file name with an underscore and Jekyll will ignore it.

Each lesson is created as a **[Collection](http://jekyllrb.com/docs/collections/)**.

Refer to **[_instructor_notes.md](_instructor_notes.md)** for general notes, tips and suggestions for teaching the course.

---
Created by [Christina Truong](http://christinatruong.com) for Ladies Learning Code.
SEO content created by [Daniel Butterfield](https://twitter.com/DanielButterf) for Ladies Learning Code.