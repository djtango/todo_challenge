describe('TodoFilterController', function() {
  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoFilterController')
  }));

  it('can toggle to show done tasks', function() {
    ctrl.showDone = true;
    expect(ctrl.showDone).toBe(true);
  });

  it('can toggle to show active tasks', function() {
    ctrl.showActive = true;
    expect(ctrl.showActive).toBe(true);
  });

  it('can recognise that the filter is off if both done and active are toggled', function() {
    ctrl.showActive = true;
    ctrl.showDone = true;
    expect(ctrl.isFilterOff()).toBe(true)
  });

  it('can set the filter to off by calling showAll', function() {
    ctrl.showAll();
    expect(ctrl.isFilterOff()).toBe(true)
  });
});
