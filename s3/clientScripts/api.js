/*jshint esversion: 8*/

/**
 * postClassTimes sends a POST request to get the schedules.
 * @param {Object} params : An object containing the following keys:
 *                           * courses: a list of course names
 *                           * days: a string containing one or more days of the week ("M", "T", "W", "R", "F")
 *                           * startTime: a number representing the start time in 24-hour format.
 *                           * endTime: a number representing the end time in 24-hour format.
 *                           * campus: a array containing strings representing the campus to do the search on, e.g. ["MN"] for Main.
 * @returns {Array} an array containing all the schedules.
 */
async function postClassTimes(params) {
    let courses = params.courses || [];
    let days = params.days || "MTWRF";
    let startTime = params.startTime || 0;
    let endTime = params.endTime || 2359;
    let campus = params.campus || ["MN"];

    let reqBody = JSON.stringify({
        courses: courses,
        days: days,
        startTime: startTime,
        endtime: endTime,
        campus: campus
    });

    console.log(`Sending POST with body ${reqBody}`);

    var response = await fetch('https://m9uqnix64d.execute-api.us-east-2.amazonaws.com/dev', {
       method: 'post',
       headers: {
           'Accept': 'application/json'
        },
        body: reqBody
    });

    var results = await response.json();

    return results;
}

async function getClasses() {
    let response = await $.getJSON("classes.json");

    let results = await response;

    let classes = {};
    for(let currClass of results) {
        classes[currClass.name + ': ' + currClass.title] = currClass.name;
    }

    var courseChips = Chips({
        availableTags: classes,
        inputTag: "course-search",
        chipsDiv: "course-chips"
    });

    return courseChips;
}
