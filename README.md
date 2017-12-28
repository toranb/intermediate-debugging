# Intermediate debugging by example

Jan 9th 2018 @DSMJS

## 1 - debug tricky exceptions w/ chrome dev tools

cd into the stopsign directory and run a simple web server

    python -m SimpleHTTPServer

## 2 - remote debug headless chrome

Create a docker instance and spin up the test suite from the jenkins folder

    yarn add testem
    testem

Use socat to connect via port 6222

    socat -v -d tcp-listen:6222,reuseaddr,fork tcp:localhost:9222

Read more about the centOS docker file

    https://github.com/toranb/docker-headless-chrome

## 3 - debug nodeJS w/ rollup & mocha

cd into the rollup directory and install everything

    yarn

1st example: cd into test/samples/basic

    rollup main.js --o bundle.js --f es

2nd example: cd into test

    mocha test

3rd example: cd into test and debug mocha with chrome dev tools

    node --inspect --debug-brk ../node_modules/mocha/bin/_mocha

## License

Copyright © 2018 Toran Billups http://toranbillups.com

Licensed under the MIT License
