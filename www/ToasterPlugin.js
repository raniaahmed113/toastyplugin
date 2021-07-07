var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ToasterPlugin', 'coolMethod', [arg0]);
};
ToasterPlugin.prototype.new_activity = function( successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ToasterPlugin', 'new_activity', []);
}