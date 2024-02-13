function arrayProcessing(arrValue) {
    console.log(`Applied Callback: ${arrValue}`)
}

function processArray(arr, callback) {
    arr.forEach(callback);
}

processArray([1, 2, 3, 4, 5], arrayProcessing)