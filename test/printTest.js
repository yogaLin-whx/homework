const printTest = require('ava');
const {printOwing} = require('../src/print');


printTest('printText',t =>{

  let invoice={
    customer:'chris',
    borderSpacing:[{
      amount:1
    },{
      amount:2
    }]
  }
  const result = printOwing(invoice);

  t.is(result,'***********************\n'+
              '**** Customer Owes ****\n'+
              '***********************'+
              'name: chris\n'+
              'amount: 3\n'+
              'amount: 9/26/2020\n');
})
