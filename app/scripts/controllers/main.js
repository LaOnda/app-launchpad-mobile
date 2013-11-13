'use strict';

angular.module('lpApp')
    .controller('MainCtrl', ['$scope', 'df' , function ($scope, df) {

        df.success = function(){
            if(df.ready === true){
                df.apis.user.getSession(function(response){
                    console.log(response);
                });
            }
        }

    }]);
