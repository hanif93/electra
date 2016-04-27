(function() {

    angular
        .module('Electra')
        .config(Routes)
        .run(init)
        .controller('rootCtrl', rootCtrl);

    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs', {
                url: '/electra',
                // abstract: true,
                templateUrl: '/app/_config/tabs.html'
            })
            .state('tabs.device', {
                url: '/device',
                views: {
                    'tab-device': {
                        templateUrl: '/app/Device/device.html',
                        controller: 'deviceCtrl',
                        controllerAs: 'device'
                    }
                }
            })

        $urlRouterProvider.otherwise('/electra/device');
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

    function rootCtrl(){
        console.log("root")
    }

})();