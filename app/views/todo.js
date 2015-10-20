var TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'todo',

  attributes: function(){
    return {
      'id': this.model.cid
    }
  },

  initialize: function(options){
    if (!(options && options.model))
      throw new Error('No model specified');
  },

  events: {
    'click .delete': 'onClickDelete',
    'click .toggle': 'onClickToggle',
  },

  onClickDelete: function() {
    if (window.confirm('Are you sure?'))
      this.model.destroy();
    return;
  },

  onClickToggle: function() {
    this.model.toggle();
    if (this.model.get('isCompleted'))
      this.$el.css('text-decoration', 'line-through');
    else
      return
  },

  render: function() {
    this.el.innerHTML = '<input class="toggle" type="checkbox"></input>' + this.model.escape('task') + ' <button class="delete">x</button>';
    return this;
  }
});

module.exports = TodoView;
