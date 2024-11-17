import { httpStatus, errorResponse } from '../../helpers/constants.js';

const notFound = (_request, response) => {
  response
    .status(httpStatus.BAD_REQUEST)
    .json({ message: errorResponse.CLIENT });
};


const serverError = (error, _request, response, _next) => {
  console.log("SERVER ERROR ");
  response
    .status(error.status || httpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: error.message ? error.message : errorResponse.SERVER });
};

export { notFound, serverError };