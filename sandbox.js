console.log(1);
console.log("Whatever")

//let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used
let age = 38;
let year = 2021;
console.log(age, year)

age = 39;
console.log(age);

// const means constant, this means that the identifier can't be reassigned
const points = 100;
console.log(points);

//Strings
console.log("hello, world");

let email = "test@justtesting.co.uk";
console.log(email);
//String concatenation 
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Getting characters - The number 0 is the first letter in the name which is J, so the console displays J.
console.log(fullName[0]);

//String length - counts the letters in the first and surname name and the space better the first and surname, the console displays 8. 
console.log(fullName.length);

//String methods - First displaying full name to uppercase then full name to lower case on the console
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

//String methods  - On the email test@justtesting.co.uk the @ sign is the 4th letter in so it will display 4 on the console
let index = email.indexOf('@');
console.log(index);

//String methods - finds the last t which is the 12th letter in, so will display 12 on the console
let contactEmail = "test@justtesting.co.uk";
let letterResult = email.lastIndexOf("t");
console.log(letterResult);

//String slice - slice the email address from the first argument number to the number before the last aurgement number - so the console logs t@justte 
//so the t is 0 and the e is 10 
let contactEmail2nd = "test@justtesting.co.uk";
let letterResult2nd = email.slice(3,11);
console.log(letterResult2nd);

//String substr - slices the email address from the first argument to and counts up till it reaches the last argument number. So the console logs t@justtesti
//So the t is 0 and i is 11
let contactEmail3rd = "test@justtesting.co.uk";
let letterResult3rd = email.substr(3,11);
console.log(letterResult3rd);

//String replace - Will replace the first argument which is the first t it can find with the second argument which is w.
//So the console logs west@justtesting.co.uk 
let contactEmail4th = "test@justtesting.co.uk";
let letterResult4th = email.replace("t","w");
console.log(letterResult4th);

//NUMBERS 
//radius is the radius of a cicle 
//pi in maths calculates the area of a circle
//const is used if you dont want to change the value of what you set it to, will keep it at that value.
//The console logs 10 3.14
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//Math Operators +, -, *, /, **, %

//10 divded by 2 - console log displays 5
console.log(10/2);

//The radius is from above which is 10 and then remainder of 3 is 1 which is displayed on the console
let sum = radius % 3;
console.log(sum);

//The pi is from above which is 3.14
//Then it is multiply by the radius from above which is 10
//then to the power of 2 - (which is the squared bit.) 
//formula to work out the area of a cicle is pi r squared, pi x radius x radius(power of 2)
//Which is like saying 3.14 x 10 x 10 = 314
//Console will display 314, which is the area of the cicle. 
let sum2 = pi * radius**2;
console.log(sum2);

//order of operation - B I D M A S

//MEANS Brackets, Indices, Division/Multiplication, Addition/Subtraction
let sum3 = 5*(10-3)**2;
console.log(sum3);
//This sum was done 10 - 3 = 7 then 7*7 = 49 then 49*5= 245 
//console logs 245

//++ Increment operater  
let likes = 10;
likes++;
console.log(likes);   
//++ means plus one
//This adds one to the likes
//console log will display 11

//-- Decrement operater  
let likes2 = 10;
likes2--;
console.log(likes2);
//-- means take one
//This takes one from the likes
//console log will display 9

//+= addition assignment 
let likes3 = 10;
likes3+=10;
console.log(likes3);
//+= means to add a value to a variable
//This adds ten to the likes
//console log will display 20

//+= subtraction assignment 
let likes4 = 10;
likes4-=5;
console.log(likes4);
//-= means to take away a value to a variable
//This takes away five to the likes
//console log will display 5

//+= muiltiply assignment 
let likes5 = 10;
likes5*=2;
console.log(likes5);
//*= means to multiply a value to a variable
//This multiply's two to the likes
//console log will display 20

//+= muiltiply assignment 
let likes6 = 10;
likes6*=2;
console.log(likes6);
//*= means to multiply a value to a variable
//This multiply's two to the likes
//console log will display 20

//+= divide assignment 
let likes7 = 10;
likes7/=2;
console.log(likes7);
// /= means to divide a value to a variable
//This divide 2 to the likes
//console log will display 10

//NaN - Not a number
console.log(5/"Hi");
//The console will display NaN as this above does not make sense and is not possiable. 

//concatenate strings and numbers
let intro = "The blog has " + likes7 + " likes";
console.log(intro);

//concatenation way 
const title = "Best reads of 2020";
const author = "Mario";
const likesC = 30;

let resultC = "The blog called " + title + " by " + author +  " has " + likesC + " likes";
console.log(resultC);

//template strings 
const titleT = "Best reads of 2020";
const authorT = "Mario";
const likesT = 30;

let resultT = `The blog called ${titleT} by ${authorT} has ${likesT} likes`;
console.log(resultT);


//creating html templates 
const titleH = "Best reads of 2020";
const authorH = "Mario";
const likesH = 30;

let html = `
    <h2>${titleH}</h2>
    <p>By ${authorH}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);


//array / objects
let names = ['sam', 'tom', 'lee'];
console.log(names);

//names[1] = is switching the name tom for paul
names[1] = 'paul';

//[1] will choose the 2nd name in the list has sam is at index 0
console.log(names[1]);

//.length counts how many items are stored in the array
console.log(names.length);

//joins all the names in the array on one line separated by a comma 
let resultJ = names.join(',');
console.log(resultJ);

//shows the index number of lee which is 2
let resultI = names.indexOf('lee');
console.log(resultI);

//adds more names on to the original array
let resultCon = names.concat(['tony', 'peter']);
console.log(resultCon);

//this adds a new name using push, and cause the variable name is called on the console log, it will show rita after lee
let resultD = names.push('rita');
console.log(names);

//This will just add the new name on the array and will only just show the index value because the console log is asking to display the resultP, however the new name david is still in the array
let resultP = names.push('david');
console.log(resultP);

//this is again adding a new name like we did with the name rita, but this is just proving that the name david was in the array
let resultY = names.push('alex');
console.log(names);

//pop takes the last value off a the array, because the console.log(names) says to take it off there, when we switch console.log(resultPop) then it display the name it took away
let resultPop = names.pop();
console.log(names);
console.log(resultPop);

//numbers in an array 
let ageA = [25,26,27,28,29];
console.log(ageA[3]);



