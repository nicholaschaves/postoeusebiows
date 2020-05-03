// @ts-nocheck
/**
 * Arquivo: src/routes/user.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'User'.
 * Data: 04/03/2020
 * Author Nicholas Chaves
 */

const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'User':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/insertUser
router.post('/user/insertUser', userController.createUser);

// ==> Rota responsável por listar todos os 'user': (GET): localhost:3000/api/user
router.get('/user/findAll', userController.listAllUsers);

// ==> Rota responsável por validar o login do 'User': (POST): localhost:3000/api/login
router.post('/user/login', userController.loginUser);

// ==> Rota responsável por editar 'User': (POST): localhost:3000/api/updateUser
router.post('/user/updateUser', userController.updateUser);

module.exports = router;