module.exports = {
  test_page: "index.html?hidepassed",
  framework: "mocha",
  src_files: [
    "test.js"
  ],
  launch_in_ci: [
    'Chrome'
  ],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=9222',
        '--window-size=1440,900'
      ]
    }
  }
};
