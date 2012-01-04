require("./rx");
var child_process = require("child_process");
for (var k in child_process) {
    exports[k] = child_process[k];
}
exports.exec = function (command, options) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, stdout, stderr) {
        if (err !== null) {
            subject.onError(err);
        } else {
            subject.onNext({ stdout: stdout, stderr: stderr });
            subject.onCompleted();
        }
    };
    child_process.exec(command, options, handler);
    return subject;
};