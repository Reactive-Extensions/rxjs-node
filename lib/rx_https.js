require("./rx");
var https = require("https");
for (var k in http) {
    exports[k] = https[k];
}
exports.createServer = function () {
    var subject = new Rx.Subject();
    var handler = function (request, response) {
        subject.OnNext({ request: request, response: response });
    };
    var observable = subject.AsObservable();
    observable.server = https.createServer(handler);
    return observable;
};
exports.request = function (options) {
    var subject = new Rx.Subject();
    var handler = function (response) {
        subject.OnNext(response);
    };
    var observable = subject.AsObservable();
    observable.request = https.request(options, handler);
    return observable;
};
exports.get = function (options) {
    var subject = new Rx.Subject();
    var handler = function (response) {
        subject.OnNext(response);
    };
    var errHandler = function (err) {
        subject.OnError(err);
    };
    https.get(options, handler).on('error', errHandler);
    return subject;
};