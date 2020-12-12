// create one to many dependencies
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs !== observer);
  }

  init(action) {
    this.observers.forEach((obs) => {
      obs.update(action);
    });
  }
}

class Observer {
  constructor(initialValue) {
    this.state = initialValue;
    this.initialState = initialValue;
  }

  update(action) {
    switch (action.type) {
      case 'Increment':
        this.state = ++this.state;
        break;
      case 'Decrement':
        this.state = --this.state;
        break;
      case 'Add':
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
        break;
    }
  }
}

const sub = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(3);
sub.subscribe(obs1);
sub.subscribe(obs2);

console.log(obs1, obs2);
sub.init({ type: 'Increment' });
console.log(obs1, obs2);
sub.init({ type: 'Add', payload: 4 });
console.log(obs1, obs2);
