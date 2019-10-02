import React from 'react';

// class AddExpence extends React.Component{

// constructor(props){
// super(props);
// }

// ret=()=>{};

const textarea ={
  width: '-webkit-fill-available',
  height: '150px',
  padding: '12px 20px',
  boxSizing: 'border-round',
  border: '2px solid #ccc',
  marginTop:'8px',
  borderRadius: '4px',
  //backgroundColor: '#d5d9e0',
  backgroundColor:"#d6ce9f",
  resize: 'none',
}
const divStyle = {
  //width: '91%',
  //padding: '2px 35px 2px 77px',
  paddingLeft: '5%',
  paddingRight: '5%',
  margin: '10px',
  boxSizing: 'border-round',
  borderRadius: '15px',
  backgroundColor: '#777778',
  color: 'white'
  };
  const inputStyle={
    width: '-webkit-fill-available',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-round',
    borderRadius: '15px',
    //backgroundColor: '#d5d9e0',
    backgroundColor:"#d6ce9f",
    color: 'black'
  }
  const buttonStyle={
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-round',
    borderRadius: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor:'pointer'
  }

 const checkbox= {
    verticalAlign: 'middle',
    position: 'relative',
    bottom: '2px'
}
const label={
 // backgroundColor: '#e7e7e7',
  //color:'black'
  color:"#fff"
}

function AddExpence(props){

return(
<div style={divStyle}>
{
    //<h2>Welcome {props.username}</h2>}
}
<br></br>
      <label style={label}  >Expenditure Type </label>
        <input style={inputStyle} type="text" required={true} id='expense' onChange={props.takeInput} placeholder='Enter the type of expenditure(bills/education/business payments/etc)'/><br></br>
      <label style={label}  >Description of Expenditure </label>        
        <textarea style={textarea} type="textarea" id='desc' cols="40" rows="5" required={true}  onChange={props.takeInput} placeholder='Write Description of your Expense(within 100 words)'/><br></br>
      <label style={label}  >Amount </label> <br></br> 
        <input style={inputStyle} type="text" required={true} id='amt'  onChange={props.takeInput} placeholder='Enter candidature Amount for Expense'/><br></br>
      <label style={label}  >Is Paid?</label>
        <input style={checkbox} id='paid' type="checkbox" onClick={props.paidchange} required={true} /><br></br>
     <h3 style={{color:'red'}}>{props.msg}</h3>
      <button style={buttonStyle} onClick={props.addexp} >Add Expense</button>

</div>
)

}

export default AddExpence;