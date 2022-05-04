exports.seed = function (knex) {
  return knex('EMPLOYEE')
      .insert([
        { id: 1, name: 'Belenus Dragan', email: 'kelvin99@gmail.com', phone: '+1 321-947-9728', address: '2582 Colten Mission, Apt. 787, 46802-9641, Port Ella, Connecticut, United States', departmentId: 1},
        { id: 2, name: 'Moreno Jennifer', email: 'reid_reinger56@gmail.com', phone: '+1 582-282-7185', address: '03241 Moen Parkway, Suite 417, 28206-6941, Labadieburgh, Florida, United States', departmentId: 4},
        { id: 3, name: 'Secundinus Itamar', email: 'gladys.feeney@hotmail.com', phone: '+1 582-222-9891', address: '1820 Ortiz Union, Apt. 799, 09359-4147, Mraztown, Florida, United States', departmentId: 3},
        { id: 4, name: 'Alexius Severo', email: 'jamel.grant10@gmail.com', phone: '+1 225-691-4768', address: '151 Chloe Greens, Apt. 887, 13721-3285, New Katlynn, Massachusetts, United States', departmentId: 10},
        { id: 5, name: 'Annelie Apollonios', email: 'maeve_durgan@hotmail.com', phone: '+1 582-400-8164', address: '380 Wintheiser Extension, Suite 464, 90237-3075, West Hipolitoside, Kentucky, United States', departmentId: 1},
      ])
      .onConflict('id')
      .merge();
};