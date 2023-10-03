let odd=function(arr) {
    return arr.filter(function (num) {
        if (num%2!==0) {
            return num;
        }
    });
}
let arr=[1,2,3,4,5,6,7,8,9]
let result=odd(arr)
console.log(result);

(function () {
    let arr1=[1,2,3,4,5,6,7,8,9,10]
    let odd=arr1.filter(num=>num%2!==0)
    console.log(odd);
})();