//Задача 1

const EMULATED_DELAY_IN_MS = 500;
const EMULATED_DELAY = false;
const VERBOSE_MEMORIZE = false;

function sleep(milliseconds) {
  const e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  if (EMULATED_DELAY) {
    sleep(EMULATED_DELAY_IN_MS);
  }
  return args.reduce((sum, arg) => sum + (+arg), 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, ind) => item === arr2[ind]);
}

function memorize(fn, limit) {
  let memory = [];

  return (...fnArgs) => {
    const memorized = memory.find(item => compareArrays(fnArgs, item.args));
    if (memorized !== undefined) {
      if (VERBOSE_MEMORIZE) {
        console.log('Результат берётся из памяти');
      }
      return memorized.result;
    }
    const fnResult = fn(...fnArgs);
    if (VERBOSE_MEMORIZE) {
      console.log('Результат берётся не из памяти');
    }
    memory.push({ args: fnArgs, result: fnResult });
    if (memory.length > limit) {
      if (VERBOSE_MEMORIZE) {
        console.log('Удаляем результат из памяти');
      }
      memory.shift();
    }
    return fnResult;
  };
}

function testCase(testFunction, timerName) {
  const testArgs = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
  console.time(timerName);
  for (let i = 0; i < 10; i++) {
    testArgs.forEach(item => testFunction(...item));
  }
  console.timeEnd(timerName);
}

testCase(sum, 'sum');

const memorizedSum = memorize(sum, 5);
testCase(memorizedSum, 'memorizedSum');

/*
С использованием sleep (каждый вызов функции 500ms+):
  sum: 25051.285888671875ms
    функция sum() была вызвана 25000 / 500 = 50 раз
  memorizedSum: 1502.60595703125ms
    функция sum() была вызвана 1500 / 500 = 3 раза

Без использование sleep'a
  sum: 0.598876953125ms
  memorizedSum: 1.411865234375ms

Вывод: мемоизацию имеет смысл применять только для функций, которые выполняются длительное время
 */