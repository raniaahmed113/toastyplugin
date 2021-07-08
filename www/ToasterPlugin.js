function ToasterPlugin() {}

ToasterPlugin.prototype.new_activity = function( successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ToasterPlugin', 'new_activity', []);
}

ToasterPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.toasterPlugin = new ToasterPlugin();
  return window.plugins.toasterPlugin;
};

cordova.addConstructor(ToasterPlugin.install);