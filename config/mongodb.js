const moogoose = require('mongoose');

function conectaMongoDB(){
    mongoose.conect(
        'mongodb://webuser:web12345@ds135128.mlab.com:35128/aula-web',
        {}
    )
}