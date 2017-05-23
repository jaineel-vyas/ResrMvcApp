/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" /> 
/// <reference path="Services.js" /> 

// controller for add estimate page
app.controller("AddEstimate_Controller", function ($scope, EstimateProj_Service) {
  
    $scope.OperType = 1;
    $scope.client = "";
    $scope.brand = "";
    GetMasterData();
    
    function GetMasterData() {
        $scope.CurrDate = new Date();

        var promisemaster = EstimateProj_Service.getClientMaster();
        promisemaster.then(function (response) {
            $scope.clientdata = response.data.ClientName;

        }, function (err) {
            console.log("Some error occured" + err);
        });
        

        var promisemaster1 = EstimateProj_Service.getBrandMaster();
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
            var promisePost = EstimateProj_Service.post(Estimate);  
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

//controller for scheduling page
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
            var promisePost = EstimateProj_Service.scheduling(Schedule);
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

//controller for landing page of the website
app.controller("GetEstimates_Controller", function ($scope, AngularJs_Service) {

    GetAllRecords();
    var listcount;
    function GetAllRecords() {
        var promiseGet = EstimateProj_Service.getAllEstimate();
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
  
  $scope.generateexcel =function() {
                  
        var estdata = $scope.Estimates;
         var array = typeof estdata != 'object' ? JSON.parse(estdata) : estdata;
        var str = 'Estimate No,Period From,Period To,Client,Brand,Total Cost, Status\r\n';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

       var csv = str;
      
        var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

        if (navigator.msSaveBlob) { // IE 10+
            //IE 
            navigator.msSaveBlob(blob, "ExcelReport.csv")
        } else {
            //others 
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", "ExcelReport.csv");
                link.style = "visibility:hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }

    }
    
});

//controller for editions list page
app.controller("Editions_Controller", function ($scope, AngularJs_Service) {

    var promiseGet = EstimateProj_Service.getAllEdition();
    promiseGet.then(function (pl) {
        $scope.Editions = pl.data;
        listcount = p1.data.length;
    },
          function (errorPl) {
              $log.error('Some Error in Getting Records.', errorPl);
          });
}
});

