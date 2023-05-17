#!/bin/bash

#Turn .txt files into .js files (due to formatting of freeCodeCamp

for file in *.txt; do mv -- "$file" "${file%.txt}.js"; done

