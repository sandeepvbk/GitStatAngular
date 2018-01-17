


angular.module("app", ["chart.js"]).controller("BarCtrl", function ($scope, $http) {
  
  $http.get('http://localhost:8080/rest/gitstatus/getAllRepoLocal').
      then(function(response) {
          var jsonData = response.data;
          var count = Object.keys(jsonData).length;
          var labels = [];
          var data = [];
          for(var prop in jsonData){
              labels.push(prop);
              data.push(jsonData[prop]);
          }
          $scope.labels = labels;
          $scope.series = ['Series A'];
          $scope.data = data;
      });
  

});