
    // Imports user module mod4-quote_of_the_day.js
let my_mod = require("./mod4_quote_of_the_day");

let fs = require("fs");   // Imports file system module

console.log();
console.log("quote of the day");
my_mod.quote_of_the_day();
console.log();

let delay = ((Math.ceil(Math.random()*5))*1000).toFixed(0);
setTimeout(reflexes, delay);



function reflexes() {
	// ... include code here
	// esperar tiempo aleatorio entre 0 y 5 segundos
	console.log("Press return");
};

let t1 = t()
//console.log(t1)
	// calcular tiempo desde que muestra mensaje hasta que presiona enter
	// muestra tiempo por consola
	// finaliza el programa

	var stdin = process.stdin;

	stdin.setRawMode(true);
	stdin.resume()
	stdin.setEncoding('utf-8');

	stdin.on( 'data', function( key ){
		if ( key === '\u000D' ) {
			let t2  = t();
			console.log("Your time is:"+(t2-t1).toString()+"ms");
			process.exit();
		}
	       // ctrl-c ( end of text )
		if ( key === '\u0003' ) {
			process.exit();
		 }

	});




function t (){
		let t = new Date()
		return t;
}

