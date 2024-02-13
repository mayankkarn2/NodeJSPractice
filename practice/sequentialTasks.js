console.log('Start')

function executeTask(task, callback) {
    setTimeout(() => {
        if (callback) {
            callback();
        }
        console.log(`Execute Task-${task}`);
    }, 1000)
}

executeTask(1, () => {
    executeTask(2, () => {
        executeTask(3, () => {
            executeTask(4, () => {
                executeTask(5, () => {
                    executeTask(6, () => {
                        executeTask(7)
                    })
                });
            });
        });
    });
});

console.log('Over');