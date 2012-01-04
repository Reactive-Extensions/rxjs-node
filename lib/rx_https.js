require("./rx");
var https = require("https");
for (var k in http) {
    exports[k] = https[k];
}
exports.createServer = function () {
    var subject = new Rx.Subject(),
    handler = function (request, response) {
        subject.onNext({ request: request, response: response });
    },
    observable = subject.asObservable();
    observable.server = https.createServer(handler);
    return observable;
};
exports.request = function (options) {
    var subject = new Rx.Subject(),
    handler = function (response) {
        subject.onNext(response);
    },
    observable = subject.asObservable();
    observable.request = https.request(options, handler).on('error', errHandler);
    return observable;
};
exports.get = function (options) {
    var subject = new Rx.Subject(),
    handler = function (response) {
        subject.onNext(response);
    }
    errHandler = function (err) {
        subject.onError(err);
    };
    https.get(options, handler).on('error', errHandler);
    return subject;
};