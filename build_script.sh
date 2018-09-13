#!/bin/bash


(cd `dirname $0`/jekyll_blog && JEKYLL_ENV=production jekyll build)

(cd `dirname $0`/css && sass main.scss main.css)

