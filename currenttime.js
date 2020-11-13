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
function mablJavaScriptStep(mablInputs, callback) {

    var d             = new Date();
    var hour          = d.getHours();  /* Returns the hour (from 0-23) */
    var minutes       = d.getMinutes();  /* Returns the minutes (from 0-59) */
    var currentTime   = hour;
    var ext           = '';
    
        if(hour < 12){
            ext = 'AM';
        }
        if(hour >= 12){
            ext = 'PM';
            hour = (hour - 12);
        }
        if(hour === 0){
            hour = "12";
            ext = 'AM';
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        if(minutes < 10){
        minutes = "0" + minutes; 
        }
    
    
    currentTime = hour + ":" + minutes + ' ' + ext;
    callback(currentTime)
    }