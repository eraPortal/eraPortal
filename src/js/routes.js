'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('circle', {
                url: '/circle',
                templateUrl: 'templates/circle.html'
            })
            .state('job', {
                url: '/job',
                templateUrl: 'templates/job.html'
            })
            .state('vacancies', {
                url: '/vacancies',
                templateUrl: 'templates/dashboard.html'
            })
            .state('messages', {
                url: '/messages',
                templateUrl: 'templates/messages.html'
            })
            .state('articles', {
                url: '/articles',
                templateUrl: 'templates/articles.html'
            })
            .state('following', {
                url: '/following',
                templateUrl: 'templates/circle.html'
            })
            .state('followers', {
                url: '/followers',
                templateUrl: 'templates/followers.html'
            })
            .state('recommended', {
                url: '/recommended',
                templateUrl: 'templates/recommended.html'
            });
    }
]);