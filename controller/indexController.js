var myApp = angular.module("exampleApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.data={a:"cc"};
        $scope.aa="xjw";
        $scope.todos = [
            {action: "a", complete: false},
            {action: "b", complete: true},
            {action: "c", complete: false},
            {action: "d", complete: false}
        ];
        $scope.viewFile=function(){
            return $scope.showList?"view/list.html":"view/table.html";
        }
    });