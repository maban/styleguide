# Front-end Style Guide

A boilerplate style guide built entirely in Jekyll so that it can be hosted on GitHub Pages. Outputs static HTML. Still very much a work in progress, some patterns are not complete.

## Setup

### Prerequisites

To run this locally, you'll need to install Jekyll:

    $ gem install jekyll
    
…or update to the latest version of Jekyll (it doesn't work on older versions):

    $ gem update jekyll

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
* **_includes** Contains the header and footer for the style guide.
* **_layouts** Jekyll files for templating
* **_patterns** Each pattern or module is in its own file. If you want to add a new pattern, create a new file for it in here and it'll get automatically pulled into the style guide.
* **site** see above
* **CNAME** You'll want to change this if you want to host your style guide on GitHub Pages using your own domain.
* **Gemfile** A list of Gems used and their version numbers.
* **README.md** Documentation (this)
* **favicon.ico** Replace with your own favicon
* **icon.png** Used for some device home screens
* **index.html** The style guide
* **script** for javascript files
* **style**
    * **_sass** There's a sass file for every pattern. When adding new sass patterns, you'll need to import these into the `main.css` file.
    * **main.scss** imports all the sass files into one file. This is output in _sites/style/main.css
    * **pattern-lib.scss** styles specific to the style guide, not the site

## Thank you

Many thanks to [@paulrobertlloyd](http://twitter.com/paulrobertlloyd) for his [barebones style guide](http://barebones.paulrobertlloyd.com/), which is better than this one, just not using Jekyll.
