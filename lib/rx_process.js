require("./rx");
process.nextTickObservable = function() {
    var subject = new Rx.AsyncSubject(),
    handler = function() {
        subject.onNext();
        subject.onCompleted();
    };
    process.nextTick(handler);
	return subject.asObservable();
};
