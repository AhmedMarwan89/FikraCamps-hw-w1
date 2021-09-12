   /** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

 function BestProfit(arr) {
    days = ['saturday' , 'sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday']
    let least = Math.min(...arr)
    let highest = Math.max(...arr)

    let temp = arr.indexOf(least)
    let temp2 = arr.indexOf(highest)

    let least_day = days[temp]
    let highest_day = days[temp2]

   return 'you should buy in  in the day ' +least_day + 'and you should in day ' +highest_day
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));




/** Q2
  * assume you have two time periods
  * for example
  * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
  * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
  * write a function that tells us whether two given periods overlap or not
  * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
  * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
  */
 
 function CheckOverlap(t1Start, t1End, t2Start, t2End) 
    {
        t1End = t1End.slice(0,2)
        t2Start = t2Start.slice(0,2)
        if (t2Start == t1End)
        {
            return true
        }
        else 
        {
            return false 

        }

        return t1End


    }
 console.log(
   CheckOverlap(
     "13/5/2021 13:00",
     "14/5/2021 13:00",
     "14/5/2021 13:00",
     "16/5/2021 13:00"
   )
 );



/** Q3
  * assume you have a shoes factory and the production lines produces shoes as follows
  * L R LL R R RR LL
  * write a function that takes these shoes as in a string
  * shoes = "RLRLRRLL"
  * then return how many pairs in it
  * result = 4
  * example HowManyPairs("RLRLRRLL") => 4
  * example HowManyPairs("RRLLRRRLLR") => 2
  */
 
 function HowManyPairs(shoes) 
 {  let L = []
    let R = []
    for(let i of shoes){
        if ( i =='R') 
        { 
            R.push(i)
        }
        else {
            L.push(i)
        }
    } 
    return Math.min((R.lingth , L.length))
    



 }
 console.log(HowManyPairs("RLRLRRLL"));



 /** Q4
  *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
  *    letterCount('abcac') => {a: 2, b: 1, c: 2}
  */
 
function HowManyLetters(word) {
    let dict = {};
    for ( let i of word) 
    {
        console.log(i)
        dict[i] = (word.match(/i/g) || []).length;
    }
    return dict

}
console.log(HowManyLetters("kkssffoos"));


/** Q5
   * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
  
  Examples
  sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
  
  sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
  
  sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
  Notes
  The arrays can contain either positive or negative elements.
  The arrays will only contain integers.
  The arrays won't contain duplicate numbers.
  This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
   */

  let sorting = function(arr)
      { for( let outer = 0 ; (outer<arr.length-1); outer++)
          {
              for( let inner = 0 ; (inner<=(arr.length-outer)) ; inner++)
              {
                  if(arr[inner]>arr[inner+1])
                  {
                      let temp = arr[ inner]
                      arr[inner] = arr[inner+1]
                      arr[inner+1] = temp
                  }
              }    
          }
      return arr
      }
arr = [ 1 ,5 ,83 ,2 ,73 ,5 ]
console.log(sorting(arr))



 /** Q6
   * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
  
  Examples
  minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
  
  minMax([2334454, 5]) ➞ [5, 2334454]
  
  minMax([1]) ➞ [1, 1]
   */

function minMax(arre) {
    let high = Math.max(...arre)
    let least = Math.min(...arre)
    return [high , least]
}
console.log(minMax([2334454, 5]))


/** Q7
   * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
  
  Examples
  missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
  
  missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
  
  missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
  Notes
  The array of numbers will be unsorted (not in order).
  Only one number will be missing.
   */


function missing ( integers) 
{
    let numbers = [ 1 ,2  , 3 , 4 , 5 , 6 , 7, 8,9 , 10]
    for (let i of numbers)
    { 
        if (  ! integers.includes(i))
        {
            console.log(i)
        }
    }

}
console.log(missing([10, 5, 1, 2, 4, 6, 8, 3, 9]))


/** Q8
   * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
  
  Examples
  numToEng(0) ➞ "zero"
  
  numToEng(18) ➞ "eighteen"
  
  numToEng(126) ➞ "one hundred twenty six"
  
  numToEng(909) ➞ "nine hundred nine"
  Notes
  There are no hyphens used (e.g. "thirty five" not "thirty-five").
  The word "and" is not used (e.g. "one hundred one" not "one hundred and one") **/

function write (num) 
{  
    let tens = num%100
    let ones = tens%10
    tens = tens-ones
    let hund = num -tens-ones
    tens = tens/10
    hund = hund/100
    return  hund +'hundered'+'  ' + tens+'tens' +'  '+ ones+'ones'



}

console.log(write(536))
