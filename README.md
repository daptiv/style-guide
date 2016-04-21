[![Build Status](https://travis-ci.org/daptiv/style-guide.svg?branch=master)](https://travis-ci.org/daptiv/style-guide)

[![octocat style](http://matthias.vallentin.net/blog/2012/12/octocat.jpeg)](https://daptiv.github.io/style-guide/)

# Style Guide
Common styles and pattern library for daptiv. You can view the style guide [here](https://daptiv.github.io/style-guide/).

## Install

Style-guide is available as [bower](http://bower.io/) package. This can be included by creating an entry in your bower.json file with the url `https://github.com/daptiv/style-guide.git#VERSION` where VERSION is the version you care to use.

## Running Locally

* First install dependencies `npm install && bundle install`
* For development, run: `grunt serve` this starts a local web server and a watch task.
* In a browser, go to: `http//localhost:8888/style-guide` this will automatically refresh when changes are made.

## Pull requests

We use [pullquester](https://github.com/daptiv/pullquester) to create pull requests. It provides all the important information for requests and instructions on how to publish changes after the pull request is complete.

## Publishing

To publish the site:

1. Pull latest master: `git checkout master && git pull`
2. Run `npm version patch`

### More Information 

Some versions of npm do not correctly call the `postversion` script. If you run npm version and all it outputs to the command line is a version number, you are running one of the affected versions of npm.

In the event that the `postversion` script is not run, simply run `npm run-script postversion`

Running `npm version` will:

1. Update [package.json's](package.json) version according to the rule provided. (most of the time by incrementing patch number)
2. Commit the change to package.json and tag the resulting commit with the same version
3. Push the commit and tag up to github.
4. Run `grunt publish` which will, in turn:
    1. Build the site
    2. Publish the newly built site to the `gh-pages` branch
    3. Push the `gh-pages` branch to github, updating the [style guide site](https://daptiv.github.io/style-guide/)
