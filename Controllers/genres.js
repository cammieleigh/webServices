const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('genres').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

  const createGenre = async (req, res) => {
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
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid genre id to update a genre.');
    }
    const userId = new ObjectId(req.params.id);
    const updatedGenre = {
      name: req.body.name,
      ages: req.body.ages,
      aisle: req.body.aisle,
    }
    const response = await mongodb.getDb().db().collection('genres').replaceOne({ _id: userId }, updatedGenre);
    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  }
  
  const deleteGenre = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid genre id to delete a genre.');
    }
    const userId = new ObjectId(req.params.id);
      const response = await mongodb
        .getDb()
        .db()
        .collection('genres')
        .deleteOne({ _id: userId }, true);
        if (response.acknowledged) {
          res.status(200).json(response);
        } else {
          res.status(500).json(response.error || 'Some error occurred while updating the contact.');
        }
  }

  module.exports = { getAll, createGenre, updateGenre, deleteGenre};