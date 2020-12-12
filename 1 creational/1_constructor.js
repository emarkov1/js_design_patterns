// function Server(name, id) {
//   this.name = name;
//   this.id = id;
// }
// Server.prototype.getUrl = function () {
//   return `${this.id}:80`;
// };

class Server {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  getUrl() {
    return `${this.id}:80`;
  }
}

const aws = new Server('aws', 'dfssd');
console.log(aws.getUrl());
