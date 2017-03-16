export default class HttpService {
  constructor($http, API_ENDPOINT, $q, $rootScope) {
    this.get = (url = '', searchable = {}) => {
      return this.fireRequest(url, 'GET', searchable);
    };

    this.fireRequest = (url = '', method = null, searchable = {}) => {
      const deferred = $q.defer();

      $rootScope.isLoading = true;

      $http({
        url: `${API_ENDPOINT}/${url}/`,
        method,
        params: {search: searchable}
      }).then(result => {
        deferred.resolve(result.data);
      }).catch(error => {
        deferred.reject(error);
      }).finally(() => {
        $rootScope.isLoading = false;
      });

      return deferred.promise;
    };
  }
}
