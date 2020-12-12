// add users to the chat
class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }
  send(message, to) {
    this.room.send(message, this, to);
  }
  receive(message, from) {
    console.log(`from ${from.name} => ${this.name} : ${message}`);
  }
}
class ChatRoom {
  constructor() {
    this.users = {};
  }
  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }
  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((user) => {
        if (this.users[user] !== from) {
          this.users[user].receive(message, from);
        }
      });
    }
  }
}

const john = new User('john');
const lena = new User('lena');
const george = new User('george');

const room = new ChatRoom();

room.register(john);
room.register(lena);
room.register(george);

john.send('hello', lena);
george.send('hi everyone');
