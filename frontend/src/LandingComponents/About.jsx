import React from 'react'
import './About.css';


function Aboutus() {
  return (
    <>
   
       <div className='about-base p-5 row'>
      <div className='row tracking-widest p-5 justify-content-center text-4xl font-bold text-cyan-100'>ABOUT ROOMIFY</div>
      <div className='row text-gray-100 text-2xl font-bold'>Elevate Your Room Rental Experience with Roomify: The Ultimate Management Solution</div>
      <div className='row  text-gray-100 text-xl p-3'>Are you in search of the perfect room rental for your next adventure? Look no further! Roomify is here to help you find the ideal space for your needs. 
      Our user-friendly platform makes renting a room or house a breeze, with options available for multiple people. Say goodbye to endless searching and let Roomify handle all your rental management needs. 
      Start your journey with us today and discover the perfect place to call home.</div>


      <div className=' row slider-base justify-content-center  '>

        
      <div id="carouselExampleCaptions" className=" col-8   carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="animate-image carousel-inner">


          <div className="about-image carousel-item active"> 
          <img src='https://thearchitectsdiary.com/wp-content/uploads/2017/12/IMGL2478-copy-Large.jpg' alt=''/>
            <div className="carousel-caption d-none d-md-block">
              <h3 className='text-cyan-100 tracking-widest font-bold text-4xl'>Flats </h3>
              <p>Here we provide the flats facility also.</p>
            </div>
           </div>

          <div className="about-image carousel-item">
            <img src='http://www.aposperitis-rooms.com/studio-rooms/photobig/27052014150818-2.JPG' alt=''/>
            <div className="carousel-caption d-none d-md-block">
            <h3 className='text-cyan-100 tracking-widest font-bold text-4xl'>Rooms </h3>
              <p>Here we mainly provides the rooms for the renting purpose in anywhaere.</p>
            </div>
          </div>

          <div className="about-image carousel-item">
            <img src='https://infinitearchitecturedesign.com.au/wp-content/uploads/2018/03/granny-flat.jpg' alt=''/>
            <div className="carousel-caption d-none d-md-block">
            <h3 className='text-cyan-300 tracking-widest font-bold text-4xl'>Houses</h3>
              <p>We also provide a house facility for rent purpose.</p>
            </div>
          </div>


        </div>





        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className=" etxt-cyan-900 carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus
