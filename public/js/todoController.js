todo.controller('TodoController', [function() {

  var self = this;
  self.taskList = [];
  self.saveTask = function() {
    var newTask = {
      "name": self.newTaskName,
      "body": self.newTaskBody
    };
    self.taskList.push(newTask);
  };
}]);
