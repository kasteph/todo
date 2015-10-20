var TodoView = Backbone.View.extend({
  tagName: 'li',

  className: 'todo',

  attributes: function(){
    return {
      'id': this.model.cid
    }
  },

  events: {
    'click .delete': 'onClickDelete',
  },

  onClickDelete: function() {
    if (window.confirm('Are you sure?'))
      this.model.destroy();
    return;
  },


  initialize: function(options){
    if (!(options && options.model))
      throw new Error('No model specified');
  },

  render: function() {
    this.el.innerHTML = this.model.escape('task') + ' <button class="delete">x</button>';
    return this;
  }
});

module.exports = TodoView;
