require("./rx");
var child_process = require("child_process");
for (var k in child_process) {
    exports[k] = child_process[k];
}
exports.exec = function (command, options) {
    var subject = new Rx.AsyncSubject();
    var handler = function (err, stdout, stderr) {
        if (err !== null) {
            subject.OnError(err);
        } else {
            subject.OnNext({ stdout: stdout, stderr: stderr });
            subject.OnCompleted();
        }
    };
    child_process.exec(command, options, handler);
    return subject;
};