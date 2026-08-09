import fs from "fs";
import path from "path";

const outputBase = "src/content/03-operators/exercises";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeExercise(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ============================================================
// LESSON 1: arithmetic-comparison (50 exercises)
// ============================================================
function generateArithmeticComparison() {
  const exercises = [];

  // 01
  exercises.push({
    id: "03-01-arithmetic-comparison-01",
    title: "Calculator function banao jo do numbers add kare",
    starterCode: `function add(a, b) {
  // TODO: do numbers ka sum return karo
}`,
    solution: `function add(a, b) {
  return a + b;
}`,
    tests: [{ input: [2, 3], expected: 5 }],
    hints: ["+ operator use karo addition ke liye", "Number type ki guarantee nahi hai — Number() se convert karo agar zaruri ho"]
  });

  // 02
  exercises.push({
    id: "03-01-arithmetic-comparison-02",
    title: "Modulo use karke odd/even check karo",
    starterCode: `function isEven(num) {
  // TODO: number even hai ya nahi check karo modulo se
}`,
    solution: `function isEven(num) {
  return num % 2 === 0;
}`,
    tests: [{ input: [4], expected: "true" }],
    hints: ["% operator remainder deta hai", "Remainder 0 hai toh even hai"]
  });

  // 03
  exercises.push({
    id: "03-01-arithmetic-comparison-03",
    title: "Exponentiation operator se power nikalo",
    starterCode: `function power(base, exp) {
  // TODO: base^exp return karo
  // ** operator use karo
}`,
    solution: `function power(base, exp) {
  return base ** exp;
}`,
    tests: [{ input: [2, 3], expected: 8 }],
    hints: ["** operator JavaScript me exponentiation ke liye hai", "Math.pow() bhi use kar sakte ho but ** modern hai"]
  });

  // 04
  exercises.push({
    id: "03-01-arithmetic-comparison-04",
    title: "Comparison operators ke results predict karo",
    starterCode: `function compareResults() {
  // TODO: ye sab comparisons ke results return karo array me
  // 5 > 3, 5 < 3, 5 >= 5, 5 <= 4, 5 == "5", 5 === "5"
}`,
    solution: `function compareResults() {
  return [5 > 3, 5 < 3, 5 >= 5, 5 <= 4, 5 == "5", 5 === "5"];
}`,
    tests: [{ input: [], expected: "true,false,true,false,true,false" }],
    hints: [">, <, >=, <= standard comparisons hain", "== loose equality hai (type convert hota hai), === strict (type check hota hai)"]
  });

  // 05
  exercises.push({
    id: "03-01-arithmetic-comparison-05",
    title: "NaN handle karo division me",
    starterCode: `function safeDivide(a, b) {
  // TODO: divide karo but NaN ko handle karo
  // b 0 hai toh Infinity/-Infinity aayega, wo theek hai
  // But agar input hi NaN hai toh NaN return karo
}`,
    solution: `function safeDivide(a, b) {
  const result = a / b;
  return Number.isNaN(result) ? 0 : result;
}`,
    tests: [{ input: [10, 2], expected: 5 }],
    hints: ["/ operator se divide karo", "Number.isNaN() se NaN check karo"]
  });

  // 06
  exercises.push({
    id: "03-01-arithmetic-comparison-06",
    title: "String me number hai ya nahi check karo",
    starterCode: `function isNumericString(str) {
  // TODO: string pure number hai ya nahi
  // "123" -> true, "abc" -> true, "" -> false
}`,
    solution: `function isNumericString(str) {
  return str !== "" && !isNaN(Number(str));
}`,
    tests: [{ input: ["123"], expected: "true" }],
    hints: ["Number(str) convert karo aur isNaN se check karo", "Empty string ke liye special case hai — Number("") 0 hota hai"]
  });

  // 07
  exercises.push({
    id: "03-01-arithmetic-comparison-07",
    title: "Absolute difference nikalo do numbers ka",
    starterCode: `function absDiff(a, b) {
  // TODO: do numbers ke beech ka absolute difference return karo
  // bina Math.abs ke
}`,
    solution: `function absDiff(a, b) {
  return a > b ? a - b : b - a;
}`,
    tests: [{ input: [5, 3], expected: 2 }],
    hints: ["Ternary operator use karo bada number find karne ke liye", "Bada number se chhota number subtract karo"]
  });

  // 08
  exercises.push({
    id: "03-01-arithmetic-comparison-08",
    title: "Modulo tricks — last digit nikalo",
    starterCode: `function lastDigit(num) {
  // TODO: number ka last digit nikalo modulo se
  // 1234 -> 4
}`,
    solution: `function lastDigit(num) {
  return Math.abs(num) % 10;
}`,
    tests: [{ input: [1234], expected: 4 }],
    hints: ["num % 10 se last digit milta hai", "Math.abs lagao negative numbers ke liye"]
  });

  // 09
  exercises.push({
    id: "03-01-arithmetic-comparison-09",
    title: "Comparison bug fix karo — string vs number",
    starterCode: `function compareAge(age1, age2) {
  // TODO: dono ages compare karo strictly
  // "25" aur 25 same hain ya nahi?
  // Dono ko number me convert karo pehle
}`,
    solution: `function compareAge(age1, age2) {
  return Number(age1) === Number(age2);
}`,
    tests: [{ input: ["25", 25], expected: "true" }],
    hints: ["Number() se dono ko convert karo", "=== use karo strict comparison ke liye"]
  });

  // 10
  exercises.push({
    id: "03-01-arithmetic-comparison-10",
    title: "Temperature converter — Celsius to Fahrenheit",
    starterCode: `function celsiusToFahrenheit(c) {
  // TODO: Celsius ko Fahrenheit me convert karo
  // Formula: F = C * 9/5 + 32
}`,
    solution: `function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}`,
    tests: [{ input: [0], expected: 32 }],
    hints: ["Formula yaad rakho: C * 9/5 + 32", "Operator precedence dhyan me rakhna: * / pehle, + baad me"]
  });

  // 11
  exercises.push({
    id: "03-01-arithmetic-comparison-11",
    title: "Number ke digits ka product nikalo",
    starterCode: `function digitProduct(num) {
  // TODO: number ke sab digits ka product nikalo
  // 123 -> 1*2*3 = 6
}`,
    solution: `function digitProduct(num) {
  return Math.abs(num).toString().split("").reduce((prod, d) => prod * Number(d), 1);
}`,
    tests: [{ input: [123], expected: 6 }],
    hints: ["Number ko string me convert karo aur split karo", "Reduce use karo product ke liye — initial value 1 do"]
  });

  // 12
  exercises.push({
    id: "03-01-arithmetic-comparison-12",
    title: "String concatenation vs addition bug fix karo",
    starterCode: `function calculateTotal(price, quantity) {
  // TODO: price * quantity ka total return karo
  // Abhi "10" * 2 = "1010" ho raha hai
}`,
    solution: `function calculateTotal(price, quantity) {
  return Number(price) * Number(quantity);
}`,
    tests: [{ input: ["10", 3], expected: 30 }],
    hints: ["Number() se dono ko convert karo", "* operator hamesha number conversion karta hai but + nahi"]
  });

  // 13
  exercises.push({
    id: "03-01-arithmetic-comparison-13",
    title: "Modulo se cyclic value nikalo",
    starterCode: `function cyclicIndex(index, length) {
  // TODO: index ko array length ke andar wrap karo
  // index 5, length 3 -> 2
}`,
    solution: `function cyclicIndex(index, length) {
  return ((index % length) + length) % length;
}`,
    tests: [{ input: [5, 3], expected: 2 }],
    hints: ["Modulo se wrap ho jayega", "Negative index handle karne ke liye + length karo"]
  });

  // 14
  exercises.push({
    id: "03-01-arithmetic-comparison-14",
    title: "Number ke decimal places truncate karo",
    starterCode: `function truncate(num, places) {
  // TODO: number ko specified decimal places tak truncate karo (round mat karo)
  // 3.4567, 2 -> 3.45
}`,
    solution: `function truncate(num, places) {
  const factor = 10 ** places;
  return Math.trunc(num * factor) / factor;
}`,
    tests: [{ input: [3.4567, 2], expected: 3.45 }],
    hints: ["Math.trunc() use karo — ye sirf integer part deta hai", "Pehle factor se multiply karo, trunc karo, fir divide karo"]
  });

  // 15
  exercises.push({
    id: "03-01-arithmetic-comparison-15",
    title: "Comparison operators chaining fix karo",
    starterCode: `function inRange(num, min, max) {
  // TODO: num min aur max ke beech hai (inclusive)
  // Chaining operator use karo: min <= num <= max
  // (Direct chaining JavaScript me kaam nahi karti!)
}`,
    solution: `function inRange(num, min, max) {
  return num >= min && num <= max;
}`,
    tests: [{ input: [5, 1, 10], expected: "true" }],
    hints: ["JavaScript me chaining nahi hoti — && use karo", "num >= min AND num <= max dono check karo"]
  });

  // 16
  exercises.push({
    id: "03-01-arithmetic-comparison-16",
    title: "String ke ASCII value nikalo",
    starterCode: `function asciiValue(char) {
  // TODO: character ka ASCII value return karo
  // "A" -> 65, "a" -> 97
}`,
    solution: `function asciiValue(char) {
  return char.charCodeAt(0);
}`,
    tests: [{ input: ["A"], expected: 65 }],
    hints: ["charCodeAt(0) method use karo", "0 index means pehla character"]
  });

  // 17
  exercises.push({
    id: "03-01-arithmetic-comparison-17",
    title: "Arithmetic operations ke order predict karo",
    starterCode: `function operatorPrecedence() {
  // TODO: ye expressions ke results return karo
  // 2 + 3 * 4, (2 + 3) * 4, 10 / 2 - 3, 2 ** 3 ** 2
}`,
    solution: `function operatorPrecedence() {
  return [2 + 3 * 4, (2 + 3) * 4, 10 / 2 - 3, 2 ** 3 ** 2];
}`,
    tests: [{ input: [], expected: "14,20,2,512" }],
    hints: ["BODMAS/BIDMAS follow hota hai: *, / pehle, +, - baad me", "** right-to-left evaluate hota hai: 2**(3**2) = 2**9 = 512"]
  });

  // 18
  exercises.push({
    id: "03-01-arithmetic-comparison-18",
    title: "Negative numbers ke comparison fix karo",
    starterCode: `function compareNegatives(a, b) {
  // TODO: dono negative numbers compare karo
  // -5 > -3 -> false, -5 < -3 -> true
  // Return karo: a bada hai toh 1, b bada hai toh -1, equal toh 0
}`,
    solution: `function compareNegatives(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}`,
    tests: [{ input: [-5, -3], expected: -1 }],
    hints: ["Standard comparison operators negative numbers pe bhi kaam karte hain", "Math.sign(a - b) bhi use kar sakte ho"]
  });

  // 19
  exercises.push({
    id: "03-01-arithmetic-comparison-19",
    title: "Modulo se week day nikalo",
    starterCode: `function dayOfWeek(dayNumber) {
  // TODO: 0=Sunday, 1=Monday... 6=Saturday
  // Day number 7 ya usse zyada ho toh wrap karo
}`,
    solution: `function dayOfWeek(dayNumber) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return days[dayNumber % 7];
}`,
    tests: [{ input: [9], expected: "Tuesday" }],
    hints: ["7 days ke baad week repeat hota hai", "Modulo 7 se index wrap ho jayega"]
  });

  // 20
  exercises.push({
    id: "03-01-arithmetic-comparison-20",
    title: "Number ke liye range validator banao",
    starterCode: `function validateRange(value, min, max) {
  // TODO: value range ke andar hai ya nahi
  // Agar nahi hai toh error message return karo
  // "Value must be between {min} and {max}"
}`,
    solution: `function validateRange(value, min, max) {
  if (value >= min && value <= max) return true;
  return \`Value must be between \${min} and \${max}\`;
}`,
    tests: [{ input: [5, 1, 10], expected: "true" }],
    hints: ["&& se dono conditions check karo", "Template literal se error message banao"]
  });

  // 21
  exercises.push({
    id: "03-01-arithmetic-comparison-21",
    title: "String ke arithmetic operations predict karo",
    starterCode: `function stringArithmetic() {
  // TODO: ye expressions ke results return karo
  // "5" - 3, "5" + 3, "5" * 2, "5" / 2, "5" % 2
}`,
    solution: `function stringArithmetic() {
  return ["5" - 3, "5" + 3, "5" * 2, "5" / 2, "5" % 2];
}`,
    tests: [{ input: [], expected: "2,53,10,2.5,1" }],
    hints: ["+ operator string concatenation karta hai", "-, *, /, % operators number conversion karte hain"]
  });

  // 22
  exercises.push({
    id: "03-01-arithmetic-comparison-22",
    title: "Number ke digits reverse karo",
    starterCode: `function reverseNumber(num) {
  // TODO: number ke digits reverse karo
  // 1234 -> 4321
}`,
    solution: `function reverseNumber(num) {
  const isNeg = num < 0;
  const reversed = parseInt(Math.abs(num).toString().split("").reverse().join(""));
  return isNeg ? -reversed : reversed;
}`,
    tests: [{ input: [1234], expected: 4321 }],
    hints: ["Number ko string me convert karo, split, reverse, join karo", "Negative number hai toh sign wapas lagao"]
  });

  // 23
  exercises.push({
    id: "03-01-arithmetic-comparison-23",
    title: "Loose equality ke 8 rules yaad karo",
    starterCode: `function equalityRules() {
  // TODO: ye loose equality results return karo
  // null == undefined, 0 == false, "" == false, "0" == false
}`,
    solution: `function equalityRules() {
  return [null == undefined, 0 == false, "" == false, "0" == false];
}`,
    tests: [{ input: [], expected: "true,true,true,true" }],
    hints: ["null aur undefined loosely equal hain", "0, false, "", "0" — sab loosely equal hain with =="]
  });

  // 24
  exercises.push({
    id: "03-01-arithmetic-comparison-24",
    title: "Modulo use karke leap year check karo",
    starterCode: `function isLeapYear(year) {
  // TODO: leap year hai ya nahi check karo
  // 4 se divide ho aur (100 se nahi ya 400 se divide ho)
}`,
    solution: `function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}`,
    tests: [{ input: [2024], expected: "true" }],
    hints: ["4 se divisible hona chahiye", "100 se divisible hai toh 400 se bhi hona chahiye"]
  });

  // 25
  exercises.push({
    id: "03-01-arithmetic-comparison-25",
    title: "String ke comparison se alphabetical order check karo",
    starterCode: `function isAlphabeticallyBefore(a, b) {
  // TODO: a pehle aata hai ya b alphabet me
  // "apple" pehle "banana" ke
}`,
    solution: `function isAlphabeticallyBefore(a, b) {
  return a < b;
}`,
    tests: [{ input: ["apple", "banana"], expected: "true" }],
    hints: ["String comparison JavaScript me lexicographic hoti hai", "< operator se directly compare kar sakte ho"]
  });

  // 26
  exercises.push({
    id: "03-01-arithmetic-comparison-26",
    title: "Number ke integer part nikalo bina Math.floor ke",
    starterCode: `function integerPart(num) {
  // TODO: number ka integer part nikalo bina Math.floor ke
  // 3.7 -> 3, -3.7 -> -3
}`,
    solution: `function integerPart(num) {
  return num | 0;
}`,
    tests: [{ input: [3.7], expected: 3 }],
    hints: ["Bitwise OR (| 0) se integer part milta hai", "Truncation hota hai — floor nahi"]
  });

  // 27
  exercises.push({
    id: "03-01-arithmetic-comparison-27",
    title: "Comparison operators se sorting comparator banao",
    starterCode: `function sortNumbers(arr) {
  // TODO: numbers ko ascending order me sort karo
  // .sort() without comparator galat karta hai numbers ke liye!
}`,
    solution: `function sortNumbers(arr) {
  return [...arr].sort((a, b) => a - b);
}`,
    tests: [{ input: [[3,1,2]], expected: "1,2,3" }],
    hints: ["sort() default me string comparison karta hai", "Comparator function (a, b) => a - b likho"]
  });

  // 28
  exercises.push({
    id: "03-01-arithmetic-comparison-28",
    title: "Arithmetic operators se array operations karo",
    starterCode: `function sumArray(arr) {
  // TODO: array ke sab numbers ka sum nikalo bina reduce ke
  // Loop use karo
}`,
    solution: `function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}`,
    tests: [{ input: [[1,2,3,4]], expected: 10 }],
    hints: ["Loop se har number ko sum me add karo", "+=" operator use karo shorthand ke liye"]
  });

  // 29
  exercises.push({
    id: "03-01-arithmetic-comparison-29",
    title: "Number ke bits count karo",
    starterCode: `function countBits(num) {
  // TODO: number me kitne set bits (1) hain binary me
  // 5 -> "101" -> 2 bits
}`,
    solution: `function countBits(num) {
  return num.toString(2).split("").filter(b => b === "1").length;
}`,
    tests: [{ input: [5], expected: 2 }],
    hints: ["toString(2) se binary string milti hai", "Split karke 1s count karo"]
  });

  // 30
  exercises.push({
    id: "03-01-arithmetic-comparison-30",
    title: "Comparison se maximum of three nikalo",
    starterCode: `function maxOfThree(a, b, c) {
  // TODO: teeno me se bada number return karo bina Math.max ke
}`,
    solution: `function maxOfThree(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}`,
    tests: [{ input: [1, 2, 3], expected: 3 }],
    hints: ["Nested ternary use karo", "Pehle a aur b compare karo, fir winner ko c se compare karo"]
  });

  // 31
  exercises.push({
    id: "03-01-arithmetic-comparison-31",
    title: "String ke characters ke ASCII values ka sum nikalo",
    starterCode: `function asciiSum(str) {
  // TODO: string ke sab characters ke ASCII values ka sum
  // "abc" -> 97+98+99 = 294
}`,
    solution: `function asciiSum(str) {
  let sum = 0;
  for (const char of str) {
    sum += char.charCodeAt(0);
  }
  return sum;
}`,
    tests: [{ input: ["abc"], expected: 294 }],
    hints: ["charCodeAt(0) se ASCII value milti hai", "Loop se sum karte jao"]
  });

  // 32
  exercises.push({
    id: "03-01-arithmetic-comparison-32",
    title: "Modulo se number ke digits ka sum nikalo",
    starterCode: `function digitSum(num) {
  // TODO: number ke digits ka sum nikalo
  // 1234 -> 10
}`,
    solution: `function digitSum(num) {
  let sum = 0;
  let n = Math.abs(num);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}`,
    tests: [{ input: [1234], expected: 10 }],
    hints: ["% 10 se last digit milta hai", "/ 10 se last digit hatata hai"]
  });

  // 33
  exercises.push({
    id: "03-01-arithmetic-comparison-33",
    title: "Comparison operators se age eligibility check karo",
    starterCode: `function canVote(age) {
  // TODO: 18 ya usse zyada hai toh true
  // Strict comparison use karo
}`,
    solution: `function canVote(age) {
  return age >= 18;
}`,
    tests: [{ input: [18], expected: "true" }],
    hints: [">= operator use karo", "18 inclusive hai"]
  });

  // 34
  exercises.push({
    id: "03-01-arithmetic-comparison-34",
    title: "Arithmetic se area calculator — circle",
    starterCode: `function circleArea(radius) {
  // TODO: circle ka area nikalo
  // Area = π * r²
}`,
    solution: `function circleArea(radius) {
  return Math.PI * radius ** 2;
}`,
    tests: [{ input: [5], expected: 78.53981633974483 }],
    hints: ["Math.PI use karo pi ke liye", "** 2 se square hota hai"]
  });

  // 35
  exercises.push({
    id: "03-01-arithmetic-comparison-35",
    title: "String ke comparison se sort karke dekho",
    starterCode: `function sortStrings(arr) {
  // TODO: strings ko alphabetical order me sort karo
  // Case-insensitive sort karo
}`,
    solution: `function sortStrings(arr) {
  return [...arr].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}`,
    tests: [{ input: ["banana","Apple","cherry"], expected: "Apple,banana,cherry" }],
    hints: ["toLowerCase() se case-insensitive hoga", "localeCompare() string comparison ke liye best hai"]
  });

  // 36
  exercises.push({
    id: "03-01-arithmetic-comparison-36",
    title: "Number ke decimal part nikalo",
    starterCode: `function decimalPart(num) {
  // TODO: number ka decimal part nikalo
  // 3.14159 -> 0.14159
}`,
    solution: `function decimalPart(num) {
  return num - Math.floor(num);
}`,
    tests: [{ input: [3.14159], expected: 0.14159000000000012 }],
    hints: ["Math.floor() se integer part milta hai", "Original se integer part subtract karo"]
  });

  // 37
  exercises.push({
    id: "03-01-arithmetic-comparison-37",
    title: "Comparison se grade system banao",
    starterCode: `function getGrade(percentage) {
  // TODO: 90+ -> "A+", 80+ -> "A", 70+ -> "B", 60+ -> "C", 50+ -> "D", else -> "F"
}`,
    solution: `function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}`,
    tests: [{ input: [85], expected: "A" }],
    hints: ["If-else chain use karo sabse bada check pehle karo", ">= use karo inclusive comparison ke liye"]
  });

  // 38
  exercises.push({
    id: "03-01-arithmetic-comparison-38",
    title: "String me numeric value extract karo bina regex ke",
    starterCode: `function extractNumber(str) {
  // TODO: string se number nikalo bina regex ke
  // "item123price" -> 123
}`,
    solution: `function extractNumber(str) {
  let num = "";
  for (const char of str) {
    if (char >= "0" && char <= "9") num += char;
  }
  return num ? Number(num) : null;
}`,
    tests: [{ input: ["item123price"], expected: 123 }],
    hints: ["Char comparison se digit check karo", "Digit milne pe string me add karo"]
  });

  // 39
  exercises.push({
    id: "03-01-arithmetic-comparison-39",
    title: "Modulo se binary string banao",
    starterCode: `function toBinaryString(num) {
  // TODO: number ko binary string me convert karo bina toString(2) ke
  // Division method use karo
}`,
    solution: `function toBinaryString(num) {
  if (num === 0) return "0";
  let binary = "";
  let n = Math.abs(num);
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return num < 0 ? "-" + binary : binary;
}`,
    tests: [{ input: [10], expected: "1010" }],
    hints: ["% 2 se remainder 0 ya 1 aayega", "Har step me n ko 2 se divide karo"]
  });

  // 40
  exercises.push({
    id: "03-01-arithmetic-comparison-40",
    title: "Arithmetic operations se BMI calculator banao",
    starterCode: `function calculateBMI(weight, height) {
  // TODO: BMI nikalo
  // Formula: weight / (height * height)
  // height meters me hona chahiye
}`,
    solution: `function calculateBMI(weight, height) {
  return weight / (height * height);
}`,
    tests: [{ input: [70, 1.75], expected: 22.857142857142858 }],
    hints: ["Formula: weight / height²", "Operator precedence dhyan me rakhna — parentheses lagao"]
  });

  // 41
  exercises.push({
    id: "03-01-arithmetic-comparison-41",
    title: "Number ke palindrome check karo",
    starterCode: `function isNumberPalindrome(num) {
  // TODO: number palindrome hai ya nahi
  // 121 -> true, 123 -> false
}`,
    solution: `function isNumberPalindrome(num) {
  const str = Math.abs(num).toString();
  return str === str.split("").reverse().join("");
}`,
    tests: [{ input: [121], expected: "true" }],
    hints: ["Number ko string me convert karo", "String reverse karke compare karo"]
  });

  // 42
  exercises.push({
    id: "03-01-arithmetic-comparison-42",
    title: "String comparison se shortest string dhundho",
    starterCode: `function shortestString(arr) {
  // TODO: sabse chhoti string return karo
  // Array empty ho toh null return karo
}`,
    solution: `function shortestString(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((shortest, s) => s.length < shortest.length ? s : shortest);
}`,
    tests: [{ input: [["hello","hi","hey"]], expected: "hi" }],
    hints: ["Array.reduce() use karo comparison ke saath", ".length se compare karo"]
  });

  // 43
  exercises.push({
    id: "03-01-arithmetic-comparison-43",
    title: "Arithmetic se compound interest nikalo",
    starterCode: `function compoundInterest(principal, rate, years) {
  // TODO: compound interest nikalo
  // A = P(1 + r/100)^n
}`,
    solution: `function compoundInterest(principal, rate, years) {
  return principal * (1 + rate / 100) ** years;
}`,
    tests: [{ input: [1000, 5, 2], expected: 1102.5 }],
    hints: ["Formula: P(1 + r/100)^n", "** operator se power nikalo"]
  });

  // 44
  exercises.push({
    id: "03-01-arithmetic-comparison-44",
    title: "Modulo se clock time calculate karo",
    starterCode: `function addMinutes(hours, minutes, addMin) {
  // TODO: minutes add karo aur new hours:minutes return karo
  // 10:30 + 45 min -> "11:15"
}`,
    solution: `function addMinutes(hours, minutes, addMin) {
  const totalMinutes = hours * 60 + minutes + addMin;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  return \`\${newHours}:\${String(newMinutes).padStart(2, "0")}\`;
}`,
    tests: [{ input: [10, 30, 45], expected: "11:15" }],
    hints: ["Sab pehle total minutes me convert karo", "Modulo 60 se minutes aur modulo 24 se hours wrap honge"]
  });

  // 45
  exercises.push({
    id: "03-01-arithmetic-comparison-45",
    title: "String me character position comparison karo",
    starterCode: `function isCharAtPosition(str, char, pos) {
  // TODO: specified position pe specified character hai ya nahi
}`,
    solution: `function isCharAtPosition(str, char, pos) {
  return str[pos] === char;
}`,
    tests: [{ input: ["hello", "e", 1], expected: "true" }],
    hints: ["Bracket notation se character access karo: str[pos]", "=== se strict comparison karo"]
  });

  // 46
  exercises.push({
    id: "03-01-arithmetic-comparison-46",
    title: "Arithmetic se percentage calculator banao",
    starterCode: `function calculatePercentage(total, obtained) {
  // TODO: percentage nikalo
  // obtained/total * 100
}`,
    solution: `function calculatePercentage(total, obtained) {
  return (obtained / total) * 100;
}`,
    tests: [{ input: [200, 150], expected: 75 }],
    hints: ["Formula: obtained / total * 100", "Parentheses lagao taaki division pehle ho"]
  });

  // 47
  exercises.push({
    id: "03-01-arithmetic-comparison-47",
    title: "Number ke digits ke beech ka difference nikalo",
    starterCode: `function digitDifference(num) {
  // TODO: sabse bada digit - sabse chhota digit
  // 832 -> 8-2 = 6
}`,
    solution: `function digitDifference(num) {
  const digits = Math.abs(num).toString().split("").map(Number);
  return Math.max(...digits) - Math.min(...digits);
}`,
    tests: [{ input: [832], expected: 6 }],
    hints: ["Number ko digits array me convert karo", "Math.max aur Math.min se bada/chhota nikalo"]
  });

  // 48
  exercises.push({
    id: "03-01-arithmetic-comparison-48",
    title: "String ke comparison operators predict karo",
    starterCode: `function stringComparison() {
  // TODO: ye comparisons ke results return karo
  // "a" < "b", "A" < "a", "10" < "9", "apple" === "Apple"
}`,
    solution: `function stringComparison() {
  return ["a" < "b", "A" < "a", "10" < "9", "apple" === "Apple"];
}`,
    tests: [{ input: [], expected: "true,true,true,false" }],
    hints: ["String comparison ASCII values se hoti hai", "Uppercase letters chhoti ASCII value rakhte hain"]
  });

  // 49
  exercises.push({
    id: "03-01-arithmetic-comparison-49",
    title: "Arithmetic operations se Pythagorean triplet check karo",
    starterCode: `function isPythagorean(a, b, c) {
  // TODO: a²+b²=c² check karo (sorted sides assumed)
}`,
    solution: `function isPythagorean(a, b, c) {
  return a ** 2 + b ** 2 === c ** 2;
}`,
    tests: [{ input: [3, 4, 5], expected: "true" }],
    hints: ["** 2 se square nikalo", "=== se strict equality check karo"]
  });

  // 50
  exercises.push({
    id: "03-01-arithmetic-comparison-50",
    title: "Comprehensive calculator function banao",
    starterCode: `function calculate(a, operator, b) {
  // TODO: operator ke hisaab se calculation karo
  // +, -, *, /, %, ** sab handle karo
  // Invalid operator ho toh "Invalid operator" return karo
}`,
    solution: `function calculate(a, operator, b) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    case "%": return a % b;
    case "**": return a ** b;
    default: return "Invalid operator";
  }
}`,
    tests: [{ input: [5, "+", 3], expected: 8 }],
    hints: ["Switch statement use karo operator ke liye", "Division by zero handle karo"]
  });

  return exercises;
}

// ============================================================
// LESSON 2: logical-ternary (50 exercises)
// ============================================================
function generateLogicalTernary() {
  const exercises = [];

  // 01
  exercises.push({
    id: "03-02-logical-ternary-01",
    title: "Default value pattern implement karo",
    starterCode: `function getUserName(name) {
  // TODO: name hai toh wo, nahi toh "Guest"
  // || operator use karo
}`,
    solution: `function getUserName(name) {
  return name || "Guest";
}`,
    tests: [{ input: [null], expected: "Guest" }],
    hints: ["|| operator left side falsy hai toh right side return karta hai", "null, undefined, \"\", 0, false sab falsy hain"]
  });

  // 02
  exercises.push({
    id: "03-02-logical-ternary-02",
    title: "Ternary operator se login status banao",
    starterCode: `function loginStatus(isLoggedIn) {
  // TODO: true -> "Welcome back!", false -> "Please login"
  // Ternary operator use karo
}`,
    solution: `function loginStatus(isLoggedIn) {
  return isLoggedIn ? "Welcome back!" : "Please login";
}`,
    tests: [{ input: [true], expected: "Welcome back!" }],
    hints: ["condition ? trueValue : falseValue", "Ternary if-else ka shorthand hai"]
  });

  // 03
  exercises.push({
    id: "03-02-logical-ternary-03",
    title: "Short-circuit evaluation se optional method call karo",
    starterCode: `function callIfExist(callback) {
  // TODO: callback function hai toh call karo, nahi toh kuch mat karo
  // && operator use karo
}`,
    solution: `function callIfExist(callback) {
  return callback && callback();
}`,
    tests: [{ input: [() => "done"], expected: "done" }],
    hints: ["callback && callback() — callback falsy hai toh call nahi hoga", "Short-circuit: left false ho toh right evaluate nahi hota"]
  });

  // 04
  exercises.push({
    id: "03-02-logical-ternary-04",
    title: "Nullish coalescing operator ?? vs || difference samjho",
    starterCode: `function compareDefaults(value) {
  // TODO: ?? aur || ke results return karo
  // value = 0: || -> "default", ?? -> 0
  // value = "": || -> "default", ?? -> ""
  // value = null: dono -> "default"
}`,
    solution: `function compareDefaults(value) {
  return {
    orResult: value || "default",
    nullishResult: value ?? "default"
  };
}`,
    tests: [{ input: [0], expected: '{"orResult":"default","nullishResult":0}' }],
    hints: ["|| falsy values (0, \"\", false, null, undefined, NaN) ke liye default deta hai", "?? sirf null/undefined ke liye default deta hai"]
  });

  // 05
  exercises.push({
    id: "03-02-logical-ternary-05",
    title: "NOT operator se boolean flip karo",
    starterCode: `function negate(value) {
  // TODO: value ka boolean flip karo
  // true -> false, false -> true
}`,
    solution: `function negate(value) {
  return !value;
}`,
    tests: [{ input: [true], expected: "false" }],
    hints: ["! operator boolean ko flip kar deta hai", "Non-empty string bhi truthy hai — !\"hello\" = false"]
  });

  // 06
  exercises.push({
    id: "03-02-logical-ternary-06",
    title: "Ternary chain use karo color ke liye",
    starterCode: `function getColor(code) {
  // TODO: 1 -> "red", 2 -> "green", 3 -> "blue", any other -> "unknown"
}`,
    solution: `function getColor(code) {
  return code === 1 ? "red" : code === 2 ? "green" : code === 3 ? "blue" : "unknown";
}`,
    tests: [{ input: [2], expected: "green" }],
    hints: ["Nested ternary use karo", "Pehle 1 check karo, fir 2, fir 3, fir default"]
  });

  // 07
  exercises.push({
    id: "03-02-logical-ternary-07",
    title: "Short-circuit se DOM property safe access karo",
    starterCode: `function getTitle(element) {
  // TODO: element hai toh title, nahi toh ""
  // && aur || use karo
}`,
    solution: `function getTitle(element) {
  return element && element.title || "";
}`,
    tests: [{ input: [{title:"Hello"}], expected: "Hello" }],
    hints: ["element && element.title — element null toh false", "|| "" se default empty string milegi"]
  });

  // 08
  exercises.push({
    id: "03-02-logical-ternary-08",
    title: "Logical assignment operator ??= use karo",
    starterCode: `function initConfig(config) {
  // TODO: config ke properties ko defaults se initialize karo using ??=
  // host ??= "localhost"
  // port ??= 3000
}`,
    solution: `function initConfig(config) {
  config.host ??= "localhost";
  config.port ??= 3000;
  return config;
}`,
    tests: [{ input: [{}], expected: '{"host":"localhost","port":3000}' }],
    hints: ["??= sirf null/undefined hone pe assign karta hai", "||= har falsy value pe assign karta hai"]
  });

  // 09
  exercises.push({
    id: "03-02-logical-ternary-09",
    title: "AND operator se feature flag check karo",
    starterCode: `function showFeature(user, featureFlag) {
  // TODO: dono true ho toh true, nahi toh false
  // && operator use karo
}`,
    solution: `function showFeature(user, featureFlag) {
  return user && featureFlag;
}`,
    tests: [{ input: [true, true], expected: "true" }],
    hints: ["&& dono true hone pe true deta hai", "Short-circuit: pehla false ho toh second evaluate nahi hota"]
  });

  // 10
  exercises.push({
    id: "03-02-logical-ternary-10",
    title: "Ternary se absolute value nikalo bina Math.abs ke",
    starterCode: `function abs(num) {
  // TODO: ternary use karke absolute value return karo
}`,
    solution: `function abs(num) {
  return num < 0 ? -num : num;
}`,
    tests: [{ input: [-7], expected: 7 }],
    hints: ["num < 0 hai toh -num return karo", "Nahi toh num hi return karo"]
  });

  // 11
  exercises.push({
    id: "03-02-logical-ternary-11",
    title: "OR operator se multiple default values handle karo",
    starterCode: `function getSettings(settings) {
  // TODO: har property ke liye default do:
  // theme || "light", lang || "en", fontSize || 14
}`,
    solution: `function getSettings(settings) {
  return {
    theme: settings.theme || "light",
    lang: settings.lang || "en",
    fontSize: settings.fontSize || 14
  };
}`,
    tests: [{ input: [{}], expected: '{"theme":"light","lang":"en","fontSize":14}' }],
    hints: ["|| operator har falsy value ke liye default deta hai", "Empty string \"\" aur 0 bhi falsy hain — galat ho sakta hai"]
  });

  // 12
  exercises.push({
    id: "03-02-logical-ternary-12",
    title: "Short-circuit se early return pattern banao",
    starterCode: `function processUser(user) {
  // TODO: user nahi hai toh "No user" return karo using &&
  // user hai toh "Processing {user.name}" return karo
}`,
    solution: `function processUser(user) {
  return user && \`Processing \${user.name}\` || "No user";
}`,
    tests: [{ input: [{name:"John"}], expected: "Processing John" }],
    hints: ["user && message — user falsy hai toh false", "|| "No user" se default milega"]
  });

  // 13
  exercises.push({
    id: "03-02-logical-ternary-13",
    title: "Ternary se month name nikalo number se",
    starterCode: `function monthName(num) {
  // TODO: 1 -> "January", 2 -> "February"... 12 -> "December"
  // Invalid -> "Invalid month"
}`,
    solution: `function monthName(num) {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return num >= 1 && num <= 12 ? months[num - 1] : "Invalid month";
}`,
    tests: [{ input: [3], expected: "March" }],
    hints: ["Array index 0 se shuru hota hai — num-1 karo", "Range check karo pehle"]
  });

  // 14
  exercises.push({
    id: "03-02-logical-ternary-14",
    title: "NOT operator se array empty check karo",
    starterCode: `function isEmpty(arr) {
  // TODO: array empty hai ya nahi
  // !arr.length use karo (length 0 ho toh truthy hoga ! se)
}`,
    solution: `function isEmpty(arr) {
  return !arr.length;
}`,
    tests: [{ input: [[]], expected: "true" }],
    hints: ["arr.length 0 hai toh !0 = true", "0 falsy hai — ! se truthy ho jayega"]
  });

  // 15
  exercises.push({
    id: "03-02-logical-ternary-15",
    title: "Logical operators se validation chain banao",
    starterCode: `function validateEmail(email) {
  // TODO: email exist karta hai, string hai, aur @ contain karta hai
  // && chain use karo
}`,
    solution: `function validateEmail(email) {
  return typeof email === "string" && email.includes("@") && email.length > 5;
}`,
    tests: [{ input: ["test@test.com"], expected: "true" }],
    hints: ["Type check pehle karo", "Then @ check karo with includes()"]
  });

  // 16
  exercises.push({
    id: "03-02-logical-ternary-16",
    title: "Ternary se sign nikalo number ka",
    starterCode: `function sign(num) {
  // TODO: positive -> 1, negative -> -1, zero -> 0
}`,
    solution: `function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}`,
    tests: [{ input: [-5], expected: -1 }],
    hints: ["Nested ternary use karo", "Pehle positive check karo, fir negative, fir zero"]
  });

  // 17
  exercises.push({
    id: "03-02-logical-ternary-17",
    title: "OR operator se sum with default",
    starterCode: `function sumOrDefault(arr) {
  // TODO: array ke numbers ka sum nikalo
  // Empty array hai toh 0 return karo
  // || operator use karo
}`,
    solution: `function sumOrDefault(arr) {
  return arr.reduce((sum, n) => sum + n, 0) || 0;
}`,
    tests: [{ input: [[1,2,3]], expected: 6 }],
    hints: ["Reduce se sum nikalo initial value 0 ke saath", "|| 0 se empty array ke liye 0 aayega"]
  });

  // 18
  exercises.push({
    id: "03-02-logical-ternary-18",
    title: "Short-circuit se value assign karo conditionally",
    starterCode: `let score = 75;
let grade;

// TODO: grade assign karo using short-circuit
// score >= 50 && (grade = "Pass")
// score < 50 && (grade = "Fail")
`,
    solution: `let score = 75;
let grade;
score >= 50 && (grade = "Pass");
score < 50 && (grade = "Fail");`,
    tests: [{ input: [], expected: "Pass" }],
    hints: ["&& operator short-circuit karta hai", "Assignment expression use karo parentheses me"]
  });

  // 19
  exercises.push({
    id: "03-02-logical-ternary-19",
    title: "Ternary se string truncation karo",
    starterCode: `function truncate(str, maxLen) {
  // TODO: string maxLen se zyada lambi hai toh "..." lagao
  // "Hello World", 5 -> "Hello..."
}`,
    solution: `function truncate(str, maxLen) {
  return str.length > maxLen ? str.slice(0, maxLen) + "..." : str;
}`,
    tests: [{ input: ["Hello World", 5], expected: "Hello..." }],
    hints: ["str.length > maxLen check karo", "slice(0, maxLen) se prefix nikalo"]
  });

  // 20
  exercises.push({
    id: "03-02-logical-ternary-20",
    title: "Double NOT (!!) use karke truthy value ko boolean me convert karo",
    starterCode: `function toBoolean(value) {
  // TODO: value ko boolean me convert karo using !!
  // "hello" -> true, 0 -> false
}`,
    solution: `function toBoolean(value) {
  return !!value;
}`,
    tests: [{ input: ["hello"], expected: "true" }],
    hints: ["!value se boolean milta hai, fir ! se flip hota hai", "!! truthy/falsy ko actual boolean me convert karta hai"]
  });

  // 21
  exercises.push({
    id: "03-02-logical-ternary-21",
    title: "Nullish coalescing se nested default values do",
    starterCode: `function getDeepDefault(obj) {
  // TODO: obj.a?.b ?? "default"
  // Safe access with nullish coalescing
}`,
    solution: `function getDeepDefault(obj) {
  return obj?.a?.b ?? "default";
}`,
    tests: [{ input: [{}], expected: "default" }],
    hints: ["Optional chaining se safe access", "?? se default value milegi null/undefined pe"]
  });

  // 22
  exercises.push({
    id: "03-02-logical-ternary-22",
    title: "Logical operators se age group classify karo",
    starterCode: `function ageCategory(age) {
  // TODO: && chain use karo
  // 0-12: "child", 13-19: "teen", 20-59: "adult", 60+: "senior"
}`,
    solution: `function ageCategory(age) {
  if (age >= 0 && age <= 12) return "child";
  if (age >= 13 && age <= 19) return "teen";
  if (age >= 20 && age <= 59) return "adult";
  if (age >= 60) return "senior";
  return "invalid";
}`,
    tests: [{ input: [25], expected: "adult" }],
    hints: ["Range check ke liye && use karo", "Order me check karo — sabse chhoti range pehle"]
  });

  // 23
  exercises.push({
    id: "03-02-logical-ternary-23",
    title: "OR operator se event handler pattern banao",
    starterCode: `function handleClick(handler) {
  // TODO: handler hai toh call karo, nahi toh console.log("No handler")
  // || operator use karo
}`,
    solution: `function handleClick(handler) {
  return (handler && handler()) || console.log("No handler");
}`,
    tests: [{ input: [() => "clicked"], expected: "clicked" }],
    hints: ["handler && handler() — handler exist toh call karo", "|| se fallback action karo"]
  });

  // 24
  exercises.push({
    id: "03-02-logical-ternary-24",
    title: "Ternary se currency formatter banao",
    starterCode: `function formatCurrency(amount, currency) {
  // TODO: currency "USD" ho toh "$" prefix, "EUR" ho toh "€", else currency + " "
  // Ternary use karo
}`,
    solution: `function formatCurrency(amount, currency) {
  const symbol = currency === "USD" ? "$" : currency === "EUR" ? "€" : currency + " ";
  return symbol + amount;
}`,
    tests: [{ input: [100, "USD"], expected: "$100" }],
    hints: ["Nested ternary se symbol nikalo", "Template literal se format karo"]
  });

  // 25
  exercises.push({
    id: "03-02-logical-ternary-25",
    title: "NOT operator se authentication guard banao",
    starterCode: `function requireAuth(user) {
  // TODO: user logged in nahi hai toh "Unauthorized" throw karo
  // !user use karo
}`,
    solution: `function requireAuth(user) {
  if (!user || !user.isLoggedIn) throw new Error("Unauthorized");
  return user;
}`,
    tests: [{ input: [{isLoggedIn:true}], expected: '[object Object]' }],
    hints: ["!user check karo pehle", "Error throw karo unauthorized case ke liye"]
  });

  // 26
  exercises.push({
    id: "03-02-logical-ternary-26",
    title: "Short-circuit se memoized function banao",
    starterCode: `const memo = {};
function memoized(key, fn) {
  // TODO: cache me hai toh return karo, nahi toh compute karo aur store karo
}`,
    solution: `const memo = {};
function memoized(key, fn) {
  return memo[key] = memo[key] || fn();
}`,
    tests: [{ input: ["k", () => 42], expected: 42 }],
    hints: ["memo[key] || fn() — cache miss pe compute karo", "Assignment bhi ho jayega expression me"]
  });

  // 27
  exercises.push({
    id: "03-02-logical-ternary-27",
    title: "Ternary se boolean to string convert karo",
    starterCode: `function boolToString(val) {
  // TODO: true -> "Yes", false -> "No"
}`,
    solution: `function boolToString(val) {
  return val ? "Yes" : "No";
}`,
    tests: [{ input: [true], expected: "Yes" }],
    hints: ["Ternary operator use karo", "Direct comparison mat karo — truthy/falsy use karo"]
  });

  // 28
  exercises.push({
    id: "03-02-logical-ternary-28",
    title: "AND operator se object property setter banao",
    starterCode: `function setProperty(obj, key, value) {
  // TODO: value truthy hai toh set karo, nahi toh delete karo
  // && use karo
}`,
    solution: `function setProperty(obj, key, value) {
  value && (obj[key] = value);
  !value && delete obj[key];
  return obj;
}`,
    tests: [{ input: [{}, "a", 1], expected: '{"a":1}' }],
    hints: ["value && assignment — value truthy hai toh assign hoga", "!value && delete — value falsy hai toh delete hoga"]
  });

  // 29
  exercises.push({
    id: "03-02-logical-ternary-29",
    title: "Nullish coalescing se array element access karo",
    starterCode: `function safeGet(arr, index) {
  // TODO: index pe element hai toh wo, nahi toh "N/A"
  // ?? use karo
}`,
    solution: `function safeGet(arr, index) {
  return arr[index] ?? "N/A";
}`,
    tests: [{ input: [[1,2,3], 1], expected: 2 }],
    hints: ["arr[index] se element nikalo", "?? se null/undefined hone pe default milega"]
  });

  // 30
  exercises.push({
    id: "03-02-logical-ternary-30",
    title: "Ternary se day/night status banao",
    starterCode: `function timeOfDay(hour) {
  // TODO: 6-17: "day", 18-5: "night"
}`,
    solution: `function timeOfDay(hour) {
  return hour >= 6 && hour <= 17 ? "day" : "night";
}`,
    tests: [{ input: [14], expected: "day" }],
    hints: ["Range check karo && se", "Ternary se result return karo"]
  });

  // 31
  exercises.push({
    id: "03-02-logical-ternary-31",
    title: "NOT operator se function existence check karo",
    starterCode: `function safeCall(fn) {
  // TODO: fn function hai toh call karo, nahi toh null return karo
  // typeof check karo
}`,
    solution: `function safeCall(fn) {
  return typeof fn === "function" ? fn() : null;
}`,
    tests: [{ input: [() => 42], expected: 42 }],
    hints: ["typeof fn === 'function' se check karo", "Ternary se call karo agar function hai"]
  });

  // 32
  exercises.push({
    id: "03-02-logical-ternary-32",
    title: "OR aur AND mix karke default with override banao",
    starterCode: `function mergeWithDefaults(options, defaults) {
  // TODO: options me jo hai wo rakhlo, baaki defaults se lo
  // Logical assignment use karo
}`,
    solution: `function mergeWithDefaults(options, defaults) {
  return { ...defaults, ...options };
}`,
    tests: [{ input: [{a:1},{a:0,b:2}], expected: '{"a":1,"b":2}' }],
    hints: ["Spread operator se merge karo", "Options baad me aayega toh wo override karega"]
  });

  // 33
  exercises.push({
    id: "03-02-logical-ternary-33",
    title: "Ternary se password strength check karo",
    starterCode: `function passwordStrength(password) {
  // TODO: length 8+ aur uppercase hai toh "strong"
  // Length 6+ hai toh "medium", warna "weak"
}`,
    solution: `function passwordStrength(password) {
  return password.length >= 8 && /[A-Z]/.test(password) ? "strong" :
         password.length >= 6 ? "medium" : "weak";
}`,
    tests: [{ input: ["Hello123"], expected: "strong" }],
    hints: ["Regex se uppercase check karo", "Nested ternary use karo"]
  });

  // 34
  exercises.push({
    id: "03-02-logical-ternary-34",
    title: "Short-circuit se lazy initialization karo",
    starterCode: `let _cache = null;
function getCache() {
  // TODO: _cache hai toh wo, nahi toh initialize karo aur return karo
}`,
    solution: `let _cache = null;
function getCache() {
  return _cache = _cache || {};
}`,
    tests: [{ input: [], expected: '{}' }],
    hints: ["_cache || {} — null hai toh empty object assign ho jayega", "Assignment expression value return karta hai"]
  });

  // 35
  exercises.push({
    id: "03-02-logical-ternary-35",
    title: "AND operator se conditional property access karo",
    starterCode: `function getUserEmail(user) {
  // TODO: user hai, email hai, toh email return karo
  // && chain use karo
}`,
    solution: `function getUserEmail(user) {
  return user && user.email;
}`,
    tests: [{ input: [{email:"test@test.com"}], expected: "test@test.com" }],
    hints: ["user && user.email — user null toh false", "Short-circuit se safe access hota hai"]
  });

  // 36
  exercises.push({
    id: "03-02-logical-ternary-36",
    title: "Ternary se array ke first element ko default do",
    starterCode: `function firstOrDefault(arr) {
  // TODO: arr[0] hai toh wo, nahi toh "empty"
  // ?? use karo — 0 bhi valid value ho sakti hai!
}`,
    solution: `function firstOrDefault(arr) {
  return arr[0] ?? "empty";
}`,
    tests: [{ input: [[0]], expected: 0 }],
    hints: ["?? sirf null/undefined ke liye default deta hai", "|| use karoge toh 0 bhi replace ho jayega — galat hoga"]
  });

  // 37
  exercises.push({
    id: "03-02-logical-ternary-37",
    title: "NOT operator se negation logic implement karo",
    starterCode: `function isNotAdmin(user) {
  // TODO: user admin nahi hai toh true
  // ! operator use karo
}`,
    solution: `function isNotAdmin(user) {
  return !user?.isAdmin;
}`,
    tests: [{ input: [{isAdmin:false}], expected: "true" }],
    hints: ["Optional chaining ke saath ! use karo", "isAdmin undefined ho toh !undefined = true"]
  });

  // 38
  exercises.push({
    id: "03-02-logical-ternary-38",
    title: "OR operator se fallback function call karo",
    starterCode: `function withFallback(primary, fallback) {
  // TODO: primary function hai toh call karo
  // Nahi toh fallback call karo
}`,
    solution: `function withFallback(primary, fallback) {
  return (primary && primary()) || (fallback && fallback());
}`,
    tests: [{ input: [null, () => "fallback"], expected: "fallback" }],
    hints: ["primary && primary() — primary exist toh call karo", "|| se fallback chalega"]
  });

  // 39
  exercises.push({
    id: "03-02-logical-ternary-39",
    title: "Ternary se color code validate karo",
    starterCode: `function isValidColor(color) {
  // TODO: "#" se shuru hota hai aur 7 characters ka hai toh valid
  // Ternary use karo
}`,
    solution: `function isValidColor(color) {
  return color && color[0] === "#" && color.length === 7 ? true : false;
}`,
    tests: [{ input: ["#FF0000"], expected: "true" }],
    hints: ["Pehle character check karo: color[0] === '#'", "Length check karo: color.length === 7"]
  });

  // 40
  exercises.push({
    id: "03-02-logical-ternary-40",
    title: "Logical operators se complex condition banao",
    starterCode: `function canAccess(user, resource) {
  // TODO: user logged in hai AND (admin hai OR resource owner hai)
}`,
    solution: `function canAccess(user, resource) {
  return user.isLoggedIn && (user.isAdmin || user.id === resource.ownerId);
}`,
    tests: [{ input: [{isLoggedIn:true,isAdmin:true}, {ownerId:1}], expected: "true" }],
    hints: ["Parentheses me group karo OR condition", "AND pehle evaluate hota hai but parentheses override karte hain"]
  });

  // 41
  exercises.push({
    id: "03-02-logical-ternary-41",
    title: "Nullish coalescing se nested default do",
    starterCode: `function getNestedDefault(config) {
  // TODO: config.db?.host ?? "localhost"
  // config.db?.port ?? 5432
}`,
    solution: `function getNestedDefault(config) {
  return {
    host: config.db?.host ?? "localhost",
    port: config.db?.port ?? 5432
  };
}`,
    tests: [{ input: [{}], expected: '{"host":"localhost","port":5432}' }],
    hints: ["Optional chaining se safe access", "?? se default value milegi"]
  });

  // 42
  exercises.push({
    id: "03-02-logical-ternary-42",
    title: "Ternary se role-based access control banao",
    starterCode: `function getPermission(role) {
  // TODO: "admin" -> full, "editor" -> write, "viewer" -> read
}`,
    solution: `function getPermission(role) {
  return role === "admin" ? "full" : role === "editor" ? "write" : "read";
}`,
    tests: [{ input: ["editor"], expected: "write" }],
    hints: ["Nested ternary use karo", "Sabse specific check pehle karo"]
  });

  // 43
  exercises.push({
    id: "03-02-logical-ternary-43",
    title: "AND operator se conditional array push karo",
    starterCode: `function conditionalPush(arr, value, condition) {
  // TODO: condition true hai toh push karo
  // && use karo
}`,
    solution: `function conditionalPush(arr, value, condition) {
  condition && arr.push(value);
  return arr;
}`,
    tests: [{ input: [[], "a", true], expected: "a" }],
    hints: ["condition && arr.push(value) — condition true toh push hoga", "Push method undefined return karta hai but side effect hota hai"]
  });

  // 44
  exercises.push({
    id: "03-02-logical-ternary-44",
    title: "Ternary se file extension checker banao",
    starterCode: `function getFileType(filename) {
  // TODO: ".jpg"/".png" -> "image", ".js" -> "script", ".css" -> "style"
  // Any other -> "unknown"
}`,
    solution: `function getFileType(filename) {
  const ext = filename.split(".").pop();
  return ext === "jpg" || ext === "png" ? "image" :
         ext === "js" ? "script" :
         ext === "css" ? "style" : "unknown";
}`,
    tests: [{ input: ["photo.jpg"], expected: "image" }],
    hints: ["Extension nikalo split se", "|| se multiple extensions check karo"]
  });

  // 45
  exercises.push({
    id: "03-02-logical-ternary-45",
    title: "NOT operator se array inclusion check banao",
    starterCode: `function notIncludes(arr, value) {
  // TODO: array me value nahi hai toh true
  // !arr.includes(value) use karo
}`,
    solution: `function notIncludes(arr, value) {
  return !arr.includes(value);
}`,
    tests: [{ input: [[1,2,3], 4], expected: "true" }],
    hints: [".includes() true/false return karta hai", "! se flip ho jayega"]
  });

  // 46
  exercises.push({
    id: "03-02-logical-ternary-46",
    title: "Short-circuit se event delegation pattern banao",
    starterCode: `function delegate(event, target, handler) {
  // TODO: event.target === target hai toh handler call karo
  // && use karo
}`,
    solution: `function delegate(event, target, handler) {
  return event.target === target && handler(event);
}`,
    tests: [{ input: [{target:"btn"}, "btn", e => "handled"], expected: "handled" }],
    hints: ["=== se strict equality check karo", "&& se short-circuit hoga"]
  });

  // 47
  exercises.push({
    id: "03-02-logical-ternary-47",
    title: "Ternary se switch alternative likho",
    starterCode: `function getHttpStatus(code) {
  // TODO: 200 -> "OK", 404 -> "Not Found", 500 -> "Server Error"
  // Ternary chain use karo
}`,
    solution: `function getHttpStatus(code) {
  return code === 200 ? "OK" : code === 404 ? "Not Found" : code === 500 ? "Server Error" : "Unknown";
}`,
    tests: [{ input: [404], expected: "Not Found" }],
    hints: ["Nested ternary use karo", "Switch alternative ke liye achha hai"]
  });

  // 48
  exercises.push({
    id: "03-02-logical-ternary-48",
    title: "OR operator se template engine pattern banao",
    starterCode: `function render(template, data) {
  // TODO: template me {{key}} ko data[key] se replace karo
  // Data nahi hai toh "" return karo
}`,
    solution: `function render(template, data) {
  return (data && template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? "")) || "";
}`,
    tests: [{ input: ["Hello {{name}}", {name:"World"}], expected: "Hello World" }],
    hints: ["Regex se template variables dhundho", "Replace callback me data se value nikalo"]
  });

  // 49
  exercises.push({
    id: "03-02-logical-ternary-49",
    title: "Logical operators se comprehensive validator banao",
    starterCode: `function validate(data) {
  // TODO: data object hai, name string hai, age number hai
  // Sab conditions && se check karo
}`,
    solution: `function validate(data) {
  return data !== null && typeof data === "object" &&
         typeof data.name === "string" && data.name.length > 0 &&
         typeof data.age === "number" && data.age > 0;
}`,
    tests: [{ input: [{name:"John",age:25}], expected: "true" }],
    hints: ["Type checks pehle karo", "Length aur range checks baad me karo"]
  });

  // 50
  exercises.push({
    id: "03-02-logical-ternary-50",
    title: "Comprehensive nullish handling pattern banao",
    starterCode: `function getDisplayValue(value) {
  // TODO: null/undefined -> "N/A"
  // 0 -> "0" (valid hai!)
  // "" -> "(empty)" (valid hai!)
  // false -> "false" (valid hai!)
  // Use ?? for null/undefined, use specific checks for others
}`,
    solution: `function getDisplayValue(value) {
  return value ?? "N/A";
}`,
    tests: [{ input: [null], expected: "N/A" }],
    hints: ["?? sirf null/undefined ke liye default deta hai", "0, \"\", false sab valid values hain — ?? inhe replace nahi karega"]
  });

  return exercises;
}

// ============================================================
// MAIN
// ============================================================
const lessonGenerators = [
  { slug: "arithmetic-comparison", generator: generateArithmeticComparison },
  { slug: "logical-ternary", generator: generateLogicalTernary },
];

for (const { slug, generator } of lessonGenerators) {
  const dir = path.join(outputBase);
  ensureDir(dir);

  const exercises = generator();
  console.log(`Generating ${exercises.length} exercises for lesson: ${slug}`);

  exercises.forEach((exercise, index) => {
    const num = String(index + 1).padStart(2, "0");
    const filename = `${slug}-${num}.json`;
    const filepath = path.join(dir, filename);
    writeExercise(filepath, exercise);
  });
}

console.log("Module 03 exercises generated successfully!");
