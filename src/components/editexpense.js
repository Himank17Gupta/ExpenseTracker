//import {connect} from 'react-redux';
import React from 'react';

const textarea ={
    width: '-webkit-fill-available',
    height: '150px',
    padding: '12px 20px',
    boxSizing: 'border-round',
    border: '2px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#d5d9e0',
    resize: 'none',
  }
  const divStyle = {
   // width: '100%',
   paddingLeft: '5%',
   paddingRight: '5%',
   margin: '10px',
    //padding: '12px 20px',
    //margin: '8px 0',
    boxSizing: 'border-round',
    borderRadius: '15px',
   // backgroundColor: '#f7ebf4',
    color: 'white'
    };
    const inputStyle={
      width: '-webkit-fill-available',
      padding: '12px 20px',
      margin: '8px 0',
      boxSizing: 'border-round',
      borderRadius: '15px',
      backgroundColor: '#d5d9e0',
      color: 'white'
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
    //backgroundColor: '#e7e7e7',
    color:'#fff'
  }
  
      
  function EditExpense(props){
  
 //afterDeployement console.log(props.editobject);
  return(
  <div style={divStyle}>
  {/*<h3>update your shit here..</h3>*/}
  <h2 style={{color:'#fff',fontSize:'40px',margin:'inherit'}}>Update Expense Record...</h2>
  <br></br>
        <label style={label}  >Expenditure Type:</label>
          <input style={inputStyle} type="text" required={true} id='expense' onChange={props.takeInput} placeholder={props.editobject.expense}/><br></br>
        <label style={label}  >Description of Expenditure</label>        
          <textarea style={textarea} type="textarea" id='desc' cols="40" rows="5" required={true}  onChange={props.takeInput} placeholder={props.editobject.desc}/><br></br>
        <label style={label}  >Amount:</label> <br></br> 
          <input style={inputStyle} type="text" required={true} id='amt'  onChange={props.takeInput} placeholder={props.editobject.amt}/><br></br>
         {/*<label style={label}  >Paid:</label>*/}
         {/* <input style={checkbox} id='paid' type="checkbox" onChange={props.takeInput}  checked={props.editobject.paid}    required={true} />*/}
        <button style={buttonStyle} onClick={props.updateReal} >Update</button>
  
  </div>
  )
  
  }
  


export default EditExpense;















// const EditExpense=(props)=>
// {
//     console.log(' edit expense received state obj as :',props.arrayofobj);
// return(<h3>this is edit component</h3>)
// }


// const mapStateToProps = (state)=>{
//     console.log("Rec Central State Object in edit expense",state);
//     return {
//         arrayofobj:state
//     };
// }
// var fn=connect(mapStateToProps);
// export default fn(EditExpense);