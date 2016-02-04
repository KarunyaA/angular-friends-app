/**
 * Simple angular factory for random string generation
 * 
 */

(function () {

    'use strict';

    var setRandomStringFactory = function (w) {

        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var Math = w.Math;

        return function randomString(length) {
            length = length || 10;
            var string = '', rnd;
            while (length > 0) {
                rnd = Math.floor(Math.random() * chars.length);
                string += chars.charAt(rnd);
                length--;
            }
            return string;
        };
    }

    angular.module('angularRandomString', [])
        .factory('randomString', setRandomStringFactory);

       setRandomStringFactory.$inject = ['$window']; 

})();
	
	