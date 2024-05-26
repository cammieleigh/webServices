const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('genres').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  const createGenre = async (req, res, next) => {
    const genre = {
      name: req.body.name,
      ages: req.body.ages,
      aisle: req.body.aisle,
    }

    const response = await mongodb.getDb().db().collection('genres').insertOne(genre);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
  }

  const getSingle = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('genres').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }

  const updateGenre = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('genres').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }

  const deleteGenre = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('genres').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }

  module.exports = { getAll, createGenre};