const fs = require('fs');
function logHeapUsage() {
    try {
        global.gc();
    } catch (e) {
        console.log("You must run program with '--expose-gc'");
        process.exit();
    }

    const heapUsed = process.memoryUsage().heapUsed;
    console.log('Program is using ' + heapUsed + ' bytes of Heap.');
    fs.appendFile('heapUsed.log', heapUsed + '\n', (error) => {
        if (error) {
            console.log(error);
        }
    });
}
setInterval(logHeapUsage, 2000);