import fs from "fs";
import path from "path";

const outputBase = "src/content/05-loops/exercises";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeExercise(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function generateForWhile() {
  const exercises = [];

  exercises.push({
    id: "05-01-for-while-01",
    title: "1 se n tak sum nikalo using for loop",
    starterCode: `function sumToN(n) {\n  // TODO: 1+2+...+n return karo\n}`,
    solution: `function sumToN(n) {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) sum += i;\n  return sum;\n}`,
    tests: [{ input: [10], expected: 55 }],
    hints: ["For loop 1 se n tak chalao", "Sum variable initialize karo 0 se"]
  });

  exercises.push({
    id: "05-01-for-while-02",
    title: "Factorial nikalo while loop se",
    starterCode: `function factorial(n) {\n  // TODO: n! calculate karo while loop se\n}`,
    solution: `function factorial(n) {\n  let result = 1;\n  let i = n;\n  while (i > 1) {\n    result *= i;\n    i--;\n  }\n  return result;\n}`,
    tests: [{ input: [5], expected: 120 }],
    hints: ["Result 1 se initialize karo", "Jab tak i > 1 hai tab tak multiply karo"]
  });

  exercises.push({
    id: "05-01-for-while-03",
    title: "Prime number check karo using loop",
    starterCode: `function isPrime(n) {\n  // TODO: n prime hai ya nahi check karo\n}`,
    solution: `function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}`,
    tests: [{ input: [7], expected: "true" }],
    hints: ["2 se kam numbers prime nahi hain", "Sirf sqrt(n) tak check karo"]
  });

  exercises.push({
    id: "05-01-for-while-04",
    title: "Do-while use karke user input simulation karo",
    starterCode: `function findFirstMultiple(start, divisor) {\n  // TODO: start se shuru karke pehla divisor find karo using do-while\n}`,
    solution: `function findFirstMultiple(start, divisor) {\n  let num = start;\n  do {\n    if (num % divisor === 0) return num;\n    num++;\n  } while (true);\n}`,
    tests: [{ input: [7, 3], expected: 9 }],
    hints: ["Do-while me pehle check karo, fir increment karo", "Kam se kam ek baar loop chalega"]
  });

  exercises.push({
    id: "05-01-for-while-05",
    title: "Break use karke array me target dhundho",
    starterCode: `function findIndex(arr, target) {\n  // TODO: arr me target ka index dhundho using for loop with break\n}`,
    solution: `function findIndex(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}`,
    tests: [{ input: [[1,2,3,4], 3], expected: 2 }],
    hints: ["Milte hi return karo — automatically break ho jayega", "Nahi mila toh -1 return karo"]
  });

  exercises.push({
    id: "05-01-for-while-06",
    title: "Continue use karke odd numbers skip karo",
    starterCode: `function evenSum(n) {\n  // TODO: 1 se n tak sirf even numbers ka sum\n  // Continue use karo odd skip karne ke liye\n}`,
    solution: `function evenSum(n) {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) {\n    if (i % 2 !== 0) continue;\n    sum += i;\n  }\n  return sum;\n}`,
    tests: [{ input: [10], expected: 30 }],
    hints: ["Odd hai toh continue se skip karo", "Sum me sirf even add honge"]
  });

  exercises.push({
    id: "05-01-for-while-07",
    title: "Reverse counting loop likho",
    starterCode: `function countdown(n) {\n  // TODO: n se 1 tak countdown array banao\n}`,
    solution: `function countdown(n) {\n  const result = [];\n  for (let i = n; i >= 1; i--) result.push(i);\n  return result;\n}`,
    tests: [{ input: [5], expected: "5,4,3,2,1" }],
    hints: ["Loop shuru karo n se, 1 tak jao, i-- karo", "Array me push karte jao"]
  });

  exercises.push({
    id: "05-01-for-while-08",
    title: "Nested loop se multiplication table banao",
    starterCode: `function multiplicationTable(n) {\n  // TODO: 1 se n tak multiplication table array banao\n  // Har row: [i, i*1, i*2, ..., i*10]\n}`,
    solution: `function multiplicationTable(n) {\n  const table = [];\n  for (let i = 1; i <= n; i++) {\n    const row = [];\n    for (let j = 1; j <= 10; j++) row.push(i * j);\n    table.push(row);\n  }\n  return table;\n}`,
    tests: [{ input: [2], expected: "2,4,6,8,10,12,14,16,18,20" }],
    hints: ["Outer loop rows ke liye, inner loop columns ke liye", "Har row me i*j value push karo"]
  });

  exercises.push({
    id: "05-01-for-while-09",
    title: "While loop se string reverse karo",
    starterCode: `function reverseString(str) {\n  // TODO: while loop se string reverse karo bina .reverse() ke\n}`,
    solution: `function reverseString(str) {\n  let result = "";\n  let i = str.length - 1;\n  while (i >= 0) {\n    result += str[i];\n    i--;\n  }\n  return result;\n}`,
    tests: [{ input: ["hello"], expected: "olleh" }],
    hints: ["Last character se shuru karo", "While me i >= 0 tak chalao"]
  });

  exercises.push({
    id: "05-01-for-while-10",
    title: "Break use karke first negative dhundho",
    starterCode: `function firstNegative(arr) {\n  // TODO: array me pehla negative number dhundho\n  // Break se loop jaldi band karo\n}`,
    solution: `function firstNegative(arr) {\n  for (const num of arr) {\n    if (num < 0) return num;\n  }\n  return null;\n}`,
    tests: [{ input: [1,2,-3,4], expected: -3 }],
    hints: ["Milte hi return karo", "Nahi mila toh null return karo"]
  });

  exercises.push({
    id: "05-01-for-while-11",
    title: "Fibonacci sequence generate karo for n terms",
    starterCode: `function fibonacci(n) {\n  // TODO: pehle n fibonacci numbers ka array do\n  // 0,1,1,2,3,5,8...\n}`,
    solution: `function fibonacci(n) {\n  if (n <= 0) return [];\n  if (n === 1) return [0];\n  const result = [0, 1];\n  for (let i = 2; i < n; i++) {\n    result.push(result[i-1] + result[i-2]);\n  }\n  return result;\n}`,
    tests: [{ input: [7], expected: "0,1,1,2,3,5,8" }],
    hints: ["Pehle 2 values fix hain: 0 aur 1", "Har naya number = pichla + usse pehla"]
  });

  exercises.push({
    id: "05-01-for-while-12",
    title: "While loop se GCD nikalo",
    starterCode: `function gcd(a, b) {\n  // TODO: Euclidean algorithm while loop se implement karo\n}`,
    solution: `function gcd(a, b) {\n  while (b !== 0) {\n    [a, b] = [b, a % b];\n  }\n  return a;\n}`,
    tests: [{ input: [12, 8], expected: 4 }],
    hints: ["Jab tak b 0 nahi hota tab tak: a=b, b=a%b", "Loop ke baad a me GCD hoga"]
  });

  exercises.push({
    id: "05-01-for-while-13",
    title: "Continue use karke divisible by 3 wale elements hatao",
    starterCode: `function removeDivByThree(arr) {\n  // TODO: array se 3 se divide hone wale elements hatao\n  // Continue use karo\n}`,
    solution: `function removeDivByThree(arr) {\n  const result = [];\n  for (const num of arr) {\n    if (num % 3 === 0) continue;\n    result.push(num);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5,6]], expected: "1,2,4,5" }],
    hints: ["3 se divisible hai toh continue se skip karo", "Baaki elements result me push karo"]
  });

  exercises.push({
    id: "05-01-for-while-14",
    title: "Nested loop se star pattern banao",
    starterCode: `function starPattern(n) {\n  // TODO: n lines ka star pattern\n  // Line 1: *, Line 2: **, ...\n}`,
    solution: `function starPattern(n) {\n  const result = [];\n  for (let i = 1; i <= n; i++) {\n    result.push("*".repeat(i));\n  }\n  return result;\n}`,
    tests: [{ input: [4], expected: "*,**,***,****" }],
    hints: ["Outer loop lines ke liye", "Har line me i stars honge"]
  });

  exercises.push({
    id: "05-01-for-while-15",
    title: "For loop se array flat karo (depth 1)",
    starterCode: `function flattenOnce(arr) {\n  // TODO: ek level tak flatten karo\n  // [[1,2],[3,[4]],5] -> [1,2,3,[4],5]\n}`,
    solution: `function flattenOnce(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (Array.isArray(item)) {\n      for (const sub of item) result.push(sub);\n    } else {\n      result.push(item);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[1,[2,3],4]], expected: "1,2,3,4" }],
    hints: ["Array hai toh uske elements add karo", "Nahi toh direct add karo"]
  });

  exercises.push({
    id: "05-01-for-while-16",
    title: "While loop se Armstrong number check karo",
    starterCode: `function isArmstrong(n) {\n  // TODO: 153 = 1^3 + 5^3 + 3^3 = 153\n  // Har digit ka power of digits count equal hai toh Armstrong\n}`,
    solution: `function isArmstrong(n) {\n  const str = n.toString();\n  const power = str.length;\n  let sum = 0;\n  let temp = n;\n  while (temp > 0) {\n    sum += (temp % 10) ** power;\n    temp = Math.floor(temp / 10);\n  }\n  return sum === n;\n}`,
    tests: [{ input: [153], expected: "true" }],
    hints: ["Digits count nikalo power ke liye", "%10 se last digit, /10 se remove karo"]
  });

  exercises.push({
    id: "05-01-for-while-17",
    title: "Break use karke palindrome dhundho",
    starterCode: `function firstPalindrome(arr) {\n  // TODO: array me pehla palindrome string dhundho\n}`,
    solution: `function firstPalindrome(arr) {\n  for (const str of arr) {\n    const reversed = str.split("").reverse().join("");\n    if (str === reversed) return str;\n  }\n  return null;\n}`,
    tests: [{ input: ["abc","deed","aba"], expected: "deed" }],
    hints: ["Har string ka reverse banake compare karo", "Milte hi return karo"]
  });

  exercises.push({
    id: "05-01-for-while-18",
    title: "For loop se array rotate karo",
    starterCode: `function rotateRight(arr, k) {\n  // TODO: array ko k positions right se rotate karo\n  // [1,2,3,4,5], 2 -> [4,5,1,2,3]\n}`,
    solution: `function rotateRight(arr, k) {\n  const n = arr.length;\n  const result = [];\n  for (let i = 0; i < n; i++) {\n    result.push(arr[(i - k % n + n) % n]);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5], 2], expected: "4,5,1,2,3" }],
    hints: ["Modulo se index wrap karo", "Formula: (i - k % n + n) % n"]
  });

  exercises.push({
    id: "05-01-for-while-19",
    title: "While loop se decimal to binary convert karo",
    starterCode: `function toBinary(n) {\n  // TODO: number ko binary string me convert karo using while\n}`,
    solution: `function toBinary(n) {\n  if (n === 0) return "0";\n  let binary = "";\n  let num = Math.abs(n);\n  while (num > 0) {\n    binary = (num % 2) + binary;\n    num = Math.floor(num / 2);\n  }\n  return n < 0 ? "-" + binary : binary;\n}`,
    tests: [{ input: [10], expected: "1010" }],
    hints: ["%2 se remainder (0 ya 1) nikalo", "/2 se number ko chhota karo"]
  });

  exercises.push({
    id: "05-01-for-while-20",
    title: "Continue use karke vowels count karo",
    starterCode: `function countVowels(str) {\n  // TODO: string me vowels count karo using continue\n}`,
    solution: `function countVowels(str) {\n  const vowels = "aeiouAEIOU";\n  let count = 0;\n  for (const char of str) {\n    if (!vowels.includes(char)) continue;\n    count++;\n  }\n  return count;\n}`,
    tests: [{ input: ["hello"], expected: 2 }],
    hints: ["Vowel nahi hai toh continue se skip karo", "Count me sirf vowels add honge"]
  });

  exercises.push({
    id: "05-01-for-while-21",
    title: "For loop se array me missing number dhundho",
    starterCode: `function findMissing(arr) {\n  // TODO: 1 se n tak numbers me ek missing hai — wo dhundho\n}`,
    solution: `function findMissing(arr) {\n  const n = arr.length + 1;\n  const expected = (n * (n + 1)) / 2;\n  const actual = arr.reduce((s, n) => s + n, 0);\n  return expected - actual;\n}`,
    tests: [{ input: [1,2,4,5], expected: 3 }],
    hints: ["Sum formula: n*(n+1)/2", "Expected - actual = missing number"]
  });

  exercises.push({
    id: "05-01-for-while-22",
    title: "While loop se power function banao",
    starterCode: `function power(base, exp) {\n  // TODO: base^exp while loop se calculate karo\n}`,
    solution: `function power(base, exp) {\n  let result = 1;\n  let i = exp;\n  while (i > 0) {\n    result *= base;\n    i--;\n  }\n  return result;\n}`,
    tests: [{ input: [2, 3], expected: 8 }],
    hints: ["Result 1 se initialize karo", "Exp baar multiply karo"]
  });

  exercises.push({
    id: "05-01-for-while-23",
    title: "Nested loop se matrix transpose karo",
    starterCode: `function transpose(matrix) {\n  // TODO: matrix ka transpose nikalo\n}`,
    solution: `function transpose(matrix) {\n  const rows = matrix.length;\n  const cols = matrix[0].length;\n  const result = [];\n  for (let j = 0; j < cols; j++) {\n    const row = [];\n    for (let i = 0; i < rows; i++) row.push(matrix[i][j]);\n    result.push(row);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3],[4,5,6]], expected: "1,4,2,5,3,6" }],
    hints: ["Rows aur columns swap karo", "Inner loop pehle columns ke liye chalega"]
  });

  exercises.push({
    id: "05-01-for-while-24",
    title: "Break use karke array ke consecutive pairs dhundho",
    starterCode: `function hasConsecutive(arr) {\n  // TODO: array me koi do consecutive elements same hain ya nahi\n}`,
    solution: `function hasConsecutive(arr) {\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] === arr[i + 1]) return true;\n  }\n  return false;\n}`,
    tests: [{ input: [1,2,3,3,4], expected: "true" }],
    hints: ["Loop me i aur i+1 compare karo", "Milte hi true return karo"]
  });

  exercises.push({
    id: "05-01-for-while-25",
    title: "For loop se string me character frequency nikalo",
    starterCode: `function charFreq(str) {\n  // TODO: har character ki frequency count karo\n}`,
    solution: `function charFreq(str) {\n  const freq = {};\n  for (const char of str) {\n    freq[char] = (freq[char] || 0) + 1;\n  }\n  return freq;\n}`,
    tests: [{ input: ["hello"], expected: '{"h":1,"e":1,"l":2,"o":1}' }],
    hints: ["Object me count track karo", "freq[char] = (freq[char] || 0) + 1 pattern use karo"]
  });

  exercises.push({
    id: "05-01-for-while-26",
    title: "While loop se Collatz sequence generate karo",
    starterCode: `function collatz(n) {\n  // TODO: n se shuru ho kar 1 tak Collatz sequence\n  // Even -> n/2, Odd -> 3n+1\n}`,
    solution: `function collatz(n) {\n  const seq = [n];\n  while (n !== 1) {\n    n = n % 2 === 0 ? n / 2 : 3 * n + 1;\n    seq.push(n);\n  }\n  return seq;\n}`,
    tests: [{ input: [6], expected: "6,3,10,5,16,8,4,2,1" }],
    hints: ["Jab tak 1 nahi hota tab tak loop chalao", "Even hai toh /2, odd hai toh 3n+1"]
  });

  exercises.push({
    id: "05-01-for-while-27",
    title: "Continue use karke array me negatives filter karo",
    starterCode: `function onlyPositives(arr) {\n  // TODO: sirf positive numbers return karo using continue\n}`,
    solution: `function onlyPositives(arr) {\n  const result = [];\n  for (const num of arr) {\n    if (num <= 0) continue;\n    result.push(num);\n  }\n  return result;\n}`,
    tests: [{ input: [-1,2,-3,4,5], expected: "2,4,5" }],
    hints: ["Negative ya zero hai toh continue se skip karo", "Positive elements hi result me jayenge"]
  });

  exercises.push({
    id: "05-01-for-while-28",
    title: "For loop se array ke sabse bade element ka index dhundho",
    starterCode: `function maxIndex(arr) {\n  // TODO: sabse bade element ka pehla index do\n}`,
    solution: `function maxIndex(arr) {\n  if (arr.length === 0) return -1;\n  let maxIdx = 0;\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > arr[maxIdx]) maxIdx = i;\n  }\n  return maxIdx;\n}`,
    tests: [{ input: [1,5,3,5,2], expected: 1 }],
    hints: ["Pehle index 0 maano max ka", "Har element ko current max se compare karo"]
  });

  exercises.push({
    id: "05-01-for-while-29",
    title: "While loop se number ke digits reverse karo",
    starterCode: `function reverseDigits(n) {\n  // TODO: number ke digits reverse karo\n}`,
    solution: `function reverseDigits(n) {\n  let reversed = 0;\n  let num = Math.abs(n);\n  while (num > 0) {\n    reversed = reversed * 10 + (num % 10);\n    num = Math.floor(num / 10);\n  }\n  return n < 0 ? -reversed : reversed;\n}`,
    tests: [{ input: [1234], expected: 4321 }],
    hints: ["%10 se last digit nikalo", "reversed * 10 + digit se reverse banta hai"]
  });

  exercises.push({
    id: "05-01-for-while-30",
    title: "For loop se array chunking karo",
    starterCode: `function chunk(arr, size) {\n  // TODO: array ko equal size ke chunks me todo\n}`,
    solution: `function chunk(arr, size) {\n  const result = [];\n  for (let i = 0; i < arr.length; i += size) {\n    result.push(arr.slice(i, i + size));\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5], 2], expected: "1,2,3,4,5" }],
    hints: ["Loop me i ko size se badhao", "slice se chunk nikalo"]
  });

  exercises.push({
    id: "05-01-for-while-31",
    title: "Nested loop se spiral order printing karo",
    starterCode: `function spiralOrder(matrix) {\n  // TODO: matrix ko spiral order me print karo\n}`,
    solution: `function spiralOrder(matrix) {\n  if (!matrix.length) return [];\n  const result = [];\n  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;\n  while (top <= bottom && left <= right) {\n    for (let i = left; i <= right; i++) result.push(matrix[top][i]);\n    top++;\n    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);\n    right--;\n    if (top <= bottom) { for (let i = right; i >= left; i--) result.push(matrix[bottom][i]); bottom--; }\n    if (left <= right) { for (let i = bottom; i >= top; i--) result.push(matrix[i][left]); left++; }\n  }\n  return result;\n}`,
    tests: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: "1,2,3,6,9,8,7,4,5" }],
    hints: ["4 pointers use karo: top, bottom, left, right", "Har direction me traverse karo aur pointer update karo"]
  });

  exercises.push({
    id: "05-01-for-while-32",
    title: "Break use karke loop me early exit pattern implement karo",
    starterCode: `function findPair(arr, target) {\n  // TODO: do numbers ka sum target ke barabar ho — pair dhundho\n}`,
    solution: `function findPair(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] + arr[j] === target) return [arr[i], arr[j]];\n    }\n  }\n  return null;\n}`,
    tests: [{ input: [[1,2,3,4,5], 7], expected: "3,4" }],
    hints: ["Nested loop se pairs banao", "Sum target ke barabar hai toh return karo"]
  });

  exercises.push({
    id: "05-01-for-while-33",
    title: "For loop se array ke elements ko group karo",
    starterCode: `function groupBy(arr, fn) {\n  // TODO: array ko function ke result ke hisaab se group karo\n}`,
    solution: `function groupBy(arr, fn) {\n  const groups = {};\n  for (const item of arr) {\n    const key = fn(item);\n    (groups[key] = groups[key] || []).push(item);\n  }\n  return groups;\n}`,
    tests: [{ input: [[1,2,3,4], n => n % 2 === 0 ? "even" : "odd"], expected: '{"odd":[1,3],"even":[2,4]}' }],
    hints: ["Function se key nikalo", "Groups object me push karo"]
  });

  exercises.push({
    id: "05-01-for-while-34",
    title: "While loop se digit sum nikalo recursively ki jagah",
    starterCode: `function digitSum(n) {\n  // TODO: number ke digits ka sum using while\n}`,
    solution: `function digitSum(n) {\n  let sum = 0;\n  let num = Math.abs(n);\n  while (num > 0) {\n    sum += num % 10;\n    num = Math.floor(num / 10);\n  }\n  return sum;\n}`,
    tests: [{ input: [1234], expected: 10 }],
    hints: ["%10 se last digit nikalo aur sum me add karo", "/10 se last digit hatao"]
  });

  exercises.push({
    id: "05-01-for-while-35",
    title: "Continue use karke non-numeric values filter karo",
    starterCode: `function extractNumbers(arr) {\n  // TODO: array se sirf numbers nikalo using continue\n}`,
    solution: `function extractNumbers(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (typeof item !== "number") continue;\n    if (isNaN(item)) continue;\n    result.push(item);\n  }\n  return result;\n}`,
    tests: [{ input: [1, "a", 2, null, NaN, 3], expected: "1,2,3" }],
    hints: ["typeof se type check karo", "NaN check bhi karo"]
  });

  exercises.push({
    id: "05-01-for-while-36",
    title: "For loop se string compression banao",
    starterCode: `function compress(str) {\n  // TODO: "aabbbcc" -> "a2b3c2"\n}`,
    solution: `function compress(str) {\n  if (!str) return "";\n  let result = "";\n  let count = 1;\n  for (let i = 1; i <= str.length; i++) {\n    if (str[i] === str[i-1]) {\n      count++;\n    } else {\n      result += str[i-1] + count;\n      count = 1;\n    }\n  }\n  return result;\n}`,
    tests: [{ input: ["aabbbcc"], expected: "a2b3c2" }],
    hints: ["Consecutive characters count karo", "Character change hone pe result me add karo"]
  });

  exercises.push({
    id: "05-01-for-while-37",
    title: "While loop se tower of Hanoi solve karo",
    starterCode: `function hanoi(n) {\n  // TODO: n disks ke liye minimum steps return karo\n  // Formula: 2^n - 1\n}`,
    solution: `function hanoi(n) {\n  return Math.pow(2, n) - 1;\n}`,
    tests: [{ input: [3], expected: 7 }],
    hints: ["Minimum steps = 2^n - 1", "Math.pow use karo"]
  });

  exercises.push({
    id: "05-01-for-while-38",
    title: "Nested loop se 2D array me search karo",
    starterCode: `function searchMatrix(matrix, target) {\n  // TODO: sorted matrix me target dhundho\n}`,
    solution: `function searchMatrix(matrix, target) {\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === target) return [i, j];\n    }\n  }\n  return null;\n}`,
    tests: [{ input: [[[1,2],[3,4]], 3], expected: "1,0" }],
    hints: ["Outer loop rows ke liye, inner loop columns ke liye", "Milte hi position return karo"]
  });

  exercises.push({
    id: "05-01-for-while-39",
    title: "Break use karke array me target se bada pehla element dhundho",
    starterCode: `function firstGreater(arr, target) {\n  // TODO: array me pehla element dhundho jo target se bada ho\n}`,
    solution: `function firstGreater(arr, target) {\n  for (const num of arr) {\n    if (num > target) return num;\n  }\n  return null;\n}`,
    tests: [{ input: [[1,3,5,7,9], 4], expected: 5 }],
    hints: ["Har element compare karo target se", "Bada milte hi return karo"]
  });

  exercises.push({
    id: "05-01-for-while-40",
    title: "For loop se array me duplicates remove karo maintaining order",
    starterCode: `function removeDuplicates(arr) {\n  // TODO: duplicates hatao par order maintain karo\n}`,
    solution: `function removeDuplicates(arr) {\n  const seen = new Set();\n  const result = [];\n  for (const item of arr) {\n    if (!seen.has(item)) {\n      seen.add(item);\n      result.push(item);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [1,2,2,3,1,4], expected: "1,2,3,4" }],
    hints: ["Set use karo seen elements track karne ke liye", "Pehli baar milne pe hi add karo"]
  });

  exercises.push({
    id: "05-01-for-while-41",
    title: "While loop se string me words count karo",
    starterCode: `function wordCount(str) {\n  // TODO: string me kitne words hain\n}`,
    solution: `function wordCount(str) {\n  if (!str.trim()) return 0;\n  let count = 1;\n  let inWord = false;\n  for (const char of str) {\n    if (char === " " || char === "\\t") {\n      inWord = false;\n    } else if (!inWord) {\n      if (count > 1 || inWord === false) count++;\n      inWord = true;\n    }\n  }\n  return str.trim() ? count : 0;\n}`,
    tests: [{ input: ["hello world foo"], expected: 4 }],
    hints: ["Space to non-space transition pe count badhao", "Edge cases handle karo — empty string"]
  });

  exercises.push({
    id: "05-01-for-while-42",
    title: "For loop se array ke subarrays generate karo",
    starterCode: `function subarrays(arr) {\n  // TODO: array ke sabhi possible subarrays return karo\n}`,
    solution: `function subarrays(arr) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i; j < arr.length; j++) {\n      result.push(arr.slice(i, j + 1));\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3]], expected: "1,1,2,1,2,3,2,2,3,3" }],
    hints: ["Outer loop start index ke liye", "Inner loop end index ke liye"]
  });

  exercises.push({
    id: "05-01-for-while-43",
    title: "Continue use karke array me strings ko capitalize karo",
    starterCode: `function capitalizeAll(arr) {\n  // TODO: strings ko uppercase karo, non-strings skip karo\n}`,
    solution: `function capitalizeAll(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (typeof item !== "string") continue;\n    result.push(item.toUpperCase());\n  }\n  return result;\n}`,
    tests: [{ input: ["hello", 1, "world", null], expected: "HELLO,WORLD" }],
    hints: ["typeof se string check karo", "String hai toh uppercase karo"]
  });

  exercises.push({
    id: "05-01-for-while-44",
    title: "Nested loop se Pythagorean triplets dhundho",
    starterCode: `function pythagoreanTriplets(n) {\n  // TODO: n tak ke sab Pythagorean triplets\n}`,
    solution: `function pythagoreanTriplets(n) {\n  const result = [];\n  for (let a = 1; a <= n; a++) {\n    for (let b = a; b <= n; b++) {\n      const c = Math.sqrt(a * a + b * b);\n      if (c === Math.floor(c) && c <= n) {\n        result.push([a, b, c]);\n      }\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [5], expected: "3,4,5" }],
    hints: ["Nested loop se a aur b ke pairs banao", "c = sqrt(a²+b²) agar integer hai toh triplet hai"]
  });

  exercises.push({
    id: "05-01-for-while-45",
    title: "Break use karke infinite loop simulate karo with exit",
    starterCode: `function findDivisible(start, divisor) {\n  // TODO: start se shuru karke pehla divisible number dhundho\n}`,
    solution: `function findDivisible(start, divisor) {\n  let num = start;\n  while (true) {\n    if (num % divisor === 0) return num;\n    num++;\n  }\n}`,
    tests: [{ input: [7, 3], expected: 9 }],
    hints: ["Infinite loop use karo with break condition", "Divisible milte hi return karo"]
  });

  exercises.push({
    id: "05-01-for-while-46",
    title: "For loop se array ke middle element dhundho",
    starterCode: `function middle(arr) {\n  // TODO: array ka middle element do (odd length ke liye)\n}`,
    solution: `function middle(arr) {\n  if (arr.length === 0) return undefined;\n  return arr[Math.floor(arr.length / 2)];\n}`,
    tests: [{ input: [1,2,3,4,5], expected: 3 }],
    hints: ["Length / 2 se index milta hai", "Math.floor use karo integer index ke liye"]
  });

  exercises.push({
    id: "05-01-for-while-47",
    title: "While loop se string me vowels remove karo",
    starterCode: `function removeVowels(str) {\n  // TODO: string se vowels hatao\n}`,
    solution: `function removeVowels(str) {\n  const vowels = "aeiouAEIOU";\n  let result = "";\n  for (const char of str) {\n    if (vowels.includes(char)) continue;\n    result += char;\n  }\n  return result;\n}`,
    tests: [{ input: ["hello world"], expected: "hll wrld" }],
    hints: ["Vowel check karo aur skip karo", "Non-vowel characters result me add karo"]
  });

  exercises.push({
    id: "05-01-for-while-48",
    title: "For loop se array ke running average nikalo",
    starterCode: `function runningAverage(arr) {\n  // TODO: har index pe ab tak ka average array me do\n  // [1,2,3] -> [1, 1.5, 2]\n}`,
    solution: `function runningAverage(arr) {\n  const result = [];\n  let sum = 0;\n  for (let i = 0; i < arr.length; i++) {\n    sum += arr[i];\n    result.push(sum / (i + 1));\n  }\n  return result;\n}`,
    tests: [{ input: [1,2,3], expected: "1,1.5,2" }],
    hints: ["Running sum maintain karo", "Sum / (i+1) se average nikalo"]
  });

  exercises.push({
    id: "05-01-for-while-49",
    title: "Nested loop se array ke pairs aur unka difference nikalo",
    starterCode: `function allPairs(arr) {\n  // TODO: sab pairs aur unka absolute difference\n}`,
    solution: `function allPairs(arr) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      result.push({ pair: [arr[i], arr[j]], diff: Math.abs(arr[i] - arr[j]) });\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3]], expected: "pair:[1,2],diff:1,pair:[1,3],diff:2,pair:[2,3],diff:1" }],
    hints: ["Nested loop se pairs banao", "Math.abs se difference nikalo"]
  });

  exercises.push({
    id: "05-01-for-while-50",
    title: "For loop se simple sorting — bubble sort implement karo",
    starterCode: `function bubbleSort(arr) {\n  // TODO: bubble sort algorithm implement karo\n}`,
    solution: `function bubbleSort(arr) {\n  const result = [...arr];\n  for (let i = 0; i < result.length; i++) {\n    for (let j = 0; j < result.length - i - 1; j++) {\n      if (result[j] > result[j + 1]) {\n        [result[j], result[j + 1]] = [result[j + 1], result[j]];\n      }\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[5,3,1,4,2]], expected: "1,2,3,4,5" }],
    hints: ["Outer loop iterations ke liye", "Inner loop adjacent elements compare aur swap karo"]
  });

  return exercises;
}

function generateForOfForIn() {
  const exercises = [];

  exercises.push({
    id: "05-02-for-of-for-in-01",
    title: "For-of se array ke har element pe operation karo",
    starterCode: `function doubleAll(arr) {\n  // TODO: for-of use karke array ke sab elements double karo\n}`,
    solution: `function doubleAll(arr) {\n  const result = [];\n  for (const num of arr) result.push(num * 2);\n  return result;\n}`,
    tests: [{ input: [[1,2,3]], expected: "2,4,6" }],
    hints: ["For-of se directly values milti hain", "Index nahi milta — agar index chahiye toh entries use karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-02",
    title: "For-in se object ke properties iterate karo",
    starterCode: `function objectKeys(obj) {\n  // TODO: for-in use karke object ke sab keys return karo array me\n}`,
    solution: `function objectKeys(obj) {\n  const keys = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) keys.push(key);\n  }\n  return keys;\n}`,
    tests: [{ input: [{a:1,b:2}], expected: "a,b" }],
    hints: ["For-in se keys milti hain", "hasOwnProperty check karo taaki inherited properties na aaye"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-03",
    title: "For-of se string ke har character pe check karo",
    starterCode: `function hasAllVowels(str) {\n  // TODO: string me sab vowels hain ya nahi check karo\n}`,
    solution: `function hasAllVowels(str) {\n  const vowels = new Set("aeiou");\n  const found = new Set();\n  for (const char of str.toLowerCase()) {\n    if (vowels.has(char)) found.add(char);\n  }\n  return found.size === 5;\n}`,
    tests: [{ input: ["education"], expected: "true" }],
    hints: ["Set use karo unique vowels track karne ke liye", "5 vowels mil gayi toh true"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-04",
    title: "For-in se nested object ke keys flatten karo",
    starterCode: `function flattenKeys(obj, prefix = "") {\n  // TODO: nested object ke sab keys flat array me do\n  // {a:{b:1}} -> ["a", "a.b"]\n}`,
    solution: `function flattenKeys(obj, prefix = "") {\n  const keys = [];\n  for (const key in obj) {\n    const fullKey = prefix ? prefix + "." + key : key;\n    keys.push(fullKey);\n    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {\n      keys.push(...flattenKeys(obj[key], fullKey));\n    }\n  }\n  return keys;\n}`,
    tests: [{ input: [{a:{b:1,c:2}}], expected: "a,a.b,a.c" }],
    hints: ["Prefix use karo nested keys ke liye", "Recursion se nested objects explore karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-05",
    title: "For-of se array me transformation karo",
    starterCode: `function transform(arr) {\n  // TODO: numbers ko string me, strings ko uppercase me convert karo\n}`,
    solution: `function transform(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (typeof item === "number") result.push(String(item));\n    else if (typeof item === "string") result.push(item.toUpperCase());\n    else result.push(item);\n  }\n  return result;\n}`,
    tests: [{ input: [1, "hello", true], expected: "1,HELLO,true" }],
    hints: ["typeof se type check karo", "Har type ke liye alag transformation karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-06",
    title: "For-in se object ke values ko array me convert karo",
    starterCode: `function objectValues(obj) {\n  // TODO: for-in use karke object ke sab values ka array do\n}`,
    solution: `function objectValues(obj) {\n  const values = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) values.push(obj[key]);\n  }\n  return values;\n}`,
    tests: [{ input: [{a:1,b:2,c:3}], expected: "1,2,3" }],
    hints: ["For-in se key milti hai, obj[key] se value nikalo", "hasOwnProperty check mat bhoolna"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-07",
    title: "For-of se entries() use karke index aur value dono lo",
    starterCode: `function withIndex(arr) {\n  // TODO: [{index:0, value:1}, {index:1, value:2}] type ka array banao\n}`,
    solution: `function withIndex(arr) {\n  const result = [];\n  for (const [index, value] of arr.entries()) {\n    result.push({ index, value });\n  }\n  return result;\n}`,
    tests: [{ input: ["a","b","c"], expected: '[{"index":0,"value":"a"},{"index":1,"value":"b"},{"index":2,"value":"c"}]' }],
    hints: ["arr.entries() se [index, value] pairs milte hain", "Destructuring se directly lo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-08",
    title: "For-in se object me property count karo by type",
    starterCode: `function countByType(obj) {\n  // TODO: har type ki kitni properties hain\n  // {a:1, b:"hi", c:true} -> {number:1, string:1, boolean:1}\n}`,
    solution: `function countByType(obj) {\n  const counts = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const type = typeof obj[key];\n    counts[type] = (counts[type] || 0) + 1;\n  }\n  return counts;\n}`,
    tests: [{ input: [{a:1,b:"hi",c:true}], expected: '{"number":1,"string":1,"boolean":1}' }],
    hints: ["typeof se type nikalo", "Counts object me track karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-09",
    title: "For-of se string ke characters count karo",
    starterCode: `function countChars(str) {\n  // TODO: string me har character ki frequency nikalo\n}`,
    solution: `function countChars(str) {\n  const freq = {};\n  for (const char of str) {\n    freq[char] = (freq[char] || 0) + 1;\n  }\n  return freq;\n}`,
    tests: [{ input: ["hello"], expected: '{"h":1,"e":1,"l":2,"o":1}' }],
    hints: ["For-of se har character iterate karo", "Object me count track karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-10",
    title: "For-in se object ko Map me convert karo",
    starterCode: `function toMap(obj) {\n  // TODO: object ko Map me convert karo using for-in\n}`,
    solution: `function toMap(obj) {\n  const map = new Map();\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      map.set(key, obj[key]);\n    }\n  }\n  return map;\n}`,
    tests: [{ input: [{a:1,b:2}], expected: "a,1,b,2" }],
    hints: ["Map constructor empty banao", "For-in se iterate karo aur set() se add karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-11",
    title: "For-of se array ke unique values nikalo",
    starterCode: `function uniqueValues(arr) {\n  // TODO: for-of use karke unique values ka set banao\n}`,
    solution: `function uniqueValues(arr) {\n  const seen = new Set();\n  for (const item of arr) {\n    seen.add(item);\n  }\n  return [...seen];\n}`,
    tests: [{ input: [1,2,2,3,3,3], expected: "1,2,3" }],
    hints: ["Set automatically duplicates remove karta hai", "Spread se wapas array me convert karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-12",
    title: "For-in se object ke nested values flatten karo",
    starterCode: `function flattenValues(obj) {\n  // TODO: nested object ke sab primitive values ka array do\n  // {a:1,b:{c:2,d:3}} -> [1,2,3]\n}`,
    solution: `function flattenValues(obj) {\n  const result = [];\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {\n      result.push(...flattenValues(obj[key]));\n    } else {\n      result.push(obj[key]);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:{c:2}}], expected: "1,2" }],
    hints: ["Recursion se nested objects explore karo", "Primitive value mila toh result me add karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-13",
    title: "For-of se array ke pairs banao",
    starterCode: `function pairs(arr) {\n  // TODO: [1,2,3,4] -> [[1,2],[3,4]]\n}`,
    solution: `function pairs(arr) {\n  const result = [];\n  for (let i = 0; i < arr.length; i += 2) {\n    result.push([arr[i], arr[i + 1]]);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4]], expected: "1,2,3,4" }],
    hints: ["Loop me i ko 2 se badhao", "Har pair ko array me push karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-14",
    title: "For-in se object ke keys ko sorted array me do",
    starterCode: `function sortedKeys(obj) {\n  // TODO: object ke keys sorted order me return karo\n}`,
    solution: `function sortedKeys(obj) {\n  const keys = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) keys.push(key);\n  }\n  return keys.sort();\n}`,
    tests: [{ input: [{c:3,a:1,b:2}], expected: "a,b,c" }],
    hints: ["For-in se keys nikalo", "Array.sort() se sort karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-15",
    title: "For-of se string ke words reverse karo",
    starterCode: `function reverseWords(str) {\n  // TODO: for-of use karke words ko reverse karo\n}`,
    solution: `function reverseWords(str) {\n  return str.split(" ").reverse().join(" ");\n}`,
    tests: [{ input: ["hello world"], expected: "world hello" }],
    hints: ["Split se words array banao", "Reverse karo aur join karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-16",
    title: "For-in se object ko JSON-like string me convert karo",
    starterCode: `function customStringify(obj) {\n  // TODO: manually object ko string me convert karo without JSON.stringify\n}`,
    solution: `function customStringify(obj) {\n  const parts = [];\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const value = typeof obj[key] === "string" ? \`"\${obj[key]}"\` : obj[key];\n    parts.push(\`"\${key}":\${value}\`);\n  }\n  return \`{\${parts.join(",")}}\`;\n}`,
    tests: [{ input: [{a:1,b:"hi"}], expected: '{"a":1,"b":"hi"}' }],
    hints: ["String values ko quotes me wrap karo", "Comma se parts join karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-17",
    title: "For-of se array ke elements ko chunks me divide karo",
    starterCode: `function chunk(arr, size) {\n  // TODO: array ko equal size ke chunks me todo\n}`,
    solution: `function chunk(arr, size) {\n  const result = [];\n  for (let i = 0; i < arr.length; i += size) {\n    result.push(arr.slice(i, i + size));\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5], 2], expected: "1,2,3,4,5" }],
    hints: ["For loop use karo with step size", "Slice se chunk nikalo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-18",
    title: "For-in se object me property existence check karo",
    starterCode: `function hasAllKeys(obj, keys) {\n  // TODO: obj me sab keys hain ya nahi check karo\n}`,
    solution: `function hasAllKeys(obj, keys) {\n  for (const key of keys) {\n    if (!(key in obj)) return false;\n  }\n  return true;\n}`,
    tests: [{ input: [{a:1,b:2}, ["a","b"]], expected: "true" }],
    hints: ["For-of se keys iterate karo", "In operator se existence check karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-19",
    title: "For-of se array me element count karo by category",
    starterCode: `function countCategories(arr, categorize) {\n  // TODO: function se category nikalo aur count karo\n}`,
    solution: `function countCategories(arr, categorize) {\n  const counts = {};\n  for (const item of arr) {\n    const cat = categorize(item);\n    counts[cat] = (counts[cat] || 0) + 1;\n  }\n  return counts;\n}`,
    tests: [{ input: [[1,2,3,4], n => n % 2 === 0 ? "even" : "odd"], expected: '{"odd":2,"even":2}' }],
    hints: ["Categorize function se key nikalo", "Count object me track karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-20",
    title: "For-in se object ke values filter karo",
    starterCode: `function filterObject(obj, predicate) {\n  // TODO: predicate ke hisaab se values filter karo\n}`,
    solution: `function filterObject(obj, predicate) {\n  const result = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    if (predicate(obj[key], key)) result[key] = obj[key];\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:2,c:3}, v => v > 1], expected: '{"b":2,"c":3}' }],
    hints: ["For-in se iterate karo", "Predicate true ho toh result me add karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-21",
    title: "For-of se array ke sum aur average nikalo",
    starterCode: `function sumAndAvg(arr) {\n  // TODO: sum aur average return karo object me\n}`,
    solution: `function sumAndAvg(arr) {\n  let sum = 0;\n  for (const num of arr) sum += num;\n  return { sum, average: arr.length ? sum / arr.length : 0 };\n}`,
    tests: [{ input: [[1,2,3,4]], expected: '{"sum":10,"average":2.5}' }],
    hints: ["For-me sum karo", "Length se divide karo average ke liye"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-22",
    title: "For-in se object ko query string me convert karo",
    starterCode: `function toQueryString(obj) {\n  // TODO: {a:1,b:2} -> "a=1&b=2"\n}`,
    solution: `function toQueryString(obj) {\n  const parts = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      parts.push(\`\${key}=\${obj[key]}\`);\n    }\n  }\n  return parts.join("&");\n}`,
    tests: [{ input: [{a:1,b:2}], expected: "a=1&b=2" }],
    hints: ["Key=value format me parts banao", "Ampersand se join karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-23",
    title: "For-of se array ke matrix banao from flat array",
    starterCode: `function toMatrix(arr, rowSize) {\n  // TODO: flat array ko matrix me convert karo\n  // [1,2,3,4,5,6], 2 -> [[1,2],[3,4],[5,6]]\n}`,
    solution: `function toMatrix(arr, rowSize) {\n  const result = [];\n  for (let i = 0; i < arr.length; i += rowSize) {\n    result.push(arr.slice(i, i + rowSize));\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5,6], 2], expected: "1,2,3,4,5,6" }],
    hints: ["Loop me i ko rowSize se badhao", "Slice se row nikalo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-24",
    title: "For-in se object ke keys values pairs banao",
    starterCode: `function entries(obj) {\n  // TODO: [{key:"a", value:1}, {key:"b", value:2}]\n}`,
    solution: `function entries(obj) {\n  const result = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      result.push({ key, value: obj[key] });\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:2}], expected: '[{"key":"a","value":1},{"key":"b","value":2}]' }],
    hints: ["For-in se key milti hai", "Value obj[key] se nikalo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-25",
    title: "For-of se string ke capital letters count karo",
    starterCode: `function countCapitals(str) {\n  // TODO: string me kitne capital letters hain\n}`,
    solution: `function countCapitals(str) {\n  let count = 0;\n  for (const char of str) {\n    if (char >= "A" && char <= "Z") count++;\n  }\n  return count;\n}`,
    tests: [{ input: ["Hello World"], expected: 2 }],
    hints: ["Char comparison se capital check karo: >= 'A' && <= 'Z'", "Count badhao milne pe"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-26",
    title: "For-in se object ka deep clone banao",
    starterCode: `function deepClone(obj) {\n  // TODO: manually deep clone karo without JSON methods\n}`,
    solution: `function deepClone(obj) {\n  if (typeof obj !== "object" || obj === null) return obj;\n  const clone = Array.isArray(obj) ? [] : {};\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      clone[key] = deepClone(obj[key]);\n    }\n  }\n  return clone;\n}`,
    tests: [{ input: [{a:{b:1}}], expected: '{"a":{"b":1}}' }],
    hints: ["Recursion use karo nested values ke liye", "Array.isArray se array/object differentiate karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-27",
    title: "For-of se array ke zip karo",
    starterCode: `function zip(arr1, arr2) {\n  // TODO: [[1,"a"],[2,"b"],[3,"c"]] type me zip karo\n}`,
    solution: `function zip(arr1, arr2) {\n  const result = [];\n  const len = Math.min(arr1.length, arr2.length);\n  for (let i = 0; i < len; i++) {\n    result.push([arr1[i], arr2[i]]);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3], ["a","b","c"]], expected: '[[1,"a"],[2,"b"],[3,"c"]]' }],
    hints: ["Min length tak loop chalao", "Har index pe dono arrays ke elements pair karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-28",
    title: "For-in se object ke values ko string me join karo",
    starterCode: `function joinValues(obj, separator) {\n  // TODO: object ke sab values ko separator se join karo\n}`,
    solution: `function joinValues(obj, separator) {\n  const values = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) values.push(obj[key]);\n  }\n  return values.join(separator);\n}`,
    tests: [{ input: [{a:1,b:2,c:3}, "-"], expected: "1-2-3" }],
    hints: ["Values ka array banao", "Join se string banao"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-29",
    title: "For-of se array ke differences nikalo",
    starterCode: `function differences(arr) {\n  // TODO: consecutive elements ke differences do\n  // [1,3,6,10] -> [2,3,4]\n}`,
    solution: `function differences(arr) {\n  const result = [];\n  for (let i = 1; i < arr.length; i++) {\n    result.push(arr[i] - arr[i-1]);\n  }\n  return result;\n}`,
    tests: [{ input: [1,3,6,10], expected: "2,3,4" }],
    hints: ["Loop 1 se shuru karo", "arr[i] - arr[i-1] se difference nikalo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-30",
    title: "For-in se object ko reverse karo",
    starterCode: `function reverseObject(obj) {\n  // TODO: keys aur values swap karo\n  // {a:1,b:2} -> {1:"a",2:"b"}\n}`,
    solution: `function reverseObject(obj) {\n  const result = {};\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      result[obj[key]] = key;\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:2}], expected: '{"1":"a","2":"b"}' }],
    hints: ["Values ko keys banao aur keys ko values", "HasOwnProperty check mat bhoolna"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-31",
    title: "For-of se array ke running sum nikalo",
    starterCode: `function runningSum(arr) {\n  // TODO: [1,2,3,4] -> [1,3,6,10]\n}`,
    solution: `function runningSum(arr) {\n  const result = [];\n  let sum = 0;\n  for (const num of arr) {\n    sum += num;\n    result.push(sum);\n  }\n  return result;\n}`,
    tests: [{ input: [1,2,3,4], expected: "1,3,6,10" }],
    hints: ["Running sum maintain karo", "Har step pe sum add karo aur result me push karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-32",
    title: "For-in se object ke keys ko kebab-case me convert karo",
    starterCode: `function kebabKeys(obj) {\n  // TODO: keys ko kebab-case me convert karo\n  // {firstName:"John"} -> {"first-name":"John"}\n}`,
    solution: `function kebabKeys(obj) {\n  const result = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const kebab = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();\n    result[kebab] = obj[key];\n  }\n  return result;\n}`,
    tests: [{ input: [{firstName:"John"}], expected: '{"first-name":"John"}' }],
    hints: ["CamelCase ke gaps me dash dalo", "Regex se pattern match karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-33",
    title: "For-of se array ke chunks ka average nikalo",
    starterCode: `function chunkAverage(arr, size) {\n  // TODO: array ke chunks ka average nikalo\n}`,
    solution: `function chunkAverage(arr, size) {\n  const result = [];\n  for (let i = 0; i < arr.length; i += size) {\n    const chunk = arr.slice(i, i + size);\n    result.push(chunk.reduce((a, b) => a + b, 0) / chunk.length);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5,6], 2], expected: "1.5,3.5,5.5" }],
    hints: ["Chunk nikalo aur uska sum/length nikalo", "Reduce se sum karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-34",
    title: "For-in se object ke nested properties access karo",
    starterCode: `function getNestedValue(obj, path) {\n  // TODO: "a.b.c" path se value nikalo using for-in\n}`,
    solution: `function getNestedValue(obj, path) {\n  const keys = path.split(".");\n  let current = obj;\n  for (const key of keys) {\n    if (current === null || current === undefined) return undefined;\n    current = current[key];\n  }\n  return current;\n}`,
    tests: [{ input: [{a:{b:{c:42}}}, "a.b.c"], expected: 42 }],
    hints: ["Path ko dot se split karo", "For-of se iterate karo aur value follow karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-35",
    title: "For-of se array ke group banao size ke hisaab se",
    starterCode: `function groupInGroups(arr, size) {\n  // TODO: [[1,2],[3,4],[5]] type me groups banao\n}`,
    solution: `function groupInGroups(arr, size) {\n  const result = [];\n  let group = [];\n  for (const item of arr) {\n    group.push(item);\n    if (group.length === size) {\n      result.push(group);\n      group = [];\n    }\n  }\n  if (group.length) result.push(group);\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5], 2], expected: "1,2,3,4,5" }],
    hints: ["Temporary group collect karo", "Size barabar hone pe result me push karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-36",
    title: "For-in se object ka subset banao given keys se",
    starterCode: `function pick(obj, keys) {\n  // TODO: sirf specified keys ka naya object banao\n}`,
    solution: `function pick(obj, keys) {\n  const result = {};\n  for (const key of keys) {\n    if (key in obj) result[key] = obj[key];\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:2,c:3}, ["a","c"]], expected: '{"a":1,"c":3}' }],
    hints: ["For-of se keys iterate karo", "Key exist karti hai toh result me dalo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-37",
    title: "For-of se array ke max subarray sum nikalo",
    starterCode: `function maxSubarraySum(arr) {\n  // TODO: Kadane's algorithm use karo\n}`,
    solution: `function maxSubarraySum(arr) {\n  let maxSum = arr[0];\n  let currentSum = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    currentSum = Math.max(arr[i], currentSum + arr[i]);\n    maxSum = Math.max(maxSum, currentSum);\n  }\n  return maxSum;\n}`,
    tests: [{ input: [-2,1,-3,4,-1,2,1,-5,4], expected: 6 }],
    hints: ["Kadane's algorithm use karo", "Current sum ko reset ya continue karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-38",
    title: "For-in se object ke types count karo",
    starterCode: `function typeCounts(obj) {\n  // TODO: har type ki kitni properties hain\n  // {a:1,b:"hi",c:null} -> {number:1, string:1, object:1}\n}`,
    solution: `function typeCounts(obj) {\n  const counts = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const type = obj[key] === null ? "null" : typeof obj[key];\n    counts[type] = (counts[type] || 0) + 1;\n  }\n  return counts;\n}`,
    tests: [{ input: [{a:1,b:"hi",c:null}], expected: '{"number":1,"string":1,"null":1}' }],
    hints: ["typeof null === 'object' hota hai — special case handle karo", "Counts object me track karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-39",
    title: "For-of se array ke elements ko string me join karo conditionally",
    starterCode: `function joinTruthy(arr) {\n  // TODO: sirf truthy values ko string me join karo space se\n}`,
    solution: `function joinTruthy(arr) {\n  const result = [];\n  for (const item of arr) {\n    if (item) result.push(String(item));\n  }\n  return result.join(" ");\n}`,
    tests: [{ input: ["hello", null, "world", 0, "foo"], expected: "hello world foo" }],
    hints: ["Truthy check karo", "String me convert karke array me push karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-40",
    title: "For-in se object ke flat key-value pairs banao",
    starterCode: `function flattenObj(obj) {\n  // TODO: {a:{b:1}} -> {"a.b":1}\n}`,
    solution: `function flattenObj(obj, prefix = "") {\n  const result = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const newKey = prefix ? prefix + "." + key : key;\n    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {\n      Object.assign(result, flattenObj(obj[key], newKey));\n    } else {\n      result[newKey] = obj[key];\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [{a:{b:1,c:2}}], expected: '{"a.b":1,"a.c":2}' }],
    hints: ["Prefix add karo nested keys me", "Recursion se nested objects flatten karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-41",
    title: "For-of se array ke elements ko group by property",
    starterCode: `function groupBy(arr, key) {\n  // TODO: array ke objects ko key ke value se group karo\n}`,
    solution: `function groupBy(arr, key) {\n  const groups = {};\n  for (const item of arr) {\n    const groupKey = item[key];\n    (groups[groupKey] = groups[groupKey] || []).push(item);\n  }\n  return groups;\n}`,
    tests: [{ input: [[{type:"a",v:1},{type:"b",v:2},{type:"a",v:3}], "type"], expected: '{"a":[{"type":"a","v":1},{"type":"a","v":3}],"b":[{"type":"b","v":2}]}' }],
    hints: ["Item ke property se key nikalo", "Groups me push karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-42",
    title: "For-in se object ke keys ko camelCase se snake_case me convert karo",
    starterCode: `function snakeKeys(obj) {\n  // TODO: keys ko snake_case me convert karo\n  // {firstName:"John"} -> {first_name:"John"}\n}`,
    solution: `function snakeKeys(obj) {\n  const result = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const snake = key.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();\n    result[snake] = obj[key];\n  }\n  return result;\n}`,
    tests: [{ input: [{firstName:"John"}], expected: '{"first_name":"John"}' }],
    hints: ["CamelCase ke gaps me underscore dalo", "Regex se pattern match karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-43",
    title: "For-of se array ke intersection nikalo do arrays ka",
    starterCode: `function intersection(arr1, arr2) {\n  // TODO: dono arrays ke common elements do\n}`,
    solution: `function intersection(arr1, arr2) {\n  const set2 = new Set(arr2);\n  const result = [];\n  for (const item of arr1) {\n    if (set2.has(item)) result.push(item);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4], [3,4,5,6]], expected: "3,4" }],
    hints: ["Ek array ko Set me convert karo O(1) lookup ke liye", "Dusre array ke elements check karo Set me"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-44",
    title: "For-in se object ke values ko sorted array me do",
    starterCode: `function sortedValues(obj) {\n  // TODO: object ke values sorted array me return karo\n}`,
    solution: `function sortedValues(obj) {\n  const values = [];\n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) values.push(obj[key]);\n  }\n  return values.sort((a, b) => a - b);\n}`,
    tests: [{ input: [{c:3,a:1,b:2}], expected: "1,2,3" }],
    hints: ["Values ka array banao", "Number sort ke liye comparator use karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-45",
    title: "For-of se array ke elements ko Promise me wrap karo",
    starterCode: `async function wrapPromises(arr) {\n  // TODO: har element ko Promise.resolve me wrap karo\n}`,
    solution: `async function wrapPromises(arr) {\n  const promises = [];\n  for (const item of arr) {\n    promises.push(Promise.resolve(item));\n  }\n  return Promise.all(promises);\n}`,
    tests: [{ input: [[1,2,3]], expected: "1,2,3" }],
    hints: ["Promise.resolve se wrap karo", "Promise.all se sab resolve karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-46",
    title: "For-in se object ke keys ko capitalize karo",
    starterCode: `function capitalizeKeys(obj) {\n  // TODO: keys ke pehle letter ko capitalize karo\n  // {name:"John"} -> {Name:"John"}\n}`,
    solution: `function capitalizeKeys(obj) {\n  const result = {};\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const newKey = key.charAt(0).toUpperCase() + key.slice(1);\n    result[newKey] = obj[key];\n  }\n  return result;\n}`,
    tests: [{ input: [{name:"John"}], expected: '{"Name":"John"}' }],
    hints: ["charAt(0).toUpperCase() se pehla letter capitalize karo", "Slice se baaki string lo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-47",
    title: "For-of se array ke unique consecutive pairs banao",
    starterCode: `function consecutivePairs(arr) {\n  // TODO: [1,2,3,4] -> [[1,2],[2,3],[3,4]]\n}`,
    solution: `function consecutivePairs(arr) {\n  const result = [];\n  for (let i = 0; i < arr.length - 1; i++) {\n    result.push([arr[i], arr[i + 1]]);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4]], expected: "1,2,2,3,3,4" }],
    hints: ["Loop me i aur i+1 ke pairs banao", "Length - 1 tak chalao"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-48",
    title: "For-in se object ke values ko default se replace karo",
    starterCode: `function withDefaults(obj, defaults) {\n  // TODO: null/undefined values ko defaults se replace karo\n}`,
    solution: `function withDefaults(obj, defaults) {\n  const result = { ...obj };\n  for (const key in defaults) {\n    if (!Object.prototype.hasOwnProperty.call(defaults, key)) continue;\n    if (result[key] === null || result[key] === undefined) {\n      result[key] = defaults[key];\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:null}, {b:2,c:3}], expected: '{"a":1,"b":2,"c":3}' }],
    hints: ["For-in se defaults iterate karo", "Null/undefined check karke replace karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-49",
    title: "For-of se array ke element frequency map banao",
    starterCode: `function frequencyMap(arr) {\n  // TODO: har element ki frequency count karo\n}`,
    solution: `function frequencyMap(arr) {\n  const freq = new Map();\n  for (const item of arr) {\n    freq.set(item, (freq.get(item) || 0) + 1);\n  }\n  return Object.fromEntries(freq);\n}`,
    tests: [{ input: ["a","b","a","c","b","a"], expected: '{"a":3,"b":2,"c":1}' }],
    hints: ["Map use karo frequency track karne ke liye", "Object.fromEntries se object me convert karo"]
  });

  exercises.push({
    id: "05-02-for-of-for-in-50",
    title: "For-in se object ke sab keys/values pairs ko flatten karo",
    starterCode: `function flattenEntries(obj) {\n  // TODO: {a:1,b:{c:2}} -> [["a",1],["b.c",2]]\n}`,
    solution: `function flattenEntries(obj, prefix = "") {\n  const result = [];\n  for (const key in obj) {\n    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;\n    const fullKey = prefix ? prefix + "." + key : key;\n    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {\n      result.push(...flattenEntries(obj[key], fullKey));\n    } else {\n      result.push([fullKey, obj[key]]);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [{a:1,b:{c:2}}], expected: '[["a",1],["b.c",2]]' }],
    hints: ["Prefix use karo nested keys ke liye", "Primitive value milne pe entry add karo"]
  });

  return exercises;
}

function generatePatternsPractice() {
  const exercises = [];

  exercises.push({
    id: "05-03-patterns-practice-01",
    title: "Nested loop se multiplication matrix banao",
    starterCode: `function multiplicationMatrix(n) {\n  // TODO: n x n multiplication table matrix banao\n}`,
    solution: `function multiplicationMatrix(n) {\n  const matrix = [];\n  for (let i = 1; i <= n; i++) {\n    const row = [];\n    for (let j = 1; j <= n; j++) row.push(i * j);\n    matrix.push(row);\n  }\n  return matrix;\n}`,
    tests: [{ input: [3], expected: "1,2,3,2,4,6,3,6,9" }],
    hints: ["Outer loop rows ke liye, inner loop columns ke liye", "i * j se value nikalo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-02",
    title: "Array se duplicates remove karo preserving order",
    starterCode: `function removeDuplicates(arr) {\n  // TODO: duplicates hatao par order maintain karo\n}`,
    solution: `function removeDuplicates(arr) {\n  const seen = new Set();\n  const result = [];\n  for (const item of arr) {\n    if (!seen.has(item)) {\n      seen.add(item);\n      result.push(item);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [3,1,2,1,3,4], expected: "3,1,2,4" }],
    hints: ["Set use karo seen elements track karne ke liye", "Pehli baar milne pe hi add karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-03",
    title: "2D array me specific value search karo",
    starterCode: `function search2D(matrix, target) {\n  // TODO: 2D array me target ki position dhundho\n}`,
    solution: `function search2D(matrix, target) {\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === target) return { row: i, col: j };\n    }\n  }\n  return null;\n}`,
    tests: [{ input: [[[1,2],[3,4]], 3], expected: '{"row":1,"col":0}' }],
    hints: ["Nested loop se traverse karo", "Milte hi position return karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-04",
    title: "Array ko rotate karo k positions",
    starterCode: `function rotate(arr, k) {\n  // TODO: array ko k positions right rotate karo\n}`,
    solution: `function rotate(arr, k) {\n  const n = arr.length;\n  k = k % n;\n  return [...arr.slice(n - k), ...arr.slice(0, n - k)];\n}`,
    tests: [{ input: [[1,2,3,4,5], 2], expected: "4,5,1,2,3" }],
    hints: ["Modulo se actual rotation nikalo", "Slice aur spread se rotate karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-05",
    title: "Nested loop se matrix me boundary elements nikalo",
    starterCode: `function boundaryElements(matrix) {\n  // TODO: matrix ke boundary elements ka array do\n}`,
    solution: `function boundaryElements(matrix) {\n  if (!matrix.length) return [];\n  const result = [];\n  const rows = matrix.length, cols = matrix[0].length;\n  for (let i = 0; i < rows; i++) {\n    for (let j = 0; j < cols; j++) {\n      if (i === 0 || i === rows-1 || j === 0 || j === cols-1) {\n        result.push(matrix[i][j]);\n      }\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: "1,2,3,4,6,7,8,9" }],
    hints: ["First/last row ya first/last column pe boundary hai", "Condition check karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-06",
    title: "Array ke second largest element dhundho",
    starterCode: `function secondLargest(arr) {\n  // TODO: array ka second largest element do\n}`,
    solution: `function secondLargest(arr) {\n  let first = -Infinity, second = -Infinity;\n  for (const num of arr) {\n    if (num > first) {\n      second = first;\n      first = num;\n    } else if (num > second && num !== first) {\n      second = num;\n    }\n  }\n  return second === -Infinity ? undefined : second;\n}`,
    tests: [{ input: [5,3,8,1,9], expected: 8 }],
    hints: ["Do variables track karo: first aur second", "Har element ko dono se compare karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-07",
    title: "Nested loop se matrix multiply karo",
    starterCode: `function multiply(A, B) {\n  // TODO: do matrices ka product nikalo\n}`,
    solution: `function multiply(A, B) {\n  const rowsA = A.length, colsA = A[0].length, colsB = B[0].length;\n  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));\n  for (let i = 0; i < rowsA; i++) {\n    for (let j = 0; j < colsB; j++) {\n      for (let k = 0; k < colsA; k++) {\n        result[i][j] += A[i][k] * B[k][j];\n      }\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[[1,2],[3,4]], [[5,6],[7,8]]], expected: "19,22,43,50" }],
    hints: ["Triple nested loop use karo", "Formula: result[i][j] += A[i][k] * B[k][j]"]
  });

  exercises.push({
    id: "05-03-patterns-practice-08",
    title: "Array ke peaks dhundho",
    starterCode: `function findPeaks(arr) {\n  // TODO: local maxima dhundho — jo apne dono neighbors se bada ho\n}`,
    solution: `function findPeaks(arr) {\n  const peaks = [];\n  for (let i = 1; i < arr.length - 1; i++) {\n    if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) peaks.push(i);\n  }\n  return peaks;\n}`,
    tests: [{ input: [1,3,2,4,1,5,3], expected: "1,3,5" }],
    hints: ["Middle elements check karo (first aur last nahi)", "Dono neighbors se bada hai toh peak hai"]
  });

  exercises.push({
    id: "05-03-patterns-practice-09",
    title: "2D array ko 1D array me flatten karo",
    starterCode: `function flatten2D(arr) {\n  // TODO: [[1,2],[3,4],[5]] -> [1,2,3,4,5]\n}`,
    solution: `function flatten2D(arr) {\n  const result = [];\n  for (const row of arr) {\n    for (const item of row) result.push(item);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2],[3,4]], expected: "1,2,3,4" }],
    hints: ["Nested loop se traverse karo", "Har element ko result me push karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-10",
    title: "Array me leaders dhundho",
    starterCode: `function findLeaders(arr) {\n  // TODO: wo elements jo apne baad ke sab se bade hain\n  // [16,17,4,3,5,2] -> [17,5,2]\n}`,
    solution: `function findLeaders(arr) {\n  const leaders = [arr[arr.length - 1]];\n  let maxFromRight = arr[arr.length - 1];\n  for (let i = arr.length - 2; i >= 0; i--) {\n    if (arr[i] > maxFromRight) {\n      maxFromRight = arr[i];\n      leaders.unshift(arr[i]);\n    }\n  }\n  return leaders;\n}`,
    tests: [{ input: [16,17,4,3,5,2], expected: "17,5,2" }],
    hints: ["Right se left traverse karo", "Max se bada hai toh leader hai"]
  });

  exercises.push({
    id: "05-03-patterns-practice-11",
    title: "Nested loop se Pascal triangle banao",
    starterCode: `function pascalTriangle(n) {\n  // TODO: n rows ka Pascal triangle\n}`,
    solution: `function pascalTriangle(n) {\n  const triangle = [];\n  for (let i = 0; i < n; i++) {\n    const row = [1];\n    for (let j = 1; j < i; j++) {\n      row.push(triangle[i-1][j-1] + triangle[i-1][j]);\n    }\n    if (i > 0) row.push(1);\n    triangle.push(row);\n  }\n  return triangle;\n}`,
    tests: [{ input: [5], expected: "1,1,1,1,2,1,1,3,3,1,1,4,6,4,1" }],
    hints: ["Har row ka pehla aur aakhri element 1 hota hai", "Beech ke elements = upar ke do ka sum"]
  });

  exercises.push({
    id: "05-03-patterns-practice-12",
    title: "Array ke indices dhundho jinka sum target ho",
    starterCode: `function twoSum(arr, target) {\n  // TODO: do indices dhundho jinka sum target ho\n}`,
    solution: `function twoSum(arr, target) {\n  const map = new Map();\n  for (let i = 0; i < arr.length; i++) {\n    const complement = target - arr[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(arr[i], i);\n  }\n  return null;\n}`,
    tests: [{ input: [[2,7,11,15], 9], expected: "0,1" }],
    hints: ["Map use karo complements track karne ke liye", "Complement milta hai toh dono indices return karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-13",
    title: "Array ke subarrays ka sum nikalo",
    starterCode: `function subarraySums(arr) {\n  // TODO: sab possible subarrays ka sum do\n  // [1,2,3] -> [1,3,6,2,5,3]\n}`,
    solution: `function subarraySums(arr) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    let sum = 0;\n    for (let j = i; j < arr.length; j++) {\n      sum += arr[j];\n      result.push(sum);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3]], expected: "1,3,6,2,5,3" }],
    hints: ["Outer loop start ke liye", "Inner loop extend karte jao aur sum maintain karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-14",
    title: "2D array me diagonal elements nikalo",
    starterCode: `function diagonals(matrix) {\n  // TODO: primary aur secondary diagonals do\n}`,
    solution: `function diagonals(matrix) {\n  const primary = [], secondary = [];\n  const n = matrix.length;\n  for (let i = 0; i < n; i++) {\n    primary.push(matrix[i][i]);\n    secondary.push(matrix[i][n - 1 - i]);\n  }\n  return { primary, secondary };\n}`,
    tests: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: '{"primary":[1,5,9],"secondary":[3,5,7]}' }],
    hints: ["Primary: matrix[i][i]", "Secondary: matrix[i][n-1-i]"]
  });

  exercises.push({
    id: "05-03-patterns-practice-15",
    title: "Array ko sort without built-in sort",
    starterCode: `function selectionSort(arr) {\n  // TODO: selection sort implement karo\n}`,
    solution: `function selectionSort(arr) {\n  const result = [...arr];\n  for (let i = 0; i < result.length; i++) {\n    let minIdx = i;\n    for (let j = i + 1; j < result.length; j++) {\n      if (result[j] < result[minIdx]) minIdx = j;\n    }\n    [result[i], result[minIdx]] = [result[minIdx], result[i]];\n  }\n  return result;\n}`,
    tests: [{ input: [5,3,1,4,2], expected: "1,2,3,4,5" }],
    hints: ["Har position pe minimum dhundho", "Swap karo current position se"]
  });

  exercises.push({
    id: "05-03-patterns-practice-16",
    title: "Nested loop se array ke all permutations generate karo",
    starterCode: `function permutations(arr) {\n  // TODO: array ke sab permutations do\n}`,
    solution: `function permutations(arr) {\n  if (arr.length <= 1) return [arr];\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];\n    const perms = permutations(rest);\n    for (const perm of perms) {\n      result.push([arr[i], ...perm]);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3]], expected: "6 permutations" }],
    hints: ["Recursion use karo", "Har element ko first banao aur baaki ka permutations nikalo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-17",
    title: "Array ke gaps dhundho",
    starterCode: `function findGaps(arr) {\n  // TODO: sorted array me missing ranges dhundho\n  // [1,2,4,5,7] -> [[3,3],[6,6]]\n}`,
    solution: `function findGaps(arr) {\n  const gaps = [];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] - arr[i-1] > 1) {\n      gaps.push([arr[i-1] + 1, arr[i] - 1]);\n    }\n  }\n  return gaps;\n}`,
    tests: [{ input: [1,2,4,5,7], expected: "[[3,3],[6,6]]" }],
    hints: ["Consecutive elements ke beech gap check karo", "Gap hai toh range push karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-18",
    title: "Array ke elements ko spiral order me traverse karo",
    starterCode: `function spiral(matrix) {\n  // TODO: matrix ko spiral order me flat array me convert karo\n}`,
    solution: `function spiral(matrix) {\n  if (!matrix.length) return [];\n  const result = [];\n  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;\n  while (top <= bottom && left <= right) {\n    for (let i = left; i <= right; i++) result.push(matrix[top][i]);\n    top++;\n    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);\n    right--;\n    if (top <= bottom) { for (let i = right; i >= left; i--) result.push(matrix[bottom][i]); bottom--; }\n    if (left <= right) { for (let i = bottom; i >= top; i--) result.push(matrix[i][left]); left++; }\n  }\n  return result;\n}`,
    tests: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: "1,2,3,6,9,8,7,4,5" }],
    hints: ["4 boundaries use karo", "Har direction me traverse karo aur boundary update karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-19",
    title: "Array me missing ranges nikalo 1 se n tak",
    starterCode: `function missingRanges(arr, n) {\n  // TODO: 1 se n tak jo numbers array me nahi hain wo ranges me do\n}`,
    solution: `function missingRanges(arr, n) {\n  const set = new Set(arr);\n  const ranges = [];\n  let start = 1;\n  for (let i = 1; i <= n; i++) {\n    if (!set.has(i)) {\n      if (start === i) {\n        let end = i;\n        while (end <= n && !set.has(end + 1)) end++;\n        ranges.push([start, end]);\n        start = end + 1;\n        i = end;\n      }\n    } else {\n      start = i + 1;\n    }\n  }\n  return ranges;\n}`,
    tests: [{ input: [[1,3], 5], expected: "[[2,2],[4,5]]" }],
    hints: ["Set se O(1) lookup karo", "Missing range dhundho aur group karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-20",
    title: "Array ke element frequency se sorted array banao",
    starterCode: `function frequencySort(arr) {\n  // TODO: frequency ke hisaab se sort karo — zyada frequency pehle\n}`,
    solution: `function frequencySort(arr) {\n  const freq = {};\n  for (const num of arr) freq[num] = (freq[num] || 0) + 1;\n  return [...arr].sort((a, b) => freq[b] - freq[a] || a - b);\n}`,
    tests: [{ input: [1,1,2,2,2,3], expected: "2,2,2,1,1,3" }],
    hints: ["Frequency map banao", "Comparator me frequency dekho, tie pe value dekho"]
  });

  exercises.push({
    id: "05-03-patterns-practice-21",
    title: "Nested loop se array ke triplets dhundho jinka sum zero ho",
    starterCode: `function threeSum(arr) {\n  // TODO: sab triplets dhundho jinka sum 0 ho\n}`,
    solution: `function threeSum(arr) {\n  const result = [];\n  const sorted = [...arr].sort((a, b) => a - b);\n  for (let i = 0; i < sorted.length - 2; i++) {\n    if (i > 0 && sorted[i] === sorted[i-1]) continue;\n    let left = i + 1, right = sorted.length - 1;\n    while (left < right) {\n      const sum = sorted[i] + sorted[left] + sorted[right];\n      if (sum === 0) {\n        result.push([sorted[i], sorted[left], sorted[right]]);\n        while (left < right && sorted[left] === sorted[left+1]) left++;\n        while (left < right && sorted[right] === sorted[right-1]) right--;\n        left++; right--;\n      } else if (sum < 0) left++;\n      else right--;\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[-1,0,1,2,-1,-4]], expected: "[[-1,-1,2],[-1,0,1]]" }],
    hints: ["Array sort karo pehle", "Ek element fix karo aur two pointers use karo baaki ke liye"]
  });

  exercises.push({
    id: "05-03-patterns-practice-22",
    title: "2D array me island count karo",
    starterCode: `function countIslands(grid) {\n  // TODO: 1s ke connected components count karo (islands)\n  // 0 1 1 0\n  // 0 1 1 0\n  // 0 0 0 1 -> 2 islands\n}`,
    solution: `function countIslands(grid) {\n  if (!grid.length) return 0;\n  let count = 0;\n  for (let i = 0; i < grid.length; i++) {\n    for (let j = 0; j < grid[i].length; j++) {\n      if (grid[i][j] === 1) {\n        count++;\n        markVisited(grid, i, j);\n      }\n    }\n  }\n  return count;\n}\nfunction markVisited(grid, i, j) {\n  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return;\n  grid[i][j] = 0;\n  markVisited(grid, i+1, j);\n  markVisited(grid, i-1, j);\n  markVisited(grid, i, j+1);\n  markVisited(grid, i, j-1);\n}`,
    tests: [{ input: [[[1,1,0],[0,1,0],[0,0,1]]], expected: 2 }],
    hints: ["1 milta hai toh count badhao aur visited mark karo", "DFS/BFS se connected 1s mark karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-23",
    title: "Array ke elements ko rotate by one position",
    starterCode: `function rotateByOne(arr) {\n  // TODO: array ko ek position right se rotate karo\n}`,
    solution: `function rotateByOne(arr) {\n  if (arr.length <= 1) return arr;\n  const last = arr[arr.length - 1];\n  for (let i = arr.length - 1; i > 0; i--) {\n    arr[i] = arr[i - 1];\n  }\n  arr[0] = last;\n  return arr;\n}`,
    tests: [{ input: [[1,2,3,4,5]], expected: "5,1,2,3,4" }],
    hints: ["Last element save karo", "Sab elements ko ek position right shift karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-24",
    title: "Nested loop se array ke all pairs ka product nikalo",
    starterCode: `function pairProducts(arr) {\n  // TODO: sab pairs ka product do\n}`,
    solution: `function pairProducts(arr) {\n  const result = [];\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      result.push(arr[i] * arr[j]);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [1,2,3], expected: "2,3,6" }],
    hints: ["Nested loop se pairs banao", "Product push karo result me"]
  });

  exercises.push({
    id: "05-03-patterns-practice-25",
    title: "Array ko alternating positive negative order me sort karo",
    starterCode: `function alternatingSort(arr) {\n  // TODO: positive-negative-positive-negative...\n  // [1,-2,3,-4,5] already sorted hai\n}`,
    solution: `function alternatingSort(arr) {\n  const result = [];\n  const positives = arr.filter(n => n >= 0).sort((a, b) => a - b);\n  const negatives = arr.filter(n => n < 0).sort((a, b) => b - a);\n  let pi = 0, ni = 0;\n  for (let i = 0; i < arr.length; i++) {\n    if (i % 2 === 0 && pi < positives.length) result.push(positives[pi++]);\n    else if (ni < negatives.length) result.push(negatives[ni++]);\n    else if (pi < positives.length) result.push(positives[pi++]);\n  }\n  return result;\n}`,
    tests: [{ input: [[-5,3,-2,4,-1]], expected: "3,-1,4,-2,5" }],
    hints: ["Positives aur negatives alag karo aur sort karo", "Alternate order me merge karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-26",
    title: "2D array ko rotate 90 degree clockwise karo",
    starterCode: `function rotate90(matrix) {\n  // TODO: matrix ko 90 degree clockwise rotate karo\n}`,
    solution: `function rotate90(matrix) {\n  const n = matrix.length;\n  const result = Array.from({ length: n }, () => Array(n));\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n; j++) {\n      result[j][n - 1 - i] = matrix[i][j];\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[[1,2],[3,4]]], expected: "3,1,4,2" }],
    hints: ["Formula: result[j][n-1-i] = matrix[i][j]", "Transpose fir reverse bhi kar sakte ho"]
  });

  exercises.push({
    id: "05-03-patterns-practice-27",
    title: "Array ke sorted subarrays dhundho",
    starterCode: `function sortedSubarrays(arr) {\n  // TODO: longest sorted (ascending) subarrays dhundho\n}`,
    solution: `function sortedSubarrays(arr) {\n  const result = [];\n  let start = 0;\n  for (let i = 1; i <= arr.length; i++) {\n    if (i === arr.length || arr[i] < arr[i-1]) {\n      result.push(arr.slice(start, i));\n      start = i;\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [1,2,3,1,2], expected: "1,2,3,1,2" }],
    hints: ["Sorted order break hone pe current subarray close karo", "Naya subarray start karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-28",
    title: "Nested loop se array ke majority element dhundho",
    starterCode: `function majorityElement(arr) {\n  // TODO: wo element jo n/2 se zyada baar aaye\n}`,
    solution: `function majorityElement(arr) {\n  const freq = {};\n  for (const num of arr) {\n    freq[num] = (freq[num] || 0) + 1;\n    if (freq[num] > arr.length / 2) return num;\n  }\n  return null;\n}`,
    tests: [{ input: [3,3,4,2,3,3,3], expected: 3 }],
    hints: ["Frequency count karo", "N/2 se zyada milte hi return karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-29",
    title: "Array ke elements ko reverse without extra array",
    starterCode: `function reverseInPlace(arr) {\n  // TODO: array ko in-place reverse karo\n}`,
    solution: `function reverseInPlace(arr) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    [arr[left], arr[right]] = [arr[right], arr[left]];\n    left++;\n    right--;\n  }\n  return arr;\n}`,
    tests: [{ input: [[1,2,3,4,5]], expected: "5,4,3,2,1" }],
    hints: ["Two pointers use karo — start aur end", "Swap karte jao aur dono taraf move karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-30",
    title: "2D array me maximum sum submatrix dhundho",
    starterCode: `function maxSumSubmatrix(matrix) {\n  // TODO: k x k size ka maximum sum submatrix find karo\n}`,
    solution: `function maxSumSubmatrix(matrix, k) {\n  const rows = matrix.length, cols = matrix[0].length;\n  let maxSum = -Infinity;\n  for (let i = 0; i <= rows - k; i++) {\n    for (let j = 0; j <= cols - k; j++) {\n      let sum = 0;\n      for (let r = i; r < i + k; r++) {\n        for (let c = j; c < j + k; c++) sum += matrix[r][c];\n      }\n      maxSum = Math.max(maxSum, sum);\n    }\n  }\n  return maxSum;\n}`,
    tests: [{ input: [[[1,2,3],[4,5,6],[7,8,9]], 2], expected: 28 }],
    hints: ["Sliding window approach use karo", "Har possible position pe sum nikalo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-31",
    title: "Array ke consecutive elements dhundho",
    starterCode: `function longestConsecutive(arr) {\n  // TODO: longest consecutive sequence ki length do\n  // [100,4,200,1,3,2] -> 4 (1,2,3,4)\n}`,
    solution: `function longestConsecutive(arr) {\n  const set = new Set(arr);\n  let maxLen = 0;\n  for (const num of set) {\n    if (!set.has(num - 1)) {\n      let len = 1;\n      while (set.has(num + len)) len++;\n      maxLen = Math.max(maxLen, len);\n    }\n  }\n  return maxLen;\n}`,
    tests: [{ input: [100,4,200,1,3,2], expected: 4 }],
    hints: ["Set use karo O(1) lookup ke liye", "Sequence ka start dhundho (num-1 exist nahi karta)"]
  });

  exercises.push({
    id: "05-03-patterns-practice-32",
    title: "Array ko k groups me divide karo equally",
    starterCode: `function divideInGroups(arr, k) {\n  // TODO: array ko k equal(ish) groups me todo\n}`,
    solution: `function divideInGroups(arr, k) {\n  const groups = Array.from({ length: k }, () => []);\n  for (let i = 0; i < arr.length; i++) {\n    groups[i % k].push(arr[i]);\n  }\n  return groups;\n}`,
    tests: [{ input: [[1,2,3,4,5,6], 3], expected: "1,4,2,5,3,6" }],
    hints: ["Modulo se round-robin assignment karo", "Har element ko uske group me push karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-33",
    title: "Array ke elements ko next greater element dhundho",
    starterCode: `function nextGreater(arr) {\n  // TODO: har element ke liye next greater element do\n  // [4,5,2,25] -> [5,25,25,-1]\n}`,
    solution: `function nextGreater(arr) {\n  const result = Array(arr.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length && arr[stack[stack.length-1]] < arr[i]) {\n      result[stack.pop()] = arr[i];\n    }\n    stack.push(i);\n  }\n  return result;\n}`,
    tests: [{ input: [4,5,2,25], expected: "5,25,25,-1" }],
    hints: ["Stack use karo", "Chhota element mila toh stack me dalo, bada mila toh pop karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-34",
    title: "2D array me column-wise sum nikalo",
    starterCode: `function columnSums(matrix) {\n  // TODO: har column ka sum nikalo\n}`,
    solution: `function columnSums(matrix) {\n  if (!matrix.length) return [];\n  const cols = matrix[0].length;\n  const sums = Array(cols).fill(0);\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < cols; j++) {\n      sums[j] += matrix[i][j];\n    }\n  }\n  return sums;\n}`,
    tests: [{ input: [[[1,2],[3,4],[5,6]]], expected: "9,12" }],
    hints: ["Columns ki length se sums array banao", "Row-wise traverse karte jaao aur add karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-35",
    title: "Array ke elements ko wiggle sort karo",
    starterCode: `function wiggleSort(arr) {\n  // TODO: nums[0] < nums[1] > nums[2] < nums[3]...\n}`,
    solution: `function wiggleSort(arr) {\n  const result = [...arr].sort((a, b) => a - b);\n  for (let i = 1; i < result.length - 1; i += 2) {\n    [result[i], result[i + 1]] = [result[i + 1], result[i]];\n  }\n  return result;\n}`,
    tests: [{ input: [3,1,5,2,4], expected: "1,5,2,4,3" }],
    hints: ["Pehle sort karo, fir adjacent elements swap karo", "Odd indices pe bada element aana chahiye"]
  });

  exercises.push({
    id: "05-03-patterns-practice-36",
    title: "Array ke minimum window dhundho jo sab elements contain kare",
    starterCode: `function minWindow(arr, target) {\n  // TODO: smallest subarray jo target ke sab elements contain kare\n}`,
    solution: `function minWindow(arr, target) {\n  const targetSet = new Set(target);\n  let minLen = Infinity, minStart = 0;\n  let left = 0, formed = 0;\n  const windowCounts = {};\n  for (let right = 0; right < arr.length; right++) {\n    const char = arr[right];\n    windowCounts[char] = (windowCounts[char] || 0) + 1;\n    if (targetSet.has(char) && windowCounts[char] === 1) formed++;\n    while (formed === targetSet.size) {\n      if (right - left + 1 < minLen) {\n        minLen = right - left + 1;\n        minStart = left;\n      }\n      windowCounts[arr[left]]--;\n      if (targetSet.has(arr[left]) && windowCounts[arr[left]] === 0) formed--;\n      left++;\n    }\n  }\n  return minLen === Infinity ? "" : arr.slice(minStart, minStart + minLen);\n}`,
    tests: [{ input: [["a","b","c","d"], ["b","c"]], expected: "b,c" }],
    hints: ["Sliding window approach use karo", "Left pointer tab move karo jab window valid ho"]
  });

  exercises.push({
    id: "05-03-patterns-practice-37",
    title: "Nested loop se array ke all subsets generate karo",
    starterCode: `function subsets(arr) {\n  // TODO: array ke sab subsets (power set) do\n}`,
    solution: `function subsets(arr) {\n  const result = [[]];\n  for (const num of arr) {\n    const newSubsets = result.map(sub => [...sub, num]);\n    result.push(...newSubsets);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3]], expected: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }],
    hints: ["Har element ke liye existing subsets me add karo", "New subsets banao aur result me push karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-38",
    title: "Array ke elements ko group by frequency",
    starterCode: `function groupByFrequency(arr) {\n  // TODO: frequency ke hisaab se groups banao\n  // [1,1,2,2,2,3] -> {1:[1,1], 2:[2,2,2], 3:[3]}\n}`,
    solution: `function groupByFrequency(arr) {\n  const freq = {};\n  for (const num of arr) freq[num] = (freq[num] || 0) + 1;\n  const groups = {};\n  for (const [num, count] of Object.entries(freq)) {\n    (groups[count] = groups[count] || []).push(Number(num));\n  }\n  return groups;\n}`,
    tests: [{ input: [1,1,2,2,2,3], expected: '{"3":[2],"2":[1],"1":[3]}' }],
    hints: ["Pehle frequency count karo", "Frequency ke hisaab se groups banao"]
  });

  exercises.push({
    id: "05-03-patterns-practice-39",
    title: "2D array me snake pattern me traverse karo",
    starterCode: `function snakePattern(matrix) {\n  // TODO: matrix ko snake order me traverse karo\n  // Even rows: left to right, Odd rows: right to left\n}`,
    solution: `function snakePattern(matrix) {\n  const result = [];\n  for (let i = 0; i < matrix.length; i++) {\n    if (i % 2 === 0) {\n      for (let j = 0; j < matrix[i].length; j++) result.push(matrix[i][j]);\n    } else {\n      for (let j = matrix[i].length - 1; j >= 0; j--) result.push(matrix[i][j]);\n    }\n  }\n  return result;\n}`,
    tests: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], expected: "1,2,3,6,5,4,7,8,9" }],
    hints: ["Even row: left to right", "Odd row: right to left"]
  });

  exercises.push({
    id: "05-03-patterns-practice-40",
    title: "Array ke pairs dhundho jinka absolute difference k ho",
    starterCode: `function findPairs(arr, k) {\n  // TODO: jisme |a-b| = k ho\n}`,
    solution: `function findPairs(arr, k) {\n  const set = new Set(arr);\n  const pairs = [];\n  for (const num of set) {\n    if (set.has(num + k)) pairs.push([num, num + k]);\n  }\n  return pairs;\n}`,
    tests: [{ input: [[1,5,3,4,2], 2], expected: "1,3,2,4,3,5" }],
    hints: ["Set use karo O(1) lookup ke liye", "Har num ke liye num+k check karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-41",
    title: "Nested loop se array ke median nikalo",
    starterCode: `function median(arr) {\n  // TODO: sorted array ka median do\n}`,
    solution: `function median(arr) {\n  const sorted = [...arr].sort((a, b) => a - b);\n  const mid = Math.floor(sorted.length / 2);\n  if (sorted.length % 2 === 0) {\n    return (sorted[mid - 1] + sorted[mid]) / 2;\n  }\n  return sorted[mid];\n}`,
    tests: [{ input: [3,1,4,1,5], expected: 3 }],
    hints: ["Pehle sort karo", "Odd length: middle element, Even: average of two middles"]
  });

  exercises.push({
    id: "05-03-patterns-practice-42",
    title: "Array ko merge sort se sort karo",
    starterCode: `function mergeSort(arr) {\n  // TODO: merge sort algorithm implement karo\n}`,
    solution: `function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\nfunction merge(left, right) {\n  const result = [];\n  let i = 0, j = 0;\n  while (i < left.length && j < right.length) {\n    result.push(left[i] <= right[j] ? left[i++] : right[j++]);\n  }\n  return [...result, ...left.slice(i), ...right.slice(j)];\n}`,
    tests: [{ input: [5,3,1,4,2], expected: "1,2,3,4,5" }],
    hints: ["Divide and conquer use karo", "Recursion se sort karo aur merge karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-43",
    title: "Array ke elements ko frequency ke decreasing order me sort karo",
    starterCode: `function sortByFrequency(arr) {\n  // TODO: kam frequency wale pehle aaye\n}`,
    solution: `function sortByFrequency(arr) {\n  const freq = {};\n  for (const num of arr) freq[num] = (freq[num] || 0) + 1;\n  return [...arr].sort((a, b) => freq[a] - freq[b] || a - b);\n}`,
    tests: [{ input: [2,3,2,4,1,3], expected: "1,4,2,2,3,3" }],
    hints: ["Frequency map banao", "Comparator me frequency compare karo, tie pe value"]
  });

  exercises.push({
    id: "05-03-patterns-practice-44",
    title: "2D array me word search karo",
    starterCode: `function wordSearch(board, word) {\n  // TODO: board me word dhundho (horizontally ya vertically)\n}`,
    solution: `function wordSearch(board, word) {\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[i].length; j++) {\n      if (board[i][j] === word[0]) {\n        if (checkDirection(board, word, i, j, 0, 1) || checkDirection(board, word, i, j, 1, 0)) return true;\n      }\n    }\n  }\n  return false;\n}\nfunction checkDirection(board, word, row, col, dr, dc) {\n  for (let k = 0; k < word.length; k++) {\n    const r = row + dr * k, c = col + dc * k;\n    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== word[k]) return false;\n  }\n  return true;\n}`,
    tests: [{ input: [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"], expected: "true" }],
    hints: ["Har starting point se horizontal aur vertical check karo", "Direction wise match karo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-45",
    title: "Array ke elements ko circular fashion me print karo",
    starterCode: `function circularPrint(arr, startIndex, count) {\n  // TODO: startIndex se shuru karke count elements circular print karo\n}`,
    solution: `function circularPrint(arr, startIndex, count) {\n  const result = [];\n  for (let i = 0; i < count; i++) {\n    result.push(arr[(startIndex + i) % arr.length]);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5], 3, 7], expected: "4,5,1,2,3,4,5" }],
    hints: ["Modulo se circular index nikalo", "Count tak loop chalao"]
  });

  exercises.push({
    id: "05-03-patterns-practice-46",
    title: "Array ke minimum swaps to sort count karo",
    starterCode: `function minSwaps(arr) {\n  // TODO: array ko sort karne ke liye kitne minimum swaps chahiye\n}`,
    solution: `function minSwaps(arr) {\n  const n = arr.length;\n  const indexed = arr.map((val, idx) => ({ val, idx }));\n  indexed.sort((a, b) => a.val - b.val);\n  const visited = new Array(n).fill(false);\n  let swaps = 0;\n  for (let i = 0; i < n; i++) {\n    if (visited[i] || indexed[i].idx === i) continue;\n    let cycleSize = 0, j = i;\n    while (!visited[j]) {\n      visited[j] = true;\n      j = indexed[j].idx;\n      cycleSize++;\n    }\n    if (cycleSize > 0) swaps += cycleSize - 1;\n  }\n  return swaps;\n}`,
    tests: [{ input: [4,3,1,2], expected: 3 }],
    hints: ["Cycle detection approach use karo", "Har cycle me (size-1) swaps lagte hain"]
  });

  exercises.push({
    id: "05-03-patterns-practice-47",
    title: "Nested loop se array ke elements ko interleave karo",
    starterCode: `function interleave(arr) {\n  // TODO: [1,2,3,4,5,6] -> [1,4,2,5,3,6]\n}`,
    solution: `function interleave(arr) {\n  const mid = Math.ceil(arr.length / 2);\n  const first = arr.slice(0, mid);\n  const second = arr.slice(mid);\n  const result = [];\n  for (let i = 0; i < mid; i++) {\n    result.push(first[i]);\n    if (i < second.length) result.push(second[i]);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4,5,6]], expected: "1,4,2,5,3,6" }],
    hints: ["Array ko do halves me todo", "Ek ek element dono halves se lo"]
  });

  exercises.push({
    id: "05-03-patterns-practice-48",
    title: "Array ke consecutive runs count karo",
    starterCode: `function countRuns(arr) {\n  // TODO: consecutive same elements ki runs count karo\n  // [1,1,2,2,2,3,1] -> 4 runs\n}`,
    solution: `function countRuns(arr) {\n  if (arr.length === 0) return 0;\n  let runs = 1;\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] !== arr[i - 1]) runs++;\n  }\n  return runs;\n}`,
    tests: [{ input: [1,1,2,2,2,3,1], expected: 4 }],
    hints: ["Element change hone pe count badhao", "Pehla element hamesha run me hota hai"]
  });

  exercises.push({
    id: "05-03-patterns-practice-49",
    title: "Array ke elements ko bit manipulation se check karo",
    starterCode: `function findUnique(arr) {\n  // TODO: sab elements do-do baar hain, sirf ek baar\n  // XOR use karo\n}`,
    solution: `function findUnique(arr) {\n  let result = 0;\n  for (const num of arr) result ^= num;\n  return result;\n}`,
    tests: [{ input: [2,3,2,4,3], expected: 4 }],
    hints: ["XOR property: a ^ a = 0, a ^ 0 = a", "Sab XOR karne pe unique bach jayega"]
  });

  exercises.push({
    id: "05-03-patterns-practice-50",
    title: "Comprehensive array processing — chaining operations banao",
    starterCode: `function pipeline(arr, operations) {\n  // TODO: operations array ke hisaab se process karo\n  // [{type:"filter",fn:n=>n>2}, {type:"map",fn:n=>n*2}]\n}`,
    solution: `function pipeline(arr, operations) {\n  let result = [...arr];\n  for (const op of operations) {\n    if (op.type === "filter") result = result.filter(op.fn);\n    else if (op.type === "map") result = result.map(op.fn);\n    else if (op.type === "sort") result = result.sort(op.fn);\n  }\n  return result;\n}`,
    tests: [{ input: [[1,2,3,4], [{type:"filter",fn:n=>n>2},{type:"map",fn:n=>n*2}]], expected: "6,8" }],
    hints: ["Operation type ke hisaab se array method apply karo", "Result chain karte jaao"]
  });

  return exercises;
}

const lessonGenerators = [
  { slug: "for-while", generator: generateForWhile },
  { slug: "for-of-for-in", generator: generateForOfForIn },
  { slug: "patterns-practice", generator: generatePatternsPractice },
];

for (const { slug, generator } of lessonGenerators) {
  ensureDir(outputBase);
  const exercises = generator();
  console.log(`Generating ${exercises.length} exercises for lesson: ${slug}`);
  exercises.forEach((exercise, index) => {
    const num = String(index + 1).padStart(2, "0");
    writeExercise(path.join(outputBase, `${slug}-${num}.json`), exercise);
  });
}

console.log("Module 05 exercises generated successfully!");
