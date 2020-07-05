#!/bin/zsh

cd ~/source/personal_website/;
python -m SimpleHTTPServer 8000;
open http://localhost:8000;