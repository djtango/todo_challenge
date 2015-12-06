describe('Todo - task manager', function() {

  var saveTaskBtn = element(by.className('btn'));
  var newName = element(by.model('todoCtrl.newTaskName'));
  var newBody = element(by.model('todoCtrl.newTaskBody'));

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Todo');
  });

  it('a user can save a new task with a name and description', function() {
    browser.get('http://localhost:8080');
    var tasks;

    newName.sendKeys('First Task');
    newBody.sendKeys('Test things with Protractor');
    saveTaskBtn.click();

    var firstTask = element.all(by.repeater('task in todoCtrl.taskList')).get(0);
    expect(firstTask.getText()).toEqual('First Task\nTest things with Protractor');
  });

});
