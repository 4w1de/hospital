const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

exports.seed = function (knex) {
  return knex('USERS')
      .insert([
        { id: 1, employeeId: 1, password: bcrypt.hashSync('qweqwe', salt), role: 0},
        { id: 2, employeeId: 2, password: bcrypt.hashSync('asdasd', salt), role: 1},
        { id: 3, employeeId: 3, password: bcrypt.hashSync('zxczxc', salt), role: 1},
        { id: 4, employeeId: 4, password: bcrypt.hashSync('qazqaz', salt), role: 2},
        { id: 5, employeeId: 5, password: bcrypt.hashSync('wsxwsx', salt), role: 1},
      ])
      .onConflict('id')
      .merge();
};