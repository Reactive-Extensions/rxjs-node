require("./rx");
var http = require("http");
for(var k in http) {
	exports[k] = http[k];
}
exports.createServer = function() {
    var subject = new Rx.AsyncSubject(),
    handler = handler = function(request, response) {
        subject.onNext( { request: request, response:  response });
        subject.onCompleted();
    },
	observable = subject.asObservable();
    observable.server = http.createServer(handler);
	return observable;
};
exports.request = function(options) {
    var subject = new Rx.AsyncSubject(),
    handler = handler = function (response) {
        subject.onNext(response);
        subject.onCompleted();
    },
    errHandler = function (err) {
        subject.onError(err);
    },    
    observable = subject.asObservable();
    observable.request = http.request(options, handler).on('error', errHandler);
    return observable;
};
exports.get = function (options) {
    var subject = new Rx.AsyncSubject(),
    handler = handler = function (response) {
        subject.onNext(response);
        subject.onCompleted();
    },
    errHandler = function (err) {
        subject.onError(err);
    };
    http.get(options, handler).on('error', errHandler);
    return subject;
};