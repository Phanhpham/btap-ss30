let str = "hello world";
let words = str.split(" ");
const arr = [];

for (let i= 0;i<words.length;i++){
    let word = words[i];
    if (word.length>0){
        let lastChar = word.slice(-1);

        let captializedLastChar = lastChar.toUpperCase();
        let newWord = word.slice(0, -1)+ captializedLastChar;
        arr.push(newWord);
    }else{
        arr.push(word);
    }
}
let convertArrayToString = arr.join(" ");
console.log("chuỗi sau khi chuyển đổi lại là:",convertArrayToString);