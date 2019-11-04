import React from 'react';

import {connect}  from 'react-redux';

const ListIcon=(props)=>
{
return(
<h3 style={{textAlign:'right',margin: 'inherit',color:'#fff'}}>Total Expenses :{props.count} &nbsp;&nbsp;&nbsp;&nbsp;</h3>
)
}

const mapStateToProps = (state)=>{
 //afterDeployement   console.log("Rec Central State Object ",state);
    var array=[];
    state.forEach(obj => array.push(obj.eid));
 //afterDeployement   console.log('array of eids :',array);
    var array2=[];
    array2 =Array.from(new Set(array));
 //afterDeployement   console.log('array of eids after set is :',array2);
    var setarrlen=array2.length;
    return {
        count:setarrlen                   //changed from count:state.length
    };
}
var fn=connect(mapStateToProps);
export default fn(ListIcon);