#!/bin/bash
echo "Deploying..." && \
git add . && git commit -m "$1" && git push && \
echo "Done!"
