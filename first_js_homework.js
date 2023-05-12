//S1 Q1 Concatenation allows you to combine to strings together and it only works on two strings.
// Swift uses string interpolation to include the name of a constant or variable as a placeholder in a longer string, and to prompt Swift to replace it with the current value of that constant or variable
//DRY- Do not Repeat Yourself.

//S1 Q2 var declarations are globally scoped or function scoped while let and const are block scoped

//S2 Q1 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
console.log(a < b);
console.log(c > d);
console.log("Name" !== "Name");
console.log(a < b < c);
console.log(a !== a && a < b);
console.log(e != "Kevin");
console.log(48 !== "48");
console.log(f != e);
let g = 0
console.log(g != (b + c));
console.log(g)
console.log(g = 10)

//S2 Q2 I used let

//S2 Q3 it will give me g=10

//S3 Q1 the 1st is a not infinite, it should run only once, the 2nd is infinite, because it's true while it's false, so it will run forever.

let letters = "A";//name of the loop and string
let i = 0;//starts count from 0

//while loop from 0 to 20
while (i < 20) {
	//all letters A in one line
	letters += "A";
	//adding one
	i++;
}
//prints the 20 strings A in one single line
console.log(letters);


//S4 Q1 for loop is used when the number of iterations is known, whereas execution is done in the while loop until the statement in the program is proved wrong


//S4 Q2  The first part of the control panel is:virtual control panel
//The second part of the control panel is:remote control panel, and the 
//The third part of the control panel is:physical control panel.

for (let i = 0; i <= 999; i++) {
	console.log(i);
}


//S5 Terminal
