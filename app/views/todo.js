var TodoView = Backbone.View.extend({
  tagName: 'li',

  el: 'body',

  className: 'todo',

  render: function() {
    this.$el.html('TodoView')
  }
});

module.exports = TodoView;