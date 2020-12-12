// class can have only one instance
// for example MongoDB if you already have a connection we should use existed one

class Database {
  constructor(type) {
    if (Database.exist) {
      return Database.instance;
    }
    Database.exist = true;
    Database.instance = this;
    this.type = type;
  }
  getType() {
    return this.type;
  }
}
console.log(new Database('mongo'), new Database('sql'));
