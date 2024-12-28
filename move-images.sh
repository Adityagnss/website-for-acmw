#!/bin/bash
mkdir -p public/images
cp -r pic/* public/images/ 2>/dev/null || true
find src -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.svg" -exec cp {} public/images/ \;
