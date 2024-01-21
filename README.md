# Express Calculator

This exercise is to build an Express.js application performs three statistical operations (mean, median, and mode) given an arbitrary set of numbers. The operations are invoked via one route per operation.

## Requirements

### Base Routes

* **/mean** : Calculates the mean (average) of a set of numbers.
* **/median** : Finds the median (midpoint) of a set of numbers.
* **/mode** : Determines the mode (most frequent) of a set of numbers.

All routes accept GET requests and require a query key,  **nums** , which is a comma-separated list of numbers. For example, to get the mean of 1, 3, 5, and 7, make a GET request to  **/mean?nums=1,3,5,7** .

### Response Format

The response for each operation should be in JSON format, as follows:

```
{
  "operation": "mean",
  "value": 4
}
```

## Error Handling

The app should "gracefully" handle the following errors:

* Invalid numbers (NaN errors): If an invalid number is passed (e.g.,  **/mean?nums=foo,2,3** ), respond with a **400 Bad Request** status code and a message like: " *foo is not a number.* "
* Empty input: If no **nums** are provided (e.g., **/mean** without passing any numbers), respond with a **400 Bad Request** status code and a message like: " *nums are required.* "

## Running the App

1. Install dependencies: `npm install`
2. Start the server: `npm start`


## Testing

Ensure unit tests cover the functionality of  **mean** ,  **median** , and  **mode** . Use the following command to run tests:

Testing
Ensure unit tests cover the functionality of mean, median, and mode. Use the following command to run tests:

bash
Copy code
jest helpers.test.js
Feel free to explore and utilize this Express app for statistical calculations.

```
jest helpers.test.js
```

Feel free to explore and utilize this Express app for statistical calculations.
