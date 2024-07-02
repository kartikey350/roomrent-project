import React from 'react'
import './Work.css';


function Work() {
  return (
    <>
	
   <div className='work-base row p-5'>
	<div className='row p-5'>
		<div className='col-6'>
		<div className="lg:py-6 lg:pr-16">
		  <h2 className="mb-8 font-bold text-sky-100 text-4xl primary_text editable">How it works</h2>
			<div className="flex" data-subcontent="step_1">
			<div className="flex flex-col items-center mr-4">
			  <div>
				<div className="flex items-center justify-center w-10 h-10 border rounded-full">
				  <svg className="w-4 text-cyan-100" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
					<line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
					<polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
				  </svg>
				</div>
			  </div>
			  <div className="w-px h-full bg-cyan-300"></div>
			</div>
			<div className="pt-1 pb-8 w-full">
			  <p className="mb-2 text-xl text-cyan-100 font-bold primary_text editable" data-subcontent="step-title">List your property</p>
			  <p className="text-base text-cyan-100 secondary_text editable" data-subcontent="step-content">As a landlord, create a listing for your room or house rental including details such as location, price, and amenities.</p>
			</div>
		  </div>
		  <div className="flex" data-subcontent="step_2">
			<div className="flex flex-col items-center mr-4">
			  <div>
				<div className="flex items-center justify-center w-10 h-10 border rounded-full">
				  <svg className="w-4 text-cyan-100" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
					<line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
					<polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
				  </svg>
				</div>
			  </div>
			  <div className="w-px h-full bg-cyan-300"></div>
			</div>
			<div className="pt-1 pb-8 w-full">
			  <p className="mb-2 text-xl text-cyan-100 font-bold primary_text editable" data-subcontent="step-title">Browse available rentals</p>
			  <p className="text-base text-cyan-100 secondary_text editable" data-subcontent="step-content">Potential tenants can search through our database of listings to find the perfect room or house that fits their needs and budget.</p>
			</div>
		  </div>
		  <div className="flex" data-subcontent="step_3">
			<div className="flex flex-col items-center mr-4">
			  <div>
				<div className="flex items-center justify-center w-10 h-10 border rounded-full">
				  <svg className="w-6 text-cyan-100" stroke="currentColor" viewBox="0 0 24 24">
					<polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
				  </svg>
				</div>
			  </div>

			</div>
			<div className="pt-1 pb-0 w-full">
			<p className="mb-2 text-xl text-cyan-100 font-bold primary_text editable" data-subcontent="step-title">Book the Property</p>
			  <p className="mb-2 text-cyan-100 secondary_text editable" data-subcontent="step-content">Once a potential tenant finds a rental they are interested in, they can contact book the rooms and houses using this plateform.</p>
			</div>
		  </div>
		</div>
		</div>

		<div className='col-5 work-image'></div>
	</div>
   </div>
    </>
  )
}

export default Work
