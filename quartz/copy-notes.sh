#!/bin/bash

#!TODO auto move Math, CS, etc. to Publishable dir
#!TODO auto move images to publishable images

obsidian_dir='/Users/pyoky/Slipbox/External'
cd "$obsidian_dir"

quartz_dir='/Users/pyoky/Developer/personal_website/quartz/'

# move displaymath into separate lines
find "$obsidian_dir" -type f -name '*.md' -exec perl -i -pe 's/(?<!^)\$\$/\n\$\$/g' {} +

# copy notes to content directory
rsync -avr "$obsidian_dir/" "$quartz_dir/content"

# build quartz
cd "$quartz_dir"
npx quartz build --directory --output ../notes
