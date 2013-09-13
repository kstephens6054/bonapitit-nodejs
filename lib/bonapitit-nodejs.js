/**
 * Bonanza Bonapitit API wrapper
 */

(function() {

  var fs = require('fs');
  var needle = require('needle');

  var Bonapitit = function() {

    this.apiHostName = 'api.bonanza.com';
    this.standardApiCallPath = '/api_requests/standard_request';
    this.secureApiCallPath = '/api_requests/secure_request';

    this.certName = "";
    this.devName = "";
    this.authToken = "";
    
    this.standardApiCall = function(method, args, callback) {
    };
    
    
    this.readConfigSync = function(filename) {
      var configJSON = fs.readFileSync(filename, 'utf8');
      var config = JSON.parse(configJSON);
      this.certName = config.certName;
      this.devName = config.devName;
      this.authToken = config.authToken;
    };

  };
  
  module.exports = Bonapitit;

})();
