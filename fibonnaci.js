let n=5;
let a= 0, b=1,c;
for (let i =1; i<=n;i++){
    console.log(a);
    c = a+b;
    a = b;
    b = c;  
}

const number = 5;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
