/**
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

var Rx    = require("./rx.node");
var https = require("https");

for (var k in https) {
    exports[k] = https[k];
}
exports.createServer = function () {
    var subject = new Rx.Subject(),
    handler = function (request, response) {
        subject.onNext({ request: request, response: response });
    },
    observable = subject.asObservable();
    observable.server = https.createServer(handler);
    return observable;
};
exports.request = function (options) {
    var subject = new Rx.Subject(),
    handler = function (response) {
        subject.onNext(response);
    },
    observable = subject.asObservable();
    observable.request = https.request(options, handler).on('error', errHandler);
    return observable;
};
exports.get = function (options) {
    var subject = new Rx.Subject(),
    handler = function (response) {
        subject.onNext(response);
    }
    errHandler = function (err) {
        subject.onError(err);
    };
    https.get(options, handler).on('error', errHandler);
    return subject;
};
