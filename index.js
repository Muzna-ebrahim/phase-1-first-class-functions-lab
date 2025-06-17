// Code your solution in this file!
const returnFirstTwoDrivers=function (drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ] ; 
selectingDrivers[0](drivers);
selectingDrivers[1](drivers);

function createFareMultiplier (multiplier) {
    return function (fare) {
       return fare * multiplier;
    };
};
createFareMultiplier(2);

function fareDoubler (doubles) {
    return createFareMultiplier(2) (doubles);
}
console.log(fareDoubler(5));

function fareTripler (triples) {
    return createFareMultiplier(3) (triples);
}
console.log(fareTripler(5));

function  selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn (arrayOfDrivers);
}

