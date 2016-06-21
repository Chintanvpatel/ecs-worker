var fs = require('fs');
exports.handler = function (event, context) {
	fs.writeFile('/var/log/worker.log', 'Just now, we have created this file', function (err) {
        if (err) throw err;
        console.log('It\'s saved! in same location.');
    });
}
