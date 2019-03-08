# Copyright (C) 2019 The Trustees of Indiana University
# SPDX-License-Identifier: BSD-3-Clause

Gem::Specification.new do |spec|
  spec.name          = "rivet-jekyll-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Indiana University"]
  spec.email         = ["opensource@iu.edu"]

  spec.summary       = "rivet-jekyll-theme is a theme for Jekyll using the Rivet Design System developed by Indiana University. This should make creating Rivet-themed sites with GitHub Pages a breeze."
  spec.homepage      = "https://github.com/indiana-university/rivet-jekyll-theme"
  spec.license       = "BSD-3-Clause"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
