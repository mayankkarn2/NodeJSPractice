function getDataFromServer() {
    console.log("Getting Data From Server...")
}

function delayedCallBack(callback) {
    setTimeout(callback, 2000);
}

delayedCallBack(getDataFromServer);