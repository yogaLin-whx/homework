function printOwing (invoice) {
  let outstanding = 0;
  let print = '***********************\n'+
              '**** Customer Owes ****\n'+
              '***********************';
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  print += `name: ${invoice.customer}\n`;
  print += `amount: ${outstanding}\n`;
  print += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
  console.log(print);
  return print;
}

module.exports = {
  printOwing
};
