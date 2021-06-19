#!/bin/bash


RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;35m'
NC='\033[0m' # No Color





echo -e "${BLUE} New build processing ..."
echo "${NC}"
git status
yarn run build
git add .
git commit -m "new build"
git push

ssh simonrencp@ssh.cluster026.hosting.ovh.net -p 22

echo -e "${GREEN} new build live on git"

