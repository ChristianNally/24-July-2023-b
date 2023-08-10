const bcrypt = require('bcryptjs');

const password = 'monkeyfuzz';

const salt = bcrypt.genSaltSync(10);

// console.log('salt:', salt);

const hash = bcrypt.hashSync(password, salt)

// console.log('hash:', hash);

const dbHash = '$2a$10$q3dieD6i2oZi7KhuMBNztuq8LFragNwHnMYX0IiNh3g/DwytuZlPa';

const result = bcrypt.compareSync('monkeyfuzz', dbHash);

console.log('result:', result);
