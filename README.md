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

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span><br class="Apple-interchange-newline"/>json</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json">{
  "operation": "mean",
  "value": 4
}
</code></div></div></pre>

### Error Handling

The app should "gracefully" handle the following errors:

* Invalid numbers (NaN errors): If an invalid number is passed (e.g.,  **/mean?nums=foo,2,3** ), respond with a **400 Bad Request** status code and a message like: " *foo is not a number.* "
* Empty input: If no **nums** are provided (e.g., **/mean** without passing any numbers), respond with a **400 Bad Request** status code and a message like: " *nums are required.* "

## Running the App

1. Install dependencies: `npm install`
2. Start the server: `npm start`


## Testing

Ensure unit tests cover the functionality of  **mean** ,  **median** , and  **mode** . Use the following command to run tests:

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">jest helpers.test.js
</code></div></div></pre>

Feel free to explore and utilize this Express app for statistical calculations.
