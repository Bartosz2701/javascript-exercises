const sumAll = function(a, b) { // bierzemy dwie liczby dodatnie
if (a < 0 || b < 0) {
    return "ERROR";
}

if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
}

if (a > b) {
    const c = a;
    a = b;
    b = c;
}
    const sum = (b - a + 1) * (a + b) / 2;

// kazda liczba pomiedzy dwoma liczbami jest dodawana do siebie
// podawany jest wynik sumowania

return sum;
};

// Do not edit below this line
module.exports = sumAll;
