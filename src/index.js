import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import DashboardCtrl from './dashboard/DashboardCtrl';
import HttpService from './common/http.service';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .controller('DashboardController', DashboardCtrl)
  .service('Http', HttpService);
