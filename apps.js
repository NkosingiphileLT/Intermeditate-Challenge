//Question 1

function FalsyOrTruthy(Fisrt1,Sec1){
return !Fisrt1 ? Fisrt1 : Sec1;
}
console.log(FalsyOrTruthy(2,1))


//Question 2

function ArrLength(arr){
    return arr.length;
}
console.log(ArrLength([1,2,3,4]))



//Question 3

function lastArrElement(LastArr){
    return LastArr[LastArr.length-1];
}
console.log(lastArrElement([1,2,3,4,5]))



//Question 4

function SumOfArray(ArrSum){
    let sum = 0;
 for (let i = 0; i< ArrSum.length; ++i){
    //This is how you loop every element in an array
    sum = sum + ArrSum[i];
 }
return sum;
}
console.log(SumOfArray([6,2,3,4,5]));



//Question 5

function ProgressiveSumUp(arrSumUp){
    let sumup = 0 ;
   for (let ii = 0; ii < arrSumUp; ++ii) {
   sumup = sumup + ii;
   }
   return sumup;
}
console.log(ProgressiveSumUp(13));



//Question 6

function CalculateTime(seconds){
    let mins = Math.floor(seconds/60);
    let secs = seconds % 60;

    if (mins.toString().length===1){
        mins = '0' + mins
    }
    return mins + ':'+ secs;
}
console.log(CalculateTime(70));



//Question 7

function GetMaxValue(arrMax){
    let Max = arrMax[0];
   for (let ii = 0; ii< arrMax.length; ++ii){
     if (arrMax[ii]> Max){
        Max = arrMax[ii];
     }
   }
   return Max;
}
console.log(GetMaxValue([-500,-200,-400]));



//Question 8

function ReverseString(RevStr){
let rstr = '';
for (let i = RevStr.length - 1; i >= 0; --i){
    rstr = rstr + RevStr[i]
}
return rstr;
}
console.log(ReverseString('CapSleep'))




//*** To convert String to an array you can use to split function 
// e.g 'ABCDE'.split =>> [A,B,C,D,E]
//** To convert back =>>  return str.split('').reverse().join('')

function ReverseStringShort(str){
    return str.split('').reverse().join('');
}
console.log(ReverseStringShort('Nkosi'));


// Question 9

//Solution 1 - For loop

function TurnToZero(arrToZero){
    for(let i = 0; i < arrToZero.length; ++i){
      arrToZero[i]= 0
    }
    return arrToZero
}
console.log(TurnToZero([5,9,7,6]));

//Solution 2 - Array.Fill

function TurnToZeros(arrToZeros){
    return new Array(arrToZeros.length).fill(0)
}
console.log(TurnToZero([2,3,4,5,6]))

//Solution -Array.Map

function TurnTo0s(arrTo0s){
return arrTo0s.map(element => element*0)
}

console.log(TurnTo0s([2,3,4,5,6,6,7]))


//Question 10 

//Solution 1 - For loop

function FilterOutApples(arrFfilter){
    let noApples = []
    for(let i = 0; i < arrFfilter.length; ++i){
        if(arrFfilter[i] !== 'Apple'){
         //Adding an Element to an array
        noApples.push(arrFfilter[i])
        }

    }
return noApples
}
console.log(FilterOutApples(['Banana','Apple','Orange','Apple']));


//Solution 2 - Array Filter

function FilterOutApple(arrFfilterA){
    return arrFfilterA.filter(elem => elem !== 'Apple')

}
console.log(FilterOutApple(['Banana','Apple','Orange','Apple']));


//Question 11 

//Solution 1 - Filter

function FilterOutFalsey(arrFilterFalse){
return arrFilterFalse.filter(elements => !!elements===true)

}
console.log(FilterOutFalsey(['Banana','Apple',NaN,'Orange',false]));


//Solution 2

function FilterOutFalses(arrFfilterfalse){
    let noFalse = []
    for(let i = 0; i < arrFfilterfalse.length; ++i){
        if(!!arrFfilterfalse[i] === true){
         //Adding an Element to an array
        noFalse.push(arrFfilterfalse[i])
        }

    }
return noFalse
}
console.log(FilterOutFalses(['Banana','Apple',NaN,false,'Apple']));


//Question 12

function TruthyToTrueFalseToFalse(arrTralse){
// The Double Exclamation mark(!!) Converts element to it's Boolean form
   return arrTralse.map(ele => !!ele )
    
}
console.log(TruthyToTrueFalseToFalse([500,0,'Nkosi','',[]]));





