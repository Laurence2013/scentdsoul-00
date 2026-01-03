// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
			require('karma-spec-reporter'),
			//require('jasmine-spec-reporter'),
			//require('@angular/build/plugins/karma') // Added the essential Angular plugin
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
			clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
		specReporter: {
			lateReport: false,
			maxLogLines: 5,
			prefixes: {
				success: '✓ ',
				failure: '✗ ',
				skipped: '- '
			},
      spec: {
				displayErrorMessages: true,
        displayStacktrace: 'path',
        displaySuccesses: true,
        displayFailures: true,
				displaySkipped: true,
        displayDuration: true
      }
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/admin-panel'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['spec', 'kjhtml'],
    browsers: ['Chrome'],
		customLaunchers: {
			ChromeHeadlessCI: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			}
		},
    restartOnFileChange: true
  });
};
