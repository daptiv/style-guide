# Style Guide
Common styles and pattern library for daptiv. You can view the style guide [here](https://daptiv.github.io/style-guide).

# Install

Use the style-guide.less / style-guide.css file in your project.

# Update Version

use `npm run update-version -- version=[newversion]` to update the version for package.json and \_config.yml

# Linting

We use [hound](https://houndci.com) to run linting on our scss files.

#Running Locally

* Run `grunt serve` to deploy changes to the local web server. (This also adds a 'watch' so that subsequent changes are deployed automatically.)
* Go to: //localhost:<port> where <port> is determined from grunt output.
* Click on 'style-guide'
