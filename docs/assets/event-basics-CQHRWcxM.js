const n="11-events-event-basics",e="Event handling basics — click, submit simulation",t=`// Event handling simulation — callback pattern samjho

// 1. Click event handler banao
let clickCount = 0
function handleClick() {
  clickCount++
  console.log(\`Clicked \${clickCount} times\`)
}

handleClick() // "Clicked 1 times"
handleClick() // "Clicked 2 times"
handleClick() // __BLANK__

// 2. Button disable karo (simulated)
let buttonDisabled = false
function toggleButton() {
  buttonDisabled = !buttonDisabled
  console.log(\`Button is now: \${buttonDisabled ? "disabled" : "enabled"}\`)
}

toggleButton() // __BLANK__
toggleButton() // __BLANK__

// 3. Event with data — form submit simulate karo
function handleSubmit(formData) {
  const { name, email } = formData
  if (!name || !email) {
    console.log("Error: Name and email required")
  } else {
    console.log(\`Submitted: \${name} - \${email}\`)
  }
}

handleSubmit({ name: "Rahul", email: "rahul@test.com" }) // __BLANK__
handleSubmit({ name: "", email: "" }) // __BLANK__`,l=`let clickCount = 0
function handleClick() {
  clickCount++
  console.log(\`Clicked \${clickCount} times\`)
}
handleClick()
handleClick()
console.log(\`Clicked \${clickCount} times\`)

let buttonDisabled = false
function toggleButton() {
  buttonDisabled = !buttonDisabled
  console.log(\`Button is now: \${buttonDisabled ? "disabled" : "enabled"}\`)
}
toggleButton()
toggleButton()

function handleSubmit(formData) {
  const { name, email } = formData
  if (!name || !email) {
    console.log("Error: Name and email required")
  } else {
    console.log(\`Submitted: \${name} - \${email}\`)
  }
}
handleSubmit({ name: "Rahul", email: "rahul@test.com" })
handleSubmit({ name: "", email: "" })`,a=[{input:[],expected:`Clicked 1 times
Clicked 2 times
Clicked 3 times
Button is now: disabled
Button is now: enabled
Submitted: Rahul - rahul@test.com
Error: Name and email required`}],i=["Event handler ek function hota hai jo event hone pe chalta hai","Toggle pattern: variable = !variable — true ko false aur false ko true karo","Form validation: check karo ki saari fields bhari hain ya nahi"],o={id:n,title:e,starterCode:t,solution:l,tests:a,hints:i};export{o as default,i as hints,n as id,l as solution,t as starterCode,a as tests,e as title};
