import fs from "fs";
import path from "path";

const outputBase = "src/content/04-control-flow/exercises";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeExercise(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function generateIfElseSwitch() {
  const exercises = [];

  exercises.push({
    id: "04-01-if-else-switch-01",
    title: "Grade calculator banao marks ke hisaab se",
    starterCode: `function calculateGrade(marks) {\n  // TODO: marks ke hisaab se grade do\n  // 90+ -> "A+", 80+ -> "A", 70+ -> "B", 60+ -> "C", 50+ -> "D", else -> "F"\n}`,
    solution: `function calculateGrade(marks) {\n  if (marks >= 90) return "A+";\n  if (marks >= 80) return "A";\n  if (marks >= 70) return "B";\n  if (marks >= 60) return "C";\n  if (marks >= 50) return "D";\n  return "F";\n}`,
    tests: [{ input: [85], expected: "A" }],
    hints: ["Sabse bada threshold pehle check karo", "Early return pattern use karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-02",
    title: "Day of week nikalo number se",
    starterCode: `function dayName(num) {\n  // TODO: 1 -> "Monday", 2 -> "Tuesday"... 7 -> "Sunday"\n  // Invalid -> "Invalid day"\n}`,
    solution: `function dayName(num) {\n  switch (num) {\n    case 1: return "Monday";\n    case 2: return "Tuesday";\n    case 3: return "Wednesday";\n    case 4: return "Thursday";\n    case 5: return "Friday";\n    case 6: return "Saturday";\n    case 7: return "Sunday";\n    default: return "Invalid day";\n  }\n}`,
    tests: [{ input: [3], expected: "Wednesday" }],
    hints: ["Switch statement use karo exact matching ke liye", "Default case mat bhoolna"]
  });

  exercises.push({
    id: "04-01-if-else-switch-03",
    title: "FizzBuzz implement karo",
    starterCode: `function fizzBuzz(n) {\n  // TODO: 1 se n tak FizzBuzz karo\n  // 3 se divisible -> "Fizz", 5 se -> "Buzz", dono -> "FizzBuzz"\n}`,
    solution: `function fizzBuzz(n) {\n  const result = [];\n  for (let i = 1; i <= n; i++) {\n    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");\n    else if (i % 3 === 0) result.push("Fizz");\n    else if (i % 5 === 0) result.push("Buzz");\n    else result.push(i);\n  }\n  return result;\n}`,
    tests: [{ input: [5], expected: "1,2,Fizz,4,Buzz" }],
    hints: ["Pehle dono conditions check karo (3 aur 5)", "Fir alag alag check karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-04",
    title: "Switch se calculator operator handle karo",
    starterCode: `function calculate(a, op, b) {\n  // TODO: switch use karo operator ke liye\n  // +, -, *, / handle karo\n  // Division by zero -> "Error"\n}`,
    solution: `function calculate(a, op, b) {\n  switch (op) {\n    case "+": return a + b;\n    case "-": return a - b;\n    case "*": return a * b;\n    case "/": return b !== 0 ? a / b : "Error";\n    default: return "Invalid operator";\n  }\n}`,
    tests: [{ input: [10, "/", 2], expected: 5 }],
    hints: ["Switch me har operator ke liye case likho", "Division by zero handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-05",
    title: "Guard clause pattern use karo validation ke liye",
    starterCode: `function processOrder(order) {\n  // TODO: guard clauses se pehle errors handle karo\n  // order.items exist karna chahiye, length > 0\n}`,
    solution: `function processOrder(order) {\n  if (!order) return "No order provided";\n  if (!order.items) return "No items in order";\n  if (order.items.length === 0) return "Order is empty";\n  return "Order processed successfully";\n}`,
    tests: [{ input: [{items:["a","b"]}], expected: "Order processed successfully" }],
    hints: ["Guard clauses pehle errors handle karti hain", "Har error ke liye early return karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-06",
    title: "Switch se months ke days nikalo",
    starterCode: `function getMonthDays(month) {\n  // TODO: switch use karo\n  // Jan(31), Feb(28), Mar(31), Apr(30)...\n  // Invalid -> -1\n}`,
    solution: `function getMonthDays(month) {\n  switch (month.toLowerCase()) {\n    case "jan": case "january": return 31;\n    case "feb": case "february": return 28;\n    case "mar": case "march": return 31;\n    case "apr": case "april": return 30;\n    case "may": return 31;\n    case "jun": case "june": return 30;\n    case "jul": case "july": return 31;\n    case "aug": case "august": return 31;\n    case "sep": case "september": return 30;\n    case "oct": case "october": return 31;\n    case "nov": case "november": return 30;\n    case "dec": case "december": return 31;\n    default: return -1;\n  }\n}`,
    tests: [{ input: ["feb"], expected: 28 }],
    hints: ["Switch multiple cases ek saath handle kar sakta hai", "default me invalid case handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-07",
    title: "BMI category nikalo",
    starterCode: `function bmiCategory(weight, height) {\n  // TODO: BMI = weight / height^2\n  // < 18.5 -> "Underweight", 18.5-24.9 -> "Normal"\n  // 25-29.9 -> "Overweight", else -> "Obese"\n}`,
    solution: `function bmiCategory(weight, height) {\n  const bmi = weight / (height * height);\n  if (bmi < 18.5) return "Underweight";\n  if (bmi < 25) return "Normal";\n  if (bmi < 30) return "Overweight";\n  return "Obese";\n}`,
    tests: [{ input: [70, 1.75], expected: "Normal" }],
    hints: ["BMI nikalo pehle", "Ranges check karo chhote se bada ki taraf"]
  });

  exercises.push({
    id: "04-01-if-else-switch-08",
    title: "Switch se seasons determine karo month se",
    starterCode: `function getSeason(month) {\n  // TODO: switch use karo\n  // Dec,Jan,Feb -> "Winter", Mar,Apr,May -> "Spring"\n  // Jun,Jul,Aug -> "Summer", Sep,Oct,Nov -> "Autumn"\n}`,
    solution: `function getSeason(month) {\n  switch (month.toLowerCase()) {\n    case "dec": case "jan": case "feb": return "Winter";\n    case "mar": case "apr": case "may": return "Spring";\n    case "jun": case "jul": case "aug": return "Summer";\n    case "sep": case "oct": case "nov": return "Autumn";\n    default: return "Invalid month";\n  }\n}`,
    tests: [{ input: ["jan"], expected: "Winter" }],
    hints: ["Fall-through use karo — multiple cases ek return share kar sakte hain", "toLowerCase se case-insensitive ho jayega"]
  });

  exercises.push({
    id: "04-01-if-else-switch-09",
    title: "Guard clause se authentication check karo",
    starterCode: `function authenticate(user) {\n  // TODO: guard clauses use karo:\n  // user exist, verified, active\n}`,
    solution: `function authenticate(user) {\n  if (!user) return "No user provided";\n  if (!user.verified) return "User not verified";\n  if (!user.active) return "User not active";\n  return { token: "abc123" };\n}`,
    tests: [{ input: [{verified:true,active:true}], expected: '{"token":"abc123"}' }],
    hints: ["Pehle sab false cases handle karo", "Guard clauses flat nesting rakhti hain"]
  });

  exercises.push({
    id: "04-01-if-else-switch-10",
    title: "If-else se traffic light logic banao",
    starterCode: `function trafficAction(light) {\n  // TODO: "red" -> "stop", "yellow" -> "slow down", "green" -> "go"\n}`,
    solution: `function trafficAction(light) {\n  if (light === "red") return "stop";\n  if (light === "yellow") return "slow down";\n  if (light === "green") return "go";\n  return "unknown light";\n}`,
    tests: [{ input: ["red"], expected: "stop" }],
    hints: ["String comparison use karo === se", "Default case ke liye last me return karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-11",
    title: "Switch se Roman numeral to number convert karo",
    starterCode: `function romanToNum(roman) {\n  // TODO: I->1, V->5, X->10, L->50, C->100, D->500, M->1000\n}`,
    solution: `function romanToNum(roman) {\n  let result = 0;\n  for (const char of roman.toUpperCase()) {\n    switch (char) {\n      case "I": result += 1; break;\n      case "V": result += 5; break;\n      case "X": result += 10; break;\n      case "L": result += 50; break;\n      case "C": result += 100; break;\n      case "D": result += 500; break;\n      case "M": result += 1000; break;\n    }\n  }\n  return result;\n}`,
    tests: [{ input: ["XIV"], expected: 14 }],
    hints: ["Switch me break mat bhoolna", "Loop se har character process karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-12",
    title: "If-else se palindrome checker banao",
    starterCode: `function isPalindrome(str) {\n  // TODO: string palindrome hai ya nahi check karo\n  // Case-insensitive hona chahiye\n}`,
    solution: `function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return cleaned === cleaned.split("").reverse().join("");\n}`,
    tests: [{ input: ["madam"], expected: "true" }],
    hints: ["Pehle string clean karo", "Reverse karke compare karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-13",
    title: "Guard clause se input validation karo",
    starterCode: `function createUser(name, age, email) {\n  // TODO: guard clauses use karo:\n  // name string hai aur empty nahi\n  // age 18+\n  // email me @ hai\n}`,
    solution: `function createUser(name, age, email) {\n  if (typeof name !== "string" || name.trim() === "") return "Invalid name";\n  if (typeof age !== "number" || age < 18) return "Age must be 18+";\n  if (typeof email !== "string" || !email.includes("@")) return "Invalid email";\n  return { name, age, email };\n}`,
    tests: [{ input: ["John", 25, "john@test.com"], expected: '{"name":"John","age":25,"email":"john@test.com"}' }],
    hints: ["Pehle type check karo, fir value check karo", "Early return se nesting avoid hoti hai"]
  });

  exercises.push({
    id: "04-01-if-else-switch-14",
    title: "Switch se file type identifier banao",
    starterCode: `function getFileType(extension) {\n  // TODO: jpg/png/gif -> "image", js -> "script", css -> "style"\n  // html -> "markup", json -> "data"\n}`,
    solution: `function getFileType(extension) {\n  switch (extension.toLowerCase()) {\n    case "jpg": case "png": case "gif": return "image";\n    case "js": return "script";\n    case "css": return "style";\n    case "html": return "markup";\n    case "json": return "data";\n    default: return "unknown";\n  }\n}`,
    tests: [{ input: ["png"], expected: "image" }],
    hints: ["Multiple cases ek line me likh sakte ho", "toLowerCase se case-insensitive hoga"]
  });

  exercises.push({
    id: "04-01-if-else-switch-15",
    title: "Nested if-else se voting eligibility check karo",
    starterCode: `function canVote(age, citizenship) {\n  // TODO: age >= 18 AND citizen ya permanent\n}`,
    solution: `function canVote(age, citizenship) {\n  if (age >= 18) {\n    if (citizenship === "citizen" || citizenship === "permanent") return true;\n    return "Must be citizen or permanent resident";\n  }\n  return "Must be 18 or older";\n}`,
    tests: [{ input: [21, "citizen"], expected: "true" }],
    hints: ["Pehle age check karo, fir citizenship", "Nested if properly indent karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-16",
    title: "Guard clause se array processing guard karo",
    starterCode: `function processArray(arr) {\n  // TODO: arr exist, array hai, empty nahi\n}`,
    solution: `function processArray(arr) {\n  if (!arr) return "No array provided";\n  if (!Array.isArray(arr)) return "Not an array";\n  if (arr.length === 0) return "Array is empty";\n  return arr.map(n => n * 2);\n}`,
    tests: [{ input: [[1,2,3]], expected: "2,4,6" }],
    hints: ["Array.isArray() se array check karo", "Har invalid case ke liye early return karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-17",
    title: "Switch se color code to name convert karo",
    starterCode: `function colorName(code) {\n  // TODO: "#FF0000" -> "Red", "#00FF00" -> "Green", "#0000FF" -> "Blue"\n}`,
    solution: `function colorName(code) {\n  switch (code.toUpperCase()) {\n    case "#FF0000": return "Red";\n    case "#00FF00": return "Green";\n    case "#0000FF": return "Blue";\n    case "#FFFFFF": return "White";\n    case "#000000": return "Black";\n    default: return "Unknown color";\n  }\n}`,
    tests: [{ input: ["#FF0000"], expected: "Red" }],
    hints: ["Switch strict equality use karta hai", "toUpperCase se case-insensitive hoga"]
  });

  exercises.push({
    id: "04-01-if-else-switch-18",
    title: "If-else se age group classifier banao",
    starterCode: `function classifyAge(age) {\n  // TODO: 0-1->"infant", 2-5->"child", 6-12->"kid"\n  // 13-17->"teen", 18-64->"adult", 65+->"senior"\n}`,
    solution: `function classifyAge(age) {\n  if (age < 0) return "invalid";\n  if (age <= 1) return "infant";\n  if (age <= 5) return "child";\n  if (age <= 12) return "kid";\n  if (age <= 17) return "teen";\n  if (age <= 64) return "adult";\n  return "senior";\n}`,
    tests: [{ input: [10], expected: "kid" }],
    hints: ["Chhoti range se badi range ki taraf check karo", "Early return se nesting avoid hoti hai"]
  });

  exercises.push({
    id: "04-01-if-else-switch-19",
    title: "Switch se calculator with memory banao",
    starterCode: `function calcWithMemory(memory, op, num) {\n  // TODO: switch use karo\n  // "+" -> memory+num, "-" -> memory-num\n  // "*" -> memory*num, "C" -> 0\n}`,
    solution: `function calcWithMemory(memory, op, num) {\n  switch (op) {\n    case "+": return memory + num;\n    case "-": return memory - num;\n    case "*": return memory * num;\n    case "/": return num !== 0 ? memory / num : "Error";\n    case "C": return 0;\n    default: return memory;\n  }\n}`,
    tests: [{ input: [10, "+", 5], expected: 15 }],
    hints: ["Memory ka current value as starting point use karo", "Reset case ke liye 'C' handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-20",
    title: "Guard clause se API response handler banao",
    starterCode: `function handleResponse(response) {\n  // TODO: response exist, status 200-299, data exist\n}`,
    solution: `function handleResponse(response) {\n  if (!response) return "No response received";\n  if (response.status < 200 || response.status >= 300) return "Failed: " + response.status;\n  if (!response.data) return "No data in response";\n  return response.data;\n}`,
    tests: [{ input: [{status:200,data:{id:1}}], expected: '{"id":1}' }],
    hints: ["Range check karo status ke liye", "Data check karo baad me"]
  });

  exercises.push({
    id: "04-01-if-else-switch-21",
    title: "Switch se simple interpreter banao",
    starterCode: `function interpret(command) {\n  // TODO: "greet" -> "Hello!", "bye" -> "Goodbye!"\n  // "time" -> hours, "date" -> date\n}`,
    solution: `function interpret(command) {\n  const now = new Date();\n  switch (command) {\n    case "greet": return "Hello!";\n    case "bye": return "Goodbye!";\n    case "time": return now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");\n    case "date": return now.toISOString().split("T")[0];\n    default: return "Unknown command";\n  }\n}`,
    tests: [{ input: ["greet"], expected: "Hello!" }],
    hints: ["Switch me har command ke liye case likho", "Date/Time ke liye Date object use karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-22",
    title: "If-else se rock-paper-scissors winner decide karo",
    starterCode: `function rpsWinner(p1, p2) {\n  // TODO: "rock","paper","scissors"\n  // Same -> "draw"\n}`,
    solution: `function rpsWinner(p1, p2) {\n  if (p1 === p2) return "draw";\n  if ((p1==="rock"&&p2==="scissors")||(p1==="paper"&&p2==="rock")||(p1==="scissors"&&p2==="paper")) return "p1 wins";\n  return "p2 wins";\n}`,
    tests: [{ input: ["rock", "scissors"], expected: "p1 wins" }],
    hints: ["Pehle draw check karo", "Winning combinations list karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-23",
    title: "Guard clause se form data validate karo",
    starterCode: `function validateForm(data) {\n  // TODO: data object hai, name 3+ chars, email me @, age 18+\n}`,
    solution: `function validateForm(data) {\n  if (!data || typeof data !== "object") return "Invalid form data";\n  if (!data.name || data.name.length < 3) return "Name must be at least 3 characters";\n  if (!data.email || !data.email.includes("@")) return "Invalid email";\n  if (data.age === undefined || data.age < 18) return "Must be 18 or older";\n  return "Form is valid";\n}`,
    tests: [{ input: [{name:"John",email:"j@test.com",age:25}], expected: "Form is valid" }],
    hints: ["Pehle type check karo, fir value checks karo", "Har error ke liye clear message do"]
  });

  exercises.push({
    id: "04-01-if-else-switch-24",
    title: "Switch se simple command parser banao",
    starterCode: `function parseCommand(input) {\n  // TODO: "add 5" -> {action:"add",value:5}\n  // "remove 3" -> {action:"remove",value:3}\n  // "list" -> {action:"list"}\n}`,
    solution: `function parseCommand(input) {\n  const parts = input.split(" ");\n  switch (parts[0]) {\n    case "add": return { action: "add", value: Number(parts[1]) };\n    case "remove": return { action: "remove", value: Number(parts[1]) };\n    case "list": return { action: "list" };\n    default: return { action: "unknown" };\n  }\n}`,
    tests: [{ input: ["add 5"], expected: '{"action":"add","value":5}' }],
    hints: ["String ko split karo space se", "First part action hai, baaki arguments"]
  });

  exercises.push({
    id: "04-01-if-else-switch-25",
    title: "If-else se leap year checker banao",
    starterCode: `function isLeapYear(year) {\n  // TODO: 4 se divisible aur (100 se nahi ya 400 se divisible)\n}`,
    solution: `function isLeapYear(year) {\n  if (year % 4 !== 0) return false;\n  if (year % 100 !== 0) return true;\n  return year % 400 === 0;\n}`,
    tests: [{ input: [2024], expected: "true" }],
    hints: ["Pehle 4 se divisible nahi hai toh false", "100 se divisible hai toh 400 se bhi hona chahiye"]
  });

  exercises.push({
    id: "04-01-if-else-switch-26",
    title: "Switch se JSON to CSV header mapper banao",
    starterCode: `function mapHeader(key) {\n  // TODO: "firstName" -> "First Name"\n  // "emailAddress" -> "Email"\n}`,
    solution: `function mapHeader(key) {\n  switch (key) {\n    case "firstName": return "First Name";\n    case "lastName": return "Last Name";\n    case "emailAddress": return "Email";\n    case "phoneNumber": return "Phone";\n    default: return key.charAt(0).toUpperCase() + key.slice(1);\n  }\n}`,
    tests: [{ input: ["firstName"], expected: "First Name" }],
    hints: ["Default case me generic capitalize karo", "switch exact match karta hai"]
  });

  exercises.push({
    id: "04-01-if-else-switch-27",
    title: "Guard clause se safely head nikalo array ka",
    starterCode: `function safeHead(arr) {\n  // TODO: arr hai, array hai, empty nahi hai toh pehla element do\n}`,
    solution: `function safeHead(arr) {\n  if (!arr || !Array.isArray(arr)) return undefined;\n  if (arr.length === 0) return undefined;\n  return arr[0];\n}`,
    tests: [{ input: [[10,20,30]], expected: 10 }],
    hints: ["Null check, type check, length check — order matters", "Guard clauses flat nesting rakhti hain"]
  });

  exercises.push({
    id: "04-01-if-else-switch-28",
    title: "If-else se ATM withdrawal logic banao",
    starterCode: `function withdraw(balance, amount) {\n  // TODO: amount > 0, <= balance, <= 10000\n}`,
    solution: `function withdraw(balance, amount) {\n  if (amount <= 0) return "Invalid amount";\n  if (amount > 10000) return "Exceeds ATM limit of 10000";\n  if (amount > balance) return "Insufficient funds";\n  return balance - amount;\n}`,
    tests: [{ input: [5000, 1000], expected: 4000 }],
    hints: ["Pehle validation errors handle karo with early return", "Balance check baad me karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-29",
    title: "Switch se calculator with history banao",
    starterCode: `function calcWithHistory(history, op, value) {\n  // TODO: history[-1] se current value lo\n  // switch se operation karo, "C" se reset\n}`,
    solution: `function calcWithHistory(history, op, value) {\n  if (op === "C") return [];\n  const current = history.length > 0 ? history[history.length - 1] : 0;\n  let result;\n  switch (op) {\n    case "+": result = current + value; break;\n    case "-": result = current - value; break;\n    case "*": result = current * value; break;\n    case "/": result = value !== 0 ? current / value : current; break;\n    default: return history;\n  }\n  return [...history, result];\n}`,
    tests: [{ input: [[], "+", 5], expected: "5" }],
    hints: ["History ke last element se current value nikalo", "Result ko history me push karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-30",
    title: "Guard clause se middleware pattern banao",
    starterCode: `function authMiddleware(request) {\n  // TODO: request, headers, authorization, Bearer prefix\n}`,
    solution: `function authMiddleware(request) {\n  if (!request) return "No request";\n  if (!request.headers) return "No headers";\n  if (!request.headers.authorization) return "No authorization header";\n  if (!request.headers.authorization.startsWith("Bearer ")) return "Invalid token format";\n  return { userId: "decoded-token" };\n}`,
    tests: [{ input: [{headers:{authorization:"Bearer token123"}}], expected: '{"userId":"decoded-token"}' }],
    hints: ["startsWith() se prefix check karo", "Har invalid case ke liye early return karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-31",
    title: "If-else se simple auth system banao",
    starterCode: `function authorize(user, action) {\n  // TODO: admin->sab, editor->read/write, viewer->read\n}`,
    solution: `function authorize(user, action) {\n  if (!user || !user.role) return "No user or role";\n  if (user.role === "admin") return "authorized";\n  if (user.role === "editor" && (action === "read" || action === "write")) return "authorized";\n  if (user.role === "viewer" && action === "read") return "authorized";\n  return "unauthorized";\n}`,
    tests: [{ input: [{role:"editor"}, "write"], expected: "authorized" }],
    hints: ["Role ke hisaab se allowed actions list karo", "Admin ke liye sab allowed hai"]
  });

  exercises.push({
    id: "04-01-if-else-switch-32",
    title: "Switch se HTTP method handler banao",
    starterCode: `function handleMethod(method) {\n  // TODO: GET->fetch, POST->create, PUT->update\n  // DELETE->remove, PATCH->partial\n}`,
    solution: `function handleMethod(method) {\n  switch (method.toUpperCase()) {\n    case "GET": return "fetch data";\n    case "POST": return "create data";\n    case "PUT": return "update data";\n    case "DELETE": return "remove data";\n    case "PATCH": return "partial update";\n    default: return "method not allowed";\n  }\n}`,
    tests: [{ input: ["POST"], expected: "create data" }],
    hints: ["toUpperCase se case-insensitive ho jayega", "Har method ke liye specific response do"]
  });

  exercises.push({
    id: "04-01-if-else-switch-33",
    title: "Guard clause se data transformer banao",
    starterCode: `function transformData(data) {\n  // TODO: data null nahi, object hai, keys hain toh values uppercase karo\n}`,
    solution: `function transformData(data) {\n  if (!data) return null;\n  if (typeof data !== "object") return data;\n  const result = {};\n  for (const key of Object.keys(data)) {\n    result[key] = typeof data[key] === "string" ? data[key].toUpperCase() : data[key];\n  }\n  return result;\n}`,
    tests: [{ input: [{name:"john"}], expected: '{"name":"JOHN"}' }],
    hints: ["Pehle null/type check karo", "String values ko transform karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-34",
    title: "If-else se password policy check karo",
    starterCode: `function checkPassword(pw) {\n  // TODO: 8+ chars, 1 uppercase, 1 lowercase, 1 number\n}`,
    solution: `function checkPassword(pw) {\n  if (typeof pw !== "string") return "Invalid input";\n  if (pw.length < 8) return "Too short (min 8 chars)";\n  if (!/[A-Z]/.test(pw)) return "Need uppercase letter";\n  if (!/[a-z]/.test(pw)) return "Need lowercase letter";\n  if (!/[0-9]/.test(pw)) return "Need number";\n  return "Strong password";\n}`,
    tests: [{ input: ["Hello123"], expected: "Strong password" }],
    hints: ["Regex se checks karo", "Har condition ke liye early return karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-35",
    title: "Switch se simple DSL parser banao",
    starterCode: `function parseDSL(expression) {\n  // TODO: "SUM 5 3" -> 8, "DIFF 10 4" -> 6, "MUL 2 3" -> 6\n}`,
    solution: `function parseDSL(expression) {\n  const parts = expression.split(" ");\n  const a = Number(parts[1]), b = Number(parts[2]);\n  switch (parts[0]) {\n    case "SUM": return a + b;\n    case "DIFF": return a - b;\n    case "MUL": return a * b;\n    case "DIV": return b !== 0 ? a / b : "Error";\n    default: return "Unknown operation";\n  }\n}`,
    tests: [{ input: ["SUM 5 3"], expected: 8 }],
    hints: ["String ko split karo space se", "First part operator hai, baaki operands"]
  });

  exercises.push({
    id: "04-01-if-else-switch-36",
    title: "Guard clause se object path validator banao",
    starterCode: `function validatePath(obj, path) {\n  // TODO: path "a.b.c" format hai, har level pe exist check karo\n}`,
    solution: `function validatePath(obj, path) {\n  if (!obj || !path) return false;\n  const keys = path.split(".");\n  let current = obj;\n  for (const key of keys) {\n    if (current === null || current === undefined) return false;\n    if (typeof current !== "object") return false;\n    if (!(key in current)) return false;\n    current = current[key];\n  }\n  return true;\n}`,
    tests: [{ input: [{a:{b:{c:1}}}, "a.b.c"], expected: "true" }],
    hints: ["Pehle null check karo, fir type check, fir key existence", "Loop se har level pe check karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-37",
    title: "If-else se simple game logic banao",
    starterCode: `function gameRound(player) {\n  // TODO: computer random choice, compare with player\n}`,
    solution: `function gameRound(player) {\n  const choices = ["rock", "paper", "scissors"];\n  const comp = choices[Math.floor(Math.random() * 3)];\n  if (player === comp) return "Draw! Both chose " + player;\n  if ((player==="rock"&&comp==="scissors")||(player==="paper"&&comp==="rock")||(player==="scissors"&&comp==="paper")) return "You win! " + player + " beats " + comp;\n  return "You lose! " + comp + " beats " + player;\n}`,
    tests: [{ input: ["rock"], expected: "contains rock" }],
    hints: ["Math.random() se random choice nikalo", "Winning conditions list karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-38",
    title: "Switch se currency formatter banao",
    starterCode: `function formatCurrency(amount, currency) {\n  // TODO: "USD"->$, "EUR"->euro, "GBP"->pound, "JPY"->yen\n}`,
    solution: `function formatCurrency(amount, currency) {\n  let symbol;\n  switch (currency.toUpperCase()) {\n    case "USD": symbol = "$"; break;\n    case "EUR": symbol = "\\u20AC"; break;\n    case "GBP": symbol = "\\u00A3"; break;\n    case "JPY": symbol = "\\u00A5"; break;\n    default: symbol = currency + " ";\n  }\n  return symbol + amount;\n}`,
    tests: [{ input: [100, "USD"], expected: "$100" }],
    hints: ["Switch me break mat bhoolna", "Default case me currency code as prefix use karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-39",
    title: "Guard clause se middleware chain pattern banao",
    starterCode: `function runMiddlewares(request) {\n  // TODO: rateLimit, body, auth, validUser — har ek ke liye guard\n}`,
    solution: `function runMiddlewares(request) {\n  if (!request) return "No request";\n  if (request.rateLimited) return "Rate limited";\n  if (!request.body) return "No body";\n  if (!request.headers?.authorization) return "Unauthorized";\n  if (!request.user?.active) return "User inactive";\n  return "Request processed";\n}`,
    tests: [{ input: [{body:{},headers:{authorization:"tok"},user:{active:true}}], expected: "Request processed" }],
    hints: ["Har middleware ke liye guard clause likho", "Order important hai"]
  });

  exercises.push({
    id: "04-01-if-else-switch-40",
    title: "If-else se grade book system banao",
    starterCode: `function getLetterGrade(score) {\n  // TODO: 97+->A+, 93+->A, 90+->A-, 87+->B+...\n}`,
    solution: `function getLetterGrade(score) {\n  if (score >= 97) return "A+";\n  if (score >= 93) return "A";\n  if (score >= 90) return "A-";\n  if (score >= 87) return "B+";\n  if (score >= 83) return "B";\n  if (score >= 80) return "B-";\n  if (score >= 77) return "C+";\n  if (score >= 73) return "C";\n  if (score >= 70) return "C-";\n  if (score >= 67) return "D+";\n  if (score >= 63) return "D";\n  if (score >= 60) return "D-";\n  return "F";\n}`,
    tests: [{ input: [95], expected: "A" }],
    hints: ["Sabse bada threshold pehle check karo", "Early return pattern use karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-41",
    title: "Switch se simple interpreter with state banao",
    starterCode: `function interpreter(state, command) {\n  // TODO: state {x:0,y:0}, "up"->y++, "down"->y--\n  // "right"->x++, "left"->x--\n}`,
    solution: `function interpreter(state, command) {\n  const s = { ...state };\n  switch (command) {\n    case "up": s.y++; break;\n    case "down": s.y--; break;\n    case "right": s.x++; break;\n    case "left": s.x--; break;\n  }\n  return s;\n}`,
    tests: [{ input: [{x:0,y:0}, "up"], expected: '{"x":0,"y":1}' }],
    hints: ["State ko copy karo spread operator se", "Switch se command handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-42",
    title: "Guard clause se complex object validator banao",
    starterCode: `function validateUser(user) {\n  // TODO: user object, name 2+ chars, age 0-150, email me @, address optional\n}`,
    solution: `function validateUser(user) {\n  if (!user || typeof user !== "object") return "Invalid user object";\n  if (typeof user.name !== "string" || user.name.length < 2) return "Invalid name";\n  if (typeof user.age !== "number" || user.age < 0 || user.age > 150) return "Invalid age";\n  if (typeof user.email !== "string" || !user.email.includes("@")) return "Invalid email";\n  if (user.address && (typeof user.address !== "object" || !user.address.city)) return "Invalid address";\n  return "Valid user";\n}`,
    tests: [{ input: [{name:"John",age:25,email:"j@t.com"}], expected: "Valid user" }],
    hints: ["Pehle type checks, fir value checks", "Optional fields ke liye && use karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-43",
    title: "If-else se temperature advisory system banao",
    starterCode: `function temperatureAdvisory(temp) {\n  // TODO: <0->Freezing, 0-15->Cold, 15-25->Pleasant\n  // 25-35->Warm, 35-45->Hot, >45->Extreme\n}`,
    solution: `function temperatureAdvisory(temp) {\n  if (temp < 0) return "Freezing!";\n  if (temp < 15) return "Cold";\n  if (temp < 25) return "Pleasant";\n  if (temp < 35) return "Warm";\n  if (temp < 45) return "Hot!";\n  return "Extreme heat!";\n}`,
    tests: [{ input: [20], expected: "Pleasant" }],
    hints: ["Chhote se bada ki taraf check karo", "Early return se nesting avoid hoti hai"]
  });

  exercises.push({
    id: "04-01-if-else-switch-44",
    title: "Switch se event type handler banao",
    starterCode: `function handleEvent(event) {\n  // TODO: click->clicked, hover->hovered, focus->focused\n}`,
    solution: `function handleEvent(event) {\n  if (!event || !event.type) return "No event type";\n  switch (event.type) {\n    case "click": return "clicked";\n    case "hover": return "hovered";\n    case "focus": return "focused";\n    case "blur": return "blurred";\n    default: return "unknown event: " + event.type;\n  }\n}`,
    tests: [{ input: [{type:"click"}], expected: "clicked" }],
    hints: ["Null check pehle karo", "Switch se event type handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-45",
    title: "Guard clause se file upload handler banao",
    starterCode: `function validateUpload(file) {\n  // TODO: file exist, name exist, size>0, size<=5MB, type image\n}`,
    solution: `function validateUpload(file) {\n  if (!file) return "No file provided";\n  if (!file.name) return "No file name";\n  if (file.size <= 0) return "File is empty";\n  if (file.size > 5 * 1024 * 1024) return "File too large (max 5MB)";\n  if (!file.type.startsWith("image/")) return "Only images allowed";\n  return "File is valid";\n}`,
    tests: [{ input: [{name:"pic.jpg",size:1000,type:"image/jpeg"}], expected: "File is valid" }],
    hints: ["Size in bytes check karo — 5MB = 5 * 1024 * 1024", "startsWith se type check karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-46",
    title: "If-else se loan eligibility checker banao",
    starterCode: `function checkLoanEligibility(income, creditScore, loans) {\n  // TODO: income>30000, creditScore>650, loans<3\n}`,
    solution: `function checkLoanEligibility(income, creditScore, loans) {\n  if (income <= 30000) return "Income too low";\n  if (creditScore <= 650) return "Credit score too low";\n  if (loans >= 3) return "Too many existing loans";\n  return "Eligible for loan";\n}`,
    tests: [{ input: [50000, 700, 1], expected: "Eligible for loan" }],
    hints: ["Har condition ke liye early return karo", "Sabse important check pehle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-47",
    title: "Switch se array ke methods handle karo",
    starterCode: `function handleArray(arr, method, value) {\n  // TODO: push/pop/shift/unshift handle karo\n}`,
    solution: `function handleArray(arr, method, value) {\n  const newArr = [...arr];\n  switch (method) {\n    case "push": newArr.push(value); return newArr;\n    case "pop": newArr.pop(); return newArr;\n    case "shift": newArr.shift(); return newArr;\n    case "unshift": newArr.unshift(value); return newArr;\n    default: return newArr;\n  }\n}`,
    tests: [{ input: [[1,2,3], "push", 4], expected: "1,2,3,4" }],
    hints: ["Array ko copy karo taaki original mutate na ho", "Switch se method handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-48",
    title: "Guard clause se data normalizer banao",
    starterCode: `function normalizeUser(input) {\n  // TODO: input string ya object ya null ho sakta hai\n  // Normalize karke {name: string} format me return karo\n}`,
    solution: `function normalizeUser(input) {\n  if (!input) return { name: "" };\n  if (typeof input === "string") return { name: input };\n  if (typeof input === "object" && typeof input.name === "string") return { name: input.name };\n  return { name: "" };\n}`,
    tests: [{ input: ["John"], expected: '{"name":"John"}' }],
    hints: ["typeof se type check karo", "Har format ko ek common format me convert karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-49",
    title: "Switch se state machine implement karo",
    starterCode: `function stateMachine(state, action) {\n  // TODO: idle/loading/success/error\n  // FETCH->loading, SUCCESS->success, ERROR->error, RESET->idle\n}`,
    solution: `function stateMachine(state, action) {\n  if (action === "RESET") return "idle";\n  switch (state) {\n    case "idle": return action === "FETCH" ? "loading" : state;\n    case "loading": return action === "SUCCESS" ? "success" : action === "ERROR" ? "error" : state;\n    default: return state;\n  }\n}`,
    tests: [{ input: ["idle", "FETCH"], expected: "loading" }],
    hints: ["Pehle RESET check karo — wo kisi bhi state se idle me jata hai", "Switch se current state handle karo"]
  });

  exercises.push({
    id: "04-01-if-else-switch-50",
    title: "Comprehensive permission system banao",
    starterCode: `function checkPermission(user, resource, action) {\n  // TODO: admin->sab, editor->read/write/delete(own), viewer->read\n}`,
    solution: `function checkPermission(user, resource, action) {\n  if (!user || !user.role) return "No user";\n  if (action === "admin" && user.role !== "admin") return "Admin only";\n  switch (user.role) {\n    case "admin": return "granted";\n    case "editor":\n      if (action === "read" || action === "write") return "granted";\n      if (action === "delete" && user.id === resource.ownerId) return "granted";\n      return "denied";\n    case "viewer":\n      if (action === "read") return "granted";\n      return "denied";\n    default: return "denied";\n  }\n}`,
    tests: [{ input: [{role:"admin"}, {}, "delete"], expected: "granted" }],
    hints: ["Pehle admin check karo — sab kuch allowed", "Editor ke liye delete sirf own resource pe allowed"]
  });

  return exercises;
}

function generateEarlyReturn() {
  const exercises = [];

  exercises.push({
    id: "04-02-early-return-01",
    title: "Guard clause se validate karo ki params hain",
    starterCode: `function add(a, b) {\n  // TODO: guard clause — a aur b numbers hone chahiye\n}`,
    solution: `function add(a, b) {\n  if (typeof a !== "number") throw new TypeError("a must be a number");\n  if (typeof b !== "number") throw new TypeError("b must be a number");\n  return a + b;\n}`,
    tests: [{ input: [2, 3], expected: 5 }],
    hints: ["typeof se type check karo", "Early return se nesting avoid hoti hai"]
  });

  exercises.push({
    id: "04-02-early-return-02",
    title: "Deeply nested code ko flatten karo",
    starterCode: `function processUser(user) {\n  // TODO: nested if ko guard clauses se flatten karo\n  // if (user) { if (user.active) { if (user.verified) { return "ok" } } }\n}`,
    solution: `function processUser(user) {\n  if (!user) return "No user";\n  if (!user.active) return "Inactive";\n  if (!user.verified) return "Unverified";\n  return "ok";\n}`,
    tests: [{ input: [{active:true,verified:true}], expected: "ok" }],
    hints: ["Pehle sab negative cases handle karo", "Har case ke liye early return karo"]
  });

  exercises.push({
    id: "04-02-early-return-03",
    title: "Function ko early return se simplify karo",
    starterCode: `function getDiscount(price, isMember, isStudent) {\n  // TODO: price<=0 -> 0\n  // member+student: 30%, member: 20%, student: 10%, else: 0%\n}`,
    solution: `function getDiscount(price, isMember, isStudent) {\n  if (price <= 0) return 0;\n  if (isMember && isStudent) return price * 0.3;\n  if (isMember) return price * 0.2;\n  if (isStudent) return price * 0.1;\n  return 0;\n}`,
    tests: [{ input: [100, true, true], expected: 30 }],
    hints: ["Guard clause pehle invalid input handle kare", "Specific conditions pehle check karo"]
  });

  exercises.push({
    id: "04-02-early-return-04",
    title: "Nested if-else ko early return se refactor karo",
    starterCode: `function calculateShipping(weight, express) {\n  // TODO: weight<0->invalid, <=1->5/15, <=5->10/25, else->15/35\n}`,
    solution: `function calculateShipping(weight, express) {\n  if (weight < 0) return "Invalid weight";\n  if (weight <= 1) return express ? 15 : 5;\n  if (weight <= 5) return express ? 25 : 10;\n  return express ? 35 : 15;\n}`,
    tests: [{ input: [3, false], expected: 10 }],
    hints: ["Guard clause pehle error handle kare", "Ternary se express option handle karo"]
  });

  exercises.push({
    id: "04-02-early-return-05",
    title: "Guard clause se safe property access karo",
    starterCode: `function getUserName(user) {\n  // TODO: user exist, name exist, name string hai toh return karo\n}`,
    solution: `function getUserName(user) {\n  if (!user) return "Unknown";\n  if (typeof user.name !== "string") return "Unknown";\n  return user.name;\n}`,
    tests: [{ input: [{name:"John"}], expected: "John" }],
    hints: ["typeof se type check karo", "Har invalid case ke liye early return karo"]
  });

  exercises.push({
    id: "04-02-early-return-06",
    title: "Function me early return se default handling karo",
    starterCode: `function greet(name) {\n  // TODO: name hai toh "Hello, {name}!", nahi toh "Hello, Guest!"\n}`,
    solution: `function greet(name) {\n  if (!name) return "Hello, Guest!";\n  return "Hello, " + name + "!";\n}`,
    tests: [{ input: ["John"], expected: "Hello, John!" }],
    hints: ["Pehle null/undefined check karo", "Early return se main logic clean rahega"]
  });

  exercises.push({
    id: "04-02-early-return-07",
    title: "Guard clause se array element access safe banao",
    starterCode: `function getElement(arr, index) {\n  // TODO: arr valid, index in range toh element do\n}`,
    solution: `function getElement(arr, index) {\n  if (!arr || !Array.isArray(arr)) return undefined;\n  if (index < 0 || index >= arr.length) return undefined;\n  return arr[index];\n}`,
    tests: [{ input: [[10,20,30], 1], expected: 20 }],
    hints: ["Array.isArray se check karo", "Index range check karo"]
  });

  exercises.push({
    id: "04-02-early-return-08",
    title: "Nested ternary ko early return se replace karo",
    starterCode: `function getRole(user) {\n  // TODO: admin->"admin", editor->"editor", viewer->"viewer", else->"guest"\n  // Guard clauses use karo\n}`,
    solution: `function getRole(user) {\n  if (!user) return "guest";\n  if (user.role === "admin") return "admin";\n  if (user.role === "editor") return "editor";\n  if (user.role === "viewer") return "viewer";\n  return "guest";\n}`,
    tests: [{ input: [{role:"admin"}], expected: "admin" }],
    hints: ["Pehle null check karo", "Fir role ke hisaab se check karo"]
  });

  exercises.push({
    id: "04-02-early-return-09",
    title: "Guard clause se form validator banao with early returns",
    starterCode: `function validate(data) {\n  // TODO: data object hai, name hai, age number hai, age >= 18\n}`,
    solution: `function validate(data) {\n  if (!data || typeof data !== "object") return "Invalid data";\n  if (!data.name || data.name.length < 1) return "Name required";\n  if (typeof data.age !== "number") return "Age must be a number";\n  if (data.age < 18) return "Must be 18+";\n  return "Valid";\n}`,
    tests: [{ input: [{name:"John",age:25}], expected: "Valid" }],
    hints: ["Har validation ke liye early return karo", "Pehle type check, fir value check"]
  });

  exercises.push({
    id: "04-02-early-return-10",
    title: "Function me early return se error handling karo",
    starterCode: `function divide(a, b) {\n  // TODO: b===0 ho toh "Cannot divide by zero", warna a/b\n}`,
    solution: `function divide(a, b) {\n  if (b === 0) return "Cannot divide by zero";\n  return a / b;\n}`,
    tests: [{ input: [10, 2], expected: 5 }],
    hints: ["Edge case pehle handle karo", "Normal case baad me"]
  });

  exercises.push({
    id: "04-02-early-return-11",
    title: "Guard clause se API data processor banao",
    starterCode: `function processApiData(response) {\n  // TODO: response exist, status 200, data array hai toh process karo\n}`,
    solution: `function processApiData(response) {\n  if (!response) return null;\n  if (response.status !== 200) return null;\n  if (!Array.isArray(response.data)) return null;\n  return response.data.map(item => item.name || "Unknown");\n}`,
    tests: [{ input: [{status:200,data:[{name:"John"}]}], expected: "John" }],
    hints: ["Har check ke liye early return", "Status 200 check karo strictly"]
  });

  exercises.push({
    id: "04-02-early-return-12",
    title: "Deeply nested callback hell ko flatten karo",
    starterCode: `function processItem(item) {\n  // TODO: item exist, item.valid, item.value > 0 toh process\n}`,
    solution: `function processItem(item) {\n  if (!item) return "No item";\n  if (!item.valid) return "Invalid item";\n  if (item.value <= 0) return "Invalid value";\n  return item.value * 2;\n}`,
    tests: [{ input: [{valid:true,value:5}], expected: 10 }],
    hints: ["Guard clauses se flat code banao", "Har condition ke liye early return karo"]
  });

  exercises.push({
    id: "04-02-early-return-13",
    title: "Guard clause se date validator banao",
    starterCode: `function isValidDate(str) {\n  // TODO: string format "YYYY-MM-DD" hai check karo\n}`,
    solution: `function isValidDate(str) {\n  if (typeof str !== "string") return false;\n  const match = str.match(/^\\d{4}-\\d{2}-\\d{2}$/);\n  if (!match) return false;\n  const date = new Date(str);\n  return !isNaN(date.getTime());\n}`,
    tests: [{ input: ["2024-01-15"], expected: "true" }],
    hints: ["Regex se format check karo", "Date constructor se valid date check karo"]
  });

  exercises.push({
    id: "04-02-early-return-14",
    title: "Function me early return se optional chaining implement karo",
    starterCode: `function getStreet(user) {\n  // TODO: user->address->street safely access karo without ?.\n}`,
    solution: `function getStreet(user) {\n  if (!user) return undefined;\n  if (!user.address) return undefined;\n  return user.address.street;\n}`,
    tests: [{ input: [{address:{street:"Main St"}}], expected: "Main St" }],
    hints: ["Har level pe null check karo", "Early return se safe access hota hai"]
  });

  exercises.push({
    id: "04-02-early-return-15",
    title: "Guard clause se calculator input validate karo",
    starterCode: `function calc(a, op, b) {\n  // TODO: a number, op valid operator, b number\n}`,
    solution: `function calc(a, op, b) {\n  if (typeof a !== "number") return "Invalid first number";\n  if (typeof b !== "number") return "Invalid second number";\n  if (!["+","-","*","/"].includes(op)) return "Invalid operator";\n  if (op === "/" && b === 0) return "Cannot divide by zero";\n  switch (op) {\n    case "+": return a + b;\n    case "-": return a - b;\n    case "*": return a * b;\n    case "/": return a / b;\n  }\n}`,
    tests: [{ input: [5, "+", 3], expected: 8 }],
    hints: ["Pehle type checks, fir operator validation", "Division by zero bhi handle karo"]
  });

  exercises.push({
    id: "04-02-early-return-16",
    title: "Guard clause se user session handler banao",
    starterCode: `function getSession(user) {\n  // TODO: user exist, active, session exist toh session do\n}`,
    solution: `function getSession(user) {\n  if (!user) return null;\n  if (!user.active) return null;\n  if (!user.session) return null;\n  return user.session;\n}`,
    tests: [{ input: [{active:true,session:{id:1}}], expected: '{"id":1}' }],
    hints: ["Har property ke liye guard clause", "Null cases pehle handle karo"]
  });

  exercises.push({
    id: "04-02-early-return-17",
    title: "Function ko early return se clean karo — login flow",
    starterCode: `function login(email, password) {\n  // TODO: email exist, password exist, credentials valid toh token do\n}`,
    solution: `function login(email, password) {\n  if (!email) return "Email required";\n  if (!password) return "Password required";\n  if (email !== "admin@test.com" || password !== "1234") return "Invalid credentials";\n  return { token: "abc123" };\n}`,
    tests: [{ input: ["admin@test.com", "1234"], expected: '{"token":"abc123"}' }],
    hints: ["Pehle required fields check karo", "Fir credentials validate karo"]
  });

  exercises.push({
    id: "04-02-early-return-18",
    title: "Guard clause se array mein safe operation karo",
    starterCode: `function sumArray(arr) {\n  // TODO: arr valid, non-empty, sab numbers hain toh sum do\n}`,
    solution: `function sumArray(arr) {\n  if (!arr || !Array.isArray(arr)) return 0;\n  if (arr.length === 0) return 0;\n  if (!arr.every(n => typeof n === "number")) return 0;\n  return arr.reduce((sum, n) => sum + n, 0);\n}`,
    tests: [{ input: [[1,2,3]], expected: 6 }],
    hints: ["Array.isArray se check karo", "Every se type validate karo"]
  });

  exercises.push({
    id: "04-02-early-return-19",
    title: "Nested conditionals ko guard clause se refactor karo",
    starterCode: `function getStatus(order) {\n  // TODO: order exist, paid, shipped, delivered ke hisaab se status\n}`,
    solution: `function getStatus(order) {\n  if (!order) return "No order";\n  if (!order.paid) return "Pending payment";\n  if (!order.shipped) return "Processing";\n  if (!order.delivered) return "Shipped";\n  return "Delivered";\n}`,
    tests: [{ input: [{paid:true,shipped:true,delivered:true}], expected: "Delivered" }],
    hints: ["Har state ke liye early return", "Order of checks important hai"]
  });

  exercises.push({
    id: "04-02-early-return-20",
    title: "Guard clause se string processing safe banao",
    starterCode: `function processString(str) {\n  // TODO: str exist, string hai, empty nahi hai toh uppercase return karo\n}`,
    solution: `function processString(str) {\n  if (typeof str !== "string") return "";\n  if (str.length === 0) return "";\n  return str.toUpperCase();\n}`,
    tests: [{ input: ["hello"], expected: "HELLO" }],
    hints: ["typeof se type check karo", "Length check karo baad me"]
  });

  exercises.push({
    id: "04-02-early-return-21",
    title: "Guard clause se data fetcher handler banao",
    starterCode: `function fetchData(url, options) {\n  // TODO: url exist, string hai, options object hai toh proceed\n}`,
    solution: `function fetchData(url, options) {\n  if (!url || typeof url !== "string") return "Invalid URL";\n  if (!options || typeof options !== "object") return "Invalid options";\n  return { url, options, status: "fetching" };\n}`,
    tests: [{ input: ["https://api.com", {}], expected: '{"url":"https://api.com","options":{},"status":"fetching"}' }],
    hints: ["URL type check karo pehle", "Options type check karo baad me"]
  });

  exercises.push({
    id: "04-02-early-return-22",
    title: "Function me early return se input sanitization karo",
    starterCode: `function sanitize(input) {\n  // TODO: string hai toh trim aur lowercase karo, nahi toh empty string\n}`,
    solution: `function sanitize(input) {\n  if (typeof input !== "string") return "";\n  return input.trim().toLowerCase();\n}`,
    tests: [{ input: ["  Hello  "], expected: "hello" }],
    hints: ["typeof se type check karo", "String methods chain karo"]
  });

  exercises.push({
    id: "04-02-early-return-23",
    title: "Guard clause se array filter with validation banao",
    starterCode: `function filterValid(arr) {\n  // TODO: arr valid hai toh sirf numbers return karo\n  // Empty array ya invalid input -> []\n}`,
    solution: `function filterValid(arr) {\n  if (!arr || !Array.isArray(arr)) return [];\n  return arr.filter(item => typeof item === "number" && !isNaN(item));\n}`,
    tests: [{ input: [[1, "a", 2, null, 3]], expected: "1,2,3" }],
    hints: ["Array.isArray se check karo", "Filter se sirf valid numbers rakhlo"]
  });

  exercises.push({
    id: "04-02-early-return-24",
    title: "Guard clause se config validator banao",
    starterCode: `function validateConfig(config) {\n  // TODO: config object, port number, host string\n}`,
    solution: `function validateConfig(config) {\n  if (!config || typeof config !== "object") return "Invalid config";\n  if (typeof config.port !== "number") return "Port must be a number";\n  if (typeof config.host !== "string") return "Host must be a string";\n  return "Config is valid";\n}`,
    tests: [{ input: [{port:3000,host:"localhost"}], expected: "Config is valid" }],
    hints: ["Pehle config type check karo", "Har property ka type check karo"]
  });

  exercises.push({
    id: "04-02-early-return-25",
    title: "Function me early return se age restriction implement karo",
    starterCode: `function checkAge(age, action) {\n  // TODO: age 13+ -> social media, 18+ -> alcohol, 21+ -> gambling\n}`,
    solution: `function checkAge(age, action) {\n  if (typeof age !== "number" || age < 0) return "Invalid age";\n  if (action === "gambling" && age < 21) return "Must be 21+";\n  if (action === "alcohol" && age < 18) return "Must be 18+";\n  if (action === "social" && age < 13) return "Must be 13+";\n  return "Allowed";\n}`,
    tests: [{ input: [25, "gambling"], expected: "Allowed" }],
    hints: ["Age type check karo pehle", "Action ke hisaab se specific age check karo"]
  });

  exercises.push({
    id: "04-02-early-return-26",
    title: "Guard clause se database query builder safe banao",
    starterCode: `function buildQuery(table, conditions) {\n  // TODO: table string hai, conditions object hai toh query banao\n}`,
    solution: `function buildQuery(table, conditions) {\n  if (!table || typeof table !== "string") return null;\n  if (!conditions || typeof conditions !== "object") return null;\n  const where = Object.entries(conditions).map(([k, v]) => `${k} = '${v}'`).join(" AND ");\n  return \`SELECT * FROM \${table} WHERE \${where}\`;\n}`,
    tests: [{ input: ["users", {name:"John"}], expected: "SELECT * FROM users WHERE name = 'John'" }],
    hints: ["Type checks pehle karo", "Object.entries se conditions nikalo"]
  });

  exercises.push({
    id: "04-02-early-return-27",
    title: "Nested ifs ko guard clause se flatten karo — banking",
    starterCode: `function transfer(from, to, amount) {\n  // TODO: from exist, to exist, amount>0, from balance sufficient\n}`,
    solution: `function transfer(from, to, amount) {\n  if (!from || !to) return "Invalid accounts";\n  if (typeof amount !== "number" || amount <= 0) return "Invalid amount";\n  if (from.balance < amount) return "Insufficient funds";\n  return { success: true, newBalance: from.balance - amount };\n}`,
    tests: [{ input: [{balance:1000}, {balance:0}, 500], expected: '{"success":true,"newBalance":500}' }],
    hints: ["Pehle account validation, fir amount, fir balance check", "Guard clauses se nesting khatam hoti hai"]
  });

  exercises.push({
    id: "04-02-early-return-28",
    title: "Function me early return se email validation karo",
    starterCode: `function validateEmail(email) {\n  // TODO: string hai, empty nahi, @ hai, . hai toh valid\n}`,
    solution: `function validateEmail(email) {\n  if (typeof email !== "string") return false;\n  if (email.length < 5) return false;\n  if (!email.includes("@")) return false;\n  if (!email.includes(".")) return false;\n  const parts = email.split("@");\n  if (parts.length !== 2) return false;\n  if (parts[0].length === 0 || parts[1].length === 0) return false;\n  return true;\n}`,
    tests: [{ input: ["test@test.com"], expected: "true" }],
    hints: ["Pehle type check, fir length, fir @ aur . check", "Split se parts check karo"]
  });

  exercises.push({
    id: "04-02-early-return-29",
    title: "Guard clause se array utility functions safe banao",
    starterCode: `function flatten(arr) {\n  // TODO: arr valid aur non-empty hai toh flatten karo\n}`,
    solution: `function flatten(arr) {\n  if (!arr || !Array.isArray(arr)) return [];\n  if (arr.length === 0) return [];\n  return arr.flat();\n}`,
    tests: [{ input: [[1,[2,3],4]], expected: "1,2,3,4" }],
    hints: ["Array check karo pehle", "Empty array handle karo"]
  });

  exercises.push({
    id: "04-02-early-return-30",
    title: "Function me early return se error boundary pattern banao",
    starterCode: `function execute(fn) {\n  // TODO: fn function hai toh call karo, error aaye toh "Error"\n}`,
    solution: `function execute(fn) {\n  if (typeof fn !== "function") return "Not a function";\n  try {\n    return fn();\n  } catch (e) {\n    return "Error";\n  }\n}`,
    tests: [{ input: [() => 42], expected: 42 }],
    hints: ["typeof se function check karo", "Try-catch se error handle karo"]
  });

  exercises.push({
    id: "04-02-early-return-31",
    title: "Guard clause se request validator banao",
    starterCode: `function validateRequest(req) {\n  // TODO: req exist, method GET/POST, path string hai\n}`,
    solution: `function validateRequest(req) {\n  if (!req) return "No request";\n  if (!["GET","POST","PUT","DELETE"].includes(req.method)) return "Invalid method";\n  if (typeof req.path !== "string") return "Invalid path";\n  return "Valid request";\n}`,
    tests: [{ input: [{method:"GET",path:"/api"}], expected: "Valid request" }],
    hints: ["Method validation ke liye includes use karo", "Path type check karo"]
  });

  exercises.push({
    id: "04-02-early-return-32",
    title: "Function me early return se number parser banao",
    starterCode: `function parseNumber(value, defaultVal) {\n  // TODO: value number hai toh wo, string hai toh parse karo, warna default\n}`,
    solution: `function parseNumber(value, defaultVal) {\n  if (typeof value === "number") return value;\n  if (typeof value === "string") {\n    const num = Number(value);\n    return isNaN(num) ? defaultVal : num;\n  }\n  return defaultVal;\n}`,
    tests: [{ input: ["42", 0], expected: 42 }],
    hints: ["typeof se type check karo", "Number() se convert karo, NaN check karo"]
  });

  exercises.push({
    id: "04-02-early-return-33",
    title: "Guard clause se array mein safe search karo",
    starterCode: `function findItem(arr, predicate) {\n  // TODO: arr valid hai toh predicate se item dhundho\n}`,
    solution: `function findItem(arr, predicate) {\n  if (!arr || !Array.isArray(arr)) return undefined;\n  if (typeof predicate !== "function") return undefined;\n  return arr.find(predicate);\n}`,
    tests: [{ input: [[1,2,3], n => n > 2], expected: 3 }],
    hints: ["Array check karo pehle", "Predicate type check karo"]
  });

  exercises.push({
    id: "04-02-early-return-34",
    title: "Function me early return se URL builder banao",
    starterCode: `function buildUrl(base, params) {\n  // TODO: base string hai, params object hai toh URL banao\n}`,
    solution: `function buildUrl(base, params) {\n  if (!base || typeof base !== "string") return "";\n  if (!params || typeof params !== "object") return base;\n  const query = Object.entries(params)\n    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)\n    .join("&");\n  return base + "?" + query;\n}`,
    tests: [{ input: ["https://api.com", {q:"hello"}], expected: "https://api.com?q=hello" }],
    hints: ["Base type check karo pehle", "Params se query string banao"]
  });

  exercises.push({
    id: "04-02-early-return-35",
    title: "Guard clause se simple cache implement karo",
    starterCode: `const cache = {};\nfunction getCached(key) {\n  // TODO: key exist karta hai toh value return karo, nahi toh undefined\n}`,
    solution: `const cache = {};\nfunction getCached(key) {\n  if (!key || typeof key !== "string") return undefined;\n  if (!(key in cache)) return undefined;\n  return cache[key];\n}`,
    tests: [{ input: ["test"], expected: "undefined" }],
    hints: ["Key type check karo", "in operator se existence check karo"]
  });

  exercises.push({
    id: "04-02-early-return-36",
    title: "Nested ifs ko early return se refactor karo — E-commerce",
    starterCode: `function checkout(cart, user) {\n  // TODO: cart exist, non-empty, user exist, user.active\n}`,
    solution: `function checkout(cart, user) {\n  if (!cart || !Array.isArray(cart)) return "Invalid cart";\n  if (cart.length === 0) return "Cart is empty";\n  if (!user) return "No user";\n  if (!user.active) return "User inactive";\n  const total = cart.reduce((sum, item) => sum + item.price, 0);\n  return { total, status: "success" };\n}`,
    tests: [{ input: [[{price:100}], {active:true}], expected: '{"total":100,"status":"success"}' }],
    hints: ["Cart validation pehle, fir user validation", "Guard clauses se flat code banao"]
  });

  exercises.push({
    id: "04-02-early-return-37",
    title: "Guard clause se middleware pattern — logging banao",
    starterCode: `function logRequest(req) {\n  // TODO: req exist, method hai, path hai toh log karo\n}`,
    solution: `function logRequest(req) {\n  if (!req) return "No request";\n  if (!req.method) return "No method";\n  if (!req.path) return "No path";\n  return `[LOG] ${req.method} ${req.path}`;\n}`,
    tests: [{ input: [{method:"GET",path:"/api"}], expected: "[LOG] GET /api" }],
    hints: ["Har property ke liye guard clause", "Template literal se message banao"]
  });

  exercises.push({
    id: "04-02-early-return-38",
    title: "Function me early return se safe JSON parse karo",
    starterCode: `function safeJsonParse(str) {\n  // TODO: string valid JSON hai toh parse karo, warna null\n}`,
    solution: `function safeJsonParse(str) {\n  if (typeof str !== "string") return null;\n  try {\n    return JSON.parse(str);\n  } catch (e) {\n    return null;\n  }\n}`,
    tests: [{ input: ['{"a":1}'], expected: '{"a":1}' }],
    hints: ["typeof se type check karo", "Try-catch se parse error handle karo"]
  });

  exercises.push({
    id: "04-02-early-return-39",
    title: "Guard clause se file handler safe banao",
    starterCode: `function readFile(file) {\n  // TODO: file exist, name hai, size > 0 hai toh read karo\n}`,
    solution: `function readFile(file) {\n  if (!file) return "No file";\n  if (!file.name) return "No file name";\n  if (file.size <= 0) return "Empty file";\n  return { content: "file content of " + file.name };\n}`,
    tests: [{ input: [{name:"test.txt",size:100}], expected: '{"content":"file content of test.txt"}' }],
    hints: ["Har check ke liye early return", "File properties validate karo"]
  });

  exercises.push({
    id: "04-02-early-return-40",
    title: "Function me early return se simple router banao",
    starterCode: `function route(path) {\n  // TODO: "/"->home, "/about"->about, "/contact"->contact\n  // else->404\n}`,
    solution: `function route(path) {\n  if (path === "/") return "home";\n  if (path === "/about") return "about";\n  if (path === "/contact") return "contact";\n  return "404";\n}`,
    tests: [{ input: ["/about"], expected: "about" }],
    hints: ["Exact match ke liye === use karo", "Default case 404 return karo"]
  });

  exercises.push({
    id: "04-02-early-return-41",
    title: "Guard clause se data migration validator banao",
    starterCode: `function validateMigration(data) {\n  // TODO: data array hai, har item me id aur name hai\n}`,
    solution: `function validateMigration(data) {\n  if (!data || !Array.isArray(data)) return "Invalid data";\n  if (data.length === 0) return "Empty data";\n  for (const item of data) {\n    if (!item.id) return "Missing id";\n    if (!item.name) return "Missing name";\n  }\n  return "Data is valid";\n}`,
    tests: [{ input: [{id:1,name:"John"}], expected: "Invalid data" }],
    hints: ["Array check karo pehle", "Har item ke properties check karo loop me"]
  });

  exercises.push({
    id: "04-02-early-return-42",
    title: "Function me early return se currency converter banao",
    starterCode: `function convert(amount, rate) {\n  // TODO: amount>0, rate>0 hai toh converted amount do\n}`,
    solution: `function convert(amount, rate) {\n  if (typeof amount !== "number" || amount <= 0) return 0;\n  if (typeof rate !== "number" || rate <= 0) return 0;\n  return amount * rate;\n}`,
    tests: [{ input: [100, 1.2], expected: 120 }],
    hints: ["Dono inputs validate karo", "Multiplication se convert karo"]
  });

  exercises.push({
    id: "04-02-early-return-43",
    title: "Guard clause se authentication middleware banao",
    starterCode: `function auth(req) {\n  // TODO: req exist, headers exist, token hai toh authenticate karo\n}`,
    solution: `function auth(req) {\n  if (!req) return "No request";\n  if (!req.headers) return "No headers";\n  if (!req.headers.token) return "No token";\n  if (req.headers.token.length < 10) return "Invalid token";\n  return { authenticated: true };\n}`,
    tests: [{ input: [{headers:{token:"validtoken123"}}], expected: '{"authenticated":true}' }],
    hints: ["Har level pe null check karo", "Token length check bhi karo"]
  });

  exercises.push({
    id: "04-02-early-return-44",
    title: "Function me early return se array intersection nikalo",
    starterCode: `function intersection(arr1, arr2) {\n  // TODO: dono arrays valid hain toh common elements do\n}`,
    solution: `function intersection(arr1, arr2) {\n  if (!arr1 || !Array.isArray(arr1)) return [];\n  if (!arr2 || !Array.isArray(arr2)) return [];\n  return arr1.filter(item => arr2.includes(item));\n}`,
    tests: [{ input: [[1,2,3], [2,3,4]], expected: "2,3" }],
    hints: ["Dono arrays validate karo", "Filter aur includes use karo"]
  });

  exercises.push({
    id: "04-02-early-return-45",
    title: "Guard clause se response handler — nested data access",
    starterCode: `function getFirstItem(data) {\n  // TODO: data exist, data.items array hai, non-empty toh pehla item do\n}`,
    solution: `function getFirstItem(data) {\n  if (!data) return null;\n  if (!data.items || !Array.isArray(data.items)) return null;\n  if (data.items.length === 0) return null;\n  return data.items[0];\n}`,
    tests: [{ input: [{items:[{id:1}]}], expected: '{"id":1}' }],
    hints: ["Har level pe check karo", "Array.isArray aur length check karo"]
  });

  exercises.push({
    id: "04-02-early-return-46",
    title: "Function me early return se discount calculator banao",
    starterCode: `function calculateDiscount(price, coupon) {\n  // TODO: price>0, coupon valid hai toh discount do\n}`,
    solution: `function calculateDiscount(price, coupon) {\n  if (typeof price !== "number" || price <= 0) return 0;\n  if (!coupon || typeof coupon !== "object") return 0;\n  if (coupon.expired) return 0;\n  if (price < coupon.minAmount) return 0;\n  return price * (coupon.discount / 100);\n}`,
    tests: [{ input: [100, {discount:10,minAmount:50}], expected: 10 }],
    hints: ["Price validation pehle", "Coupon properties check karo"]
  });

  exercises.push({
    id: "04-02-early-return-47",
    title: "Guard clause se nested object access safe banao",
    starterCode: `function getCompanyCity(user) {\n  // TODO: user->company->address->city safely access karo\n}`,
    solution: `function getCompanyCity(user) {\n  if (!user) return "Unknown";\n  if (!user.company) return "Unknown";\n  if (!user.company.address) return "Unknown";\n  return user.company.address.city || "Unknown";\n}`,
    tests: [{ input: [{company:{address:{city:"Mumbai"}}}], expected: "Mumbai" }],
    hints: ["Har level pe null check karo", "Default value do last me"]
  });

  exercises.push({
    id: "04-02-early-return-48",
    title: "Function me early return se task scheduler banao",
    starterCode: `function schedule(task, time) {\n  // TODO: task string hai, time future hai toh schedule karo\n}`,
    solution: `function schedule(task, time) {\n  if (!task || typeof task !== "string") return "Invalid task";\n  if (!time || !(time instanceof Date)) return "Invalid time";\n  if (time <= new Date()) return "Time must be in future";\n  return { scheduled: true, task, time };\n}`,
    tests: [{ input: ["meeting", new Date("2099-01-01")], expected: '{"scheduled":true,"task":"meeting"}' }],
    hints: ["Task type check karo", "Time Date instance hai aur future hai check karo"]
  });

  exercises.push({
    id: "04-02-early-return-49",
    title: "Guard clause se array mein safe reduce karo",
    starterCode: `function safeReduce(arr, fn, initial) {\n  // TODO: arr valid, fn function hai toh reduce karo\n}`,
    solution: `function safeReduce(arr, fn, initial) {\n  if (!arr || !Array.isArray(arr)) return initial;\n  if (typeof fn !== "function") return initial;\n  return arr.reduce(fn, initial);\n}`,
    tests: [{ input: [[1,2,3], (a,b)=>a+b, 0], expected: 6 }],
    hints: ["Array aur function dono check karo", "Initial value always return karo agar error ho"]
  });

  exercises.push({
    id: "04-02-early-return-50",
    title: "Comprehensive guard clause pattern — API endpoint handler",
    starterCode: `function handleEndpoint(req) {\n  // TODO: req exist, method valid, path valid, body exist (POST ke liye)\n}`,
    solution: `function handleEndpoint(req) {\n  if (!req) return { status: 400, body: "No request" };\n  if (!req.method) return { status: 400, body: "No method" };\n  if (!req.path) return { status: 400, body: "No path" };\n  if (req.method === "POST" && !req.body) return { status: 400, body: "Body required for POST" };\n  return { status: 200, body: "OK" };\n}`,
    tests: [{ input: [{method:"GET",path:"/api"}], expected: '{"status":200,"body":"OK"}' }],
    hints: ["HTTP method ke hisaab se validation alag ho sakti hai", "Response format consistent rakho"]
  });

  return exercises;
}

const lessonGenerators = [
  { slug: "if-else-switch", generator: generateIfElseSwitch },
  { slug: "early-return", generator: generateEarlyReturn },
];

for (const { slug, generator } of lessonGenerators) {
  ensureDir(outputBase);
  const exercises = generator();
  console.log(`Generating ${exercises.length} exercises for lesson: ${slug}`);
  exercises.forEach((exercise, index) => {
    const num = String(index + 1).padStart(2, "0");
    const filename = `${slug}-${num}.json`;
    writeExercise(path.join(outputBase, filename), exercise);
  });
}

console.log("Module 04 exercises generated successfully!");
