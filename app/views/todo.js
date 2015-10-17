var TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'todo',

  render: function() {
    this.$el.html(this.model.get('task'));
    return this;
  }
});

module.exports = TodoView;