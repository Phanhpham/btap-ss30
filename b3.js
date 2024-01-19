function mixArr (str){
    let letters = [];
    let numbers = [];
    let specials = [];
    for(let i=0;i<str.length;i++){
        let arr = str[i];
        if(/[a-zA-Z]/.test(arr)){
            letters.push(arr);
        }else if(/[0-9]/.test(arr)){
            numbers.push(arr);
        }else{
            specials.push(arr);
        }
    }
    let arr = letters.concat(numbers,specials);
    return arr;
}
let str = "ppa@123"
let arr = mixArr;
console.log(arr);