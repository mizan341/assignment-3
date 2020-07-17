/*--------------------------feetToMileStart-----------------------------------------------------*/

function feetToMile(feet) {
    var mile = feet * 0.000189393939; // 1feet = 0.000189393939 mile;
    if (feet <=0) {
        return "OOPS! Distance is never negative and zero. Please input positive value.";
    }
    return mile.toFixed(4);
}
var result = feetToMile(10000);
console.log(result);

/*--------------------------feetToMileEnd------------------------------------------------------*/

/*--------------------------woodCalculatorStart------------------------------------------------*/

function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;  // 1pic chair = 1 quebec feet wood need
    var tableWood = table * 2;  // 1pic table = 2 quebec feet wood need
    var bedWood = bed * 3;      // 1pic bed = 3 quebec feet wood need
    var totalWood = chairWood + tableWood + bedWood;
    if (chair <= 0 || table <= 0 || bed <= 0) {
        return "OOPS! Please input positive value.";
    }
        return totalWood;
}
var result = woodCalculator(1, 1, 1);
console.log(result);

/*--------------------------woodCalculatorEnd--------------------------------------------------*/

/*--------------------------brickCalculatorStart-----------------------------------------------*/

function brickCalculator(floor) {
    
   if (floor <= 10 && floor >= 0) {
       var tenFloor = floor * 15000;
       return tenFloor;
   }
   if (floor <= 20 && floor >= 0) {
       var tenFloor = 10 * 15000;
       var nextFloor = (floor - 10) * 12000;
       var twentyFloor = tenFloor + nextFloor;
       return twentyFloor;
   }
   if (floor > 20 && floor >= 0) {
       var tenFloorBrick = 10 * 15000;
       var nextFloorBrick = (20-10) * 12000;
       var otherFloor = (floor - 20) * 10000;
       totalFloor = tenFloorBrick + nextFloorBrick + otherFloor;
       return totalFloor;
   }
   else{
       return " ERROR-Please input positive value.";
   }
   return floor;
}
var result = brickCalculator(-30);
console.log(result);

/*--------------------------brickCalculatorEnd-------------------------------------------------*/

/*--------------------------tinyFriendStart----------------------------------------------------*/

function tinyFriend(name) {
    var shortLength = Infinity;
    var shortest = "";

    if (name.length > 0) {
        for (var i = 0; i < name.length; i++) {
            if (typeof name[i] === 'string' && name[i].length < shortLength) {
                shortest = name[i];
                shortLength = name[i].length; 
            }
             if (name[i].length == "" || name[i].length <= 0) {
                 return "OOPS! Input is invalid.";
             }
        }
   }
    return shortest;
}

var result = tinyFriend(["abcd", "abc", "abcde", "aa", "a", "acd"]);
console.log(result); 

/*--------------------------tinyFriendEnd------------------------------------------------------*/
