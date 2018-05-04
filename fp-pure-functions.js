// Pure functions
// Pure functions basically give results, 
// without changing the app state or generating side-effects

var number = Math.max(2,5,8); // always return the same value if the parameter is the same
console.log(number);

// soma is pure function
// does not change
var soma = (a, b) => a+b;
console.log(soma(2,3));

var teste = 35;
// changeTeste is not pre
// it changes the app state
changeTeste = () => {
	teste = 30;
}
changeTeste();
console.log(teste);