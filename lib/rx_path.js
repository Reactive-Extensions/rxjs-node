require("./rx");
var path = require("path");
for(var k in path) {
    exports[k] = path[k];
}
exports.exists = function(pathName) {
    var subject = new Rx.AsyncSubject();
    var handler = function(exists)  {
        subject.OnNext(exists);
        subject.OnCompleted();
    };
	path.exists(pathName, handler);
    return subject;
};

