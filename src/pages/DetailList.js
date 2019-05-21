import React,{Component} from "react";

import '../assets/css/list.css'

import {Link} from 'react-router-dom'
import querystring from 'query-string'
import axios from 'axios'

class Detail extends Component {

    state={
        data:{}
      }
  render() {
    let data = this.state.data;
    console.log(data)
    return (
        <div className='detaillist'>
            <div className='detaillistbox'>
                <div className='detaillistpage'>
                    <h3 className='back'><span  onClick={()=>this.props.history.go(-1)}>GOBACK>></span></h3>

                   
        {  data[0] && data.map(item => (
                       <div className='listmove' key={item._id}>
                           <div className='lista'>
                               <Link to={{
                pathname:'/detail/' + item._id,
                search:"?dataName=" + 'list'
              }}><img src={item.img} /></Link>
                               </div>
                            <div className='listright'>
                                <h4>{item.h4} </h4>
                                <p>{item.des}</p>
                            </div>
                       </div>

          ))      
            }



                </div>
            </div>
            
        </div>
    ) 
  }

  async componentDidMount(){
    axios({url:'http://localhost:3000/api/list',params:{_limit:8}}).then(
        (res) => {let reslist=res.data;this.setState({data:reslist.data})}
      );
  }
}

export default Detail;