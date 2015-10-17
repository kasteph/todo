var Backbone = require('backbone');

var TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'todo',

  render: function() {
    this.$el.html('TodoView')
  }
});

module.exports = TodoView;