/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    const employeeRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
        };
    return employeeRecord;
};

function createEmployeeRecords([...records]) {
    const employeesArray = records;
    let arrOfEmployeeObjects = [];
    for (const employeeArray of employeesArray) {
        arrOfEmployeeObjects.push(createEmployeeRecord(employeeArray));
    };
    return arrOfEmployeeObjects;
};

function createTimeInEvent(timeStamp) {
    const hour = Number(timeStamp.slice(11));
    const date = timeStamp.slice(0,10);
    const timeInEvent = {
        type: "TimeIn",
        hour: hour,
        date: date,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
};

function createTimeOutEvent(timeStamp) {
    const hour = Number(timeStamp.slice(11));
    const date = timeStamp.slice(0,10);
    const timeOutEvent = {
        type: "TimeOut",
        hour: hour,
        date: date,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
};

function hoursWorkedOnDate(date) {
    for (let i = 0; i<this.timeInEvents.length; i++){
        if (this.timeInEvents[i].date === date){
            let hoursWorked = (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100;
            return hoursWorked;
        };
    };
};

function wagesEarnedOnDate(date){
    const payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour;
    return payOwed;
};

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};

function findEmployeeByFirstName(employeeRecords, firstName){
    for (const employeeRecord of employeeRecords) {
        if (employeeRecord.firstName === firstName){
            return employeeRecord;
        };
    };
    return undefined; 
};

function calculatePayroll(arrOfEmpObjects){
    let payroll = 0;
    for (const empObject of arrOfEmpObjects){
       payroll += allWagesFor.call(empObject);
    };
    return payroll;
};