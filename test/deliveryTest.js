const deliveryTest = require('ava');
const {deliveryDate} = require('../src/delivery');

deliveryTest('isRush and deliveryTime is 1',t =>{

  const anOrder={
    deliveryState:'MA',
    placedOn:{
      plusDays:(plusTime) => {
         return plusTime;
      }
    }
  };
  const isRush = true;
  const result = deliveryDate(anOrder,isRush);
  t.is(2,result);
})