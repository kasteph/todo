var _                  = require('../node_modules/backbone/node_modules/underscore'),
    TodoModel          = require('../app/models/todo.js'),
    TodoCollection     = require('../app/collections/todo.js'),
    TodoView           = require('../app/views/todo.js'),
    TodoCollectionView = require('../app/views/todocollection.js'),
    TodoCreateView     = require('../app/views/todocreate.js');

describe('TodoView', function(){
  
  var todoModel, todoView;

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

  it('should display the specified task', function(){
    expect(todoView.render().el.textContent).toEqual('cook dinner');
  });

});

describe('TodoCollectionView', function(){
  var todoModel, todoCollection, todoCollectionView, bus;

  beforeEach(function(){
    bus = _.extend({}, Backbone.Events);

    todoCollection = new TodoCollection([
      new TodoModel({task: 'make soup'}),
      new TodoModel({task: 'eat soup'})
    ]);

    todoCollectionView = new TodoCollectionView({model: todoCollection, bus: bus});

    todoCollectionView.render();
  });

  it('should have an id of todos', function(){
    expect(todoCollectionView.id).toEqual('todos');
  });

  it('should have a ul tag', function(){
    expect(todoCollectionView.tagName).toEqual('ul');
  });
});

describe('TodoCreateView', function(){
  var view, bus;

  beforeEach(function(){
    bus  = _.extend({}, Backbone.Events);
    view = new TodoCreateView({bus: bus});
    view.render();
  });

  it('should render an input text field', function(){
    expect(view.el).toContainElement('input[type="text"]');
  });

  it('should render a button', function(){
    expect(view.el).toContainElement('button');
  });


  // The following tests are not working. The HTML element doesn't
  // seem to have been clicked.
  
  // describe('when clicking add', function(){
  //   it('should call onClickAdd when button is clicked', function(){
  //     spyOn(view, 'onClickAdd');
      
  //     view.$el.find('#add').click();

  //     expect(view.onClickAdd).toHaveBeenCalled();
  //   });
  //   it('should display an error message if no task is given', function(){
  //     spyOn(view, 'onClickAdd')

  //     $('#add').click();

  //     expect(view.el.querySelector('#error')).toHaveText('No task specified');
  //   });
  // });


});