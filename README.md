# Ladies Learning Code Digital Skills Program

These lesson plans are created using [Jekyll](http://jekyllrb.com/) to make use of its templating system for creating mostly text-based lesson plans in [Markdown](http://daringfireball.net/projects/markdown/) that are converted into HTML.

To make edits:

1. Navigate to the **llc-digital-skills** folder in Terminal.
1. Run the command `jekyll server` to start the local server.

This will watch any changes made to any of the files (content, CSS, template updates, etc).
All files are compiled into the **_site** folder.  This repo uses [Github pages](https://help.github.com/articles/using-jekyll-with-pages/) to host the notes so all updates need to the master branch needs to be rebased in the gh-pages branch to be available online.

Lesson file structure:

* Lesson plans/notes are markdown files located in the **_lessons** folder.
* At the top of each markdown file, a block of [front matter](http://jekyllrb.com/docs/frontmatter/) sets a number of predefined variables.
  * global variables can be found in **_config.yml**
  * page template variables can be included in the individual pages & the **_layouts** template files
* Uses the **lessons.html** template in the **_layouts** folder.
* The footer & header content are contained in the **_includes** folder.
* Any exercise files to be downloaded by students are contained in the **exercises** folder.
* If you have a file/folder that you don't want included and compiled into the **_site** files, (e.g. instructor notes), begin the file name with an underscore and Jekyll will ignore it.

Each lesson is created as a **[Collection](http://jekyllrb.com/docs/collections/)**.

At the time of this writing, Jekyll supports [Sass](http://jekyllrb.com/docs/assets/) with specific rules but doesn't support sourcemaps so I'm using CodeKit to compile the Sass. Use whatever tool works for you to compile the CSS.

Refer to **_instructor_notes.md** for general notes, tips, suggestions for teaching the course.

Created by [Christina Truong](http://christinatruong.com) for Ladies Learning Code.