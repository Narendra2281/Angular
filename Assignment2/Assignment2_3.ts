/*
    write a typescript program which contains one function  named as Maximum.
    That function should accept array of number and return second largest number from array
    
    Input : 23   89   6   29    56  45    77  32

    Output : Second Maximum number is 77

*/ 

//////////////////////////////////////////////////
// Function Name : Maximum 
// Description : function accept array of number and return second largest number from array
// Input : Arr
// Output : iMax
// Author : Narendra Mahadev Kachare
// Date : 10/12/2023
//////////////////////////////////////////////////

function Maximum(Arr : number[]):number
{
   var iMax : number = 0
   var iCnt : number = 0;

   for(iCnt = 0; iCnt < Arr.length; iCnt++)
   {
        if(iMax < Arr[iCnt])
        {
            iMax = Arr[iCnt]
        }
   }
   var iTemp : number = iMax;
   iMax = 0;
   for(iCnt = 0; iCnt < Arr.length; iCnt++)
   {
       if (Arr[iCnt] == iTemp) 
       {
           iCnt++;
       }
       if (iMax < Arr[iCnt]) 
       {
           iMax = Arr[iCnt];
       }
   }
   return iMax;
}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

var Result : number = 0;
var Arr : number[] = [23,89,16,29,56,45,77,32];

Result = Maximum(Arr);
console.log("Second largest number is : "+Result);

