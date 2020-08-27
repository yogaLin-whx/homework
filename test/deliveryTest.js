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

deliveryTest('isRush and deliveryTime is 2',t =>{

  const anOrder={
    deliveryState:'NY',
    placedOn:{
      plusDays:(plusTime) => {
         return plusTime;
      }
    }
  };
  const isRush = true;
  const result = deliveryDate(anOrder,isRush);
  t.is(3,result);
})

deliveryTest('isRush and deliveryTime is 3',t =>{

  const anOrder={
    deliveryState:'ABC',
    placedOn:{
      plusDays:(plusTime) => {
         return plusTime;
      }
    }
  };
  const isRush = true;
  const result = deliveryDate(anOrder,isRush);
  t.is(4,result);
})

deliveryTest('not Rush and deliveryTime is 2',t =>{

  const anOrder={
    deliveryState:'MA',
    placedOn:{
      plusDays:(plusTime) => {
         return plusTime;
      }
    }
  };
  const isRush = false;
  const result = deliveryDate(anOrder,isRush);
  t.is(4,result);
})

deliveryTest('not Rush and deliveryTime is 3',t =>{

  const anOrder={
    deliveryState:'ME',
    placedOn:{
      plusDays:(plusTime) => {
         return plusTime;
      }
    }
  };
  const isRush = false;
  const result = deliveryDate(anOrder,isRush);
  t.is(5,result);
})