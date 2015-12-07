todo.controller('TodoController', [function() {

  var self = this;
  self.taskList = [];

  self.saveTask = function() {

    var newTask = { "name": self.newTaskName,
                    "body": self.newTaskBody };
    if(!!self.newTaskName || !!self.newTaskBody) {
      self.taskList.push(newTask);
      self.newTaskName = "";
      self.newTaskBody = "";
    };
  };

  self.isDone = function() {
    return !!self.doneStatus
  };

}]);
