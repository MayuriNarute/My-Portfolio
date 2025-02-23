import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
  useEffect(()=> {
		document.title = 'Home | Mayuri Narute';
	  },[]);

  return (
    <>
      <section class="home_banner_area">
        <div class="banner_inner">
          <div class="container">

            <div class="row">
            <div class="col-lg-5" id="profile">
              <div
                  class="feature_item text-center"
                  style={{ border: "2px solid #854fee", borderRadius: "50%",width:"90%",height:"90%"}}>
                  <img
                    class="photo"
                    src="img/banner/profile pic.jpeg"
                    alt="My Photo"
                    width="100%"
                  />
                </div>
                  
              </div>
              <div class="col-lg-7">
                <div class="banner_content" id="hometext" style={{background:'#fff'}}>
                  <br />
                  <h3 style={{fontWeight:'500'}}>Hello<span className="wave-emoji">👋</span>, I am</h3>
                  <h1 style={{fontWeight:'550'}}>Mayuri Narute</h1>
                  <h5>Full Stack Java Developer | MERN Stack | SIH'23 Finalist | PCCOE'25 | GPP'22</h5>
                  <div class="d-flex align-items-center">
                    <Link class="primary_btn" style={{textDecoration:'none'}} to="/contact">
                      <span style={{fontWeight:'600'}}>Hire Me</span>
                    </Link>
                    <a class="primary_btn tr-bg" style={{textDecoration:'none'}}  href="img/banner/Mayuri_Narute_7558232254.pdf" download>
                      <span style={{fontWeight:'600'}}>Get Resume</span>
                    </a>
                    <br></br>
                    
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
