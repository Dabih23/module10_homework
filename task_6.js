let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("Массив один и тот же");
} else {
    console.log("Разные массивы");
}