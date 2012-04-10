?/**
* Copyright 2011 Microsoft Corporation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

require("./rx");
var net = require("net");
for (var k in net) {
    exports[k] = net[k];
}
exports.createServer = function (options) {
    subject = new Rx.AsyncSubject(),
    handler = function (c) {
        subject.onNext(c);
        subject.onCompleted();
    },
    observable = subject.asObservable();
    observable.server = net.createServer(options, handler);
    return observable;
};
exports.createConnection = function () {
    var subject = new Rx.AsyncSubject(),
    handler = function (c) {
        subject.onNext(c);
        subject.onCompleted();
    },
    args = Array.prototype.slice.call(arguments);
    args.push(handler);
    observable = subject.asObservable();
    observable.server = net.createConnection.apply(this, args);
    return observable;
};