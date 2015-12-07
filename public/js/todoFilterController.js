todo.controller('TodoFilterController', ['$scope', function($scope) {
  var self = this;

  self.showAll = function() {
    self.showDone = true;
    self.showActive = true;
  };

  self.isFilterOff = function() {
    return !!self.showDone && !!self.showActive;
  };

  $scope.filterSetting = function(task) {
    if (self.isFilterOff()) {
      return true;
    } else if (self.showDone) {
      return task.isDone();
    } return !task.isDone();
  };

}]);
