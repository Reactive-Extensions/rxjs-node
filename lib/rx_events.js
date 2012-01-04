require("./rx");
var events = require("events");
for(var k in events) {
    exports[k] = events[k];
}
exports.EventEmitter.prototype.toObservable = function(eventName) {
	var parent = this;
	return Rx.Observable.create(function(observer) {
		var handler = function(o) {
			observer.onNext(o);
		};
		parent.addListener(eventName, handler);
		return function() {
			parent.removeListener(eventName, handler);
		};
	});
};
Rx.Observable.prototype.toEventEmitter = function (eventName) {
    var emitter = new exports.EventEmitter();
    this.subscribe(function (x) {
        emitter.emit(eventName, x);
    });
    return emitter;
};


