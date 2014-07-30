# Front-end Style Guide

A boilerplate style guide built in Jekyll.

## Setup

### Prerequisites

To run this locally, you'll need to install Jekyll…
    $ gem install jekyll
…or update to the latest version of Jekyll.
    $ gem update jekyll

### Running the repo locally

1. Fork or download the repository. I like to save things like this in my Sites folder.
    Sites/styleguide
2. In the command line, navigate to where the repository is saved on your computer. So if it's saved in the Sites folder…
    $ cd Sites/styleguide
3. Get Jekyll running (the `--watch` command checks for changes.)
    $ jekyll serve --watch
4. It will output a server address, normally `0.0.0.0:4000`. Copy this.
5. Open up your browser, and paste that address in the address bar to see it rendered.

## File Structure

_config: Settings for Jekyll.
_includes: Contains the header and footer for the
_patterns: Each pattern or module is in its own file. If you want to add a new pattern, create a new file for it in here and it'll get automatically pulled into the style guide.
