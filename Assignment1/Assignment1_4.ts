

/*
    write a typescript program which contains one function  named as ChkPrime.
    That function should accept one number and checks prime number or not

    Input : 11
    Output : It is prime number
*/ 

//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'

//////////////////////////////////////////////////
// Function Name : ChkPrime 
// Description : function checks prime number and return true or false
// Input : iNo
// Output : flag
// Author : Narendra Mahadev Kachare
// Date : 08/12/2023
//////////////////////////////////////////////////

function ChkPrime(iNo :number):boolean
{
    var iCnt :number = 0;
    var flag :boolean = false;
    console.log("Factors of given number is : ")
    for(iCnt = 1; iCnt <= (iNo/2); iCnt++)
    {
        if((iNo % iCnt) == 0 && (iCnt > 1))
        {
            flag = true;
            break;
        }
    }
    return flag;
}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

const input = promptSync();

console.log("Enter a number : ")
var Value :number = parseInt(input())

var bRet :boolean = true;
bRet = ChkPrime(Value)
if(bRet == false)
{
    console.log("It is prime number")
}
else
{
    console.log("It is not prime number")
}

