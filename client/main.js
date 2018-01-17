import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todoList from '../imports/components/todoList/todoList';

import '../imports/startup/accounts-config.js';

angular.module('angular-meteor-todos', [
  angularMeteor,
  todoList.name,
  'accounts.ui'
]);