/////// Zadaniye 1 ///////

// alert("Подсчитать сумму всех чисел в заданном пользователем диапазоне. ")

// let num1 = +(prompt("Write first number"));
// let num2 = +(prompt("Write second number"));
// let sum = 0;

// for (let i = num1; i <= num2; i++) {
//  sum = sum + i;
// }

// alert(sum);



/////// Zadaniye 2 ///////

// alert("Запросить 2 числа и найти только наибольший общий делитель.");

// let num1 = +(prompt("Write first number"));
// let num2 = +(prompt("Write second number"));
// let delit = 0;
// let nod = 0;

// if (num1 > num2) {
//     nod = num2;
// }
// else {
//     nod = num1;
// }

// for (let i = nod; i > 0; i--) {
//     let a = num1 % i;
//     let b = num2 % i;

//     if (a == 0 && b == 0) {
//         delit = i;  
//         break;
//     }
// }

// alert(delit);





///// Zadaniye 3 ///////

// alert ("Запросить у пользователя число и вывести все делители этого числа.");

// let num1 = +(prompt("Write number"));
// let delit = 0;

// for (let i = num1; i > 0; i--) {
//     let a = num1 % i;

//     if (a == 0) {
//         delit = i;
//         alert(delit);
//     }
// }




// ///// Zadaniye 4 ///////

// alert ("Определить количество цифр в введенном числе.");

// let num = prompt ("Write number");
// let i = 0;

// do {
//     i ++;
// } while (num[i] != undefined) {
//     alert(i);
// }



/////// Zadaniye 5 ///////

// alert ("Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом " +
// "также посчитать, сколько четных и нечетных. Вывести " + 
// "статистику на экран. Учтите, что достаточно одной пере" +
// "менной (не 10) для ввода чисел пользователем.");


// let vse = 0;
// let plus = 0;
// let minus = 0;
// let odd = 0;
// let even = 0;
// let zero = 0;

// for(let i = 1; i <= 10; i++) {
//     vse = +prompt ("Write number");
//     if (vse > 0) {
//         plus ++;
//     }
//     if (vse < 0){
//         minus ++;
//     }
//     if (vse % 2 == 0 ) {
//         even ++;
//     }
//     if (vse % 2 != 0) {
//         odd ++;
//     }
//     if (vse === 0) {
//         zero ++;
//     }
// }

// alert ("Положительных - " + plus + " Отрицательных - "+ " Нулей - " + zero + minus + " Четных - " + even + " НеЧетных - " + odd  );



/////// Zadaniye 6 ///////

// alert("Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет " +
// "ли он решить еще один пример. И так до тех пор, пока " + 
// "пользователь не откажется.");

// do {
//     let num1 = +prompt ("write first number");
//     let num2 = +prompt ("write second number");
//     let znak = prompt ("Vvedite znak")

//     if(znak == "+") {
//         alert(num1+num2);
//     }
//     else if(znak == "-") {
//         alert(num1-num2);
//     }
//     else if(znak == "/") {
//         alert(num1/num2);
//     }
//     else if(znak == "*") {
//         alert(num1*num2);
//     }
//     else {
//         alert("Warning");
//     }
// } while (confirm ("Хотите продолжить?"));




/////// Zadaniye 7 ///////

// alert ("Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если "+
// "число 123456 сдвинуть на 2 цифры, то получится 345612).");

// let num = prompt("Write number");
// let pad = prompt("write padding number");
// let i = 0;

// do {
//     i = i+1;

// } 
// while (num[i] != undefined) {
//     let left = "";
//     let right = "";
//     for (y = 0; y < i; y++) {
//         if (y < pad) {
//             left += num[y];
//         }
//         else {
//             right += num[y];
//         }
//     }
//     alert(right + left);
// }






/////// Zadaniye 8 ///////

// alert ("Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. ")

// let i = 0;

// do {
//     let one = "Ponedelnik";
//     let two = "Vtorink";
//     let three = "Sreda";
//     let four = "Chetverg";
//     let five = "Pyatnica";
//     let six = "Subbota";
//     let seven = "Voskresenye";

//     if (i == 0) {
//         alert(one);
//     }
//     else if (i == 1) {
//         alert(two);
//     }
//     else if (i == 2) {
//         alert(three);
//     }
//     else if (i == 3) {
//         alert(four);
//     }
//     else if (i == 4) {
//         alert(five);
//     }
//     else if (i == 5) {
//         alert(six);
//     }
//     else if (i == 6) {
//         alert(seven);
//         i = -1;
//     }

//     i++;
// } while (confirm ("Хотите продолжить?"));





// /////// Zadaniye 9 ///////

// alert("Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.")

// for (let i = 2; i <=9; i++) {
//     for (let y = 1; y <=10; y++) {
//         alert(y*i);
//     }
// }






// /////// Zadaniye 10 ///////

// alert("Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: " +
// "каждую итерацию цикла делите диапазон чисел пополам, " + 
// "записываете результат в N и спрашиваете у пользователя " +
// "«Ваше число > N, < N или == N?». В зависимости от того " +
// "что указал пользователь, уменьшаете диапазон. Начальный " +
// "диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили " +
// " диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.")

// let diapozon1 = 0;
// let diapozon2 = 100;
// let N = 50;


// do {
//     let znak = prompt("Ваше число больше " + N  + " Выберете знак >, <, =");
//     if (znak == ">") {
//         diapozon1 = N;
//     }
//     else if (znak == "<") {
//         diapozon2 = N;
//     }
//     else if (znak == "=") {
//         alert("Vawe cislo" + N);
//     }
//     N = Math.trunc((diapozon2 + diapozon1) / 2);
// } while (N != 1)




