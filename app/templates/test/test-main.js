var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/test\/specs\/\w*Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
requirejs.config({
    // Karma serves files from '/app'
    baseUrl: 'base/app/scripts',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'loading-helper': '../../test/helpers/loadingHelper',
        'controllers': 'controllers/controllers',
        'directives': 'directives/directives',
        'filters': 'filters/filters',
        'services': 'services/services'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-resource': ['angular'],
        'angular-mocks': ['angular'],
        'controllers': ['angular', 'services'],
        'filters': ['angular'],
        'services': ['angular'],
        'directives': ['angular']
    },
    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
