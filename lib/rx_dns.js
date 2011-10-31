require("./rx");
var dns = require("dns");
for(var k in dns) {
    exports[k] = dns[k];
}
exports.resolve = function(domain, rrtype) {
    var subject = new Rx.AsyncSubject();
    var handler = function(err, addresses) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(addresses);
            subject.OnCompleted();
        }
    };
    dns.resolve(domain, rrtype, handler);
    return subject;
};
exports.resolve4 = function(domain) {
    var subject = new Rx.AsyncSubject();
    var handler = function (err, addresses) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(addresses);
            subject.OnCompleted();
        }
    };
    dns.resolve4(domain, handler);
    return subject;
};
exports.resolve6 = function(domain) {
    var subject = new Rx.AsyncSubject();
    var handler = function (err, addresses) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(addresses);
            subject.OnCompleted();
        }
    };
    dns.resolve6(domain, handler);
    return subject;
};
exports.resolveMx = function(domain) {
    var subject = new Rx.AsyncSubject();
    var handler = function (err, addresses) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(addresses);
            subject.OnCompleted();
        }
    };
    dns.resolveMx(domain, handler);
    return subject;
};
exports.resolveTxt = function(domain) {
    var subject = new Rx.AsyncSubject();
    var handler = function (err, addresses) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(addresses);
            subject.OnCompleted();
        }
    };
    dns.resolveTxt(domain, handler);
    return subject;
};
exports.resolveSrv = function(domain)
{
    var subject = new Rx.AsyncSubject();
    var handler = function (err, addresses) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(addresses);
            subject.OnCompleted();
        }
    };
    dns.resolveSrv(domain, handler);
    return subject;
};

exports.reverse = function(ip) {
    var subject = new Rx.AsyncSubject();
    var handler = function(err, domains) {
        if (err) {
            subject.OnError(err);
        } else {
            subject.OnNext(domains);
            subject.OnCompleted();
        }
    };
    dns.reverse(ip, handler);
    return subject;
};

