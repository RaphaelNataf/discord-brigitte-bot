"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var objectHelpers = {};

objectHelpers.parse = function (data) {
	return new Promise(function (resolve, reject) {
		var results = data.results;
		var session = Object.keys(results)[0];
		if (session) {
			resolve(session);
		}
		reject(session);
	});
};

exports.default = objectHelpers;