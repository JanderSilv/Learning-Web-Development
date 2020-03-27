const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

    index(request, response) {
        connection('ongs').select('*').then(res => {
            response.json(res);
        }).catch(error => {
            console.log('getAllOngs -> ' + error);
        });
    },

    create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }).then(res => {
            console.log(res);
            return response.json({ id });
        }).catch(error => {
            console.log('newOng -> ' + error);
        });
    }
}