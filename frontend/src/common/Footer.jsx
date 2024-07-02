import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div>
      
      <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4 className='text-xl font-bold'>Solutions</h4>
          <ul className="list-unstyled">
            <li><Link href="#"></Link></li>
            <li><Link href="#">Payment Center</Link></li>
            <li><Link href="#">Contact Directory</Link></li>
            <li><Link href="#">Forms</Link></li>
            <li><Link href="#">News and Updates</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4 className='text-xl font-bold'>Support</h4>
          <ul className="list-unstyled">
            <li><Link href="#">Website Tutorial</Link></li>
            <li><Link href="#">Accessibility</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Webmaster</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
       
        <div className="footer-pad">
          <h4 className='text-xl font-bold'>Company</h4>
          <ul className="list-unstyled">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Jobs</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Partners</Link></li>
            <li>
              <Link href="#"></Link>
            </li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><Link href="#" className="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></Link></li>
             <li><Link href="#" className="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></Link></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2024 - Roomify.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
