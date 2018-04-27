// Class
// classes are super objects, they allow inheritance and prototyping of an object into new variables or instances of the same code
// this means that you can have variables that follow a same set of properties, rules and settings
class User {
	constructor(name, age){
		this.age = age;
		this.name = name;
	}
}
var paloma = new User('Paloma', 23);
console.log(paloma);



// You can set get methods that return as an object property
// By doing this, you can have an object.property that returns an specific value
// gets
class Printer {
	constructor(model, company, activity){
		this.model = model;
		this.company = company;
		this.activity = activity;
	}

	get getModel(){
		return this.model;
	}

	get comps(){
		return this.company;
	}
}
var lexmark = new Printer('HP PSC 1310', 'my Company', 'printing');
console.log(lexmark.getModel, lexmark.comps);



// You can assign static methods to a class
// Static methods can only be accessed by the class itself. Instances of the class do not inherit static assignments
// static keyword
class Megaman {
	constructor(name, color, element){
		this.name = name;
		this.color = color;
		this.element = element;
	}

	// only works for class.method
	static question(){
		console.log('Are you a Mega Man??');
	}

	// works as a method
	announce(){
		console.log(`Alas, here comes ${this.name}! The ${this.color} Mega Man!`); 
	}
}

var aeolus = new Megaman('Aeolus', 'green', 'air');
Megaman.question();
aeolus.announce();


// Extends
// Extending a class from a parent class inherits their methods
// Rewriting the method redefines it on the child class
// EXTEND
class SonicCharacter {
	constructor(name, planet){
		this.name = name;
		this.planet = planet;
	}

	speak(){
		console.log(`Hello! I have come from planet ${this.planet}`);
	}
	mutter(){
		console.log('*Mutter* *Mutter* *Mutter*');
	}
}

class Sonic extends SonicCharacter {
	speak(){
		console.log(`Yo, I'm ${this.name}! I'm from ${this.planet}`);
	}
}

var son = new Sonic('Sonikku', 'Mobiusu');
son.speak();
son.mutter();



// SUPER!
// This is complicated. Super probably means "superior", like parent-like superiority
// But it seems that when extending a class, you can use super object to call parent methods
// should you need another constructor,
// you'll need to use a super(properties) inside the constructor to bring in the parent constructor's properties.
// ... what?
// Let's understanding it:
// super is a reference to the parent prototype
// https://jordankasper.com/understanding-super-in-javascript/

class Bleach {
	constructor(name, job, weapon){
		this.name = name;
		this.job = job;
		this.weapon = weapon;
	}

	speak(){
		console.log("I don't really know who I am");
	}
}
class Ichigo extends Bleach {
	speak(){
		// This uses super
		super.speak(); 
		console.log(`Actually, I do! I am ${this.name}, wielder of the ${this.weapon}!`);
	}
}
class Rukia extends Bleach {
	constructor(name, job, weapon, issues){
		super(name, job, weapon);
		this.issues = issues;
	}

	assume(){
		console.log(`Honestly, I have problems. I am ${this.name} and I've got this: ${this.issues}`);
	}
}

var i = new Ichigo('Ichigo Kurosaki', 'Shinigami', 'Zangetsu');
var j = new Rukia('Rukia', 'Shinigami', 'No idea', 'TPM');
i.speak();
j.assume();



// more super testings
class Resource {
	constructor(name, obligation){
		this.name = name;
		this.obligation = obligation;
	}

	testify(){
		console.log('Testifying...');
	}
}
class Comp extends Resource {
	constructor(...args){
		super(...args);
		this.compiler = compiler;
	}
	beComp(){
		console.log('I be comp', this.name);
		console.log('My sharona', this.compiler);
	}
}

var testingSuper = new Comp('compTeste', 'testar', 'myCompiler');
testingSuper.testify();
testingSuper.beComp();