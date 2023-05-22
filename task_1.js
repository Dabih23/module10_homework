let inputValue = prompt("Введите число");

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        alert("Четное число");
    } else {
        alert("Нечетное число");
    }
} else {
    alert("Упс, кажется, вы ошиблись");
}