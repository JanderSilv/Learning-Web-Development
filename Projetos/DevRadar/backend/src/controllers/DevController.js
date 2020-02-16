const { Router } = require('express');
const axios = require('axios');

const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {

    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    store(req, response) {

        const { github_username, techs, latitude, longitude } = req.body;
        
        axios.get(`https://api.github.com/users/${github_username}`).then(async res => {
            // console.log(res.data);

            let dev = await Dev.findOne({ github_username });

            if (!dev) {

                const { name = login, avatar_url, bio } = res.data;

                const techsArray = parseStringAsArray(techs);
        
                const location = {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                }
        
                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    location,
                    techs: techsArray,
                });

            }
            
    
            return response.json(dev);
        }).catch(error => {
            console.log(error);
        });
    },
}