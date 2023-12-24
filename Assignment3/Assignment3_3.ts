/*
    3. Create one typescript application which contains one class named as CircleX which still inherit above 
    Circle class.
    In CircleX class we have to write one method (Behaviours) as Circumferece which will return circumference
    of circle.
    After designing the class create two objects of that class by providing some hardcoded value.
    Call Circumferece and Area methodsby using both the objects.

    
*/


//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'
import { inherits } from 'util';


//////////////////////////////////////////////////
// Class Name : Circle
// Function Name : Area
// Description : function return Area of a circle
// Input : Value1, Value2
// Output : area
// Author : Narendra Mahadev Kachare
// Date : 11/12/2023
//////////////////////////////////////////////////

class Circle
{
    // Characteristics
    Radius : number;
    PI : number;


    // parameterised constructor
    constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14
    }

    Area() : number
    {
        return (0.5 * this.PI * this.Radius * this.Radius);
    }

}

class CircleX extends Circle
{
    Circumference() : number
    {
        return (2 * this.PI * this.Radius);
    }
}


//////////////////////////////////////////////////
// Entry point
//////////////////////////////////////////////////

const input = promptSync();
var Result : number = 0;

console.log("Enter the radius of Circle");
var Radius : number = parseInt(input());

var obj1 = new CircleX(Radius);

Result = obj1.Area();
console.log("Area of circle is : "+Result);

Result = obj1.Circumference();
console.log("Circumference of circle is : "+Result);












