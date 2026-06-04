#!/bin/bash
set -e

echo "=== Building for GitHub Pages ==="
npm run build

echo "=== Staging docs/ for commit ==="
git add docs/

echo "=== Committing ==="
git commit -m "deploy: update GitHub Pages build"

echo "=== Pushing to GitHub ==="
git push

echo "Deploy complete!"
