const moogoose = require('mongoose');

function conectaMongoDB(){
    mongoose.conect(
        // 'mongodb://webuser:web12345@ds135128.mlab.com:35128/aula-web',
        // {}
    )
    const db = mongoose.conection;
    db.on('error', console.error.blind(console, 'connection error:'));
    db.once('open',()=>console.info('mongoDb conectado com sucesso'));
}
module.exports = conectaMongoDB;