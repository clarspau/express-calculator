// Creates a frequency counter object from an array, counting occurrences of each element.

function createFrequencyCounter(arr) {
     return arr.reduce(function (acc, next) {
          acc[next] = (acc[next] || 0) + 1;
          return acc;
     }, {});
}


// Finds the mode(most common element) in the given array.

function findMode(arr) {
     // Create a frequency counter object for the input array.
     let freqCounter = createFrequencyCounter(arr);

     // Initialize variables to track the current count and most frequent element.
     let count = 0;
     let mostFrequent;

     // Iterate through the frequency counter to find the most frequent element.
     for (let key in freqCounter) {
          if (freqCounter[key] > count) {
               mostFrequent = key;
               count = freqCounter[key];
          }
     }
     // Convert the most frequent element to a number and return it.
     return +mostFrequent;
}


// Attempts to convert an array of strings to an array of numbers.

function convertAndValidateNumsArray(numsAsStrings) {
     let result = [];

     // Iterate through each string in the array and attempt conversion to a number.
     for (let i = 0; i < numsAsStrings.length; i++) {
          // Convert the current string to a number.
          let valToNumber = Number(numsAsStrings[i]);

          // Check if the conversion resulted in NaN (not a number).
          if (Number.isNaN(valToNumber)) {
               return new Error(
                    `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
               );
          }
          // If the conversion was successful, push to the result array.
          result.push(valToNumber);
     }
     return result;
}


// Finds the mean of the given array of numbers.

function findMean(nums) {
     if (nums.length === 0) return 0;

     // Use the reduce method to sum the array of numbers.
     return nums.reduce(function (acc, currentValue) {
          return acc + currentValue;
     }) / nums.length; // Divide the sum by the number of elements in the array.
}


// Finds the median of the given array of numbers.

function findMedian(nums) {
     // First we must sort the array.
     nums.sort((a, b) => a - b);

     // Find the middle index.
     let middleIndex = Math.floor(nums.length / 2);
     let median;

     // If the array has an odd number of elements, return the element at the middle index.
     if (nums.length % 2 !== 0) {
          median = nums[middleIndex];
     } else {
          // If the array has an even number of elements, average the two elements at the middle.
          median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
     }
     return median;
}


module.exports = {
     createFrequencyCounter,
     findMean,
     findMedian,
     findMode,
     convertAndValidateNumsArray
};