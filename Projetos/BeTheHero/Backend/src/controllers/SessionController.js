const connection = require('../database/connection');

module.exports = {
    create(request, response) {
        const { id } = request.body;

        connection('ongs').where('id', id).select('name').first().then(ong => {
            if (!ong) return response.status(400).json({ error: 'No ONG found with this ID'});
            return response.json(ong);
        });
    },
}