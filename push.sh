git reset --hard origin/master
git clean -f
git pull origin master
cd admin
npm install
pm2 delete all
pm2 start ./bin/www --name anaoei-node-api-pm2
pm2 monit
echo 嗨，anaoei,自动化部署成功！
