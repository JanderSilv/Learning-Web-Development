const {Schema, model} = require('mongoose');

const DevSchema = new Schema({ // Estrutura da tabela do BD para armazenar informação
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String, // Caso o atributo não seja obrigatório, pode-se passar o tipo diretamente sem abrir o objeto
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, // Cria uma coluna de forma automatica chamada de createdAt e outra chamada updatedAt
});

module.exports = model('Dev', DevSchema); // Parametros: Nome do model, Schema

/* Informações sobre o timestamps:
*   createdAt: armazena automaticamente a data de criação de um registro no BD;
*   updatedAt: armazena a data da última alteração de um registro.
*/