rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@gitee.com:kakmsaikou/jigsaw-ui-webside.git &&
git push -f -u origin "master" &&
cd -