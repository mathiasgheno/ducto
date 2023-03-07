#!/usr/bin/bash

# create-pure-function myFunctionName
# cpf myFunctionName

mkdir "$1"
touch "$1"/"$1".js
touch "$1"/README.md
touch "$1"/"$1".spec.js
touch "$1"/"$1".types.js
