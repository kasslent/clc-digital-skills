# Ladies Learning Code Digital Skills Program

This repo uses [Github pages](https://help.github.com/articles/using-jekyll-with-pages/) to host the notes so all updates in the master branch needs to be rebased into the gh-pages branch to be available online.

At the time of this writing, Jekyll supports [Sass](http://jekyllrb.com/docs/assets/) with specific rules but doesn't support sourcemaps so I use [CodeKit](https://incident57.com/codekit/index.html) to compile the Sass. Sourcemaps are not required but are useful for debugging. Use whatever compiler you prefer!

## Updates for 2019

### Accordions

Used to hide info that the instructor may not have time to cover in class, but could be of interest for learners to delve into after class.
They are also used to organize content when multiple options are presented, for example inline vs. external CSS, or wordpress.com vs wordpress.org

### Controls

Back to top button, ability to scroll within side Navigation

### Module 6.2

jQuery codebase of plugins included as a reference for learners to apply to their sites

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

## Attributions

Created by [Christina Truong](http://christinatruong.com) with contributions from Dara Skolnick, Nat Cooper, Kassandra Lenters, Jessica Duarte and Stacie DaPonte for Ladies Learning Code.  
SEO content by [Daniel Butterfield](https://twitter.com/DanielButterf) and Katya Bovykina for Ladies Learning Code.

Email questions & comments to <content@ladieslearningcode.com>.

This content was created with the advisory of and in collaboration with educators, industry representatives and technologists. These individuals have helped us to ensure that lesson content represents the technology landscape and educator needs, with learners in mind. If you'd like to contribute to future lesson content development, let us know [here](https://docs.google.com/forms/d/e/1FAIpQLSfJ8NSMKVAmzpdn3EAymxCbDDz3XZPxyDdmtQ87GECuvXzzDQ/viewform).

We're really happy to see others leverage our content in their community - we’ve developed it to be used by others with attribution through a [Creative Commons (CC BY-NC 4.0) license](https://creativecommons.org/licenses/by-nc/4.0/).

Here's an easy way to attribute content back to us - please include it wherever you use or make reference to our content.

"Please note that this is not a [Canada Learning Code](https://www.canadalearningcode.ca/) affiliated event, but we want to acknowledge the organization for the creation of [the content](https://github.com/ladieslearningcode/llc-intro-to-javascript) being delivered under Creative Commons license"


## Contributing

Our general Rule of Thumb is that it's okay to add examples if you feel it could provide more context for your community. However, we ask that instructors do not remove anything, as the content is designed with intention, whether that be meeting specific learning objectives, or maintaining our organization’s culture through the design.  Any suggestions for revisions or updates can be submitted in Github via issues and pull requests. If submitting an issue, please include the slide number(s) in the title.
