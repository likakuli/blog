#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Generate algolia index
hugo-algolia -s || echo "Warning: Algolia index generation failed, continuing..."

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Configure git http buffer for large files
git config http.postBuffer 524288000

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg" || echo "No changes to commit"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..
