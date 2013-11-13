'use strict';

angular.module('lpApp')
  .controller('LoginpageCtrl', function ($scope, $resource) {
    console.log("here i am");
        var User = $resource('http://localhost/rest/user/session/:userId', {userId:'@id'});
        User.get();

  });
