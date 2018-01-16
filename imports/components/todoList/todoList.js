import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todoList.html';
 
class TodoListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
 
export default angular.module('todoList', [
    angularMeteor
]).component('todoList', {
    templateUrl: 'imports/components/todoList/todoList.html',
    controller: TodoListCtrl
});