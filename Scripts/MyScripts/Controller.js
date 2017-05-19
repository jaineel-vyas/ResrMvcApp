/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" /> 
/// <reference path="Services.js" /> 

app.controller("AddEstimate_Controller", function ($scope, AngularJs_Service) {
  
    $scope.OperType = 1;
    $scope.client = "";
    $scope.brand = "";
    GetMasterData();
    
    function GetMasterData() {
        $scope.CurrDate = new Date();

        var promisemaster = AngularJs_Service.getClientMaster();
        promisemaster.then(function (response) {
            $scope.clientdata = response.data.ClientName;

        }, function (err) {
            console.log("Some error occured" + err);
        });
        

        var promisemaster1 = AngularJs_Service.getBrandMaster();
        promisemaster1.then(function (response) {
            $scope.branddata = response.data.BrandName;

        }, function (err) {
            console.log("Some error occured" + err);
        });
       
    }
    $scope.clientselected = function (item) {
        $scope.client = item;
    }
    $scope.brandselected = function (item) {
        $scope.brand = item;
    }
    function ClearFields() {  
        $scope.CampaignName = "";
        $scope.AgencyName = "";
        $scope.PeriodFrom = "";
        $scope.PeriodTo = "";
        $scope.ClientName = "";  
        $scope.BrandName = "";
        $scope.EstimateNo = "";
        $scope.CurrDate = "";
        $scope.PONO = "";
        $scope.SACPer = "";
        $scope.AACPer = "";
        $scope.EstDate = "";
    }  
    
    $scope.addpub = function () {  
        var Estimate = {  
            CampaignName: $scope.CampaignName,
            AgencyName: $scope.AgencyName,
            PeriodFrom: $scope.PeriodFrom,
            PeriodTo: $scope.PeriodTo,
            ClientID: 1,//$scope.ClientName,  
            BrandID: 1,//$scope.BrandName,
            EstimateNo: $scope.EstimateNo,
            EstimateDate: new Date(),//$scope.CurrDate,
            pono: $scope.PONO,
            SACPer: $scope.SACPer,
            AACPer: $scope.AACPer,
            podate: $scope.EstDate
        };  
        if ($scope.OperType === 1) {  
            var promisePost = AngularJs_Service.post(Estimate);  
            promisePost.then(function (response) {
              //  $scope.StudentID = response.data.StudentID;
               // GetAllRecords();  
  
                ClearModels();  
            }, function (err) {  
                console.log("Some error Occured" + err);  
            });  
        }


    }
});

app.controller("Scheduling_Controller", function ($scope, $routeParams, $route, AngularJs_Service) {
    $scope.addschedule = function () {
        var Schedule = {
            Scheduledate: $scope.ScheduleDate,
            Caption: $scope.CaptionName,
            Language: $scope.Language,
            Height: $scope.Height,
            Widht: 1,//$scope.ClientName,  
            TotalSize: 1,//$scope.BrandName,
            Rate: $scope.Rate,
            NoOfInser: $scope.NoInsertion,//$scope.CurrDate,
            TotalCost: $scope.TotalCost,
            AgDiscount: $scope.AvgDisc,
            NetCost: $scope.NetCost,
            //EstimateNo: $routeParams.estimateno,
            EstimateId : $routeParams.estimateid
        };
        if ($scope.OperType === 1) {
            var promisePost = AngularJs_Service.scheduling(Schedule);
            promisePost.then(function (response) {
               // $scope.StudentID = response.data.StudentID;
               // GetAllRecords();

                ClearModels();
            }, function (err) {
                console.log("Some error Occured" + err);
            });
        }


    }
});

app.controller("GetEstimates_Controller", function ($scope, AngularJs_Service) {

    GetAllRecords();
    var listcount;
    function GetAllRecords() {
        var promiseGet = AngularJs_Service.getAllEstimate();
        promiseGet.then(function (pl) {
            $scope.Estimates = pl.data;
            listcount = p1.data.length;
        },
              function (errorPl) {
                  $log.error('Some Error in Getting Records.', errorPl);
              });
    }
    $scope.totalItems = listcount;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 10;
    $scope.columnname = 'name';
    $scope.sortReverse = false;
    
});

app.controller("Editions_Controller", function ($scope, AngularJs_Service) {

    var promiseGet = AngularJs_Service.getAllEdition();
    promiseGet.then(function (pl) {
        $scope.Editions = pl.data;
        listcount = p1.data.length;
    },
          function (errorPl) {
              $log.error('Some Error in Getting Records.', errorPl);
          });
}
});

/* app.controller("ClientMasterLoad", function ($scope, AngularJs_Service) {

    var promisemaster = AngularJs_Service.getClientMaster();
    promisemaster.then(function () {
        $scope.clientdata = p1.data.ClientName;

    }, function (err) {
        console.log("Some error occured" + err);
    });
});

app.controller("BrandMasterLoad", function ($scope, AngularJs_Service) {
    var promisemaster1 = AngularJs_Service.getBrandMaster();
    promisemaster1.then(function () {
        $scope.branddata = p1.data.BrandName;

    }, function (err) {
        console.log("Some error occured" + err);
    });
});*/