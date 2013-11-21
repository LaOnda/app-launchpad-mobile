'use strict';

angular.module('lpApp')
    .controller('MainCtrl', ['$scope', 'df' , function ($scope, df) {
        window.Scope = $scope;
        //$scope.userSession = df.apis.user.getSession();
        df.success = function(){
            if(df.apis.user && df.ready === true){
//                console.log(df.apis);
//                return;
                df.apis.user.getSession(function(response){
                    console.log(response);
                });
            }
        }

    }]);
