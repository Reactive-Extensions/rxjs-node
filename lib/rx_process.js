require("./rx");
process.nextTickObservable = function() {
    var subject = new Rx.AsyncSubject();
    var handler = function() {
            subject.OnNext();
            subject.OnCompleted();
    };
    process.nextTick(handler);
	return subject.AsObservable();
};
