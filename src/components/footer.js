import React from 'react';

const row={
  content: "",
  display: 'table',
  clear: 'both',
}
const column={
  float: 'left',
  width: '33.33%',
  padding: '10px',
  height: '300px' 
}

export default function Footer()
    {
        return (
          <footer color="special-color-dark"> 
           <div fluid="true" className="text-center text-md-left">
              <div style={{width:'100%'}}>
              
              <div style={{width:'35%',float:'left'}}  md="6">
                  <h4 style={{color:'#fff',fontSize:'20px',marginTop:'5px'}} >&nbsp;&nbsp;About</h4>
                  <p>
                  &nbsp;&nbsp; Track your monthly expenditure by simply adding<br></br>&nbsp;&nbsp; each of expense with prominent details,<br></br>&nbsp;&nbsp; save them for future references,<br></br>&nbsp;&nbsp; update them, analyse your expenditure activities <br></br>&nbsp;&nbsp; all at a single place on a single page Web Application ;) 
                  </p>
                </div>

                <div style={{width:'35%',float:'left'}}  md="6">
                  <h4 style={{color:'#fff',fontSize:'20px',marginTop:'5px'}} >Contact Developer</h4>
                  <p>
                    Developed and Maintained by @Himank17Gupta<br></br> for personal and academic expertise interests<br></br>
                    hit me up at any of the handles for well structured <br></br>feedbacks and advices. 
                  </p>
                </div>
                <div style={{width:'30%',float:'right'}} md="6">
                  <h5 style={{color:'#fff',fontSize:'20px',marginBottom:'auto',marginTop:'5px'}} >Quick Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="https://github.com/Himank17Gupta">Github</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://www.linkedin.com/in/himank-gupta-b37873192/">LinkedIn</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://twitter.com/HimanK17Gupta">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div >
                <br></br>
              <div>
                &copy; {new Date().getFullYear()} Copyright: <a href='https://github.com/Himank17Gupta'> Github/Himank17Gupta </a>
              </div>
            </div>
          </footer>
        );}
//           <div style={{boxSizing:'border-box'}} >
//           <div style={row}>
//   <div  style={column}>
//     <h2>Column 1</h2>
//     <p>Some text..</p>
//   </div>
//   <div class="column" style={column}>
//     <h2>Column 2</h2>
//     <p>Some text..</p>
//   </div>
//   <div class="column" style={column}>
//     <h2>Column 3</h2>
//     <p>Some text..</p>
//   </div>
// </div>
//        </div> );
      