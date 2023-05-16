#!/bin/bash

# Get the name of the file to commit 
read -p "Github comment: " comment
git add .
git commit -m "$comment"
git push
sleep 5
