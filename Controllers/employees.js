const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('employees').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  const createEmployee = async (req, res) => {
    const employee = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      shiftDays: req.body.shiftDays,
      shiftStartTime: req.body.shiftStartTime,
      shiftEndTime: req.body.shiftEndTime,
      role: req.body.role,
      lengthOfEmployment: req.body.lengthOfEmployment,
    }

    const response = await mongodb.getDb().db().collection('employees').insertOne(employee);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  }

  const getSingle = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('employees').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }

  const updateEmployee = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid genre id to update a genre.');
    }
    const userId = new ObjectId(req.params.id);
    const updatedEmployee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        shiftDays: req.body.shiftDays,
        shiftStartTime: req.body.shiftStartTime,
        shiftEndTime: req.body.shiftEndTime,
        role: req.body.role,
        lengthOfEmployment: req.body.lengthOfEmployment,
    }
    const response = await mongodb.getDb().db().collection('employees').replaceOne({ _id: userId }, updatedEmployee);
    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  }
  
  const deleteEmployee = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid genre id to delete a genre.');
    }
    const userId = new ObjectId(req.params.id);
      const response = await mongodb
        .getDb()
        .db()
        .collection('employees')
        .deleteOne({ _id: userId }, true);
        if (response.acknowledged) {
          res.status(200).json(response);
        } else {
          res.status(500).json(response.error || 'Some error occurred while updating the contact.');
        }
  }

  module.exports = { getAll, createEmployee, updateEmployee, deleteEmployee};