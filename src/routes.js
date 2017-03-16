export default routesConfig;

/** @ngInject */
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
    .state('dashboard.details', {
      url: '/details/:id',
      templateUrl: './dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm',
      parameters: ['id']
    });
}
