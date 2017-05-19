/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" /> 

app.service("EstimateProj_Service", function ($http) {
    // Call service to add estimate
    this.post = function (Estimate) {
        var request = $http({
            method: "post",
            url: "http://localhost:5327/EstimateService1.svc/AddNewEstimate",
            data: Estimate
        });
        return request;
    }
    // Call service to add scheduling
    this.scheduling = function (Schedule){
        var request = $http({
            method: "post",
            url: "http://localhost:5327/EstimateService1.svc/AddScheduling",
            data: Schedule
        });
        return request;
    }
    

    // Service to retrieve estimate list
    this.getAllEstimate = function () {
        return $http.get("http://localhost:5327/EstimateService1.svc/GetAllEstimate");
    };
    // Service to retrieve client data 
    this.getClientMaster = function () {
        return $http.get("http://localhost:5327/EstimateService1.svc/GetClientMaster");
    };
    // Service to retrieve brand data 
    this.getBrandMaster = function () {
        return $http.get("http://localhost:5327/EstimateService1.svc/GetBrandMaster");
    };
    
});
