const n="13-oop-oop-patterns-07",s="Pub/Sub",t=`class PubSub {
  constructor() { this.channels = {}; }
  subscribe(ch, fn) {
    (this.channels[ch] = this.channels[ch] || []).push(fn);
  }
  publish(ch, data) {
    (this.channels[ch] || []).forEach(fn => fn(data));
  }
}
const ps = new PubSub();
ps.subscribe('news', (d) => console.log(d));
ps.publish('news', 'breaking');`,c=`class PubSub {
  constructor() { this.channels = {}; }
  subscribe(ch, fn) {
    (this.channels[ch] = this.channels[ch] || []).push(fn);
  }
  publish(ch, data) {
    (this.channels[ch] || []).forEach(fn => fn(data));
  }
}
const ps = new PubSub();
ps.subscribe('news', (d) => console.log(d));
ps.publish('news', 'breaking');`,e=[{input:[],expected:"breaking"}],h=["Channels group subscribers","publish notifies all in channel"],o={id:n,title:s,starterCode:t,solution:c,tests:e,hints:h};export{o as default,h as hints,n as id,c as solution,t as starterCode,e as tests,s as title};
