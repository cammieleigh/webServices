const validator = require('../helpers/validate');


const saveGenre = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    ages: 'required|string',
    aisle: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveEmployee = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    role: 'required|string',
    shiftDays: 'required|string',
    shiftBeginTime: 'required|string',
    shiftEndTime: 'required|string',
    lengthOfEmployment: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveGenre,
  saveEmployee
};