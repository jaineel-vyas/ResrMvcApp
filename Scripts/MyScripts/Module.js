/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.js" />
/// <reference path="../angular-route.min.js" />
var app;
(function () {
    app = angular.module("EstimateModule", ["ngRoute", "ui.bootstrap","angularUtils.directives.dirPagination"]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '//Views/Estimate/landingpage.html',
            controller: 'GetEstimates_Controller'
             })

            // route for the add estimate page
            .when('/addestimate', {
                templateUrl: '//Views/Estimate/addestimate.html',
                controller: 'AddEstimate_Controller'
            })
            
            // route for the scheduling page
        .when ('/shceduling/:estimateid',{
            templateUrl: '//View/Estimate/SchedulingEdition.html',
            controller: 'Scheduling_Controller'
        })
        
        .otherwise({ redirectTo: '/' });
            
    }]);

})();
