import React,{Component} from "react";

import '../assets/css/reg.css'

import {Link} from 'react-router-dom'

class Reg extends Component {

	state={
    username:'',
		password:'',
		nikename:''

	}
	
	changeIpt = (ev) => {
    this.setState({
      [ev.target.name]:ev.target.value
    })
	}
	
	submit = () => {
		let formData = new FormData();

		formData.append("username", this.state.username);
		formData.append("password", this.state.password);
		formData.append("nikename", this.state.nikename);
		formData.append("files",'/images/'+this.refs.d1.files[0].name);
		let request = new XMLHttpRequest();
		request.open("POST", "http://localhost:3000/api/reg",false);
		request.send(formData);
		if(JSON.parse(request.responseText).error==0){
		 
			 this.props.history.push('/login')
		}else{
			console.log('注册失败！！！！！')
		}

    // console.log(res)
   

	}
  render() {
   
    return (
      <div className="reg">
        <div className='regbox'>
            <div className='regpage'>

            <div className="regarea">
					<h3>NEW CUSTOMERS
						<input type="file" className="original-upload" accept="image/*" ref="d1"/>
            <a href="javascript:;" className="fake-uploadbtn">上传头像</a>
						</h3>
					<p>If you dont have an account with us, please sign up.</p>
					<form>
						<div className='user'>
							<span>UserName<label>*</label></span>
							<input type="text"   name="username" value={this.state.username} onChange={this.changeIpt}/> 
						</div>
						<div className='pass'>
							<span>Password<label>*</label></span>
							<input type="password"   name="password" value={this.state.password} onChange={this.changeIpt}/> 
						</div>
						<div className='user'>
							<span>nikename<label>*</label></span>
							<input type="text"   name="nikename" value={this.state.nikename} onChange={this.changeIpt}/> 
						</div>
						<Link className="have" to='/login'>Already Have Account?</Link>
						<input type="button" value="Reg" className='regbtn'  onClick={this.submit}/>
					</form>
			   </div>
            </div>
        </div>

      </div>
    );
  }
}

export default Reg;