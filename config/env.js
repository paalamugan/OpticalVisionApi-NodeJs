const env={
    database:'opticalservice',
    username:'sremugaan',
    password:'Welcome01',
    host:'localhost',
    dialect:'mysql',
    pool:{
        max :5,
        min:0,
        idle:10000,
        acquire:30000
    }

};

module.exports = env;