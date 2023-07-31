const employee = {
    name: "Lynae",
    Address: "2234 west lane, Miami, fl 33157"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {};
    for(const x in employee) {
  
        if(x !== key) {
        newEmployee[x]=employee[x] 
    }
}
    
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}