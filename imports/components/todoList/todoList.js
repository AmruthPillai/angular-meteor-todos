import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';

import {
  Tasks
} from '../../api/tasks.js';

class TodoListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      tasks() {
        // Show newest tasks at the top
        return Tasks.find({}, {
          sort: {
            createdAt: -1
          }
        })
      }
    })
  }

  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      createdAt: new Date
    });
 
    // Clear form
    this.newTask = '';
  }
}

export default angular.module('todoList', [
  angularMeteor
]).component('todoList', {
  templateUrl: 'imports/components/todoList/todoList.html',
  controller: ['$scope', TodoListCtrl]
});