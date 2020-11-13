/**
 * Creating a data/time variable. 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */

 // returns in format '11/13/2020, 4:09:11 PM'
function mablJavaScriptStep(mablInputs, callback) {
  
// create a new Date object
let today = new Date();

// get the string representation of the date and time
let finalDateTime = today.toLocaleString();
  
// perform the callback with the result
callback(finalDateTime);
}