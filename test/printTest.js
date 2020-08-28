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
  const today = new Date();
  t.is(result,'***********************\n'+
              '**** Customer Owes ****\n'+
              '***********************'+
              'name: chris\n'+
              'amount: 3\n'+
              'amount: '+ new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString() +'\n');
})
