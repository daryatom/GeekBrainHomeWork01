'use strict'

//1 Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту
let Tc = 20,
Tf = (9 / 5) * Tc + 32;
alert("Температура по Фаренгейту: " + Tf);

//2 Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin. 
//Вывести в консоль переменную admin (должно вывести "Василий").
let name = "Василий",
admin = name;
console.log(admin);

//3 Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению
let result1 = 10 + 10 + "10";
console.log(result);
/*
1. К 10 прибавляем 10, получаем 20, это число
2. 20 прибавляем к "10", получаем 2010, потому что 10 -- это строка и при сложении со строкой число 20 тоже становится строкой
*/

let result2 = 10 + "10" + 10;
console.log(result2);
/*
1. 10 складываем с "10", получаем 1010; "10" -- строка, при сложении числа со строкой, число тоже становится строкой.
2. "1010" складываем с 10, получаем строку "101010"
*/

let result3 = 10 + 10 + +"10";
console.log(result3);
/*
1. 10 складываем 10, получаем 20
2. За счет унарного плюса строка "10" становится числом. 
3. 20 складываем с 10, получаем 30.
*/

let result4 = 10 / -"";
console.log(result4);
/*
1. "" -- это null, при делении 10 на 0 получаем infinity
2. Унарный минус указывает на то, что полученное значение отрицательное, поэтому в итоге получаем -infinity
*/

let result5 = 10 / +"2,5";
console.log(result5);
/*
"2,5" -- строка. Унарный плюс должен сменить тип на число, но не может, потому что дробные значения в js пишутся через точку. 
Поэтому тип "2,5" остаётся строкой. При делении числа на строку получаем значени NaN.
*/
