// export const LOGGER_COLORS = {
//   error: 'red',
//   warn: 'yellow',
//   info: 'green',
//   http: 'cyan',
//   debug: 'gray',
// };

// export const LOGGER_LEVELS = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   debug: 4,
// };
export const messages = {
  UserNotExist: "User Not Exist",
  userIdNotExist: "UserId is required",
  AccountNoUserID: "Account does not exist for this userId"
}
export const httpStatus = {
  UNAUTHORIZED: 401,
  CREATED: 201,
  FORBIDDEN: 403,
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  REDIRECT: 302,
};

export const errorResponse = {
  CLIENT: 'PAGE NOT FOUND',
  SERVER: 'INTERNAL SERVER ERROR',
};