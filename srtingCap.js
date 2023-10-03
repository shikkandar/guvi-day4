let string=function(string) {
    return string.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}
let text="my name is shikkandar"
let result=string(text)
console.log(result);

(function () {
    let text="my name is shikkandar"
    let capText=text.split(" ").map(str=>str.charAt(0).toUpperCase()+str.slice(1)).join(" ")
    console.log(capText)
})();