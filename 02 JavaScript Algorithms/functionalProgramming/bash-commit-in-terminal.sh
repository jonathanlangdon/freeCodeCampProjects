#!/bin/bash

# Get the name of the file to commit
read -p "Github comment: " filename
git add .
git commit -m "Committing $filename"
git push

