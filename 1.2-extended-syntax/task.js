function getResult(a, b, c){
  "use strict";
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let x1 = -b / 2 * a;
    return [x1];
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / 2 * a;
    let x2 = (-b - Math.sqrt(discriminant)) / 2 * a;
    return [x1, x2];
  }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}