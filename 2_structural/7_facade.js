// you create common class and use it to create instances
class Complaints {
  constructor() {
    this.complaints = [];
  }
  reply(complaint) {}
  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}
class ProductComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Product ${id} ${customer} ${details}`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service ${id} ${customer} ${details}`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    let complaint;
    const id = Date.now();
    if (type === ' service') {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaint();
    }
    return complaint.add({ id, customer, details });
  }
}
const reg = new ComplaintRegistry();
console.log(
  reg.register('John', 'service', 'broken'),
  reg.register('Tom', 'product', 'IDK')
);
