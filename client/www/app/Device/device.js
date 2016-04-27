(function(){

    angular
        .module('Electra.device', [])
        .controller('deviceCtrl', deviceCtrl);

    function deviceCtrl(DeviceFactory, $ionicPopup, $scope) {
        var vm = this;
        vm.changeStatus = changeStatus;

        $scope.$on('user:logout', clearStatus);

        DeviceFactory.query(function(response) {
            console.info(response)
            response.forEach(function(v) {
                v.status = (v.status === "0") ? false : true;
                v.in_repair = (v.in_repair === "0") ? false : true;
            });

            vm.items = response;
            console.log(response)
        });

        function changeStatus(data) {
            var copy = {};
            angular.copy(data, copy)
            copy.status = (copy.status) ? 1 : 0;
            copy.in_repair = (copy.in_repair) ? 1 : 0;

            DeviceFactory.changeStatus(copy, function(r) {
                $ionicPopup.show({
                    title: 'Notification',
                    subTitle: (r) ? 'Device status changed' : 'Status change failed',
                    buttons: [ { text: 'OK', type: 'button-dark' }]
                })
            })
        }

        function clearStatus() {
            vm.items.forEach(function(v) {
                v.status = "0";
                DeviceFactory.changeStatus(v);
            });
        }
    }


})()