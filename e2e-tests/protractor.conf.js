//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  
    baseUrl: 'http://localhost/angular-phonecat/app/',
  //baseUrl: 'http://127.0.0.1:80/angular-phonecat/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
