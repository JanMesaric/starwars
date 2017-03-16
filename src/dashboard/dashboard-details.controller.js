export default class DashboardDetailsController {
    constructor($scope, $stateParams, $state) {
        $scope.type = $stateParams.type
        $scope.data = $stateParams.data

        if (!$scope.type || !$scope.data) {
            console.log('srsly',$scope.type ,$scope.data)
            $state.go('dashboard');
        }
    }
}
