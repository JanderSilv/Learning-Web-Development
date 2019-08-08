const Dev = require('../models/Dev');

module.exports = {
   async store(req, res) {

        const {user} = req.headers;
        const {devId} = req.params;

        // Puxando as informações dos usuário no BD
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) { // Se o usúario não existe
            return res.status(400).json({error: 'Dev not exists'}); // bad request
        }

        return res.json({ ok: true});
    }
};