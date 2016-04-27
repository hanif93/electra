(function(){

    angular
        .module('Electra.device', [])
        .controller('deviceCtrl', deviceCtrl);

    function deviceCtrl(DeviceFactory, ARDN, $ionicPopup, $scope) {
        var vm = this;
        vm.changeStatus = changeStatus;

        $scope.$on('user:logout', clearStatus);

        DeviceFactory.query(function(response) {
            response.forEach(function(v) {
                v.status = (v.status === "0") ? false : true;
                v.in_repair = (v.in_repair === "0") ? false : true;
            });

            vm.items = response;
        });

        function changeStatus(data) {
            var copy = {};
            var ardnID = data.name.substr(1);
            var ardnStatus = (data.status) ? '255' : '000';

            angular.copy(data, copy)
            copy.status = (copy.status) ? 1 : 0;
            copy.in_repair = (copy.in_repair) ? 1 : 0;

            ARDN.get({ pin: ardnID + ardnStatus }, __updateDB, __updateDB)
        }

        function __updateDB() {
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
                changeStatus(v);
            });
        }
    }


})()