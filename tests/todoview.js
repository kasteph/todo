var _                  = require('../node_modules/backbone/node_modules/underscore'),
    TodoModel          = require('../app/models/todo.js'),
    TodoCollection     = require('../app/collections/todo.js'),
    TodoView           = require('../app/views/todo.js'),
    TodoCollectionView = require('../app/views/todocollection.js'),
    TodoCreateView     = require('../app/views/todocreate.js');

describe('TodoView', function(){
  
  var model, view;

  beforeEach(function() {
    model = new TodoModel({task: 'cook dinner'});
    view  = new TodoView({model: model});
    view.render();
  });

  it('should have a tag name of li', function(){
    expect(view.tagName).toEqual('li');
  });

  it('should have a class name of todo', function(){
    expect(view.className).toEqual('todo');
  });

  it('should display the specified task', function(){
    expect(view.el).toContainText('cook dinner');
  });

  it('should have a button', function(){
    expect(view.el).toContainElement('button');
  });

  it('should have li id of the model\'s cid for each task', function(){
    expect(view.el).toHaveAttr('id', model.cid);
  });

  describe('when clicking delete', function(){

    it('should show a confirmation box when clicked', function(){
      spyOn(window, 'confirm');

      view.$el.find('.delete').click();

      expect(window.confirm).toHaveBeenCalled();
    });

    it('should destroy the model if the user confirms', function(){
      spyOn(window, 'confirm').and.returnValue(true);

      spyOn(model, 'destroy');

      view.$el.find('.delete').click();

      expect(model.destroy).toHaveBeenCalled();
    });
  });



});

describe('TodoCollectionView', function(){
  var collection, view, bus;

  beforeEach(function(){
    bus = _.extend({}, Backbone.Events);

    collection = new TodoCollection([
      new TodoModel({task: 'make soup'}),
      new TodoModel({task: 'eat soup'})
    ]);

    view = new TodoCollectionView({model: collection, bus: bus});

    view.render();
  });

  it('should have an id of todos', function(){
    expect(view.id).toEqual('todos');
  });

  it('should have a ul tag', function(){
    expect(view.tagName).toEqual('ul');
  });


  // andCallFake is not working. Test below fails.

  it('should render the new view when it is created', function(){
    var task = new TodoModel({task: 'test this'});
    
    spyOn(view, 'onAdd').andCallFake(function(options){

      collection.push(task);

      options.success();
    });

    expect(view.$el.find('#' + task.cid)).toBeDefined();
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

  it('should have a button', function(){
    expect(view.el).toContainElement('button');
  });


  // The following tests are not working. The HTML element doesn't
  // seem to have been clicked.

  describe('when clicking add', function(){
    it('should call onClickAdd when button is clicked', function(){
      spyOn(view, 'onClickAdd');
      
      view.$el.find('button').click();

      expect(view.onClickAdd).toHaveBeenCalled();
    });
    it('should display an error message if no task is given', function(){
      view.$el.find('#add').click();

      expect(view.el.querySelector('#error')).toHaveText('No task specified');
    });
  });


});