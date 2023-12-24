/*
    write a typescript program which contains one function  named as Maximum.
    That function should accept three parameter and return largest value from three input parameter
    Input : 23   89   6
    Output : 89

*/ 
//////////////////////////////////////////////////
// Function Name : Maximum 
// Description : function compare numbers and return Maximum number
// Input : Value1,Value2,Value3,iMax
// Output : iMax
// Author : Narendra Mahadev Kachare
// Date : 05/12/2023
//////////////////////////////////////////////////

function Maximum(iNo : number,iMax:number): number
{
    if(iMax <= iNo)
    {
        iMax = iNo;
    }
    return iMax
}

//////////////////////////////////////////////////
// Entry point
//////////////////////////////////////////////////

var Value1 : number = 23;
var Value2 : number = 89;
var Value3 : number = 6;
var iMax : number = 0;
iMax = Maximum(Value1,iMax);
iMax = Maximum(Value2,iMax);
iMax = Maximum(Value3,iMax);
console.log("Maximum number is : "+iMax);






