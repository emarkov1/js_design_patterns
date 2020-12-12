// change behaviour of existing instance
class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  get url() {
    return `${this.ip}:${this.port}`;
  }
}
function aws(server) {
  server.isAws = true;
  server.AwsInfo = function () {
    return `${this.ip} on AWS`;
  };
  return server;
}
function azure(server) {
  server.isAzure = true;
  server.azureOwner = 'dima';
  return server;
}

const server = new Server('323.32132.23', 80);
console.log(aws(server).AwsInfo());
console.log(azure(server).azureOwner);
