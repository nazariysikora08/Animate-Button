// 1. Базові оператори
/*
let x = 12; // Унарний оператор (1 оперант)
let y = 24; // Унарний оператор (1 оперант)
let c = x + y; // Бінарний оператор (2 операнти (x і y))
console.log("My variable: ", (x + y) + c) // Вивід в console
*/
// 2. Математичні оператори
// Додавання
/*
x = 5 + 9;
console.log(`Результат в разі додавання: ${x}`);
// Віднімання
x = 9 - 5;
console.log(`Результат в разі віднімання: ${x}`);
// Ділення
x = 45 / 9;
console.log(`Результат в разі ділення: ${x}`);
// Множення
x = 9 * 5;
console.log(`Результат в разі множення: ${x}`);
// Піднесення до степеня
x = 5 ** 3;
console.log(`Результат в разі піднесення до степеня: ${x}`);
// Від відсотка %
x = 14 % 4;
console.log(`Результат в разі від відсотка: ${x}`);
*/
// 3. Спеціальні можливості
/*
// з'єднання строк
let firstword = "J" + "S";
console.log(firstword);
// з'єднання числа з строкою
let secondword = "My variable: " + 12;
console.log(secondword);
console.log(typeof secondword);
// з'єднання числа строкового з прости числом
let thrithword = 2 + "2";
console.log(thrithword);
console.log(typeof thrithword);
// математична операція і зложення строки
let fourword = 52 - 40 + " It my variable";
console.log(fourword);
let numberone = "2" + 2;
console.log(numberone);
let numbertwo = "24" - 2;
console.log(numbertwo);
console.log(typeof numbertwo);
let numberthree = "6" * 3;
console.log(numberthree);
console.log(typeof numberthree);
let numberfive = "15" / 3;
console.log(numberfive);
console.log(typeof numberfive);
let numbersix = "12" ** 2;
console.log(numbersix);
console.log(typeof numbersix);
let numberseven = "13" % 2;
console.log(numberseven);
console.log(typeof numbersix);
let numbereight = "12" / "Hello";
console.log(numbereight);
let numberone = +"25";
console.log(12 + numberone);
let numbertwo = -"24";
console.log(12+numbertwo);
let users = "500";
let admin = "5";
console.log(users + admin);
console.log(+users + + admin);
console.log(Number(users) + Number(admin));
let numberone = 3 + 1 * 9;
console.log(numberone);
let numberfive = (3 + 1) * 9;
console.log(numberfive);
let a = 1 + 2;
let b = 2;
let result = b + (a = b + 3);
console.log(result);
let resultone = resulttwo = resulthree = 1 + 2;
console.log(resultone);
console.log(resulttwo);
console.log(resulthree);
let usersfb = 5;
usersfb = usersfb + 3;
console.log(usersfb);
let userstw = 10;
userstw += 2;
console.log(userstw);
var addnumberone = 11;
addnumberone++;
console.log(addnumberone);
var unaddnumbertwo = 11;
unaddnumbertwo--;
console.log(unaddnumbertwo);
let userscounter = 0;
let userresult = ++userscounter;
console.log(userresult);
*/
// 4. Побітові оператори і кома
/*
let numberone = (10 + 10, 20 + 10);
console.log(numberone);
*/
// 5. Оператори порівняння
/*
console.log(5 > 4);
console.log(4 > 6);
console.log(5 == 5);
console.log(4 != 5);
var result = 12 > 5;
console.log(result);
console.log("12" == 12);
console.log(true == 1);
console.log(false == 0);
let itemA = 0;
let itemB = "0";
console.log(Boolean(itemA));
console.log(Boolean(itemB));
console.log(itemA == itemB);
console.log(0 === false);
console.log("007" === 7);
console.log("58" !== 58);
console.log(null == undefined);
console.log(null === undefined);
console.log(null > 0)
console.log(null == 0);
console.log(null >= 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
*/
// 6. Логічні оператори
// Булеві значення
/*
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || true);
console.log(1 || 2);
console.log(true || "hello");
console.log(null || 70);
console.log(null || "hello" || 0);
console.log(undefined || '' || null || 0);
console.log(false || "hello guys");
let username = "Nazariy sikora";
let usernickname = "@nazariysikora";
let user = username || usernickname || undefined;
console.log(user);
let users = 0;
let admin = 5;
let uadna = users || '' || admin;
console.log(uadna);
let admin = 0;
let users = 7;
admin > users || users++
console.log(users);
console.log("Hello" && 0 && 1);
console.log(1 && 2 && 0 && null);
console.log('15' && '42');
console.log(1 && 5 || 7 && 5);
let users = 500;
(users > 0) && console.log(`Кількість користувачів на даний момент ${users}` + "млн.");
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!'hello');
console.log(18 && !true || 18 && !1);
let username = 'Sikora Nazariy';
console.log(username ?? "Not name");
*/
console.log(+'35' + - '22');
// Значення 13
console.log('35' * '22');
// Значення 770
console.log('558' > 22);
// Значення true
let userscounter = 0;
let newusers = ++userscounter
console.log(newusers);
// Значення 1
console.log(!false && 18 || 11 && !'');
// Поверне 18
let username;
console.log(username ?? 'Not name');