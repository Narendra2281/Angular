/*
    write a typescript program which contains one function  named as Summation.
    That function should accept array of number and return Summation of each number from  array.
    
    Input : 23   6     7    4   5   7

    Output : Maximum number is 52

*/ 

//////////////////////////////////////////////////
// Function Name : Summation 
// Description : function accept array of number and return addition
// Input : Arr
// Output : iSum
// Author : Narendra Mahadev Kachare
// Date : 10/12/2023
//////////////////////////////////////////////////

function Maximum(Arr : number[]):number
{
    var iSum : number = 0;
    var iCnt : number = 0;

    for (iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;
}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

var Result : number = 0;
var Arr : number[] = [23,6,7,4,5,7];

Result = Maximum(Arr);
console.log("Addition is : "+Result);

