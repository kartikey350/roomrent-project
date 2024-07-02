import React from 'react'
import './Main.css';

function Main() {
  return (
    <>
    <div className='main-base row p-5'>
		<div className='main-heading row p-5 justify-content-center'>Live in Luxury: Find Your Perfect<br></br> Room with Roomify</div>
		<div className='main-content row  p-4 justify-content-center'>Upgrade your room rental experience with Roomify. Find the perfect living space for you and your roommates without any hassle or stress.</div>

		<div className='row p-5 justify-content-center'>
			<div className='col-5 mian-input'><input className='main-input' type='email' placeholder='Enter your e-mail...' required/></div>
			<div className='main-button btn btn-info col-4'> Get Started</div>
		</div>
	</div>
    </>
  )
}

export default Main
