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



//Задание 3
function checkBirthday(birthdayStr) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerYear = msPerDay * 365;

  const now = Date.now();
  const birthdayDate = new Date(birthdayStr);
  const birthday = +birthdayDate;

  const nowYear = (new Date()).getFullYear();
  const bdayYear = birthdayDate.getFullYear();
  let leapYears = 0;
  // skip current non-finished year in calculations
  for (let year = bdayYear; year < nowYear; year++) {
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
      leapYears++;
    }
  }

  const diff = now - birthday;
  const diffWithoutLeapDays = diff - leapYears * msPerDay;
  const age = Math.trunc(diffWithoutLeapDays / msPerYear);

  return age >= 18;
}