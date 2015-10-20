var TodoView = require(__dirname + '/todo.js');

var TodoCollectionView = Backbone.View.extend({
  id: 'todos',

  tagName: 'ul',

  initialize: function(options){
    this.bus = options.bus;
    this.bus.on('addTask', this.onAdd, this);
    this.model.on('remove', this.onRemove, this);

    if (!(options && options.model))
      throw new Error('No model is specified');
  },

  onRemove: function(view){
    console.log('onRemove', this, view);
    this.$('li[id="' + view.cid + '"]').remove();
  },

  onAdd: function(todo){
    var view = new TodoView({model: todo});
    this.model.push(todo);
    this.el.appendChild(view.render().el);
  },

  render: function(){
    var self = this;
    
    this.model.each(function(todoItem){
      var view = new TodoView({model: todoItem});
      self.el.appendChild(view.render().el);
    });
    
    return this;
  }
});

module.exports = TodoCollectionView;