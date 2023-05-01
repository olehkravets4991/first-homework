//S1 Q1 DRY- Do not Repeat Yourself.
//S! Q2 var declarations are globally scoped or function scoped while let and const are block scoped
//S1 Q1 I used const. cuz it.is a statement you can not change
//S2 Q2 The code does not run
//S2 Q3 g is not 10,
//S3 Q1 the 1st is a true, the 2nd is false
//S4 Q1 for loop is used when the number of iterations is known, whereas execution is done in the while loop until the statement in the program is proved wrong
//S4 Q2  The first part of the control panel is:virtual control panel
//The second part of the control panel is:remote control panel, and the 
//The third part of the control panel is:physical control panel.
//


let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);