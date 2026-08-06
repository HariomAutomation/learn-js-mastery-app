const e="13-oop-oop-patterns-20",n="Chain of Responsibility",t=`class Handler {
  setNext(handler) { this.next = handler; return handler; }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}
class AuthHandler extends Handler {
  handle(request) {
    if (request.auth) return 'authenticated';
    return super.handle(request);
  }
}
const auth = new AuthHandler();
auth.setNext(new Handler());
console.log(auth.handle({ auth: true }));`,s=`class Handler {
  setNext(handler) { this.next = handler; return handler; }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}
class AuthHandler extends Handler {
  handle(request) {
    if (request.auth) return 'authenticated';
    return super.handle(request);
  }
}
const auth = new AuthHandler();
auth.setNext(new Handler());
console.log(auth.handle({ auth: true }));`,r=[{input:[],expected:"authenticated"}],a=["Chain handlers together","Each handles or passes to next"],h={id:e,title:n,starterCode:t,solution:s,tests:r,hints:a};export{h as default,a as hints,e as id,s as solution,t as starterCode,r as tests,n as title};
