// задание 1
function getSolutions(a, b, c) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    return { D: D, roots: [x1] };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [x1, x2] };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  let roots = result.roots;
  let rootsCount = roots.length;
  if (rootsCount === 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (rootsCount === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${roots[0]}`);
  } else if (rootsCount === 2) {
    console.log(`Уравнение имеет два корня. X₁ = ${roots[0]}, X₂ = ${roots[1]}`);
  }
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
  return (total / marks.length);
}

function getAverageScore(data) {
  let avgScores = {};
  let totalAvg = 0, subjectCount = 0;

  for (let subject in data) {
    let subjectMarks = data[subject];
    let avgMark = getAverageMark(subjectMarks);
    avgScores[subject] = avgMark;
    totalAvg += avgMark;
    subjectCount++;
  }

  if (subjectCount === 0) {
    return { average: 0 };
  }

  avgScores.average = totalAvg / subjectCount;
  return avgScores;
}

// Задание 3
function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  } else if (secret === 1) {
    return 'Эмильо';
  }
}

function getPersonData(secretData) {
  const firstName = getDecodedValue(secretData.aaa);
  const lastName = getDecodedValue(secretData.bbb);
  return { firstName: firstName, lastName: lastName };
}
