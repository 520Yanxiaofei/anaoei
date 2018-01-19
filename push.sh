git reset --hard origin/master
git clean -f
git pull origin master
cd admin
npm install
npm pm2
echo 嗨，anaoei,自动化部署成功！
