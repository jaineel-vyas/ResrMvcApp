/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.js" />
/// <reference path="../angular-route.min.js" />
var app;
(function () {
    app = angular.module("EstimateModule", ["ngRoute", "ui.bootstrap"]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '//Views/Estimate/landingpage.html',
            controller: 'GetEstimates_Controller'
             })

            // route for the about page
            .when('/addestimate', {
                templateUrl: '//Views/Estimate/addestimate.html',
                controller: 'AddEstimate_Controller'
            })
            
            
        .when ('/shceduling/:estimateid',{
            templateUrl: '//View/Estimate/SchedulingEdition.html',
            controller: 'Scheduling_Controller'
        })
        .otherwise({ redirectTo: '/' });
            // route for the contact page
            /*.when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'CRUD_AngularJs_RESTController'
            });*/
    }]);

})();
