(function(){

    angular
        .module('Electra.device')
        .factory('DeviceFactory', DeviceFactory);

    function DeviceFactory($resource) {
        return $resource('localhost/device/:id', { 'id': '@id'});
    }


})()