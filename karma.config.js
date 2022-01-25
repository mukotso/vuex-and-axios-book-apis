module.exports = function (config) {
    config.set({
        browsers: ['CHROME'],
        frameworks: ['mocha'],
        // files: [
        //     'components/**/*.vue',
        //     'test/**/*.js'
        // ],
        files: ['./app.js'],
        reporters: ['progress'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        concurrency: Infinity,
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless'],
            },
        },
    })
}