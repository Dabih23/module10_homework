let num;

if ((typeof(num) == 'number')&&(!isNaN(num))) {
    console.log("value is Number");
} else if (typeof(num) == 'string') {
    console.log("value is String");
} else if (typeof(num) == 'boolean') {
    console.log("value is Boolean");
} else {
    console.log("value X is undefined");
}
