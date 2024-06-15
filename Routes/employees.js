const express = require('express');
const router = express.Router();
const employeesController = require('../Controllers employees');
const validation = require('../middleware/validate');
router.get('/', employeesController.getAll);

//router.get('/:id', genresController.getSingle);

router.post('/', validation.saveEmployee, employeesController.createEmployee);

router.put('/:id', validation.saveEmployee, employeesController.updateEmployee);

router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;