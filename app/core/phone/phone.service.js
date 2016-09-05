/**
 * Created by dave on 9/4/2016.
 */
"use strict";

angular.
    module('core.phone').
    factory('Phone', ['$resource',
        function ($resource) {
          return $resource('phones/:phoneId.json', {}, {
            query: {
              method: 'GET',
              params: {phoneId: 'phones'},
              isArray: true
            }
          });
        }
    ]);