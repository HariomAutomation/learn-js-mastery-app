const t="10-dom-dom-create-delete-32",e="Create from HTML String",n=`function htmlToElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
const el = htmlToElement('<p>Hello</p>');
console.log(el.tagName);`,l=`function htmlToElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
const el = htmlToElement('<p>Hello</p>');
console.log(el.tagName);`,o=[{input:[],expected:"P"}],m=["template element holds content","firstChild gets the element"],s={id:t,title:e,starterCode:n,solution:l,tests:o,hints:m};export{s as default,m as hints,t as id,l as solution,n as starterCode,o as tests,e as title};
