var UserSQL = {
    insert: 'INSERT INTO tplay_admin(id,name) VALUES(?,?)',
    queryAll: 'SELECT * FROM tplay_admin',
    getUserById: 'SELECT * FROM tplay_admin WHERE id = ? ',
};
module.exports = UserSQL;