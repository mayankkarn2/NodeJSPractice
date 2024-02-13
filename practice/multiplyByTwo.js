function multiplyByTwo(n) {
    return n * 2;
}

function processInput(num, callback) {
    console.log(callback(num));
}

processInput(2, multiplyByTwo);