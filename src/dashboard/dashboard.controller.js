export default class DashboardCtrl {
    constructor($scope, Http, $rootScope) {
        $scope.checkbox = {};
        $scope.search = {};

        let watch = $rootScope.$watch('isLoading', () => {
            $scope.isLoading = $rootScope.isLoading;
        })

        $scope.search = () => {
            Http.get($scope.checkbox.val, $scope.search.val).then(response => {
                $scope.results = response.results;
            })
        }
    }
}
