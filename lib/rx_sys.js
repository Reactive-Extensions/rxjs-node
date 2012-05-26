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

var Rx  = require("./rx.node");
var sys = require("sys");
for(var k in sys) {
    exports[k] = sys[k];
}
exports.exec = function (command) {
    var subject = new Rx.AsyncSubject(),
    handler = function (err, stdout, stderr) {
        if (err) {
            subject.onError({ error: err, stderr: stderr });
        } else {
            subject.onNext(stdout);
            subject.onCompleted();
        }   
    };
    sys.exec(command, handler);
    return subject;
};

