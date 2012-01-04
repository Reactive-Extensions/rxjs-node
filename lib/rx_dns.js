require("./rx");
var dns = require("dns");
for(var k in dns) {
    exports[k] = dns[k];
}
exports.resolve = function(domain, rrtype) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, addresses) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(addresses);
            subject.onCompleted();
        }
    };
    dns.resolve(domain, rrtype, handler);
    return subject;
};
exports.resolve4 = function(domain) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, addresses) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(addresses);
            subject.onCompleted();
        }
    };
    dns.resolve4(domain, handler);
    return subject;
};
exports.resolve6 = function(domain) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, addresses) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(addresses);
            subject.onCompleted();
        }
    };
    dns.resolve6(domain, handler);
    return subject;
};
exports.resolveMx = function(domain) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, addresses) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(addresses);
            subject.onCompleted();
        }
    };
    dns.resolveMx(domain, handler);
    return subject;
};
exports.resolveTxt = function(domain) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, addresses) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(addresses);
            subject.onCompleted();
        }
    };
    dns.resolveTxt(domain, handler);
    return subject;
};
exports.resolveSrv = function(domain)
{
    var subject = new Rx.AsyncSubject(),
    handler = function (err, addresses) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(addresses);
            subject.onCompleted();
        }
    };
    dns.resolveSrv(domain, handler);
    return subject;
};

exports.reverse = function(ip) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, domains) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(domains);
            subject.onCompleted();
        }
    };
    dns.reverse(ip, handler);
    return subject;
};

