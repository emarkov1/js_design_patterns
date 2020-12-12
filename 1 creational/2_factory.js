class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.price = 50;
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.price = 200;
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.price = 500;
  }
}

class Factory {
  simple = SimpleMembership;
  standard = StandardMembership;
  premium = PremiumMembership;
  create(name, type) {
    const Membership = this[type];
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(`${this.name}, ${this.type}, ${this.price}`);
    };
    return member;
  }
}

const factory = new Factory();
const members = [
  factory.create('max', 'simple'),
  factory.create('john', 'standard'),
];
members.forEach((m) => m.define());
