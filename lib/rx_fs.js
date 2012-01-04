require("./rx");
var fs = require("fs");
for(var k in fs) {
    exports[k] = fs[k];
}
exports.rename = function(path1, path2) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.rename(path1, path2, handler);
    return subject;
};
exports.truncate = function(fd, len) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.truncate(fd, len, handler);
    return subject;
};
exports.chmod  = function(path, mode) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.chmod(path, mode, handler);
    return subject;
};
exports.stat  = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, stats) {
        if (err) {
            subject.onError(err);
        }  else {
            subject.onNext(stats);
            subject.onCompleted();
        }
    };
    fs.stat(path, handler);
    return subject;
};
exports.lstat  = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, stats) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(stats);
            subject.onCompleted();
        }
    };
    fs.lstat(path, handler);
    return subject;
};
exports.fstat = function (fd) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, stats) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(stats);
            subject.onCompleted();
        }
    };
    fs.fstat(fd, handler);
    return subject;
};
exports.link = function(srcpath, dstpath) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.link(srcpath, dstpath, handler);
    return subject;
};
exports.symlink = function(linkdata, path) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.symlink(linkdata, path, handler);
    return subject;
};
exports.readlink  = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, resolvedPath) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(resolvedPath);
            subject.onCompleted();
        }
    };
    fs.readlink(path, handler);
    return subject;
};
exports.realpath  = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, resolvedPath) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(resolvedPath);
            subject.onCompleted();
        }
    };
    fs.realpath(path, handler);
    return subject;
};
exports.unlink  = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler =  function(err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.unlink(path, handler);
    return subject;
};
exports.rmdir  = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.rmdir(path, handler);
    return subject;
};
exports.mkdir  = function(path, mode) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.mkdir(path, mode, handler);
    return subject;
};
exports.readdir = function(path) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, files) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(files);
            subject.onCompleted();
        }
    };
    fs.readdir(path, handler);
    return subject;
};
exports.close  = function(fd) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.close(fd, handler);
    return subject;
};
exports.open = function(path, flags, mode) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, fd) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext(fd);
            subject.onCompleted();
        }
    };
    fs.open(path, flags, mode,  handler);
    return subject;
};
exports.write = function (fd, buffer, offset, length, position) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, written, innerBuffer) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext({ written: written, buffer: innerBuffer });
            subject.onCompleted();
        }
    };
    fs.write(fd, buffer, offset, length, position, handler);
    return subject;
};
exports.read = function (fd, buffer, offset, length, position) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, bytesRead, innerBuffer) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext({ bytesRead: bytesRead, buffer: innerBuffer });
            subject.onCompleted();
        }
    };
    fs.read(fd, buffer, offset, length, position, handler);
    return subject;
};
exports.readFile = function(fileName, encoding) {
    var subject = new Rx.AsyncSubject(),
    handler = function(err, data) {
        if (err)
        {
            subject.onError(err);
        } else {
            subject.onNext(data);
            subject.onCompleted();
        }
    };
    fs.readFile(fileName, encoding,  handler);
    return subject;
};
exports.writeFile  = function(fileName, data, encoding) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err) {
        if (err) {
            subject.onError(err);
        } else {
            subject.onNext();
            subject.onCompleted();
        }
    };
    fs.writeFile(fileName, data, encoding, handler);
    return subject;
};
exports.watchFile = function(filename, options) {
    var subject = new Rx.AsyncSubject(),
    handler = function(curr, prev) {
        subject.onNext( { curr: curr, prev: prev });
        subject.onCompleted();
    };
    fs.watchFile(filename, options, handler);
    return subject;
};

