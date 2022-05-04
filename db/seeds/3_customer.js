exports.seed = function (knex) {
  return knex('CUSTOMER')
      .insert([
        { id: 1, name: 'Zaiden Muireadhach', email: 'katrina73@yahoo.com', phone: '+1 202-918-2132', address: '30007 Randy Rapids, Suite 391, 24819, North Lonny, New Mexico, United States' },
        { id: 2, name: 'Sophokles Poul', email: 'hortense20@yahoo.com', phone: '+1 582-282-8251', address: '3687 Schulist Lane, Suite 800, 08035-1734, New Graceview, Wyoming, United States' },
        { id: 3, name: 'Samu Johanna', email: 'cassandre22@gmail.com', phone: '+1 505-644-5634', address: '9223 Cronin Mount, Apt. 526, 81497-9245, Gibsonstad, Florida, United States' },
        { id: 4, name: 'Gottfried Delano', email: 'bennett94@yahoo.com', phone: '+1 201-652-2134', address: '74812 Towne Place, Suite 582, 82896-4794, Virginieton, Vermont, United States' },
        { id: 5, name: 'Siôn Voitto', email: 'geovanny_veum@hotmail.com', phone: '+1 218-951-2508', address: '3085 Julien Mount, Apt. 459, 74990, North Kaylah, New Mexico, United States' },
      ])
      .onConflict('email')
      .merge();
};