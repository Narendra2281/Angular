

/*
    write a typescript program which contains one function  named as DisplayFactors.
    That function should accept one number and display factores of that number
    Input : 20
    Output : 1       2       4       5       10

*/ 

//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'

//////////////////////////////////////////////////
// Function Name : DisplayFactors 
// Description : function display factors of given number
// Input : iNo
// Output : 
// Author : Narendra Mahadev Kachare
// Date : 08/12/2023
//////////////////////////////////////////////////

function DisplayFactors(iNo :number):void
{
    var iCnt :number = 0;
    console.log("Factors of given number is : ")
    for(iCnt = 1; iCnt <= (iNo/2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            process.stdout.write(iCnt+"\t")
        }
    }



}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

const input = promptSync();

console.log("Enter a number : ")
var Value :number = parseInt(input())

DisplayFactors(Value)
