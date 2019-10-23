class Postagens{
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }
    async adicionar (postagemDT0){
        const postagem = new this.Postagem(postagemDT0)
        await postagem.save();
        return 'Adicionado com sucesso';
    }

    async consultarTodos(){
        const postagem = await this.Postagem.find({});
        return postagem;
    }

    async alterarPost(){
        await this.Postagem.updateOne({_id: id},postagemDTO)
    }
}

module.exports = mongoose;