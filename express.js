const express = require('express');
const app = express();
const port = 3000;

const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');


app.get('/mean', function (req, res, next) {
     // if the user didn't pass in a query key of nums, throw an error
     if (!req.query.nums) {
          throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
     }

     let numsAsStrings = req.query.nums.split(',');

     // try to convert the array of strings to an array of numbers
     let nums = convertAndValidateNumsArray(numsAsStrings);

     // if the array is not valid, our helper function will return an error.
     if (nums instanceof Error) {
          throw new ExpressError(nums.message);
     }

     // if the array is valid, return the mean
     let result = {
          operation: "mean",
          result: findMean(nums)
     }
     return res.send(result);
})


app.get('/median', function (req, res, next) {
     // if the user didn't pass in a query key of nums, throw an error
     if (!req.query.nums) {
          throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
     }

     let numsAsStrings = req.query.nums.split(',');

     // try to convert the array of strings to an array of numbers
     let nums = convertAndValidateNumsArray(numsAsStrings);

     // if the array is not valid, our helper function will return an error.
     if (nums instanceof Error) {
          throw new ExpressError(nums.message);
     }

     // if the array is valid, return the median
     let result = {
          operation: "median",
          result: findMedian(nums)
     }
     return res.send(result);
})


app.get('/mode', function (req, res, next) {
     // if the user didn't pass in a query key of nums, throw an error
     if (!req.query.nums) {
          throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
     }

     let numsAsStrings = req.query.nums.split(',');

     // try to convert the array of strings to an array of numbers
     let nums = convertAndValidateNumsArray(numsAsStrings);

     // if the array is not valid, our helper function will return an error.
     if (nums instanceof Error) {
          throw new ExpressError(nums.message);
     }

     // if the array is valid, return the mode
     let result = {
          operation: "mode",
          result: findMode(nums)
     }
     return res.send(result);
})


// General error handler: This is a catch-all route if the user requests a route that doesn't exist.

app.use(function (req, res, next) {
     const err = new ExpressError("Not Found", 404);

     // pass the error to the next piece of middleware
     return next(err);
});

app.use(function (err, req, res, next) {
     // the default status is 500 Internal Server Error
     let status = err.status || 500;

     // set the status and alert the user
     return res.status(status).json({
          error: {
               message: err.message,
               status: status
          }
     });
});

app.listen(port, function () {
     console.log(`Server is listening on port ${port}`);
});