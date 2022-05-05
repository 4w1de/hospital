exports.seed = function (knex) {
    return knex('DEPARTMENTS')
        .insert([
            { id: 1, name: 'Outpatient department', address: 'Gomel' },
            { id: 2, name: 'Inpatient Service', address: 'Gomel' },
            { id: 3, name: 'Medical Department', address: 'Gomel' },
            { id: 4, name: 'Nursing Department', address: 'Minsk' },
            { id: 5, name: 'Paramedical Department', address: 'Brest' },
            { id: 6, name: 'Physical Medicine', address: 'Minsk' },
            { id: 7, name: 'Rehabilitation Department', address: 'Gomel' },
            { id: 8, name: 'Operation Theatre Complex', address: 'Gomel' },
            { id: 9, name: 'Pharmacy Department', address: 'Brest' },
            { id: 10, name: 'Radiology Department', address: 'Brest' },
            { id: 11, name: 'Dietary Department', address: 'Minsk' },
            { id: 12, name: 'Non-professional Services', address: 'Gomel' },
            { id: 13, name: 'Medical Record Department', address: 'Gomel' },
            { id: 14, name: 'Personnel Department', address: 'Minsk' },
        ])
        .onConflict('id')
        .merge();
};
