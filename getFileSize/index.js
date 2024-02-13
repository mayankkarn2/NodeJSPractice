const fs = require('fs').promises;

async function readAsyncFileSize() {
    try {
        const data = await fs.stat('example.txt', 'utf-8');
        console.log("2");
        console.log("File read successfully");
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

console.log("1");
(async () => {
    await readAsyncFileSize();
    console.log("3");
})();
