/*
    write a typescript program which contains one  function named as ChkString. That function 
    accepts one string and check whether that string contains "Marvellous" word or not.
    
    Input : "Pune Kothrud Marvellous Infosystems"

    Output : String contains Marvellous in it.

*/ 
//////////////////////////////////////////////////
// Typescript import modules
//////////////////////////////////////////////////
import * as promptSync from 'prompt-sync'

//////////////////////////////////////////////////
// Function Name : ChkString 
// Description : function accept one string and check Marvellous word in it or not.
// Input : str
// Output : Result
// Author : Narendra Mahadev Kachare
// Date : 11/12/2023
//////////////////////////////////////////////////

function ChkString(str : string) : boolean
{
    var Result : string[] = str.split(" ")
    var iCnt : number = 0;
    var i : number = 0;
    var ResultX : boolean = false;

    while(i < Result.length)
    {
        ResultX = Result[iCnt] === "Marvellous";
        if(ResultX == true)
        {
            break;
        }
        i++,iCnt++;
    }

    return ResultX;
}

//////////////////////////////////////////////////
// Entry Point
//////////////////////////////////////////////////

const input = promptSync();
var bRet : boolean = false;

var str : string = input();
console.log(str);

bRet = ChkString(str);
if(bRet == true)
{
    console.log("String Contains Marvellous in it");
}
else
{
    console.log("String Doesn't contain Marvellous in it");
}



