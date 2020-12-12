// when you wanna move to a new version of the app
class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'sum':
        return t1 + t2;
      case 'sub':
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }
  sub(t1, t2) {
    return t1 - t2;
  }
}

class calcAdapter extends NewCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'sum':
        return this.add(t1, t2);
      case 'sub':
        return this.sub(t1, t2);
      default:
        return NaN;
    }
  }
}
const old = new OldCalc();
console.log(old.operations(1, 3, 'sum'));

const newOne = new NewCalc();
console.log(newOne.sub(3, 1));

const adapter = new calcAdapter();
console.log(adapter.operations(3, 1, 'sum'));
console.log(adapter.add(3, 1));
