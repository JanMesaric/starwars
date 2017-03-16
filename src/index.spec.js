import app from './index'

describe('testModule module', function() {
    beforeEach(angular.module('app'));

    describe('test controller', function() {
        var scope, testCont;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
        }))

    });

    it('should uppercase correctly', function() {
        expect(0).toEqual(0);
    });
});
