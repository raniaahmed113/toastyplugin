// Empty constructor
function ToasterPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
ToasterPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'ToasterPlugin', 'show', [options]);
}
ToasterPlugin.prototype.new_activity = function( successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ToasterPlugin', 'new_activity', []);
}

// Installation constructor that binds ToasterPlugin to window
ToasterPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.toasterPlugin = new ToasterPlugin();
  return window.plugins.toasterPlugin;
};
cordova.addConstructor(ToasterPlugin.install);
