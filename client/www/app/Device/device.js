(function(){

    angular
        .module('Electra.device', [])
        .controller('deviceCtrl', deviceCtrl);

    function deviceCtrl(DeviceFactory, $ionicPopup) {
        var vm = this;
        vm.changeStatus = changeStatus;

        DeviceFactory.query(function(response) {
            console.info(response)
            response.forEach(function(v) {
                v.status = (v.status === "0") ? false : true;
            });

            vm.items = response;
            console.log(response)
        });

        function changeStatus(data) {
            var copy = {};
            angular.copy(data, copy)
            copy.status = (copy.status) ? 1 : 0
            DeviceFactory.changeStatus(copy, function(r) {
                $ionicPopup.show({
                    title: 'Notification',
                    subTitle: (r) ? 'Device status changed' : 'Status change failed',
                    buttons: [ { text: 'OK', type: 'button-dark' }]
                })
            })
        }
    }


})()