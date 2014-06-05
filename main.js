/*!
 * Samsaara Client Navigator Information Module
 * Copyright(c) 2014 Arjun Mehta <arjun@newlief.com>
 * MIT Licensed
 */

var debug = require('debug')('samsaara:navigatorInfo');


var navigatorInfo = {

  name: "navigatorInfo",

  clientScript: __dirname + '/client/samsaara-navigator.js', 

  connectionInitialization: {
    navigatorInfo: connectionInitialzation
  }
};


var connectionController,
    communication;

var options = options || {};


// the root interface loaded by require. Options are pass in options here.

function main(opts){
  return initialize;
}


// samsaara will call this method when it's ready to load it into its middleware stack
// return your main 

function initialize(samsaaraCore){
  connectionController = samsaaraCore.connectionController;
  communication = samsaaraCore.communication;
  return navigatorInfo;
}


// Connection Initialization Methods

function connectionInitialzation(opts, connection, attributes){

  connection.updateDataAttribute("navInfo", {});
  
  debug("Initializing NavInfo...");
  
  attributes.force("navInfo");

  connection.executeRaw({ns:"internal", func:"getNavInfo"}, function getNavInfo(navInfo){
    connection.updateDataAttribute("navInfo", navInfo);
    attributes.initialized(null, "navInfo");
  });
}


module.exports = exports = main;