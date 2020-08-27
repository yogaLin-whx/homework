const employeeTest = require('ava');
const {Employee} = require('../src/employee');

employeeTest('testValidateTypeIfTypeIsContain',t => {
  let employee = new Employee('chris','engineer');
  t.is(employee.validateType('engineer'),'')
})