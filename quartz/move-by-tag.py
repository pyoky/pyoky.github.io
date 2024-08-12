import frontmatter
import os
import shutil


def file_has_relevant_tag(path, tag_prefixes):
    post = frontmatter.load(path)
    tags = post.get("tags", [])
    if tags != None:
        for tag in tags:
            for prefix in tag_prefixes:
                if tag.startswith(prefix):
                    return True
    return False


def get_files_to_move(source_dir, tag_prefixes):
    files_to_move = []
    for file in os.listdir(source_dir):
        if file.endswith(".md"):
            path = os.path.join(source_dir, file)
            if not file_has_relevant_tag(path, tag_prefixes):
                files_to_move.append(path)
    return files_to_move


def move_files(files, target_dir):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    for file in files:
        shutil.move(file, target_dir)
    return len(files)


source_dir = (
    "/Users/pyoky/Slipbox/"
)
target_dir = source_dir + "Private/"
tag_prefixes = [
    "Math",
    "Computing",
    "Courses",
    "Economics",
    "Humanities",
    "Philosophy",
    "Sociology",
    "Psychology"
]  # Add more tag prefixes as needed
files_to_move = get_files_to_move(source_dir, tag_prefixes)
files_moved_count = move_files(files_to_move, target_dir)

for p in files_to_move:
    print("Moving: ", p)

# print(f"Moved {files_moved_count} files to {target_dir}.")
