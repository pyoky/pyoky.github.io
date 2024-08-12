#!/bin/bash

# Set the paths
quartz_dir="/Users/pyoky/Developer/personal_website/quartz"
publishable_dir="$quartz_dir/Publishable"
personal_websites_dir="/Users/pyoky/Developer/personal_website"  # Replace with the actual path

# Change to the quartz directory
cd "$quartz_dir"

# Run the Python scripts
python move-by-tag.py
python move-assets.py

# Copy notes from Publishable to the quartz compilation directory
./copy-notes.sh

# Change to the personal_websites directory
cd "$personal_websites_dir"

# Commit and push changes
git add notes/ 
git commit -m "Update website content"
git push
