//console.log('main_conf-test.js');


var tests = [];
for (var file in window.__karma__.files) {
		console.log('file : ' + file);
		
    if (/_test\.js$/.test(file)) {
        tests.push(file);
        console.log('file : ' + file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public',
		//baseUrl: './',

    paths: {
      jquery: 'bower_components/jquery/dist/jquery.min',
			angular: 'bower_components/angular/angular',
			angularResource: 'bower_components/angular-resource/angular-resource',
			angularUiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
			angularRoute: 'bower_components/angular-route/angular-route',
			angularMocks: 'bower_components/angular-mocks/angular-mocks',
			underscore: 'bower_components/underscore/underscore',
			text: 'bower_components/requirejs-text/text',
			bootstrap : 'bower_components/bootstrap/dist/js/bootstrap.min'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});