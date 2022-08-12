/* 1 */
/*convert Radian TO degree*/
function radianToDegree(Radian){
    let degree = Radian * (180 / 3.1416);
    if( typeof Radian !== 'number' ){
        degree = 'Please enter a Number !';
    }
    return degree;
}
/* 2 */
/** checking the given file is java script file**/
function isJavaScriptFile(fileName){
    let result = false;
    if( typeof fileName !== 'string' ){
        result =  'Please enter a string !';
    }
    else if(fileName.endsWith('.js') === true){
        result = true;
    }
    return result;
}
/* 3 */
/**calculating total diesel,petrol amd octane price**/
function oilPrice(dieselAmountInLitre,petrolAmountInLitre,octaneAmountInLitre){
    let dieselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;
    let totalPrice = (dieselAmountInLitre * dieselPrice) + (petrolAmountInLitre * petrolPrice) + (octaneAmountInLitre * octanePrice);
    if(typeof dieselAmountInLitre !== 'number' || typeof petrolAmountInLitre !== 'number' || typeof octaneAmountInLitre !== 'number' ){
        totalPrice =  'Please enter a Number !';
    }
    return totalPrice;
}
/* 4 */
/* total fare for the people who have to travel in public bus*/
function publicBusFare(totalPeople){
    let seatsOfReservedBus = 50;
    let seatsOfMicroBus = 11;
    let numberOfReservedBus = parseInt(totalPeople / seatsOfReservedBus);
    let numberOfPeopleInPublicBus = numberOfReservedBus * seatsOfReservedBus;
    let leftForMicroBus = totalPeople - numberOfPeopleInPublicBus;
    let numberOfMicroBus = parseInt(leftForMicroBus / seatsOfMicroBus);
    let numberOfPeopleInMicroBus = numberOfMicroBus * seatsOfMicroBus;
    let leftForPublicBus = leftForMicroBus - numberOfPeopleInMicroBus;
    let fareOfPublicBus = 250;
    let totalFareInPublicBus = fareOfPublicBus * leftForPublicBus;
    if( typeof totalPeople !== 'number' ){
        totalFareInPublicBus = 'Please enter a Number !';
    }
    return totalFareInPublicBus;
}
/* 5 */
/* checking 1st person is 2nd persons friend */
function isBestFriend(firstPerson,secondPerson){
    let result = false;
    let firstPersonName = firstPerson.name;
    let firstPersonFriend = firstPerson.friend;
    let secondPersonName = secondPerson.name;
    let secondPersonFriend = secondPerson.friend;
    if( typeof firstPerson !== 'object' || typeof secondPerson !== 'object' ){
        result = 'Please enter a Object !';
    }
    else if(firstPersonName.toLowerCase() === secondPersonFriend.toLowerCase() && secondPersonName.toLowerCase() === firstPersonFriend.toLowerCase()){
        result = true;
    }
    return result;
}
