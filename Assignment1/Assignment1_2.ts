/*
    write a typescript program which contains one function  named as Area.
    That function should accept radius from user and display Area of a circle for that radius
    Input : 5
    Output : Area of a circle is :  78.53

*/ 

//////////////////////////////////////////////////
// Import Modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'

//////////////////////////////////////////////////
// Function Name : Area 
// Description : 
// Input : Radius,PI
// Output : Area
// Author : Narendra Mahadev Kachare
// Date : 06/12/2023
//////////////////////////////////////////////////
function Area(Radius :number,PI :number = 3.14) :number
{
   
    // Area for circle
    var Area :number = Radius * Radius * PI;

    return Area
}


//////////////////////////////////////////////////
// Entry point
//////////////////////////////////////////////////

const input = promptSync();

// User input : Radius
console.log("Enter the radius of Circle");
var Radius :number = parseFloat(input())

var fRet :number = 0;

fRet = Area(Radius)

console.log("Area of a circle is : ",fRet);



