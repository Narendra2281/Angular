/*
    write a typescript program which contains one function  named as Fibonacci.
    That function should accept one number from user and print fibonacci series till that number.

    Input : 21
    Output : 1       1       2       3       5       8       13      21
*/ 

//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'

//////////////////////////////////////////////////
// Function Name : Fibonacci 
// Description : function prints fibonacci series upto  given user input number
// Input : iNo
// Output : 
// Author : Narendra Mahadev Kachare
// Date : 09/12/2023
//////////////////////////////////////////////////
function fibonacci(iNo: number):void
{
    var Ans :number = 1;
    var a :number = 0;
    var b :number = 1;
    var iCnt :number = 0;

    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if(Ans > iNo)
        {
            break;
        }
        process.stdout.write(Ans+"\t");

        Ans = a + b;
        a = b;
        b = Ans;
    }
    

}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

const input = promptSync();

console.log("Enter a number : ");
var Value:number = parseInt(input());

fibonacci(Value);



