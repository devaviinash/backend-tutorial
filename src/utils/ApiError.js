class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
