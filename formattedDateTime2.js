/**
 * Run a small snippet of JavaScript during a mabl flow/journey
 *
 * @param {object} mablInputs - Object containing mabl inputs such as variables (mablInputs.variables).
 *                              Use mablInputs.variables.user for user defined variables
 *                              (For example myVar may be accessed as mablInputs.variables.user.myVar)
 *
 * @param {function} callback - A callback function that must be called to complete
 *                              the javascript step and provide a value to the following
 *                              steps of the flow/journey. A return statement from this
 *                              function call will not provide any results for use
 *                              in the following steps in this flow or journey.
 */
/**
 * Creating a data/time variable. 
 * @param {object} - mablInputs Object containing input
 *                   variables (mablInputs.variables.user)
 * @param {function} callback - The callback function
 */
function mablJavaScriptStep(mablInputs, callback) {
  // create a new Date object
  let today = new Date();
  // get the string representation of the date and time
  let currentDateTime = today.toLocaleString();
  
  // format

  var currentDTForm = currentDateTime.replace(",", "").replace(/:[^:]*$/,'');
  
  
  // perform the callback with the result
  callback(currentDTForm);
}