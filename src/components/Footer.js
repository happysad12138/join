import React,{Component} from "react";

import '../assets/css/Footer.css'

import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
   
    return (
      <div className="Footer">
          <div className="footer">
			<div className="col-md-3 foot-1">
				<h4>Quick Links</h4>
				<ul>
					<li><a href="#">||   PSD Style is Awesome</a></li>
					<li><a href="#">||  Categories and More</a></li>
					<li><a href="#">||  Quisit Altici Magunic</a></li>
				</ul>
			</div>
			<div className="col-md-3 foot-1">
				<h4>Favorite Resources</h4>
				<ul>
					<li><a href="#">||   PSD Style is Awesome</a></li>
					<li><a href="#">||   www.psdstyle.net</a></li>
					<li><a href="#">||  Quisit Altici Magunic</a></li>
				</ul>
			</div>
			<div className="col-md-3 foot-1">
				<h4>About Us</h4>
				<ul>
					<li><a href="#">||   PSD Style is Awesome</a></li>
					<li><a href="#">||  Categories and More</a></li>
					<li><a href="#">||  Quisit Altici Magunic</a></li>
				</ul>
			</div>
			<div className="col-md-3 foot-1">
				<h4>Custom Menu</h4>
				<ul>
					<li><a href="#">||   PSD Style is Awesome</a></li>
					<li><a href="#">||  Categories and More</a></li>
					<li><a href="#">||  Quisit Altici Magunic</a></li>
				</ul>
			</div>
			
			<div className="clearfix"> </div>
			
		</div>

      </div>
    );
  }
}

export default Footer;