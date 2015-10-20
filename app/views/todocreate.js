var TodoModel = require('../models/todo.js');

var TodoCreateView = Backbone.View.extend({
  id: 'create',

  tagName: 'div',

  events: {
    'click #add'    : 'onClickAdd',
    'click input'   : 'onClickInput',
    'keypress #task': 'onKeypress',
  },

  initialize: function(options){
    this.bus = options.bus;
  },

  onKeypress: function(e){
    if (e.keyCode === 13)
      this.onClickAdd();
  },

  onClickAdd: function(){
    var input = document.getElementById('task'),
        error = document.getElementById('error');

    if (error.innerHTML)
      error.innerHTML = '';

    if (!input.value) {
      error.innerHTML = 'No task specified';
      return
    };

    var val  = input.value,
        todo = new TodoModel({task: val});
    
    input.value = '';
    
    this.bus.trigger('addTask', todo);
  },

  render: function(){
    window.view = this;
    this.el.innerHTML = '<input type="text" id="task" placeholder="Enter task"></input><button id="add">Add</button><div id="error"></div>';
    return this;
  }
});

module.exports = TodoCreateView;