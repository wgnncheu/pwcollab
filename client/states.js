angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.landing', {
        views: {
            app: {
                controller: 'app_landing',
                templateProvider: function (app) {
                    return app.templateProvider('app.landing');
                }
            }
        }
    }).state('app.searchcontrols', {
        views: {
            app: {
                controller: 'app_searchcontrols',
                templateProvider: function (app) {
                    return app.templateProvider('app.searchcontrols');
                }
            }
        }
    }).state('app.stockbalancereport', {
        views: {
            app: {
                controller: 'app_stockbalancereport',
                templateProvider: function (app) {
                    return app.templateProvider('app.stockbalancereport');
                }
            }
        }
    }).state('app.orderviewsearchcontrols', {
        views: {
            app: {
                controller: 'app_orderviewsearchcontrols',
                templateProvider: function (app) {
                    return app.templateProvider('app.orderviewsearchcontrols');
                }
            }
        }
    });
});