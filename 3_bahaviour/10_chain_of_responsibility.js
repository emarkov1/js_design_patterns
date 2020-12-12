class MySum {
  constructor(initialValue = 0) {
    this.sum = initialValue;
  }
  add(num) {
    this.sum += num;
    return this;
  }
  showResult() {
    return this.sum;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(4).showResult());
