const fs = require('fs');

/*
let _jsonfrase = {}

function quote_of_the_day(){
	return {
		leer(){
			fs.readFile('mod4_quote_of_the_day.json','utf8', function (err, data){
				if (err) {throw err}
				else { 
					let obj = {};
					obj =  JSON.parse(data) ;
					let obj_i =  JSON.stringify(Math.round(Math.random() * obj.length)) ;
					_jsonfrase = obj[obj_i] ;
					procesar(_jsonfrase) 
				}
			})
		}
	}
}

function procesar(_jsonfrase){
	console.log(_jsonfrase) ;
}


module.exports = {quote_of_the_day}
*/


var obj = {}
var _jsonfrase = {}
fs.readFile('mod4_quote_of_the_day.json','utf-8', function read (err,data) {
	if (err) {
		throw err
	} else {
		obj = JSON.parse(data) ;
		let obji = JSON.stringify(Math.round(Math.random() * obj.length))
		_jsonfrase = obj[obji]
		frase(_jsonfrase);

	}
});

let fras = ""

function frase(_jsonfrase){
	fras = _jsonfrase ;
	console.log(_jsonfrase) ;
}

exports.quote_of_the_day = function (){ return console.log( fras)  }


