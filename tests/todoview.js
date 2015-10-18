var TodoModel = require('../app/models/todo.js'),
    TodoView  = require('../app/views/todo.js');

describe('TodoView', function(){
  
  var todoModel,
      todoView;

  beforeEach(function() {
    todoModel = new TodoModel({task: 'cook dinner'});
    todoView  = new TodoView({model: todoModel});
    todoView.render();
  });

  it('should have a tag name of li', function(){
    expect(todoView.tagName).toEqual('li');
  });

  it('should have a class name of todo', function(){
    expect(todoView.className).toEqual('todo');
  });

});