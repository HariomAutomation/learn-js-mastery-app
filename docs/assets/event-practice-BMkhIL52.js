const a="11-events-event-practice",o="Form validation practice — input check karo",s=`// Form validation simulation

// 1. Email validate karo
function isValidEmail(email) {
  // email mein @ hona chahiye aur . hona chahiye
}
console.log(isValidEmail("test@gmail.com")) // true
console.log(isValidEmail("invalid")) // false
console.log(isValidEmail("no@dotcom")) // false

// 2. Password validate karo — min 8 chars, ek number hona chahiye
function isValidPassword(password) {
  // your code here
}
console.log(isValidPassword("hello123")) // true
console.log(isValidPassword("short")) // false
console.log(isValidPassword("nonumbers")) // false

// 3. Form data validate karo
function validateForm(data) {
  const errors = []n  // name, email, password check karo
  // errors array mein messages add karo agar validation fail ho
  return errors
}

const result1 = validateForm({ name: "Rahul", email: "rahul@test.com", password: "pass1234" })
console.log(result1) // []

const result2 = validateForm({ name: "", email: "bad", password: "123" })
console.log(result2) // ["Name required", "Invalid email", "Password too short"]`,n=`function isValidEmail(email) {
  return email.includes("@") && email.includes(".")
}
console.log(isValidEmail("test@gmail.com"))
console.log(isValidEmail("invalid"))
console.log(isValidEmail("no@dotcom"))

function isValidPassword(password) {
  return password.length >= 8 && /\\d/.test(password)
}
console.log(isValidPassword("hello123"))
console.log(isValidPassword("short"))
console.log(isValidPassword("nonumbers"))

function validateForm(data) {
  const errors = []
  if (!data.name) errors.push("Name required")
  if (!data.email || !data.email.includes("@") || !data.email.includes(".")) errors.push("Invalid email")
  if (!data.password || data.password.length < 8) errors.push("Password too short")
  return errors
}

const result1 = validateForm({ name: "Rahul", email: "rahul@test.com", password: "pass1234" })
console.log(result1)
const result2 = validateForm({ name: "", email: "bad", password: "123" })
console.log(result2)`,e=[{input:[],expected:`true
false
false
true
false
false
[]
["Name required", "Invalid email", "Password too short"]`}],l=["Email validation: @ aur . dono hona chahiye — includes() use karo","Password: .length >= 8 aur /\\d/.test() se number check karo","Form validation: har field check karo, errors array mein messages daalo"],i={id:a,title:o,starterCode:s,solution:n,tests:e,hints:l};export{i as default,l as hints,a as id,n as solution,s as starterCode,e as tests,o as title};
