const { Router } = require('express');

const Validation = require("./app/Midlewares/Validation")

const ContactController = require('./app/Controllers/ContactController');

const routes = new Router();

routes.get('/', Validation, ContactController.showAll);
routes.get('/contatos',  ContactController.show);
routes.post('/contato', ContactController.store);
routes.put('/contato/:id', ContactController.update);
routes.delete('/contato/:id', ContactController.remove);


module.exports = routes;


/**
 * here are the routes, 
 * I don't know how it's done there in your backend but 
 * I've put here some cool route tips for you to use in the future if you want according to your project
 * Use this routes for your prefference ;D
 */