const returnFirstTwoDrivers = function (
  names = ["Antonia", "Nuru", "Amari", "Mo"]
) {
  return ["Antonia", "Nuru"];
};
console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = function (
  names = ["Antonia", "Nuru", "Amari", "Mo"]
) {
  return ["Amari", "Mo"];
};
console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);


const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
};
const fareDoubler = function (createFareMultiplier) {
  return createFareMultiplier * 2;
};

const fareTripler = function (createFareMultiplier) {
  return createFareMultiplier * 3;
};

const selectDifferentDrivers = function (drivers, driverSelector) {
  return driverSelector(drivers);
};