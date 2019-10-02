import React from 'react';
import './App.css';
import AddExpence from './components/addexpence';
import expenseActionCreator from './models/actioncreator';
import { store } from './models/store';
import ListIcon from './components/listIcon';
import ExpenseList from './components/expencelist';
import EditExpense from './components/editexpense';
import firebaseConfig from './models/config';
import * as firebase from "firebase";
import { async } from 'q';
import Footer from './components/footer';

export default class App extends React.Component{

constructor(props){
    super(props);
    this.exp={};
    this.fieldtext='ed';
    //firebase.initializeApp(firebaseConfig);
    //firebase.database().ref('/dummy').set('dummy4');
    this.screen='addexpense';
    this.editobject={};
    this.state={screen:this.screen,editobject:this.editobject,msg:''};
}

componentDidMount(){
    console.log('component did mount bitches');
    var expfromfb=[];                
    expfromfb= firebase.database().ref('/expenses');
    expfromfb.on('value',async(snapshot)=>{
        var expns=[];
        expns=snapshot.val();
await console.log('component did mount before azax',expns);
var exparr=[];
for(let key in expns){                 //gadbad
    let expnsobj=expns[key];
    await exparr.push(expnsobj);
} 
console.log('exparr sent to doazax is: ',exparr);

//await
 this.doazax(exparr);
exparr=[];      
console.log('component did mount after loop');
// expns.forEach(expobj => {
//     var action= expenseActionCreator(expobj.expence,expobj.desc,expobj.amt,expobj.paid,'add');
//     store.dispatch(action);
// });
});
console.log('component did mount end');

}
// products.on('value',(snapshot)=>{
//     let prods =  snapshot.val();
//     for(let key in prods){
//     let fireBaseProductObject =  prods[key];
//     clone(fireBaseProductObject);
//   }

 async doazax(expenses){
    console.log('doajax called',expenses);
   await expenses.forEach(async(expobj )=>{
        //var action= expenseActionCreator(expobj.expence,expobj.desc,expobj.amt,expobj.paid,'add');
       var action=this.loadfromfbactioncreator(expobj.eid,expobj.expence,expobj.desc,expobj.amt,expobj.paid,'load')
        await store.dispatch(action);
    });

}
loadfromfbactioncreator(eid,expence,desc,amt,paid,type){
console.log('inside load from fb action creator');
return {
    payload:{eid,expence,desc,amt,paid},
    type:type
}

}

takeinput(event){
//console.log('take input is working');     //--working so commented
this.exp['paid']=false;
var val=event.target.value;
var key=event.target.id;
this.exp[key]=val;
//console.log('exp object formed is: ', this.exp);    // --working so      
}
handlePaid(event){
    console.log('paid called',event.target.checked);
    this.exp['paid']=event.target.checked;
    console.log('exp object formed is: ', this.exp); 
}

takeUpdateInput(event){
    var val=event.target.value;
    var key=event.target.id;
    this.editobject[key]=val;
    //this.editobject['paid']=event.target.checked;
    console.log('exp object formed is: ', this.editobject);
}

add(){
    console.log('add called');
    if(this.exp.expense&&this.exp.desc&&this.exp.amt){
    var action= expenseActionCreator(this.exp.expense,this.exp.desc,this.exp.amt,this.exp.paid,'add');
    store.dispatch(action);
    this.setState({...this.state,msg:""})
    }
    else{
    this.setState({...this.state,msg:" fill all Information fields first!"});
    }
    //firebase.database().ref('/').set('dumdum');
}

updateExpensePaid(event){
var eid=event.target.id;
console.log('update expense paid called by eid: ',eid); //recieved the eid of updating expense object
var action={eid:eid,type:'update'};  
store.dispatch(action);  
}

removeExpense(event){
var eid=event.target.id;
console.log('remove expense called by eid: ',eid);
var action={eid:eid,type:'remove'};
store.dispatch(action);
}

testfn(eid,exp,des,amt,paid){
    console.log('test fn from updatetest called...expense is :',eid,exp,des,amt,paid);
    this.editobject['eid']=eid;
    this.editobject['expense']=exp;
    this.editobject['desc']=des;
    this.editobject['amt']=amt;
    this.editobject['paid']=paid;
    this.screen='editobj';
    this.setState({screen:this.screen})
}

updatereal(){
    console.log('real update called');
    //eid: 1, expense: "education", desc: "qwerty", amt: "123", paid: "on"
    var action= {eid:this.editobject.eid, expense:this.editobject.expense, desc:this.editobject.desc, amt:this.editobject.amt, paid:this.editobject.paid,type:'updatereal'};
    store.dispatch(action);
}
savetofb(arr){
    console.log('state is',this.state);
    console.log('received central store is',arr);
    console.log('save to fb called');
    var action={'payload':arr,type:'savetofb'};
    store.dispatch(action);
}

buttonStyle = {
    padding: '8px 12px',
    margin: '15px 26px',
    boxSizing: 'border-round',
    borderRadius: '15px',
    backgroundColor: '#5c5d5e',
    color: 'white',
    cursor:'pointer',
    float:'right'
    // position: "absolute",
   // right: "55px"
  };

viewlist(){
console.log('changing screen called');
if(this.screen=='addexpense'){
this.screen='viewlist';
this.setState({screen:this.screen})
}
else if(this.screen=='viewlist')
{
this.screen='addexpense';
this.setState({screen:this.screen})
}
else if(this.screen=='editobj')
{
this.screen='viewlist';
this.setState({screen:this.screen})
}

}

render(){
    if(this.state.screen=='addexpense'){
return(//backgroundColor:'#ae96e3' '#100414'
<>
<h1 style={{textAlign:'center', fontSize:'50px',margin: 'inherit',color:'#fff'}}>Expense Tracker Application</h1> <ListIcon ></ListIcon>
<button style={this.buttonStyle} onClick={this.viewlist.bind(this)}>View Expenses</button>
<AddExpence addexp={this.add.bind(this)} 
 takeInput={this.takeinput.bind(this)}
 paidchange={this.handlePaid.bind(this)}
 msg={this.state.msg} 
  ></AddExpence>
  <Footer></Footer>
</>
)
}
else if(this.state.screen=='viewlist'){
    return(
        <div>
        <button style={this.buttonStyle} onClick={this.viewlist.bind(this)}>Add Expenses</button>
        <ExpenseList update={this.updateExpensePaid.bind(this)}
        remove={this.removeExpense.bind(this)} 
        test={this.testfn.bind(this)}
        savetofb={this.savetofb.bind(this)}
        ></ExpenseList>
        
    </div>
    )
}
else if(this.state.screen=='editobj'){
        return(
            <div>
            <button style={this.buttonStyle} onClick={this.viewlist.bind(this)}>Check List</button>
            <EditExpense updateReal={this.updatereal.bind(this)} editobject={this.editobject} takeInput={this.takeUpdateInput.bind(this)} ></EditExpense>
            </div>
        )  


}

}
}
