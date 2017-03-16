export default function ($window) {
  return {
    template: `<button class="btn btn-primary" ng-click="back()" style="margin: 10px 0 0 10%;"><i class="fa fa-arrow-left" aria-hidden="true"></i> back</button>`,
    restrict: 'E',
    controller: $scope => {
      $scope.back = () => {
        $window.history.back();
      }
    }
  };
}
