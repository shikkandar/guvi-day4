let sumNum=function (...num) {
    let result=num;
    let count=0;
    for(let sum of result){
        count +=sum;
        
    }
    return count
}
let num=[1,2,3,4,5,6,7,8,9]
let result=sumNum(...num)
console.log(result);

(function () {
    let count=0;
    for(let sum of num){
        count +=sum
        
    }
    console.log(count);
})();