const connection = require('../database/connection');

module.exports = {
    index(request, response) {
        const ong_id = request.headers.authorization;

        connection('incidents').where('ong_id', ong_id).select('*').then(res => {
            return response.json(res);
        }).catch(error => {
            console.log('ProfileIndex => ' + error);
            return response.status(404);
        });
    }
}