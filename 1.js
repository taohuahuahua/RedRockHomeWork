/* let sum=0
for(i=1;i<n;i++){
sum+=i}
console.log(sum) */
function sumTo(n){
    if(n==1){
    return 1;}
    return n+sumTo(n-1)
}
let rex=sumTo(100)
console.log(rex)
