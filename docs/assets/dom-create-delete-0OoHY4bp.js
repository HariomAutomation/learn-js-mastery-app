const e="10-dom-dom-create-delete",t="DOM list operations — add, remove, filter",o=`// DOM list simulation — array as DOM list treat karo
let todoList = ["Buy groceries", "Clean house", "Study JS"]

// 1. Naya item add karo (end mein)
todoList.push("Exercise")
console.log(todoList) // ["Buy groceries", "Clean house", "Study JS", "Exercise"]

// 2. Pehla item remove karo (shift)
todoList.shift()
console.log(todoList) // ["Clean house", "Study JS", "Exercise"]

// 3. "Study JS" ko delete karo — index dhundho aur splice karo
const idx = todoList.indexOf("Study JS")
todoList.splice(idx, 1)
console.log(todoList) // ["Clean house", "Exercise"]

// 4. Items ko sort karo alphabetically
todoList.sort()
console.log(todoList) // __BLANK__

// 5. Filter — sirf 5+ chars wale items rakho
const filtered = todoList.filter(item => // your code here)
console.log(filtered) // __BLANK__

// 6. Total items count karo
todoList.push("Meditate")
console.log(todoList.length) // __BLANK__`,s=`let todoList = ["Buy groceries", "Clean house", "Study JS"]
todoList.push("Exercise")
console.log(todoList)
todoList.shift()
console.log(todoList)
const idx = todoList.indexOf("Study JS")
todoList.splice(idx, 1)
console.log(todoList)
todoList.sort()
console.log(todoList)
const filtered = todoList.filter(item => item.length > 5)
console.log(filtered)
todoList.push("Meditate")
console.log(todoList.length)`,i=[{input:[],expected:`["Buy groceries", "Clean house", "Study JS", "Exercise"]
["Clean house", "Study JS", "Exercise"]
["Clean house", "Exercise"]
["Clean house", "Exercise"]
["Clean house"]
3`}],n=["push() end mein add, shift() shuru se remove — DOM list mein jaise items aate jaate hain","splice(index, 1) se specific item delete hota hai","filter() se sirf matching items rehte hain — jaise DOM se elements filter karte ho"],l={id:e,title:t,starterCode:o,solution:s,tests:i,hints:n};export{l as default,n as hints,e as id,s as solution,o as starterCode,i as tests,t as title};
