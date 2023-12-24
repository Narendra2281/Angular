/*
    2. Create one typescript application which contains one class named as Circle.
    Circle class contains two characteristics (Class data members) as Radius, PI.
    Create one parametrised constructor which accept one value and assign it to Radius. 
    Value of PI member is set to 3.14.
    In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 
    After designing the class create two objects of that class by providing some hardcoded value. 
    Call the method Area by using both the objects.
    
*/


//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'


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
        return (0.5 * this.PI * this.Radius * this.Radius)
    }

}


//////////////////////////////////////////////////
// Entry point
//////////////////////////////////////////////////

const input = promptSync();
var Result : number = 0;

console.log("Enter the radius of Circle");
var Radius : number = parseInt(input());

var obj1 = new Circle(Radius);
Result = obj1.Area()

console.log("Area of circle is : "+Result);











