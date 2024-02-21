#!/bin/bash

obsidian_dir='/Users/pyoky/Library/Mobile Documents/iCloud~md~obsidian/Documents/Slipbox/'
cd "$obsidian_dir/Publishable"

quartz_dir='/Users/pyoky/Developer/personal_website/quartz/'

# move displaymath into separate lines
find "$obsidian_dir/Publishable" -type f -name '*.md' -exec perl -i -pe 's/(?<!^)\$\$/\n\$\$/g' {} +

# copy notes to content directory
rsync -avrn --delete --exclude "$obsidian_dir/.obsidian" "$obsidian_dir/Publishable" "$quartz_dir/content"

# build quartz
cd "$quartz_dir"
npx quartz build --directory --output ../notes