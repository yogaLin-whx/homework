const employeeTest = require('ava');
const {Employee} = require('../src/employee');

employeeTest('testValidateTypeIfTypeIsContain',t => {
  let employee = new Employee('chris','engineer');
  t.is(employee.validateType('engineer'),'')
})

employeeTest('testValidateTypeIfTypeIsNotContain',t => {
  let employee = new Employee('chris','engineer');

  try{
    const result = employee.validateType('A');
    t.fail();
  }catch(e){A
    t.is(e.message, 'Employee cannot be of type ');
  }
})