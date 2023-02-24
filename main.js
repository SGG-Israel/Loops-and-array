function ex1() {
  let a = +prompt("Please enter a first number");
  let b = +prompt("Please enter a second number");
  if (a === b) {
    alert("BOOM");
  } else {
    alert("TRY AGAIN");
  }
}
// Ex.2
function ex2() {
  let c = +prompt("Please enter a number 4");
  let d = "You";
  let sum = c + d;
  alert(`This flowers ${sum}`);
}
// Ex.3
function ex3() {
  let e = +prompt("Please enter a first number");
  let f = +prompt("Please enter a second number");
  alert("First number * second number = " + e * f);
}
// Ex.4
function ex4() {
  let h = +prompt("Please enter a first number");
  let j = +prompt("Please enter a second number");

  if (h > j) {
    alert(`${h} is more than ${j}`);
  } else if (j > h) {
    alert(`${j} is more than ${h}`);
  } else {
    alert(`${h} and ${j} is equal`);
  }
}
// Ex.5
function ex5() {
  let i = +prompt("Please enter a number of the day of the week");
  if (i == 1) {
    alert("goodweek");
  } else if (i == 2 || i == 3 || i == 4) {
    alert("good day");
  } else if (i == 5 || i == 6 || i == 7) {
    alert("happy weekend");
  } else {
    alert("i должно быть равно от 1 до 7");
  }
}
// Exs. 5.1
/*var day = prompt("Enter a day of the week (1 for Sunday, 2 for Monday, 7 for Saturday): ");

 switch (day) {
   case "1":
     console.log("Good week!");
     break;
   case "2":
   case "3":
   case "4":
     console.log("Good day!");
     break;
   case "5":
   case "6":
   case "7":
     console.log("Happy weekend!");
     break;
   default:
     console.log("Invalid input. Please enter a number between 1 and 7.");
     break;
 }*/

function ex6() {
  let k = prompt("Введите ваше имя");
  let l = prompt("Пожалуйста введите пароль");

  if (k === "admin" && l === "123") {
    alert("Доступ разрешён с правами администратора");
    document.body.style.backgroundColor = "#75ff7c";
  } else if (k !== "admin" && l.length >= 6) {
    alert(`${k} вы входите как обычный юзер`);
    document.body.style.backgroundColor = "#87cff8";
  } else if (k !== "admin" && l.length < 6) {
    document.body.style.backgroundColor = "#e5a2a2";
    alert(`${k} введите пароль не менее шести символов`);
  } else if (k === "admin" && l !== "123") {
    alert(
      `Имя admin только для служебного пользования, используйте другое имя`
    );
    document.body.style.backgroundColor = "#e5a2a2";
  }
}

function ex7() {
  let firstSide = +prompt("Первая сторона четырёхугольника равна");
  let secondSide = +prompt("Вторая сторона четырёхугольника равна");
  let square = firstSide * secondSide;
  if (firstSide == secondSide) {
    alert(`Площадь квадрата равна ${square}`);
  } else {
    alert(`Площадь прямоугольника равна ${square}`);
  }
}

function ex8() {
  const yourBYear = +prompt("Введите год вашего рождения ( 4 цифры) ");
  const questuon = prompt(
    "В этом году вы уже праздновали день рождения? yes / no"
  );
  const today = new Date();
  const year = today.getFullYear();
  const youAge = year - yourBYear;
  if (questuon == "yes") {
    alert(`Ваш возраст: ${youAge}`);
  } else {
    alert("Ваш возраст: " + (youAge - 1));
  }
}

function ex9() {
  let firstPlayer = prompt("Ведите имя первого игрока");
  let scoreFirstPlayer = +prompt("Ведите количество баллов первого игрока");
  let secondPlayer = prompt("Ведите имя второго игрока");
  let scoreSecondPlayer = +prompt("Ведите количество баллов второго игрока");
  if (scoreFirstPlayer > scoreSecondPlayer) {
    alert(`Наш победитель ${firstPlayer} набрал ${scoreFirstPlayer} баллов`);
  } else if (scoreFirstPlayer == scoreSecondPlayer) {
    alert(
      `Ничья: ${firstPlayer} и ${secondPlayer} набрали по ${scoreFirstPlayer} баллов`
    );
  } else {
    alert(`Наш победитель ${secondPlayer} набрал ${scoreSecondPlayer} баллов`);
  }
}
// Ex. 10 --------------------
function ex10() {
  let number1 = +prompt("Ведите первое число");
  let number2 = +prompt("Ведите второе число");
  let number3 = +prompt("Ведите третье число");
  let number4 = +prompt("Ведите червёртое число");
  let number5 = +prompt("Ведите пятое число");
  let number6 = +prompt("Ведите шестое число");
  let number7 = +prompt("Ведите седьмое число");
  let sum7 =
    number1 + number2 + number3 + number4 + number5 + number6 + number7;
  alert("Cреднее арифметическое из 7 чисел ~ " + Math.ceil(sum7 / 7));
}

// ----------  Ex.11 ---------------
function ex11() {
  let num1 = +prompt("Введите любое число");
  if (num1 % 2 === 0) {
    alert(`Число ${num1} чётное`);
  } else {
    alert(`Число ${num1} нечётное`);
  }
}
// ---------- Ex.12 ----------------
function ex12() {
  const averageNumber = [];
  for (let number = 0; number < 7; number++) {
    const numbers = +prompt("Введите число");
    averageNumber.push(numbers);
  }
  let averageNumberLengh = averageNumber.length;
  function avrage(averageNumber) {
    let sum = 0;
    averageNumber.forEach(function (item) {
      sum += item;
    });
    return Number(sum);
  }
  alert(
    ` Количество введённых символов =   ${averageNumberLengh}\n Введённые номера:  ${averageNumber}\n Среднее арифметическое равно = ${Math.ceil(
      avrage(averageNumber) / averageNumberLengh
    )}`
  );
}
// --------- Ex.13 -----------------
function ex13() {
  let students = +prompt("Enter the number of students on the excursion");
  let security = Math.ceil(students / 30);
  let firstAidKit = Math.ceil(students / 50);
  let medic = Math.ceil(students / 100);
  alert(
    `For the tour you need: \n ${security} - Security; \n ${firstAidKit} - First Aid Kit; \n ${medic} - Medic.`
  );
}

function ex13_1() {
  let students = +prompt("Enter the number of students on the excursion");
  let security = 0;
  let firstAidKit = 0;
  let medic = 0;
  let students1 = students;
  let students2 = students;
  let students3 = students;

  for (i = 0; i < students; i++) {
    if (students1 > 0) {
      students1 -= 30;
      security++;
    } else if (students2 > 0) {
      students2 -= 50;
      firstAidKit++;
    } else if (students3 > 0) {
      students3 -= 100;
      medic++;
    }
  }
  alert(
    `For the tour you need: \n ${security} - Security; \n ${firstAidKit} - First Aid Kit; \n ${medic} - Medic.`
  );
}

function ex14() {
  let userInput = +prompt("Please enter minutes");
  let minutes = userInput % 60;
  let hour = (userInput / 60).toFixed();
  alert(`The hour is: ${hour} \n The minutes is: ${minutes}`);
}

function ex15() {
  let carPrice = +prompt("Please enter car price");
  let amountOfPayments = +prompt("Please enter amount of payments");
  if (amountOfPayments > 24) {
    alert("You can take 24 payments only");
  } else {
    let discountCarPrice = carPrice * 0.95;
    let onePaymentValue = discountCarPrice / amountOfPayments;
    alert(
      `Car price after discount is ${discountCarPrice} $ \n The monthly payment will be ${onePaymentValue} $`
    );
  }
}
function ex16() {
  let numberOfWagons = +prompt(
    "Please enter number of wagons in the Jerusalem train"
  );
  let timeOfDay = +prompt(
    "Please enter time of day (number): 1 - morning, 2 - day, 3 - evening"
  );
  let trainDriverSalary = 6.6;
  let maxNumberOfPassengersInOneWagon = 120;
  let vat = 0.83; // 17%
  if (timeOfDay == 1) {
    alert(
      "The morning profit = " +
        Math.ceil(
          trainDriverSalary *
            maxNumberOfPassengersInOneWagon *
            numberOfWagons *
            vat
        ) +
        " $ after payment of VAT =  17%"
    );
  } else if (timeOfDay == 2) {
    alert(
      "The day profit = " +
        Math.ceil(
          trainDriverSalary *
            maxNumberOfPassengersInOneWagon *
            0.9 *
            numberOfWagons *
            vat
        ) +
        " $ after payment of VAT =  17%"
    );
  } else if (timeOfDay == 3) {
    alert(
      "The evening profit = " +
        Math.ceil(
          trainDriverSalary *
            maxNumberOfPassengersInOneWagon *
            0.7 *
            numberOfWagons *
            vat
        ) +
        " $ after payment of VAT =  17%"
    );
  } else {
    alert("Please select time of day");
  }
}

// JavaScript conditional statements and loops - Exercises, Practice, Solution - 12 Ex
function ex101() {
  let h = +prompt("Please enter a first number");
  let j = +prompt("Please enter a second number");

  if (h > j) {
    alert(`${h} is more than ${j}`);
  } else if (j > h) {
    alert(`${j} is more than ${h}`);
  } else {
    alert(`${h} and ${j} is equal`);
  }
}

function ex102() {
  let numberArr = [];
  for (let number = 0; number < 3; number++) {
    const numbers = +prompt("Введите число");
    numberArr.push(numbers);
  }
  let total = 1;
  for (let i = 0; i < numberArr.length; i++) {
    total *= numberArr[i];
  }
  if (total >= 0) {
    alert(`specified sign is ( + )`);
  } else {
    alert(`specified sign is ( - )`);
  }
}

function ex103() {
  let numberSort = [];
  for (let number = 0; number < 3; number++) {
    const numbers = +prompt("Введите число");
    numberSort.push(numbers);
  }
  numberSort.sort(compareNum);
  numberSort.reverse();
  alert(`Сортировка чисел от большего к меньшему: ${numberSort}`);

  function compareNum(a, b) {
    return a - b;
  }
}
function ex104() {
  let numberSort = [];
  for (let number = 0; number < 5; number++) {
    const numbers = +prompt("Введите число");
    numberSort.push(numbers);
  }
  numberSort.sort(compareNum);

  alert(`Наибольшее число из введённых ${numberSort}:  ${numberSort[4]}`);

  function compareNum(a, b) {
    return a - b;
  }
}

function ex105() {
  for (i = 0; i < 15; i++) {
    if (i % 2 == 0) {
      console.log(`${i} - чётное`);
    } else {
      console.log(`${i} - нечётное`);
    }
  }
}
function ex106() {
  let markStudent;
  let gradeTable = "";
  const students = [
    {
      nameStudent: "David",
      mark: 80,
    },
    { nameStudent: "Vinoth", mark: 77 },
    {
      nameStudent: "Divya",
      mark: 88,
    },
    {
      nameStudent: "Ishitha",
      mark: 95,
    },
    {
      nameStudent: "Thomas",
      mark: 68,
    },
  ];
  for (let i = 0; i < students.length; i++) {
    markStudent = students[i].mark;
    if (markStudent <= 100 && markStudent >= 90) {
      students[i].grade = "A";
    } else if (markStudent < 90 && markStudent >= 80) {
      students[i].grade = "B";
    } else if (markStudent < 80 && markStudent >= 70) {
      students[i].grade = "C";
    } else if (markStudent < 70 && markStudent >= 60) {
      students[i].grade = "D";
    } else if (markStudent < 60) {
      students[i].grade = "F";
    }
  }
  for (let j = 0; j < students.length; j++) {
    gradeTable += `${students[j].nameStudent} is grade ${students[j].grade}; \n `;
  }
  alert(gradeTable);
}

function ex107() {
  for (i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}  "FizzBuzz"`);
    } else if (i % 5 === 0) {
      console.log(`${i} "Buzz"`);
    } else if (i % 3 === 0) {
      console.log(`${i} "Fizz"`);
    }
  }
}
function ex108() {
  // let a = prompt(`Введите любое целое число`);
  // let square = 0;
  // a = a.split("");
  // console.log("a :" + a);

  for (let i = 0; i < 5; i++) {
    let b = i.split("");
    square += b[i] ** 2;
    console.log("Counter :" + counter);
  }
  console.log(square);
}

// for (let i = 0; i < a; i++) {
//   square += i * i;
//   console.log(square);
// }

function ex109() {}
//Ex 10
function ex110() {
  let piramide = "";
  const heightPiramide = +prompt("Введите высоту пирамиды (количество рядов");
  for (let i = 0; i <= heightPiramide; i++) {
    for (let j = 0; j < i; j++) {
      piramide += "*";
    }
    piramide += "\n";
  }
  alert(`Получите вашу пирамидку в ${heightPiramide} рядов. \n ${piramide}`);
}
// Ex 11
function ex111() {
  let array = [];
  for (let number = 0; number < 2; number++) {
    const numbers = +prompt("Введите число");
    array.push(numbers);
  }
  x = array[0];
  y = array[1];
  for (i = 0; i < array.length; i++) {
    while (x != y)
      if (x > y) {
        x = x - y;
      } else {
        y = y - x;
      }
  }
  alert(`Наибольший общий делитель чисел ${array[0]} и ${array[1]} = ${x}`);
}
// -----  Ex 12  ------
function ex112() {
  let sum = 0;
  for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

function ex201() {
  let a = [1, 5, 8];
  if (Array.isArray(a)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function ex202() {
  let arr = [2, 5, 8, [10, 15]];
  let newArr = [...arr];
  console.log(arr);
  console.log(newArr);

  // second metod
  /*exercises2 = () => {
  let arr = [1, 2, 3, [4, 5]];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }

  console.log(arr, arr2);
};
exercises2();
*/
}
function ex203() {
  let first = function (array, n) {
    if (array == null) return 0;
    if (n == null) return array[0];
    if (n < 0) return [];
    return array.slice(0, n);
  };

  console.log(first([7, 9, 25, 58], 2));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));
}
function ex204() {
  let last = function (array, n) {
    if (n == null) return array.slice(-1);
    return array.slice(-n);
  };
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2], 3));
  console.log(last([7, 9, 0, -2], 6));
}
function ex205() {
  let string = "";
  let myColor = ["Красный", "Зеленый", "Белый", "Черный"];
  for (i = 0; i < myColor.length; i++) {
    if (i !== myColor.length - 1) {
      string += myColor[i] + ",";
    } else {
      string += myColor[i];
    }
  }
  console.log(string);
  //Metod 2
  // myColor = ["Red", "Green", "White", "Black"];

  // console.log(myColor.toString());
  // console.log(myColor.join());
  // console.log(myColor.join('+'));
}

function ex206() {
  let tel = "";
  let num = prompt(`Введите любое целое число`);
  num = num.split("");
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      tel += num[i] + "-";
    } else {
      tel += num[i];
    }
  }
  alert(tel);
}
function ex207() {
  let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
  let arrSort = arr.slice(); //Метод клонирования массива
  arrSort.sort(compareNum);
  console.log(`Начальный массив: ${arr} \nМассив после сортировки: ${arrSort}`);
  function compareNum(a, b) {
    return a - b;
  }
}

function ex208() {
  let arrObj = {};
  let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (arrObj[key] === undefined) {
      arrObj[key] = 1;
    } else {
      arrObj[key] = arrObj[key] + 1;
    }
  }
  let maxValue = 0;
  let maxKey;
  for (let key in arrObj) {
    if (arrObj[key] > maxValue) {
      maxValue = arrObj[key];
      maxKey = key;
    }
  }
  alert(`The most common character in the array is: ${maxKey} ( ${maxValue} times)`);
}

function ex209_1() {
  let lowerCaseStr = "";
  let lowerCaseString = "";
  let str = prompt("Please enter any few words");
  let toUpperCaseStr = str.toUpperCase();
  let upperCaseStrSplit = toUpperCaseStr.split(" ");
  for (i = 0; i < upperCaseStrSplit.length; i++) {
    lowerCaseStr = upperCaseStrSplit[i];
    lowerCaseString +=
      lowerCaseStr[0].toLowerCase() + lowerCaseStr.slice(1) + " ";
  }
  alert(lowerCaseString);
}
function ex209_2() {
  let str = prompt("Enter a string", "The Quick Brown Fox");
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  alert(`${arr.join("")}`);
}
function ex210() {
  let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];
  // let arr = "";
  for (i = 0; i < a.length; i++) {
    console.log(`row ${i}`);
    for (j = 0; j < a[i].length; j++) {
      console.log(` ${a[i][j]}  `);
    }
  }
}
