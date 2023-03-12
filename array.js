let a=[1,45,4 ,"adarsh",false];
console.log(a);

let u =  new Array(1,3,5,6);
console.log(b);

console.log(a[1]);
 let c=[1,2,3,4,5];
 c.push(6,7);
 console.log(c);
 c.pop();
console.log(c);
// shift will remove first element 
c.shift();
console.log(c);
// unshift will add elemnt at first
c.unshift(9);
console.log(c);
let b= [32,433,344]
let d=[ 12,4,5,33]
// concanitating the array
let a1= b.concat(d);
console.log(a1);
// making array a string
let s= a1.join("$")
console.log(s);
// reversing
a1.reverse();
console.log(a1);
console.log(a1.indexOf(4));
console.log( a1.slice(2,5));
// adding element at mid without deleting
a1.splice(2,0,11);

console.log(a1);
// adding elemrnt by deleting
a1.splice(2,1,183);

console.log(a1);