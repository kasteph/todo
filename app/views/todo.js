var TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'todo',

  initialize: function(options){
    if (!(options && options.model))
      throw new Error('No model specified');
  },

  render: function() {
    this.el.innerHTML = this.model.get('task');
    return this;
  }
});

module.exports = TodoView;