git reset --hard origin/master
git clean -f
git pull origin master
cd admin
npm install
pm2 start ./bin/www -name anaoei-node-api
echo 嗨，anaoei,自动化部署成功！
