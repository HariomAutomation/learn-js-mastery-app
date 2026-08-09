import fs from "fs";
import path from "path";

const outputBase = "src/content/02-data-types/exercises";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeExercise(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ============================================================
// LESSON 1: primitive-types (50 exercises)
// ============================================================
function generatePrimitiveTypes() {
  const exercises = [];

  // 01
  exercises.push({
    id: "02-01-primitive-types-01",
    title: "typeof function banao jo kisi bhi value ka type return kare",
    starterCode: `function checkType(value) {
  // TODO: typeof use karke value ka type return karo
  // "number", "string", "boolean", "undefined", "object" (for null), "bigint", "symbol"
}`,
    solution: `function checkType(value) {
  return typeof value;
}`,
    tests: [{ input: ["hello"], expected: "string" }],
    hints: [
      "typeof operator use karo jo value ka type string me return karta hai",
      "typeof null 'object' return karta hai — ye JavaScript ki quirk hai"
    ]
  });

  // 02
  exercises.push({
    id: "02-01-primitive-types-02",
    title: "NaN detect karo aur true/false return karo",
    starterCode: `function isNaN(value) {
  // TODO: check karo ki value NaN hai ya nahi
  // NaN === NaN hota hai ya nahi? Socho!
}`,
    solution: `function isNaN(value) {
  return Number.isNaN(value);
}`,
    tests: [{ input: [NaN], expected: "true" }],
    hints: [
      "Directly value === NaN use mat karo — NaN === NaN hamesha false hota hai",
      "Number.isNaN() method use karo jo sirf NaN ke liye true deta hai"
    ]
  });

  // 03
  exercises.push({
    id: "02-01-primitive-types-03",
    title: "String me number convert karo aur NaN handle karo",
    starterCode: `function safeToNumber(str) {
  // TODO: string ko number me convert karo
  // Agar valid number nahi hai toh NaN return karo
}`,
    solution: `function safeToNumber(str) {
  const num = Number(str);
  return num;
}`,
    tests: [{ input: ["42"], expected: 42 }],
    hints: [
      "Number() constructor use karo type conversion ke liye",
      "Agar string valid number nahi hai toh NaN automatically return hoga"
    ]
  });

  // 04
  exercises.push({
    id: "02-01-primitive-types-04",
    title: "BigInt use karke do bade numbers ka product nikalo",
    starterCode: `function bigProduct(a, b) {
  // TODO: dono numbers ko BigInt me convert karo aur multiply karo
}`,
    solution: `function bigProduct(a, b) {
  return BigInt(a) * BigInt(b);
}`,
    tests: [{ input: ["9007199254740992", "2"], expected: "18014398509481984" }],
    hints: [
      "BigInt() constructor se number ya string ko BigInt me badlo",
      "BigInt me sirf BigInt values ke saath operations kar sakte ho"
    ]
  });

  // 05
  exercises.push({
    id: "02-01-primitive-types-05",
    title: "Symbol banao jo unique identifier ho",
    starterCode: `function createUniqueId() {
  // TODO: ek unique Symbol banao aur return karo
}`,
    solution: `function createUniqueId() {
  return Symbol("id");
}`,
    tests: [{ input: [], expected: "symbol" }],
    hints: [
      "Symbol() function se unique value milti hai",
      "Har Symbol unique hota hai chahe same description ho"
    ]
  });

  // 06
  exercises.push({
    id: "02-01-primitive-types-06",
    title: "Variable ki type check karo aur message banao",
    starterCode: `function typeMessage(value) {
  // TODO: type check karo aur return karo:
  // number -> "Ye ek number hai"
  // string -> "Ye ek string hai"
  // boolean -> "Ye ek boolean hai"
  // default -> "Unknown type"
}`,
    solution: `function typeMessage(value) {
  const type = typeof value;
  if (type === "number") return "Ye ek number hai";
  if (type === "string") return "Ye ek string hai";
  if (type === "boolean") return "Ye ek boolean hai";
  return "Unknown type";
}`,
    tests: [{ input: [42], expected: "Ye ek number hai" }],
    hints: [
      "typeof se pehle type nikal lo, fir if/else se check karo",
      "typeof null 'object' return karta hai — isko mat bhoolna"
    ]
  });

  // 07
  exercises.push({
    id: "02-01-primitive-types-07",
    title: "Undefined aur null me difference check karo",
    starterCode: `function isNullish(value) {
  // TODO: value null ya undefined hai toh true return karo
  // false, 0, "" ye sab nullish nahi hain
}`,
    solution: `function isNullish(value) {
  return value === null || value === undefined;
}`,
    tests: [{ input: [null], expected: "true" }],
    hints: [
      "Nullish sirf null aur undefined hota hai",
      "=== operator use karo strict comparison ke liye"
    ]
  });

  // 08
  exercises.push({
    id: "02-01-primitive-types-08",
    title: "String length nikalo bina .length property ke",
    starterCode: `function getStringLength(str) {
  // TODO: string ki length bina .length ke nikalo
  // Loop ya koi aur tareeka use karo
}`,
    solution: `function getStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}`,
    tests: [{ input: ["hello"], expected: 5 }],
    hints: [
      "for...of loop use karke har character pe count badhao",
      "Count variable initialize karo 0 se pehle"
    ]
  });

  // 09
  exercises.push({
    id: "02-01-primitive-types-09",
    title: "Number ka sign nikalo (-1, 0, ya 1)",
    starterCode: `function sign(num) {
  // TODO: number ka sign return karo
  // Negative hai toh -1, zero hai toh 0, positive hai toh 1
}`,
    solution: `function sign(num) {
  if (num > 0) return 1;
  if (num < 0) return -1;
  return 0;
}`,
    tests: [{ input: [-5], expected: -1 }],
    hints: [
      "Math.sign() bhi use kar sakte ho, but manually bhi kar sakte ho",
      "Pehle positive check karo, fir negative, fir zero return karo"
    ]
  });

  // 10
  exercises.push({
    id: "02-01-primitive-types-10",
    title: "Boolean value ko string me convert karo",
    starterCode: `function boolToString(val) {
  // TODO: boolean ko string me convert karo
  // true -> "haan", false -> "nahi"
}`,
    solution: `function boolToString(val) {
  return val ? "haan" : "nahi";
}`,
    tests: [{ input: [true], expected: "haan" }],
    hints: [
      "Ternary operator use karo: condition ? trueVal : falseVal",
      "Boolean directly string me convert karna ho toh String() use karo"
    ]
  });

  // 11
  exercises.push({
    id: "02-01-primitive-types-11",
    title: "String me integer extract karo",
    starterCode: `function extractInteger(str) {
  // TODO: string se pehla integer nikalo
  // "abc123xyz" -> 123
}`,
    solution: `function extractInteger(str) {
  const match = str.match(/\\d+/);
  return match ? Number(match[0]) : NaN;
}`,
    tests: [{ input: ["abc123xyz"], expected: 123 }],
    hints: [
      "String.prototype.match() use karo regex ke saath",
      "Regex pattern /\\d+/ se digits match honge"
    ]
  });

  // 12
  exercises.push({
    id: "02-01-primitive-types-12",
    title: "Infinity check karo",
    starterCode: `function isInfinity(value) {
  // TODO: value Infinity hai ya -Infinity check karo
  // Finite numbers ke liye false return karo
}`,
    solution: `function isInfinity(value) {
  return !isFinite(value) && typeof value === "number";
}`,
    tests: [{ input: [Infinity], expected: "true" }],
    hints: [
      "isFinite() function check karta hai ki value finite hai ya nahi",
      "typeof check bhi zaruri hai kyunki isFinite aur cheezein bhi handle karta hai"
    ]
  });

  // 13
  exercises.push({
    id: "02-01-primitive-types-13",
    title: "String ko reverse karo character by character",
    starterCode: `function reverseString(str) {
  // TODO: string ko reverse karo bina .reverse() ke
}`,
    solution: `function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}`,
    tests: [{ input: ["hello"], expected: "olleh" }],
    hints: [
      "Last character se shuru karo aur pehle character tak jao",
      "Ek empty string lo aur har character ko prepend karo"
    ]
  });

  // 14
  exercises.push({
    id: "02-01-primitive-types-14",
    title: "String me vowels count karo",
    starterCode: `function countVowels(str) {
  // TODO: string me vowels (a,e,i,o,u) kitni hain count karo
}`,
    solution: `function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}`,
    tests: [{ input: ["hello"], expected: 2 }],
    hints: [
      "Vowels ki ek string banao aur .includes() se check karo",
      "Loop se har character ko vowels string me check karo"
    ]
  });

  // 15
  exercises.push({
    id: "02-01-primitive-types-15",
    title: "Number ko binary string me convert karo",
    starterCode: `function toBinary(num) {
  // TODO: number ko binary string me convert karo
  // 5 -> "101"
}`,
    solution: `function toBinary(num) {
  return num.toString(2);
}`,
    tests: [{ input: [5], expected: "101" }],
    hints: [
      "Number.toString(radix) method use karo",
      "Radix 2 hoga binary conversion ke liye"
    ]
  });

  // 16
  exercises.push({
    id: "02-01-primitive-types-16",
    title: "String me first uppercase letter dhundho",
    starterCode: `function firstUppercase(str) {
  // TODO: pehla uppercase letter return karo
  // "helloWorld" -> "W"
  // Agar koi nahi toh null return karo
}`,
    solution: `function firstUppercase(str) {
  for (const char of str) {
    if (char >= "A" && char <= "Z") return char;
  }
  return null;
}`,
    tests: [{ input: ["helloWorld"], expected: "W" }],
    hints: [
      "Char comparison use karo: char >= 'A' && char <= 'Z'",
      "Pehla milte hi return karo aur loop break mat karo"
    ]
  });

  // 17
  exercises.push({
    id: "02-01-primitive-types-17",
    title: "Float number ko 2 decimal places tak round karo",
    starterCode: `function roundToTwo(num) {
  // TODO: number ko 2 decimal places tak round karo
  // 3.456 -> 3.46
}`,
    solution: `function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}`,
    tests: [{ input: [3.456], expected: 3.46 }],
    hints: [
      "Pehle 100 se multiply karo, fir Math.round karo, fir 100 se divide karo",
      "toFixed(2) bhi use kar sakte ho but wo string return karta hai"
    ]
  });

  // 18
  exercises.push({
    id: "02-01-primitive-types-18",
    title: "String me digits ka sum nikalo",
    starterCode: `function digitSum(str) {
  // TODO: string me jo digits hain unka sum nikalo
  // "a1b2c3" -> 6
}`,
    solution: `function digitSum(str) {
  let sum = 0;
  for (const char of str) {
    if (char >= "0" && char <= "9") {
      sum += Number(char);
    }
  }
  return sum;
}`,
    tests: [{ input: ["a1b2c3"], expected: 6 }],
    hints: [
      "Char comparison se digit check karo: char >= '0' && char <= '9'",
      "Digit milne pe Number(char) se convert karo aur sum me add karo"
    ]
  });

  // 19
  exercises.push({
    id: "02-01-primitive-types-19",
    title: "Nullish value ko default se replace karo",
    starterCode: `function withDefault(value, defaultVal) {
  // TODO: value null ya undefined hai toh defaultVal return karo
  // Nahi toh value hi return karo
}`,
    solution: `function withDefault(value, defaultVal) {
  return value !== null && value !== undefined ? value : defaultVal;
}`,
    tests: [{ input: [null, "fallback"], expected: "fallback" }],
    hints: [
      "Nullish sirf null aur undefined hota hai",
      "Ternary operator use karo condition ke liye"
    ]
  });

  // 20
  exercises.push({
    id: "02-01-primitive-types-20",
    title: "Primitive value ka wrapper object banao",
    starterCode: `function toWrapper(value) {
  // TODO: primitive value ka corresponding wrapper object banao
  // 42 -> new Number(42)
  // "hi" -> new String("hi")
}`,
    solution: `function toWrapper(value) {
  const type = typeof value;
  if (type === "number") return new Number(value);
  if (type === "string") return new String(value);
  if (type === "boolean") return new Boolean(value);
  return value;
}`,
    tests: [{ input: [42], expected: "object" }],
    hints: [
      "Number, String, Boolean constructors use karo with new keyword",
      "typeof wrapper object 'object' return karega"
    ]
  });

  // 21
  exercises.push({
    id: "02-01-primitive-types-21",
    title: "String me palindrom check karo",
    starterCode: `function isPalindrome(str) {
  // TODO: string palindrome hai ya nahi check karo
  // "madam" -> true, "hello" -> false
}`,
    solution: `function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}`,
    tests: [{ input: ["madam"], expected: "true" }],
    hints: [
      "String ko array me convert karo split se, fir reverse karo",
      "Compare karo original aur reversed string ko"
    ]
  });

  // 22
  exercises.push({
    id: "02-01-primitive-types-22",
    title: "Number ke digits count karo",
    starterCode: `function countDigits(num) {
  // TODO: number me kitne digits hain count karo
  // 12345 -> 5
}`,
    solution: `function countDigits(num) {
  return Math.abs(num).toString().length;
}`,
    tests: [{ input: [12345], expected: 5 }],
    hints: [
      "Math.abs use karo negative numbers ke liye",
      "Number ko string me convert karo aur .length nikalo"
    ]
  });

  // 23
  exercises.push({
    id: "02-01-primitive-types-23",
    title: "String ko camelCase me convert karo",
    starterCode: `function toCamelCase(str) {
  // TODO: "hello world" -> "helloWorld"
  // Words space se separated hain
}`,
    solution: `function toCamelCase(str) {
  const words = str.split(" ");
  return words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join("");
}`,
    tests: [{ input: ["hello world"], expected: "helloWorld" }],
    hints: [
      "String ko split karo space se aur words array banao",
      "Har word ke pehle character ko uppercase karo except pehla word"
    ]
  });

  // 24
  exercises.push({
    id: "02-01-primitive-types-24",
    title: "Primitive types ka array banao",
    starterCode: `function primitiveArray() {
  // TODO: 5 alag alag primitive type values ka array return karo
  // Ek number, string, boolean, null, undefined hona chahiye
}`,
    solution: `function primitiveArray() {
  return [42, "hello", true, null, undefined];
}`,
    tests: [{ input: [], expected: "5" }],
    hints: [
      "Primitive types hain: number, string, boolean, null, undefined",
      "Array literal [] syntax use karo"
    ]
  });

  // 25
  exercises.push({
    id: "02-01-primitive-types-25",
    title: "String me word count karo",
    starterCode: `function wordCount(str) {
  // TODO: string me kitne words hain count karo
  // "hello world foo" -> 3
}`,
    solution: `function wordCount(str) {
  return str.trim().split(/\\s+/).filter(Boolean).length;
}`,
    tests: [{ input: ["hello world foo"], expected: 3 }],
    hints: [
      "String ko split karo whitespace se using regex: /\\s+/",
      "filter(Boolean) se empty strings remove ho jayengi"
    ]
  });

  // 26
  exercises.push({
    id: "02-01-primitive-types-26",
    title: "NaN ki multiple forms check karo",
    starterCode: `function isActuallyNaN(value) {
  // TODO: value NaN hai check karo
  // parseInt("abc"), Number("abc"), 0/0 ye sab NaN hain
}`,
    solution: `function isActuallyNaN(value) {
  return Number.isNaN(value);
}`,
    tests: [{ input: [parseInt("abc")], expected: "true" }],
    hints: [
      "Number.isNaN() sabse reliable hai NaN check ke liye",
      "Global isNaN() pe mat bharosa karo — wo coercion karta hai"
    ]
  });

  // 27
  exercises.push({
    id: "02-01-primitive-types-27",
    title: "String ke har character ko uppercase karo",
    starterCode: `function toUpperCase(str) {
  // TODO: bina .toUpperCase() ke string ko uppercase karo
}`,
    solution: `function toUpperCase(str) {
  let result = "";
  for (const char of str) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += char;
    }
  }
  return result;
}`,
    tests: [{ input: ["hello"], expected: "HELLO" }],
    hints: [
      "charCodeAt() se character ka ASCII code milta hai",
      "Lowercase ASCII range 97-122 hai, uppercase 65-90 hai — difference 32 hai"
    ]
  });

  // 28
  exercises.push({
    id: "02-01-primitive-types-28",
    title: "Number ke liye min max check karo",
    starterCode: `function inRange(num, min, max) {
  // TODO: num min aur max ke beech me hai ya nahi
  // Include karo min aur max dono
}`,
    solution: `function inRange(num, min, max) {
  return num >= min && num <= max;
}`,
    tests: [{ input: [5, 1, 10], expected: "true" }],
    hints: [
      "Dono conditions check karo: num >= min AND num <= max",
      "&& operator use karo dono conditions ko join karne ke liye"
    ]
  });

  // 29
  exercises.push({
    id: "02-01-primitive-types-29",
    title: "String me special characters count karo",
    starterCode: `function countSpecialChars(str) {
  // TODO: kitne special characters hain string me
  // Letters aur digits ke alava jo bhi ho wo special hai
}`,
    solution: `function countSpecialChars(str) {
  let count = 0;
  for (const char of str) {
    if (!/[a-zA-Z0-9]/.test(char)) count++;
  }
  return count;
}`,
    tests: [{ input: ["hello!@#"], expected: 3 }],
    hints: [
      "Regex /[a-zA-Z0-9]/ se letters aur digits match hote hain",
      "Invert karke check karo: !(/[a-zA-Z0-9]/.test(char))"
    ]
  });

  // 30
  exercises.push({
    id: "02-01-primitive-types-30",
    title: "String ko kebab-case me convert karo",
    starterCode: `function toKebabCase(str) {
  // TODO: "Hello World" -> "hello-world"
  // "camelCase" -> "camel-case"
}`,
    solution: `function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\\s_]+/g, "-")
    .toLowerCase();
}`,
    tests: [{ input: ["Hello World"], expected: "hello-world" }],
    hints: [
      "Pehle camelCase me gap dhoondho regex se: /([a-z])([A-Z])/g",
      "Spaces aur underscores ko dash se replace karo"
    ]
  });

  // 31
  exercises.push({
    id: "02-01-primitive-types-31",
    title: "Number ko Roman numeral me convert karo",
    starterCode: `function toRoman(num) {
  // TODO: number ko roman numeral me convert karo
  // 4 -> "IV", 9 -> "IX", 58 -> "LVIII"
}`,
    solution: `function toRoman(num) {
  const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }
  return result;
}`,
    tests: [{ input: [58], expected: "LVIII" }],
    hints: [
      "Arrays of values aur symbols banao descending order me",
      "Har value ke liye jab tak num bada hai tab tak symbol add karo"
    ]
  });

  // 32
  exercises.push({
    id: "02-01-primitive-types-32",
    title: "String ke first non-repeating character dhundho",
    starterCode: `function firstUniqueChar(str) {
  // TODO: pehla non-repeating character return karo
  // "aabccb" -> "a" (sirf a non-repeating hai)
}`,
    solution: `function firstUniqueChar(str) {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}`,
    tests: [{ input: ["aabccb"], expected: "a" }],
    hints: [
      "indexOf aur lastIndexOf same hai toh character sirf ek baar hai",
      "Har character ke liye dono methods se check karo"
    ]
  });

  // 33
  exercises.push({
    id: "02-01-primitive-types-33",
    title: "Number ka absolute value bina Math.abs ke nikalo",
    starterCode: `function abs(num) {
  // TODO: bina Math.abs ke absolute value return karo
}`,
    solution: `function abs(num) {
  return num < 0 ? -num : num;
}`,
    tests: [{ input: [-5], expected: 5 }],
    hints: [
      "Negative number hai toh -num return karo",
      "Ternary operator use karo: num < 0 ? -num : num"
    ]
  });

  // 34
  exercises.push({
    id: "02-01-primitive-types-34",
    title: "String ko snake_case me convert karo",
    starterCode: `function toSnakeCase(str) {
  // TODO: "Hello World" -> "hello_world"
  // "camelCase" -> "camel_case"
}`,
    solution: `function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\\s-]+/g, "_")
    .toLowerCase();
}`,
    tests: [{ input: ["Hello World"], expected: "hello_world" }],
    hints: [
      "camelCase ke gaps me underscore dalo",
      "Spaces aur dashes ko underscore se replace karo"
    ]
  });

  // 35
  exercises.push({
    id: "02-01-primitive-types-35",
    title: "Fibonacci number nikalo n-th position ka",
    starterCode: `function fibonacci(n) {
  // TODO: n-th fibonacci number return karo
  // 0 -> 0, 1 -> 1, 2 -> 1, 3 -> 2, 4 -> 3
}`,
    solution: `function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`,
    tests: [{ input: [6], expected: 8 }],
    hints: [
      "Pehle 2 values 0 aur 1 hain",
      "Loop se har step pe a = b, b = a + b karo using destructuring"
    ]
  });

  // 36
  exercises.push({
    id: "02-01-primitive-types-36",
    title: "String ke words ko reverse karo",
    starterCode: `function reverseWords(str) {
  // TODO: "hello world" -> "world hello"
  // Words ko reverse karo, characters nahi
}`,
    solution: `function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}`,
    tests: [{ input: ["hello world"], expected: "world hello" }],
    hints: [
      "String ko split karo space se, fir reverse karo array ko",
      "Join karo space se wapas string me"
    ]
  });

  // 37
  exercises.push({
    id: "02-01-primitive-types-37",
    title: "Number ke factorial nikalo",
    starterCode: `function factorial(n) {
  // TODO: n ka factorial return karo
  // 5! = 5*4*3*2*1 = 120
}`,
    solution: `function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}`,
    tests: [{ input: [5], expected: 120 }],
    hints: [
      "1 se n tak loop chalao aur multiply karte jao",
      "Result 1 se initialize karo kyunki 1 * kuch = kuch"
    ]
  });

  // 38
  exercises.push({
    id: "02-01-primitive-types-38",
    title: "String me character frequency map banao",
    starterCode: `function charFrequency(str) {
  // TODO: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 } type ka object banao
}`,
    solution: `function charFrequency(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}`,
    tests: [{ input: ["hello"], expected: '{"h":1,"e":1,"l":2,"o":1}' }],
    hints: [
      "Ek empty object lo aur har character ke count track karo",
      "freq[char] = (freq[char] || 0) + 1 pattern use karo"
    ]
  });

  // 39
  exercises.push({
    id: "02-01-primitive-types-39",
    title: "Two numbers ka GCD nikalo",
    starterCode: `function gcd(a, b) {
  // TODO: Greatest Common Divisor nikalo
  // gcd(12, 8) -> 4
}`,
    solution: `function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}`,
    tests: [{ input: [12, 8], expected: 4 }],
    hints: [
      "Euclidean algorithm use karo",
      "Jab tak b 0 nahi hota tab tak: a = b, b = a % b karo"
    ]
  });

  // 40
  exercises.push({
    id: "02-01-primitive-types-40",
    title: "String ko title case me convert karo",
    starterCode: `function toTitleCase(str) {
  // TODO: "hello world" -> "Hello World"
  // Har word ka pehla capital baaki small
}`,
    solution: `function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}`,
    tests: [{ input: ["hello world"], expected: "Hello World" }],
    hints: [
      "Pehle poori string ko lowercase karo",
      "Split karo aur har word ke pehle character ko uppercase karo"
    ]
  });

  // 41
  exercises.push({
    id: "02-01-primitive-types-41",
    title: "Number ke liye isPrime check karo",
    starterCode: `function isPrime(num) {
  // TODO: number prime hai ya nahi check karo
  // 2, 3, 5, 7 prime hain
}`,
    solution: `function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}`,
    tests: [{ input: [7], expected: "true" }],
    hints: [
      "2 se kam numbers prime nahi hain",
      "Sirf √n tak check karo — agar koi factor nahi mila toh prime hai"
    ]
  });

  // 42
  exercises.push({
    id: "02-01-primitive-types-42",
    title: "String me substring dhundho bina .includes() ke",
    starterCode: `function hasSubstring(str, sub) {
  // TODO: str me substring hai ya nahi check karo bina .includes() ke
}`,
    solution: `function hasSubstring(str, sub) {
  return str.indexOf(sub) !== -1;
}`,
    tests: [{ input: ["hello world", "world"], expected: "true" }],
    hints: [
      "indexOf() method substring dhundhta hai",
      "Agar -1 return ho toh substring nahi mila"
    ]
  });

  // 43
  exercises.push({
    id: "02-01-primitive-types-43",
    title: "String ke anagram check karo",
    starterCode: `function isAnagram(a, b) {
  // TODO: dono strings anagram hain ya nahi check karo
  // "listen" aur "silent" anagram hain
}`,
    solution: `function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const sort = s => s.split("").sort().join("");
  return sort(a.toLowerCase()) === sort(b.toLowerCase());
}`,
    tests: [{ input: ["listen", "silent"], expected: "true" }],
    hints: [
      "Dono strings ko sort karo aur compare karo",
      "Length different hai toh anagram nahi ho sakta"
    ]
  });

  // 44
  exercises.push({
    id: "02-01-primitive-types-44",
    title: "Number ka LCM nikalo",
    starterCode: `function lcm(a, b) {
  // TODO: Least Common Multiple nikalo
  // lcm(4, 6) -> 12
}`,
    solution: `function lcm(a, b) {
  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
  return (a * b) / gcd(a, b);
}`,
    tests: [{ input: [4, 6], expected: 12 }],
    hints: [
      "LCM formula: (a * b) / GCD(a, b)",
      "Pehle GCD nikalo using Euclidean algorithm"
    ]
  });

  // 45
  exercises.push({
    id: "02-01-primitive-types-45",
    title: "String ke Caesar cipher banao",
    starterCode: `function caesarCipher(str, shift) {
  // TODO: string ko shift positions aage shift karo
  // "abc", 3 -> "def"
}`,
    solution: `function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, (char) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}`,
    tests: [{ input: ["abc", 3], expected: "def" }],
    hints: [
      "Char code nikalo, base add/subtract karo, mod 26 karo",
      "Uppercase aur lowercase dono handle karo alag bases ke saath"
    ]
  });

  // 46
  exercises.push({
    id: "02-01-primitive-types-46",
    title: "String ke valid brackets check karo",
    starterCode: `function isValidBrackets(str) {
  // TODO: brackets balanced hain ya nahi check karo
  // "()" -> true, "(]" -> false
}`,
    solution: `function isValidBrackets(str) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };
  for (const char of str) {
    if ("([{".includes(char)) {
      stack.push(char);
    } else if (char in map) {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}`,
    tests: [{ input: ["()"], expected: "true" }],
    hints: [
      "Stack data structure use karo",
      "Opening bracket push karo, closing bracket pe pop karke check karo"
    ]
  });

  // 47
  exercises.push({
    id: "02-01-primitive-types-47",
    title: "String ke words ko sort karo length ke hisaab se",
    starterCode: `function sortByLength(str) {
  // TODO: words ko unki length ke hisaab se sort karo
  // "hello hi hey" -> "hi hey hello"
}`,
    solution: `function sortByLength(str) {
  return str.split(" ").sort((a, b) => a.length - b.length).join(" ");
}`,
    tests: [{ input: ["hello hi hey"], expected: "hi hey hello" }],
    hints: [
      "Split karo aur sort method use karo custom comparator ke saath",
      "Comparator: (a, b) => a.length - b.length"
    ]
  });

  // 48
  exercises.push({
    id: "02-01-primitive-types-48",
    title: "Number ke digits ko sort karo ascending order me",
    starterCode: `function sortDigits(num) {
  // TODO: digits ko sort karo ascending me
  // 314 -> 134
}`,
    solution: `function sortDigits(num) {
  const isNeg = num < 0;
  const sorted = Math.abs(num).toString().split("").sort().join("");
  return isNeg ? -Number(sorted) : Number(sorted);
}`,
    tests: [{ input: [314], expected: 134 }],
    hints: [
      "Number ko string me convert karo, split karo, sort karo",
      "Negative numbers ke liye sign wapas lagao"
    ]
  });

  // 49
  exercises.push({
    id: "02-01-primitive-types-49",
    title: "String ke sabse frequent character dhundho",
    starterCode: `function mostFrequentChar(str) {
  // TODO: sabse zyada baar aane wala character return karo
  // "aabbbcc" -> "b"
}`,
    solution: `function mostFrequentChar(str) {
  const freq = {};
  let maxChar = "";
  let maxCount = 0;
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }
  return maxChar;
}`,
    tests: [{ input: ["aabbbcc"], expected: "b" }],
    hints: [
      "Frequency map banao aur track karo sabse zyada count wala char",
      "Har character ke count ko max se compare karte jao"
    ]
  });

  // 50
  exercises.push({
    id: "02-01-primitive-types-50",
    title: "String ke Morse code me convert karo",
    starterCode: `function toMorse(str) {
  // TODO: string ko morse code me convert karo
  // "hi" -> ".... .."
}`,
    solution: `function toMorse(str) {
  const morse = {
    a:".-", b:"-...", c:"-.-.", d:"-..", e:".", f:"..-.", g:"--.", h:"....",
    i:"..", j:".---", k:"-.-", l:".-..", m:"--", n:"-.", o:"---", p:".--.",
    q:"--.-", r:".-.", s:"...", t:"-", u:"..-", v:"...-", w:".--", x:"-..-",
    y:"-.--", z:"--..", " ": "/"
  };
  return str.toLowerCase().split("").map(c => morse[c] || "").join(" ");
}`,
    tests: [{ input: ["hi"], expected: ".... .." }],
    hints: [
      "Ek morse code mapping object banao har letter ke liye",
      "Space ko '/' se represent karo morse code me"
    ]
  });

  return exercises;
}

// ============================================================
// LESSON 2: reference-types-typeof (50 exercises)
// ============================================================
function generateReferenceTypes() {
  const exercises = [];

  // 01
  exercises.push({
    id: "02-02-reference-types-typeof-01",
    title: "Array vs Object check karo",
    starterCode: `function isArray(value) {
  // TODO: value array hai ya nahi check karo
  // typeof [] === "object" hota hai — socho kaise check karoge
}`,
    solution: `function isArray(value) {
  return Array.isArray(value);
}`,
    tests: [{ input: [[1,2,3]], expected: "true" }],
    hints: [
      "Array.isArray() method use karo — ye sirf arrays ke liye true deta hai",
      "typeof [] 'object' return karta hai, isliye typeof mat use karo"
    ]
  });

  // 02
  exercises.push({
    id: "02-02-reference-types-typeof-02",
    title: "Function ka type check karo",
    starterCode: `function isFunction(value) {
  // TODO: value function hai ya nahi check karo
}`,
    solution: `function isFunction(value) {
  return typeof value === "function";
}`,
    tests: [{ input: [function(){}], expected: "true" }],
    hints: [
      "typeof function(){} === 'function' hota hai",
      "Ye sabse reliable tareeka hai function check karne ka"
    ]
  });

  // 03
  exercises.push({
    id: "02-02-reference-types-typeof-03",
    title: "Null bug fix karo",
    starterCode: `function getLength(value) {
  // TODO: null pe crash na ho — null ke liye 0 return karo
  // Abhi ye code null pe error deta hai
  return value.length;
}`,
    solution: `function getLength(value) {
  if (value === null || value === undefined) return 0;
  return value.length;
}`,
    tests: [{ input: [null], expected: 0 }],
    hints: [
      "Pehle null ya undefined check karo guard clause se",
      "typeof null === 'object' hota hai — typeof se null check mat karo"
    ]
  });

  // 04
  exercises.push({
    id: "02-02-reference-types-typeof-04",
    title: "Nested type checker banao",
    starterCode: `function deepType(value) {
  // TODO: value ka detailed type batao:
  // [], "array", {}, "object", null, "null", function, "function"
}`,
    solution: `function deepType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}`,
    tests: [{ input: [[1,2]], expected: "array" }],
    hints: [
      "Pehle null check karo, fir Array.isArray, fir typeof",
      "Order important hai — pehle specific cases handle karo"
    ]
  });

  // 05
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-05",
    title: "Object ke andar kya hai check karo",
    starterCode: `function objectInfo(obj) {
  // TODO: return karo: { keys: [...], length: n, type: "object" }
  // Object ki basic info do
}`,
    solution: `function objectInfo(obj) {
  return {
    keys: Object.keys(obj),
    length: Object.keys(obj).length,
    type: Array.isArray(obj) ? "array" : typeof obj
  };
}`,
    tests: [{ input: [{a:1}], expected: '{"keys":["a"],"length":1,"type":"object"}' }],
    hints: [
      "Object.keys() se keys ka array milta hai",
      "Type check ke liye Array.isArray pehle check karo"
    ]
  });

  // 06
  exercises.push({
    id: "02-02-reference-types-typeof-06",
    title: "Date object ka year nikalo",
    starterCode: `function getYear(date) {
  // TODO: Date object se sirf year return karo
}`,
    solution: `function getYear(date) {
  return date.getFullYear();
}`,
    tests: [{ input: [new Date("2024-01-01")], expected: 2024 }],
    hints: [
      "Date.getFullYear() method use karo",
      "getYear() deprecated hai —getFullYear() use karo"
    ]
  });

  // 07
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-07",
    title: "Array me sab numbers hain ya nahi check karo",
    starterCode: `function allNumbers(arr) {
  // TODO: array ke sab elements numbers hain ya nahi
  // [1,2,3] -> true, [1,"a",3] -> false
}`,
    solution: `function allNumbers(arr) {
  return arr.every(item => typeof item === "number" && !Number.isNaN(item));
}`,
    tests: [{ input: [[1,2,3]], expected: "true" }],
    hints: [
      "Array.every() method use karo — sab elements ke liye true hona chahiye",
      "typeof check karo aur NaN check bhi karo"
    ]
  });

  // 08
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-08",
    title: "Plain object check karo (array, null, function nahi)",
    starterCode: `function isPlainObject(value) {
  // TODO: value plain object hai ya nahi
  // Arrays, null, functions plain objects nahi hain
}`,
    solution: `function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}`,
    tests: [{ input: [{a:1}], expected: "true" }],
    hints: [
      "typeof object 'object' deta hai but arrays aur null bhi",
      "Array.isArray aur null check alag se karo"
    ]
  });

  // 09
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-09",
    title: "Constructor function ka naam nikalo",
    starterCode: `function getConstructorName(obj) {
  // TODO: object ka constructor function ka naam return karo
  // [] -> "Array", {} -> "Object", new Date() -> "Date"
}`,
    solution: `function getConstructorName(obj) {
  return obj?.constructor?.name || "Unknown";
}`,
    tests: [{ input: [[1,2]], expected: "Array" }],
    hints: [
      "constructor.name property use karo",
      "Optional chaining use karo taaki error na aaye null/undefined pe"
    ]
  });

  // 10
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-10",
    title: "Nested array check karo",
    starterCode: `function isNestedArray(value) {
  // TODO: value nested array hai ya nahi
  // [1, [2, 3]] -> true, [1, 2, 3] -> false
}`,
    solution: `function isNestedArray(value) {
  return Array.isArray(value) && value.some(item => Array.isArray(item));
}`,
    tests: [{ input: [[1,[2,3]]], expected: "true" }],
    hints: [
      "Pehle Array.isArray se check karo, fir .some() se nested array dhundho",
      ".some() kisi ek element ke liye true ho jaye toh kaam ho jayega"
    ]
  });

  // 11
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-11",
    title: "Object ko freeze karo",
    starterCode: `function freezeObject(obj) {
  // TODO: object ko freeze karo taaki koi modify na kar sake
  // Strict mode me modify karne pe error aaye
}`,
    solution: `function freezeObject(obj) {
  return Object.freeze(obj);
}`,
    tests: [{ input: [{a:1}], expected: "frozen" }],
    hints: [
      "Object.freeze() method use karo",
      "Frozen object pe add/delete/modify silently fail hota hai non-strict mode me"
    ]
  });

  // 12
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-12",
    title: "Array ke unique elements nikalo",
    starterCode: `function unique(arr) {
  // TODO: array ke duplicates remove karo
  // [1,2,2,3,3,3] -> [1,2,3]
}`,
    solution: `function unique(arr) {
  return [...new Set(arr)];
}`,
    tests: [{ input: [[1,2,2,3,3,3]], expected: "1,2,3" }],
    hints: [
      "Set data structure use karo — sirf unique values store karta hai",
      "Spread operator ... se Set wapas array me convert hota hai"
    ]
  });

  // 13
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-13",
    title: "Object ke values ko array me convert karo",
    starterCode: `function valuesToArray(obj) {
  // TODO: object ke sab values ka array banao
  // {a:1, b:2} -> [1, 2]
}`,
    solution: `function valuesToArray(obj) {
  return Object.values(obj);
}`,
    tests: [{ input: [{a:1,b:2}], expected: "1,2" }],
    hints: [
      "Object.values() method use karo",
      "Ye sirf values ka array return karta hai keys ka nahi"
    ]
  });

  // 14
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-14",
    title: "Object ke andar nested property dhundho",
    starterCode: `function hasNestedProperty(obj, path) {
  // TODO: "a.b.c" path se check karo ki property exist karti hai ya nahi
  // {a:{b:{c:1}}} pe "a.b.c" -> true
}`,
    solution: `function hasNestedProperty(obj, path) {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === null || current === undefined || !(key in current)) return false;
    current = current[key];
  }
  return true;
}`,
    tests: [{ input: [{a:{b:{c:1}}}, "a.b.c"], expected: "true" }],
    hints: [
      "Path ko dot se split karo aur har key check karo",
      "Har step pe current value null/undefined ho sakti hai — check karo"
    ]
  });

  // 15
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-15",
    title: "Object ko flat key-value pairs me convert karo",
    starterCode: `function flattenObject(obj, prefix = "") {
  // TODO: nested object ko flat karo
  // {a:{b:1}} -> {"a.b": 1}
}`,
    solution: `function flattenObject(obj, prefix = "") {
  const result = {};
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}`,
    tests: [{ input: [{a:{b:1}}], expected: '{"a.b":1}' }],
    hints: [
      "Recursive function use karo",
      "Har nested level pe prefix me current key add karo"
    ]
  });

  // 16
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-16",
    title: "String ko array of characters me convert karo",
    starterCode: `function stringToArray(str) {
  // TODO: "hello" -> ["h","e","l","l","o"]
}`,
    solution: `function stringToArray(str) {
  return Array.from(str);
}`,
    tests: [{ input: ["hello"], expected: "h,e,l,l,o" }],
    hints: [
      "Array.from() method use karo",
      "Spread operator [...str] bhi kaam karega"
    ]
  });

  // 17
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-17",
    title: "Object ko JSON string me convert karo with error handling",
    starterCode: `function safeStringify(value) {
  // TODO: value ko JSON string me convert karo
  // Error aaye toh "null" return karo
}`,
    solution: `function safeStringify(value) {
  try {
    return JSON.stringify(value);
  } catch (e) {
    return "null";
  }
}`,
    tests: [{ input: [{a:1}], expected: '{"a":1}' }],
    hints: [
      "try-catch block use karo error handling ke liye",
      "JSON.stringify circular reference pe error deta hai"
    ]
  });

  // 18
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-18",
    title: "Object ke keys ko sorted array me return karo",
    starterCode: `function sortedKeys(obj) {
  // TODO: object ke keys sorted order me return karo
  // {c:3, a:1, b:2} -> ["a","b","c"]
}`,
    solution: `function sortedKeys(obj) {
  return Object.keys(obj).sort();
}`,
    tests: [{ input: [{c:3,a:1,b:2}], expected: "a,b,c" }],
    hints: [
      "Object.keys() se keys ka array lo, fir .sort() karo",
      "Sort alphabetically hota hai by default"
    ]
  });

  // 19
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-19",
    title: "Object me deep clone karo",
    starterCode: `function deepClone(obj) {
  // TODO: object ka deep clone banao
  // Nested objects bhi alag honi chahiye
}`,
    solution: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`,
    tests: [{ input: [{a:{b:1}}], expected: '{"a":{"b":1}}' }],
    hints: [
      "JSON.stringify se string banao, fir JSON.parse se wapas object banao",
      "Ye method functions aur Date objects ko handle nahi karta"
    ]
  });

  // 20
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-20",
    title: "typeof ke different results predict karo",
    starterCode: `function typeResults() {
  // TODO: ye sab expressions ke typeof return karo array me
  // typeof null, typeof [], typeof {}, typeof function(){}
}`,
    solution: `function typeResults() {
  return [typeof null, typeof [], typeof {}, typeof function(){}];
}`,
    tests: [{ input: [], expected: "object,object,object,function" }],
    hints: [
      "typeof null 'object' hota hai — ye JavaScript bug hai",
      "typeof function(){} 'function' hota hai"
    ]
  });

  // 21
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-21",
    title: "Object ko Map me convert karo",
    starterCode: `function toMap(obj) {
  // TODO: object ko Map me convert karo
}`,
    solution: `function toMap(obj) {
  return new Map(Object.entries(obj));
}`,
    tests: [{ input: [{a:1,b:2}], expected: "a,1,b,2" }],
    hints: [
      "Object.entries() se key-value pairs ka array milta hai",
      "Map constructor ko entries array pass karo"
    ]
  });

  // 22
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-22",
    title: "Object me hasOwnProperty check karo",
    starterCode: `function hasOwn(obj, key) {
  // TODO: key obj ki khud ki property hai ya prototype se aayi hai
}`,
    solution: `function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}`,
    tests: [{ input: [{a:1}, "a"], expected: "true" }],
    hints: [
      "Object.prototype.hasOwnProperty.call() use karo — ye safe hai",
      "Direct obj.hasOwnProperty() pe mat bharosa karo kyunki override ho sakta hai"
    ]
  });

  // 23
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-23",
    title: "Arguments object ko array me convert karo",
    starterCode: `function sumAll() {
  // TODO: arguments object ko real array me convert karo aur sum nikalo
}`,
    solution: `function sumAll() {
  const args = Array.from(arguments);
  return args.reduce((sum, n) => sum + n, 0);
}`,
    tests: [{ input: [1,2,3], expected: 6 }],
    hints: [
      "arguments object array nahi hota — Array.from() se convert karo",
      "Rest parameters (...args) bhi use kar sakte ho"
    ]
  });

  // 24
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-24",
    title: "Object ko query string me convert karo",
    starterCode: `function toQueryString(obj) {
  // TODO: {a:1, b:2} -> "a=1&b=2"
}`,
    solution: `function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}`,
    tests: [{ input: [{a:1,b:2}], expected: "a=1&b=2" }],
    hints: [
      "Object.entries() se key-value pairs lo",
      "Map se string banao aur & se join karo"
    ]
  });

  // 25
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-25",
    title: "String me emoji count karo",
    starterCode: `function countEmojis(str) {
  // TODO: string me kitne emojis hain count karo
}`,
    solution: `function countEmojis(str) {
  const emojiRegex = /\\p{Emoji_Presentation}/gu;
  return (str.match(emojiRegex) || []).length;
}`,
    tests: [{ input: ["hello 🎉 world 🎊"], expected: 2 }],
    hints: [
      "Unicode property escape use karo: \\p{Emoji_Presentation}",
      "Regex flag 'u' lagana mat bhoolna emoji ke liye"
    ]
  });

  // 26
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-26",
    title: "Array ko chunks me divide karo",
    starterCode: `function chunk(arr, size) {
  // TODO: array ko equal size ke chunks me todo
  // [1,2,3,4,5], 2 -> [[1,2],[3,4],[5]]
}`,
    solution: `function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}`,
    tests: [{ input: [[1,2,3,4,5], 2], expected: "1,2,3,4,5" }],
    hints: [
      "Loop me i ko size se badhao",
      "slice(i, i+size) se chunk nikalo aur result me push karo"
    ]
  });

  // 27
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-27",
    title: "Object ke values ko filter karo",
    starterCode: `function filterValues(obj, predicate) {
  // TODO: predicate function se values filter karo
  // {a:1,b:2,c:3}, n => n>1 -> {b:2,c:3}
}`,
    solution: `function filterValues(obj, predicate) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (predicate(value)) result[key] = value;
  }
  return result;
}`,
    tests: [{ input: [{a:1,b:2,c:3}, n => n>1], expected: '{"b":2,"c":3}' }],
    hints: [
      "Object.entries() se iterate karo",
      "Har value ko predicate se check karo aur condition满足 pe result me dalo"
    ]
  });

  // 28
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-28",
    title: "Object merge karo (shallow)",
    starterCode: `function mergeObjects(...objs) {
  // TODO: sab objects ko merge karo — baad wala pehle wale ko overwrite kare
}`,
    solution: `function mergeObjects(...objs) {
  return Object.assign({}, ...objs);
}`,
    tests: [{ input: [{a:1},{b:2}], expected: '{"a":1,"b":2}' }],
    hints: [
      "Object.assign() use karo empty object ke saath",
      "Spread operator {...obj1, ...obj2} bhi kaam karega"
    ]
  });

  // 29
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-29",
    title: "Object ke liye pick utility banao",
    starterCode: `function pick(obj, keys) {
  // TODO: sirf specified keys ka naya object banao
  // {a:1,b:2,c:3}, ["a","c"] -> {a:1,c:3}
}`,
    solution: `function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}`,
    tests: [{ input: [{a:1,b:2,c:3}, ["a","c"]], expected: '{"a":1,"c":3}' }],
    hints: [
      "Har key ke liye check karo ki obj me hai ya nahi",
      "Agar hai toh result me dalo"
    ]
  });

  // 30
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-30",
    title: "Object ke liye omit utility banao",
    starterCode: `function omit(obj, keys) {
  // TODO: specified keys ko chhod ke baaki sab rakhlo
  // {a:1,b:2,c:3}, ["b"] -> {a:1,c:3}
}`,
    solution: `function omit(obj, keys) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) result[key] = value;
  }
  return result;
}`,
    tests: [{ input: [{a:1,b:2,c:3}, ["b"]], expected: '{"a":1,"c":3}' }],
    hints: [
      "Har key ko keys array me check karo — include nahi honi chahiye",
      "Object.entries() aur includes() use karo"
    ]
  });

  // 31
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-31",
    title: "Object ke deep equality check karo",
    starterCode: `function deepEqual(a, b) {
  // TODO: dono values deeply equal hain ya nahi
  // {a:1} aur {a:1} equal hain
}`,
    solution: `function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== typeof b) return false;
  if (typeof a !== "object") return a === b;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => key in b && deepEqual(a[key], b[key]));
}`,
    tests: [{ input: [{a:1},{a:1}], expected: "true" }],
    hints: [
      "Recursion use karo nested objects ke liye",
      "Pehle primitive equality, fir keys count, fir har key ka value compare karo"
    ]
  });

  // 32
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-32",
    title: "Array of objects ko group karo property ke hisaab se",
    starterCode: `function groupBy(arr, key) {
  // TODO: array ko key ke value ke hisaab se group karo
  // [{type:"a",v:1},{type:"b",v:2},{type:"a",v:3}], "type" -> {a:[...], b:[...]}
}`,
    solution: `function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const groupKey = item[key];
    (groups[groupKey] = groups[groupKey] || []).push(item);
    return groups;
  }, {});
}`,
    tests: [{ input: [[{type:"a",v:1},{type:"a",v:2}], "type"], expected: '{"a":[{"type":"a","v":1},{"type":"a","v":2}]}' }],
    hints: [
      "Array.reduce() use karo accumulator object ke saath",
      "Har item ka key value nikalo aur us group me push karo"
    ]
  });

  // 33
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-33",
    title: "Promise result handle karo with default value",
    starterCode: `async function safeAwait(promise, defaultVal) {
  // TODO: promise resolve ho toh value, reject ho toh defaultVal
}`,
    solution: `async function safeAwait(promise, defaultVal) {
  try {
    return await promise;
  } catch (e) {
    return defaultVal;
  }
}`,
    tests: [{ input: [Promise.resolve(42), 0], expected: 42 }],
    hints: [
      "async/await use karo try-catch ke saath",
      "Promise resolve hua toh value milegi, nahi toh catch block chalega"
    ]
  });

  // 34
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-34",
    title: "Object me circular reference detect karo",
    starterCode: `function hasCircularRef(obj) {
  // TODO: object me circular reference hai ya nahi check karo
}`,
    solution: `function hasCircularRef(obj) {
  try {
    JSON.stringify(obj);
    return false;
  } catch (e) {
    return true;
  }
}`,
    tests: [{ input: [{a:1}], expected: "false" }],
    hints: [
      "JSON.stringify circular reference pe error throw karta hai",
      "try-catch use karo error detect karne ke liye"
    ]
  });

  // 35
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-35",
    title: "Array me flat depth ke saath karo",
    starterCode: `function flatten(arr, depth) {
  // TODO: array ko specified depth tak flatten karo
  // [[1,[2]], 1] -> [1,[2]]
}`,
    solution: `function flatten(arr, depth) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) && depth > 0
      ? acc.concat(flatten(val, depth - 1))
      : acc.concat(val)
  , []);
}`,
    tests: [{ input: [[1,[2,[3]]], 1], expected: "1,2,3" }],
    hints: [
      "Array.reduce() use karo accumulator ke saath",
      "Array hai aur depth > 0 hai toh recursively flatten karo"
    ]
  });

  // 36
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-36",
    title: "Date object se formatted string banao",
    starterCode: `function formatDate(date) {
  // TODO: "YYYY-MM-DD" format me date return karo
}`,
    solution: `function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}`,
    tests: [{ input: [new Date("2024-03-05")], expected: "2024-03-05" }],
    hints: [
      "getFullYear(), getDate() methods use karo",
      "padStart(2, "0") se 2 digit format hoga"
    ]
  });

  // 37
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-37",
    title: "Object me path se value nikalo",
    starterCode: `function getByPath(obj, path) {
  // TODO: "a.b.c" path se value nikalo
  // {a:{b:{c:42}}} pe "a.b.c" -> 42
}`,
    solution: `function getByPath(obj, path) {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}`,
    tests: [{ input: [{a:{b:{c:42}}}, "a.b.c"], expected: 42 }],
    hints: [
      "Path ko dot se split karo aur reduce use karo",
      "Optional chaining (?.) use karo null/undefined handle karne ke liye"
    ]
  });

  // 38
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-38",
    title: "Array me missing number dhundho (1 to n)",
    starterCode: `function findMissing(arr) {
  // TODO: 1 se n ke beech me ek number missing hai — wo dhundho
  // [1,2,4,5] -> 3
}`,
    solution: `function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, n) => sum + n, 0);
  return expectedSum - actualSum;
}`,
    tests: [{ input: [[1,2,4,5]], expected: 3 }],
    hints: [
      "Sum formula use karo: n*(n+1)/2",
      "Expected sum se actual sum subtract karo"
    ]
  });

  // 39
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-39",
    title: "String ke words ko frequency count karo",
    starterCode: `function wordFrequency(str) {
  // TODO: har word ki frequency count karo
  // "hello world hello" -> {hello:2, world:1}
}`,
    solution: `function wordFrequency(str) {
  return str.toLowerCase().split(" ").reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1;
    return freq;
  }, {});
}`,
    tests: [{ input: ["hello world hello"], expected: '{"hello":2,"world":1}' }],
    hints: [
      "Pehle string ko lowercase karo aur split karo",
      "Reduce use karo frequency object banane ke liye"
    ]
  });

  // 40
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-40",
    title: "Object ko CSV string me convert karo",
    starterCode: `function toCSV(arr) {
  // TODO: array of objects ko CSV string me convert karo
  // [{a:1,b:2},{a:3,b:4}] -> "a,b\\n1,2\\n3,4"
}`,
    solution: `function toCSV(arr) {
  if (arr.length === 0) return "";
  const headers = Object.keys(arr[0]);
  const rows = arr.map(obj => headers.map(h => obj[h]).join(","));
  return [headers.join(","), ...rows].join("\\n");
}`,
    tests: [{ input: [[{a:1,b:2}]], expected: "a,b\\n1,2" }],
    hints: [
      "Pehle headers nikalo pehle object ke keys se",
      "Fir har row ke liye headers order me values nikalo"
    ]
  });

  // 41
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-41",
    title: "Object ke andar method call karo by name",
    starterCode: `function callMethod(obj, methodName, args) {
  // TODO: object ke method ko naam se call karo
  // {greet:(n)=>"Hi "+n}, "greet", ["World"] -> "Hi World"
}`,
    solution: `function callMethod(obj, methodName, args) {
  if (typeof obj[methodName] !== "function") throw new Error("Not a function");
  return obj[methodName](...args);
}`,
    tests: [{ input: [{greet:n=>"Hi "+n}, "greet", ["World"]], expected: "Hi World" }],
    hints: [
      "obj[methodName] se function nikalo",
      "Spread operator (...args) se array ko arguments me convert karo"
    ]
  });

  // 42
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-42",
    title: "Nested array ko tree structure me convert karo",
    starterCode: `function arrayToTree(arr) {
  // TODO: flat array ko nested tree me convert karo
  // [{id:1,parent:null},{id:2,parent:1},{id:3,parent:1}] -> tree
}`,
    solution: `function arrayToTree(arr) {
  const map = {};
  const roots = [];
  arr.forEach(item => { map[item.id] = { ...item, children: [] }; });
  arr.forEach(item => {
    if (item.parent === null) roots.push(map[item.id]);
    else map[item.parent]?.children.push(map[item.id]);
  });
  return roots;
}`,
    tests: [{ input: [[{id:1,parent:null},{id:2,parent:1}]], expected: "1 children:2" }],
    hints: [
      "Ek map banao jisme har id ka node ho",
      "Fir har item ko uske parent ke children me add karo"
    ]
  });

  // 43
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-43",
    title: "Object ke proto chain length nikalo",
    starterCode: `function protoChainLength(obj) {
  // TODO: prototype chain ki length nikalo
}`,
    solution: `function protoChainLength(obj) {
  let length = 0;
  let current = obj;
  while (current !== null) {
    length++;
    current = Object.getPrototypeOf(current);
  }
  return length;
}`,
    tests: [{ input: [{}], expected: 2 }],
    hints: [
      "Object.getPrototypeOf() se parent milta hai",
      "Jab tak null na mile tab tak loop chalao"
    ]
  });

  // 44
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-44",
    title: "WeakMap use karke private data store karo",
    starterCode: `const privates = new WeakMap();

class User {
  constructor(name) {
    // TODO: name ko private me store karo
  }
  getName() {
    // TODO: name return karo
  }
}`,
    solution: `const privates = new WeakMap();

class User {
  constructor(name) {
    privates.set(this, { name });
  }
  getName() {
    return privates.get(this).name;
  }
}`,
    tests: [{ input: ["Alice"], expected: "Alice" }],
    hints: [
      "WeakMap me this key ke saath data store karo",
      "WeakMap automatic garbage collection support karta hai"
    ]
  });

  // 45
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-45",
    title: "Object me deep merge karo",
    starterCode: `function deepMerge(target, source) {
  // TODO: dono objects ko deeply merge karo
  // Nested objects bhi merge honi chahiye
}`,
    solution: `function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}`,
    tests: [{ input: [{a:{b:1}},{a:{c:2}}], expected: '{"a":{"b":1,"c":2}}' }],
    hints: [
      "Recursion use karo nested objects ke liye",
      "Dono objects ke keys ko merge karo, values ko recursively merge karo"
    ]
  });

  // 46
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-46",
    title: "Array ke pairs banao (chunk size 2)",
    starterCode: `function pairs(arr) {
  // TODO: [1,2,3,4,5,6] -> [[1,2],[3,4],[5,6]]
}`,
    solution: `function pairs(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr.slice(i, i + 2));
  }
  return result;
}`,
    tests: [{ input: [[1,2,3,4]], expected: "1,2,3,4" }],
    hints: [
      "Loop me i ko 2 se badhao",
      "slice(i, i+2) se pair nikalo"
    ]
  });

  // 47
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-47",
    title: "Object me all leaf values nikalo",
    starterCode: `function leafValues(obj) {
  // TODO: sirf wo values nikalo jo objects nahi hain
  // {a:1,b:{c:2,d:{e:3}}} -> [1,2,3]
}`,
    solution: `function leafValues(obj) {
  const leaves = [];
  for (const value of Object.values(obj)) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      leaves.push(...leafValues(value));
    } else {
      leaves.push(value);
    }
  }
  return leaves;
}`,
    tests: [{ input: [{a:1,b:{c:2}}], expected: "1,2" }],
    hints: [
      "Recursion use karo — object hai toh uski values me jao",
      "Primitive value mila toh result me add karo"
    ]
  });

  // 48
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-48",
    title: "Date difference in days nikalo",
    starterCode: `function daysBetween(d1, d2) {
  // TODO: dono dates ke beech me kitne din hain
}`,
    solution: `function daysBetween(d1, d2) {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs(d2 - d1) / msPerDay);
}`,
    tests: [{ input: [new Date("2024-01-01"), new Date("2024-01-04")], expected: 3 }],
    hints: [
      "Dates ko subtract karne pe milliseconds milte hain",
      "24*60*60*1000 se din me convert karo"
    ]
  });

  // 49
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-49",
    title: "Object ko immutable banao deeply",
    starterCode: `function deepFreeze(obj) {
  // TODO: object ko deeply freeze karo
}`,
    solution: `function deepFreeze(obj) {
  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}`,
    tests: [{ input: [{a:{b:1}}], expected: "frozen" }],
    hints: [
      "Object.freeze() use karo pehle",
      "Fir har nested object ke liye recursively freeze karo"
    ]
  });

  // 50
  exercises.push({
    id: "02-02-reference-types-typeof-typeof-50",
    title: "Object ke andar path se delete karo",
    starterCode: `function deleteByPath(obj, path) {
  // TODO: "a.b.c" path se property delete karo
  // {a:{b:{c:1}}} pe "a.b.c" -> {a:{b:{}}}
}`,
    solution: `function deleteByPath(obj, path) {
  const keys = path.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]];
    if (!current) return;
  }
  delete current[keys[keys.length - 1]];
}`,
    tests: [{ input: [{a:{b:{c:1}}}, "a.b.c"], expected: '{"a":{"b":{}}}' }],
    hints: [
      "Path ko split karo aur last key tak jao",
      "Last key pe delete operator use karo"
    ]
  });

  return exercises;
}

// ============================================================
// LESSON 3: coercion-truthy-falsy (50 exercises)
// ============================================================
function generateCoercion() {
  const exercises = [];

  // 01
  exercises.push({
    id: "02-03-coercion-truthy-falsy-01",
    title: "Truthy values ki list banao",
    starterCode: `function truthyValues() {
  // TODO: 5 truthy values ka array return karo
  // Falsy values ke alava jo bhi ho wo truthy hai
}`,
    solution: `function truthyValues() {
  return [1, "hello", true, [], {}, function(){}];
}`,
    tests: [{ input: [], expected: "5" }],
    hints: [
      "0, "", null, undefined, NaN, false ye sab falsy hain",
      "Baaki sab truthy hain — arrays, objects, functions, non-zero numbers, non-empty strings"
    ]
  });

  // 02
  exercises.push({
    id: "02-03-coercion-truthy-falsy-02",
    title: "Implicit type coercion predict karo",
    starterCode: `function predictResult() {
  // TODO: ye expressions ke results return karo array me
  // "5" + 3, "5" - 3, true + 1, null + 1
}`,
    solution: `function predictResult() {
  return ["5" + 3, "5" - 3, true + 1, null + 1];
}`,
    tests: [{ input: [], expected: "53,2,2,1" }],
    hints: [
      "String + number pe string concatenation hota hai",
      "Arithmetic operators pe number conversion hota hai"
    ]
  });

  // 03
  exercises.push({
    id: "02-03-coercion-truthy-falsy-03",
    title: "Loose equality bugs fix karo",
    starterCode: `function isStrictEqual(a, b) {
  // TODO: bina === ke strict equality implement karo
  // Pehle type same honi chahiye, fir value
}`,
    solution: `function isStrictEqual(a, b) {
  if (typeof a !== typeof b) return false;
  return a == b;
}`,
    tests: [{ input: [1, "1"], expected: "false" }],
    hints: [
      "Pehle typeof check karo — types different hain toh false",
      "Types same ho toh == use kar sakte ho"
    ]
  });

  // 04
  exercises.push({
    id: "02-03-coercion-truthy-falsy-04",
    title: "String ko boolean me convert karo",
    starterCode: `function stringToBool(str) {
  // TODO: non-empty string -> true, empty string -> false
  // "hello" -> true, "" -> false
}`,
    solution: `function stringToBool(str) {
  return Boolean(str);
}`,
    tests: [{ input: ["hello"], expected: "true" }],
    hints: [
      "Boolean() constructor use karo",
      "Non-empty strings truthy hain, empty string falsy hai"
    ]
  });

  // 05
  exercises.push({
    id: "02-03-coercion-truthy-falsy-05",
    title: "Default value pattern with nullish coalescing",
    starterCode: `function getConfig(config) {
  // TODO: config me port ho toh wo, nahi toh 3000
  // host ho toh wo, nahi toh "localhost"
  // nullish coalescing operator ?? use karo
}`,
    solution: `function getConfig(config) {
  return {
    port: config.port ?? 3000,
    host: config.host ?? "localhost"
  };
}`,
    tests: [{ input: [{}], expected: '{"port":3000,"host":"localhost"}' ],
    hints: [
      "?? operator sirf null/undefined ke liye default deta hai",
      "|| operator falsy values ke liye bhi default deta hai — 0 ya "" ke liye galat hoga"
    ]
  });

  // 06
  exercises.push({
    id: "02-03-coercion-truthy-falsy-06",
    title: "Short-circuit evaluation use karo function call ke liye",
    starterCode: `function greet(name) {
  // TODO: name hai toh "Hello, {name}!", nahi toh "Hello, Guest!"
  // && aur || use karo if ke bina
}`,
    solution: `function greet(name) {
  return (name && "Hello, " + name + "!") || "Hello, Guest!";
}`,
    tests: [{ input: ["World"], expected: "Hello, World!" }],
    hints: [
      "name && string — name falsy hai toh string nahi return hogi",
      "|| se default value do agar left side falsy hai"
    ]
  });

  // 07
  exercises.push({
    id: "02-03-coercion-truthy-falsy-07",
    title: "Ternary chain use karo grade ke liye",
    starterCode: `function grade(score) {
  // TODO: score ke hisaab se grade do using ternary:
  // 90+ -> "A", 80+ -> "B", 70+ -> "C", 60+ -> "D", else -> "F"
}`,
    solution: `function grade(score) {
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
}`,
    tests: [{ input: [85], expected: "B" }],
    hints: [
      "Nested ternary use karo: condition ? true : (next ternary)",
      "Highest condition pehle check karo"
    ]
  });

  // 08
  exercises.push({
    id: "02-03-coercion-truthy-falsy-08",
    title: "Falsy value quiz — kaunsa falsy hai?",
    starterCode: `function countFalsy(arr) {
  // TODO: array me kitne falsy values hain count karo
  // [0, 1, "", "hi", null, undefined, NaN, false, true] me kitne falsy?
}`,
    solution: `function countFalsy(arr) {
  return arr.filter(item => !Boolean(item)).length;
}`,
    tests: [{ input: [[0,1,"","hi",null,undefined,NaN,false,true]], expected: 6 }],
    hints: [
      "Falsy values: 0, "", null, undefined, NaN, false",
      "Boolean() use karo — falsy ke liye false return hoga"
    ]
  });

  // 09
  exercises.push({
    id: "02-03-coercion-truthy-falsy-09",
    title: "Coercion se string concatenation fix karo",
    starterCode: `function addNumbers(a, b) {
  // TODO: dono numbers ka sum return karo
  // Abhi "5" + 3 -> "53" ho raha hai, 8 hona chahiye
}`,
    solution: `function addNumbers(a, b) {
  return Number(a) + Number(b);
}`,
    tests: [{ input: ["5", 3], expected: 8 }],
    hints: [
      "Number() se pehle convert karo dono values ko",
      "parseFloat() ya unary + operator bhi use kar sakte ho"
    ]
  });

  // 10
  exercises.push({
    id: "02-03-coercion-truthy-falsy-10",
    title: "Nullish vs Falsy difference samjho",
    starterCode: `function nullishCheck(value) {
  // TODO: value sirf null ya undefined hai toh true
  // false, 0, "" ye sab nullish nahi hain
  // === null || === undefined use karo
}`,
    solution: `function nullishCheck(value) {
  return value === null || value === undefined;
}`,
    tests: [{ input: [0], expected: "false" }],
    hints: [
      "Nullish sirf null aur undefined hota hai",
      "0, false, "" ye sab falsy hain par nullish nahi"
    ]
  });

  // 11
  exercises.push({
    id: "02-03-coercion-truthy-falsy-11",
    title: "Boolean coercion predict karo",
    starterCode: `function booleanResults() {
  // TODO: ye sab expressions ke boolean results return karo
  // Boolean(0), Boolean(""), Boolean("0"), Boolean([]), Boolean({})
}`,
    solution: `function booleanResults() {
  return [Boolean(0), Boolean(""), Boolean("0"), Boolean([]), Boolean({})];
}`,
    tests: [{ input: [], expected: "false,false,true,true,true" }],
    hints: [
      "0 aur "" falsy hain",
      "Ye sab truthy hain kyunki non-empty string hai aur objects/array hain"
    ]
  });

  // 12
  exercises.push({
    id: "02-03-coercion-truthy-falsy-12",
    title: "Logical assignment operator use karo",
    starterCode: `function initDefaults(settings) {
  // TODO: default values assign karo logical assignment se
  // settings.theme ??= "light"
  // settings.lang ??= "en"
}`,
    solution: `function initDefaults(settings) {
  settings.theme ??= "light";
  settings.lang ??= "en";
  return settings;
}`,
    tests: [{ input: [{}], expected: '{"theme":"light","lang":"en"}' }],
    hints: [
      "??= operator null/undefined hone pe hi assign karta hai",
      "||= operator har falsy value pe assign karta hai"
    ]
  });

  // 13
  exercises.push({
    id: "02-03-coercion-truthy-falsy-13",
    title: "String to Number conversion ke tareeke compare karo",
    starterCode: `function conversionResults() {
  // TODO: "123" ke 4 tareekon se conversion results return karo
  // Number(), parseInt(), parseFloat(), +"123"
}`,
    solution: `function conversionResults() {
  return [Number("123"), parseInt("123"), parseFloat("123"), +"123"];
}`,
    tests: [{ input: [], expected: "123,123,123,123" }],
    hints: [
      "Sab 123 return karenge for "123"",
      "Different input pe alag results honge — parseInt "123abc" bhi handle karta hai"
    ]
  });

  // 14
  exercises.push({
    id: "02-03-coercion-truthy-falsy-14",
    title: "Short-circuit se optional chaining implement karo",
    starterCode: `function getStreet(user) {
  // TODO: user?.address?.street bina optional chaining ke likho
  // && operator use karo
}`,
    solution: `function getStreet(user) {
  return user && user.address && user.address.street;
}`,
    tests: [{ input: [{address:{street:"Main St"}}], expected: "Main St" }],
    hints: [
      "&& operator se check karo ki har level pe value hai",
      "Koi bhi level pe null/undefined hoga toh false return hoga"
    ]
  });

  // 15
  exercises.push({
    id: "02-03-coercion-truthy-falsy-15",
    title: "Ternary operator se absolute value nikalo",
    starterCode: `function absValue(num) {
  // TODO: ternary use karo absolute value ke liye
  // Math.abs mat use karo
}`,
    solution: `function absValue(num) {
  return num < 0 ? -num : num;
}`,
    tests: [{ input: [-5], expected: 5 }],
    hints: [
      "num < 0 hai toh -num return karo",
      "Nahi toh num hi return karo"
    ]
  });

  // 16
  exercises.push({
    id: "02-03-coercion-truthy-falsy-16",
    title: "OR operator se default value pattern implement karo",
    starterCode: `function withDefaults(options) {
  // TODO: options ke liye defaults do using ||
  // color default "red", size default "medium", speed default 1
}`,
    solution: `function withDefaults(options) {
  return {
    color: options.color || "red",
    size: options.size || "medium",
    speed: options.speed || 1
  };
}`,
    tests: [{ input: [{}], expected: '{"color":"red","size":"medium","speed":1}' }],
    hints: [
      "|| operator left side falsy hai toh right side return karta hai",
      "Yaad rakhna: 0 aur "" bhi falsy hain — inke liye galat ho sakta hai"
    ]
  });

  // 17
  exercises.push({
    id: "02-03-coercion-truthy-falsy-17",
    title: "Loose equality ke surprising results predict karo",
    starterCode: `function looseResults() {
  // TODO: ye expressions ke results array me return karo
  // [] == false, [] == ![], 0 == "", null == undefined
}`,
    solution: `function looseResults() {
  return [[] == false, [] == ![], 0 == "", null == undefined];
}`,
    tests: [{ input: [], expected: "true,true,true,true" }],
    hints: [
      "[] == false — array pehle "" me convert hota hai fir 0",
      "null == undefined ek dusre ke liye loosely equal hain"
    ]
  });

  // 18
  exercises.push({
    id: "02-03-coercion-truthy-falsy-18",
    title: "Nullish coalescing operator ?? use karo zero ke liye sahi se",
    starterCode: `function getPrice(price) {
  // TODO: price hai toh wo, nahi toh 0
  // ?? use karo taaki 0 bhi valid price ho
}`,
    solution: `function getPrice(price) {
  return price ?? 0;
}`,
    tests: [{ input: [null], expected: 0 }],
    hints: [
      "?? sirf null/undefined ke liye default deta hai",
      "|| operator 0 ko bhi falsy maanta hai — galat hoga"
    ]
  });

  // 19
  exercises.push({
    id: "02-03-coercion-truthy-falsy-19",
    title: "Implicit coercion se boolean flip karo",
    starterCode: `function negate(value) {
  // TODO: value ka boolean flip karo bina ! ke
  // true -> false, false -> true
  // Double NOT operator use karo
}`,
    solution: `function negate(value) {
  return !!value === false;
}`,
    tests: [{ input: [true], expected: "false" }],
    hints: [
      "!!value se boolean milta hai",
      "Fir === false se flip ho jayega"
    ]
  });

  // 20
  exercises.push({
    id: "02-03-coercion-truthy-falsy-20",
    title: "Array ke truthy/falsy filter banao",
    starterCode: `function filterFalsy(arr) {
  // TODO: array se falsy values hatao
  // [0, 1, false, 2, "", 3] -> [1, 2, 3]
}`,
    solution: `function filterFalsy(arr) {
  return arr.filter(Boolean);
}`,
    tests: [{ input: [[0,1,false,2,"",3]], expected: "1,2,3" }],
    hints: [
      "filter(Boolean) se sirf truthy values bachengi",
      "Boolean function as filter callback use hota hai"
    ]
  });

  // 21
  exercises.push({
    id: "02-03-coercion-truthy-falsy-21",
    title: "String me type coercion predict karo",
    starterCode: `function predictCoercion() {
  // TODO: ye expressions ke results return karo
  // "5" - 3, "5" + 3, "3" * "4", true + true
}`,
    solution: `function predictCoercion() {
  return ["5" - 3, "5" + 3, "3" * "4", true + true];
}`,
    tests: [{ input: [], expected: "2,53,12,2" }],
    hints: [
      "Arithmetic operators pe number conversion hota hai (+ pe string concatenation)",
      "+ operator agar string hai toh concatenation karega"
    ]
  });

  // 22
  exercises.push({
    id: "02-03-coercion-truthy-falsy-22",
    title: "Switch case me coercion fix karo",
    starterCode: `function getDay(num) {
  // TODO: switch use karo — string vs number coercion dhyan me rakhna
  // 1 -> "Monday", 2 -> "Tuesday"...
  // switch(1) aur switch("1") alag behave karta hai
}`,
    solution: `function getDay(num) {
  switch(Number(num)) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    default: return "Unknown";
  }
}`,
    tests: [{ input: [2], expected: "Tuesday" }],
    hints: [
      "switch strict equality use karta hai (===)",
      "Number() se convert karke case values ko match karo"
    ]
  });

  // 23
  exercises.push({
    id: "02-03-coercion-truthy-falsy-23",
    title: "Optional chaining se safe property access karo",
    starterCode: `function getUserCity(user) {
  // TODO: bina optional chaining ke likho
  // user?.address?.city bina ?. ke
  // && operator use karo
}`,
    solution: `function getUserCity(user) {
  return user && user.address && user.address.city;
}`,
    tests: [{ input: [{address:{city:"Mumbai"}}], expected: "Mumbai" }],
    hints: [
      "Har level pe && se check karo",
      "Koi bhi level pe falsy hoga toh result undefined hoga"
    ]
  });

  // 24
  exercises.push({
    id: "02-03-coercion-truthy-falsy-24",
    title: "Ternary se gender pronoun nikalo",
    starterCode: `function pronoun(gender) {
  // TODO: "male" -> "he", "female" -> "she", "other" -> "they"
  // Ternary use karo
}`,
    solution: `function pronoun(gender) {
  return gender === "male" ? "he" : gender === "female" ? "she" : "they";
}`,
    tests: [{ input: ["male"], expected: "he" }],
    hints: [
      "Nested ternary use karo",
      "Pehle male check karo, fir female, fir default"
    ]
  });

  // 25
  exercises.push({
    id: "02-03-coercion-truthy-falsy-25",
    title: "Type coercion se empty array check karo",
    starterCode: `function isEmptyArray(value) {
  // TODO: value empty array hai ya nahi check karo
  // [] == true -> false hota hai!
}`,
    solution: `function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}`,
    tests: [{ input: [[]], expected: "true" }],
    hints: [
      "Array.isArray pehle check karo",
      "Fir .length === 0 se empty check karo"
    ]
  });

  // 26
  exercises.push({
    id: "02-03-coercion-truthy-falsy-26",
    title: "Nullish coalescing with || difference dikhao",
    starterCode: `function compareOperators(value) {
  // TODO: ?? aur || ke alag alag results return karo
  // value = 0: || -> default, ?? -> 0
  // value = "": || -> default, ?? -> ""
}`,
    solution: `function compareOperators(value) {
  const defaultVal = "default";
  return [value || defaultVal, value ?? defaultVal];
}`,
    tests: [{ input: [0], expected: "default,0" }],
    hints: [
      "|| falsy values (0, "", false, null, undefined, NaN) ke liye default deta hai",
      "?? sirf null/undefined ke liye default deta hai"
    ]
  });

  // 27
  exercises.push({
    id: "02-03-coercion-truthy-falsy-27",
    title: "String me truthy/falsy value extract karo",
    starterCode: `function parseBoolean(str) {
  // TODO: "true" -> true, "false" -> false, any other -> null
}`,
    solution: `function parseBoolean(str) {
  if (str === "true") return true;
  if (str === "false") return false;
  return null;
}`,
    tests: [{ input: ["true"], expected: "true" }],
    hints: [
      "Direct string comparison use karo === se",
      "Boolean("true") bhi true return karta hai — ye galat hoga"
    ]
  });

  // 28
  exercises.push({
    id: "02-03-coercion-truthy-falsy-28",
    title: "Short-circuit se DOM element safe access karo",
    starterCode: `function getText(element) {
  // TODO: element?.textContent bina optional chaining ke
  // element ho toh textContent, nahi toh ""
}`,
    solution: `function getText(element) {
  return element && element.textContent || "";
}`,
    tests: [{ input: [{textContent:"hello"}], expected: "hello" }],
    hints: [
      "element && element.textContent — element null hai toh false",
      "|| "" se default empty string milegi"
    ]
  });

  // 29
  exercises.push({
    id: "02-03-coercion-truthy-falsy-29",
    title: "Implicit coercion se array sum nikalo",
    starterCode: `function arraySum(arr) {
  // TODO: array ke numbers ka sum nikalo
  // [1,2,3] -> 6
}`,
    solution: `function arraySum(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}`,
    tests: [{ input: [[1,2,3]], expected: 6 }],
    hints: [
      "Array.reduce() use karo accumulator ke saath",
      "Initial value 0 do taaki empty array ke liye 0 aaye"
    ]
  });

  // 30
  exercises.push({
    id: "02-03-coercion-truthy-falsy-30",
    title: "Object me boolean coercion fix karo",
    starterCode: `function hasValue(obj) {
  // TODO: obj ke andar value hai ya nahi check karo
  // {name: ""} me name hai but empty hai — true hona chahiye
  // {} me name nahi hai — false
}`,
    solution: `function hasValue(obj) {
  return "name" in obj;
}`,
    tests: [{ input: [{name:""}], expected: "true" }],
    hints: [
      "in operator check karta hai ki key exist karti hai ya nahi",
      "Value empty ho sakti hai but key exist karti hai toh true"
    ]
  });

  // 31
  exercises.push({
    id: "02-03-coercion-truthy-falsy-31",
    title: "Boolean coercion se toggle banao",
    starterCode: `let state = false;

function toggle() {
  // TODO: state ko boolean me toggle karo
  // false -> true, true -> false
}`,
    solution: `let state = false;

function toggle() {
  state = !state;
  return state;
}`,
    tests: [{ input: [], expected: "true" }],
    hints: [
      "!" operator boolean ko flip kar deta hai",
      "state = !state likho aur return karo"
    ]
  });

  // 32
  exercises.push({
    id: "02-03-coercion-truthy-falsy-32",
    title: "String me type assertion bina type conversion ke",
    starterCode: `function assertType(value, expectedType) {
  // TODO: value ki type assert karo
  // Agar type match nahi kari toh error throw karo
}`,
    solution: `function assertType(value, expectedType) {
  if (typeof value !== expectedType) {
    throw new TypeError(\`Expected \${expectedType}, got \${typeof value}\`);
  }
  return value;
}`,
    tests: [{ input: [42, "number"], expected: 42 }],
    hints: [
      "typeof use karo type check ke liye",
      "Throw new TypeError agar type match nahi hoti"
    ]
  });

  // 33
  exercises.push({
    id: "02-03-coercion-truthy-falsy-33",
    title: "Nullish check utility banao",
    starterCode: `function isNullish(value) {
  // TODO: value null ya undefined hai toh true
  // Boolean(value) mat use karo — 0 aur "" bhi falsy hain
}`,
    solution: `function isNullish(value) {
  return value === null || value === undefined;
}`,
    tests: [{ input: [undefined], expected: "true" }],
    hints: [
      "Direct comparison karo null aur undefined se",
      "=== operator use karo strict comparison ke liye"
    ]
  });

  // 34
  exercises.push({
    id: "02-03-coercion-truthy-falsy-34",
    title: "Array to boolean coercion predict karo",
    starterCode: `function arrayBooleans() {
  // TODO: ye arrays ke boolean results return karo
  // Boolean([]), Boolean([0]), Boolean([""])
}`,
    solution: `function arrayBooleans() {
  return [Boolean([]), Boolean([0]), Boolean([""])];
}`,
    tests: [{ input: [], expected: "true,true,true" }],
    hints: [
      "Empty array bhi truthy hota hai!",
      "Sirf undefined hota hai jo array ko falsy bana sakta hai — but aisa hota nahi"
    ]
  });

  // 35
  exercises.push({
    id: "02-03-coercion-truthy-falsy-35",
    title: "String to number ke edge cases handle karo",
    starterCode: `function safeConvert(str) {
  // TODO: string ko number me convert karo
  // "", " ", "abc" ke liye 0 return karo
  // Valid number hai toh wo number return karo
}`,
    solution: `function safeConvert(str) {
  const num = Number(str);
  return Number.isNaN(num) ? 0 : num;
}`,
    tests: [{ input: ["123"], expected: 123 }],
    hints: [
      "Number() se convert karo",
      "Number.isNaN se check karo aur NaN ho toh 0 return karo"
    ]
  });

  // 36
  exercises.push({
    id: "02-03-coercion-truthy-falsy-36",
    title: "Ternary se even/odd check karo",
    starterCode: `function isEvenOrOdd(num) {
  // TODO: ternary use karo
  // Even hai toh "even", odd hai toh "odd"
}`,
    solution: `function isEvenOrOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}`,
    tests: [{ input: [4], expected: "even" }],
    hints: [
      "Modulo operator (%) se remainder nikalo",
      "Remainder 0 hai toh even hai"
    ]
  });

  // 37
  exercises.push({
    id: "02-03-coercion-truthy-falsy-37",
    title: "Short-circuit se error handling karo",
    starterCode: `function divide(a, b) {
  // TODO: b 0 hai toh "Cannot divide by zero" return karo
  // && aur || use karo if ke bina
}`,
    solution: `function divide(a, b) {
  return (b !== 0 && a / b) || "Cannot divide by zero";
}`,
    tests: [{ input: [10, 2], expected: 5 }],
    hints: [
      "b !== 0 check karo pehle",
      "Division successful ho toh result, nahi toh error message"
    ]
  });

  // 38
  exercises.push({
    id: "02-03-coercion-truthy-falsy-38",
    title: "Object me boolean property filter karo",
    starterCode: `function filterActive(users) {
  // TODO: sirf active users return karo
  // [{name:"A",active:true},{name:"B",active:false}] -> [{name:"A",active:true}]
}`,
    solution: `function filterActive(users) {
  return users.filter(user => user.active);
}`,
    tests: [{ input: [[{name:"A",active:true},{name:"B",active:false}]], expected: '[{"name":"A","active":true}]' }],
    hints: [
      "Array.filter() use karo",
      "user.active directly boolean me coerce hoga"
    ]
  });

  // 39
  exercises.push({
    id: "02-03-coercion-truthy-falsy-39",
    title: "Implicit coercion se string repeat karo",
    starterCode: `function repeat(str, n) {
  // TODO: string ko n baar repeat karo bina .repeat() ke
  // "ha" * 3 -> "hahaha" (ye nahi hota direct!)
}`,
    solution: `function repeat(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}`,
    tests: [{ input: ["ha", 3], expected: "hahaha" }],
    hints: [
      "String * number direct kaam nahi karta",
      "Loop use karo aur baar baar string concatenate karo"
    ]
  });

  // 40
  exercises.push({
    id: "02-03-coercion-truthy-falsy-40",
    title: "String me falsy values ko filter karo",
    starterCode: `function removeFalsyFromString(str) {
  // TODO: string se falsy characters hatao
  // "h0ell1o" -> "hello" (0 aur 1 truthy hain!)
  // Actually sirf empty string aur space hatao
}`,
    solution: `function removeFalsyFromString(str) {
  return str.split("").filter(c => c !== " " && c !== "").join("");
}`,
    tests: [{ input: ["h ello "], expected: "hello" }],
    hints: [
      "String ko array me convert karo aur filter karo",
      "Space aur empty string ko filter out karo"
    ]
  });

  // 41
  exercises.push({
    id: "02-03-coercion-truthy-falsy-41",
    title: "Coercion se comparison operator predict karo",
    starterCode: `function comparisonResults() {
  // TODO: ye comparisons ke results return karo
  // 1 < 2 < 3, 3 > 2 > 1
}`,
    solution: `function comparisonResults() {
  return [1 < 2 < 3, 3 > 2 > 1];
}`,
    tests: [{ input: [], expected: "true,false" }],
    hints: [
      "Left to right evaluate hota hai: (1 < 2) < 3 -> true < 3 -> true",
      "(3 > 2) > 1 -> true > 1 -> false!"
    ]
  });

  // 42
  exercises.push({
    id: "02-03-coercion-truthy-falsy-42",
    title: "Object me truthy property count karo",
    starterCode: `function countTruthyProps(obj) {
  // TODO: kitni properties truthy hain count karo
  // {a:1,b:0,c:"hi",d:null} -> 2 (a aur c)
}`,
    solution: `function countTruthyProps(obj) {
  return Object.values(obj).filter(Boolean).length;
}`,
    tests: [{ input: [{a:1,b:0,c:"hi",d:null}], expected: 2 }],
    hints: [
      "Object.values() se values ka array lo",
      "filter(Boolean) se truthy values filter karo"
    ]
  });

  // 43
  exercises.push({
    id: "02-03-coercion-truthy-falsy-43",
    title: "Nullish coalescing se array default karo",
    starterCode: `function getItems(list) {
  // TODO: list hai toh wo, nahi toh empty array
  // ?? use karo || mat use karo
}`,
    solution: `function getItems(list) {
  return list ?? [];
}`,
    tests: [{ input: [null], expected: "" }],
    hints: [
      "?? operator sirf null/undefined ke liye default deta hai",
      "[1,2,3] ?? [] -> [1,2,3] hoga kyunki list truthy hai"
    ]
  });

  // 44
  exercises.push({
    id: "02-03-coercion-truthy-falsy-44",
    title: "Ternary se login status message banao",
    starterCode: `function loginMessage(user) {
  // TODO: user hai toh "Welcome, {name}!", nahi toh "Please login"
  // user null/undefined hai toh "Please login"
}`,
    solution: `function loginMessage(user) {
  return user ? \`Welcome, \${user.name}!\` : "Please login";
}`,
    tests: [{ input: [{name:"John"}], expected: "Welcome, John!" }],
    hints: [
      "Ternary operator use karo user exist check ke liye",
      "Template literal se message banao"
    ]
  });

  // 45
  exercises.push({
    id: "02-03-coercion-truthy-falsy-45",
    title: "String me implicit conversion se length check karo",
    starterCode: `function isLongString(str) {
  // TODO: string 5 ya usse zyada characters ki hai toh true
  // Implicit coercion use karo comparison me
}`,
    solution: `function isLongString(str) {
  return str.length >= 5;
}`,
    tests: [{ input: ["hello"], expected: "true" }],
    hints: [
      ".length property se length nikalo",
      ">= operator se comparison karo"
    ]
  });

  // 46
  exercises.push({
    id: "02-03-coercion-truthy-falsy-46",
    title: "Boolean coercion se array includes check karo",
    starterCode: `function includes(arr, value) {
  // TODO: array me value hai ya nahi check karo
  // .includes() bina use ke
}`,
    solution: `function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}`,
    tests: [{ input: [[1,2,3], 2], expected: "true" }],
    hints: [
      "indexOf() value dhundhta hai — -1 return ho toh nahi mila",
      "indexOf !== -1 se boolean me coerce hota hai"
    ]
  });

  // 47
  exercises.push({
    id: "02-03-coercion-truthy-falsy-47",
    title: "Ternary se age group classify karo",
    starterCode: `function ageGroup(age) {
  // TODO: "kid" (0-12), "teen" (13-19), "adult" (20-59), "senior" (60+)
}`,
    solution: `function ageGroup(age) {
  return age <= 12 ? "kid" : age <= 19 ? "teen" : age <= 59 ? "adult" : "senior";
}`,
    tests: [{ input: [25], expected: "adult" }],
    hints: [
      "Nested ternary use karo",
      "Chhoti age se badi age ki taraf check karo"
    ]
  });

  // 48
  exercises.push({
    id: "02-03-coercion-truthy-falsy-48",
    title: "Object me value 0 ko default se replace karo",
    starterCode: `function replaceZero(obj) {
  // TODO: obj ke values me 0 ko "N/A" se replace karo
  // {a:0, b:5, c:0} -> {a:"N/A", b:5, c:"N/A"}
}`,
    solution: `function replaceZero(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = value === 0 ? "N/A" : value;
  }
  return result;
}`,
    tests: [{ input: [{a:0,b:5}], expected: '{"a":"N/A","b":5}' }],
    hints: [
      "Object.entries() se iterate karo",
      "Value === 0 check karo strict equality se"
    ]
  });

  // 49
  exercises.push({
    id: "02-03-coercion-truthy-falsy-49",
    title: "Short-circuit se memoization pattern banao",
    starterCode: `const cache = {};

function memoize(key, computeFn) {
  // TODO: cache me hai toh return karo, nahi toh compute karo aur store karo
  // && aur || use karo
}`,
    solution: `const cache = {};

function memoize(key, computeFn) {
  return (cache[key] = cache[key] || computeFn());
}`,
    tests: [{ input: ["test", () => 42], expected: 42 }],
    hints: [
      "cache[key] || computeFn() — cache me hai toh wo, nahi toh compute karo",
      "Assignment bhi ho jayega: cache[key] = cache[key] || computeFn()"
    ]
  });

  // 50
  exercises.push({
    id: "02-03-coercion-truthy-falsy-50",
    title: "String me type coercion ka comprehensive check banao",
    starterCode: `function coercionQuiz() {
  // TODO: ye 5 expressions ke results predict karo array me
  // "3" + 4 - 1, true + true + true, "" + 1, null + 1, undefined + 1
}`,
    solution: `function coercionQuiz() {
  return ["3" + 4 - 1, true + true + true, "" + 1, null + 1, undefined + 1];
}`,
    tests: [{ input: [], expected: "33,3,11,1,NaN" }],
    hints: [
      "\"3\" + 4 -> \"34\" (string concat), \"34\" - 1 -> 33 (number conversion)",
      "true -> 1 in arithmetic, null -> 0, undefined -> NaN"
    ]
  });

  return exercises;
}

// ============================================================
// MAIN
// ============================================================
const lessonGenerators = [
  { slug: "primitive-types", generator: generatePrimitiveTypes },
  { slug: "reference-types-typeof", generator: generateReferenceTypes },
  { slug: "coercion-truthy-falsy", generator: generateCoercion },
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

console.log("Module 02 exercises generated successfully!");
