const num1 = Math.round(Math.random() * 100);
const num2 = Math.round(Math.random() * 100);
alert(`Birinchi random raqam : ${num1}`);
alert(`Ikkinchi random raqam : ${num2}`);

let amallar = parseInt(prompt(`Amalni tanlang:
1 qo'shish uchun 
2 ayirish uchun
3 ko'paytirish uchun
4 bo'lish uchun
5 foizni chiqarish uchun`));

let result;

if (amallar === 1) {
    result = num1 + num2;
} else if (amallar === 2) {
    result = num1 - num2;
} else if (amallar === 3) {
    result = num1 * num2;
} else if (amallar === 4) {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Nolga bo'lish mumkin emas";
    }
} else if (amallar === 5) {
    result = (num1 / 100) * num2;
} else {
    result = "Noto'g'ri amal tanlandi";
}

console.log(result);