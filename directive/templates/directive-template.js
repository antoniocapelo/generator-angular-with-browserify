'use strict';
require('angular/angular');

angular.module('<%= name %>Module', [])
    .directive('<%= name %>', [
        function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'src/<%= name %>/<%= name %>.tpl.html',
                scope: {},
                link: function(scope, element, attrs) {
                    scope.directiveTitle = 'dummy';
                }
            };
        }
    ]);

