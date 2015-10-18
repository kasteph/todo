// require('expose?$!expose?jQuery!jquery');

var TodoModel      = require(__dirname + '/models/todo.js'),
    TodoCollection = require(__dirname + '/collections/todo.js'),
    TodoView       = require(__dirname + '/views/todo.js');

var todo = new TodoModel({task: 'finish app'});
var todoView = new TodoView({model: todo});

var todosEl = document.getElementById('todos');
todosEl.appendChild(todoView.render().el);