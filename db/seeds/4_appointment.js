exports.seed = function (knex) {
  return knex('APPOINTMENT')
      .insert([
        { id: 1, date: '2022-05-01', start: '10:20:00', end: '10:40:00', employeeId: 2, customerId: 2},
        { id: 2, date: '2022-06-11', start: '09:50:00', end: '10:10:00', employeeId: 2, customerId: 4},
        { id: 3, date: '2022-05-23', start: '09:20:00', end: '09:50:00', employeeId: 3, customerId: 5},
        { id: 4, date: '2022-05-05', start: '13:20:00', end: '13:30:00', employeeId: 5, customerId: 4},
        { id: 5, date: '2022-06-15', start: '12:20:00', end: '12:55:00', employeeId: 5, customerId: 2},
        { id: 6, date: '2022-05-16', start: '12:20:00', end: '12:30:00', employeeId: 5, customerId: 1},
        { id: 7, date: '2022-05-15', start: '12:40:00', end: '14:20:00', employeeId: 2, customerId: 3},
        { id: 8, date: '2022-09-11', start: '10:20:00', end: '10:50:00', employeeId: 2, customerId: 3},
      ])
      .onConflict('id')
      .merge();
};