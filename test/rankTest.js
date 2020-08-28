const rankTest = require('ava');
const { rating } = require('../src/rank')

rankTest('rank case1:voyage length is 10 and history has a zone', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const res = rating(voyage, history);
  t.is(res, 'B')
});