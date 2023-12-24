/*
    write a typescript program which contains one arrow function named as ChkArmstrong. That function 
    accepts one number and check whether number is Armstrong number or not.
    
    Input : 153

    Output : It is Armstrong number

*/ 
//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'

//////////////////////////////////////////////////
// Function Name : ChkArmstrong 
// Description : function accept one numbers and check whether number is Armstrong number or not.
// Input : iNo
// Output : ResultX
// Author : Narendra Mahadev Kachare
// Date : 11/12/2023
//////////////////////////////////////////////////

function ChkArmstrong(iNo : number) : boolean
{
    var iTemp1 : number = iNo;
    var Result : number = 0;
    var iCnt : number = 0;
    var i : number = 0;
    var Ans : number = 1;
    var ResultX : boolean = false;
    var Arr : number[] = [];
    
    while(iTemp1 != 0)
    {
        Arr[iCnt] = iTemp1 % 10;
        iTemp1 = Math.floor(iTemp1 / 10);
        iCnt++;
    }
    iTemp1 = iCnt;
    for(iCnt = 0; iCnt < iTemp1; iCnt++)
    {
        while(i < iTemp1)
        {
            Ans = Ans * Arr[iCnt]
            i++;
        }
        Result = Result + Ans;
        Ans = 1, i = 0;
    }
    if(Result == iNo)
    {
        ResultX = true;
    }

    return ResultX;
}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

const input = promptSync();
var Result : boolean = false;

console.log("Enter a number : ")
var Value : number = parseInt(input());

Result = ChkArmstrong(Value);

if (Result == true)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not an Armstrong number");
}

