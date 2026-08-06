const e="10-dom-dom-selectors",t="DOM selectors samjho — element dhoondna",n=`// DOM simulation — HTML elements ko string se represent karo
const html = '<div class="container"><p id="greeting">Hello</p><p class="text">World</p></div>'

// 1. Class based selector — .text wala paragraph dhundho
// simulate: html mein se class="text" wala tag nikalo
const allParagraphs = // html se saare <p> tags nikalo (regex ya string methods)
console.log(allParagraphs) // ["<p id=\\"greeting\\">Hello</p>", "<p class=\\"text\\">World</p>"]

// 2. ID based selector — #greeting wala element dhundho
const greetingEl = // html mein se id="greeting" wala element nikalo
console.log(greetingEl) // "<p id=\\"greeting\\">Hello</p>"

// 3. textContent nikalo — greeting element ka text
const text = // greetingEl ke andar ka text nikalo (Hello)
console.log(text) // "Hello"`,l=`const html = '<div class="container"><p id="greeting">Hello</p><p class="text">World</p></div>'
const allParagraphs = html.match(/<p[^>]*>[^<]*<\\/p>/g)
console.log(allParagraphs)
const greetingEl = html.match(/<p id="greeting">[^<]*<\\/p>/)[0]
console.log(greetingEl)
const text = greetingEl.replace(/<[^>]*>/g, "")
console.log(text)`,o=[{input:[],expected:`["<p id=\\"greeting\\">Hello</p>", "<p class=\\"text\\">World</p>"]
<p id="greeting">Hello</p>
Hello`}],s=["Regex se tags dhundho: /<p[^>]*>[^<]*<\\/p>/g — saare <p> tags match honge",'ID selector: id="greeting" wala specific pattern match karo','Text content nikalne ke liye <tags> hatao — replace(/<[^>]*>/g, "")'],a={id:e,title:t,starterCode:n,solution:l,tests:o,hints:s};export{a as default,s as hints,e as id,l as solution,n as starterCode,o as tests,t as title};
