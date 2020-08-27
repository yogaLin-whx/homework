class Employee {
  constructor (name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType (type) {
    switch(type){
      case 'engineer' || 'manager' || 'salesman':break;
      default:
        throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString () {
    return `${this._name} (${this._type})`;
  }
}

module.exports = {
  Employee
};
