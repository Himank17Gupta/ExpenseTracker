(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(53)},34:function(e,t,a){},36:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=(a(34),a(19)),c=a(3),s=a.n(c),d=a(7),p=a(22),u=a(23),b=a(27),m=a(24),f=a(28),h=(a(36),{width:"-webkit-fill-available",height:"150px",padding:"12px 20px",boxSizing:"border-round",border:"2px solid #ccc",marginTop:"8px",borderRadius:"4px",backgroundColor:"#d6ce9f",resize:"none"}),x={paddingLeft:"5%",paddingRight:"5%",margin:"10px",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#777778",color:"white"},g={width:"-webkit-fill-available",padding:"12px 20px",margin:"8px 0",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#d6ce9f",color:"black"},y={padding:"12px 20px",margin:"8px 0",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#4CAF50",color:"white",cursor:"pointer"},v={verticalAlign:"middle",position:"relative",bottom:"2px"},E={color:"#fff"};var k=function(e){return r.a.createElement("div",{style:x},r.a.createElement("br",null),r.a.createElement("label",{style:E},"Expenditure Type "),r.a.createElement("input",{style:g,type:"text",required:!0,id:"expense",onChange:e.takeInput,placeholder:"Enter the type of expenditure(bills/education/business payments/etc)"}),r.a.createElement("br",null),r.a.createElement("label",{style:E},"Description of Expenditure "),r.a.createElement("textarea",{style:h,type:"textarea",id:"desc",cols:"40",rows:"5",required:!0,onChange:e.takeInput,placeholder:"Write Description of your Expense(within 100 words)"}),r.a.createElement("br",null),r.a.createElement("label",{style:E},"Amount ")," ",r.a.createElement("br",null),r.a.createElement("input",{style:g,type:"text",required:!0,id:"amt",onChange:e.takeInput,placeholder:"Enter candidature Amount for Expense"}),r.a.createElement("br",null),r.a.createElement("label",{style:E},"Is Paid?"),r.a.createElement("input",{style:v,id:"paid",type:"checkbox",onClick:e.paidchange,required:!0}),r.a.createElement("br",null),r.a.createElement("h3",{style:{color:"red"}},e.msg),r.a.createElement("button",{style:y,onClick:e.addexp},"Add Expense"))};function w(){var e=Date.now();return e<=w.previous?e=++w.previous:w.previous=e,e}w.previous=0;var j=function(e,t,a,n,r){console.log("localstorage:",localStorage.expenseId);var o=w();return console.log("localstorage:",localStorage.expenseId),{payload:{expence:e,desc:t,amt:a,paid:n,eid:o},type:r}},S=a(13),C=a(14),z=a(10),R={apiKey:"AIzaSyBX9v9AoOyMogSk2SRfYJGkx1MYf_u6XqU",authDomain:"expensetrackerreactjs.firebaseapp.com",databaseURL:"https://expensetrackerreactjs.firebaseio.com",projectId:"expensetrackerreactjs",storageBucket:"",messagingSenderId:"826614709577",appId:"1:826614709577:web:46c7441dd52f6b74"};a(46),a(21);z.initializeApp(R);var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(console.log("action called is ",t),console.log("inside reducer, state is: ",e),"add"==t.type)return[].concat(Object(C.a)(e),[{eid:t.payload.eid,expence:t.payload.expence,desc:t.payload.desc,amt:t.payload.amt,paid:t.payload.paid}]);if("load"==t.type){console.log("action inside load reducer is :",t);var a={eid:t.payload.eid,expence:t.payload.expence,desc:t.payload.desc,amt:t.payload.amt,paid:t.payload.paid};return(r=[]).push(a),console.log("state inside load reducer is :",e),console.log("fakearr formed is:",r),r=[].concat(Object(C.a)(e),Object(C.a)(r)),console.log("fakearr formed after merging is:",r),r}if("remove"==t.type){console.log("inside remove reducer...action is ",t);var n=t.eid;return e=e.filter(function(e){return e.eid!=n})}if("update"==t.type){console.log("inside update reducer...action is ",t),n=t.eid;var r=e.map(function(e){return e});return console.log("fakearr formed inside paid update:",r),r.forEach(function(e){e.eid==n&&(e.paid=!e.paid)}),console.log("fakearr inside paid update after forEach loop:",r),r}if("updatereal"==t.type)return console.log("inside update reducer...action is ",t),n=t.eid,(r=e.map(function(e){return e})).forEach(function(e){e.eid==n&&(e.expence=t.expense,e.desc=t.desc,e.amt=t.amt,e.paid=t.paid)}),r;return"savetofb"==t.type?(console.log("inside savetofb reducer...action is ",t),console.log("inside savetofb reducer...payload is ",t.payload),console.log("inside savetofb reducer...payload 1st obj is",t.payload[0]),function(){O.apply(this,arguments)}(),console.log("removed from db"),t.payload.forEach(function(){var e=Object(d.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.database().ref("/expenses/"+t.eid).set(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),console.log("after setobj to db"),console.log("going outside reducer returning state:",e),e=[]):e};function O(){return(O=Object(d.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside remove fxn"),e.next=3,z.database().ref("/expenses").remove();case 3:console.log("going out from remove fxn");case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var I=Object(S.b)(A);I.subscribe(function(){console.log("Subscribed.. ",I.getState())});var D=a(9),T=Object(D.b)(function(e){console.log("Rec Central State Object ",e);var t=[];e.forEach(function(e){return t.push(e.eid)}),console.log("array of eids :",t);var a;return a=Array.from(new Set(t)),console.log("array of eids after set is :",a),{count:a.length}})(function(e){return r.a.createElement("h3",{style:{textAlign:"right",margin:"inherit",color:"#fff"}},"Total Expenses :",e.count," \xa0\xa0\xa0\xa0")}),q={paddingLeft:"10%",paddingRight:"10%",paddingTop:"10px",boxSizing:"border-round",borderRadius:"15px",color:"#708780"},G={padding:"8px 12px",margin:"15px 4px 5px 5px",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#7089D0",color:"white",cursor:"pointer"},U=Object(D.b)(function(e){console.log("Rec Central State Object in expense list",e);var t=[];e.forEach(function(e){return t.push(e.eid)}),console.log("array of eids :",t);var a;a=Array.from(new Set(t)),console.log("array of eids after set is :",a);var n=a.length,r=e.length,o=[];return(o=e.filter(function(e){return e})).splice(0,r-n),console.log("plz work bitch -._.-:",o),e=o,console.log("exporting Central State Object in expense list",e),{arrayofobj:o}})(function(e){return console.log("expenselist received state obj as :",e.arrayofobj),r.a.createElement("div",{style:q},r.a.createElement("h2",{style:{color:"#fff"}},"Expense Records:"),e.arrayofobj.map(function(t){return r.a.createElement("li",{key:t.eid,style:t.paid?{backgroundColor:"#0e9e1f",boxSizing:"border-round",borderRadius:"15px",width:"-webkit-fill-available"}:{backgroundColor:"#d1084b",boxSizing:"border-round",borderRadius:"15px",width:"-webkit-fill-available"}},r.a.createElement("h3",{style:{textAlign:"center",color:"black",margin:"0px",padding:"0px"}},t.expence),r.a.createElement("h4",{style:{textAlign:"center",color:"black",margin:"0px",padding:"0px"}},t.desc," "),r.a.createElement("h4",{style:{textAlign:"center",color:"black",margin:"0px",padding:"0px"}}," \u20b9",t.amt," ")," ",r.a.createElement("div",{style:{textAlign:"center"}}," ",r.a.createElement("button",{style:G,id:t.eid,onClick:e.update},"Update Pay"),r.a.createElement("button",{style:G,id:t.eid,onClick:e.remove},"Remove expense"),r.a.createElement("button",{style:G,id:t.eid,onClick:function(){return e.test(t.eid,t.expence,t.desc,t.amt,t.paid)}},"Update Details")))}),r.a.createElement("button",{style:G,onClick:function(){return e.savetofb(e.arrayofobj)}},"Save Expense Records"))}),L={width:"-webkit-fill-available",height:"150px",padding:"12px 20px",boxSizing:"border-round",border:"2px solid #ccc",borderRadius:"4px",backgroundColor:"#d5d9e0",resize:"none"},P={paddingLeft:"5%",paddingRight:"5%",margin:"10px",boxSizing:"border-round",borderRadius:"15px",color:"white"},B={width:"-webkit-fill-available",padding:"12px 20px",margin:"8px 0",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#d5d9e0",color:"white"},H={padding:"12px 20px",margin:"8px 0",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#4CAF50",color:"white",cursor:"pointer"},F={color:"#fff"};var M=function(e){return console.log(e.editobject),r.a.createElement("div",{style:P},r.a.createElement("h2",{style:{color:"#fff",fontSize:"40px",margin:"inherit"}},"Update Expense Record..."),r.a.createElement("br",null),r.a.createElement("label",{style:F},"Expenditure Type:"),r.a.createElement("input",{style:B,type:"text",required:!0,id:"expense",onChange:e.takeInput,placeholder:e.editobject.expense}),r.a.createElement("br",null),r.a.createElement("label",{style:F},"Description of Expenditure"),r.a.createElement("textarea",{style:L,type:"textarea",id:"desc",cols:"40",rows:"5",required:!0,onChange:e.takeInput,placeholder:e.editobject.desc}),r.a.createElement("br",null),r.a.createElement("label",{style:F},"Amount:")," ",r.a.createElement("br",null),r.a.createElement("input",{style:B,type:"text",required:!0,id:"amt",onChange:e.takeInput,placeholder:e.editobject.amt}),r.a.createElement("br",null),r.a.createElement("button",{style:H,onClick:e.updateReal},"Update"))};function N(){return r.a.createElement("footer",{color:"special-color-dark"},r.a.createElement("div",{fluid:!0,className:"text-center text-md-left"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{width:"35%",float:"left"},md:"6"},r.a.createElement("h4",{style:{color:"#fff",fontSize:"20px",marginTop:"5px"}},"\xa0\xa0About"),r.a.createElement("p",null,"\xa0\xa0 Track your monthly expenditure by simply adding",r.a.createElement("br",null),"\xa0\xa0 each of expense with prominent details,",r.a.createElement("br",null),"\xa0\xa0 save them for future references,",r.a.createElement("br",null),"\xa0\xa0 update them, analyse your expenditure activities ",r.a.createElement("br",null),"\xa0\xa0 all at a single place on a single page Web Application ;)")),r.a.createElement("div",{style:{width:"35%",float:"left"},md:"6"},r.a.createElement("h4",{style:{color:"#fff",fontSize:"20px",marginTop:"5px"}},"Contact Developer"),r.a.createElement("p",null,"Developed and Maintained by @Himank17Gupta",r.a.createElement("br",null)," for personal and academic expertise interests",r.a.createElement("br",null),"hit me up at any of the handles for well structured ",r.a.createElement("br",null),"feedbacks and advices.")),r.a.createElement("div",{style:{width:"30%",float:"right"},md:"6"},r.a.createElement("h5",{style:{color:"#fff",fontSize:"20px",marginBottom:"auto",marginTop:"5px"}},"Quick Links"),r.a.createElement("ul",null,r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://github.com/Himank17Gupta"},"Github")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.linkedin.com/in/himank-gupta-b37873192/"},"LinkedIn")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://twitter.com/HimanK17Gupta"},"Twitter")))))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",null,"\xa9 ",(new Date).getFullYear()," Copyright: ",r.a.createElement("a",{href:"https://github.com/Himank17Gupta"}," Github/Himank17Gupta "))))}var W=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(m.a)(t).call(this,e))).buttonStyle={padding:"8px 12px",margin:"15px 26px",boxSizing:"border-round",borderRadius:"15px",backgroundColor:"#5c5d5e",color:"white",cursor:"pointer",float:"right"},a.exp={},a.fieldtext="ed",a.screen="addexpense",a.editobject={},a.state={screen:a.screen,editobject:a.editobject,msg:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("component did mount bitches");z.database().ref("/expenses").on("value",function(){var t=Object(d.a)(s.a.mark(function t(a){var n,r,o,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],n=a.val(),t.next=4,console.log("component did mount before azax",n);case 4:r=[],t.t0=s.a.keys(n);case 6:if((t.t1=t.t0()).done){t.next=13;break}return o=t.t1.value,i=n[o],t.next=11,r.push(i);case 11:t.next=6;break;case 13:console.log("exparr sent to doazax is: ",r),e.doazax(r),r=[],console.log("component did mount after loop");case 17:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),console.log("component did mount end")}},{key:"doazax",value:function(){var e=Object(d.a)(s.a.mark(function e(t){var a=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("doajax called",t),e.next=3,t.forEach(function(){var e=Object(d.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.loadfromfbactioncreator(t.eid,t.expence,t.desc,t.amt,t.paid,"load"),e.next=3,I.dispatch(n);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadfromfbactioncreator",value:function(e,t,a,n,r,o){return console.log("inside load from fb action creator"),{payload:{eid:e,expence:t,desc:a,amt:n,paid:r},type:o}}},{key:"takeinput",value:function(e){this.exp.paid=!1;var t=e.target.value,a=e.target.id;this.exp[a]=t}},{key:"handlePaid",value:function(e){console.log("paid called",e.target.checked),this.exp.paid=e.target.checked,console.log("exp object formed is: ",this.exp)}},{key:"takeUpdateInput",value:function(e){var t=e.target.value,a=e.target.id;this.editobject[a]=t,console.log("exp object formed is: ",this.editobject)}},{key:"add",value:function(){if(console.log("add called"),this.exp.expense&&this.exp.desc&&this.exp.amt){var e=j(this.exp.expense,this.exp.desc,this.exp.amt,this.exp.paid,"add");I.dispatch(e),this.setState(Object(l.a)({},this.state,{msg:""}))}else this.setState(Object(l.a)({},this.state,{msg:" fill all Information fields first!"}))}},{key:"updateExpensePaid",value:function(e){var t=e.target.id;console.log("update expense paid called by eid: ",t);var a={eid:t,type:"update"};I.dispatch(a)}},{key:"removeExpense",value:function(e){var t=e.target.id;console.log("remove expense called by eid: ",t);var a={eid:t,type:"remove"};I.dispatch(a)}},{key:"testfn",value:function(e,t,a,n,r){console.log("test fn from updatetest called...expense is :",e,t,a,n,r),this.editobject.eid=e,this.editobject.expense=t,this.editobject.desc=a,this.editobject.amt=n,this.editobject.paid=r,this.screen="editobj",this.setState({screen:this.screen})}},{key:"updatereal",value:function(){console.log("real update called");var e={eid:this.editobject.eid,expense:this.editobject.expense,desc:this.editobject.desc,amt:this.editobject.amt,paid:this.editobject.paid,type:"updatereal"};I.dispatch(e)}},{key:"savetofb",value:function(e){console.log("state is",this.state),console.log("received central store is",e),console.log("save to fb called");var t={payload:e,type:"savetofb"};I.dispatch(t)}},{key:"viewlist",value:function(){console.log("changing screen called"),"addexpense"==this.screen?(this.screen="viewlist",this.setState({screen:this.screen})):"viewlist"==this.screen?(this.screen="addexpense",this.setState({screen:this.screen})):"editobj"==this.screen&&(this.screen="viewlist",this.setState({screen:this.screen}))}},{key:"render",value:function(){return"addexpense"==this.state.screen?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center",fontSize:"50px",margin:"inherit",color:"#fff"}},"Expense Tracker Application")," ",r.a.createElement(T,null),r.a.createElement("button",{style:this.buttonStyle,onClick:this.viewlist.bind(this)},"View Expenses"),r.a.createElement(k,{addexp:this.add.bind(this),takeInput:this.takeinput.bind(this),paidchange:this.handlePaid.bind(this),msg:this.state.msg}),r.a.createElement(N,null)):"viewlist"==this.state.screen?r.a.createElement("div",null,r.a.createElement("button",{style:this.buttonStyle,onClick:this.viewlist.bind(this)},"Add Expenses"),r.a.createElement(U,{update:this.updateExpensePaid.bind(this),remove:this.removeExpense.bind(this),test:this.testfn.bind(this),savetofb:this.savetofb.bind(this)})):"editobj"==this.state.screen?r.a.createElement("div",null,r.a.createElement("button",{style:this.buttonStyle,onClick:this.viewlist.bind(this)},"Check List"),r.a.createElement(M,{updateReal:this.updatereal.bind(this),editobject:this.editobject,takeInput:this.takeUpdateInput.bind(this)})):void 0}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D.a,{store:I},r.a.createElement(W,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.0ffe4a88.chunk.js.map