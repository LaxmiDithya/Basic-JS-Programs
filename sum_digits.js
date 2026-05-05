let n=2345;
let sum=0;
while(n>0){
    let d=n%10;
    sum=sum+d;
    n=Math.floor(n/10);
}
console.log(sum)