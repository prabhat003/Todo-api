var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000
var todos = [{
	id:1,
	description: 'Meet mom at dinner',
	completed: true
}, {
	id:2,
	description:' Go to market',
	completed: false
}, {
	id:3,
	description:'Meet your brother',
	completed: true
}];

app.get('/todos', function(req, res){
	res.send(todos);
});

app.get('/todos/:id', function(req, res){
	var todoid = parseInt(req.params.id,10);
	//console.log(todoid);
	var matchedItem ;
	todos.forEach(function(todo){
		if(todoid === parseInt(todo.id, 10)){
			matchedItem = todo;
		}
		//return matchedItem;
	});

	if(matchedItem){
			res.json(matchedItem);		
	}else{
		res.status(404).send();
	}
});

app.listen(PORT, function(){
	console.log('Server is listening to port no ' + PORT)
});