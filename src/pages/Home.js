import React,{Component} from "react";

import Swiper from "../components/Swiper";
import Header from "../components/Header";
import Cell from "../components/Cell";
import Loading from '../components/Loading'

import axios from 'axios';

class Home extends Component {
  state={
    cells:[],
    banners:[],
    loading:true
  };

  render() {
    return (
      
      <div>
        {
         <Swiper {...this.props} banners={this.state.banners} dataName="swiper"/>}
        
         <Cell cells={this.state.cells} dataName="banner"/>
      </div>
      
    );
  }
   async componentDidMount(){

    let resSwiper = await axios({url:'http://localhost:3000/api/swiper'});
    
    this.setState({banners:resSwiper.data.data})

    axios({url:'http://localhost:3000/api/banner',params:{_limit:4}}).then(
      (res) => {
        let resBanner=res.data;
        this.setState({cells:resBanner.data,loading:false});

         
      
      
      }
    );
    

  }
}

export default Home;