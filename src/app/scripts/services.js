'use strict';

var services = angular.module('vcfExplorerServices', ['ngResource']);

services.service('CouchDB', function($resource){
  var couchdbViews = $resource('http://localhost:5984/vcf/_design/:design/_view/:view');
  var couchdbDocs = $resource('http://localhost:5984/vcf/:doc');

  this.getSamples = function() {
    return couchdbViews.get({'design':'default','view':'samples'});
  };

  this.getSampleVars = function(sampleKey) {
    return couchdbViews.get({'design':'default','view':'sample_vars','key':'"'+sampleKey+'"'});
  };

  this.getRun = function(runKey) {
    return couchdbDocs.get({'doc':runKey});
  };

});