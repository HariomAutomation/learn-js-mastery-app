const r="09-strings-string-patterns-40",e="Reverse Vowels",n=`function reverseVowels(str) {
  const arr = str.split('');
  let l = 0, r = arr.length - 1;
  const vowels = 'aeiouAEIOU';
  while (l < r) {
    while (l < r && !vowels.includes(arr[l])) l++;
    while (l < r && !vowels.includes(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr.join('');
}
console.log(reverseVowels('hello'));`,l=`function reverseVowels(str) {
  const arr = str.split('');
  let l = 0, r = arr.length - 1;
  const vowels = 'aeiouAEIOU';
  while (l < r) {
    while (l < r && !vowels.includes(arr[l])) l++;
    while (l < r && !vowels.includes(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr.join('');
}
console.log(reverseVowels('hello'));`,s=[{input:[],expected:"holle"}],t=["Two pointer swap","Only swap vowels"],o={id:r,title:e,starterCode:n,solution:l,tests:s,hints:t};export{o as default,t as hints,r as id,l as solution,n as starterCode,s as tests,e as title};
