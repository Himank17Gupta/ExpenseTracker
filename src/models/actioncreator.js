import React from 'react';

//var expenseId=-1;                                 //firebase id conflict tobe handled later
//localStorage.setItem('expenseId',expenseId);
function uniqueNumber() {
    var date = Date.now();
   
    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }

    return date;
}

uniqueNumber.previous = 0;

function ID(){
  return uniqueNumber();
};

function expenseActionCreator(expence,desc,amt,paid,type){
    console.log('localstorage:',localStorage.expenseId);
//var eid=localStorage.expenseId++;
var eid=ID();
console.log('localstorage:',localStorage.expenseId);
    return {
        payload:{expence,desc,amt,paid,eid},
        type:type
    }

}

export default expenseActionCreator;

// expfromfb= firebase.database().ref('/expenses');
//      expfromfb.on('value',(snapshot)=>{
//         let expns =  snapshot.val();
        // console.log('expns from firebase is :',expns); 