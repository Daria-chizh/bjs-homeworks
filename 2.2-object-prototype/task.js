//Задание 1
function getAnimalSound(animal) {
  if (animal === undefined) {
    return null;
  }

  const sound = animal.sound;
  return sound;
}

// Задание 2
function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  const average = total / marks.length;
  const roundedAverage = Math.round(average);
  return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}