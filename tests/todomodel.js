var TodoModel = require('../app/models/todo.js');

describe('TodoModel', function(){
  
  var todoModel;

  beforeEach(function() {
    todoModel = new TodoModel();
  });

  it('should require a task', function(){
    expect(todoModel.isValid()).toBeFalsy();
  });
});