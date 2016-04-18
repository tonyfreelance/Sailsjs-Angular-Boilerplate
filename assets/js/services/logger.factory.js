'use strict';

angular
    .module('')
    .factory('logger', logger);

logger.$inject = ['toastr', '$log'];

function logger(toastr, $log) {
    var service = {
        error: error,
        success: success
    };
    
    return service;
    ////////////////////////////////////
    
    function error(message) {
        toastr.error(message);
        $log.error('Error: ' + message);
    }
    
    function success(message) {
        toastr.success(message);
        $log.info(message);
    }
}