var TodoModel = Backbone.Model.extend({
  defaults: {
    'isCompleted': false
  },

  validate: function(attrs){
    if (!attrs.task)
      return 'Task is required';
  },

  toggle: function(){
    this.set('isCompleted', !(this.get('isCompleted')));
  }
});

module.exports = TodoModel;