import React,{Component} from "react";
import {NavLink} from 'react-router-dom'


import '../assets/css/login.css'
import axios from 'axios'

import {Link} from 'react-router-dom'

class Login extends Component {

	state={
    username:'',
    password:'',

  }
  changeIpt = (ev) => {
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  submit = async () => {
    let res = await axios({
      url:'http://localhost:3000/api/login',
      params:{
        username:this.state.username,
        password:this.state.password
      }
    });

    // console.log(res)
    if (res.data.error===0){
      //写入local && 跳转user
      localStorage.setItem('rc_user',JSON.stringify(res.data))
      this.props.history.push('/user')
    } else {
      alert('失败')
    }

	}



  render() {
   
    return (
      <div className="login">
        <div className='loginbox'>
            <div className='loginpage'>

            <div className="loginarea">
					<h3>REGISTERED CUSTOMERS</h3>
					<p>If you have an account with us, please log in.</p>
					<form>
						<div className='user'>
							<span>UserName<label>*</label></span>
							<input type="text"  name="username" value={this.state.username} onChange={this.changeIpt}/> 
						</div>
						<div className='pass'>
							<span>Password<label>*</label></span>
							<input type="password"  name="password" value={this.state.password} onChange={this.changeIpt}/> 
						</div>
						<NavLink className="forgot" to='/reg'>No Account?</NavLink>
						<input type="button" value="Login" className='loginbtn'  onClick={this.submit}/>
					</form>
			   </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Login;