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
var events = require("events");
for(var k in events) {
    exports[k] = events[k];
}
exports.EventEmitter.prototype.toObservable = function(eventName) {
	var parent = this;
	return Rx.Observable.create(function(observer) {
		var handler = function(o) {
			observer.onNext(o);
		};
		parent.addListener(eventName, handler);
		return function() {
			parent.removeListener(eventName, handler);
		};
	});
};
Rx.Observable.prototype.toEventEmitter = function (eventName) {
    var emitter = new exports.EventEmitter();
    this.subscribe(function (x) {
        emitter.emit(eventName, x);
    });
    return emitter;
};


