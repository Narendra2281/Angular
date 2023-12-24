/*
    1. Create one typescript application which contains one class named as Arithmetic.
    Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
    Create one parametrised constructor which accept two values and assign it to Number1 and Number2.
    In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction, Multiplication and Division.
    Addition method will add Number1, Number2 & return result.
    Subtraction method will subtract Number1, Number2 & return result.
    Multiplication method will multiply Number1, Number2 & return result.
    Division method will divide Number1, Number2 & return result.
    After designing the class create two objects of that class by providing some hardcoded value.
    Call all the methods by using both the objects.
*/


//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'


//////////////////////////////////////////////////
// Class Name : Arithmetic
// Function Name : Addition, Subtraction, Division, Multiplication
// Description : Each function accept two parameters and gives Output result
// Input : Value1, Value2
// Output : 
// Author : Narendra Mahadev Kachare
// Date : 11/12/2023
//////////////////////////////////////////////////

class Arithmetic
{ 
    public No1 : number;
    public No2 : number;
    
    // Parameterised Constructor
    constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition()
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Subtraction()
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }

    Multiplication()
    {
        var Ans : number = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    }

    Division()
    {
        var Ans : number = 0;
        Ans = Math.round(this.No1 / this.No2);
        return Ans;
    }

    Display()
    {
        Result = this.Addition()
        console.log("Addition will be : "+Result);

        Result = this.Subtraction()
        console.log("Subtraction will be : "+Result);

        Result = this.Multiplication()
        console.log("Multiplication will be : "+Result);

        Result = this.Division()
        console.log("Division will be : "+Result);

    }
}


//////////////////////////////////////////////////
// Entry point
//////////////////////////////////////////////////

const input = promptSync();
var Result : number = 0;

console.log("Enter First number : ");
var Value1 : number = parseInt(input())

console.log("Enter Second number : ");
var Value2 : number = parseInt(input())


var obj1 = new Arithmetic(Value1,Value2);
obj1.Display();

var obj2 = new Arithmetic(54,89);
obj2.Display()







