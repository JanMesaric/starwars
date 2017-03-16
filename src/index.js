import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import DashboardCtrl from './dashboard/dashboard.controller';
import DashboardDetailsCtrl from './dashboard/dashboard-details.controller';
import HttpService from './common/http.service';
import Back from './common/back.directive';
import Loader from './common/loader.directive';
import ListCard from './dashboard/list-card.directive';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .controller('DashboardController', DashboardCtrl)
  .controller('DashboardDetailsController', DashboardDetailsCtrl)
  .service('Http', HttpService)
  .directive('back', Back)
  .directive('loader', Loader)
  .directive('listCard', ListCard)
  .constant('API_ENDPOINT', 'http://swapi.co/api');
