import React,{Component} from "react";

import '../assets/css/Swiper.css'
import $ from 'jquery';
import Swipe from '../libs/swipe';


class Swiper extends Component {
  
  render() {

   let {banners,loading} = this.props;
   
  //  console.log(banners[1]==null)

  
    return (

      <div className="banner">
        <ul className="bo">
          {
            
            banners.map(item => (
              <li
              
                key={item._id}
                style={{float:'left',width:"3.75rem",height:"100%"}}
               
              >
                <img src={item.img} alt="" style={{width:"3.35rem",height:"100%"}}/>
                <div className="flo">
                  <h2>Maecenas malesuada elit lectus felis</h2>
                  <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada .</p>
                </div>
                
              </li>
            ))

          }
          
        </ul>

      </div>
    );
  }

//   toDetail(id){
//     //编程式跳转
//     this.props.history.push({pathname:'/detail/'+id, search:'?dataName='+this.props.dataName})
//   }


  componentDidUpdate(){
    
     
    new Swipe($('.banner')[0],{
     auto:2000,
      continuous:true,
      stopPropation:true,
     
    })
    }
}

export default Swiper;