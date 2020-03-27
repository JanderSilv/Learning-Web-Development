const connection = require('../database/connection');

module.exports = {
    index(request, response) {
        const { page = 1 } = request.query;

        connection('incidents').count()
        .then(count => {
            const [cases] = count;
            return response.header('X-Total-Count', cases['count(*)']);
        }).catch(error => {
            console.log('IncidentCount => ' + error);
        });

        connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ])
        .then(incidents => {
            return response.json(incidents);
        }).catch(error => {
            console.log('IncidentIndex => ' + error);
        });
    },

    create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        }).then(res => {
            const [id] = res;
            return response.json({ id });
        }).catch(error => {
            console.log('IncidentsCreate => ' + error);
        });
    },

    delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        connection('incidents').where('id', id).select('ong_id').first().then(selectRes => {
            if (selectRes.ong_id !== ong_id) {
                return response.status(401).json({error: 'Operation not permitted'});
            }
            connection('incidents').where('id', id).delete().then(deleteRes => {
                console.log(deleteRes);
                return response.status(204).send();
            }).catch(error => {
                console.log('IncidentDelete => ' + error);
            });
        }).catch(error => {
            console.log('IncidentSelectDelete => ' + error);
            return response.status(404).json({error: "Ong's id not founded"});
        });
    },
}