// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var fs = require("fs");

fs.readdir("/tmp/wip", function (err, files) {
    if (err) {
        throw err;
    }
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        console.log(file);
    }
});