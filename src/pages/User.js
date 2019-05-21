import React,{Component} from "react";

import '../assets/css/user.css'

import {Link} from 'react-router-dom'

class User extends Component {
  render() {
    let {fans, follow, icon, nikename, time } = this.props.data.data;
    return (
        <div className='usershow'>
            <div className='usershowbox'>
                <div className='usershowpage'>
                    <div className='headimg'><img src={icon} /></div>
                    <div className='nikename'>{nikename}</div>
                    <div className='msg'><a href='#'>follows</a><span>23</span><a href='#'>History</a><span>20</span></div>
                    <div className='des'><p>stray birds of summer come to my window to sing and fly away.
and yellow leaves of autumn, which have no songs, flutter and fall
there with a sign.</p></div>
                </div>
            </div>
        </div>
    ) 
  }
}

export default User;