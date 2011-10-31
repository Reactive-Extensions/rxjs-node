require("./rx");
var net = require("net");
for (var k in net) {
    exports[k] = net[k];
}
exports.createServer = function (options) {
    var subject, handler, observable;
    subject = new Rx.Subject();
    handler = function (c) {
        subject.OnNext(c);
    };
    observable = subject.AsObservable();
    observable.server = net.createServer(options, handler);
    return observable;
};
exports.createConnection = function () {
    var subject, handler, args, observable;
    subject = new Rx.Subject();
    handler = function (c) {
        subject.OnNext(c);
    };
    args = Array.prototype.slice.call(arguments);
    args.push(handler);
    observable = subject.AsObservable();
    observable.server = net.createConnection.apply(this, args);
    return observable;
};