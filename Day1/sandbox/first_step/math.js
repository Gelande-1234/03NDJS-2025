// math.js

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function prod(a, b) {
    return a * b;
}

function quot(a, b) {
    if (b === 0) {
        return 'Impossible de diviser par zéro !';
    }
    return a / b;
}

// Exporter les fonctions
module.exports = { sum, diff, prod, quot };
