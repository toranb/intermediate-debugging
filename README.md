# Intermediate debugging by example

Jan 9th 2018 @DSMJS

## 1 - debug tricky exceptions w/ chrome dev tools

cd into the stopsign directory and run a simple web server

    python -m SimpleHTTPServer

## 2 - remote debug headless chrome

Create a docker [container] with chrome installed and clone this repository

1st - spin up socat to connect via port 6222 (leave this running)

    socat -v -d tcp-listen:6222,reuseaddr,fork tcp:localhost:9222

2nd - start the test suite from another tmux pane (cd into the jenkins folder)

    yarn add testem
    ./node_modules/testem/testem.js ci

visit http://localhost:6222/ to debug the tests

## 3 - debug nodeJS w/ rollup & mocha

cd into the rollup directory and install everything

    yarn

1st example: cd into test/samples/basic and copy the src directory

    cp -r ../src .
    rollup main.js --o bundle.js --f es

2nd example: cd into test

    mocha test

3rd example: cd into test and debug mocha with chrome dev tools

    node --inspect --debug-brk ../node_modules/mocha/bin/_mocha

## License

Copyright © 2018 Toran Billups http://toranbillups.com

Licensed under the MIT License

[container]: https://github.com/toranb/docker-headless-chrome
