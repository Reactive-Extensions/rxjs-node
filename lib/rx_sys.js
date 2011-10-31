require("./rx");
var sys = require("sys");
for(var k in sys) {
    exports[k] = sys[k];
}
exports.exec = function (command) {
    var subject = new Rx.AsyncSubject();
    var handler = function (err, stdout, stderr) {
        if (err) {
            subject.OnError({ error: err, stderr: stderr });
            return;
        }
        subject.OnNext(stdout);
        subject.OnCompleted();
    };
    sys.exec(command, handler);
    return subject;
};

