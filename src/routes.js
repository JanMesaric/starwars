export default routesConfig;

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: './dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
    })
      .state('details', {
        url: '/details',
        templateUrl: './dashboard/dashboard-details.html',
        controller: 'DashboardDetailsController',
        controllerAs: 'vm',
        params: {data: null, type: null}
    });
}
