const t="11-events-event-delegation",e="Event delegation — parent pe event handle karo",n=`// Event delegation simulation — parent pe event handle karo

// 1. List items mein se sirf <li> pe click handle karo
const elements = [
  { tag: "div", text: "Header" },
  { tag: "li", text: "Item 1" },
  { tag: "li", text: "Item 2" },
  { tag: "span", text: "Footer" },
  { tag: "li", text: "Item 3" }
]

// sirf li elements ko click karo (simulate)
const clickedItems = elements
  .filter(el => // your code here
  .map(el => el.text)
console.log(clickedItems) // ["Item 1", "Item 2", "Item 3"]

// 2. Data attribute se action dhundho
const buttons = [
  { tag: "button", action: "save", text: "Save" },
  { tag: "button", action: "delete", text: "Delete" },
  { tag: "button", action: "save", text: "Save Draft" },
  { tag: "button", action: "edit", text: "Edit" }
]

const saveButtons = buttons.filter(btn => // action === "save"
console.log(saveButtons.map(b => b.text)) // ["Save", "Save Draft"]

// 3. Event target dhundho — kis element pe event hua
const event = { target: { id: "submit-btn", className: "primary" } }
const targetId = // event.target ka id nikalo
console.log(targetId) // "submit-btn"`,a=`const elements = [
  { tag: "div", text: "Header" },
  { tag: "li", text: "Item 1" },
  { tag: "li", text: "Item 2" },
  { tag: "span", text: "Footer" },
  { tag: "li", text: "Item 3" }
]
const clickedItems = elements
  .filter(el => el.tag === "li")
  .map(el => el.text)
console.log(clickedItems)

const buttons = [
  { tag: "button", action: "save", text: "Save" },
  { tag: "button", action: "delete", text: "Delete" },
  { tag: "button", action: "save", text: "Save Draft" },
  { tag: "button", action: "edit", text: "Edit" }
]
const saveButtons = buttons.filter(btn => btn.action === "save")
console.log(saveButtons.map(b => b.text))

const event = { target: { id: "submit-btn", className: "primary" } }
const targetId = event.target.id
console.log(targetId)`,o=[{input:[],expected:`["Item 1", "Item 2", "Item 3"]
["Save", "Save Draft"]
submit-btn`}],s=["Event delegation: parent pe event lagao, filter se sahi child dhundho",'Data attributes se action identify karo — jaise data-action="save"',"event.target se pata chalta hai ki exact kis element pe event hua"],i={id:t,title:e,starterCode:n,solution:a,tests:o,hints:s};export{i as default,s as hints,t as id,a as solution,n as starterCode,o as tests,e as title};
