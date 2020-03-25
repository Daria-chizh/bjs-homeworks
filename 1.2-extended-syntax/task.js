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
  if (marks.length === 0) {
    return 0;
  }

  if (marks.length > 5) {
    console.log('Количество оценок больше 5');
    marks.splice(5);
  }

  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
   sum += marks[i];
  }

  return (sum / marks.length);
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}