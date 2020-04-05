// Задание 1
class Weapon {

  static mergeProperties(defaultProps, inputProps) {
    if (inputProps === undefined) {
      return defaultProps;
    }

    let properties = {};
    const propertiesNames = ['name', 'attack', 'durability', 'range'];
    for (const prop of propertiesNames) {
      if (inputProps[prop] === undefined) {
        properties[prop] = defaultProps[prop];
      } else {
        properties[prop] = inputProps[prop];
      }
    }
    return properties;
  }

  constructor(properties) {
    this.name = properties.name;
    this.attack = properties.attack;
    this.durability = properties.durability;
    this.initialDurability = properties.durability;
    this.range = properties. range;
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability === 0) {
      return 0;
    }

    if (this.durability >= 0.3 * this.initialDurability) {
      return this.attack;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const bow = new Weapon ({ name: 'Лук', attack: 10, durability: 200, range: 3 });
const hand = new Weapon({ name: 'Рука', attack: 1, durability: Infinity, range: 1 });
const sword = new Weapon ({ name: 'Меч', attack: 25, durability: 500, range: 1 });
const knife = new Weapon ({ name: 'Нож', attack: 5, durability: 300, range: 1 });
const staff = new Weapon ({ name: 'Посох', attack: 8, durability: 300, range: 2 });

const longBow = new Weapon ({ name: 'Длинный лук', attack: 15, durability: bow.initialDurability, range: 4 });
const axe = new Weapon ({ name: 'Секира', attack: 27, durability: 800, range: sword.range });
const staffOfThunder = new Weapon ({ name: 'Посох Бури', attack: 10, durability: staff.initialDurability, range: 3 });

// Задание 2
class Bow extends Weapon {
  constructor(inputProps) {
    const defaultProps = { name: 'Лук', attack: 10, durability: 200, range: 3 };
    const properties = Weapon.mergeProperties(defaultProps, inputProps);
    super(properties);
  }
}

class Arm extends Weapon {
  constructor(inputProps) {
    const defaultProps = { name: 'Рука', attack: 1, durability: Infinity, range: 1 };
    const properties = Weapon.mergeProperties(defaultProps, inputProps);
    super(properties);
  }
}

class Sword extends Weapon {
  constructor(inputProps) {
    const defaultProps = { name: 'Меч', attack: 25, durability: 500, range: 1 };
    const properties = Weapon.mergeProperties(defaultProps, inputProps);
    super(properties);
  }
}

class Knife extends Weapon {
  constructor(inputProps) {
    const defaultProps = { name: 'Нож', attack: 5, durability: 300, range: 1 };
    const properties = Weapon.mergeProperties(defaultProps, inputProps);
    super(properties);
  }
}

class Staff extends Weapon {
  constructor(inputProps) {
    const defaultProps = { name: 'Посох', attack: 8, durability: 300, range: 2 };
    const properties = Weapon.mergeProperties(defaultProps, inputProps);
    super(properties);
  }
}

class LongBow extends Bow {
  constructor() {
    super({ name: 'Длинный лук', attack: 15, range: 4 })
  }
}

class Axe extends Sword {
  constructor() {
    super({ name: 'Секира', attack: 27, durability: 800 })
  }
}

class StormStaff extends Staff {
  constructor() {
    super({ name: 'Посох Бури', attack: 10, range: 3 })
  }
}

// Задача 3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade < 1 || grade > 5) {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      if (this.marks[subject] === undefined) {
        return 0;
      }
      return this.marks[subject].length;
    }

    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(grade);
    return this.marks[subject].length;
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      return 0;
    }

    const marks = this.marks[subject];
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }

    return total / marks.length;
  }

  getTotalAverage() {
    let totalAvg = 0, subjectCount = 0;

    for (const subject in this.marks) {
      const avgMark = this.getAverageBySubject(subject);
      totalAvg += avgMark;
      subjectCount++;
    }

    if (subjectCount === 0) {
      return { average: 0 };
    }

    return totalAvg / subjectCount;
  }
}


