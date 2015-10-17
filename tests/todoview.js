var TodoView = require('../app/views/todo.js');

describe('TodoView', function(){
  
  var todoView;

  beforeEach(function() {
    todoView = new TodoView();
    todoView.render();
  });

  it('should have a tag name of li', function(){
    expect(todoView.tagName).toEqual('li');
  });
});