const carObj = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function () {
        return this.brand + this.model + this.year;
    }
}

console.log(carObj);
console.log(carObj.getCarInfo());




function reverseStr(str) {
    return (str || 'Empty').toUpperCase();
}

console.log(reverseStr('hello'));
console.log(reverseStr());



function oddNumbers(n) {
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}

console.log(oddNumbers(10)); // [1, 3, 5, 7, 9]
console.log(oddNumbers(15)); // [1, 3, 5, 7, 9, 11, 13, 15]



function monthName(n) {
    switch (n) {
        case 1:
            return "Январь";
        case 2:
            return "Февраль";
        case 3:
            return "Март";
        case 4:
            return "Апрель";
        case 5:
            return "Май";
        case 6:
            return "Июнь";
        case 7:
            return "Июль";
        case 8:
            return "Август";
        case 9:
            return "Сентябрь";
        case 10:
            return "Октябрь";
        case 11:
            return "Ноябрь";
        case 12:
            return "Декабрь"
        default:
            return null;
    }
}

console.log(monthName(1));
console.log(monthName(2));
console.log(monthName(3));
console.log(monthName(4));
console.log(monthName(5));
console.log(monthName(6));
console.log(monthName(7));
console.log(monthName(8));
console.log(monthName(14));
console.log(monthName(15));
console.log(monthName(9));
console.log(monthName(10));
console.log(monthName(11));
console.log(monthName(12));
console.log(monthName(13));



function gradeClassifier(score) {
    return (score < 0 || score > 100) ? null :
        (score >= 0 && score <= 59) ? "Неудовлетворительно" :
            (score >= 60 && score <= 74) ? "Удовлетворительно" :
                (score >= 75 && score <= 89) ? "Хорошо" :
                    (score >= 90 && score <= 100) ? "Отлично" :
                        "";
};

console.log(gradeClassifier(55));
console.log(gradeClassifier(85));
console.log(gradeClassifier(120));


console.log(gradeClassifier(55) === "Неудовлетворительно");
console.log(gradeClassifier(85) === "Хорошо");
console.log(gradeClassifier(120) === null);



function countdown(n) {
    let result = [];
    while (n > 0) {
        result.push(n);
        n--;
    }
    return result;
}

console.log(countdown(5));
console.log(countdown(10));
console.log(countdown(20));

function calculate(a, b, callback) {
    if (typeof callback !== "function") {
        return false;
    }

    return callback(a, b)
}

function cbMultiply(a, b) {
    return a * b
};

function cbDivide(a, b) {
    return b === 0 ? "Ошибка" : a / b;
};

function cbSubtract(a, b) {
    return a - b;
};

console.log(calculate(5, 3, cbMultiply)); // 15
console.log(calculate(10, 2, cbDivide));  // 5
console.log(calculate(8, 0, cbDivide));   // "Ошибка"
console.log(calculate(7, 4, cbSubtract)); // 3
console.log(calculate(7, 4, "не функция")); // false