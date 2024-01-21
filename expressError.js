// Custom Error class for handling Express-related errors. Extends the native Error class.

class ExpressError extends Error {
     constructor(msg, status) {
          super();
          this.msg = msg;
          this.status = status;

          // Log the error stack trace for debugging purposes.
          console.error(this.stack);
     }
}

module.exports = ExpressError;