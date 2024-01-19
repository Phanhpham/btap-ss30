function isSymmetricalArr(arr){
    let length = arr.length;
    for(let i = 0; i<length/2;i++){
        if (arr[i]!== arr[length-i-1]){
            return false;
        }
    }
    return true;
}

let arr=[1,2,3,4,5];
let check =  isSymmetricalArr(arr);
if (check){
    console.log("mảng đối xứng nhau");
}else{
    console.log("mảng không đối xứng nhau");
}