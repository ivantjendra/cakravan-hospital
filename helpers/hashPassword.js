const bcrypt = require('bcrypt');

function hashPassword(password) {
    const saltRounds = 5;
    const myPlaintextPassword = password;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hashPassword = bcrypt.hashSync(myPlaintextPassword, salt);
    return hashPassword;
}

module.exports = hashPassword;