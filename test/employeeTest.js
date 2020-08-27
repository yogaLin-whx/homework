const employeeTest = require('ava');
const {Employee} = require('../src/employee');

employeeTest('testValidateTypeIfTypeIsNotContain',t => {
  let employee = new Employee('chris','engineer');

  try{
    const result = employee.validateType('A');
    t.fail();
  }catch(e){
    t.is(e.message, 'Employee cannot be of type A');
  }
})

employeeTest('toString',t => {
  let employee = new Employee('chris','engineer');
  t.is(employee.toString(),'chris (engineer)')
})