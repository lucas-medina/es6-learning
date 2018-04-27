// arrow functions
var log = (what) => console.log('yeah,', what);
log('nah');

// this is different

var numbers = [1,2,3,4,5];
numbers.forEach(number => console.log(number));

var app = {
	init: function(){
		// this == app
		numbers.forEach(number => console.log(this));

		numbers.forEach(function(number){
			console.log(this);
		});
	}
}
console.log('running app');
app.init();