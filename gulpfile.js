const { src, dest, series, parallel } = require('gulp');
const jsminify = require('gulp-uglify');
const jsonminify = require('gulp-jsonminify');
const zip = require('gulp-zip');

let jsminifyOptions = { "mangle": { "toplevel": true }};

function minifyFMV2JSON() {
    return src('firefox/firefox_mv2/*.json')
        .pipe(jsonminify())
        .pipe(dest('firefox/firefox_mv2.min'));
}

function minifyFMV2JS() {
    return src('firefox/firefox_mv2/*.js')
        .pipe(jsminify(jsminifyOptions))
        .pipe(dest('firefox/firefox_mv2.min'));
}

function zipFMV2() {
    return src('firefox/firefox_mv2.min/**/*')
        .pipe(zip('firefox_mv2.zip'))
        .pipe(dest('firefox'));
}

function minifyFMV3JSON() {
    return src('firefox/firefox_mv3/*.json')
        .pipe(jsonminify())
        .pipe(dest('firefox/firefox_mv3.min'));
}

function minifyFMV3JS() {
    return src('firefox/firefox_mv3/*.js')
        .pipe(jsminify(jsminifyOptions))
        .pipe(dest('firefox/firefox_mv3.min'));
}

function zipFMV3() {
    return src('firefox/firefox_mv3.min/**/*')
        .pipe(zip('firefox_mv3.zip'))
        .pipe(dest('firefox'));
}

function minifyChromiumJSON() {
    return src('chromium/chromium/*.json')
        .pipe(jsonminify())
        .pipe(dest('chromium/chromium.min/chromium'));
}

function minifyChromiumJS() {
    return src('chromium/chromium/*.js')
        .pipe(jsminify(jsminifyOptions))
        .pipe(dest('chromium/chromium.min/chromium'));
}

function zipChromium() {
    return src('chromium/chromium.min/**/*')
        .pipe(zip('chromium.zip'))
        .pipe(dest('chromium'));
}

exports.minify = parallel(minifyFMV2JSON, minifyFMV2JS, minifyFMV3JSON, minifyFMV3JS, minifyChromiumJSON, minifyChromiumJS);
exports.chromiumzip = series(minifyChromiumJSON, minifyChromiumJS, zipChromium);
exports.firefoxzip = series(parallel(minifyFMV2JSON, minifyFMV2JS, minifyFMV3JSON, minifyFMV3JS), parallel(zipFMV2, zipFMV3))