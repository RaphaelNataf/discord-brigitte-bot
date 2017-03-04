'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _config = require('../../config');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statsHelpers = {};

statsHelpers.fetch = function (config) {
	return new Promise(function (resolve, reject) {
		(0, _isomorphicFetch2.default)(_config.configURLS.main_url, {
			method: 'GET',
			headers: {
				'Authorization': config.auth,
				'Referer': config.ref,
				'Ubi-AppId': config.app,
				'Ubi-SessionId': config.session
			}
		}).then(function (data) {
			return data.json();
		}).then(function (dataJSON) {
			resolve(dataJSON);
		}).catch(function (err) {
			return reject(err);
		});
	});
};

exports.default = statsHelpers;

// ----------------------
// const statsHelpersBastien = {}

// export statsHelpersBastien.fetch = (config) => {	
// 		return new Promise((resolve, reject) => {
// 			fetch(configURLS.main_urlBastien, {
// 				method: 'GET', 
// 				headers: {
// 					'Authorization': configBastien.auth,
// 					'Referer': configBastien.ref,
// 					'Ubi-AppId': configBastien.app,
// 					'Ubi-SessionId': configBastien.session
// 				},			
// 			})
// 			.then((data) => data.json())
// 			.then((dataJSON) => { resolve(dataJSON) })
// 			.catch((err) => reject(err))
// 		})
// 	};

// const statsHelpersSeb = {}

// export statsHelpersSeb.fetch = (config) => {	
// 		return new Promise((resolve, reject) => {
// 			fetch(configURLS.main_urlSeb, {
// 				method: 'GET', 
// 				headers: {
// 					'Authorization': configSeb.auth,
// 					'Referer': configSeb.ref,
// 					'Ubi-AppId': configSeb.app,
// 					'Ubi-SessionId': configSeb.session
// 				},			
// 			})
// 			.then((data) => data.json())
// 			.then((dataJSON) => { resolve(dataJSON) })
// 			.catch((err) => reject(err))
// 		})
// 	};

// const statsHelpersSacha = {}

// export statsHelpersSacha.fetch = (config) => {	
// 		return new Promise((resolve, reject) => {
// 			fetch(configURLS.main_urlSacha, {
// 				method: 'GET', 
// 				headers: {
// 					'Authorization': configSacha.auth,
// 					'Referer': configSacha.ref,
// 					'Ubi-AppId': configSacha.app,
// 					'Ubi-SessionId': configSacha.session
// 				},			
// 			})
// 			.then((data) => data.json())
// 			.then((dataJSON) => { resolve(dataJSON) })
// 			.catch((err) => reject(err))
// 		})
// 	};