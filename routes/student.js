
const express= require('express');
const {allController,allPutControll}= require('../controllers/studentControllers')
const routes= express.Router();

routes.get('/', allController);

routes.put('/', allPutControll);

module.exports= routes;