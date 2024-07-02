import Userheader from "../common/Userheader";
import "./Userhome.css";
import Footer from "../common/Footer";

const Userhome = () => {
    return(
        <>
        <Userheader/>
        <div className="userhome-base">
               
                  <div class="container userhome-main">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> WELL COME TO ROOMIFY</h3>
              </div>
            </div>
            </div>
                
                
            
        
        </div>
        <Footer/>
        
        </>
    );
}

export default Userhome;