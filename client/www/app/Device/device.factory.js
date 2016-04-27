(function(){

    angular
        .module('Electra.device')
        .factory('DeviceFactory', DeviceFactory);

    function DeviceFactory($resource) {
        return $resource(ELECTRA.BASE + '/devices', {}, {
            changeStatus: { method: 'PUT' }
        });
    }


})()