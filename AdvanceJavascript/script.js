//Module 1

//Write a program to Show an alert
a =alert("Enter a number")
console.log(a)


/*What will be the result for these expressions?
1. 5 > 4 = True
2. "apple" > "pineapple" =>False
3. "2" > "12"     =>True
4. undefined == null  => True
5. undefined === null =>False
6. null == "\n0\n" =>false
7. null === +"\n0\n"  =>False */

console.log(5>4)
console.log("apple">"pineapple")
console.log("2">"12")
console.log(undefined==null)
console.log(undefined===null)
console.log(null=="n0\n")
console.log(null===null+"\n0\n")

// Will alert be shown?
if("0"){
    alert("Hello");
}
//Yes. Hello
//What is the code below going to output?
 alert( null || 2 || undefined );
// output:2

/*The following function returns true if the parameter age is greater than
18. Otherwise it asks for a confirmation and returns its result:
function
checkAge(age)
{
if (age> 18) { return true; }
else {
// ...return confirm (‘did parents allow you?');
 }
 }*/
function checkAge(age)
{
    if(age>18)
    {
        return true;
    }
    else
    {
        a= confirm("did you parents allow you?");
        if (a=="yes")
        {
            console.log("Yes parents allowed it")
        }
        else{
            console.log("They did not allow")
        }
    }
}
console.log(checkAge(17));

/*Replace Function Expressions with arrow functions in the code below:
Function ask(question, yes, no) 

{ if (confirm(question))yes();
else
no();
}
ask("Do you agree?", function()
{ alert("You agreed."); },
function() {
alert("You canceled the execution."); }
 }


*/

function ask(question,yes,no)
{
    if (confirm(question))yes();
    else
    no();
}

ask="do you agree?",()=>alert("You agreed"),()=>alert(
    "You cancel the execution."
)

    
//MODULES 2: DATA TYPES AND OBJECTS
// Write the code, one line for each action:
// a) Create an empty object user.
// b) Add the property name with the value John.
// c) Add the property surname with the value Smith.
// d) Change the value of the name to Pete.
// e) Remove the property name from the object.

//a)
 let user= {}
 //b)
 user.name="John";
 console.log(user)
 //c)
 user.surname="Smith";
 console.log(user)
 //d
 user.name='Pete';
 //e
 delete user.name;

 /*Is array copied?*/
 let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let
 shoppingCart = fruits; shoppingCart.push("Banana"); // what's in fruits?
 alert( fruits.length ); // ?*/

 //outcome is 4

 //Map to names
let john = { name: "John", age: 25 }; 
let pete = { name: "Pete", age: 30 }; 
let mary ={ name: "Mary", age: 28 }; 
let users = [ john, pete, mary ]; 
let names = users.map(list=>list.name)

 alert(names); // John, Pete, Mary



 //Map to objects
let usersMapped = users.map(input=>({
    fullName:`${input.name} ${input.surname}`,
    id:input.id
}));

usersMapped = [
{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },
{ fullName: "Mary Key", id: 3 }
]
alert( usersMapped[0].id ) // 1 
alert( usersMapped[0].fullName ) // John Smith



/*Sum the properties There is a salaries object with arbitrary number of salaries. Write
the function sumSalaries(salaries) that returns the sum of all salaries using
Object.values and the for..of loop.If salaries is empty, then the result must be 0.
*/
function sumSalaries(salaries)
{
    let sum =0;
    for(let salary of Object.values(salaries))
    {
        sum =sum+salaries;
    }
    return sum;
}
let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
alert( sumSalaries(salaries) ); 


/*Turn the object into JSON and back Turn the user into JSON and then read it back
into another variable.*/
let user1 = { name: "John Smith", age: 35};
let us2=JSON.stringify(user1);// to convert to Json
console.log(us2);


//MODULE: 3 (Document, Event and Controls)

//Create a program to show/hide a password



function myfun()
{
    check= document.getElementById("input");
    if(check.type==="password")
    {
        check.type="text";
    }
    
}

//MODULE: 4 (New Request)

//What is Json?

/*Json stands for Javascript Object Notation and it is light weighted data interchangeable format. 
It is easy for us to read and write and it is easy for the computer to parse and generate.*/


//What is promises?

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and 
//its resulting value.

  
//Write a program of promises and handle that promises also

var P = new Promise((resolve,reject)=>{
    var a = 10;
    var b = 10;
    if(a == b)
    {
        resolve("Success");
    }
    else{
        reject("Not success");
    }
}).then((response)=>{
    console.log(response);
})
.catch((ErrorHndl)=>{
    console.log(ErrorHndl);
})
