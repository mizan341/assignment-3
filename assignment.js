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


/*--------------------------brickCalculatorEnd-------------------------------------------------*/

/*--------------------------tinyFriendStart----------------------------------------------------*/

/*--------------------------tinyFriendEnd------------------------------------------------------*/

