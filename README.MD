#karma-mocha-test

参照：https://www.tuicool.com/articles/yuMvQz

增加了代码覆盖率的配置：
参照：https://www.npmjs.com/package/karma-coverage
npm install karma karma-coverage --save-dev

karma.conf.js 中增加：
#需要测试覆盖率的文件
preprocessors: {
	'src/**/*.js': 'coverage'       
},

#覆盖率结果对应的文件夹 coverage
coverageReporter: {
	type: 'lcov',
	dir: 'coverage/'
},

#增加'coverage'
reporters: ['spec','coverage'],