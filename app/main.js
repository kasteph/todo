(function(){
  var _              = require('../node_modules/backbone/node_modules/underscore');
      TodoModel      = require(__dirname + '/models/todo.js'),
      TodoCollection = require(__dirname + '/collections/todo.js'),
      TodoCollectionView = require(__dirname + '/views/todocollection.js'),
      TodoCreateView = require(__dirname + '/views/todocreate.js');

  var todoCollection = new TodoCollection();

  var bus = _.extend({}, Backbone.Events);
  
  var todoCollectionView = new TodoCollectionView({model: todoCollection, bus: bus});
  var todoCreateView = new TodoCreateView({bus: bus});
  
  var container = document.getElementById('container');

  container.appendChild(todoCreateView.render().el);
  container.appendChild(todoCollectionView.render().el);
})();