/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" /> 

app.service("AngularJs_Service", function ($http) {
    //Create new record  
    this.post = function (Estimate) {
        var request = $http({
            method: "post",
            url: "http://localhost:5327/EstimateService1.svc/AddNewEstimate",
            data: Estimate
        });
        return request;
    }

    this.scheduling = function (Schedule){
        var request = $http({
            method: "post",
            url: "http://localhost:5327/EstimateService1.svc/AddScheduling",
            data: Schedule
        });
        return request;
    }
    /*
    //Update the Record  
    this.put = function (StudentID, Student) {
        debugger;
        var request = $http({
            method: "put",
            url: "http://localhost:5327/StudentService.svc/UpdateStudent",
            data: Student
        });
        return request;
    }

    */
    this.getAllEstimate = function () {
        return $http.get("http://localhost:5327/EstimateService1.svc/GetAllEstimate");
    };

    this.getClientMaster = function () {
        return $http.get("http://localhost:5327/EstimateService1.svc/GetClientMaster");
    };

    this.getBrandMaster = function () {
        return $http.get("http://localhost:5327/EstimateService1.svc/GetBrandMaster");
    };
    /*//Get Single Records  
    this.get = function (StudentID) {
        return $http.get("http://localhost:27321/StudentService.svc/GetStudentDetails/" + StudentID);
    }

    //Delete the Record  
    this.delete = function (StudentID) {
        var request = $http({
            method: "delete",
            url: "http://localhost:27321/StudentService.svc/DeleteStudent/" + StudentID
        });
        return request;
    }*/
});