import React, {Component} from 'react';



class Header extends Component {
  render () {
    return (
    <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid ">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                   
                                        <img src="/img/logo.png" alt="" />
                                   
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      <div className="bradcam_area bradcam_bg_1">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>Search For Developer Jobs Near You</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
      
      
    </header>
      
    
    

  
    
    );
  }
  
}


export default Header;