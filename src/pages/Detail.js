import React,{Component} from "react";

import '../assets/css/detail.css'

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
        <div className='detail'>
            <div className='detailbox'>

{
               data && <div className='detailpage'>
                    <h3 className='back'  onClick={()=>this.props.history.go(-1)}>GOBACK>></h3>
                    
                        <img src={data.img} />
                        <h2>{data.h3}</h2>
                        <p>{data.des}</p>
                    

                </div>
}
            </div>
            
        </div>
    ) 
  }

  async componentDidMount(){
    let id = this.props.match.params.id;
    let dataName = querystring.parse(this.props.location.search).dataName;
    let res = await axios({url:`http://localhost:3000/api/${dataName}/${id}`});
   
    this.setState({data:res.data.data})
  }
}

export default Detail;