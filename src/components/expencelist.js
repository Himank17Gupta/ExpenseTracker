import {connect} from 'react-redux';
import React from 'react';

const divStyle = {
  //width: '100%',
  //padding: '12px 20px',
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: '10px',
  //margin: '8px 0',
  boxSizing: 'border-round',
  borderRadius: '15px',
 // backgroundColor: '#f7ebf4',
  color: '#708780'
  };

const buttonStyle = {
    padding: '8px 12px',
    margin: '15px 4px 5px 5px',
    boxSizing: 'border-round',
    borderRadius: '15px',
    backgroundColor: '#7089D0',
    color: 'white',
    cursor:'pointer'
  };


const ExpenseList=(props)=>
{
    console.log('expenselist received state obj as :',props.arrayofobj);
return(
    <div style={divStyle}>
    <h2 style={{color:'#fff'}}>Expense Records:</h2>
{
     props.arrayofobj.map((obj)=>{
     return(
     <li key={obj.eid}     
     style={obj.paid?{backgroundColor:'#0e9e1f',boxSizing: 'border-round',borderRadius: '15px',width:'-webkit-fill-available',}:{backgroundColor:'#d1084b',boxSizing: 'border-round',borderRadius: '15px',width:'-webkit-fill-available',}}
     >
         <h3 style={{textAlign:'center',color: 'black', margin:'0px',padding:'0px'}}>{obj.expence}</h3>
         <h4 style={{textAlign:'center',color: 'black', margin:'0px',padding:'0px'}}>{obj.desc} </h4><h4 style={{textAlign:'center',color: 'black', margin:'0px',padding:'0px'}}> ₹{obj.amt} </h4> {/*<span>   paid :{""+obj.paid} </span>*/}
    <div style={{textAlign:'center'}}> <button style={buttonStyle} id={obj.eid} onClick={props.update}>Update Pay</button> 
         <button style={buttonStyle} id={obj.eid} onClick={props.remove}>Remove expense</button>
         <button style={buttonStyle} id={obj.eid} onClick={()=>props.test(obj.eid,obj.expence,obj.desc,obj.amt,obj.paid)}>Update Details</button>
    </div>
    </li>)
        })
} 
     <button style={buttonStyle} onClick={()=>props.savetofb(props.arrayofobj)}>Save Expense Records</button>   
    </div>
)
}
const mapStateToProps = (state)=>{
    console.log("Rec Central State Object in expense list",state);
    
    var array=[];
    state.forEach(obj => array.push(obj.eid));
    console.log('array of eids :',array);
    //array=state.filter(obj=>obj);
    var array2=[];
    array2 =Array.from(new Set(array));
    console.log('array of eids after set is :',array2);
    var setarrlen=array2.length;
    var lenstate=state.length;
    var array3=[];
    array3=state.filter(obj=>obj);
    array3.splice(0,lenstate-setarrlen);
    console.log('plz work bitch -._.-:',array3);
    state=array3;
    console.log("exporting Central State Object in expense list",state);
    return {
        arrayofobj:array3      // changed from:   arrayofobj:state
    };

}
var fn=connect(mapStateToProps);
export default fn(ExpenseList);


// Id :{obj.eid} type :{obj.expence} description :{obj.desc} amount :{obj.amt} paid :{""+obj.paid}