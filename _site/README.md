[//]: # "Copyright (C) 2019 The Trustees of Indiana University"
[//]: # "SPDX-License-Identifier: BSD-3-Clause"

# rivet-jekyll-theme

This repository holds the code for a [Rivet](http://rivet.iu.edu)/[Rivet Shell](https://rivet.iu.edu/add-ons/rivet-shell/) theme for use in GitHub Pages or Jekyll.

## Use the theme:

### 1. Gemfile

Add the following to your Gemfile in your Jekyll site:
    
```
gem "rivet-jekyll-theme", :git => "git://github.com/indiana-university/rivet-jekyll-theme.git"
```

### 2. _config.yml

In your `_config.yml` file, replace the `theme` property value with `rivet-jekyll-theme`:

```
theme: rivet-jekyll-theme
```

### 3. Bundle

You'll also need to run `bundle install` to download the theme like adding any Gem.

### 4. Running locally

`bundle exec jekyll serve` 

-or-

`bundle exec jekyll serve --port 4001`


## TODOs

 * Includes (`_includes`) for: 
    * styles area
    * scripts area (after footer)
    * HEAD metadata from front-matter (tags, categories, title, description, keywords, etc.)
    * Header
    * Footer
    
* Publish as a Gem (need an account )

## Links
 * [Rivet Source Code](https://github.com/indiana-university/rivet-source)
 * [Configuring a publishing source for GitHub pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages)
 * [About Jekyll themes on GitHub](https://help.github.com/en/articles/about-jekyll-themes-on-github)
 * [Adding a Jekyll theme to your GitHub Pages site](https://help.github.com/en/articles/adding-a-jekyll-theme-to-your-github-pages-site)
 * [GitHub Pages best practices](https://mattallan.org/posts/github-pages-best-practices/)
