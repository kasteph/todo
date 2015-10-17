var TodoModel = require('../models/todo.js');

var TodoCollection = Backbone.Collection.extend({
  model: TodoModel
});

module.export = TodoCollection;