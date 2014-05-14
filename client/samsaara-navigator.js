/*!
 * Samsaara Client Navigator Information Module
 * Copyright(c) 2014 Arjun Mehta <arjun@newlief.com>
 * MIT Licensed
 */
 
var navInfo = (function(module){

  var navigatorInfo = {
    // browserName: BrowserDetect.browser,
    // browserVersion: BrowserDetect.version,
    // OSName: BrowserDetect.OS,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    pixelRatio: window.devicePixelRatio || 1,    
  };

  module.internalMethods = {
    getNavInfo: function(callBack){
      if(typeof callBack === "function") callBack( navigatorInfo );
    }
  };

  module.initializationMethods = {};
  module.closeMethods = {};

  return module;

}(this.navInfo = this.navInfo || {}));

samsaara.use(navInfo);