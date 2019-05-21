import React,{Component} from "react";

import '../assets/css/cell.css'
import {Link} from 'react-router-dom'


class Cell extends Component {
  render() {
    let {cells, dataName} = this.props;
    return (
      <div className="cell">
      
        <div className='cells'>
             <div className='celltop'>
{
            cells.map(item => (
              <div className='celltl'
              key={item._id}>
                 <Link to={{
                pathname:'/detail/' + item._id,
                search:"?dataName=" + dataName
              }}><img src={item.img} /></Link>
                     <h3>{item.h3}</h3>
                     <p>{item.des}</p>
              </div>
           
          ) )}


                



       </div>
             
        </div>
        
        

      </div>
    );
  
}
}
export default Cell;


 {/* <div className='celltl'>
                     <a href="#"><img src="/images/5.jpg" /></a>
                     <h3>Suspendisse a pellentesque dui</h3>
                     <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</p>
                 </div>
                 <div className='celltl'>
                    <a href="#"><img src="/images/5.jpg" /></a>
                     <h3>Suspendisse a pellentesque dui</h3>
                     <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</p>
                 </div>
                 
                <div className='celltl'>
                    <a href="#"><img src="/images/5.jpg" /></a>
                     <h3>Suspendisse a pellentesque dui</h3>
                     <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</p>
                </div>
                 <div className='celltl'>
                     <a href="#"><img src="/images/5.jpg" /></a>
                     <h3>Suspendisse a pellentesque dui</h3>
                     <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.</p>
                 </div> */}
