(function(){

    angular
        .module('Electra.device', [])
        .controller('deviceCtrl', deviceCtrl);

    function deviceCtrl(DeviceFactory) {
        console.log('Device Controller');
    }


})()