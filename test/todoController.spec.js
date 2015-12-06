describe('TodoController', function() {
  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoController');
  }));

  var firstTask = [
    {
      "name": "task1",
      "body": "make more tests"
    }
  ];

  it('initialises with an empty task bar', function() {
    expect(ctrl.taskName).toBeUndefined();
    expect(ctrl.taskBody).toBeUndefined();
  });

  it('displays tasks details from the session', function() {
    expect(ctrl.taskList).toEqual(firstTask);
  });
});
