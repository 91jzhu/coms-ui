rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add ./ &&
git commit -m 'deploy' &&
bit branch -M master &&
git remote add origin git@github.com:91jzhu/coms-ui-website.git &&
git push -f -u origin master &&
cd -
