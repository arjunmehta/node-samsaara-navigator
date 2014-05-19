/*!
 * Samsaara Client Navigator Information Module
 * Copyright(c) 2014 Arjun Mehta <arjun@newlief.com>
 * MIT Licensed
 */

var debug = require('debug')('samsaara:navigatorInfo');

function navigatorInfo(options){

  var config,
      connectionController,
      communication,
      ipc;

  /**
   * Connection Initialization Methods
   * Called for every new connection
   *
   * @opts: {Object} contains the connection's options
   * @connection: {SamsaaraConnection} the connection that is initializing
   * @attributes: {Attributes} The attributes of the SamsaaraConnection and its methods
   */

  function connectionInitialzation(opts, connection, attributes){

    connection.updateDataAttribute("navInfo", {});

    debug("Initializing NavInfo...");

    attributes.force("navInfo");

    connection.execute({internal: "getNavInfo"}, function getNavInfo(navInfo){
      connection.updateDataAttribute("navInfo", navInfo);
      attributes.initialized(null, "navInfo");
    });
  }

  /**
   * Module Return Function.
   * Within this function you should set up and return your samsaara middleWare exported
   * object. Your eported object can contain:
   * name, foundation, remoteMethods, connectionInitialization, connectionClose
   */

  return function navigatorInfo(samsaaraCore){

    config = samsaaraCore.config;
    connectionController = samsaaraCore.connectionController;
    communication = samsaaraCore.communication;
    ipc = samsaaraCore.ipc;

    samsaaraCore.addClientFileRoute("samsaara-navigator.js", __dirname + '/client/samsaara-navigator.js');

    var exported = {

      name: "navigatorInfo",

      clientScript: __dirname + '/client/samsaara-navigator.js', 

      connectionInitialization: {
        navigatorInfo: connectionInitialzation
      }      
    };

    return exported;

  };

}

module.exports = exports = navigatorInfo;