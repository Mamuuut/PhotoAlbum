requirejs.config({
    shim: {
    },
    paths: {
        jquery      : 'libs/jquery-min',
        text        : 'libs/text',
        lodash      : 'libs/lodash-min',
        bootstrap   : 'libs/bootstrap.min',
        can         : 'libs/can'
    }
});

require([
    'jquery',
    'app'
], function($, App) {

    new App($('#app'));

});
