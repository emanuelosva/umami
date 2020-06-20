/**
 * @fileoverview Meake a homegenized response
 *
 * @version 1.1
 * @author Emanuel Osorio <emanuelosva@gmail.com>
 *
*/

const STATUS_MESSAGES = {
  '200': 'Ok',
  '201': 'Created',
  '400': 'Invalid data',
  '500': 'Internal server error',
};

exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || STATUS_MESSAGES[statusCode];

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};

exports.error = (req, res, message, status, details) => {
  let statusCode = status || 500;
  let statusMessage = message || STATUS_MESSAGES[statusCode];

  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: statusMessage,
  });
};
