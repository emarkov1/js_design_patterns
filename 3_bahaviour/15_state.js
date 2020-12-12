class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super('red');
  }
  sign() {
    return 'stop';
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow');
  }
  sign() {
    return 'wait';
  }
}

class GreenLight extends Light {
  constructor() {
    super('green');
  }
  sign() {
    return 'go';
  }
}

class TrafficLights {
  constructor() {
    this.states = [new GreenLight(), new YellowLight(), new RedLight()];
    this.current = this.states[0];
  }

  change() {
    const total = this.states.length;
    let idx = this.states.findIndex((light) => light === this.current);

    if (idx + 1 < total) {
      this.current = this.states[idx + 1];
    } else {
      this.current = this.states[0];
    }
  }
  sign() {
    return this.current.sign();
  }
}

const traffic = new TrafficLights();

console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());

traffic.change();
console.log(traffic.sign());
