require("./rx");
var net = require("net");
for (var k in net) {
    exports[k] = net[k];
}
exports.createServer = function (options) {
    subject = new Rx.AsyncSubject(),
    handler = function (c) {
        subject.onNext(c);
        subject.onCompleted();
    },
    observable = subject.asObservable();
    observable.server = net.createServer(options, handler);
    return observable;
};
exports.createConnection = function () {
    var subject = new Rx.AsyncSubject(),
    handler = function (c) {
        subject.onNext(c);
        subject.onCompleted();
    },
    args = Array.prototype.slice.call(arguments);
    args.push(handler);
    observable = subject.asObservable();
    observable.server = net.createConnection.apply(this, args);
    return observable;
};