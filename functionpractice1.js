
//  var tp=function tripleFive(){
// 	for ( var i=0; i < 3; i++) {
// 		console.log("Five!");
// 	}
// };

// tp();

// exercise 2
// var arg1 = prompt("What is the word? ");

// var lastLetter = function(arg1) {
// 	var position = arg1.length - 1;
//    return arg1.charAt(position);
// }

// console.log(lastLetter(arg1));

// exercise # 3
// var arg = prompt("What is the square number?");

// var square = function(arg) {

//   return arg * arg;
// }

// console.log(square(arg));

//exercise # 4

// var arg = prompt("What is the negate?");

// var negate = function(arg) {
// 	return arg * -1;
// };
// console.log(negate(arg));

//exercise # 5

// var arg1 = prompt("what is  number 1?");
// var arg2 = prompt("what is  number 2?");
// var arg3 = prompt("what is  number 3?");
// var toArray = function(num1, num2, num3) {
// 	var array1 =[];
// 	return array1 = [ num1, num2, num3];
// };

// console.log(toArray(arg1, arg2, arg3));

//exercise # 6

// var arg = prompt("What is the word?");
// var startsWithA = function (arg) {
// 	return (arg.charAt(0) === "A");
// }
// console.log(startsWithA(arg));

//exercise # 7

// var arg = prompt("What is the Word?");

// var excite = function (arg){
// 	return (arg + "!" + "!" + "!");
// }
// console.log(excite(arg));

//exercise # 8
// var arg = prompt("What is the word?");
// var sun = function(arg){
// 	console.log(arg);
// 	var tomatch = /sun/;
// 	console.log(arg.search(tomatch));
// 	if (arg.search(tomatch) !== -1) {
// 		console.log("Sun was found in this phrase, in position" + arg.search(tomatch));
// 		} else {
// 			console.log("Sorry, No sun wasn't found in this phrase");
// 		}
// 	};
	
// 	console.log(sun(arg));

// exercise # 9
// var arg = prompt("What is the Number?");

// var tiny = function(arg) {
// 	if ((arg >= 0) && (arg <=1)) {
// 		console.log("The number " + arg + " is between 0 and 1");
// 	} else {
// 		console.log("The number " + arg + " is NOT between 0 and 1");
// 	}
// };
// console.log(tiny(arg));

// exercise # 10

var arg = prompt("What is the minute & Seconds in the format MM:SS?");

var getSeconds = function(arg) {
	var minutes = parseInt(arg.slice(0,2));
	var seconds = parseInt(arg.slice(3,5));
	console.log (minutes, seconds);
	console.log("The Number of seconds are " + ((minutes * 60) + seconds));

};

console.log(getSeconds(arg));






