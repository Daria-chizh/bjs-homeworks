// Задание 1
function parseCount(value) {
  const parsed = parseInt(value);
  if (Number.isNaN(parsed)) {
    throw Error('Невалидное значение');
  }
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (e) {
    return e;
  }
}

//Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error ('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const AREA_PRECISION = 3;

    const p = (this.getPerimeter()) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Math.round(s * (10 ** AREA_PRECISION)) / (10 ** AREA_PRECISION);
  }
}

class WrongTriangle {
  getPerimeter() {
    return 'Ошибка! Неправильный треугольник';
  }

  getArea() {
    return 'Ошибка! Неправильный треугольник';
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(e) {
    return new WrongTriangle();
  }
}