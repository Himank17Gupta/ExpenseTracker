import * as firebase from "firebase";
import firebaseConfig from './config';
import { read, stat } from "fs";
import { async } from "q";
firebase.initializeApp(firebaseConfig);

function expreducer(state=[],action){

console.log('action called is ',action);
console.log('inside reducer, state is: ',state);

if(action.type=='add'){
  //firebase.database().ref('/'+action.payload.eid).set(action.payload);
return [...state, 
 {
  eid:action.payload.eid,
  expence: action.payload.expence ,
  desc: action.payload.desc ,
  amt: action.payload.amt  ,              
  paid: action.payload.paid
 } 
];

}
else if(action.type=='load'){

console.log('action inside load reducer is :',action);
var objref={eid:action.payload.eid,expence: action.payload.expence ,desc: action.payload.desc ,amt: action.payload.amt  ,paid: action.payload.paid};
//state.push(objref);
var fakearr=[];
fakearr.push(objref);
console.log('state inside load reducer is :',state);
console.log('fakearr formed is:',fakearr);
fakearr=[...state,...fakearr];
console.log('fakearr formed after merging is:',fakearr);
return fakearr;

}

else if(action.type=='remove')
{
console.log('inside remove reducer...action is ',action);
var eid= action.eid;
//firebase.database().ref('/'+eid).remove();
state=state.filter(obj=>obj.eid!=eid);
return state;
}

else if(action.type=='update'){                     //paid update
    //if somehow ( action={newvalues,type:update} ) )
    console.log('inside update reducer...action is ',action);
    var eid= action.eid;
    //var ind=state.findIndex(obj=>obj.eid==eid);
    //console.log('index is:',ind);
    var fakearr=state.map(obj=>obj);
    console.log('fakearr formed inside paid update:',fakearr);
    fakearr.forEach((obj)=>{if(obj.eid==eid){obj.paid=!obj.paid}});
    console.log('fakearr inside paid update after forEach loop:',fakearr);
    //console.log('unchanged value: ',fakearr[ind].paid);
    //fakearr[ind].paid= !fakearr[ind].paid;
    //console.log('changed value: ',fakearr[ind].paid);
    return fakearr;
}

else if(action.type=='updatereal'){                 //expence update
    console.log('inside update reducer...action is ',action);
    var eid= action.eid;
    //var ind=state.findIndex(obj=>obj.eid==eid);
    var fakearr=state.map(obj=>obj);
    fakearr.forEach((obj)=>{
        if(obj.eid==eid){
            obj.expence=action.expense;
            obj.desc=action.desc;
            obj.amt=action.amt;
            obj.paid=action.paid;
        }
    });
    

    //fakearr[ind].expence=action.expense;
    //fakearr[ind].desc=action.desc;
    //fakearr[ind].amt=action.amt;
    //fakearr[ind].paid=action.paid;
    return fakearr;       
}
else if(action.type=='savetofb'){
    console.log('inside savetofb reducer...action is ',action);
    console.log('inside savetofb reducer...payload is ',action.payload);
    console.log('inside savetofb reducer...payload 1st obj is',action.payload[0]);
    remove();
    console.log('removed from db');
    action.payload.forEach(async(obj) => {await firebase.database().ref('/expenses/'+obj.eid).set(obj)});
    console.log('after setobj to db');
    //  <IMP>
    console.log('going outside reducer returning state:',state);   
     state=[];
     return state;             //to be checked as store is receiving useless objects even after feching from db once..multiple values
//var fakestate=[];           //worked somewhat   
//return fakestate;           //worked somewhat
}
//more ifs..
//
return state;
}
export default expreducer;

async function remove(){
    console.log('inside remove fxn');
    await firebase.database().ref('/expenses').remove();
    console.log('going out from remove fxn');
}