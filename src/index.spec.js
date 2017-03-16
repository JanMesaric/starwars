describe('inner workings', function () {
  beforeEach(angular.mock.inject((DashboardController, _$scope_) => {
    timesheet = _Timesheet_;
    $httpBackend = _$httpBackend_;
    core = _Core_;
  }));

  it('sshould log', function () {

      expect(0).toEqual(0)
  });
})
