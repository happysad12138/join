import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import style from '../assets/css/Header.module.css'
import $ from 'jquery'


class Header extends Component{
    render(){
        return (
            <div className={style.header}>
		<div className={style.container}>
			<div className={style.logo}>
				<a href="index.html"><img src="/images/logo.png" className={style["img-responsive"]} alt="" /></a>
			</div>
			
				<div className={style["head-nav"]}>
					<span className={style.menu}> </span>
						<ul className={style["cl-effect-1"]}>
							<li><NavLink to='/home' activeClassName={style.active}>Home</NavLink></li>
							<li><NavLink to='/user'  activeClassName={style.active}>Mypage</NavLink></li>
							
							<li><NavLink to='/list' activeClassName={style.active} >detaillist</NavLink></li>
							
							<li><NavLink to='/login' activeClassName={style.active} >Login</NavLink></li>
							
							
							<div className={style.clearfix}> </div>
						</ul>
				</div>
				
						
			
					<div className={style.clearfix}> </div>
		</div>
	</div>
        )
	}
	componentDidMount(){
	
		$( "span.Header_menu__1QrI8" ).click(function() {
			console.log(1)
			 $( ".Header_head-nav__1Hc5F ul" ).slideToggle(300, function() {
				// Animation complete.
					 });
						});
						$( ".Header_head-nav__1Hc5F ul li").click(function(){
							$( ".Header_head-nav__1Hc5F ul" ).css({'display':'none'})	
						})
						
	}
}
export default Header