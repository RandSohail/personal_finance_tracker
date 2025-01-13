class CustomError extends Error {
  status;

  message;

  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

export default CustomError;