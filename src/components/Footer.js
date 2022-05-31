import React from "react";


class Footer extends React.Component {
    render(){
        return (
            

                <footer className="container-fluid my-5 bg-dark text-info py-2" >
                            <form action="">
              
                <div className="row">
               
                    <div className="col-auto mb-4 mb-md-0">
                    <p className="pt-2 ">
                        <strong>Sign up for our newsletter</strong>
                    </p>
                    </div>
                  

                
                    <div className="col-md-5 col-12 mb-4 mb-md-0">
              
                    <div className="form-outline mb-4">
                        <input type="email" id="form5Example25"  className="form-control" />
                        <label  className="form-label" htmlFor="form5Example25">Email address</label>
                    </div>
                    </div>
 

                    <div  className="col-auto mb-4 mb-md-0">
             
                    <button type="submit"  className="btn btn-primary mb-4">
                        Subscribe
                    </button>
                    </div>
              
                </div>
          
                </form>

                   
                    <div className="text-center text-white p-3" >
                    © 2022 Copyright: Rupinder Singh, Shubham Gupta, Ashutosh Mishra 
                    </div>
                    
                </footer>
                
     
        )
    }
}
  
export default Footer;
  