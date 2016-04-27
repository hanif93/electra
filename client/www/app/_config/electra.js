(function() {

    angular
        .module('Electra')
        .config(Routes)
        .run(init)
        .controller('rootCtrl', rootCtrl)
        .factory('Login', Login);

    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('device', {
                url: '/device',
                views: {
                    'device': {
                        templateUrl: '/app/Device/device.html',
                        controller: 'deviceCtrl',
                        controllerAs: 'device'
                    }
                }
            })

            .state('map', {
                url: '/map',
                views: {
                    'map': {
                        templateUrl: '/app/Map/map.html',
                        controller: 'mapCtrl',
                        controllerAs: 'map'
                    }
                }
            })


        $urlRouterProvider.otherwise('/device');
    }

    function init($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }

    function rootCtrl($ionicModal, Login, $scope) {
        var vm = this;
        vm.login = login;
        vm.loggedIn = false;

        $ionicModal.fromTemplateUrl('/app/Login/login.html', {
            scope: vm,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.modal = modal;
        });

        if (!vm.loggedIn) {
            vm.modal.show();
        }

        function login(data) {
            Login.save(data, function(r) {
                if (r.success) {
                    vm.loggedIn = true;
                }
            })
        }
    }

    function Login($resource) {
        return $resource(ELECTRA.BASE + '/login')
    }

})();