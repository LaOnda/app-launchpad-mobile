'use strict';

angular.module('lpApp')
  .directive('widget', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the widget directive');
      }
    };
  });
