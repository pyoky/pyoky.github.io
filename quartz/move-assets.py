import os
import re
import shutil

# Define the directories
obsidianDir = (
    "/Users/pyoky/Slipbox/"
)
external_dir = obsidianDir + "External/"
assets_dir = obsidianDir + "assets"
new_assets_dir = external_dir + "assets"

# Make sure the new_assets directory exists
os.makedirs(new_assets_dir, exist_ok=True)

# Compile a regex pattern to find wikilinks to image files
wikilink_pattern = re.compile(r"\[\[(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)(\|\d{2,3})?\]\]")

# Iterate over all files in the external directory
for root, dirs, files in os.walk(external_dir):
    for file in files:
        if file.endswith(".md"):
            file_path = os.path.join(root, file)
            with open(file_path, "r") as md_file:
                content = md_file.read()
                matches = wikilink_pattern.findall(content)
                for match in matches:
                    filename, extension, _ = match
                    src_path = os.path.join(assets_dir, f"{filename}.{extension}")
                    dst_path = os.path.join(new_assets_dir, f"{filename}.{extension}")
                    # Copy the file if it exists in the assets directory
                    if os.path.exists(src_path):
                        shutil.copy(src_path, dst_path)
                        print(f"Copying {src_path} to {dst_path}")
                    else:
                        print(f"File not found: {src_path}")
