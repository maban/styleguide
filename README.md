# Front-end Style Guide

A boilerplate style guide built entirely in Jekyll so that it can be hosted on GitHub Pages. Outputs static HTML. Still very much a work in progress, some patterns are not complete.

## Setup

### Prerequisites

To run this locally, you'll need to navigate to the directory in terminal, and do a bundle install:

    $ bundle install

This installs all the gems listed in the Gemfile.

### Running the repo locally

Fork or download the repository. I like to save things like this in my Sites folder, so the path to the repository would be **Sites/styleguide**

In the command line, navigate to where the repository is saved on your computer. So if it's saved in the Sites folder…

    $ cd Sites/styleguide

Get Jekyll running. (the `--watch` command checks for changes.)

    $ jekyll serve --watch

It will output a server address, normally `0.0.0.0:4000`. Copy this.

Open up your browser, and paste that address in the address bar to see it rendered.

You'll need to get Jekyll running every time you make changes to the project.

## File Structure

The `_site` folder contains the generated HTML files. **Do not make any changes here**. They will get overwritten every time Jekyll builds the site. All the folders beginning with an underscore do not get output into the `_site` folder by Jekyll.

* **_config** Settings for Jekyll.
    * **templates** Where all the files that you can edit live
    * **_includes** Contains the header and footer for the style guide.
    * **_layouts** Jekyll files for templating
    * **_patterns** Each pattern or module is in its own file. If you want to add a new pattern, create a new file for it in here and it'll get automatically pulled into the style guide.
    * **script** for javascript files
    * **style**
        * **_sass** There's a sass file for every pattern. When adding new sass patterns, you'll need to import these into the `main.css` file.
        * **main.scss** imports all the sass files into one file. This is output in _sites/style/main.css
        * **pattern-lib.scss** styles specific to the style guide, not the site
    * **index.html** The style guide
    * **about.html** An example template file
* **_site** The generated site files. **do not edit!**
* **CNAME** You'll want to change this if you want to host your style guide on GitHub Pages using your own domain.
* **Gemfile** A list of Gems used and their version numbers.
* **README.md** Documentation (this)
* **favicon.ico** Replace with your own favicon
* **icon.png** Used for some device home screens

## Including patterns in templates

Normally when we include files in a Jekyll template, we write this:

```
{% include header.html %}
```

Jekyll includes only work with files within the _includes folder. Since the patterns live within the _patterns folder, a normal Jekyll include like this can't be used.

Another option is `include_relative`, which includes files from a different folder:

```
{% include_relative _patterns/media-image.html %}
```

But `include_relative` doesn't work when it's used in a layout file (any file within the _layouts folder).

The _patterns folder is a Jekyll collection. Moving all the pattern files into the _includes folder was another option, so we could use normal Jekyll includes anywhere, but the code that pulls all the files into the style guide doesn't understand files that don't have a YAML front-matter (even if it's empty). That's why every pattern within the pattern folder has a front-matter. This is actually good – it gives us the added option of putting content in the front-matter that's different to what we want to use in our templates. It also means we can store a description of the pattern in the same file, that then gets output into the styleguide.

Another problem is that including a file in the normal way adds the front-matter into the template as text – it doesn't strip it out.

So the workaround was to add a Jekyll plugin that lets us include a pattern in a layout file, and strip out the front-matter. Within the _includes folder is a file called pattern.html, and that does the relative include. We then use these two lines of code when doing a pattern include:

```
{% include pattern.html param='media-image' %}
{{ include media-image.html | removefrontmatter }}
```

On the first line, we pass in the paramter (the name of the pattern) so that the pattern file knows where to look to do its thing, and on the second line, point to the file that needs including, and we tell it to strip out the front-matter (which is handled by the plugin).

### Implications

This is not an elegant solution (I don't like that you have to type the pattern name one both lines, or that it's 2 lines rather than 1), but it means we can have the patterns within their collection, and still benefit from all that YAMLy goodness.

The major flaw is that you can't have a proper directory structure – all the pages have to be flat in the template folder. That really sucks if you want subpages. You can't even have Jekyll being served from a different directory if you plan on using GitHub Pages and Jekyll's built-in Sass compiling – it causes markdown syntax errors with the main scss file.

For these reasons, it's great for prototyping for now, but I wouldn't recommend trying to build a full-scale site out of it.

## Thank you

Many thanks to [@paulrobertlloyd](http://twitter.com/paulrobertlloyd) for his [barebones style guide](http://barebones.paulrobertlloyd.com/), which is better than this one, just not using Jekyll.
