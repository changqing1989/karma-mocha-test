// Karma configuration
// Generated on Wed Dec 20 2017 14:57:16 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      
	  'src/**/*.js',
	  'test-lib/**/*.js',
	  'test/**/*.js'
	  
    ],

   
    preprocessors: {
        'src/**/*.js': 'coverage'       
    },

    coverageReporter: {
        type: 'lcov',
        dir: 'coverage/'
    },

    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['spec','coverage'],

    // reporters: ['progress', 'html'],
 
    // the default configuration 
    // htmlReporter: {
    //   outputDir: 'karma_html', // where to put the reports  
    //   templatePath: null, // set if you moved jasmine_template.html 
    //   focusOnFailures: true, // reports show failures on start 
    //   namedFiles: false, // name files instead of creating sub-directories 
    //   pageTitle: null, // page title for reports; browser info by default 
    //   urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
    //   reportName: 'report-summary-filename', // report summary filename; browser info by default 
      
      
    //   // experimental 
    //   preserveDescribeNesting: false, // folded suites stay folded  
    //   foldAll: false, // reports start folded (only with preserveDescribeNesting) 
    // },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome', 'Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
