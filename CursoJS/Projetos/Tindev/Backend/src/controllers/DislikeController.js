const Dev = require('../models/Dev');

module.exports = {
   async store(req, res) {

        const {user} = req.headers;
        const {devId} = req.params;

        // Puxando as informações dos usuários no BD
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) { // Se o usúario não existe
            return res.status(400).json({error: 'Dev not exists'}); // bad request
        }

        // Pega o desenvolvedor que está logado na aplicação e pegar informação de like em um vetor de ID
        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};