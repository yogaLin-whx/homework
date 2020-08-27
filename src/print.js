function printOwing (invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  return printOnConsole({customer:invoice.customer,outstanding:outstanding,date:invoice.dueDate.toLocaleDateString()});
}

function printOnConsole(data){
  let print = '***********************\n'+
              '**** Customer Owes ****\n'+
              '***********************';
  print += `name: ${data.customer}\n`;
  print += `amount: ${data.outstanding}\n`;
  print += `amount: ${data.date}\n`;
  console.log(print);
  return print;
}


module.exports = {
  printOwing
};
