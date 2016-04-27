(function(){

    angular
        .module('Electra.device')
        .factory('DeviceFactory', DeviceFactory)
        .factory('ARDN', ARDN);

    function DeviceFactory($resource) {
        return $resource(ELECTRA.BASE + '/devices', {}, {
            changeStatus: { method: 'PUT' }
        });
    }

    function ARDN($resource) {
        return $resource(ELECTRA.ARDN);
    }
})()