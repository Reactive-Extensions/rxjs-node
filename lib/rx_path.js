require("./rx");
var path = require("path");
for(var k in path) {
    exports[k] = path[k];
}
exports.exists = function(pathName) {
    var subject = new Rx.AsyncSubject(),
    handler = function(exists)  {
        subject.onNext(exists);
        subject.onCompleted();
    };
	path.exists(pathName, handler);
    return subject;
};

