// Code your solution here
function findMatching(array, string) {
    const matchingList = array.filter((driver) => (driver.toUpperCase() === string.toUpperCase()));

    return matchingList
}

function fuzzyMatch(array, name) {
    const match = array.filter((comp) => (comp.charAt() === name.charAt()));
    return match;
}

// function matchName(array, name) {
//     const match = array.filter((driver) => (driver.length() === name.length()))
//     return match
// }

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}