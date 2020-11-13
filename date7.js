

/**
 * Creates a date formatted month/day/year from a start date and a number of days to adjust that by.
 *      startDate defaults to today if no value is provided.
 * 
 * VARIABLES:
 *      - startDate (optional): A date to start from
 *      - dateAdjustment (required): A whole number of days to add to that date ***REQUIRED TO HAVE THIS INT VAR IN MABL***
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

function mablJavaScriptStep(mablInputs, callback) {
    
    /*
     * Adds a method to all "Date" objects in this scope 
     * @param {integer} days - The number of days to add to the Date
     * @return {Date} - The new Date
     */
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };
    
    /*
     * Formats the date based off of the provided options
     * @param {object {string: string}} option - The options for how to format the date string
     * @return {string}
     */
    Date.prototype.format = function(option) {
        var date = new Date(this.valueOf());
        return date.toLocaleDateString("en-US", option);
    }
    
    // Get a start date from an existing mabl variable named "startDate" and parses it into a Date object
    // If no startDate is provided, use todays date
    let startDate = new Date(mablInputs.variables.user.startDate);
    startDate = (startDate === undefined ? new Date() : startDate);
  
    // Get a number of days to adjust the the date from an existing mabl variable named "dateAdjustment" and converts it from a string to an number
    let dateAdjustment = parseInt(mablInputs.variables.user.dateAdjustment);
    // Adjusts the startDate by the dateAdjustment and saves it as the newDate
    let newDate = startDate.addDays(dateAdjustment);

    // Formatting the date components:
    //     - Formatting Options: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    let month = newDate.format({ month: '2-digit' }); 
    let day = newDate.format({ day: '2-digit' });
    let year = newDate.format({ year: 'numeric' });

    // Format the date how it needs to be output
    let formattedDate = `${month}/${day}/${year}`;

    // Pass the formattedDate back to mabl in format '11/20/2020'
    callback(formattedDate);
}