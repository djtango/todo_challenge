describe('TodoController', function() {
  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoController');
  }));

  it('initialises with an empty task bar', function() {
    expect(ctrl.newTaskName).toBeUndefined();
    expect(ctrl.newTaskBody).toBeUndefined();
  });

  it('appends a new task onto the existing task list', function() {

    var countTasks = ctrl.taskList.length;
    var secondTask = {
      "name": "task2",
      "body": "write your code to pass your tests"
    };
    ctrl.newTaskName = "task2";
    ctrl.newTaskBody = "write your code to pass your tests";

    ctrl.saveTask();
    expect(ctrl.taskList).toEqual([secondTask]);
    var diffCounts = ctrl.taskList.length - countTasks;
    expect(diffCounts).toEqual(1);
  });
});
