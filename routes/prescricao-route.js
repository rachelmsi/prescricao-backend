const express = require('express');
const router = express.Router();

const prescricao_controller = require('../controllers/prescricao-controller');

//Test 
router.get('/test', prescricao_controller.test);

//Criar prescricao
router.post('/criar-prescricao', prescricao_controller.prescricao_criar);

//Ler prescricao
router.get('/:id', prescricao_controller.prescricao_detalhes);

//Update prescricao
router.put('/:id/update', prescricao_controller.prescricao_update);

//Delete prescricao
router.delete('/:id/delete', prescricao_controller.prescricao_delete);

module.exports = router;

