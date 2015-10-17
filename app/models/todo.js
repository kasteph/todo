var TodoModel = Backbone.Model.extend({
  validate: function(attrs){
    if (!attrs.task)
      return 'Task is required';
  }
});

module.exports = TodoModel;