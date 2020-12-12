// just template not a functional

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  responsibilities() {}
  work() {
    return `${this.name} work on ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} has salary ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return `writing code`;
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return `testing code`;
  }
}

const dev = new Developer('john', 100);
console.log(dev.getPaid(), dev.work());

const tester = new Tester('Clara', 80);
console.log(tester.getPaid(), tester.work());
