require("./rx");
var sys = require("sys");
for(var k in sys) {
    exports[k] = sys[k];
}
exports.exec = function (command) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, stdout, stderr) {
        if (err) {
            subject.onError({ error: err, stderr: stderr });
        } else {
            subject.onNext(stdout);
            subject.onCompleted();
        }   
    };
    sys.exec(command, handler);
    return subject;
};

