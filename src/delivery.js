function deliveryDate (anOrder, isRush) {
  if (isRush) {
    console.log
    switch(anOrder.deliveryState){
      case 'MA':
      case 'CT':deliveryTime = 1;break;
      case 'NY':
      case 'NH':deliveryTime = 2;break;
      default:
          deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }else {
    switch(anOrder.deliveryState){
      case 'MA':
      case 'CT':
      case 'NY':deliveryTime = 2;break;
      case 'ME':
      case 'NH':deliveryTime = 3;break;
      default:
          deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};
