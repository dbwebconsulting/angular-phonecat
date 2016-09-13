<<<<<<< HEAD
'use strict';

angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
=======
"use strict";

angular.
  module('core').
  filter('checkmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    }
});
>>>>>>> ang-step-14
